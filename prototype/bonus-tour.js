const bonusTour = { layer: null, step: 0 };

const bonusTourSteps = [
  { target: '[data-bonus-open]', title: 'Abre el detalle del bono', body: 'En Mis bonos encontrarás tus bonos disponibles. Pulsa «Más Información» en este bono de prueba para revisar sus reglas.', action: true },
  { target: '[data-bonus-validity]', title: 'Revisa la vigencia', body: 'Comprueba hasta cuándo puedes usar el bono. La fecha aparece en su detalle.' },
  { target: '[data-bonus-sections]', title: 'Mira dónde aplica', body: 'Cada bono indica las secciones válidas. Este ejemplo aplica a Apuestas deportivas; otros pueden ser para Casino, Casino en vivo o Virtuales.' },
  { target: '[data-bonus-conditions]', title: 'Lee las condiciones', body: 'Busca restricciones y límites propios del bono, como su conversión máxima. El porcentaje de este ejemplo no es una regla para todos los bonos.' },
  { target: '[data-bonus-requirements]', title: 'Comprueba los requisitos', body: 'Revisa lo necesario para usarlo, como una cuota mínima o los juegos y eventos permitidos.' },
  { target: '[data-bonus-activate]', title: 'Activa el bono', body: 'Cuando conozcas las reglas, pulsa «Activar». Esto solo cambia el estado del bono de prueba.', action: true },
  { target: '[data-bonus-one-active]', title: 'Uno activo a la vez', body: 'Si el bono no es acumulable, debes terminar o resolver el activo antes de activar otro.' },
  { target: '[data-bonus-withdrawal]', title: 'Antes de retirar', body: 'Si solicitas un retiro con requisitos pendientes, el bono y sus beneficios pueden cancelarse. Revisa siempre sus condiciones.' }
];

function bonusTourMarkup() {
  const mobileLinks = [['Inicio', 'nav-icono-inicio.webp'], ['Deportes', 'nav-icono-deportes.webp'], ['Casino', 'nav-icono-casino.webp'], ['Casino en vivo', 'nav-icono-casino-live.webp'], ['Virtuales', 'nav-icono-virtuales.webp']]
    .map(([label, asset]) => `<span><img src="https://www.olimpo.bet/static/img/mobile_menu/${asset}" alt=""><small>${label}</small></span>`).join('');

  return `<header class="bonus-tour-header"><img class="bonus-tour-brand" src="https://www.olimpo.bet/static/img/isotipo_olimpo_pe.svg" alt="Olimpo.bet"><nav aria-label="Navegación principal"><span>Inicio</span><span>Deportes</span><span class="is-club">Club Olimpo</span><span>Casino</span><span>Casino en vivo</span><span>Virtuales</span><span>Misiones</span><span>Promociones</span><span>Blog</span><span>Ayuda</span></nav><div class="bonus-tour-account"><span class="bonus-tour-deposit">Deposita</span><span class="bonus-tour-balance">S/ 3.50⌄</span><span class="bonus-tour-avatar">E</span></div></header>
    <div class="bonus-tour-tabs"><span>♧&nbsp; Promociones</span><strong>♢&nbsp; Mis bonos</strong></div>
    <main class="bonus-tour-layout"><div class="bonus-tour-main">
      <div class="bonus-tour-categories"><h2>Categorías</h2><div><span class="is-active">Apuestas deportivas <b>1</b></span><span>Casino <b>0</b></span><span>Deportes virtuales <b>0</b></span><span>Casino en vivo <b>0</b></span></div></div>
      <div class="bonus-tour-notice" data-bonus-one-active><span>ⓘ</span><p>Recuerda que solo puedes tener un bono activo a la vez. Apenas se resuelva el evento de tu primer bono, podrás activar el siguiente.</p></div>
      <section class="bonus-tour-category"><h2>Apuestas deportivas (1)</h2><article class="bonus-tour-card"><div class="bonus-tour-card-head"><img src="https://www.olimpo.bet/static/img/bonos/bono-deportes.svg" alt=""><span>Bono de prueba<small>Solo para este recorrido</small></span><span class="bonus-tour-card-menu" aria-hidden="true">•••</span></div><div class="bonus-tour-card-actions"><span class="bonus-tour-expiry">◷&nbsp; Vence el 31/12/2026</span><button data-bonus-activate type="button">Activar</button></div></article>
      <section class="bonus-tour-info"><button data-bonus-open type="button" aria-expanded="false">+ Más Información</button><div class="bonus-tour-terms" hidden><h3>Términos y Condiciones del bono de prueba</h3><p class="bonus-tour-term" data-bonus-validity><strong>Vigencia</strong><span>Disponible hasta el 31/12/2026.</span></p><p class="bonus-tour-term" data-bonus-sections><strong>Secciones válidas</strong><span>Apuestas deportivas. Otros bonos pueden aplicar a Casino, Casino en vivo o Virtuales.</span></p><p class="bonus-tour-term" data-bonus-conditions><strong>Condiciones</strong><span>Ejemplo: conversión máxima de 50% del bono a dinero real. Revisa siempre el porcentaje de tu bono.</span></p><p class="bonus-tour-term" data-bonus-requirements><strong>Requisitos</strong><span>Ejemplo: cuota mínima 1.50 y eventos deportivos indicados en el detalle.</span></p><p class="bonus-tour-term bonus-tour-term--warning" data-bonus-withdrawal><strong>Antes de retirar</strong><span>Si quedan requisitos pendientes, el bono y sus beneficios pueden cancelarse.</span></p></div></section></section>
      <section class="bonus-tour-empty"><h2>Casino (0)</h2><p>No tienes bonos disponibles</p><h2>Deportes virtuales (0)</h2><p>No tienes bonos disponibles</p><h2>Casino en vivo (0)</h2><p>No tienes bonos disponibles</p></section>
    </div><aside class="bonus-tour-side"><section class="bonus-tour-code"><img src="https://www.olimpo.bet/static/img/bonos/active_code.png" alt="Activa tu código"><div><strong>¡Actívalo y disfruta tu recompensa!</strong><span>Escribe tu código aquí <b>Aplicar</b></span><small>ⓘ&nbsp; Solo válido una vez por usuario.</small></div></section><section class="bonus-tour-wallet"><h3><img src="https://www.olimpo.bet/static/img/bonos/billetera.svg" alt=""> MI BILLETERA</h3><strong>S/ 3.50</strong><small>Saldo</small><div><span>Saldo real <b>S/ 3.50</b></span><span>Bonos <b>S/ 0.00</b></span><span>Apuestas deportivas gratis <b>S/ 0.00</b></span></div></section></aside></main>
    <nav class="bonus-tour-mobile-nav" aria-label="Navegación móvil">${mobileLinks}</nav><div class="bonus-tour-scrim" aria-hidden="true"></div><aside class="bonus-tour-coachmark" role="dialog" aria-label="Guía de bonos" aria-live="polite"></aside><button class="bonus-tour-close" data-bonus-close type="button" aria-label="Cerrar recorrido">×</button>`;
}

function positionBonusTourStep() {
  if (!bonusTour.layer) return;
  const target = bonusTour.layer.querySelector('.bonus-tour-target');
  const coachmark = bonusTour.layer.querySelector('.bonus-tour-coachmark');
  if (!target || !coachmark) return;
  const rect = target.getBoundingClientRect();
  if (window.matchMedia('(max-width: 768px)').matches) {
    coachmark.style.left = '12px';
    coachmark.style.right = '12px';
    coachmark.style.top = 'auto';
    coachmark.style.bottom = '82px';
    coachmark.style.width = 'auto';
    const availableBottom = window.innerHeight - coachmark.offsetHeight - 104;
    const desiredTop = 84 + Math.max(0, availableBottom - 84 - rect.height) / 2;
    bonusTour.layer.scrollTop += rect.top - desiredTop;
  } else {
    const desiredTop = Math.max(120, Math.min(rect.top, window.innerHeight - rect.height - 80));
    bonusTour.layer.scrollTop += rect.top - desiredTop;
    requestAnimationFrame(() => positionAnchoredCoachmark(target, coachmark));
  }
}

function renderBonusTourStep() {
  if (!bonusTour.layer) return;
  const step = bonusTourSteps[bonusTour.step];
  bonusTour.layer.querySelector('.bonus-tour-target')?.classList.remove('bonus-tour-target');
  const target = bonusTour.layer.querySelector(step.target);
  target.classList.add('bonus-tour-target');
  const coachmark = bonusTour.layer.querySelector('.bonus-tour-coachmark');
  coachmark.innerHTML = `<span>Paso ${bonusTour.step + 1} de ${bonusTourSteps.length}</span><strong>${step.title}</strong><p>${step.body}</p><div class="bonus-tour-progress">${bonusTourSteps.map((_, index) => `<i class="${index <= bonusTour.step ? 'is-filled' : ''}"></i>`).join('')}</div><div class="bonus-tour-controls"><button data-bonus-prev type="button" ${bonusTour.step === 0 ? 'disabled' : ''}>Anterior</button>${step.action ? '' : `<button data-bonus-next type="button">${bonusTour.step === bonusTourSteps.length - 1 ? 'Finalizar recorrido' : 'Continuar'}</button>`}</div>`;
  requestAnimationFrame(() => { positionBonusTourStep(); if (step.action) target.focus({ preventScroll: true }); });
}

function finishBonusTour({ completed = false } = {}) {
  if (!bonusTour.layer) return;
  bonusTour.layer.remove();
  bonusTour.layer = null;
  if (completed) completeGuide('bonuses');
  profileView();
  openDrawer();
  discoveryView({ animate: false });
}

function startBonusTour() {
  if (bonusTour.layer || !onboardingTaskIsUnlocked('bonuses')) return;
  closeDrawer();
  bonusTour.step = 0;
  const layer = document.createElement('section');
  layer.className = 'bonus-tour-layer';
  layer.setAttribute('aria-label', 'Recorrido de Mis bonos');
  layer.innerHTML = bonusTourMarkup();
  layer.addEventListener('click', (event) => {
    if (event.target.closest('[data-bonus-close]')) { finishBonusTour(); return; }
    if (event.target.closest('[data-bonus-open]') && bonusTour.step === 0) {
      layer.querySelector('.bonus-tour-terms').hidden = false;
      layer.querySelector('[data-bonus-open]').textContent = '− Ver menos';
      layer.querySelector('[data-bonus-open]').setAttribute('aria-expanded', 'true');
      bonusTour.step = 1;
      renderBonusTourStep();
      return;
    }
    if (event.target.closest('[data-bonus-activate]') && bonusTour.step === 5) {
      const button = layer.querySelector('[data-bonus-activate]');
      button.textContent = 'Activo';
      button.disabled = true;
      layer.querySelector('.bonus-tour-card').classList.add('is-active');
      bonusTour.step = 6;
      renderBonusTourStep();
      return;
    }
    if (event.target.closest('[data-bonus-prev]') && bonusTour.step > 0) {
      bonusTour.step--;
      if (bonusTour.step === 0) {
        layer.querySelector('.bonus-tour-terms').hidden = true;
        layer.querySelector('[data-bonus-open]').textContent = '+ Más Información';
        layer.querySelector('[data-bonus-open]').setAttribute('aria-expanded', 'false');
      }
      renderBonusTourStep();
      return;
    }
    if (event.target.closest('[data-bonus-next]')) {
      if (bonusTour.step === bonusTourSteps.length - 1) finishBonusTour({ completed: true });
      else { bonusTour.step++; renderBonusTourStep(); }
    }
  });
  document.body.append(layer);
  bonusTour.layer = layer;
  renderBonusTourStep();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bonusTour.layer) { event.stopImmediatePropagation(); finishBonusTour(); }
}, true);
window.addEventListener('resize', () => { if (bonusTour.layer) requestAnimationFrame(positionBonusTourStep); });
