// ============================================================
// APPWRITE CONFIG — S&S Cookies
// ============================================================
var APPWRITE_CONFIG = {
  endpoint:   'https://sfo.cloud.appwrite.io/v1',
  projectId:  '', // '69f0f581003cc24b99e2' (Pausado por inatividade no console Appwrite)
  databaseId: '69f0f96600256e20bff0',   // ← sem espaço no final
  collections: {
    flavors:       'flavors',
    testimonials:  'testimonials',
    specialOrders: 'special_orders',
    productReviews: 'product_reviews'
  },
  bucketId: '69f0fe02003461a19b74'       // ← fora de collections
};

// ============================================================
// Detecta se Appwrite está configurado (IDs reais preenchidos)
// ============================================================
function isAppwriteConfigured() {
  return typeof APPWRITE_CONFIG.projectId === 'string'
    && APPWRITE_CONFIG.projectId.length > 5
    && !APPWRITE_CONFIG.projectId.startsWith('SEU_');
}

// ============================================================
// SDK Setup
// ============================================================
var appwriteClient, appwriteAccount, appwriteDatabases, appwriteStorage, AppwriteID, AppwriteQuery;

try {
  appwriteClient    = new Appwrite.Client()
    .setEndpoint(APPWRITE_CONFIG.endpoint)
    .setProject(APPWRITE_CONFIG.projectId);
  appwriteAccount   = new Appwrite.Account(appwriteClient);
  appwriteDatabases = new Appwrite.Databases(appwriteClient);
  appwriteStorage   = new Appwrite.Storage(appwriteClient);
  AppwriteID        = Appwrite.ID;
  AppwriteQuery     = Appwrite.Query;
} catch (e) {
  console.warn('[Appwrite] SDK não carregado:', e.message);
}

// ============================================================
// AUTH
// ============================================================
async function awLogin(email, password) {
  if (!isAppwriteConfigured()) return null;
  try {
    await appwriteAccount.createEmailPasswordSession(email, password);
    return await awGetCurrentUser();
  } catch (err) {
    console.error('[Appwrite] Login error:', err);
    throw err;
  }
}

async function awLogout() {
  if (!isAppwriteConfigured()) return;
  try {
    await appwriteAccount.deleteSession('current');
  } catch (e) { /* já deslogado */ }
}

async function awRegister(name, email, password) {
  if (!isAppwriteConfigured()) return null;
  try {
    await appwriteAccount.create(AppwriteID.unique(), email, password, name);
    return await awLogin(email, password);
  } catch (err) {
    console.error('[Appwrite] Register error:', err);
    throw err;
  }
}

async function awGetCurrentUser() {
  if (!isAppwriteConfigured()) return null;
  try {
    var user = await appwriteAccount.get();
    var prefs = user.prefs || {};
    return {
      name:       user.name || user.email.split('@')[0],
      email:      user.email,
      role:       user.email === 'oficialplique@gmail.com' ? 'admin' : 'user',
      desc:       prefs.desc || (user.email === 'oficialplique@gmail.com' ? 'Administrador Principal' : 'Amante de Cookies'),
      avatar:     prefs.avatar || '',
      appwriteId: user.$id
    };
  } catch (e) {
    return null;
  }
}

async function awUpdateUserPrefs(prefs) {
  if (!isAppwriteConfigured()) return;
  try {
    var current = await appwriteAccount.get();
    var merged  = Object.assign({}, current.prefs || {}, prefs);
    await appwriteAccount.updatePrefs(merged);
  } catch (e) { console.error('[Appwrite] Update prefs error:', e); }
}

async function awUpdateUserName(name) {
  if (!isAppwriteConfigured()) return;
  try {
    await appwriteAccount.updateName(name);
  } catch (e) { console.error('[Appwrite] Update name error:', e); }
}

// ============================================================
// STORAGE — Upload de imagem → retorna URL pública
// ============================================================
async function awUploadImage(file) {
  if (!isAppwriteConfigured()) return null;
  try {
    var result = await appwriteStorage.createFile(
      APPWRITE_CONFIG.bucketId,
      AppwriteID.unique(),
      file
    );
    return appwriteStorage.getFilePreview(APPWRITE_CONFIG.bucketId, result.$id);
  } catch (e) {
    console.error('[Appwrite] Upload error:', e);
    return null;
  }
}

// ============================================================
// FLAVORS (Cardápio)
// ============================================================
async function awGetFlavors() {
  if (!isAppwriteConfigured()) return null;
  try {
    var res = await appwriteDatabases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.flavors,
      [AppwriteQuery.limit(100)]
    );
    var flavors = {};
    res.documents.forEach(function(doc) {
      flavors[doc.$id] = {
        name:        doc.name,
        price:       doc.price,
        image:       doc.image || '',
        descLong:    doc.descLong || '',
        tag:         doc.tag || 'Premium',
        tagClass:    doc.tagClass || 'badge-primary',
        weight:      doc.weight || '80g',
        calories:    doc.calories || '380 kcal',
        shelfLife:   doc.shelfLife || '7 dias',
        allergens:   doc.allergens || '',
        pairings:    doc.pairings || '',
        ingredients: [],
        _docId:      doc.$id
      };
    });
    return flavors;
  } catch (e) {
    console.error('[Appwrite] Get flavors error:', e);
    return null;
  }
}

async function awSaveFlavor(docId, data) {
  if (!isAppwriteConfigured()) return docId;
  try {
    var payload = {
      name:     data.name,
      price:    data.price,
      image:    data.image || '',
      descLong: data.descLong || '',
      tag:      data.tag || 'Premium',
      tagClass: data.tagClass || 'badge-primary'
    };
    if (!docId || docId === 'new') {
      var doc = await appwriteDatabases.createDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.collections.flavors,
        AppwriteID.unique(),
        payload
      );
      return doc.$id;
    } else {
      await appwriteDatabases.updateDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.collections.flavors,
        docId,
        payload
      );
      return docId;
    }
  } catch (e) {
    console.error('[Appwrite] Save flavor error:', e);
    throw e;
  }
}

async function awDeleteFlavor(docId) {
  if (!isAppwriteConfigured()) return;
  try {
    await appwriteDatabases.deleteDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.flavors,
      docId
    );
  } catch (e) {
    console.error('[Appwrite] Delete flavor error:', e);
    throw e;
  }
}

// ============================================================
// TESTIMONIALS (Depoimentos)
// ============================================================
async function awGetTestimonials() {
  if (!isAppwriteConfigured()) return null;
  try {
    var res = await appwriteDatabases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.testimonials,
      [AppwriteQuery.limit(100)]
    );
    return res.documents.map(function(doc) {
      return {
        name:        doc.name,
        initials:    doc.initials || doc.name.substring(0,2).toUpperCase(),
        text:        doc.text,
        stars:       doc.stars || 5,
        date:        doc.date || '',
        highlighted: doc.highlighted || false,
        _docId:      doc.$id
      };
    });
  } catch (e) {
    console.error('[Appwrite] Get testimonials error:', e);
    return null;
  }
}

async function awSaveTestimonial(docId, data) {
  if (!isAppwriteConfigured()) return docId;
  try {
    var payload = {
      name:        data.name,
      initials:    data.initials || data.name.substring(0,2).toUpperCase(),
      text:        data.text,
      stars:       data.stars || 5,
      date:        data.date || new Date().toLocaleDateString('pt-BR'),
      highlighted: data.highlighted || false
    };
    if (!docId) {
      var doc = await appwriteDatabases.createDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.collections.testimonials,
        AppwriteID.unique(),
        payload
      );
      return doc.$id;
    } else {
      await appwriteDatabases.updateDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.collections.testimonials,
        docId,
        payload
      );
      return docId;
    }
  } catch (e) {
    console.error('[Appwrite] Save testimonial error:', e);
    throw e;
  }
}

async function awDeleteTestimonial(docId) {
  if (!isAppwriteConfigured()) return;
  try {
    await appwriteDatabases.deleteDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.testimonials,
      docId
    );
  } catch (e) {
    console.error('[Appwrite] Delete testimonial error:', e);
    throw e;
  }
}

// ============================================================
// PRODUCT REVIEWS (Avaliações de Produtos)
// ============================================================
async function awGetProductReviews(productId) {
  if (!isAppwriteConfigured()) return null;
  try {
    var res = await appwriteDatabases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.productReviews,
      [
        AppwriteQuery.equal('productId', productId),
        AppwriteQuery.limit(100),
        AppwriteQuery.orderDesc('$createdAt')
      ]
    );
    return res.documents.map(function(doc) {
      return {
        productId:   doc.productId,
        name:        doc.name,
        avatar:      doc.avatar || '',
        text:        doc.text,
        stars:       doc.stars || 5,
        date:        doc.date || '',
        _docId:      doc.$id
      };
    });
  } catch (e) {
    console.error('[Appwrite] Get product reviews error:', e);
    return null;
  }
}

async function awSaveProductReview(data) {
  if (!isAppwriteConfigured()) return null;
  try {
    var payload = {
      productId:   data.productId,
      name:        data.name,
      avatar:      data.avatar || '',
      text:        data.text,
      stars:       data.stars || 5,
      date:        data.date || new Date().toLocaleDateString('pt-BR')
    };
    var doc = await appwriteDatabases.createDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.productReviews,
      AppwriteID.unique(),
      payload
    );
    return doc.$id;
  } catch (e) {
    console.error('[Appwrite] Save product review error:', e);
    throw e;
  }
}

// ============================================================
// SPECIAL ORDERS (Eventos / Encomendas)
// ============================================================
async function awGetSpecialOrders() {
  if (!isAppwriteConfigured()) return null;
  try {
    var res = await appwriteDatabases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.collections.specialOrders,
      [AppwriteQuery.limit(1)]
    );
    if (res.documents.length > 0) {
      var doc = res.documents[0];
      return {
        title:      doc.title,
        desc:       doc.desc,
        bgColor:    doc.bgColor || '#FFF0F3',
        eventImage: doc.eventImage || '',
        _docId:     doc.$id
      };
    }
    return null;
  } catch (e) {
    console.error('[Appwrite] Get special orders error:', e);
    return null;
  }
}

// docId guardado em memória para updates
var _specialOrdersDocId = null;

async function awSaveSpecialOrders(data) {
  if (!isAppwriteConfigured()) return;
  try {
    var payload = {
      title:      data.title,
      desc:       data.desc,
      bgColor:    data.bgColor || '#FFF0F3',
      eventImage: data.eventImage || ''
    };
    if (!_specialOrdersDocId) {
      var existing = await awGetSpecialOrders();
      if (existing) _specialOrdersDocId = existing._docId;
    }
    if (_specialOrdersDocId) {
      await appwriteDatabases.updateDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.collections.specialOrders,
        _specialOrdersDocId,
        payload
      );
    } else {
      var doc = await appwriteDatabases.createDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.collections.specialOrders,
        AppwriteID.unique(),
        payload
      );
      _specialOrdersDocId = doc.$id;
    }
  } catch (e) {
    console.error('[Appwrite] Save special orders error:', e);
    throw e;
  }
}
