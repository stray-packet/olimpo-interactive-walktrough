const banners = [
  { desktop: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1788819667718-banner_homedesktop1920x460.webp', mobile: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1788818860361-banner_homemobile_1080x548.webp' },
  { desktop: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1788793711245-ob_banner_homedesktop_torneocasinero_1920x460.webp', mobile: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1788560002450-ob_banner_homemobile_torneocasinero_1080x548.webp' },
  { desktop: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1788793979305-ob_banner_homedesktop_pozo_1920x4601.webp', mobile: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1788560482783-ob_banner_homemobile_pozo_1080x548.webp' },
  { desktop: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1789492588432-1786559145824-bannernuevohomeinvita-a-un-amigo.webp', mobile: 'https://d28gilnhu2bcbp.cloudfront.net/landing/1780503123921-invita-a-un-amigo-mobile.png' }
];

const heroTrack = document.querySelector('#heroTrack');
const heroDots = document.querySelector('#heroDots');
let activeBanner = 0;
let timer;

function renderBanner(index) {
  activeBanner = (index + banners.length) % banners.length;
  const banner = banners[activeBanner][window.matchMedia('(max-width: 768px)').matches ? 'mobile' : 'desktop'];
  heroTrack.style.backgroundImage = `url("${banner}")`;
  [...heroDots.children].forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === activeBanner));
}

banners.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.ariaLabel = `Mostrar banner ${index + 1}`;
  dot.addEventListener('click', () => { renderBanner(index); resetTimer(); });
  heroDots.append(dot);
});

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => renderBanner(activeBanner + 1), 5000);
}

document.querySelector('#previousBanner').addEventListener('click', () => { renderBanner(activeBanner - 1); resetTimer(); });
document.querySelector('#nextBanner').addEventListener('click', () => { renderBanner(activeBanner + 1); resetTimer(); });
renderBanner(0);
resetTimer();
window.addEventListener('resize', () => renderBanner(activeBanner));

const trigger = document.querySelector('#profileTrigger');
const drawer = document.querySelector('#profileDrawer');
const scrim = document.querySelector('#drawerScrim');
const close = document.querySelector('#closeDrawer');
const drawerContent = document.querySelector('#drawerContent');
const topbar = document.querySelector('.topbar');
const brandToggle = document.querySelector('.brand');
const guestActions = document.querySelector('#guestActions');
const accountActions = document.querySelector('#accountActions');
const loginTrigger = document.querySelector('#loginTrigger');
const registerTrigger = document.querySelector('#registerTrigger');
const depositTrigger = document.querySelector('#accountActions .deposit');
const initialOnboarding = { active: false, stage: null, overlay: null, focus: null, pointer: null, coachmark: null, target: null };

function toggleGrayscale() {
  const isGrayscale = document.documentElement.classList.toggle('is-grayscale');
  brandToggle.setAttribute('aria-pressed', String(isGrayscale));
  brandToggle.setAttribute('aria-label', isGrayscale ? 'Volver a los colores normales' : 'Cambiar a blanco y negro');
  brandToggle.title = isGrayscale ? 'Volver a los colores normales' : 'Cambiar a blanco y negro';
}

function enterAuthenticated({ onboarding = false } = {}) {
  topbar.classList.remove('is-guest');
  guestActions.hidden = true;
  accountActions.hidden = false;
  if (onboarding) requestAnimationFrame(startInitialOnboarding);
}

function setOnboardingTarget(target, scope = '') {
  initialOnboarding.target?.classList.remove('is-onboarding-target');
  initialOnboarding.target?.removeAttribute('aria-describedby');
  initialOnboarding.target = target;
  target.classList.add('is-onboarding-target');
  target.setAttribute('aria-describedby', 'initialOnboardingCoachmark');
  topbar.classList.toggle('is-onboarding-active', scope === 'header');
  drawer.classList.toggle('is-onboarding-active', scope === 'drawer' || scope === 'discovery');
  drawerContent.querySelector('.discovery-view')?.classList.toggle('is-onboarding-active', scope === 'discovery');
  positionInitialOnboarding();
  requestAnimationFrame(positionInitialOnboarding);
  window.setTimeout(positionInitialOnboarding, 300);
  target.focus({ preventScroll: true });
}

function positionInitialOnboarding() {
  if (!initialOnboarding.active || !initialOnboarding.target) return;
  const rect = initialOnboarding.target.getBoundingClientRect();
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  const padding = mobile ? 12 : 18;
  const coachmarkWidth = mobile ? window.innerWidth - (padding * 2) : 284;
  const left = Math.min(Math.max(rect.right - coachmarkWidth, padding), window.innerWidth - coachmarkWidth - padding);
  const coachmarkHeight = 168;
  const below = rect.bottom + 18;
  const top = below + coachmarkHeight <= window.innerHeight - padding ? below : Math.max(padding, rect.top - coachmarkHeight - 18);
  initialOnboarding.focus.style.left = `${rect.left - 8}px`;
  initialOnboarding.focus.style.top = `${rect.top - 8}px`;
  initialOnboarding.focus.style.width = `${rect.width + 16}px`;
  initialOnboarding.focus.style.height = `${rect.height + 16}px`;
  initialOnboarding.pointer.style.left = `${rect.right - 4}px`;
  initialOnboarding.pointer.style.top = `${rect.bottom - 2}px`;
  initialOnboarding.coachmark.style.width = `${coachmarkWidth}px`;
  initialOnboarding.coachmark.style.left = `${left}px`;
  initialOnboarding.coachmark.style.top = `${top}px`;
}

function setInitialOnboardingCopy({ eyebrow, title, body, progress, summary = false }) {
  initialOnboarding.overlay.dataset.stage = summary ? 'summary' : initialOnboarding.stage;
  const closeControl = summary ? '<button class="initial-onboarding-close" type="button" aria-label="Cerrar bienvenida">×</button>' : '';
  initialOnboarding.coachmark.innerHTML = `${closeControl}<span class="initial-onboarding-eyebrow">${eyebrow}</span><strong>${title}</strong><p>${body}</p><span class="initial-onboarding-progress">${progress}</span>`;
}

function startInitialOnboarding() {
  if (initialOnboarding.active) return;
  initialOnboarding.active = true;
  initialOnboarding.stage = 'profile';
  const overlay = document.createElement('div');
  overlay.className = 'initial-onboarding-overlay';
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML = '<span class="initial-onboarding-scrim" aria-hidden="true"></span><span class="initial-onboarding-focus" aria-hidden="true"></span><span class="initial-onboarding-pointer" aria-hidden="true"><svg viewBox="0 0 28 34" fill="none"><path d="M5.5 2.5 23.5 19l-8 1.6-3.4 8.9L5.5 2.5Z" fill="#9EE86E" stroke="#0D2B16" stroke-width="2" stroke-linejoin="round"/></svg></span><aside class="initial-onboarding-coachmark" id="initialOnboardingCoachmark" role="dialog" aria-live="polite" aria-label="Orientación inicial"></aside>';
  document.body.append(overlay);
  initialOnboarding.overlay = overlay;
  initialOnboarding.focus = overlay.querySelector('.initial-onboarding-focus');
  initialOnboarding.pointer = overlay.querySelector('.initial-onboarding-pointer');
  initialOnboarding.coachmark = overlay.querySelector('.initial-onboarding-coachmark');
  setInitialOnboardingCopy({ eyebrow: 'Bienvenido a Olimpo', title: 'Tu espacio personal', body: 'Abre tu menú de usuario para encontrar ayuda, guías y tu bono inicial de bienvenida.', progress: 'Paso 1 de 2' });
  setOnboardingTarget(trigger, 'header');
}

function advanceInitialOnboardingToDiscover() {
  if (!initialOnboarding.active || initialOnboarding.stage !== 'profile') return;
  initialOnboarding.stage = 'discover';
  const discoverEntry = drawerContent.querySelector('.account-menu-row[data-action="discover"]');
  setInitialOnboardingCopy({ eyebrow: 'Descubre Olimpo', title: 'Encuentra tus respuestas', body: 'Aquí tendrás guías claras para resolver tus consultas y empezar con confianza.', progress: 'Paso 2 de 2' });
  setOnboardingTarget(discoverEntry, 'drawer');
}

function showInitialOnboardingSummary() {
  if (!initialOnboarding.active || initialOnboarding.stage !== 'discover') return;
  initialOnboarding.stage = 'summary';
  const firstSteps = drawerContent.querySelector('.first-steps-card');
  setInitialOnboardingCopy({ eyebrow: 'Primeros pasos', title: 'Tu bienvenida empieza aquí', body: 'Completa 4 pasos y recibe los puntos necesarios para canjear un bono de S/50 en Club Olimpo.', progress: 'Listo', summary: true });
  firstSteps.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  window.requestAnimationFrame(() => setOnboardingTarget(firstSteps, 'discovery'));
}

function finishInitialOnboarding() {
  if (!initialOnboarding.active) return;
  initialOnboarding.target?.classList.remove('is-onboarding-target');
  initialOnboarding.target?.removeAttribute('aria-describedby');
  topbar.classList.remove('is-onboarding-active');
  drawer.classList.remove('is-onboarding-active');
  drawerContent.querySelector('.discovery-view')?.classList.remove('is-onboarding-active');
  initialOnboarding.overlay?.classList.add('is-leaving');
  window.setTimeout(() => initialOnboarding.overlay?.remove(), 260);
  initialOnboarding.active = false;
  initialOnboarding.stage = null;
  initialOnboarding.target = null;
}

const guides = {
  bonuses: { title: 'Conoce tus bonos' },
  kyc: { icon: '◉', category: 'Mi cuenta', title: 'Verifica tu identidad', intro: 'Prepárate antes de iniciar la verificación de tu identidad.', steps: [['Prepara tu documento', 'Ten a la mano tu DNI o Carnet de Extranjería vigente.'], ['Busca un lugar bien iluminado', 'Ubícate en un espacio con buena iluminación, sin filtros ni desenfoque, para que tu rostro se vea con claridad.']] },
  club: { icon: '♛', category: 'Club Olimpo', title: 'Conoce Club Olimpo', intro: 'Descubre tus puntos y las recompensas que puedes elegir.', steps: [['Todo en un mismo lugar', 'En Club Olimpo puedes consultar tus puntos, beneficios y recompensas disponibles.'], ['Consulta tus puntos', 'Tu saldo de puntos aparece dentro de Club Olimpo para que sepas qué recompensas tienes a tu alcance.'], ['Encuentra una recompensa', 'Explora la tienda y compara los premios disponibles con los puntos que pide cada uno.'], ['Canjea con confianza', 'Antes de confirmar, revisa el premio, su costo en puntos y las condiciones aplicables.']] }
};

let completedGuideIds = [];
const completedGuides = () => completedGuideIds;
const guideIsCompleted = (id) => completedGuides().includes(id);
function completeGuide(id) { const completed = completedGuides(); if (!completed.includes(id)) completedGuideIds = [...completed, id]; }
let kycMockTimer = null;
let depositStepCompleted = false;
const onboardingTaskOrder = ['kyc', 'bonuses', 'club', 'deposit'];
const onboardingTaskIsComplete = (id) => id === 'deposit' ? depositStepCompleted : guideIsCompleted(id);
const onboardingTaskIsUnlocked = (id) => {
  const index = onboardingTaskOrder.indexOf(id);
  return index === 0 || onboardingTaskIsComplete(onboardingTaskOrder[index - 1]);
};
const firstStepsCompletedCount = () => onboardingTaskOrder.filter(onboardingTaskIsComplete).length;
const closeButton = () => '<button class="drawer-close" data-action="close" type="button" aria-label="Cerrar menú">×</button>';

const realMenuIcons = {
  mail: 'https://www.olimpo.bet/assets/img/userMenu/mensajes.svg', wallet: 'https://www.olimpo.bet/assets/img/userMenu/deposita_new.svg', cash: 'https://www.olimpo.bet/assets/img/userMenu/retira_new.svg', ticket: 'https://www.olimpo.bet/static/img/userMenu/misBonos.svg', mission: 'https://www.olimpo.bet/static/img/userMenu/misiones.svg', club: 'https://www.olimpo.bet/static/img/userMenu/clubOlimpo.svg', user: 'https://www.olimpo.bet/static/img/userMenu/miPerfil.svg', history: 'https://www.olimpo.bet/static/img/userMenu/miHistorial.svg'
};
const icon = (name) => realMenuIcons[name] ? `<img src="${realMenuIcons[name]}" alt=""/>` : ({
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h14.5v11H4zM17 10.5h3v5h-3zM4 7.5V5.5h12"/><circle cx="17.5" cy="13" r=".7"/></svg>',
  cash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v10H4zM7 10h10M7 14h4"/><path d="M16 5v4M14 7h4"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16v8H4a2 2 0 0 0 0-4 2 2 0 0 0 0-4zM15 9v6"/></svg>',
  mission: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8l1 3 3 1v8l-3 1-1 3H8l-1-3-3-1V8l3-1zM9 12l2 2 4-4"/></svg>',
  club: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L5 13h6l-1 9 8-12h-6z"/></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.5 3.2-5.5 7-5.5s6.2 2 7 5.5"/></svg>',
  history: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5v5h5M5 10a7 7 0 1 0 2-5"/><path d="M12 8v4l3 2"/></svg>',
  help: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M9.5 9a2.7 2.7 0 1 1 4.1 2.3c-1 .6-1.6 1.1-1.6 2.2M12 16.8h.01"/></svg>',
  control: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v16M18 4v16M3 8h6M15 15h6"/><circle cx="9" cy="8" r="2"/><circle cx="15" cy="15" r="2"/></svg>',
  logout: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H5v14h5M14 8l4 4-4 4M8 12h10"/></svg>',
  discover: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/></svg>'
})[name];

function profileRow(iconName, label, action = '') {
  return `<button class="account-menu-row" ${action ? `data-action="${action}"` : ''} type="button"><span class="account-menu-icon ${iconName}">${icon(iconName)}</span><span>${label}</span><b>›</b></button>`;
}

// Lucide `check` (MIT): un único trazo consistente para todos los estados de éxito.
function checkIcon(className = '') {
  return `<svg class="library-check ${className}" data-icon-library="lucide" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function profileView() {
  drawerContent.innerHTML = `<section class="account-view"><header class="account-hero"><img src="https://www.olimpo.bet/static/img/logo_olimpo.svg" alt="Olimpo.bet"/><button class="account-close" data-action="close" type="button" aria-label="Cerrar menú">×</button></header><article class="account-balance-card"><div class="balance-main"><span class="profile-avatar">E</span><strong>S/ 3.50</strong><small>Saldo</small><img class="balance-libra" src="https://www.olimpo.bet/static/img/userMenu/libra.svg" alt=""/></div><div class="balance-details"><p><strong>S/ 3.50</strong><span>Saldo Real</span></p><p><strong>S/ 0.00</strong><span>Bonos</span></p><p><strong>S/ 0.00</strong><span>Apuestas gratis</span></p></div></article><div class="account-quick"><button type="button"><span class="account-menu-icon mail">${icon('mail')}</span><b>Mensajes</b><em>6</em></button><button type="button"><span class="account-menu-icon wallet">${icon('wallet')}</span><b>Deposita</b></button><button type="button"><span class="account-menu-icon cash">${icon('cash')}</span><b>Retira</b></button></div><nav class="account-menu" aria-label="Opciones de cuenta">${profileRow('ticket', 'Mis bonos')}${profileRow('mission', 'Misiones del Olimpo')}${profileRow('discover', 'Descubre Olimpo', 'discover')}${profileRow('club', 'Club Olimpo')}${profileRow('user', 'Mi perfil')}${profileRow('history', 'Historial')}${profileRow('help', 'Centro de ayuda')}${profileRow('control', 'Control')}</nav><section class="other-options"><h3>Otras opciones</h3><button type="button"><span class="account-menu-icon logout">${icon('logout')}</span>Cerrar sesión</button></section></section>`;
}
function onboardingTask(id, index) {
  const guide = guides[id];
  const complete = onboardingTaskIsComplete(id);
  const unlocked = onboardingTaskIsUnlocked(id);
  const title = id === 'deposit' ? 'Realiza tu primer depósito' : guide.title;
  let action = id === 'deposit'
    ? '<button class="task-action" type="button" disabled>Comenzar</button>'
    : '<button class="task-action" type="button" disabled>Ver guía</button>';

  if (complete) {
    action = id === 'deposit'
      ? '<span class="onboarding-task-complete">Completado</span>'
      : `<button class="task-action" data-guide="${id}" type="button">Volver a ver guía</button>`;
  } else if (unlocked) {
    action = id === 'deposit'
      ? '<button class="task-action" data-deposit-guide type="button">Comenzar</button>'
      : `<button class="task-action" data-guide="${id}" type="button">Ver guía</button>`;
  }

  return `<article class="task-row onboarding-task ${complete ? 'is-complete' : ''} ${unlocked ? 'is-unlocked' : 'is-locked'}"><span class="onboarding-task-number" aria-hidden="true">${complete ? checkIcon() : index + 1}</span><div class="task-main"><span class="task-title-window"><strong class="task-title">${title}</strong></span></div>${action}</article>`;
}
function updateDiscoveryTitleMarquees() {
  drawerContent.querySelectorAll('.task-title-window').forEach((windowEl) => {
    const title = windowEl.querySelector('.task-title');
    const overflow = title.scrollWidth - windowEl.clientWidth;
    if (overflow > 1) {
      windowEl.style.setProperty('--title-shift', `${overflow + 12}px`);
      windowEl.classList.add('is-overflowing');
    } else {
      windowEl.style.removeProperty('--title-shift');
      windowEl.classList.remove('is-overflowing');
    }
  });
}

const discoveryTuneDefaults = {
  lightX: 0,
  lightY: 2,
  lightWidth: 260,
  lightHeight: 51,
  lightBlur: 19.4,
  lightOpacity: 0.68,
  lineX: 0,
  lineY: -2,
  lineWidth: 72,
  lineHeight: 2,
  lineTaper: 0
};

let discoveryTuneValues = { ...discoveryTuneDefaults };

function applyDiscoveryTune() {
  const header = drawerContent.querySelector('.discovery-header');
  if (!header) return;
  header.style.setProperty('--discovery-light-x', `${discoveryTuneValues.lightX}px`);
  header.style.setProperty('--discovery-light-y', `${discoveryTuneValues.lightY}px`);
  header.style.setProperty('--discovery-light-width', `${discoveryTuneValues.lightWidth}px`);
  header.style.setProperty('--discovery-light-height', `${discoveryTuneValues.lightHeight}px`);
  header.style.setProperty('--discovery-light-blur', `${discoveryTuneValues.lightBlur}px`);
  header.style.setProperty('--discovery-light-opacity', discoveryTuneValues.lightOpacity);
  header.style.setProperty('--discovery-line-x', `${discoveryTuneValues.lineX}px`);
  header.style.setProperty('--discovery-line-y', `${discoveryTuneValues.lineY}px`);
  header.style.setProperty('--discovery-line-width', `${discoveryTuneValues.lineWidth}%`);
  header.style.setProperty('--discovery-line-height', `${discoveryTuneValues.lineHeight}px`);
  header.style.setProperty('--discovery-line-taper', `${discoveryTuneValues.lineTaper}%`);
}

function initDiscoveryTuner() {
  if (!new URLSearchParams(location.search).has('tune')) return;

  const panel = document.createElement('aside');
  panel.className = 'discovery-tuner';
  panel.innerHTML = `<div class="discovery-tuner-heading"><strong>Ajustes visuales</strong><button type="button" data-tune-action="reset">Restablecer</button></div><p>Mueve los valores y copia la configuración final.</p><div class="discovery-tuner-controls"></div><button class="discovery-tuner-copy" type="button" data-tune-action="copy">Copiar valores</button><output class="discovery-tuner-status" aria-live="polite"></output>`;
  document.body.append(panel);

  const groups = [
    ['Haz / glow', [['lightX', 'Posición X', -100, 100, 1, 'px'], ['lightY', 'Posición Y', -80, 20, 1, 'px'], ['lightWidth', 'Ancho', 100, 360, 1, 'px'], ['lightHeight', 'Altura', 24, 120, 1, 'px'], ['lightBlur', 'Blur', 0, 30, .1, 'px'], ['lightOpacity', 'Opacidad', 0, 1, .01, '']]],
    ['Línea', [['lineX', 'Posición X', -100, 100, 1, 'px'], ['lineY', 'Posición Y', -30, 30, 1, 'px'], ['lineWidth', 'Ancho', 30, 100, 1, '%'], ['lineHeight', 'Grosor', 1, 8, .5, 'px'], ['lineTaper', 'Afinado extremos', 0, 25, 1, '%']]]
  ];
  const controls = panel.querySelector('.discovery-tuner-controls');
  groups.forEach(([groupName, items]) => {
    const group = document.createElement('fieldset');
    group.innerHTML = `<legend>${groupName}</legend>`;
    items.forEach(([key, label, min, max, step, unit]) => {
      const row = document.createElement('label');
      row.className = 'discovery-tuner-row';
      row.innerHTML = `<span>${label}</span><output data-tune-output="${key}"></output><input type="range" data-tune-key="${key}" min="${min}" max="${max}" step="${step}" value="${discoveryTuneValues[key]}"/>`;
      row.querySelector('output').dataset.unit = unit;
      group.append(row);
    });
    controls.append(group);
  });

  const refresh = () => {
    panel.querySelectorAll('[data-tune-key]').forEach((input) => {
      const key = input.dataset.tuneKey;
      input.value = discoveryTuneValues[key];
      const output = panel.querySelector(`[data-tune-output="${key}"]`);
      output.value = `${discoveryTuneValues[key]}${output.dataset.unit}`;
    });
    applyDiscoveryTune();
  };
  panel.addEventListener('input', (event) => {
    const input = event.target.closest('[data-tune-key]');
    if (!input) return;
    discoveryTuneValues[input.dataset.tuneKey] = Number(input.value);
    refresh();
  });
  panel.addEventListener('click', async (event) => {
    const action = event.target.closest('[data-tune-action]')?.dataset.tuneAction;
    if (action === 'reset') { discoveryTuneValues = { ...discoveryTuneDefaults }; refresh(); }
    if (action === 'copy') {
      const text = JSON.stringify(discoveryTuneValues, null, 2);
      try { await navigator.clipboard.writeText(text); } catch { /* El valor sigue visible para copiarlo manualmente. */ }
      panel.querySelector('.discovery-tuner-status').textContent = 'Valores copiados';
    }
  });
  refresh();
}

function discoveryView({ animate = true } = {}) {
  const count = firstStepsCompletedCount();
  const completed = count === onboardingTaskOrder.length;
  const benefit = completed
    ? '¡Onboarding completado! Ya puedes canjear tu bono de S/50.'
    : 'Completa los 4 pasos y recibe los puntos necesarios para canjear un bono de S/50 en Club Olimpo.';
  const progressSegments = onboardingTaskOrder.map((_, index) => `<i class="${count > index ? 'is-filled' : ''}"></i>`).join('');
  const tasks = onboardingTaskOrder.map(onboardingTask).join('');
  const rewardAction = completed
    ? '<button class="first-steps-reward-cta" data-action="club-redemption" type="button">Canjea tu bono de S/50</button>'
    : '<button class="first-steps-reward-cta" type="button" disabled>Completa los 4 pasos</button>';

  drawerContent.innerHTML = `<section class="discovery-view"><header class="discovery-header"><button class="drawer-close discovery-back" data-action="profile" type="button" aria-label="Volver a Mi cuenta"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden="true"><path d="M6 11L1 6L6 0.999999" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><h2>Descubre Olimpo</h2><span class="discovery-light" aria-hidden="true"></span></header><div class="discovery-scroll"><section class="task-category task-category--first"><div class="first-steps-card"><div class="first-steps-header"><div class="first-steps-copy"><h3>Primeros pasos</h3><p class="first-steps-benefit">${benefit}</p></div><span class="category-progress"><span class="category-progress-label">${count} de 4 completados</span><span class="category-progress-bar" role="progressbar" aria-label="${count} de 4 pasos completados" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${count}">${progressSegments}</span></span></div><div class="task-journey"><div class="task-list">${tasks}</div></div><div class="first-steps-footer"><div class="onboarding-reward-copy"><span>Recompensa final</span><strong>Bono de S/50</strong><small>Canjeable con puntos en Club Olimpo</small></div>${rewardAction}</div></div></section></div></section>`;
  const discovery = drawerContent.firstElementChild;
  profileView();
  drawerContent.append(discovery);
  if (!animate) discovery.classList.add('no-entry-animation');
  requestAnimationFrame(() => { updateDiscoveryTitleMarquees(); applyDiscoveryTune(); });
}
function guideView(id, step = 0) {
  const guide = guides[id]; const [title, body, bullets = []] = guide.steps[step]; const finalStep = step === guide.steps.length - 1;
  const discovery = drawerContent.querySelector('.discovery-view') || (discoveryView(), drawerContent.querySelector('.discovery-view'));
  discovery.classList.add('is-guide-blurred');
  drawerContent.querySelector('.guide-modal-layer')?.remove();
  const modalLayer = document.createElement('div');
  modalLayer.className = 'guide-modal-layer';
  const kycMedia = step === 0
    ? '<div class="kyc-document-visual"><span>DNI</span><span>CE</span></div>'
    : '<div class="kyc-light-visual"><i></i><span><b></b></span></div>';
  const media = id === 'kyc' ? kycMedia : `<span>${guide.icon}</span>`;
  const finalLabel = id === 'kyc' ? 'Iniciar verificación' : 'Finalizar guía';
  const bulletList = bullets.length ? `<ul>${bullets.map((item) => `<li>${item}</li>`).join('')}</ul>` : '';
  modalLayer.innerHTML = `<section class="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guideStepTitle"><button class="guide-modal-close" data-action="discover" type="button" aria-label="Cerrar guía">×</button><div class="guide-modal-image ${id} kyc-step-${step + 1}" data-guide-media="${id}" aria-hidden="true">${media}</div><div class="guide-modal-copy"><h3 id="guideStepTitle">${title}</h3><p>${body}</p>${bulletList}</div><div class="guide-modal-progress"><span>Paso ${step + 1} de ${guide.steps.length}</span><div>${guide.steps.map((_, index) => `<i class="${index <= step ? 'is-current' : ''}"></i>`).join('')}</div></div><div class="guide-modal-actions"><button class="guide-modal-button guide-modal-button--secondary" data-guide-prev="${id}" data-step="${step}" type="button" ${step === 0 ? 'disabled' : ''}>Anterior</button><button class="guide-modal-button" data-guide-next="${id}" data-step="${step}" type="button">${finalStep ? finalLabel : 'Continuar'}</button></div></section>`;
  drawerContent.append(modalLayer);
  requestAnimationFrame(() => modalLayer.querySelector('.guide-modal-close')?.focus());
}
function closeGuide() {
  drawerContent.querySelector('.guide-modal-layer')?.remove();
  drawerContent.querySelector('.discovery-view')?.classList.remove('is-guide-blurred');
}

function showKycCompletionToast() {
  document.querySelector('.kyc-completion-toast')?.remove();
  const toast = document.createElement('div');
  toast.className = 'kyc-completion-toast';
  toast.setAttribute('role', 'status');
  toast.innerHTML = `${checkIcon()}<span><strong>Identidad verificada</strong><small>Ya puedes continuar con tus primeros pasos.</small></span>`;
  document.body.append(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  window.setTimeout(() => {
    toast.classList.remove('is-visible');
    window.setTimeout(() => toast.remove(), 260);
  }, 2800);
}

function startKycMock() {
  window.clearTimeout(kycMockTimer);
  closeGuide();
  const layer = document.createElement('section');
  layer.className = 'kyc-mock-layer';
  layer.setAttribute('role', 'dialog');
  layer.setAttribute('aria-modal', 'true');
  layer.setAttribute('aria-label', 'Verificación de identidad');
  layer.innerHTML = `<picture><source media="(max-width: 768px)" srcset="assets/imgs/kyc/verification-mobile.png"><img src="assets/imgs/kyc/verification-web.png" alt="Pantalla de verificación de identidad de Olimpo"></picture><div class="kyc-mock-status" role="status"><span>Abriendo verificación de identidad…</span><i aria-hidden="true"></i></div>`;
  document.body.append(layer);
  requestAnimationFrame(() => layer.classList.add('is-visible'));
  kycMockTimer = window.setTimeout(() => {
    completeGuide('kyc');
    layer.classList.remove('is-visible');
    window.setTimeout(() => {
      layer.remove();
      discoveryView({ animate: false });
      closeDrawer();
      showKycCompletionToast();
    }, 320);
  }, 4000);
}

const depositGuide = { active: false, overlay: null, focus: null, pointer: null, coachmark: null, layer: null, screen: 'entry', amountStage: 'entry', amount: '', selectedMethod: '', amountTimer: null };

function positionAnchoredCoachmark(target, coachmark, { gap = 18, padding = 18 } = {}) {
  if (!target || !coachmark) return;
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  const rect = target.getBoundingClientRect();
  if (mobile) {
    const coachmarkHeight = coachmark.offsetHeight || 150;
    const readingTerms = target.closest('.club-prototype-layer')?.dataset.clubScreen === 'terms';
    const targetIsLow = readingTerms || rect.bottom > window.innerHeight - coachmarkHeight - 94;
    coachmark.style.left = '12px';
    coachmark.style.right = '12px';
    coachmark.style.top = targetIsLow ? '76px' : 'auto';
    coachmark.style.bottom = targetIsLow ? 'auto' : '76px';
    coachmark.style.width = 'auto';
    return;
  }
  const width = Math.min(340, window.innerWidth - padding * 2);
  coachmark.style.width = `${width}px`;
  coachmark.style.right = 'auto';
  coachmark.style.bottom = 'auto';
  const measuredHeight = coachmark.offsetHeight || 160;
  const spaceRight = window.innerWidth - rect.right;
  const spaceLeft = rect.left;
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;
  if (spaceRight < width + gap && spaceLeft < width + gap) {
    const centeredLeft = rect.left + (rect.width - width) / 2;
    const verticalTop = spaceBelow >= measuredHeight + gap
      ? rect.bottom + gap
      : spaceAbove >= measuredHeight + gap
        ? rect.top - measuredHeight - gap
        : Math.min(Math.max(rect.top + rect.height / 2 - measuredHeight / 2, padding), window.innerHeight - measuredHeight - padding);
    coachmark.style.left = `${Math.min(Math.max(centeredLeft, padding), window.innerWidth - width - padding)}px`;
    coachmark.style.top = `${verticalTop}px`;
    return;
  }
  let left = spaceRight >= width + gap ? rect.right + gap : rect.left - width - gap;
  const top = Math.min(Math.max(rect.top + rect.height / 2 - measuredHeight / 2, padding), window.innerHeight - measuredHeight - padding);
  coachmark.style.left = `${Math.min(Math.max(left, padding), window.innerWidth - width - padding)}px`;
  coachmark.style.top = `${top}px`;
}

function positionDepositGuide() {
  if (!depositGuide.active) return;
  if (depositGuide.screen !== 'entry') {
    positionAnchoredCoachmark(depositGuide.layer?.querySelector('.deposit-guide-target'), depositGuide.layer?.querySelector('.deposit-flow-coachmark'));
    return;
  }
  const rect = depositTrigger.getBoundingClientRect();
  depositGuide.focus.style.left = `${rect.left - 8}px`;
  depositGuide.focus.style.top = `${rect.top - 8}px`;
  depositGuide.focus.style.width = `${rect.width + 16}px`;
  depositGuide.focus.style.height = `${rect.height + 16}px`;
  depositGuide.pointer.style.left = `${rect.right - 4}px`;
  depositGuide.pointer.style.top = `${rect.bottom - 2}px`;
  positionAnchoredCoachmark(depositTrigger, depositGuide.coachmark);
}

function depositHeader({ back = false } = {}) {
  return `<header class="deposit-flow-header">${back ? '<button data-deposit-back type="button" aria-label="Volver">‹</button>' : ''}<h1>Deposita</h1><button class="deposit-flow-balance" type="button">S/ 3.50 <span>⌄</span></button><button data-deposit-close type="button" aria-label="Cerrar depósito">×</button></header>`;
}

const depositMethods = [
  ['BCP', 'S/50 - S/50000', 'BCP', true],
  ['Interbank', 'S/50 - S/30000', 'INTERBANK', true],
  ['BBVA', 'S/50 - S/30000', 'BBVA'],
  ['PagoEfectivo PEN', 'S/5 - S/500', 'PAGOEFECTIVO_PEN'],
  ['Monnet QR', 'S/5 - S/500', 'MONNET_QR'],
  ['Yape - Tupay', 'S/5 - S/500', 'TUPAY_PEN_YAPE'],
  ['Plin - Tupay', 'S/5 - S/500', 'TUPAY_PEN_PLIN'],
  ['PagoEfectivo CIP', 'S/50 - S/900', 'PAGOEFECTIVO_CIP'],
  ['Kashio PEN', 'S/50 - S/900', 'KASHIO_PEN'],
  ['Kashio PEN QR', 'S/80 - S/500', 'KASHIO_PEN_QR']
];

function depositMethodsScreen() {
  const cards = depositMethods.map(([name, range, asset, raffle]) => `<button class="deposit-method-card" data-deposit-method="${asset}" type="button"><img class="deposit-method-logo" src="https://www.olimpo.bet/static/img/retiros/metodos/${asset}.webp" alt="${name}"><span><strong>${name}</strong><small>${range}</small></span>${raffle ? '<em>Sorteo <img src="https://www.olimpo.bet/assets/img/deposit/giveaway.svg" alt=""></em>' : ''}<b>›</b></button>`).join('');
  return `${depositHeader()}<main class="deposit-flow-content"><h2>Todos los medios de pago</h2><div class="deposit-method-grid deposit-guide-target" tabindex="-1" aria-label="Elige cualquiera de los medios de pago disponibles">${cards}</div></main><aside class="deposit-flow-coachmark" role="status"><span>Depósito · Paso 2 de 4</span><strong>Elige cómo depositar</strong><p>Selecciona el medio de pago que prefieras. Todos te permiten continuar con la guía.</p></aside>`;
}

function depositAmountIsValid(value) {
  const amount = Number(String(value).replace(',', '.'));
  return Number.isFinite(amount) && amount >= 5 && amount <= 500;
}

function depositAmountScreen() {
  const confirming = depositGuide.amountStage === 'confirm';
  const valid = depositAmountIsValid(depositGuide.amount);
  const presetButtons = [5, 170, 335, 500].map((amount) => `<button class="${Number(depositGuide.amount) === amount ? 'is-selected' : ''}" data-deposit-preset="${amount}" type="button">${amount}</button>`).join('');
  const entryTarget = confirming ? '' : 'deposit-guide-target';
  const submitTarget = confirming ? 'deposit-guide-target' : '';
  const coachmark = confirming
    ? '<span>Depósito · Paso 4 de 4</span><strong>Todo listo para continuar</strong><p>Revisa el monto y pulsa «Ir a depositar». En este prototipo, el botón solo completa la guía y no envía dinero.</p>'
    : '<span>Depósito · Paso 3 de 4</span><strong>Indica cuánto quieres depositar</strong><p>Escribe un monto entre S/5 y S/500, o elige una de las cantidades sugeridas.</p>';
  return `${depositHeader({ back: true })}<main class="deposit-amount-content"><section class="deposit-amount-card"><h2>Monto a depositar</h2><div class="deposit-amount-entry ${entryTarget}" tabindex="-1"><label class="deposit-amount-field"><span>S/</span><input data-deposit-amount-input inputmode="decimal" autocomplete="off" aria-label="Monto a depositar" placeholder="5.00" value="${depositGuide.amount}"></label><p><b>Min:</b> S/ 5.00 <b>Max:</b> S/ 500.00</p><div class="deposit-presets">${presetButtons}</div></div><button class="deposit-submit ${submitTarget}" data-deposit-complete type="button" ${valid ? '' : 'disabled'}>Ir a depositar</button></section></main><aside class="deposit-flow-coachmark" role="status">${coachmark}</aside>`;
}

function renderDepositFlow(screen) {
  if (!depositGuide.layer) return;
  depositGuide.screen = screen;
  depositGuide.layer.innerHTML = screen === 'amount' ? depositAmountScreen() : depositMethodsScreen();
  depositGuide.layer.scrollTop = 0;
  requestAnimationFrame(() => {
    const target = depositGuide.layer.querySelector('.deposit-guide-target');
    target?.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    requestAnimationFrame(positionDepositGuide);
    const amountInput = depositGuide.screen === 'amount' && depositGuide.amountStage === 'entry' ? depositGuide.layer.querySelector('[data-deposit-amount-input]') : null;
    (amountInput || target)?.focus({ preventScroll: true });
  });
}

function setDepositAmount(value, { advance = false } = {}) {
  const cleaned = String(value).replace(/[^0-9.,]/g, '').replace(',', '.');
  depositGuide.amount = cleaned;
  const input = depositGuide.layer?.querySelector('[data-deposit-amount-input]');
  if (input && input.value !== cleaned) input.value = cleaned;
  const submit = depositGuide.layer?.querySelector('[data-deposit-complete]');
  if (submit) submit.disabled = !depositAmountIsValid(cleaned);
  window.clearTimeout(depositGuide.amountTimer);
  if (!depositAmountIsValid(cleaned)) return;
  const showFinalStep = () => {
    if (!depositGuide.active || depositGuide.screen !== 'amount') return;
    depositGuide.amountStage = 'confirm';
    renderDepositFlow('amount');
  };
  if (advance) showFinalStep();
  else depositGuide.amountTimer = window.setTimeout(showFinalStep, 650);
}

function openDepositFlow() {
  topbar.classList.remove('is-onboarding-active');
  depositTrigger.classList.remove('is-onboarding-target');
  depositTrigger.removeAttribute('aria-describedby');
  depositGuide.overlay?.remove();
  depositGuide.overlay = null;
  const layer = document.createElement('section');
  layer.className = 'deposit-flow-layer';
  layer.setAttribute('aria-label', 'Flujo guiado de depósito');
  layer.addEventListener('click', (event) => {
    if (event.target.closest('[data-deposit-close]')) { finishDepositGuide(); return; }
    if (event.target.closest('[data-deposit-back]')) { depositGuide.amountStage = 'entry'; renderDepositFlow('methods'); return; }
    const method = event.target.closest('[data-deposit-method]');
    if (method) {
      depositGuide.selectedMethod = method.dataset.depositMethod;
      depositGuide.amount = '';
      depositGuide.amountStage = 'entry';
      renderDepositFlow('amount');
      return;
    }
    const preset = event.target.closest('[data-deposit-preset]');
    if (preset) { setDepositAmount(Number(preset.dataset.depositPreset).toFixed(2), { advance: true }); return; }
    if (event.target.closest('[data-deposit-complete]')) {
      if (depositGuide.amountStage !== 'confirm') { setDepositAmount(depositGuide.amount, { advance: true }); return; }
      finishDepositGuide({ completed: true });
    }
  });
  layer.addEventListener('input', (event) => {
    if (event.target.matches('[data-deposit-amount-input]')) setDepositAmount(event.target.value);
  });
  layer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.target.matches('[data-deposit-amount-input]') && depositAmountIsValid(event.target.value)) {
      event.preventDefault();
      setDepositAmount(event.target.value, { advance: true });
    }
  });
  document.body.append(layer);
  depositGuide.layer = layer;
  renderDepositFlow('methods');
}

function finishDepositGuide({ completed = false } = {}) {
  if (!depositGuide.active) return;
  depositGuide.active = false;
  if (completed) depositStepCompleted = true;
  depositTrigger.classList.remove('is-onboarding-target');
  depositTrigger.removeAttribute('aria-describedby');
  topbar.classList.remove('is-onboarding-active');
  depositGuide.layer?.remove();
  depositGuide.layer = null;
  window.clearTimeout(depositGuide.amountTimer);
  depositGuide.overlay?.classList.add('is-leaving');
  window.setTimeout(() => {
    depositGuide.overlay?.remove();
    depositGuide.overlay = null;
    profileView();
    openDrawer();
    discoveryView({ animate: false });
  }, 240);
}

function startDepositGuide() {
  if (depositGuide.active || !onboardingTaskIsUnlocked('deposit')) return;
  closeDrawer();
  const overlay = document.createElement('div');
  depositGuide.screen = 'entry';
  depositGuide.amountStage = 'entry';
  depositGuide.amount = '';
  depositGuide.selectedMethod = '';
  overlay.className = 'initial-onboarding-overlay deposit-guide-overlay';
  overlay.dataset.stage = 'deposit';
  overlay.innerHTML = '<span class="initial-onboarding-scrim" aria-hidden="true"></span><span class="initial-onboarding-focus" aria-hidden="true"></span><span class="initial-onboarding-pointer" aria-hidden="true"><svg viewBox="0 0 28 34" fill="none"><path d="M5.5 2.5 23.5 19l-8 1.6-3.4 8.9L5.5 2.5Z" fill="#9EE86E" stroke="#0D2B16" stroke-width="2" stroke-linejoin="round"/></svg></span><aside class="initial-onboarding-coachmark" id="depositGuideCoachmark" role="dialog" aria-live="polite" aria-label="Guía para realizar tu primer depósito"><button class="initial-onboarding-close" type="button" aria-label="Cerrar guía">×</button><span class="initial-onboarding-eyebrow">Primer depósito</span><strong>Haz tu primer depósito</strong><p>Pulsa «Deposita» para abrir los medios de pago y continuar con el recorrido.</p><span class="initial-onboarding-progress">Depósito · Paso 1 de 4</span></aside>';
  document.body.append(overlay);
  depositGuide.active = true;
  depositGuide.overlay = overlay;
  depositGuide.focus = overlay.querySelector('.initial-onboarding-focus');
  depositGuide.pointer = overlay.querySelector('.initial-onboarding-pointer');
  depositGuide.coachmark = overlay.querySelector('.initial-onboarding-coachmark');
  topbar.classList.add('is-onboarding-active');
  depositTrigger.classList.add('is-onboarding-target');
  depositTrigger.setAttribute('aria-describedby', 'depositGuideCoachmark');
  overlay.addEventListener('pointerdown', (event) => {
    if (event.target.closest('.initial-onboarding-close') || event.target.classList.contains('initial-onboarding-scrim')) finishDepositGuide();
  });
  positionDepositGuide();
  requestAnimationFrame(positionDepositGuide);
  depositTrigger.focus({ preventScroll: true });
}

const clubJourney = { layer: null, screen: 'home', redeemed: false };
const clubPoints = '15,000';

function clubHeader(active = '', mode = 'store') {
  if (mode === 'main') {
    return `<header class="club-main-header"><img src="https://www.olimpo.bet/static/img/isotipo_olimpo_pe.svg" alt="Olimpo.bet"><nav aria-label="Navegación principal"><button type="button">Inicio</button><button type="button">Deportes</button><button class="is-active" type="button">Club Olimpo</button><button type="button">Casino</button><button type="button">Casino en vivo</button><button type="button">Virtuales</button><button type="button">Misiones</button><button type="button">Promociones</button><button type="button">Blog</button><button type="button">Ayuda</button></nav><div><button type="button">Deposita</button><span>S/ 3.50⌄</span><b>E</b></div></header>`;
  }
  return `<header class="club-prototype-header"><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/logo-olimpo.svg" alt="Olimpo.bet"><nav aria-label="Navegación de Club Olimpo"><button class="${active === 'products' ? 'is-active' : ''}" type="button">Productos</button><button class="${active === 'experiences' ? 'is-active' : ''}" type="button">Experiencias</button><button class="${active === 'bonuses' ? 'is-active' : ''}" type="button">Bonos</button></nav><div class="club-prototype-user"><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/user-rtb.svg" alt=""><small>Hola<br><b>USUARIO</b></small><strong><img src="https://s3.amazonaws.com/bucket.olimpo.prd/public/web/img/coin.svg" alt="">${clubPoints}</strong></div></header>`;
}

function clubCoachmark(step, title, body) {
  return `<aside class="club-prototype-coachmark" role="status"><span>Paso ${step} de 5</span><strong>${title}</strong><p>${body}</p></aside>`;
}

function clubHomeScreen() {
  return `${clubHeader('', 'main')}<main class="club-home-screen"><section class="club-home-hero" aria-label="Club Olimpo"><picture><source media="(max-width:768px)" srcset="https://www.olimpo.bet/assets/img/clubOlimpo/banners/guerrero.png"><img src="https://www.olimpo.bet/assets/img/clubOlimpo/banners/desktop/guerrero.png" alt="Empieza como Guerrero"></picture></section><section class="club-home-summary"><div class="club-level"><p>Necesitas <b>798 puntos de nivel</b> más para ser Espartano.</p><div class="club-level-track"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="club-level-labels"><span>Guerrero<b>0 P</b></span><span>Espartano<b>800 P</b></span><span>Héroe<b>5,000 P</b></span><span>Rey<b>25,000 P</b></span><span>Titán<b>100,000 P</b></span><span>Dios<b>400,000 P</b></span></div><button type="button">Ver nivel</button></div><div class="club-points-card"><h2>Tienes <b>${clubPoints}</b> puntos canjeables</h2><p>ⓘ 0 puntos vencerán el 30/9/2026</p><div><button class="club-guide-target" data-club-next="portal" type="button">¡Quiero canjear!</button><button type="button">Ver historial</button></div></div></section><section class="club-levels-preview"><h2>Niveles de divinidad</h2><p>Explora cada nivel y descubre los beneficios exclusivos que desbloqueas conforme avanzas.</p><div><article><strong>Nivel GUERRERO</strong><span>Desbloqueado con 0 puntos</span></article><article><strong>Nivel ESPARTANO</strong><span>Desbloqueado con 800 puntos</span></article><article><strong>Nivel HÉROE</strong><span>Desbloqueado con 5,000 puntos</span></article></div></section></main>${clubCoachmark(1, 'Tus puntos están listos', 'Pulsa «¡Quiero canjear!» para entrar a la tienda de Club Olimpo.')}`;
}

function clubPortalScreen() {
  return `${clubHeader('bonuses')}<main class="club-portal-screen"><img class="club-portal-banner" src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/banners/OB_BANNER_TIENDA_SORTEO_1920X512.png" alt="Sorteo de aniversario Club Olimpo"><section class="club-portal-categories"><h2>¡Bienvenido al Club Olimpo!</h2><div class="club-portal-list"><button type="button"><span>Productos</span><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/product-preview.png" alt=""></button><button type="button"><span>Experiencias</span><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/experience-preview.png" alt=""></button><button class="club-guide-target" data-club-next="marketplace" type="button"><span>Bonos</span><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/bonus-preview.png" alt=""></button></div></section></main>${clubCoachmark(2, 'Entra a Bonos', 'Selecciona «Bonos» para encontrar la recompensa que desbloqueaste.')}`;
}

function clubMarketplaceScreen({ guide = true } = {}) {
  const categories = [['categoria_todos.png','Todos los bonos'],['categoria_especial.png','Especiales'],['categoria_apuestas_deportivas.png','Deportes'],['categoria_casino_vivo.png','Casino en vivo'],['categoria_casino.png','Casino'],['categoria_virtuales.png','Virtuales']].map(([asset,label],index)=>`<span class="${index===0?'is-active':''}"><b><img src="https://www.olimpo.bet/static/img/promociones/${asset}" alt="${label}"></b><small>${label}</small></span>`).join('');
  const tickets = [1, 2, 3, 4].map((ticket, index) => `<article class="club-ticket-card${index === 0 ? ' club-ticket-card--reward' : ''}"><picture><source media="(max-width:767px)" srcset="assets/imgs/ticket-mobile-${ticket}.png"><img src="assets/imgs/ticket-web-${ticket}.png" alt="${index === 0 ? 'Bono de apuesta deportiva de S/50 disponible para canjear' : `Bono ${ticket} de Club Olimpo`}"></picture>${index === 0 ? '<button class="club-ticket-hotspot club-guide-target" data-club-next="terms" type="button" aria-label="Canjear bono de apuesta deportiva de S/50"></button>' : ''}</article>`).join('');
  return `${clubHeader('bonuses')}<main class="club-marketplace-screen"><img class="club-marketplace-banner" src="https://www.olimpo.bet/static/img/bonos/banner-club-olimpo-25032026.webp" alt="Canjea tus puntos por bonos increíbles"><section class="club-marketplace-content"><h1>Explora todos nuestros bonos</h1><div class="club-marketplace-tabs"><button class="is-active" type="button">Todos los bonos</button><button type="button">Sin rollover</button><button type="button">Con rollover</button></div><div class="club-marketplace-categories">${categories}</div><div class="club-marketplace-filters"><span>⌕&nbsp; Buscar bonos</span><span>Con mis puntos disponibles <i></i></span><span>Ordenar por⌄</span></div><div class="club-bonus-grid club-ticket-grid">${tickets}</div></section></main>${guide ? clubCoachmark(3, 'Encontramos tu recompensa', 'El bono de bienvenida está disponible. Pulsa «Canjear» para revisar sus condiciones antes de confirmarlo.') : ''}`;
}

function clubTermsScreen() {
  return `${clubMarketplaceScreen({ guide: false })}<div class="club-confirmation-layer club-terms-layer"><section class="club-ticket-detail club-guide-target" role="dialog" aria-modal="true" aria-label="Detalle y términos del bono"><picture><source media="(max-width:767px)" srcset="assets/imgs/ticket-detalle-mobile-2.png"><img src="assets/imgs/ticket-detalle-web-2.png" alt="Detalle del bono, términos y condiciones y botón Canjear"></picture><button class="club-detail-redeem-hotspot" data-club-next="success" type="button" aria-label="Canjear el bono después de leer los términos y condiciones"></button></section></div>${clubCoachmark(4, 'Lee antes de canjear', 'Revisa los términos y condiciones del bono. Cuando termines, pulsa «Canjear» dentro del detalle para continuar.')}`;
}

function clubSuccessScreen() {
  return `${clubMarketplaceScreen({ guide: false })}<div class="club-confirmation-layer club-success-layer"><section class="club-success-modal club-guide-target" role="dialog" aria-modal="true" aria-label="Confirmación del canje"><img src="assets/imgs/modal-confirmacion-web.png" alt="Felicidades, canjeaste tu bono. Ve a Mis bonos, actívalo y empieza a jugar."><button data-club-close class="club-success-hotspot club-success-hotspot--bonuses" type="button" aria-label="Ir a Mis bonos"></button><button data-club-close class="club-success-hotspot club-success-hotspot--continue" type="button" aria-label="Continuar canjeando"></button></section></div>${clubCoachmark(5, '¡Bono canjeado!', 'Este modal confirma el canje simulado. Puedes ir a «Mis bonos» o continuar explorando Club Olimpo.')}`;
}

function renderClubJourney(screen) {
  if (!clubJourney.layer) return;
  clubJourney.screen = screen;
  const screens = { home: clubHomeScreen, portal: clubPortalScreen, marketplace: clubMarketplaceScreen, terms: clubTermsScreen, success: clubSuccessScreen };
  clubJourney.layer.dataset.clubScreen = screen;
  clubJourney.layer.innerHTML = `<button class="club-prototype-close" data-club-close type="button" aria-label="Cerrar recorrido">×</button>${screens[screen]()}`;
  clubJourney.layer.scrollTop = 0;
  requestAnimationFrame(() => {
    const target = clubJourney.layer.querySelector('.club-guide-target');
    const scrollTarget = target?.closest('.club-ticket-card') || target;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let positioned = false;
    const positionScreen = () => {
      if (positioned || !clubJourney.layer) return;
      positioned = true;
      if (scrollTarget) {
        const layerRect = clubJourney.layer.getBoundingClientRect();
        const targetRect = scrollTarget.getBoundingClientRect();
        const centeredTop = clubJourney.layer.scrollTop + targetRect.top - layerRect.top - (clubJourney.layer.clientHeight - targetRect.height) / 2;
        clubJourney.layer.scrollTo({ top: Math.max(0, centeredTop), behavior: reduceMotion ? 'auto' : 'smooth' });
      }
      window.setTimeout(() => {
        positionAnchoredCoachmark(target, clubJourney.layer?.querySelector('.club-prototype-coachmark'));
        (target || clubJourney.layer?.querySelector('[data-club-close]'))?.focus({ preventScroll: true });
      }, reduceMotion ? 0 : 850);
    };
    const targetImage = scrollTarget?.querySelector('img');
    if (targetImage && !targetImage.complete) targetImage.addEventListener('load', positionScreen, { once: true });
    else positionScreen();
    window.setTimeout(positionScreen, 1200);
  });
}

function closeClubJourney() {
  clubJourney.layer?.remove();
  clubJourney.layer = null;
  profileView();
  openDrawer();
  discoveryView({ animate: false });
}

function startClubRedemptionJourney() {
  closeDrawer();
  const layer = document.createElement('section');
  layer.className = 'club-prototype-layer';
  layer.setAttribute('aria-label', 'Recorrido de canje en Club Olimpo');
  layer.addEventListener('click', (event) => {
    if (event.target.closest('[data-club-close]')) { closeClubJourney(); return; }
    const next = event.target.closest('[data-club-next]')?.dataset.clubNext;
    if (next) renderClubJourney(next);
  });
  document.body.append(layer);
  clubJourney.layer = layer;
  renderClubJourney('home');
}

function closeDrawer() {
  drawer.classList.remove('is-open');
  document.body.classList.remove('has-open-drawer');
  drawer.setAttribute('aria-hidden', 'true');
  trigger.setAttribute('aria-expanded', 'false');
  scrim.hidden = true;
}
function returnToProfile() {
  const discovery = drawerContent.querySelector('.discovery-view');
  if (!discovery) { profileView(); return; }
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    discovery.remove();
  };
  discovery.classList.add('is-exiting');
  discovery.addEventListener('animationend', finish, { once: true });
  window.setTimeout(finish, 320);
}
function openDrawer() {
  drawer.classList.add('is-open');
  document.body.classList.add('has-open-drawer');
  drawer.setAttribute('aria-hidden', 'false');
  trigger.setAttribute('aria-expanded', 'true');
  scrim.hidden = false;
  drawerContent.querySelector('[data-action="close"], #closeDrawer')?.focus();
}
registerTrigger.addEventListener('click', () => enterAuthenticated());
loginTrigger.addEventListener('click', () => enterAuthenticated({ onboarding: true }));
brandToggle.addEventListener('click', toggleGrayscale);
trigger.addEventListener('click', () => { profileView(); openDrawer(); advanceInitialOnboardingToDiscover(); });
depositTrigger.addEventListener('click', () => {
  if (depositGuide.active && depositGuide.screen === 'entry') openDepositFlow();
});
close.addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (clubJourney.layer) { closeClubJourney(); return; }
  if (depositGuide.active) { finishDepositGuide(); return; }
  if (!initialOnboarding.active) closeDrawer();
});
window.addEventListener('resize', () => {
  positionInitialOnboarding();
  positionDepositGuide();
  positionAnchoredCoachmark(clubJourney.layer?.querySelector('.club-guide-target'), clubJourney.layer?.querySelector('.club-prototype-coachmark'));
});

document.addEventListener('pointerdown', (event) => {
  if (!initialOnboarding.active || initialOnboarding.stage !== 'summary') return;
  const clickedClose = event.target.closest('.initial-onboarding-close');
  const clickedCoachmark = event.target.closest('.initial-onboarding-coachmark');
  const clickedTarget = event.target.closest('.first-steps-card');
  if (clickedClose || (!clickedCoachmark && !clickedTarget)) finishInitialOnboarding();
}, true);

drawerContent.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  const guideId = event.target.closest('[data-guide]')?.dataset.guide;
  const previous = event.target.closest('[data-guide-prev]');
  const next = event.target.closest('[data-guide-next]');
  const startDeposit = event.target.closest('[data-deposit-guide]');
  const isOnboardingDiscover = initialOnboarding.active && initialOnboarding.stage === 'discover' && event.target.closest('.account-menu-row[data-action="discover"]');
  if (initialOnboarding.active && !isOnboardingDiscover) return;
  if (action === 'close') closeDrawer();
  if (action === 'profile') returnToProfile();
  if (action === 'discover') {
    if (event.target.closest('.account-menu-row[data-action="discover"]')) {
      discoveryView();
      showInitialOnboardingSummary();
      return;
    }
    return closeGuide();
  }
  if (guideId) { if (guideId === 'bonuses') startBonusTour(); else guideView(guideId); return; }
  if (startDeposit) { startDepositGuide(); return; }
  if (action === 'club-redemption') { startClubRedemptionJourney(); return; }
  if (previous) { guideView(previous.dataset.guidePrev, Number(previous.dataset.step) - 1); return; }
  if (next) { const id = next.dataset.guideNext; const nextStep = Number(next.dataset.step) + 1; if (nextStep >= guides[id].steps.length) { if (id === 'kyc') startKycMock(); else { completeGuide(id); discoveryView({ animate: false }); } } else guideView(id, nextStep); }
  const profileOption = event.target.closest('.profile-option:not([data-action])');
  if (profileOption) { drawerContent.querySelector('.profile-option.is-selected')?.classList.remove('is-selected'); profileOption.classList.add('is-selected'); }
});

// Estado de revisión para compartir el drawer en una captura local.
if (location.hash === '#descubre') {
  enterAuthenticated();
  profileView();
  openDrawer();
  discoveryView();
}

initDiscoveryTuner();
