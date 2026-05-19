// ========== CONFIGURAÇÃO DO WHATSAPP ==========
var WHATSAPP_NUM = '5551989317331';

// Função para gerar link da API do WhatsApp com qualquer mensagem
function gerarLinkWhatsApp(mensagem) {
  return 'https://api.whatsapp.com/send/?phone=' + WHATSAPP_NUM + '&text=' + encodeURIComponent(mensagem) + '&type=phone_number&app_absent=0';
}

// Função para copiar o link do site para a área de transferência
function copyLinkToClipboard() {
  var url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function() {
      alert('Link do site copiado para a área de transferência!');
    }).catch(function(err) {
      console.error('Erro ao copiar: ', err);
    });
  } else {
    // Fallback para navegadores mais antigos
    var textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert('Link do site copiado para a área de transferência!');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  }
}

// Dados dos sabores
var flavorData = {
  'tradicional': {
    name: 'Tradicional', tag: 'Clássico', tagClass: 'badge-primary', price: 'R$ 10,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/132cb3571-674a-431d-9946-5fa256fcac44.png',
    descLong: 'O cookie que deu início à S&S Cookies. Nossa receita original, aprimorada ao longo de anos, combina uma massa amanteigada irresistível com gotas generosas de chocolate meio amargo 70% cacau. Cada cookie é assado individualmente para garantir a textura perfeita: crocante nas bordas e macio e chewy no centro.',
    ingredients: ['Farinha de trigo premium', 'Manteiga sem sal', 'Chocolate meio amargo 70%', 'Açúcar demerara', 'Ovos caipira', 'Extrato de baunilha', 'Sal marinho', 'Fermento natural'],
    weight: '80g', calories: '380 kcal', shelfLife: '7 dias', allergens: 'Glúten, Leite, Ovo', pairings: 'Café preto, Chá Earl Grey, Leite gelado'
  },
  'pistache': {
    name: 'Pistache', tag: '🔥 Mais Vendido', tagClass: 'badge-popular', price: 'R$ 14,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/17066a2a6-bf08-4aaf-9d04-43e0d79a54bb.png',
    descLong: 'Nosso sabor mais amado! Este cookie luxuoso é recheado com um creme de pistache autêntico, feito com pistaches importados da Sicília. A massa dourada e amanteigada recebe pedaços generosos de pistache torrado que adicionam uma crocância irresistível.',
    ingredients: ['Pistache importado (Sicília)', 'Creme de pistache artesanal', 'Farinha de trigo premium', 'Manteiga francesa', 'Açúcar demerara', 'Ovos caipira', 'Sal marinho', 'Fermento natural'],
    weight: '85g', calories: '420 kcal', shelfLife: '7 dias', allergens: 'Glúten, Leite, Ovo, Pistache', pairings: 'Café cappuccino, Chá verde, Vinho do Porto'
  },
  'chocolate': {
    name: 'Chocolate', tag: 'Premium', tagClass: 'badge-premium', price: 'R$ 12,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/1a1c13085-9321-45ca-9bdf-4e34d0860825.png',
    descLong: 'Para os verdadeiros chocólatras! Este cookie leva cacau belga de alta qualidade na massa, combinado com chunks generosos de chocolate ao leite e chocolate meio amargo.',
    ingredients: ['Cacau belga', 'Chocolate ao leite belga', 'Chocolate meio amargo 70%', 'Farinha de trigo', 'Manteiga sem sal', 'Açúcar demerara', 'Ovos caipira', 'Sal marinho'],
    weight: '85g', calories: '410 kcal', shelfLife: '7 dias', allergens: 'Glúten, Leite, Ovo', pairings: 'Café espresso, Leite quente, Whisky bourbon'
  },
  'red-velvet': {
    name: 'Red Velvet', tag: 'Novo', tagClass: 'badge-new', price: 'R$ 13,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/19217130b-cebd-4c69-9283-222420974068.png',
    descLong: 'Inspirado no clássico bolo americano, nosso cookie Red Velvet traz a cor vibrante e o sabor inconfundível da receita tradicional. O grande diferencial é o centro recheado com cream cheese frosting artesanal.',
    ingredients: ['Cream cheese artesanal', 'Cacau em pó', 'Corante natural (beterraba)', 'Farinha de trigo', 'Manteiga sem sal', 'Açúcar refinado', 'Ovos caipira', 'Vinagre de maçã'],
    weight: '80g', calories: '390 kcal', shelfLife: '5 dias', allergens: 'Glúten, Leite, Ovo', pairings: 'Champagne, Café latte, Chá de frutas vermelhas'
  },
  'avela': {
    name: 'Avelã', tag: 'Artesanal', tagClass: 'badge-primary', price: 'R$ 14,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/16bc32ec1-8600-4de3-bba6-1a765270b2a0.png',
    descLong: 'Inspirado nos sabores europeus, este cookie celebra a nobre avelã piemontesa. A massa recebe uma generosa porção de creme de avelã artesanal e é enriquecida com pedaços de avelã caramelizada.',
    ingredients: ['Avelã piemontesa IGP', 'Creme de avelã artesanal', 'Farinha de trigo', 'Manteiga francesa', 'Açúcar demerara', 'Ovos caipira', 'Caramelo artesanal', 'Sal marinho'],
    weight: '85g', calories: '430 kcal', shelfLife: '7 dias', allergens: 'Glúten, Leite, Ovo, Avelã', pairings: 'Café com leite, Nutella quente, Licor de avelã'
  },
  'brigadeiro': {
    name: 'Brigadeiro', tag: 'Brasileiro', tagClass: 'badge-primary', price: 'R$ 12,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/1b5179d17-c3c7-410d-a68a-3ca319632d84.png',
    descLong: 'O sabor mais brasileiro da nossa coleção! Este cookie combina uma massa de chocolate rica e intensa com um recheio cremoso de brigadeiro gourmet feito com chocolate belga e leite condensado premium.',
    ingredients: ['Chocolate belga', 'Leite condensado premium', 'Manteiga sem sal', 'Farinha de trigo', 'Cacau em pó', 'Granulado crocante', 'Ovos caipira', 'Sal marinho'],
    weight: '85g', calories: '400 kcal', shelfLife: '7 dias', allergens: 'Glúten, Leite, Ovo', pairings: 'Café coado, Leite gelado, Suco de laranja'
  },
  'full-choco': {
    name: 'Full Choco', tag: 'Premium', tagClass: 'badge-premium', price: 'R$ 15,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/15a38f7fd-f9e5-46f5-903c-5c2c9622f28a.png',
    descLong: 'Nosso cookie mais indulgente! Uma experiência triplo chocolate: massa de chocolate belga, recheio generoso de ganache de chocolate meio amargo e uma cobertura brilhante de chocolate belga derretido.',
    ingredients: ['Chocolate belga 3 tipos', 'Ganache de chocolate', 'Cacau em pó', 'Farinha de trigo', 'Manteiga francesa', 'Creme de leite fresco', 'Açúcar demerara', 'Ovos caipira'],
    weight: '90g', calories: '450 kcal', shelfLife: '5 dias', allergens: 'Glúten, Leite, Ovo', pairings: 'Espresso duplo, Vinho tinto, Leite quente'
  },
  'craqueladas': {
    name: 'Craqueladas', tag: 'Exclusivo', tagClass: 'badge-new', price: 'R$ 11,00',
    image: 'https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/12b3cf5fb-fcf2-4037-ac06-a33bcc84578b.png',
    descLong: 'Um cookie com uma textura verdadeiramente única! A crosta craquelada de açúcar se forma durante o processo de assamento, criando um padrão visual deslumbrante que esconde um interior macio e saboroso.',
    ingredients: ['Açúcar cristal (crosta)', 'Baunilha de Madagascar', 'Farinha de trigo premium', 'Manteiga sem sal', 'Ovos caipira', 'Açúcar demerara', 'Fermento natural', 'Sal marinho'],
    weight: '75g', calories: '350 kcal', shelfLife: '10 dias', allergens: 'Glúten, Leite, Ovo', pairings: 'Chá de camomila, Cappuccino, Suco de maçã'
  }
};

var testimonialData = [
  { name: 'Maria S.', initials: 'MS', text: 'Melhor cookie que já comi na vida! O de pistache é surreal, e a entrega foi super rápida. Já virei cliente fiel!', stars: 5, date: '15/03/2026' },
  { name: 'Rafael O.', initials: 'RO', text: 'Comprei para o aniversário da minha esposa e ela amou! A apresentação é linda e o sabor é incomparável.', stars: 5, date: '22/02/2026' },
  { name: 'Ana C.', initials: 'AC', text: 'Encomendei 50 cookies para um evento corporativo e foi um sucesso absoluto. Todos elogiaram muito!', stars: 5, date: '10/01/2026' },
  { name: 'Pedro L.', initials: 'PL', text: 'O Full Choco é de outro mundo. Massa crocante, recheio cremoso... perfeito com um café. Recomendo demais!', stars: 5, date: '05/04/2026' },
  { name: 'Julia M.', initials: 'JM', text: 'Sempre peço o de brigadeiro e red velvet. São viciantes! O atendimento pelo WhatsApp é excelente.', stars: 4, date: '18/03/2026' }
];

var faqData = [
  { q: 'Qual o prazo de entrega?', a: 'Produzimos os cookies frescos no dia da entrega. Pedidos realizados até as 10h podem ser entregues no mesmo dia, sujeito à disponibilidade. Após as 10h, a entrega é agendada para o dia seguinte.' },
  { q: 'Os cookies contêm glúten?', a: 'Sim, todos os nossos cookies são feitos com farinha de trigo tradicional. Não possuímos linha sem glúten no momento, mas estamos desenvolvendo receitas alternativas.' },
  { q: 'Posso personalizar as caixas?', a: 'Sim! Oferecemos caixas Kraft ecológicas, caixas brancas premium com laço, ou caixas personalizadas com mensagem. Para eventos corporativos, incluímos logomarca.' },
  { q: 'Qual a validade dos cookies?', a: 'Recomendamos consumir em até 7 dias. Red Velvet: 5 dias. Armazene em local seco e arejado. Podem ser congelados por até 30 dias.' },
  { q: 'Vocês entregam em toda a cidade?', a: 'Entregamos em toda a região metropolitana. Para outras localidades, consulte-nos pelo WhatsApp. Também oferecemos retirada no local, de segunda a sábado, 9h às 18h.' },
  { q: 'Qual o pedido mínimo?', a: 'Não há pedido mínimo! Você pode pedir a partir de 1 cookie. Caixas com 6 unidades têm 10% de desconto e com 12 unidades, 20%.' },
  { q: 'Quais formas de pagamento?', a: 'Aceitamos PIX, cartão de débito/crédito (via link seguro) e dinheiro na entrega. Para corporativos acima de R$500, emitimos nota fiscal e oferecemos boleto.' },
  { q: 'Vocês atendem eventos e festas?', a: 'Sim! Atendemos casamentos, aniversários, chás de bebê, confraternizações e qualquer ocasião. Kits personalizados e degustação prévia para eventos acima de 100 unidades.' }
];

var stepData = [
  { title: 'Escolha seus Sabores', desc: 'Navegue pelo nosso catálogo com 8 sabores exclusivos. Você pode escolher cookies avulsos ou montar sua caixa personalizada com 6 ou 12 unidades.', detail: '• 8 sabores exclusivos\n• Caixas de 6 ou 12 unidades\n• Monte sua combinação\n• Desconto por quantidade' },
  { title: 'Faça seu Pedido', desc: 'Após escolher seus sabores, entre em contato pelo WhatsApp. Nossa equipe confirma sabores, quantidades e detalhes da entrega em poucos minutos.', detail: '• Atendimento humanizado\n• Confirmação em minutos\n• Agendamento de entrega\n• Pagamento seguro' },
  { title: 'Receba em Casa', desc: 'Seus cookies são preparados frescos no dia da entrega. Nossa embalagem protege para que cheguem em perfeitas condições.', detail: '• Cookies frescos do dia\n• Embalagem protetora\n• Entregadores dedicados\n• Rastreamento em tempo real' }
];

var orderTypeData = {
  'geral': { title: 'Encomendas Especiais', desc: 'Caixas personalizadas de cookies artesanais preparadas com carinho e atenção aos detalhes.', icon: '🎁' },
  'presentes': { title: 'Cookies para Presentes', desc: 'Caixas presente com fitas de cetim e cartões personalizados com sua mensagem.', icon: '🎁' },
  'aniversarios': { title: 'Cookies para Aniversários', desc: 'Caixas temáticas, toppers personalizados e combinações de sabores para o aniversariante.', icon: '🎂' },
  'casamentos': { title: 'Cookies para Casamentos', desc: 'Lembrancinhas, mesa de doces ou presente para convidados. Embalagens sofisticadas.', icon: '💍' },
  'corporativo': { title: 'Cookies Corporativos', desc: 'Confraternizações, presentes de fim de ano. Personalização com logomarca e notas fiscais.', icon: '🏢' }
};

// ========== MODAL ==========
var modalOverlay = document.getElementById('modal-overlay');
var modalContent = document.getElementById('modal-content');
var modalTitle = document.getElementById('modal-title');
var modalBody = document.getElementById('modal-body');
var lastFocusEl = null;

function openModal() {
  lastFocusEl = document.activeElement;
  modalOverlay.classList.add('active');
  modalContent.classList.add('active');
  document.body.classList.add('modal-open');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}
function closeAllModals() {
  modalOverlay.classList.remove('active');
  modalContent.classList.remove('active');
  document.body.classList.remove('modal-open');
  
  // Esconde o botão de review ao fechar modal
  var floatBtn = document.getElementById('floating-review-btn');
  if (floatBtn) floatBtn.classList.remove('active');
  
  currentProductId = null;
  if (lastFocusEl) lastFocusEl.focus();
}

// ========== COOKIE RAIN ==========
function createCookieRain() {
  const container = document.createElement('div');
  container.className = 'cookie-rain-container';
  document.body.appendChild(container);

  const cookies = ['🍪', '🍪', '🍪', '🍪', '✨'];
  const count = 30;

  for (let i = 0; i < count; i++) {
    const cookie = document.createElement('div');
    cookie.className = 'floating-cookie';
    cookie.textContent = cookies[Math.floor(Math.random() * cookies.length)];
    cookie.style.left = Math.random() * 100 + 'vw';
    cookie.style.animationDuration = (Math.random() * 5 + 5) + 's';
    cookie.style.animationDelay = (Math.random() * 5) + 's';
    cookie.style.fontSize = (Math.random() * 10 + 15) + 'px';
    container.appendChild(cookie);
  }
}
document.addEventListener('DOMContentLoaded', createCookieRain);

// ========== FUNÇÕES QUE ABREM MODAL COM BOTÃO WHATSAPP ==========
function openFlavorDetail(el, flavorId) {
  var f = flavorData[flavorId];
  if (!f) return;

  if (el && typeof gsap !== 'undefined') {
    gsap.to(el, { rotationY: 180, scale: 1.05, duration: 0.6, ease: "power2.inOut", onComplete: function() { gsap.set(el, { rotationY: 0, scale: 1 }); } });
  }

  modalBody.innerHTML =
    '<div class="modal-mini-content" style="padding:var(--space-xl) var(--space-lg);min-height:auto">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      '<div class="modal-mini-image-container" style="width:100px;height:100px;margin-bottom:var(--space-md);border:3.5px solid #ebdcc5;box-shadow:0 8px 20px rgba(0,0,0,0.4), 0 0 15px rgba(228, 130, 181, 0.15);background:#1c0722;border-radius:50%;overflow:hidden"><img class="modal-mini-image" src="' + f.image + '" alt="' + f.name + '"></div>' +
      '<h2 class="modal-mini-title" style="font-size:1.5rem;margin-bottom:12px">' + f.name + '</h2>' +
      '<p class="modal-mini-desc" style="font-size:0.875rem;margin-bottom:var(--space-md);line-height:1.4">' + f.descLong.substring(0, 150) + '...</p>' +
      '<div class="modal-info-grid" style="grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:var(--space-lg)">' +
        '<div class="modal-info-item" style="padding:4px"><div class="modal-info-label" style="font-size:0.6rem">Peso</div><div class="modal-info-value" style="font-size:0.75rem">' + f.weight + '</div></div>' +
        '<div class="modal-info-item" style="padding:4px"><div class="modal-info-label" style="font-size:0.6rem">Cal</div><div class="modal-info-value" style="font-size:0.75rem">' + f.calories.split(' ')[0] + '</div></div>' +
        '<div class="modal-info-item" style="padding:4px"><div class="modal-info-label" style="font-size:0.6rem">Val</div><div class="modal-info-value" style="font-size:0.75rem">' + f.shelfLife + '</div></div>' +
        '<div class="modal-info-item" style="padding:4px"><div class="modal-info-label" style="font-size:0.6rem">Alér</div><div class="modal-info-value" style="font-size:0.75rem">Sim</div></div>' +
      '</div>' +
      '<p class="modal-mini-price" style="font-size:1.25rem;margin-bottom:var(--space-lg)">' + f.price + '</p>' +
      '<a href="' + gerarLinkWhatsApp('Olá! Gostaria de encomendar o cookie: ' + f.name) + '" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener noreferrer" style="padding:12px">' +
      '<i data-lucide="message-circle"></i> Pedir Agora</a>' +
    '</div>';
  
  currentProductId = flavorId;
  var floatBtn = document.getElementById('floating-review-btn');
  if (floatBtn) floatBtn.classList.add('active');

  setTimeout(openModal, 200);
}

function openMothersDayQuote(flavorId) {
  const quotes = [
    "Mãe: o amor mais doce que a vida já me deu. ❤️",
    "Para a pessoa que torna cada dia mais especial. Feliz Dia das Mães! 🌸",
    "Um cookie doce para a mãe mais incrível do mundo. 🍪✨",
    "O segredo do nosso sabor é o amor, assim como o seu, Mãe. 💖",
    "Celebrando a doçura de quem sempre cuidou de nós. 💝"
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
  modalBody.innerHTML =
    '<div class="modal-mini-content pink-modal" style="padding:var(--space-2xl);background:#FFF5F7">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      '<div style="font-size:4rem;margin-bottom:var(--space-lg)">💝</div>' +
      '<h2 class="modal-mini-title" style="color:var(--color-pink-dark)">Dia das Mães</h2>' +
      '<p class="modal-mini-desc" style="font-style:italic;font-size:1.125rem;color:var(--color-secondary);line-height:1.6;margin-bottom:var(--space-xl)">"' + quote + '"</p>' +
      '<div style="font-size:2rem;margin-bottom:var(--space-xl)">💖✨💖</div>' +
      '<a href="' + gerarLinkWhatsApp('Olá! Gostaria de encomendar um kit de Dia das Mães!') + '" class="btn btn-pink btn-block" target="_blank" rel="noopener noreferrer">' +
      '<i data-lucide="heart"></i> Presentear Minha Mãe</a>' +
    '</div>';
  openModal();
}

function openTestimonialDetail(index) {
  var t = testimonialData[index];
  if (!t) return;
  var starsHtml = '';
  for (var i = 0; i < 5; i++) starsHtml += i < t.stars ? '★' : '☆';
  modalBody.innerHTML =
    '<div class="modal-mini-content">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      '<div class="modal-mini-image-container" style="background:var(--color-primary-light);color:var(--color-primary-dark);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700">' + t.initials + '</div>' +
      '<div class="testimonial-stars" style="font-size:1.5rem;margin-bottom:var(--space-md)">' + starsHtml + '</div>' +
      '<h2 class="modal-mini-title">' + t.name + '</h2>' +
      '<p class="modal-mini-desc" style="font-style:italic">"' + t.text + '"</p>' +
      '<span class="test-detail-verified"><i data-lucide="check-circle"></i> Cliente verificado — ' + t.date + '</span>' +
      '<div style="margin-top:var(--space-xl);width:100%">' +
        '<a href="' + gerarLinkWhatsApp('Olá! Vi o depoimento de ' + t.name + ' e quero experimentar os cookies!') + '" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener noreferrer">' +
        '<i data-lucide="message-circle"></i> Quero experimentar também</a>' +
      '</div>' +
    '</div>';
  openModal();
}

function toggleFaq(el) {
  var item = el.parentElement;
  var isActive = item.classList.contains('active');
  
  // Opcional: Fechar outros itens abertos
  document.querySelectorAll('.accordion-item').forEach(function(i) {
    i.classList.remove('active');
  });

  if (!isActive) {
    item.classList.add('active');
  }
}

// Mantendo para compatibilidade ou uso futuro se necessário
function openFaqDetail(index) {
  var faq = faqData[index];
  if (!faq) return;
  // Agora apenas simula o clique para expandir o item correspondente se estiver visível
  var items = document.querySelectorAll('.accordion-item');
  if (items[index]) {
    toggleFaq(items[index].querySelector('.accordion-trigger'));
  }
}

function openStepDetail(stepNum) {
  var s = stepData[stepNum - 1];
  if (!s) return;
  var descHtml = s.desc.replace(/\n/g, '<br>');
  var detailHtml = s.detail.replace(/\n/g, '<br>');
  modalBody.innerHTML =
    '<div class="modal-mini-content">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      '<div class="modal-mini-image-container" style="background:var(--color-primary);color:white;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:700">' + stepNum + '</div>' +
      '<h2 class="modal-mini-title">' + s.title + '</h2>' +
      '<p class="modal-mini-desc">' + descHtml + '</p>' +
      '<div class="modal-info-item" style="width:100%;max-width:400px;text-align:left;margin-bottom:var(--space-xl)">' +
        '<div class="modal-info-value" style="font-weight:400;line-height:1.6">' + detailHtml + '</div>' +
      '</div>' +
      '<a href="' + gerarLinkWhatsApp('Olá! Quero fazer um pedido de cookies!') + '" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener noreferrer">' +
      '<i data-lucide="message-circle"></i> Começar Agora</a>' +
    '</div>';
  openModal();
}

function openSpecialOrderDetail(type) {
  var o = orderTypeData[type] || orderTypeData['geral'];
  if (!o) return;
  var isMaes = type === 'maes';
  modalBody.innerHTML =
    '<div class="modal-mini-content ' + (isMaes ? 'pink-modal' : '') + '">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      '<div style="font-size:4rem;margin-bottom:var(--space-lg)">' + (isMaes ? '💝' : o.icon) + '</div>' +
      '<h2 class="modal-mini-title">' + (isMaes ? '❤️ ' + o.title : o.title) + '</h2>' +
      '<p class="modal-mini-desc">' + o.desc + '</p>' +
      '<div class="modal-info-grid">' +
        '<div class="modal-info-item"><div class="modal-info-label">Presentes</div><div class="modal-info-value">Kits Rosas</div></div>' +
        '<div class="modal-info-item"><div class="modal-info-label">Detalhes</div><div class="modal-info-value">Corações</div></div>' +
        '<div class="modal-info-item"><div class="modal-info-label">Data</div><div class="modal-info-value">Maio</div></div>' +
        '<div class="modal-info-item"><div class="modal-info-label">Descontos</div><div class="modal-info-value">Especiais</div></div>' +
      '</div>' +
      '<a href="' + gerarLinkWhatsApp('Olá! Gostaria de solicitar um orçamento para ' + o.title + '!') + '" class="btn ' + (isMaes ? 'btn-pink' : 'btn-whatsapp') + ' btn-block" target="_blank" rel="noopener noreferrer">' +
      '<i data-lucide="message-circle"></i> Solicitar Orçamento</a>' +
    '</div>';
  openModal();
}

async function openRatingDetail() {
  modalBody.innerHTML = `
    <div class="review-modal-content">
      <button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>
      <div class="rating-overview">
        <div class="rating-big-number">4.9</div>
        <div class="rating-big-stars">★★★★★</div>
        <div class="rating-count">Satisfação Garantida</div>
      </div>
      <div id="company-review-container">
        <p class="loading">Carregando depoimentos...</p>
      </div>
    </div>
  `;
  
  openModal();
  renderCompanyReviews();
}

function openHeroDetail() {
  modalBody.innerHTML =
    '<div class="modal-mini-content">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      '<div class="modal-mini-image-container" style="width:200px;height:200px">' +
        '<img class="modal-mini-image" src="https://image.qwenlm.ai/public_source/eca4b3bb-c54d-4003-8e57-cf1ff110349a/18a95b5a0-4b06-43ea-a35b-80532411c966.png" alt="S&S Cookies">' +
      '</div>' +
      '<h2 class="modal-mini-title">S&S Cookies</h2>' +
      '<p class="modal-mini-desc">Cada mordida é uma experiência única. Cookies artesanais premium, feitos com paixão. Do forno direto para sua casa.</p>' +
      '<a href="' + gerarLinkWhatsApp('Olá! Quero fazer um pedido de cookies!') + '" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener noreferrer">' +
      '<i data-lucide="message-circle"></i> Pedir Agora</a>' +
    '</div>';
  openModal();
}

// ========== CLICK TRIGGERS ==========
document.getElementById('badge-artesanal').addEventListener('click', function() { openSpecialOrderDetail('geral'); });
document.getElementById('badge-premium').addEventListener('click', function() { openSpecialOrderDetail('geral'); });
document.getElementById('badge-entrega').addEventListener('click', function() { openStepDetail(3); });
document.getElementById('badge-avaliacao').addEventListener('click', function() { openRatingDetail(); });
document.getElementById('rating-trigger').addEventListener('click', openRatingDetail);
document.getElementById('rating-text').addEventListener('click', openRatingDetail);
document.getElementById('hero-img-trigger').addEventListener('click', openHeroDetail);

// ========== NAVBAR SCROLL ==========
var navbar = document.querySelector('.navbar');
function handleNavbarScroll() {
  navbar.classList.toggle('scrolled', window.pageYOffset > 50);
}
window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// ========== MOBILE MENU ==========
var hamburger = document.querySelector('.navbar-hamburger');
var mobileMenu = document.getElementById('mobile-menu');
var mobileOverlay = document.getElementById('mobile-overlay');

function openMobileMenu() {
  mobileMenu.classList.add('active'); mobileOverlay.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('active'); mobileOverlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
}
hamburger.addEventListener('click', function() { mobileMenu.classList.contains('active') ? closeMobileMenu() : openMobileMenu(); });
mobileOverlay.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta a').forEach(function(link) { link.addEventListener('click', closeMobileMenu); });

// ========== CAROUSEL (REMOVED: Replaced by CSS Marquee) ==========

// ========== DARK MODE ==========
var themeToggle = document.getElementById('theme-toggle');
var currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}

// ========== ADMIN & STATE SYSTEM ==========
var ADMIN_EMAIL = 'oficialplique@gmail.com';

// Estado em memória (carregado do Appwrite ou localStorage como fallback)
var currentProductId = null;
var currentUser = null;
var defaultFlavors = JSON.parse(JSON.stringify(flavorData));
var state = {
  flavors: JSON.parse(localStorage.getItem('ss_flavors')) || defaultFlavors,
  specialOrders: JSON.parse(localStorage.getItem('ss_special')) || {
    title: 'Encomendas Especiais',
    desc: 'Precisa de algo exclusivo para um evento, presente ou empresa? Criamos caixas personalizadas com todo o cuidado que sua ocasião merece.',
    bgColor: '#1d0a27',
    gradientEnd: '#fbb6ce',
    eventImage: ''
  }
};

async function saveState() {
  if (isAppwriteConfigured()) {
    try {
      await awSaveSpecialOrders(state.specialOrders);
    } catch(e) { console.warn('[Appwrite] saveState special orders:', e); }
  } else {
    localStorage.setItem('ss_flavors', JSON.stringify(state.flavors));
    localStorage.setItem('ss_special', JSON.stringify(state.specialOrders));
  }
  renderPage();
}

async function handleLogin(e) {
  e.preventDefault();
  var email = document.getElementById('login-email').value;
  var pass  = document.getElementById('login-pass').value;
  var btn   = e.target.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Entrando...'; }

  try {
    if (isAppwriteConfigured()) {
      currentUser = await awLogin(email, pass);
    } else {
      // fallback local
      if (email === ADMIN_EMAIL) {
        currentUser = { name: 'Admin S&S', email: email, role: 'admin', desc: 'Administrador Principal', avatar: '' };
      } else {
        currentUser = { name: email.split('@')[0], email: email, role: 'user', desc: 'Amante de Cookies', avatar: '' };
      }
      localStorage.setItem('ss_user', JSON.stringify(currentUser));
    }
    updateAuthUI();
    closeLoginModal();
    
    // Se estiver em um modal de review, recarrega para mostrar o formulário
    if (modalContent.classList.contains('active')) {
      if (document.getElementById('review-container')) {
        renderProductReviews(currentProductId);
      } else if (document.getElementById('company-review-container')) {
        renderCompanyReviews();
      }
    }

    showToast(currentUser.role === 'admin' ? '👋 Bem-vindo, Administrador!' : '✅ Login realizado!');
  } catch(err) {
    showToast('❌ ' + (err.message || 'E-mail ou senha incorretos.'), true);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Entrar'; }
  }
}

async function handleRegister(e) {
  e.preventDefault();
  var name  = e.target.querySelector('input[type="text"]').value;
  var email = e.target.querySelectorAll('input[type="email"]')[0].value;
  var pass  = e.target.querySelectorAll('input[type="password"]')[0].value;
  var btn   = e.target.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Criando conta...'; }

  try {
    if (isAppwriteConfigured()) {
      currentUser = await awRegister(name, email, pass);
    } else {
      currentUser = { name: name, email: email, role: 'user', desc: 'Amante de Cookies', avatar: '' };
      localStorage.setItem('ss_user', JSON.stringify(currentUser));
    }
    updateAuthUI();
    closeLoginModal();

    // Se estiver em um modal de review, recarrega para mostrar o formulário
    if (modalContent.classList.contains('active')) {
      if (document.getElementById('review-container')) {
        renderProductReviews(currentProductId);
      } else if (document.getElementById('company-review-container')) {
        renderCompanyReviews();
      }
    }

    showToast('🎉 Conta criada com sucesso!');
  } catch(err) {
    showToast('❌ ' + (err.message || 'Erro ao criar conta.'), true);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Cadastrar'; }
  }
}

async function logout() {
  try {
    if (isAppwriteConfigured()) await awLogout();
    else localStorage.removeItem('ss_user');
  } catch(e) {}
  currentUser = null;
  showToast('👋 Você saiu da conta.');
  setTimeout(function() { window.location.reload(); }, 1000);
}

// ========== TOAST NOTIFICATION ==========
function showToast(msg, isError) {
  var old = document.getElementById('ss-toast');
  if (old) old.remove();
  var t = document.createElement('div');
  t.id = 'ss-toast';
  t.textContent = msg;
  t.style.cssText = 'position:fixed;bottom:190px;right:24px;z-index:9999;background:' + (isError ? '#c62828' : '#180521') + ';color:white;padding:12px 20px;border-radius:12px;font-size:0.875rem;font-weight:700;box-shadow:0 8px 25px rgba(0,0,0,0.5), 0 0 10px rgba(228, 130, 181, 0.2);border:1px solid rgba(251, 182, 206, 0.25);animation:toastIn 0.3s ease;max-width:280px;line-height:1.4;';
  document.body.appendChild(t);
  setTimeout(function() { if (t.parentNode) t.remove(); }, 3500);
}

function updateAuthUI() {
  var btn = document.getElementById('floating-login-btn');
  if (!btn) return;
  var btnText = btn.querySelector('span');
  var iconContainer = btn.querySelector('.login-icon-container');
  
  if (currentUser) {
    btnText.textContent = currentUser.name;
    btn.onclick = openProfileModal;
    if (currentUser.avatar) {
      iconContainer.innerHTML = '<img src="'+currentUser.avatar+'" style="width:100%;height:100%;border-radius:50%;object-fit:cover">';
    } else {
      iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    }
  } else {
    btnText.textContent = 'Login';
    btn.onclick = openLoginModal;
    iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>';
  }
}

function openProfileModal() {
  var adminBtn = currentUser.role === 'admin'
    ? '<button class="btn btn-primary btn-block" style="margin-bottom:var(--space-lg);background:#1A110D" onclick="openAdminDashboard()"><i data-lucide="shield-check"></i> ACESSAR PAINEL ADMIN</button>'
    : '';

  modalBody.innerHTML =
    '<div class="profile-modal">' +
      '<button class="modal-close-btn" onclick="closeAllModals()"><i data-lucide="x"></i></button>' +
      adminBtn +
      '<div class="profile-header">' +
        '<div class="profile-avatar-large" style="cursor:pointer" onclick="document.getElementById(\'upload-avatar\').click()" title="Clique para enviar nova foto">' +
          (currentUser.avatar ? '<img src="' + currentUser.avatar + '">' : '<i data-lucide="user"></i>') +
        '</div>' +
        '<input type="file" id="upload-avatar" accept="image/*" style="display:none" onchange="handleAvatarUpload(event)">' +
        '<h2>' + currentUser.name + '</h2>' +
        '<p>' + currentUser.desc + '</p>' +
      '</div>' +
      '<div class="profile-edit-form">' +
        '<h3 class="profile-edit-title">Editar Perfil</h3>' +
        '<div class="form-group">' +
          '<label for="edit-user-name">Nome de Exibição</label>' +
          '<input type="text" id="edit-user-name" value="' + currentUser.name + '" placeholder="Seu nome">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="edit-user-desc">Descrição</label>' +
          '<input type="text" id="edit-user-desc" value="' + currentUser.desc + '" placeholder="Ex: Amante de Cookies">' +
        '</div>' +
        '<button class="btn btn-primary btn-block" style="margin-top:var(--space-md)" onclick="saveProfile()">Salvar Alterações</button>' +
        '<button class="btn btn-outline btn-block" style="margin-top:var(--space-sm)" onclick="logout()">Sair da Conta</button>' +
      '</div>' +
    '</div>';

  openModal();
  if (typeof lucide !== 'undefined') lucide.createIcons();
}


async function handleAvatarUpload(event) {
  var file = event.target.files[0];
  if (!file) return;
  showToast('⏳ Enviando foto...');
  try {
    var url = null;
    if (isAppwriteConfigured()) {
      url = await awUploadImage(file);
    } else {
      // fallback base64
      url = await new Promise(function(resolve) {
        var r = new FileReader();
        r.onload = function(e) { resolve(e.target.result); };
        r.readAsDataURL(file);
      });
    }
    if (url) {
      currentUser.avatar = url;
      if (isAppwriteConfigured()) {
        await awUpdateUserPrefs({ avatar: url, desc: currentUser.desc });
      } else {
        localStorage.setItem('ss_user', JSON.stringify(currentUser));
      }
      var p = document.querySelector('.profile-avatar-large');
      if (p) p.innerHTML = '<img src="' + url + '">';
      updateAuthUI();
      showToast('✅ Foto de perfil atualizada!');
    }
  } catch(e) {
    showToast('❌ Erro ao enviar foto.', true);
  }
}

async function saveProfile() {
  var name = document.getElementById('edit-user-name').value;
  var desc = document.getElementById('edit-user-desc').value;
  try {
    if (isAppwriteConfigured()) {
      await awUpdateUserName(name);
      await awUpdateUserPrefs({ desc: desc, avatar: currentUser.avatar || '' });
    } else {
      localStorage.setItem('ss_user', JSON.stringify(currentUser));
    }
    currentUser.name = name;
    currentUser.desc = desc;
    updateAuthUI();
    closeAllModals();
    showToast('✅ Perfil atualizado!');
  } catch(e) {
    showToast('❌ Erro ao salvar perfil.', true);
  }
}

function openAdminDashboard() {
  modalBody.innerHTML = 
    '<div class="admin-dashboard">' +
      '<button class="modal-close-btn" onclick="openProfileModal()"><i data-lucide="arrow-left"></i></button>' +
      '<div class="admin-header">' +
        '<h2>Painel Administrativo</h2>' +
        '<div class="admin-tabs">' +
          '<button class="admin-tab active" onclick="switchAdminTab(\'products\')">🍪 Produtos</button>' +
          '<button class="admin-tab" onclick="switchAdminTab(\'clients\')">⭐ Clientes</button>' +
          '<button class="admin-tab" onclick="switchAdminTab(\'events\')">🎁 Eventos</button>' +
        '</div>' +
      '</div>' +
      '<div id="admin-content" class="admin-content"></div>' +
    '</div>';
  openModal();
  if (typeof lucide !== 'undefined') lucide.createIcons();
  switchAdminTab('products');
}

function switchAdminTab(tab) {
  var content = document.getElementById('admin-content');
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  if (event) event.target.classList.add('active');

  if (tab === 'products') {
    var html = '<div class="admin-section-header">' +
      '<h3 class="admin-section-title">🍪 Cardápio de Cookies</h3>' +
      '<button class="btn btn-primary btn-sm" onclick="editProduct(\'new\')">+ Novo Cookie</button>' +
    '</div>' +
    '<div class="admin-product-grid">';
    Object.keys(state.flavors).forEach(id => {
      var f = state.flavors[id];
      html += '<div class="admin-product-card">' +
        '<div class="admin-product-img-wrap"><img src="' + (f.image || 'https://via.placeholder.com/80') + '"></div>' +
        '<div class="admin-product-info">' +
          '<p class="admin-product-name">' + f.name + '</p>' +
          '<p class="admin-product-price">' + f.price + '</p>' +
        '</div>' +
        '<div class="admin-product-btns">' +
          '<button class="admin-btn-edit" onclick="editProduct(\'' + id + '\')">✏️ Editar</button>' +
          '<button class="admin-btn-del" onclick="deleteProduct(\'' + id + '\')">🗑️ Excluir</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    content.innerHTML = html;
  } else if (tab === 'clients') {
    renderClientsTab(content);
  } else if (tab === 'events') {
    renderEventsTab(content);
  }
}

function renderClientsTab(content) {
  var highlighted = JSON.parse(localStorage.getItem('ss_highlighted') || '[]');
  var html = '<div class="admin-section-header"><h3 class="admin-section-title">⭐ Depoimentos</h3></div>';
  html += '<div class="admin-testimonials-list">';
  testimonialData.forEach(function(t, idx) {
    var isHighlighted = highlighted.includes(idx);
    html += '<div class="admin-testimonial-card ' + (isHighlighted ? 'highlighted' : '') + '">' +
      '<div class="admin-test-header">' +
        '<div class="admin-test-avatar">' + t.initials + '</div>' +
        '<div>' +
          '<div class="admin-test-name">' + t.name + '</div>' +
          '<div class="admin-test-stars">' + '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars) + '</div>' +
        '</div>' +
        (isHighlighted ? '<span class="admin-badge-highlight">⭐ Destaque</span>' : '') +
      '</div>' +
      '<p class="admin-test-text" id="test-text-' + idx + '">' + t.text + '</p>' +
      '<div class="admin-test-actions">' +
        '<button class="admin-btn-highlight" onclick="toggleTestimonialHighlight(' + idx + ')">' + (isHighlighted ? '★ Remover Destaque' : '☆ Destacar') + '</button>' +
        '<button class="admin-btn-edit" onclick="editTestimonial(' + idx + ')">✏️ Editar</button>' +
        '<button class="admin-btn-del" onclick="deleteTestimonial(' + idx + ')">🗑️ Excluir</button>' +
      '</div>' +
    '</div>';
  });
  html += '</div>';
  content.innerHTML = html;
}

async function toggleTestimonialHighlight(idx) {
  var t = testimonialData[idx];
  if (!t) return;
  t.highlighted = !t.highlighted;
  try {
    if (isAppwriteConfigured() && t._docId) {
      await awSaveTestimonial(t._docId, t);
    } else {
      var hl = JSON.parse(localStorage.getItem('ss_highlighted') || '[]');
      var pos = hl.indexOf(idx);
      if (pos === -1) hl.push(idx); else hl.splice(pos, 1);
      localStorage.setItem('ss_highlighted', JSON.stringify(hl));
    }
  } catch(e) { console.error(e); }
  var content = document.getElementById('admin-content');
  renderClientsTab(content);
}

function editTestimonial(idx) {
  var t = testimonialData[idx];
  var el = document.getElementById('test-text-' + idx);
  if (!el) return;
  el.innerHTML = '<textarea id="test-edit-area" class="admin-test-edit-area">' + t.text + '</textarea>' +
    '<div class="admin-test-actions" style="margin-top:8px">' +
      '<button class="admin-btn-edit" onclick="saveTestimonial(' + idx + ')">✅ Salvar</button>' +
      '<button class="admin-btn-del" onclick="renderClientsTab(document.getElementById(\'admin-content\'))">✖ Cancelar</button>' +
    '</div>';
}

async function saveTestimonial(idx) {
  var area = document.getElementById('test-edit-area');
  if (area) testimonialData[idx].text = area.value;
  try {
    if (isAppwriteConfigured() && testimonialData[idx]._docId) {
      await awSaveTestimonial(testimonialData[idx]._docId, testimonialData[idx]);
    }
  } catch(e) { console.error(e); }
  var content = document.getElementById('admin-content');
  renderClientsTab(content);
}

async function deleteTestimonial(idx) {
  if (!confirm('Excluir este depoimento?')) return;
  try {
    if (isAppwriteConfigured() && testimonialData[idx]._docId) {
      await awDeleteTestimonial(testimonialData[idx]._docId);
    }
    testimonialData.splice(idx, 1);
  } catch(e) { console.error(e); }
  var content = document.getElementById('admin-content');
  renderClientsTab(content);
}

function renderEventsTab(content) {
  var s = state.specialOrders;
  var eventImg = localStorage.getItem('ss_event_img') || '';
  content.innerHTML =
    '<div class="admin-section-header"><h3 class="admin-section-title">🎁 Configurar Encomendas</h3></div>' +
    '<div class="admin-events-form">' +
      '<div class="admin-event-img-section">' +
        '<p class="admin-event-img-label">📸 Imagem do Evento</p>' +
        (eventImg ? '<img src="' + eventImg + '" class="admin-event-img-preview">' : '<div class="admin-event-img-placeholder">Sem imagem</div>') +
        '<label class="admin-upload-btn">📤 Enviar Imagem<input type="file" accept="image/*" style="display:none" onchange="handleEventImgUpload(event)"></label>' +
        '<a href="https://www.canva.com" target="_blank" class="admin-canva-btn">🎨 Editar no Canva</a>' +
      '</div>' +
      '<div class="admin-event-fields">' +
        '<label>Título do Evento</label><input type="text" id="admin-special-title" value="' + s.title + '">' +
        '<label>Descrição</label><textarea id="admin-special-desc" rows="3">' + s.desc + '</textarea>' +
        '<label>Cor de Fundo</label>' +
        '<div class="admin-color-row">' +
          '<input type="color" id="admin-special-color" value="' + s.bgColor + '">' +
          '<span>' + s.bgColor + '</span>' +
        '</div>' +
        '<button class="btn btn-primary btn-block" style="margin-top:16px" onclick="saveSpecialConfig()">💾 Salvar Alterações</button>' +
      '</div>' +
    '</div>';
}

async function handleEventImgUpload(event) {
  var file = event.target.files[0];
  if (!file) return;
  showToast('⏳ Enviando imagem do evento...');
  try {
    var url = null;
    if (isAppwriteConfigured()) {
      url = await awUploadImage(file);
    } else {
      url = await new Promise(function(resolve) {
        var r = new FileReader();
        r.onload = function(e) { resolve(e.target.result); };
        r.readAsDataURL(file);
      });
      localStorage.setItem('ss_event_img', url);
    }
    if (url) {
      state.specialOrders.eventImage = url;
      if (isAppwriteConfigured()) await awSaveSpecialOrders(state.specialOrders);
      var img = document.querySelector('.special-orders-image img');
      if (img) img.src = url;
      renderEventsTab(document.getElementById('admin-content'));
      showToast('✅ Imagem do evento atualizada!');
    }
  } catch(e) {
    showToast('❌ Erro ao enviar imagem.', true);
  }
}

function editProduct(id) {
  var f = id === 'new' ? { name: '', price: 'R$ 0,00', descLong: '', image: '', tag: '' } : state.flavors[id];
  var title = id === 'new' ? '🆕 Novo Cookie' : '✏️ Editar Cookie';
  modalBody.innerHTML =
    '<div class="admin-edit-product">' +
      '<div class="admin-edit-header">' +
        '<button class="admin-back-link" onclick="openAdminDashboard()">← Voltar</button>' +
        '<h3>' + title + '</h3>' +
      '</div>' +
      '<div class="admin-edit-img-area">' +
        '<img id="p-img-preview" src="' + (f.image || 'https://via.placeholder.com/120?text=📷') + '">' +
        '<label class="admin-upload-btn">📤 Upload de Imagem<input type="file" id="p-img-file" accept="image/*" style="display:none" onchange="handleProductImgUpload(event)"></label>' +
        '<input type="hidden" id="p-img" value="' + f.image + '">' +
      '</div>' +
      '<div class="admin-edit-fields">' +
        '<label>Nome do Cookie</label><input type="text" id="p-name" value="' + f.name + '" placeholder="Ex: Pistache Premium">' +
        '<label>Preço</label><input type="text" id="p-price" value="' + f.price + '" placeholder="R$ 0,00">' +
        '<label>Descrição</label><textarea id="p-desc" rows="3" placeholder="Descreva o sabor...">' + f.descLong + '</textarea>' +
      '</div>' +
      '<div class="admin-edit-btns">' +
        '<button class="btn btn-primary" onclick="saveProduct(\'' + id + '\')" style="flex:1">💾 Salvar</button>' +
        '<button class="btn btn-outline" onclick="openAdminDashboard()" style="flex:1">✖ Cancelar</button>' +
      '</div>' +
    '</div>';
}

async function handleProductImgUpload(event) {
  var file = event.target.files[0];
  if (!file) return;
  var preview = document.getElementById('p-img-preview');
  var hiddenImg = document.getElementById('p-img');
  showToast('⏳ Enviando imagem...');
  try {
    var url = null;
    if (isAppwriteConfigured()) {
      url = await awUploadImage(file);
    } else {
      url = await new Promise(function(resolve) {
        var r = new FileReader();
        r.onload = function(e) { resolve(e.target.result); };
        r.readAsDataURL(file);
      });
    }
    if (url) {
      if (hiddenImg) hiddenImg.value = url;
      if (preview) preview.src = url;
      showToast('✅ Imagem carregada!');
    }
  } catch(e) {
    showToast('❌ Erro ao enviar imagem.', true);
  }
}

async function saveProduct(id) {
  var name = document.getElementById('p-name').value;
  if (!name) { showToast('❌ Informe o nome do produto.', true); return; }
  var data = {
    name:     name,
    price:    document.getElementById('p-price').value,
    image:    document.getElementById('p-img').value,
    descLong: document.getElementById('p-desc').value,
    tag:      'Premium',
    tagClass: 'badge-primary'
  };
  try {
    showToast('⏳ Salvando...');
    if (isAppwriteConfigured()) {
      var docId = (id === 'new') ? null : id;
      var savedId = await awSaveFlavor(docId, data);
      data._docId = savedId;
      // Recarrega todos os flavors do Appwrite
      var freshFlavors = await awGetFlavors();
      if (freshFlavors) state.flavors = freshFlavors;
    } else {
      var nid = (id === 'new') ? name.toLowerCase().replace(/\s/g, '-') : id;
      state.flavors[nid] = data;
      localStorage.setItem('ss_flavors', JSON.stringify(state.flavors));
    }
    renderPage();
    openAdminDashboard();
    showToast('✅ Produto salvo!');
  } catch(e) {
    showToast('❌ Erro ao salvar produto.', true);
  }
}

async function deleteProduct(id) {
  if (!confirm('Tem certeza que deseja excluir este produto?')) return;
  try {
    if (isAppwriteConfigured()) {
      await awDeleteFlavor(id);
      var freshFlavors = await awGetFlavors();
      if (freshFlavors) state.flavors = freshFlavors;
    } else {
      delete state.flavors[id];
      localStorage.setItem('ss_flavors', JSON.stringify(state.flavors));
    }
    renderPage();
    switchAdminTab('products');
    showToast('🗑️ Produto excluído.');
  } catch(e) {
    showToast('❌ Erro ao excluir produto.', true);
  }
}

async function saveSpecialConfig() {
  state.specialOrders.title    = document.getElementById('admin-special-title').value;
  state.specialOrders.desc     = document.getElementById('admin-special-desc').value;
  state.specialOrders.bgColor  = document.getElementById('admin-special-color').value;
  try {
    if (isAppwriteConfigured()) {
      await awSaveSpecialOrders(state.specialOrders);
    } else {
      localStorage.setItem('ss_special', JSON.stringify(state.specialOrders));
    }
    updateSpecialOrdersUI();
    showToast('✅ Configurações salvas!');
  } catch(e) {
    showToast('❌ Erro ao salvar configurações.', true);
  }
}

function updateSpecialOrdersUI() {
  var s = state.specialOrders;
  var section = document.querySelector('.special-orders-inner');
  if (section) {
    var bgColor = s.bgColor;
    if (bgColor === '#FFF0F3' || bgColor === '#FFF5F7' || bgColor === '#FFF0F3') {
      bgColor = '#1d0a27';
    }
    section.style.background = 'linear-gradient(135deg, ' + bgColor + ' 0%, #0a040d 100%)';
    section.querySelector('h2').textContent = s.title;
    section.querySelector('p').textContent = s.desc;
  }
}

function renderPage() {
  var grid = document.querySelector('.flavors-grid');
  if (grid) {
    var cards = Object.keys(state.flavors).map(id => {
      var f = state.flavors[id];
      return '<article class="flavor-card" style="opacity:1;transform:none" onclick="openFlavorDetail(this, \''+id+'\')">' +
               '<div class="flavor-card-image"><img src="'+f.image+'"></div>' +
               '<div class="flavor-card-body"><h3 class="flavor-card-name">'+f.name+'</h3><p class="flavor-card-desc">'+f.descLong+'</p>' +
               '<div class="flavor-card-footer"><span class="flavor-card-price">'+f.price+'</span><span class="flavor-card-btn">Ver Detalhes</span></div></div>' +
             '</article>';
    }).join('');
    
    if (window.innerWidth < 768) {
      grid.innerHTML = cards + cards; // Duplica para loop infinito
    } else {
      grid.innerHTML = cards;
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
    initAutoScroll();
  }
  updateSpecialOrdersUI();
}

let autoScrollInterval;
function initAutoScroll() {
  const grid = document.querySelector('.flavors-grid');
  if (!grid || window.innerWidth >= 768) return;
  
  let isPaused = false;
  clearInterval(autoScrollInterval);
  
  autoScrollInterval = setInterval(() => {
    if (isPaused) return;
    const card = grid.querySelector('.flavor-card');
    const step = card ? card.offsetWidth + 8 : 220; // 8 is gap (var--space-sm)
    
    grid.scrollBy({ left: step, behavior: 'smooth' });

    // Loop infinito: se passou da metade, volta pro início do primeiro conjunto
    setTimeout(() => {
      const half = grid.scrollWidth / 2;
      if (grid.scrollLeft >= half - 10) {
        grid.scrollLeft = grid.scrollLeft - half;
      }
    }, 600);
  }, 3000);

  const pause = () => { isPaused = true; };
  const resume = () => { setTimeout(() => { isPaused = false; }, 3000); };
  
  grid.addEventListener('touchstart', pause, {passive: true});
  grid.addEventListener('touchend', resume, {passive: true});
  grid.addEventListener('mousedown', pause);
  grid.addEventListener('mouseup', resume);
}

var loginOverlay = document.getElementById('login-overlay');
var loginModal = document.getElementById('login-modal');

function openLoginModal() {
  loginOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  switchLoginView('login');
}
function closeLoginModal() {
  loginOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
function switchLoginView(viewId) {
  document.querySelectorAll('.login-view').forEach(function(v) { v.classList.remove('active'); });
  document.getElementById('view-' + viewId).classList.add('active');
}
loginOverlay.addEventListener('click', function(e) { if (e.target === loginOverlay) closeLoginModal(); });

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (loginOverlay && loginOverlay.classList.contains('active')) closeLoginModal();
    else if (modalContent.classList.contains('active')) closeAllModals();
    else if (mobileMenu.classList.contains('active')) closeMobileMenu();
  }
});

// ========== CSS TOAST ANIMATION ==========
(function() {
  var s = document.createElement('style');
  s.textContent = '@keyframes toastIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }';
  document.head.appendChild(s);
})();

// ========== INITIALIZE (ASYNC) ==========
document.addEventListener('DOMContentLoaded', async function() {
  // 1. Tenta restaurar sessão do Appwrite
  if (isAppwriteConfigured()) {
    try {
      currentUser = await awGetCurrentUser();
    } catch(e) { currentUser = null; }
  } else {
    // fallback localStorage
    currentUser = JSON.parse(localStorage.getItem('ss_user')) || null;
    if (!currentUser) {
      currentUser = { name: 'Admin S&S', email: 'oficialplique@gmail.com', role: 'admin', desc: 'Administrador Principal', avatar: '' };
      localStorage.setItem('ss_user', JSON.stringify(currentUser));
    }
    var savedFlavors = localStorage.getItem('ss_flavors');
    if (savedFlavors) state.flavors = JSON.parse(savedFlavors);
    var savedSpecial = localStorage.getItem('ss_special');
    if (savedSpecial) state.specialOrders = JSON.parse(savedSpecial);
  }

  // 2. Carrega dados do Appwrite
  if (isAppwriteConfigured()) {
    try {
      var [appFlavors, appTestimonials, appSpecial] = await Promise.all([
        awGetFlavors(),
        awGetTestimonials(),
        awGetSpecialOrders()
      ]);
      if (appFlavors && Object.keys(appFlavors).length > 0) state.flavors = appFlavors;
      if (appTestimonials && appTestimonials.length > 0) {
        testimonialData.length = 0;
        appTestimonials.forEach(function(t) { testimonialData.push(t); });
      }
      if (appSpecial) {
        state.specialOrders = appSpecial;
        _specialOrdersDocId = appSpecial._docId || null;
      }
    } catch(e) { console.warn('[Appwrite] Init data load error:', e); }
  }

  updateAuthUI();
  renderPage();

  // Login form
  var loginForm = document.querySelector('#view-login form');
  if (loginForm) loginForm.onsubmit = handleLogin;

  // Register form
  var registerForm = document.querySelector('#view-register form');
  if (registerForm) registerForm.onsubmit = handleRegister;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from('.hero-badge', { y: 30, opacity: 0, duration: 0.6 })
      .from('.hero-headline', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
      .from('.hero-subheadline', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-ctas', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-rating', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-image', { x: 50, opacity: 0, duration: 1 }, '-=0.6');
    gsap.utils.toArray('.section-heading').forEach(function(h) { gsap.from(h, { scrollTrigger: { trigger: h, start: 'top 85%' }, y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' }); });
    gsap.utils.toArray('.section-subheading').forEach(function(s) { gsap.from(s, { scrollTrigger: { trigger: s, start: 'top 85%' }, y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }); });
    gsap.utils.toArray('.flavor-card').forEach(function(card, i) { gsap.to(card, { scrollTrigger: { trigger: card, start: 'top 90%' }, y: 0, opacity: 1, duration: 0.5, delay: i * 0.08, ease: 'power2.out' }); });
    gsap.utils.toArray('.step').forEach(function(step, i) { gsap.to(step, { scrollTrigger: { trigger: step, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.5, delay: i * 0.2, ease: 'power2.out' }); });
    gsap.from('.social-proof-text', { scrollTrigger: { trigger: '.social-proof', start: 'top 80%' }, y: 20, opacity: 0, duration: 0.6 });
    gsap.from('.proof-badge', { scrollTrigger: { trigger: '.social-proof-badges', start: 'top 85%' }, y: 20, opacity: 0, duration: 0.4, stagger: 0.1 });
    gsap.from('.special-orders-content', { scrollTrigger: { trigger: '.special-orders-inner', start: 'top 80%' }, x: -40, opacity: 0, duration: 0.8 });
    gsap.from('.special-orders-image', { scrollTrigger: { trigger: '.special-orders-inner', start: 'top 80%' }, x: 40, opacity: 0, duration: 0.8 });
    gsap.utils.toArray('.accordion-item').forEach(function(item, i) { gsap.from(item, { scrollTrigger: { trigger: item, start: 'top 90%' }, y: 20, opacity: 0, duration: 0.4, delay: i * 0.08 }); });
    gsap.from('.cta-final h2, .cta-final p', { scrollTrigger: { trigger: '.cta-final', start: 'top 80%' }, y: 30, opacity: 0, duration: 0.6, stagger: 0.15 });
    gsap.from('.cta-final .btn', { scrollTrigger: { trigger: '.cta-final', start: 'top 80%' }, y: 20, duration: 0.6, delay: 0.3 });
  }
});

// ========== REVIEW SYSTEM LOGIC ==========

async function openCurrentProductReview() {
  if (!currentProductId) {
    return openRatingDetail();
  }
  var flavor = flavorData[currentProductId];
  if (!flavor) return;

  modalBody.innerHTML = `
    <div class="review-modal-content">
      <button class="modal-close-btn" onclick="openFlavorDetail(null, '${currentProductId}')"><i data-lucide="arrow-left"></i></button>
      <h2 class="modal-mini-title">Avaliações: ${flavor.name}</h2>
      
      <div id="review-form-container">
        <!-- Form will be injected here immediately by renderProductReviewForm -->
      </div>

      <div id="review-list-container">
        <p class="loading">Carregando comentários...</p>
      </div>
    </div>
  `;
  
  openModal();
  renderProductReviewForm(currentProductId);
  renderProductReviews(currentProductId);
}

function renderProductReviewForm(productId) {
  var container = document.getElementById('review-form-container');
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <div class="review-form">
        <h3 style="margin-bottom:var(--space-sm)">Sua avaliação</h3>
        <div class="star-rating">
          <input type="radio" id="star5" name="rating" value="5"><label for="star5">★</label>
          <input type="radio" id="star4" name="rating" value="4"><label for="star4">★</label>
          <input type="radio" id="star3" name="rating" value="3"><label for="star3">★</label>
          <input type="radio" id="star2" name="rating" value="2"><label for="star2">★</label>
          <input type="radio" id="star1" name="rating" value="1"><label for="star1">★</label>
        </div>
        <textarea id="review-text" class="review-textarea" placeholder="O que você achou deste cookie? Deixe seu comentário..."></textarea>
        <button class="btn btn-primary btn-block" onclick="submitProductReview('${productId}')">
          <i data-lucide="send"></i> Enviar Avaliação
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="review-form" style="text-align:center; padding: var(--space-xl); border: 2px dashed var(--color-accent)">
        <p style="margin-bottom:var(--space-md)">Deseja avaliar este produto?</p>
        <button class="btn btn-outline btn-block" onclick="openLoginModal()">
          <i data-lucide="log-in"></i> Fazer Login para Comentar
        </button>
      </div>
    `;
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

async function renderProductReviews(productId) {
  var container = document.getElementById('review-list-container');
  if (!container) return;

  var reviews = [];
  try {
    if (isAppwriteConfigured()) {
      reviews = await awGetProductReviews(productId);
    } else {
      reviews = JSON.parse(localStorage.getItem('ss_reviews_' + productId)) || [];
    }
  } catch (e) {
    console.error(e);
    container.innerHTML = '<p class="error">Não foi possível carregar as avaliações.</p>';
    return;
  }

  var listHtml = '<div class="review-list" style="margin-top:var(--space-lg)">';
  listHtml += '<h3 style="margin-bottom:var(--space-md)">O que os outros clientes dizem</h3>';
  
  if (reviews.length === 0) {
    listHtml += '<p class="no-reviews">Ainda não há comentários. Seja o primeiro a avaliar!</p>';
  } else {
    reviews.forEach(r => {
      var stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
      listHtml += `
        <div class="review-item">
          <div class="review-item-header">
            <div class="review-item-user">
              <div class="admin-test-avatar" style="width:32px;height:32px;font-size:0.75rem">${r.name.substring(0,2).toUpperCase()}</div>
              <span>${r.name}</span>
            </div>
            <div class="review-item-stars">${stars}</div>
          </div>
          <p class="review-item-text">${r.text}</p>
          <p class="review-item-date">${r.date}</p>
        </div>
      `;
    });
  }
  listHtml += '</div>';

  container.innerHTML = listHtml;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

async function submitProductReview(productId) {
  if (!currentUser) return showToast('Você precisa estar logado para comentar.', true);

  var stars = document.querySelector('input[name="rating"]:checked');
  var text = document.getElementById('review-text').value;

  if (!stars) return showToast('Por favor, selecione uma nota.', true);
  if (!text) return showToast('Por favor, escreva um comentário.', true);

  showToast('⏳ Enviando sua avaliação...');

  var data = {
    productId: productId,
    name: currentUser.name,
    avatar: currentUser.avatar || '',
    text: text,
    stars: parseInt(stars.value),
    date: new Date().toLocaleDateString('pt-BR')
  };

  try {
    if (isAppwriteConfigured()) {
      await awSaveProductReview(data);
    } else {
      var reviews = JSON.parse(localStorage.getItem('ss_reviews_' + productId)) || [];
      reviews.unshift(data);
      localStorage.setItem('ss_reviews_' + productId, JSON.stringify(reviews));
    }
    showToast('✅ Avaliação enviada com sucesso!');
    renderProductReviews(productId);
  } catch (e) {
    showToast('❌ Erro ao enviar avaliação.', true);
  }
}

// ========== COMPANY REVIEWS (SATISFAÇÃO) ==========

async function renderCompanyReviews() {
  var container = document.getElementById('company-review-container');
  if (!container) return;

  var reviews = [];
  try {
    if (isAppwriteConfigured()) {
      reviews = await awGetTestimonials();
    } else {
      reviews = testimonialData;
    }
  } catch (e) {
    console.error(e);
  }

  var formHtml = '';
  if (currentUser) {
    formHtml = `
      <div class="review-form">
        <h3>Sua experiência com a S&S</h3>
        <div class="star-rating">
          <input type="radio" id="cstar5" name="crating" value="5"><label for="cstar5">★</label>
          <input type="radio" id="cstar4" name="crating" value="4"><label for="cstar4">★</label>
          <input type="radio" id="cstar3" name="crating" value="3"><label for="cstar3">★</label>
          <input type="radio" id="cstar2" name="crating" value="2"><label for="cstar2">★</label>
          <input type="radio" id="cstar1" name="crating" value="1"><label for="cstar1">★</label>
        </div>
        <textarea id="company-review-text" class="review-textarea" placeholder="Como foi sua experiência com nossos cookies e atendimento?"></textarea>
        <button class="btn btn-primary btn-block" onclick="submitCompanyReview()">Enviar Depoimento</button>
      </div>
    `;
  } else {
    formHtml = `
      <div class="review-form" style="text-align:center">
        <p>Apenas clientes logados podem deixar depoimentos. <a href="#" onclick="openLoginModal()" style="color:var(--color-primary);font-weight:700">Fazer Login</a></p>
      </div>
    `;
  }

  var listHtml = '<div class="review-list">';
  reviews.forEach(r => {
    var stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    listHtml += `
      <div class="review-item">
        <div class="review-item-header">
          <div class="review-item-user">
            <div class="admin-test-avatar" style="width:32px;height:32px;font-size:0.75rem">${r.initials || r.name.substring(0,2).toUpperCase()}</div>
            <span>${r.name}</span>
          </div>
          <div class="review-item-stars">${stars}</div>
        </div>
        <p class="review-item-text">${r.text}</p>
        <p class="review-item-date">${r.date}</p>
      </div>
    `;
  });
  listHtml += '</div>';

  container.innerHTML = formHtml + listHtml;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

async function submitCompanyReview() {
  if (!currentUser) return showToast('Você precisa estar logado.', true);

  var stars = document.querySelector('input[name="crating"]:checked');
  var text = document.getElementById('company-review-text').value;

  if (!stars) return showToast('Por favor, selecione uma nota.', true);
  if (!text) return showToast('Por favor, escreva um comentário.', true);

  showToast('⏳ Enviando seu depoimento...');

  var data = {
    name: currentUser.name,
    initials: currentUser.name.substring(0,2).toUpperCase(),
    text: text,
    stars: parseInt(stars.value),
    date: new Date().toLocaleDateString('pt-BR'),
    highlighted: false
  };

  try {
    if (isAppwriteConfigured()) {
      await awSaveTestimonial(null, data);
    } else {
      testimonialData.unshift(data);
    }
    showToast('✅ Depoimento enviado! Obrigado pelo carinho.');
    renderCompanyReviews();
  } catch (e) {
    showToast('❌ Erro ao enviar depoimento.', true);
  }
}
