const bonusTour = { layer: null, entry: null, entryTarget: null, step: 0 };

function showRedeemedBonuses() {
  closeDrawer();
  const layer = document.createElement('section');
  layer.className = 'bonus-tour-layer';
  layer.setAttribute('aria-label', 'Mis bonos');
  layer.innerHTML = bonusTourMarkup();
  layer.querySelectorAll('.bonus-tour-scrim,.bonus-tour-focus,.bonus-tour-coachmark').forEach(element => element.remove());
  layer.insertAdjacentHTML('beforeend', '<button class="bonus-tour-close" data-redeemed-close type="button" aria-label="Cerrar Mis bonos">×</button>');
  layer.addEventListener('click', event => {
    if (event.target.closest('[data-redeemed-close]')) { layer.remove(); discoveryView({ animate: false }); openDrawer(); }
    const detailsButton = event.target.closest('[data-bonus-open]');
    if (detailsButton) {
      const terms = layer.querySelector('.bonus-tour-terms');
      terms.hidden = !terms.hidden;
      detailsButton.textContent = terms.hidden ? '+ Más Información' : '− Ver menos';
      detailsButton.setAttribute('aria-expanded', String(!terms.hidden));
    }
    const activate = event.target.closest('[data-bonus-activate]');
    if (activate) { activate.textContent = 'Activo'; activate.disabled = true; }
  });
  document.body.append(layer);
}

const bonusTourSteps = [
  { target: '[data-bonus-entry]', title: 'Entra a Mis bonos', body: 'Pulsa "Mis bonos" en tu menú de usuario para conocer tus bonos.', action: true },
  { target: '.bonus-tour-example', title: 'Conoce este bono de prueba', body: 'Este bono de prueba te permitirá conocer sus reglas y cómo activarlo durante el tutorial.' },
  { target: '[data-bonus-open]', title: 'Abre el detalle del bono', body: 'Pulsa "Más Información" para revisar sus reglas.', action: true },
  { target: '[data-bonus-validity]', title: 'Revisa la vigencia', body: 'Aquí ves hasta cuándo está disponible y cuánto tiempo tienes para cumplir las condiciones después de recibirlo.' },
  { target: '[data-bonus-sections]', title: 'Revisa dónde aplica', body: 'Por ejemplo, este bono aplica a apuestas deportivas. La sección te indica el tipo de apuestas que cuentan para activarlo.' },
  { target: '[data-bonus-conditions]', title: 'Lee las condiciones', body: 'Aquí se muestran la cuota mínima, la cuota máxima y cómo se calcula la ganancia neta del bono.' },
  { target: '[data-bonus-requirements]', title: 'Comprueba las restricciones', body: 'Estas reglas aclaran qué tipo de apuestas no aplican.' },
  { target: '[data-bonus-withdrawal]', title: '¡Ten cuidado!', body: 'Si retiras antes de cumplir las condiciones, el bono y las ganancias asociadas se cancelan.' },
  { target: '[data-bonus-one-active]', title: 'Uno activo a la vez', body: 'Si el bono no es acumulable, debes terminar o resolver el activo antes de activar otro.' },
  { target: '[data-bonus-activate]', title: 'Activa el bono', body: 'Luego de leer todas las reglas y conocer tu bono, recién pulsa "Activar".', action: true, lockedNextLabel: 'Presiona Activar' }
];

function bonusTourMarkup() {
  const mobileLinks = [['Deportes', 'nav-icono-deportes.webp'], ['Casino', 'nav-icono-casino.webp'], ['Casino en vivo', 'nav-icono-casino-live.webp'], ['Virtuales', 'nav-icono-virtuales.webp'], ['Club Olimpo', 'nav-icono-club-olimpo.webp']]
    .map(([label, asset]) => `<span><img src="assets/imgs/nav/${asset}" alt=""><small>${label}</small></span>`).join('');

  return `<header class="bonus-tour-header"><img class="bonus-tour-brand" src="https://www.olimpo.bet/static/img/isotipo_olimpo_pe.svg" alt="Olimpo.bet"><nav aria-label="Navegación principal"><span>Inicio</span><span>Deportes</span><span class="is-club">Club Olimpo</span><span>Casino</span><span>Casino en vivo</span><span>Virtuales</span><span>Misiones</span><span>Promociones</span><span>Blog</span><span>Ayuda</span></nav><div class="bonus-tour-account"><span class="bonus-tour-deposit">Deposita</span><span class="bonus-tour-balance">S/ 3.50⌄</span><span class="bonus-tour-avatar">E</span></div></header>
    <div class="bonus-tour-tabs"><span>♧&nbsp; Promociones</span><strong>♢&nbsp; Mis bonos</strong></div>
    <main class="bonus-tour-layout"><div class="bonus-tour-main">
      <div class="bonus-tour-categories"><h2>Categorías</h2><div><span class="is-active">Apuestas deportivas <b>1</b></span><span>Casino <b>0</b></span><span>Deportes virtuales <b>0</b></span><span>Casino en vivo <b>0</b></span></div></div>
      <div class="bonus-tour-notice" data-bonus-one-active><span>ⓘ</span><p>Recuerda que solo puedes tener un bono activo a la vez. Apenas se resuelva el evento de tu primer bono, podrás activar el siguiente.</p></div>
      <section class="bonus-tour-category"><h2>Apuestas deportivas (1)</h2><div class="bonus-tour-example"><article class="bonus-tour-card"><div class="bonus-tour-card-head"><img src="https://www.olimpo.bet/static/img/bonos/bono-deportes.svg" alt=""><span>Bono de prueba<small>Solo para este recorrido</small></span><span class="bonus-tour-card-menu" aria-hidden="true">•••</span></div><div class="bonus-tour-card-actions"><span class="bonus-tour-expiry">◷&nbsp; Vence el 31/12/2026</span><button data-bonus-activate type="button">Activar</button></div></article>
      <section class="bonus-tour-info"><button data-bonus-open type="button" aria-expanded="false">+ Más Información</button><div class="bonus-tour-terms" hidden><h3>Términos y Condiciones del bono de prueba</h3><p class="bonus-tour-term" data-bonus-validity><strong>Vigencia</strong><span>Disponible hasta el 31/12/2026. Una vez otorgado, tienes 7 días para cumplir las condiciones.</span></p><p class="bonus-tour-term" data-bonus-sections><strong>Secciones válidas</strong><span>Válido para apuestas deportivas simples y combinadas.</span></p><p class="bonus-tour-term" data-bonus-conditions><strong>Condiciones</strong><span>Cuota mínima por evento 2.0, por cupón 2.0 y cuota máxima por cupón 20. Se añadirá al saldo la ganancia neta, descontando el monto de la jugada.</span></p><p class="bonus-tour-term" data-bonus-requirements><strong>Restricciones</strong><span>No válido para apuestas live, betbuilder, Cashout ni E-sports. No se considerarán apuestas para resultados complementarios de un mismo mercado en un mismo evento.</span></p><p class="bonus-tour-term bonus-tour-term--warning" data-bonus-withdrawal><strong>Antes de retirar</strong><span>Si solicitas un retiro antes de cumplir las condiciones, el bono y las ganancias asociadas se cancelan automáticamente.</span></p></div></section></div></section>
      <section class="bonus-tour-empty"><h2>Casino (0)</h2><p>No tienes bonos disponibles</p><h2>Deportes virtuales (0)</h2><p>No tienes bonos disponibles</p><h2>Casino en vivo (0)</h2><p>No tienes bonos disponibles</p></section>
    </div><aside class="bonus-tour-side"><section class="bonus-tour-code"><img src="https://www.olimpo.bet/static/img/bonos/active_code.png" alt="Activa tu código"><div><strong>¡Actívalo y disfruta tu recompensa!</strong><span>Escribe tu código aquí <b>Aplicar</b></span><small>ⓘ&nbsp; Solo válido una vez por usuario.</small></div></section><section class="bonus-tour-wallet"><h3><img src="https://www.olimpo.bet/static/img/bonos/billetera.svg" alt=""> MI BILLETERA</h3><strong>S/ 3.50</strong><small>Saldo</small><div><span>Saldo real <b>S/ 3.50</b></span><span>Bonos <b>S/ 0.00</b></span><span>Apuestas deportivas gratis <b>S/ 0.00</b></span></div></section></aside></main>
    <nav class="bonus-tour-mobile-nav" aria-label="Navegación móvil">${mobileLinks}</nav><div class="bonus-tour-scrim" aria-hidden="true"></div><span class="initial-onboarding-focus bonus-tour-focus" aria-hidden="true"></span><span class="bonus-tour-pointer" aria-hidden="true" hidden></span><aside class="bonus-tour-coachmark" role="dialog" aria-label="Guía de bonos" aria-live="polite"></aside>`;
}

function positionBonusTourFocus() {
  const target = bonusTour.layer?.querySelector('.bonus-tour-target');
  const focus = bonusTour.layer?.querySelector('.bonus-tour-focus');
  if (!target || !focus) return;
  const rect = target.getBoundingClientRect();
  positionBonusTourPointer(rect);
  focus.style.left = `${rect.left - 7}px`;
  focus.style.top = `${rect.top - 7}px`;
  focus.style.width = `${rect.width + 14}px`;
  focus.style.height = `${rect.height + 14}px`;
}

function positionBonusTourPointer(rect) {
  const pointer = bonusTour.layer?.querySelector('.bonus-tour-pointer');
  if (!pointer) return;
  const step = bonusTourSteps[bonusTour.step];
  const show = step && (step.target === '[data-bonus-open]' || step.target === '[data-bonus-activate]');
  pointer.hidden = !show;
  if (!show) return;
  const size = 48;
  if (rect.left > size + 8) {
    pointer.style.left = `${rect.left - size - 2}px`;
    pointer.style.top = `${rect.top + rect.height / 2 - size / 2}px`;
    pointer.style.transform = 'rotate(135deg)';
  } else {
    pointer.style.left = `${Math.max(8, Math.min(window.innerWidth - size - 8, rect.left + rect.width / 2 - size / 2))}px`;
    pointer.style.top = `${Math.max(8, rect.top - size - 4)}px`;
    pointer.style.transform = 'rotate(225deg)';
  }
}

function positionBonusTourStep() {
  if (bonusTour.entry) {
    positionBonusTourEntry();
    return;
  }
  if (!bonusTour.layer) return;
  const target = bonusTour.layer.querySelector('.bonus-tour-target');
  const coachmark = bonusTour.layer.querySelector('.bonus-tour-coachmark');
  if (!target || !coachmark) return;
  const rect = target.getBoundingClientRect();
  if (window.matchMedia('(max-width: 768px)').matches) {
    coachmark.style.left = '12px';
    coachmark.style.right = '12px';
    coachmark.style.width = 'auto';
    fitGuideCoachmark(coachmark);
    const coachmarkHeight = coachmark.offsetHeight;
    const bounds = guideVisibleBounds();
    const desiredTargetTop = Math.max(bounds.top + 76, Math.min(rect.top, bounds.bottom - rect.height - coachmarkHeight - 36));
    bonusTour.layer.scrollTop += rect.top - desiredTargetTop;
    requestAnimationFrame(() => {
      const adjustedRect = target.getBoundingClientRect();
      const below = adjustedRect.bottom + 12;
      const above = adjustedRect.top - coachmarkHeight - 12;
      const maxTop = bounds.bottom - coachmarkHeight - 12;
      const top = below <= maxTop ? below : above >= 64 ? above : Math.max(64, maxTop);
      coachmark.style.top = `${top}px`;
      coachmark.style.bottom = 'auto';
      fitGuideCoachmark(coachmark);
      positionBonusTourFocus();
      requestAnimationFrame(() => bonusTour.layer?.classList.add('is-positioned'));
    });
  } else {
    const desiredTop = Math.max(120, Math.min(rect.top, window.innerHeight - rect.height - 80));
    bonusTour.layer.scrollTop += rect.top - desiredTop;
    requestAnimationFrame(() => {
      positionAnchoredCoachmark(target, coachmark);
      positionBonusTourFocus();
      requestAnimationFrame(() => bonusTour.layer?.classList.add('is-positioned'));
    });
  }
}

function renderBonusTourStep() {
  if (bonusTour.step === 0) { showBonusTourEntry(); return; }
  if (!bonusTour.layer) return;
  const step = bonusTourSteps[bonusTour.step];
  bonusTour.layer.querySelector('.bonus-tour-terms').hidden = bonusTour.step <= 2;
  bonusTour.layer.querySelector('.bonus-tour-target')?.classList.remove('bonus-tour-target');
  const target = bonusTour.layer.querySelector(step.target);
  target.classList.add('bonus-tour-target');
  const coachmark = bonusTour.layer.querySelector('.bonus-tour-coachmark');
  const nextButton = step.action
    ? '<button data-bonus-next type="button" disabled>Siguiente</button>'
    : `<button data-bonus-next type="button">${bonusTour.step === bonusTourSteps.length - 1 ? 'Finalizar recorrido' : 'Continuar'}</button>`;
  coachmark.innerHTML = bonusTourCoachmarkContent(step, nextButton);
  requestAnimationFrame(() => { positionBonusTourStep(); if (step.action) target.focus({ preventScroll: true }); });
}

function finishBonusTour({ completed = false } = {}) {
  if (!bonusTour.layer && !bonusTour.entry) return;
  clearBonusTourEntry();
  bonusTour.layer?.remove();
  bonusTour.layer = null;
  if (completed) completeGuide('bonuses');
  profileView();
  openDrawer();
  discoveryView({ animate: false });
}

function startBonusTour() {
  if (bonusTour.layer || bonusTour.entry || !onboardingTaskIsUnlocked('bonuses')) return;
  bonusTour.step = 0;
  showBonusTourEntry();
}

function bonusTourCoachmarkContent(step, nextButton = '<button data-bonus-next type="button" disabled>Siguiente</button>') {
  return `<button class="bonus-tour-close" data-bonus-close type="button" aria-label="Cerrar recorrido">×</button><span>Conoce tus bonos</span><strong>${step.title}</strong><p>${step.body}</p><span>Paso ${bonusTour.step + 1} de ${bonusTourSteps.length}</span><div class="bonus-tour-progress" style="--bonus-tour-step-count:${bonusTourSteps.length}">${bonusTourSteps.map((_, index) => `<i class="${index <= bonusTour.step ? 'is-filled' : ''}"></i>`).join('')}</div><div class="bonus-tour-controls"><button data-bonus-prev type="button" ${bonusTour.step === 0 ? 'disabled' : ''}>Anterior</button>${nextButton}</div>`;
}

function clearBonusTourEntry() {
  bonusTour.entry?.remove();
  bonusTour.entry = null;
  bonusTour.entryTarget?.classList.remove('is-onboarding-target');
  bonusTour.entryTarget?.removeAttribute('data-bonus-entry');
  bonusTour.entryTarget?.removeAttribute('aria-describedby');
  bonusTour.entryTarget = null;
  drawer.classList.remove('is-onboarding-active');
}

function positionBonusTourEntry() {
  if (!bonusTour.entry || !bonusTour.entryTarget) return;
  const card = bonusTour.entry.querySelector('.bonus-tour-coachmark');
  const host = bonusTour.entryTarget.closest('.account-view');
  const bounds = guideVisibleBounds();
  card.style.width = `${Math.min(340, bounds.width - 24)}px`;
  if (host) host.scrollTop += bonusTour.entryTarget.getBoundingClientRect().top - (bounds.top + 80);
  positionAnchoredCoachmark(bonusTour.entryTarget, card);
  const rect = bonusTour.entryTarget.getBoundingClientRect();
  const focus = bonusTour.entry.querySelector('.initial-onboarding-focus');
  Object.assign(focus.style, {left:`${rect.left - 7}px`, top:`${rect.top - 7}px`, width:`${rect.width + 14}px`, height:`${rect.height + 14}px`});
}

function showBonusTourEntry() {
  bonusTour.layer?.remove();
  bonusTour.layer = null;
  clearBonusTourEntry();
  profileView();
  openDrawer();
  drawer.classList.add('is-onboarding-active');
  const target = drawerContent.querySelector('.account-menu-row');
  target.dataset.bonusEntry = '';
  target.classList.add('is-onboarding-target');
  target.setAttribute('aria-describedby', 'bonusEntryCoachmark');
  bonusTour.entryTarget = target;
  const overlay = document.createElement('div');
  overlay.className = 'initial-onboarding-overlay bonus-entry-overlay';
  overlay.innerHTML = `<span class="initial-onboarding-scrim" aria-hidden="true"></span><span class="initial-onboarding-focus" aria-hidden="true"></span><aside class="bonus-tour-coachmark" id="bonusEntryCoachmark" role="dialog" aria-label="Guía de bonos">${bonusTourCoachmarkContent(bonusTourSteps[0])}</aside>`;
  overlay.addEventListener('click', event => { if (event.target.closest('[data-bonus-close]')) finishBonusTour(); });
  document.body.append(overlay);
  bonusTour.entry = overlay;
  requestAnimationFrame(positionBonusTourEntry);
  window.setTimeout(positionBonusTourEntry, 300);
}

drawerContent.addEventListener('click', event => {
  if (bonusTour.entry && event.target.closest('[data-bonus-entry]')) {
    clearBonusTourEntry();
    bonusTour.step = 1;
    openBonusTourPage();
  }
});

function openBonusTourPage() {
  closeDrawer();
  const layer = document.createElement('section');
  layer.className = 'bonus-tour-layer';
  layer.setAttribute('aria-label', 'Recorrido de Mis bonos');
  layer.innerHTML = bonusTourMarkup();
  layer.addEventListener('scroll', positionBonusTourFocus, { passive: true });
  layer.addEventListener('click', (event) => {
    if (event.target.closest('[data-bonus-close]')) { finishBonusTour(); return; }
    if (event.target.closest('[data-bonus-open]') && bonusTourSteps[bonusTour.step].target === '[data-bonus-open]') {
      layer.querySelector('.bonus-tour-terms').hidden = false;
      layer.querySelector('[data-bonus-open]').textContent = '− Ver menos';
      layer.querySelector('[data-bonus-open]').setAttribute('aria-expanded', 'true');
      bonusTour.step++;
      renderBonusTourStep();
      return;
    }
    if (event.target.closest('[data-bonus-activate]') && bonusTourSteps[bonusTour.step].target === '[data-bonus-activate]') {
      const button = layer.querySelector('[data-bonus-activate]');
      button.textContent = 'Activo';
      button.disabled = true;
      layer.querySelector('.bonus-tour-card').classList.add('is-active');
      finishBonusTour({ completed: true });
      return;
    }
    if (event.target.closest('[data-bonus-prev]') && bonusTour.step > 0) {
      bonusTour.step--;
      if (bonusTour.step <= 2) {
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
  if (event.key === 'Escape' && (bonusTour.layer || bonusTour.entry)) { event.stopImmediatePropagation(); finishBonusTour(); }
}, true);
window.addEventListener('resize', () => { if (bonusTour.layer || bonusTour.entry) requestAnimationFrame(positionBonusTourStep); });
