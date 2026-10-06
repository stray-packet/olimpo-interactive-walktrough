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
const initialOnboardingTune = { spotlightX: 0, spotlightY: -1, spotlightHeight: 0, pointerX: 8, pointerY: 38, shadeOpacity: 0.16 };

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
  if (initialOnboarding.stage === 'profile') {
    const bounds = guideVisibleBounds();
    topbar.style.setProperty('--initial-guide-top', `${bounds.top}px`);
    topbar.style.setProperty('--initial-guide-left', `${bounds.left}px`);
    topbar.style.setProperty('--initial-guide-width', `${bounds.width}px`);
  }
  if (initialOnboarding.stage === 'discover') {
    const host = initialOnboarding.target.closest('.account-view');
    if (host) {
      const bounds = guideVisibleBounds();
      const desiredTop = bounds.top + Math.max(24, (bounds.height - 320) / 2);
      host.scrollTop += initialOnboarding.target.getBoundingClientRect().top - desiredTop;
    }
  }
  const rect = initialOnboarding.target.getBoundingClientRect();
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  const padding = mobile ? 12 : 18;
  const focusPadding = 7;
  const centeredInDrawer = initialOnboarding.stage === 'discover' || initialOnboarding.stage === 'summary';
  const drawerRect = drawer.getBoundingClientRect();
  const coachmarkWidth = mobile ? Math.min(window.innerWidth - (padding * 2), drawerRect.width - (padding * 2)) : 340;
  const drawerLeft = centeredInDrawer && drawerRect.width ? drawerRect.left + (drawerRect.width - coachmarkWidth) / 2 : rect.right - coachmarkWidth;
  const left = Math.min(Math.max(drawerLeft, padding), window.innerWidth - coachmarkWidth - padding);
  const below = rect.bottom + 18;
  const leftPointer = initialOnboarding.stage === 'discover';
  const focusX = leftPointer ? initialOnboardingTune.spotlightX : 0;
  const focusY = leftPointer ? initialOnboardingTune.spotlightY : 0;
  initialOnboarding.focus.style.left = `${rect.left - focusPadding + focusX}px`;
  initialOnboarding.focus.style.width = `${rect.width + focusPadding * 2}px`;
  const spotlightHeight = leftPointer ? initialOnboardingTune.spotlightHeight : 0;
  initialOnboarding.focus.style.top = `${rect.top - focusPadding - spotlightHeight / 2 + focusY}px`;
  initialOnboarding.focus.style.height = `${rect.height + focusPadding * 2 + spotlightHeight}px`;
  initialOnboarding.pointer.style.left = `${leftPointer ? rect.left - 42 + initialOnboardingTune.pointerX : rect.right - 4}px`;
  initialOnboarding.pointer.style.top = `${leftPointer ? rect.top + (rect.height - 48) / 2 + initialOnboardingTune.pointerY : rect.bottom - 2}px`;
  initialOnboarding.coachmark.style.width = `${coachmarkWidth}px`;
  initialOnboarding.coachmark.style.setProperty('left', `${left}px`, centeredInDrawer ? 'important' : '');
  if (centeredInDrawer) initialOnboarding.coachmark.style.setProperty('right', 'auto', 'important');
  initialOnboarding.coachmark.style.setProperty('bottom', 'auto', 'important');
  initialOnboarding.coachmark.style.setProperty('top', `${below}px`, 'important');
  const coachmarkHeight = initialOnboarding.coachmark.getBoundingClientRect().height;
  const top = below + coachmarkHeight <= window.innerHeight - padding
    ? below
    : Math.max(padding, rect.top - coachmarkHeight - 18);
  const boundedTop = Math.max(padding, Math.min(top, window.innerHeight - coachmarkHeight - padding));
  initialOnboarding.coachmark.style.setProperty('top', `${boundedTop}px`, 'important');
  fitGuideCoachmark(initialOnboarding.coachmark);
}

function setInitialOnboardingCopy({ title, body, summary = false }) {
  initialOnboarding.overlay.dataset.stage = summary ? 'summary' : initialOnboarding.stage;
  const closeControl = summary ? '<button class="initial-onboarding-close" type="button" aria-label="Cerrar bienvenida">×</button>' : '';
  initialOnboarding.coachmark.innerHTML = `${closeControl}<strong>${title}</strong><p>${body}</p>`;
}

function startInitialOnboarding() {
  if (initialOnboarding.active) return;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  initialOnboarding.active = true;
  initialOnboarding.stage = 'profile';
  document.documentElement.classList.add('is-initial-onboarding');
  document.body.classList.add('is-initial-onboarding');
  const overlay = document.createElement('div');
  overlay.className = 'initial-onboarding-overlay';
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML = '<span class="initial-onboarding-scrim" aria-hidden="true"></span><span class="initial-onboarding-focus" aria-hidden="true"></span><span class="initial-onboarding-pointer" aria-hidden="true"><svg viewBox="0 0 28 34" fill="none"><path d="M5.5 2.5 23.5 19l-8 1.6-3.4 8.9L5.5 2.5Z" fill="#9EE86E" stroke="#0D2B16" stroke-width="2" stroke-linejoin="round"/></svg></span><aside class="initial-onboarding-coachmark" id="initialOnboardingCoachmark" role="dialog" aria-live="polite" aria-label="Orientación inicial"></aside>';
  document.body.append(overlay);
  initialOnboarding.overlay = overlay;
  initialOnboarding.focus = overlay.querySelector('.initial-onboarding-focus');
  initialOnboarding.pointer = overlay.querySelector('.initial-onboarding-pointer');
  initialOnboarding.coachmark = overlay.querySelector('.initial-onboarding-coachmark');
  setInitialOnboardingCopy({ title: 'Bienvenido a Olimpo', body: 'Antes de comenzar, abre tu menú de usuario para conocer la sección "Descubre Olimpo".' });
  setOnboardingTarget(trigger, 'header');
}

function advanceInitialOnboardingToDiscover() {
  if (!initialOnboarding.active || initialOnboarding.stage !== 'profile') return;
  initialOnboarding.stage = 'discover';
  const discoverEntry = drawerContent.querySelector('.account-menu-row[data-action="discover"]');
  setInitialOnboardingCopy({ title: 'Tus primeros pasos', body: 'Aquí encontrarás guías claras antes de empezar a navegar por Olimpo.' });
  setOnboardingTarget(discoverEntry, 'drawer');
}

function showInitialOnboardingSummary() {
  if (!initialOnboarding.active || initialOnboarding.stage !== 'discover') return;
  initialOnboarding.stage = 'summary';
  const firstSteps = drawerContent.querySelector('.first-steps-card');
  setInitialOnboardingCopy({ title: 'Tu bienvenida empieza aquí', body: 'Completa los 4 tutoriales y recibe un bono de S/50.', summary: true });
  setOnboardingTarget(firstSteps, 'discovery');
  window.requestAnimationFrame(() => {
    firstSteps.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
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
  document.documentElement.classList.remove('is-initial-onboarding');
  document.body.classList.remove('is-initial-onboarding');
  initialOnboarding.active = false;
  initialOnboarding.stage = null;
  initialOnboarding.target = null;
}

const guides = {
  bonuses: { title: 'Conoce tus bonos' },
  kyc: { icon: '◉', category: 'Mi cuenta', title: 'Verifica tu identidad', intro: 'Prepárate antes de iniciar la verificación de tu identidad.', steps: [['Prepara tu documento', 'Ten a la mano tu DNI o Carnet de Extranjería vigente.'], ['Busca un lugar bien iluminado', 'Ubícate en un espacio con buena iluminación, sin filtros ni desenfoque, para que tu rostro se vea con claridad.']] },
  club: { icon: '♛', category: 'Club Olimpo', title: 'Conoce Club Olimpo', intro: 'Descubre tus puntos, niveles y recompensas en un solo lugar.', steps: [['Bienvenido a Club Olimpo', 'Consulta tu progreso de nivel y los beneficios que puedes descubrir mientras avanzas.'], ['Consulta tus puntos', 'Revisa tus puntos canjeables y la fecha en que podrían vencer.'], ['Descubre qué puedes canjear', 'Explora las categorías y entra a la tienda para conocer las recompensas disponibles.']] }
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
  mail: 'https://www.olimpo.bet/assets/img/userMenu/mensajes.svg', wallet: 'https://www.olimpo.bet/assets/img/userMenu/deposita_new.svg', cash: 'https://www.olimpo.bet/assets/img/userMenu/retira_new.svg', ticket: 'https://www.olimpo.bet/static/img/userMenu/misBonos.svg', mission: 'https://www.olimpo.bet/static/img/userMenu/misiones.svg', club: 'https://www.olimpo.bet/static/img/userMenu/clubOlimpo.svg', user: 'https://www.olimpo.bet/static/img/userMenu/miPerfil.svg', history: 'https://www.olimpo.bet/static/img/userMenu/miHistorial.svg', discover: 'assets/icons/discovery-icon.png'
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
  let action = `<button class="task-action" type="button" disabled>Completa el paso ${index}</button>`;

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
  lineTaper: 0,
  rewardConnectorX: 3,
  rewardConnectorY: -10,
  rewardX: 0,
  rewardY: -24,
  rewardScale: 1.15,
  rewardTextX: -5,
  rewardTextY: 0
};

let discoveryTuneValues = { ...discoveryTuneDefaults };

function applyDiscoveryTune() {
  const header = drawerContent.querySelector('.discovery-header');
  if (!header) return;
  const scroll = drawerContent.querySelector('.discovery-scroll');
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
  scroll?.style.setProperty('--reward-connector-x', `${discoveryTuneValues.rewardConnectorX}px`);
  scroll?.style.setProperty('--reward-connector-y', `${discoveryTuneValues.rewardConnectorY}px`);
  scroll?.style.setProperty('--reward-node-x', `${discoveryTuneValues.rewardX}px`);
  scroll?.style.setProperty('--reward-node-y', `${discoveryTuneValues.rewardY}px`);
  scroll?.style.setProperty('--reward-scale', discoveryTuneValues.rewardScale);
  scroll?.style.setProperty('--reward-text-x', `${discoveryTuneValues.rewardTextX}px`);
  scroll?.style.setProperty('--reward-text-y', `${discoveryTuneValues.rewardTextY}px`);
}

function initDiscoveryTuner() {
  const host = drawerContent.querySelector('.discovery-scroll');
  if (!host) return;

  const panel = document.createElement('aside');
  panel.className = 'discovery-tuner';
  panel.innerHTML = `<div class="discovery-tuner-heading"><strong>Ajustes visuales</strong><button type="button" data-tune-action="reset">Restablecer</button></div><p>Mueve los valores y copia la configuración final.</p><div class="discovery-tuner-controls"></div><button class="discovery-tuner-copy" type="button" data-tune-action="copy">Copiar valores</button><output class="discovery-tuner-status" aria-live="polite"></output>`;
  host.append(panel);

  const groups = [
    ['Cofre y línea', [
      ['rewardConnectorX', 'Línea: mover X', -80, 80, 1, 'px'],
      ['rewardConnectorY', 'Línea: mover Y', -80, 80, 1, 'px'],
      ['rewardX', 'Cofre: mover X', -80, 80, 1, 'px'],
      ['rewardY', 'Cofre: mover Y', -80, 80, 1, 'px'],
      ['rewardScale', 'Cofre: tamaño', .6, 1.8, .05, 'x'],
      ['rewardTextX', 'Texto: mover X', -80, 80, 1, 'px'],
      ['rewardTextY', 'Texto: mover Y', -80, 80, 1, 'px']
    ]]
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
    : '¡Completa los 4 pasos y canjea un bono de S/50!';
  const tasks = onboardingTaskOrder.map(onboardingTask).join('');
  const rewardAction = completed
    ? '<button class="first-steps-reward-cta" data-action="club-redemption" type="button">¡Ir a canjear!</button>'
    : '<button class="first-steps-reward-cta" type="button" disabled>Completa los 4 pasos</button>';
  const chest = completed ? 'canjea-bono-cofre-abierto.png' : 'canjea-bono-cofre-cerrado.png';

  drawerContent.innerHTML = `<section class="discovery-view"><header class="discovery-header"><button class="drawer-close discovery-back" data-action="profile" type="button" aria-label="Volver a Mi cuenta"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden="true"><path d="M6 11L1 6L6 0.999999" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><h2>Descubre Olimpo</h2><span class="discovery-light" aria-hidden="true"></span></header><div class="discovery-scroll"><section class="task-category task-category--first"><div class="first-steps-card"><div class="first-steps-header"><div class="first-steps-copy"><p class="first-steps-benefit">${benefit}</p></div></div><div class="task-journey"><div class="task-list">${tasks}</div><div class="reward-node${completed ? ' is-ready' : ''}"><div class="reward-node-content"><img class="reward-node-chest" src="assets/imgs/${chest}" alt="${completed ? 'Cofre abierto: tu bono está listo para canjear' : 'Cofre cerrado: completa los 4 pasos para desbloquearlo'}"/><div class="reward-node-copy"><span>Canjea un</span><strong>bono de S/50</strong></div>${rewardAction}</div></div></div></div></section></div></section>`;
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
    ? '<video src="assets/videos/kyc/kyc-dni.mp4" autoplay muted loop playsinline preload="auto" aria-label="Animación: prepara tu DNI para la verificación"></video>'
    : '<video src="assets/videos/kyc/kyc-iluminacion.mp4" autoplay muted loop playsinline preload="auto" aria-label="Animación: busca un lugar bien iluminado para la verificación"></video>';
  const media = id === 'kyc' ? kycMedia : `<span>${guide.icon}</span>`;
  const finalLabel = id === 'kyc' ? 'Iniciar verificación' : 'Finalizar guía';
  const bulletList = bullets.length ? `<ul>${bullets.map((item) => `<li>${item}</li>`).join('')}</ul>` : '';
  modalLayer.innerHTML = `<section class="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guideStepTitle"><button class="guide-modal-close" data-action="discover" type="button" aria-label="Cerrar guía">×</button><div class="guide-modal-image ${id}${id === 'kyc' ? ' has-video' : ''} kyc-step-${step + 1}" data-guide-media="${id}">${media}</div><div class="guide-modal-copy"><span class="guide-modal-eyebrow">${guide.title}</span><h3 id="guideStepTitle">${title}</h3><p>${body}</p>${bulletList}</div><div class="guide-modal-progress"><span>Paso ${step + 1} de ${guide.steps.length}</span><div>${guide.steps.map((_, index) => `<i class="${index <= step ? 'is-current' : ''}"></i>`).join('')}</div></div><div class="guide-modal-actions"><button class="guide-modal-button guide-modal-button--secondary" data-guide-prev="${id}" data-step="${step}" type="button" ${step === 0 ? 'disabled' : ''}>Anterior</button><button class="guide-modal-button" data-guide-next="${id}" data-step="${step}" type="button">${finalStep ? finalLabel : 'Continuar'}</button></div></section>`;
  drawerContent.append(modalLayer);
  requestAnimationFrame(() => {
    const video = modalLayer.querySelector('video');
    if (video) {
      video.playbackRate = 1.5;
      video.play().catch(() => {});
    }
    modalLayer.querySelector('.guide-modal-close')?.focus();
  });
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

function guideVisibleBounds() {
  const viewport = window.visualViewport;
  const top = viewport?.offsetTop || 0;
  const left = viewport?.offsetLeft || 0;
  const height = viewport?.height || window.innerHeight;
  const width = viewport?.width || window.innerWidth;
  return { top, left, height, width, bottom: top + height, right: left + width };
}

function fitGuideCoachmark(card) {
  if (!card) return;
  const bounds = guideVisibleBounds();
  const set = (name, value) => {
    if (card.style.getPropertyValue(name) !== value || card.style.getPropertyPriority(name) !== 'important') card.style.setProperty(name, value, 'important');
  };
  set('max-width', `${Math.max(0, bounds.width - 24)}px`);
  set('max-height', `${Math.max(0, bounds.height - 24)}px`);
  set('overflow-y', 'auto');
  set('bottom', 'auto');
  const top = parseFloat(card.style.top) || bounds.top + 12;
  const left = parseFloat(card.style.left) || bounds.left + 12;
  set('top', `${Math.max(bounds.top + 12, Math.min(top, bounds.bottom - card.offsetHeight - 12))}px`);
  set('left', `${Math.max(bounds.left + 12, Math.min(left, bounds.right - card.offsetWidth - 12))}px`);
}

const guideCoachmarkSelector = '.initial-onboarding-coachmark,.bonus-tour-coachmark,.club-prototype-coachmark,.deposit-flow-coachmark';
let guideFitFrame;
function fitVisibleGuideCoachmarks() {
  cancelAnimationFrame(guideFitFrame);
  guideFitFrame = requestAnimationFrame(() => document.querySelectorAll(guideCoachmarkSelector).forEach(fitGuideCoachmark));
}
new MutationObserver(records => {
  if (records.some(record => record.type === 'childList' || record.target.matches?.(guideCoachmarkSelector))) fitVisibleGuideCoachmarks();
}).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['style'] });
window.visualViewport?.addEventListener('resize', () => {
  positionInitialOnboarding();
  positionDepositGuide();
  positionClubOrientationEntry();
  positionClubOrientationUI();
  positionClubJourneyUI();
  if (typeof positionBonusTourStep === 'function') positionBonusTourStep();
  fitVisibleGuideCoachmarks();
});
window.visualViewport?.addEventListener('scroll', () => {
  positionInitialOnboarding();
  fitVisibleGuideCoachmarks();
});
document.addEventListener('wheel', event => {
  if (initialOnboarding.active && !event.target.closest('.initial-onboarding-coachmark')) event.preventDefault();
}, { passive: false, capture: true });
document.addEventListener('touchmove', event => {
  if (initialOnboarding.active && !event.target.closest('.initial-onboarding-coachmark')) event.preventDefault();
}, { passive: false, capture: true });

function positionAnchoredCoachmark(target, coachmark, { gap = 18, padding = 18 } = {}) {
  if (!target || !coachmark) return;
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  let rect = target.getBoundingClientRect();
  if (mobile) {
    const readingTerms = target.closest('.club-prototype-layer')?.dataset.clubScreen === 'terms';
    coachmark.style.left = '12px';
    coachmark.style.right = '12px';
    coachmark.style.width = 'auto';
    fitGuideCoachmark(coachmark);
    const coachmarkHeight = coachmark.offsetHeight;
    const bounds = guideVisibleBounds();
    const minTop = bounds.top + (readingTerms ? 70 : 62);
    const maxTop = bounds.bottom - coachmarkHeight - 12;
    if (rect.bottom + gap > maxTop && rect.top - coachmarkHeight - gap < minTop) {
      const host = target.closest('.club-prototype-layer,.deposit-flow-layer,.bonus-tour-layer');
      if (host) {
        host.style.paddingBottom = `${coachmarkHeight + 40 + Math.max(0, window.innerHeight - bounds.height)}px`;
        host.scrollTop += rect.bottom + gap - maxTop;
        rect = target.getBoundingClientRect();
      }
    }
    const topBelow = rect.bottom + gap;
    const topAbove = rect.top - coachmarkHeight - gap;
    const top = topBelow <= maxTop ? topBelow : topAbove >= minTop ? topAbove : Math.max(minTop, maxTop);
    coachmark.style.top = `${Math.max(minTop, top)}px`;
    coachmark.style.bottom = 'auto';
    fitGuideCoachmark(coachmark);
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
    if (depositGuide.screen === 'methods') {
      const card = depositGuide.layer?.querySelector('.deposit-flow-coachmark');
      if (!card) return;
      const mobile = window.matchMedia('(max-width:768px)').matches;
      card.style.left = mobile ? '12px' : '24px';
      card.style.right = mobile ? '12px' : 'auto';
      card.style.width = mobile ? 'auto' : '340px';
      card.style.top = `${guideVisibleBounds().top + (mobile ? 72 : 84)}px`;
      fitGuideCoachmark(card);
      depositGuide.layer.style.setProperty('--deposit-methods-coachmark-height', `${card.offsetHeight + 24}px`);
      return;
    }
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
  return `<header class="deposit-flow-header">${back ? '<button data-deposit-back type="button" aria-label="Volver">‹</button>' : ''}<h1>Deposita</h1><button class="deposit-flow-balance" type="button">S/ 3.50 <span>⌄</span></button></header>`;
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
  return `${depositHeader()}<main class="deposit-flow-content"><h2>Todos los medios de pago</h2><div class="deposit-method-grid deposit-guide-target" tabindex="-1" aria-label="Elige cualquiera de los medios de pago disponibles">${cards}</div></main><aside class="deposit-flow-coachmark" role="status"><button class="deposit-flow-close" data-deposit-close type="button" aria-label="Cerrar guía">×</button><span>Primer depósito</span><strong>Elige el medio de pago</strong><p>Selecciona el medio que se te acomode mejor.</p><span>Paso 2 de 4</span>${tourProgressBar(2, 4)}${depositCoachmarkControls({ previous: false, next: false })}</aside>`;
}

function depositCoachmarkControls({ previous = false, next = false } = {}) {
  return `<div class="deposit-flow-controls"><button data-deposit-prev type="button" ${previous ? '' : 'disabled'}>Anterior</button><button data-deposit-next type="button" ${next ? '' : 'disabled'}>Siguiente</button></div>`;
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
    ? `<button class="deposit-flow-close" data-deposit-close type="button" aria-label="Cerrar guía">×</button><span>Primer depósito</span><strong>Todo listo para continuar</strong><p>Revisa el monto y pulsa "Ir a depositar".</p><span>Paso 4 de 4</span>${tourProgressBar(4, 4)}${depositCoachmarkControls({ previous: true, next: false })}`
    : `<button class="deposit-flow-close" data-deposit-close type="button" aria-label="Cerrar guía">×</button><span>Primer depósito</span><strong>Indica cuánto quieres depositar</strong><p>Escribe un monto entre S/5 y S/500, o elige una de las cantidades sugeridas.</p><span>Paso 3 de 4</span>${tourProgressBar(3, 4)}${depositCoachmarkControls({ previous: true, next: valid })}`;
  return `${depositHeader()}<main class="deposit-amount-content"><section class="deposit-amount-card"><h2>Monto a depositar</h2><div class="deposit-amount-entry ${entryTarget}" tabindex="-1"><label class="deposit-amount-field"><span>S/</span><input data-deposit-amount-input inputmode="decimal" autocomplete="off" aria-label="Monto a depositar" placeholder="5.00" value="${depositGuide.amount}"></label><p><b>Min:</b> S/ 5.00 <b>Max:</b> S/ 500.00</p><div class="deposit-presets">${presetButtons}</div></div><button class="deposit-submit ${submitTarget}" data-deposit-complete type="button" ${valid ? '' : 'disabled'}>Ir a depositar</button></section></main><aside class="deposit-flow-coachmark" role="status">${coachmark}</aside>`;
}

function renderDepositFlow(screen) {
  if (!depositGuide.layer) return;
  depositGuide.screen = screen;
  depositGuide.layer.dataset.depositScreen = screen;
  depositGuide.layer.innerHTML = screen === 'amount' ? depositAmountScreen() : depositMethodsScreen();
  depositGuide.layer.scrollTop = 0;
  requestAnimationFrame(() => {
    const target = depositGuide.layer.querySelector('.deposit-guide-target');
    if (screen === 'methods') {
      positionDepositGuide();
      return;
    }
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
  const next = depositGuide.layer?.querySelector('[data-deposit-next]');
  if (next) next.disabled = depositGuide.amountStage === 'confirm' || !depositAmountIsValid(cleaned);
  window.clearTimeout(depositGuide.amountTimer);
  if (!depositAmountIsValid(cleaned)) return;
  if (advance) {
    depositGuide.amountStage = 'confirm';
    renderDepositFlow('amount');
  }
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
    if (event.target.closest('[data-deposit-back], [data-deposit-prev]')) {
      if (depositGuide.screen === 'amount' && depositGuide.amountStage === 'confirm') {
        depositGuide.amountStage = 'entry';
        renderDepositFlow('amount');
      } else if (depositGuide.screen === 'amount') {
        depositGuide.amountStage = 'entry';
        renderDepositFlow('methods');
      }
      return;
    }
    if (event.target.closest('[data-deposit-next]')) {
      if (depositGuide.screen === 'methods') return;
      if (depositGuide.amountStage === 'entry' && depositAmountIsValid(depositGuide.amount)) {
        depositGuide.amountStage = 'confirm';
        renderDepositFlow('amount');
      }
      return;
    }
    const method = event.target.closest('[data-deposit-method]');
    if (method) {
      depositGuide.selectedMethod = method.dataset.depositMethod;
      depositGuide.amount = '';
      depositGuide.amountStage = 'entry';
      renderDepositFlow('amount');
      return;
    }
    const preset = event.target.closest('[data-deposit-preset]');
    if (preset) { setDepositAmount(Number(preset.dataset.depositPreset).toFixed(2)); return; }
    if (event.target.closest('[data-deposit-complete]')) {
      if (depositGuide.amountStage !== 'confirm') return;
      if (depositAmountIsValid(depositGuide.amount)) finishDepositGuide({ completed: true });
    }
  });
  layer.addEventListener('input', (event) => {
    if (event.target.matches('[data-deposit-amount-input]')) setDepositAmount(event.target.value);
  });
  layer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.target.matches('[data-deposit-amount-input]') && depositAmountIsValid(event.target.value)) {
      event.preventDefault();
      setDepositAmount(event.target.value);
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
  overlay.innerHTML = '<span class="initial-onboarding-scrim" aria-hidden="true"></span><span class="initial-onboarding-focus" aria-hidden="true"></span><span class="initial-onboarding-pointer" aria-hidden="true"><svg viewBox="0 0 28 34" fill="none"><path d="M5.5 2.5 23.5 19l-8 1.6-3.4 8.9L5.5 2.5Z" fill="#9EE86E" stroke="#0D2B16" stroke-width="2" stroke-linejoin="round"/></svg></span><aside class="initial-onboarding-coachmark" id="depositGuideCoachmark" role="dialog" aria-live="polite" aria-label="Guía para realizar tu primer depósito"><button class="initial-onboarding-close" type="button" aria-label="Cerrar guía">×</button><span class="initial-onboarding-eyebrow">Primer depósito</span><strong>Haz tu primer depósito</strong><p>Pulsa el botón "Deposita" para comenzar.</p><span class="initial-onboarding-progress">Paso 1 de 4</span>' + tourProgressBar(1, 4) + '</aside>';
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

const clubJourney = { layer: null, step: 0, selectedTicket: 1, timer: null, cursorTunes: {} };
const clubPoints = '5,000';

function clubHeader(active = '', mode = 'store') {
  if (mode === 'main') {
    return `<header class="club-main-header"><img src="https://www.olimpo.bet/static/img/isotipo_olimpo_pe.svg" alt="Olimpo.bet"><nav aria-label="Navegación principal"><button type="button">Inicio</button><button type="button">Deportes</button><button class="is-active club-olimpo-link" type="button">Club Olimpo<svg class="club-olimpo-badge" width="19" height="18" viewBox="0 0 19 18" fill="none" aria-hidden="true"><rect x=".5" width="18" height="18" rx="9" fill="url(#clubBadgeGradient)"/><path d="M14.345 6.802h-2.871c-.125 0-.195-.145-.118-.243l2.668-3.371c.06-.077.006-.188-.09-.188H8.396a.12.12 0 0 0-.1.058L4.555 9.52c-.045.076.01.173.1.173h2.326a.12.12 0 0 1 .145.186l-1.244 4.977c-.028.113.108.192.192.111l8.35-7.967c.075-.071.025-.198-.079-.198Z" fill="#111"/><defs><linearGradient id="clubBadgeGradient" x1="2.9" y1="2.4" x2="15.5" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#BEA571"/><stop offset=".22" stop-color="#FFE4AD"/><stop offset=".54" stop-color="#FDCE6F"/><stop offset="1" stop-color="#836724"/></linearGradient></defs></svg></button><button type="button">Casino</button><button type="button">Casino en vivo</button><button type="button">Virtuales</button><button type="button">Misiones</button><button type="button">Promociones</button><button type="button">Blog</button><button type="button">Ayuda</button></nav><div><button type="button">Deposita</button><span>S/ 3.50⌄</span><b>E<em>6</em></b></div></header>`;
  }
  return `<header class="club-prototype-header"><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/logo-olimpo.svg" alt="Olimpo.bet"><nav aria-label="Navegación de Club Olimpo"><button class="${active === 'products' ? 'is-active' : ''}" type="button">Productos</button><button class="${active === 'experiences' ? 'is-active' : ''}" type="button">Experiencias</button><button class="${active === 'bonuses' ? 'is-active' : ''}" type="button">Bonos</button></nav><div class="club-prototype-user"><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/user-rtb.svg" alt=""><small>Hola<br><b>USUARIO</b></small><strong><img src="https://s3.amazonaws.com/bucket.olimpo.prd/public/web/img/coin.svg" alt="">${clubPoints}</strong></div></header>`;
}

function clubMobileNavMarkup() {
  const items = [['Deportes', 'nav-icono-deportes.webp'], ['Casino', 'nav-icono-casino.webp'], ['Casino en vivo', 'nav-icono-casino-live.webp'], ['Virtuales', 'nav-icono-virtuales.webp'], ['Club Olimpo', 'nav-icono-club-olimpo.webp']];
  return `<nav class="mobile-nav club-screen-mobile-nav" aria-label="Navegación móvil">${items.map(([label, icon]) => `<button class="${label === 'Club Olimpo' ? 'club is-active' : ''}" type="button"><img src="assets/imgs/nav/${icon}" alt=""><span>${label}</span></button>`).join('')}</nav>`;
}

function tourProgressBar(current, total) {
  return `<div class="tour-progress">${Array.from({ length: total }, (_, index) => `<i class="${index < current ? 'is-filled' : ''}"></i>`).join('')}</div>`;
}

const clubRedemptionSteps = [
  { screen: 'home', target: '.club-points-summary-target h2', title: 'Tus puntos canjeables', body: 'Tienes 5,000 puntos canjeables. Los usaremos para canjear tu primer bono.' },
  { screen: 'home', target: '.club-redemption-target', title: 'Entra a la tienda', body: 'Pulsa «¡Quiero canjear!» para buscar un bono con tus puntos.' },
  { screen: 'portal', target: '[data-club-next="marketplace"]', title: 'Elige Bonos', body: 'Aquí también ves tus puntos en la esquina superior derecha. Entra a «Bonos» para ver las opciones.' },
  { screen: 'marketplace', target: '.club-ticket-grid', title: 'Elige tu bono', body: 'Puedes canjear cualquiera de estos cuatro bonos por 5,000 puntos. Pulsa «Canjear» en el que prefieras.' },
  { screen: 'terms', target: '.club-term-odds', title: 'Revisa las cuotas', body: 'Lee las cuotas mínimas y máximas, y cómo se calcula la ganancia neta antes de canjear.' },
  { screen: 'terms', target: '.club-term-exclusions', title: 'Mira las restricciones', body: 'Revisa las apuestas y modalidades que no participan en esta promoción.' },
  { screen: 'terms', target: '.club-term-validity', title: 'Comprueba la vigencia', body: 'Después de otorgada, esta promoción tiene una vigencia de 7 días.' },
  { screen: 'terms', target: '.club-term-withdrawal', title: 'Antes de retirar', body: 'Si retiras antes de cumplir las condiciones, se cancelan el bono y las ganancias asociadas.' },
  { screen: 'terms', target: '.club-detail-redeem-hotspot', title: 'Confirma el canje', body: 'Cuando termines de revisar las condiciones, pulsa «Canjear» sobre la imagen del bono elegido.' },
  { screen: 'success', target: '.club-success-modal', title: '¡Bono canjeado!', body: 'Este modal confirma el canje simulado. Puedes ir a «Mis bonos» o continuar explorando Club Olimpo.' }
];
const clubJourneyPointerSteps = new Set([1, 2, 8]);
const clubJourneyRequiredActions = { 1: 'Pulsa «Quiero canjear»', 2: 'Pulsa «Bonos»', 3: 'Pulsa «Canjear»', 8: 'Pulsa «Canjear»' };

function clubJourneyCursorTuner(stepIndex) {
  const tune = clubJourney.cursorTunes[stepIndex] || { x: 0, y: 0, rotation: 0 };
  return `<section class="club-cursor-tuner club-journey-cursor-tuner" aria-label="Ajustar cursor del paso ${stepIndex + 1}"><strong>Ajustar cursor</strong><label>Eje X <output data-club-journey-cursor-value="x">${tune.x} px</output><input data-club-journey-cursor="x" type="range" min="-120" max="120" value="${tune.x}"></label><label>Eje Y <output data-club-journey-cursor-value="y">${tune.y} px</output><input data-club-journey-cursor="y" type="range" min="-120" max="120" value="${tune.y}"></label><label>Rotación <output data-club-journey-cursor-value="rotation">${tune.rotation}°</output><input data-club-journey-cursor="rotation" type="range" min="-180" max="180" value="${tune.rotation}"></label></section>`;
}

function clubCoachmark(stepIndex) {
  const step = clubRedemptionSteps[stepIndex];
  const current = stepIndex + 1;
  const total = clubRedemptionSteps.length;
  const generalCopy = {
    4: ['Revisa los requisitos', 'Comprueba los requisitos de juego y cómo se calcula el beneficio del bono que elegiste.'],
    5: ['Mira las restricciones', 'Revisa qué modalidades no participan en el bono que elegiste.'],
    6: ['Comprueba la vigencia', 'Confirma hasta cuándo podrás usar el bono seleccionado.'],
    7: ['Antes de retirar', 'Revisa qué sucede si retiras con requisitos del bono pendientes.']
  };
  const [title, body] = clubJourney.selectedTicket === 1 || !generalCopy[stepIndex]
    ? [step.title, step.body]
    : generalCopy[stepIndex];
  const requiredAction = clubJourneyRequiredActions[stepIndex];
  return `<aside class="club-prototype-coachmark" id="clubJourneyCoachmark" role="status"><button class="club-coachmark-close" data-club-close type="button" aria-label="Cerrar guía">×</button><span>Canjea tu bono</span><strong>${title}</strong><p>${body}</p><span>Paso ${current} de ${total}</span>${tourProgressBar(current, total)}<div class="club-orientation-controls"><button data-club-journey-prev type="button" ${stepIndex === 0 ? 'disabled' : ''}>Anterior</button><button data-club-journey-next type="button" ${requiredAction ? 'disabled' : ''}>${requiredAction || (stepIndex === total - 1 ? 'Finalizar' : 'Siguiente')}</button></div></aside>`;
}

function positionClubJourneyCoachmark(target, coachmark) {
  if (!target || !coachmark) return;
  if (clubJourney.layer?.dataset.clubScreen !== 'terms' || window.matchMedia('(max-width: 768px)').matches) {
    positionAnchoredCoachmark(target, coachmark);
    return;
  }
  const detail = clubJourney.layer.querySelector('.club-ticket-detail');
  const rect = detail.getBoundingClientRect();
  const width = Math.min(340, window.innerWidth - 36);
  coachmark.style.width = `${width}px`;
  coachmark.style.left = `${Math.max(18, Math.min(window.innerWidth - width - 18, rect.left + (rect.width - width) / 2))}px`;
  coachmark.style.top = `${Math.min(window.innerHeight - coachmark.offsetHeight - 18, rect.bottom + 18)}px`;
  coachmark.style.right = 'auto';
  coachmark.style.bottom = 'auto';
}

function positionClubGuidePointer(target, coachmark, pointer, stepIndex) {
  if (!target || !pointer) return;
  const rect = target.getBoundingClientRect();
  const card = coachmark?.getBoundingClientRect();
  const pointerSize = 48;
  let left;
  let top;
  let rotation = '0deg';
  if (rect.width > window.innerWidth * .6 || (rect.left < 60 && window.innerWidth - rect.right < 60)) {
    left = rect.left + rect.width / 2 - pointerSize * .75;
    top = rect.top - pointerSize - 2;
    rotation = '45deg';
  } else if (card && card.right < rect.left && window.innerWidth - rect.right > pointerSize + 8) {
    left = rect.right + 4;
    top = rect.top + rect.height / 2 - pointerSize / 2;
    rotation = '180deg';
  } else if (rect.left > pointerSize + 8) {
    left = rect.left - pointerSize - 4;
    top = rect.top + rect.height / 2 - pointerSize / 2;
  } else {
    left = rect.right + 4;
    top = rect.top + rect.height / 2 - pointerSize / 2;
    rotation = '180deg';
  }
  let tune = clubJourney.cursorTunes[stepIndex];
  if (!tune) {
    tune = clubJourney.cursorTunes[stepIndex] = { x: 0, y: 0, rotation: Number.parseInt(rotation, 10) };
    const rotationControl = clubJourney.layer.querySelector('[data-club-journey-cursor="rotation"]');
    rotationControl.value = String(tune.rotation);
    clubJourney.layer.querySelector('[data-club-journey-cursor-value="rotation"]').textContent = `${tune.rotation}°`;
  }
  pointer.style.left = `${Math.max(4, Math.min(window.innerWidth - pointerSize - 4, left + tune.x))}px`;
  pointer.style.top = `${Math.max(4, Math.min(window.innerHeight - pointerSize - 4, top + tune.y))}px`;
  pointer.style.setProperty('--club-pointer-rotation', `${tune.rotation}deg`);
}

function positionClubOrientationUI() {
  const layer = clubOrientation.layer;
  if (!layer) return;
  const target = layer.querySelector('.club-guide-target');
  const coachmark = layer.querySelector('.club-prototype-coachmark');
  positionAnchoredCoachmark(target, coachmark);
  const focus = layer.querySelector('.club-orientation-focus');
  if (target && focus) {
    const rect = target.getBoundingClientRect();
    focus.style.left = `${rect.left - 7}px`;
    focus.style.top = `${rect.top - 7}px`;
    focus.style.width = `${rect.width + 14}px`;
    focus.style.height = `${rect.height + 14}px`;
  }
}

function positionClubJourneyUI() {
  const layer = clubJourney.layer;
  if (!layer) return;
  const target = layer.querySelector('.club-guide-target');
  const coachmark = layer.querySelector('.club-prototype-coachmark');
  positionClubJourneyCoachmark(target, coachmark);
  const focus = layer.querySelector('.club-journey-focus');
  if (target && focus) {
    const rect = target.getBoundingClientRect();
    focus.style.left = `${rect.left - 7}px`;
    focus.style.top = `${rect.top - 7}px`;
    focus.style.width = `${rect.width + 14}px`;
    focus.style.height = `${rect.height + 14}px`;
    requestAnimationFrame(() => layer.classList.add('is-journey-positioned'));
  }
  positionClubGuidePointer(target, coachmark, layer.querySelector('.club-coachmark-pointer'), clubJourney.step);
}

const clubOrientation = { active: false, overlay: null, focus: null, pointer: null, coachmark: null, layer: null, step: 0, timer: null, cursorTune: { x: -58, y: -9, rotation: 59 } };
const clubNavTrigger = document.querySelector('.topbar .nav-link.club');
const clubMobileNavTrigger = document.querySelector('.mobile-nav button.club');

const clubOrientationSteps = [
  { target: '.club-level', title: 'Bienvenido a Club Olimpo', body: 'Aquí encuentras tu progreso de nivel. ¡Mientras más puntos obtengas, subirás de nivel!' },
  { target: '.club-points-summary-target', title: 'Gana puntos jugando', body: 'Aquí ves cuántos puntos tienes acumulados y cuántos están por vencer. Revisa la fecha indicada para aprovecharlos a tiempo.' },
  { target: '.club-rewards-preview', title: 'Descubre qué puedes canjear', body: 'Explora las categorías y conoce las recompensas que puedes recibir con tus puntos.' }
];

function clubOrientationCoachmark(step, title, body) {
  const final = step === clubOrientationSteps.length;
  const total = clubOrientationSteps.length + 1;
  const displayStep = step + 1;
  return `<aside class="club-prototype-coachmark" id="clubOrientationStepCoachmark" role="status"><button class="club-coachmark-close" data-club-close type="button" aria-label="Cerrar guía">×</button><span>Conoce Club Olimpo</span><strong>${title}</strong><p>${body}</p><span>Paso ${displayStep} de ${total}</span>${tourProgressBar(displayStep, total)}<div class="club-orientation-controls"><button data-club-orientation-prev type="button" ${step === 1 ? 'disabled' : ''}>Anterior</button><button data-club-orientation-next type="button">${final ? 'Finalizar' : 'Continuar'}</button></div></aside>`;
}

function clubCursorTuner() {
  const { x, y, rotation } = clubOrientation.cursorTune;
  return `<section class="club-cursor-tuner" aria-label="Ajustar cursor de Club Olimpo"><strong>Ajustar cursor</strong><label>Eje X <output data-club-cursor-value="x">${x} px</output><input data-club-cursor="x" type="range" min="-120" max="120" value="${x}"></label><label>Eje Y <output data-club-cursor-value="y">${y} px</output><input data-club-cursor="y" type="range" min="-120" max="120" value="${y}"></label><label>Rotación <output data-club-cursor-value="rotation">${rotation}°</output><input data-club-cursor="rotation" type="range" min="-180" max="180" value="${rotation}"></label></section>`;
}

function positionClubOrientationEntry() {
  if (!clubOrientation.active || clubOrientation.layer) return;
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  const target = mobile ? clubMobileNavTrigger : clubNavTrigger;
  const rect = (mobile ? target.querySelector('img') : target).getBoundingClientRect();
  const { x, y, rotation } = clubOrientation.cursorTune;
  clubOrientation.focus.style.left = `${rect.left - 7}px`;
  clubOrientation.focus.style.top = `${rect.top - 7}px`;
  clubOrientation.focus.style.width = `${rect.width + 14}px`;
  clubOrientation.focus.style.height = `${rect.height + 14}px`;
  if (mobile) {
    clubOrientation.pointer.style.left = `${Math.max(8, rect.left + rect.width / 2 - 24 + x)}px`;
    clubOrientation.pointer.style.top = `${rect.top - 54 + y}px`;
  } else {
    clubOrientation.pointer.style.left = `${Math.max(8, rect.left + rect.width / 2 - 24 + x)}px`;
    clubOrientation.pointer.style.top = `${rect.bottom + 2 + y}px`;
  }
  clubOrientation.pointer.style.transform = `rotate(${rotation}deg)`;
  if (mobile) {
    clubOrientation.coachmark.style.bottom = '';
    clubOrientation.coachmark.style.top = '';
  } else {
    positionAnchoredCoachmark(target, clubOrientation.coachmark);
  }
}

function renderClubOrientationStep() {
  if (!clubOrientation.layer) return;
  window.clearTimeout(clubOrientation.timer);
  const step = clubOrientationSteps[clubOrientation.step];
  clubOrientation.layer.classList.remove('is-guide-active');
  clubOrientation.layer.dataset.clubGuideState = 'context';
  clubOrientation.layer.dataset.clubStep = String(clubOrientation.step);
  clubOrientation.layer.innerHTML = `<button class="club-prototype-close" data-club-close type="button" aria-label="Cerrar recorrido">×</button>${clubHomeScreen({ guide: false })}${clubMobileNavMarkup()}`;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  clubOrientation.timer = window.setTimeout(() => {
    if (!clubOrientation.layer || clubOrientation.layer.dataset.clubStep !== String(clubOrientation.step)) return;
    const target = clubOrientation.layer.querySelector(step.target);
    target?.classList.add('club-guide-target');
    target?.setAttribute('aria-describedby', 'clubOrientationStepCoachmark');
    clubOrientation.layer.classList.add('is-guide-active');
    clubOrientation.layer.dataset.clubGuideState = 'guided';
    clubOrientation.layer.insertAdjacentHTML('beforeend', `<span class="club-orientation-focus" aria-hidden="true"></span>${clubOrientationCoachmark(clubOrientation.step + 1, step.title, step.body)}`);
    requestAnimationFrame(() => {
      positionClubOrientationUI();
      target?.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
      window.setTimeout(() => {
        positionClubOrientationUI();
        target?.focus({ preventScroll: true });
      }, reduceMotion ? 0 : 420);
    });
  }, reduceMotion ? 0 : 420);
}

function transitionClubOrientationStep() {
  const layer = clubOrientation.layer;
  if (!layer) return;
  const step = clubOrientationSteps[clubOrientation.step];
  const previous = layer.querySelector('.club-guide-target');
  const target = layer.querySelector(step.target);
  const coachmark = layer.querySelector('.club-prototype-coachmark');
  if (!target || !coachmark) { renderClubOrientationStep(); return; }
  previous?.classList.remove('club-guide-target');
  previous?.removeAttribute('aria-describedby');
  target.classList.add('club-guide-target');
  target.setAttribute('aria-describedby', 'clubOrientationStepCoachmark');
  layer.dataset.clubStep = String(clubOrientation.step);
  const updated = document.createElement('template');
  updated.innerHTML = clubOrientationCoachmark(clubOrientation.step + 1, step.title, step.body);
  coachmark.innerHTML = updated.content.firstElementChild.innerHTML;
  positionClubOrientationUI();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
  window.setTimeout(() => {
    if (clubOrientation.layer !== layer || layer.dataset.clubStep !== String(clubOrientation.step)) return;
    positionClubOrientationUI();
    target.focus({ preventScroll: true });
  }, reduceMotion ? 0 : 520);
}

function advanceClubOrientation(delta) {
  const next = clubOrientation.step + delta;
  if (next < 0) return;
  if (next >= clubOrientationSteps.length) { finishClubOrientationGuide({ completed: true }); return; }
  clubOrientation.step = next;
  if (clubOrientation.layer?.classList.contains('is-guide-active')) transitionClubOrientationStep();
  else renderClubOrientationStep();
}

function openClubOrientationHome() {
  window.clearTimeout(clubOrientation.timer);
  topbar.classList.remove('is-onboarding-active');
  clubNavTrigger.classList.remove('is-onboarding-target');
  clubNavTrigger.removeAttribute('aria-describedby');
  clubMobileNavTrigger.classList.remove('is-onboarding-target');
  clubMobileNavTrigger.removeAttribute('aria-describedby');
  clubMobileNavTrigger.closest('.mobile-nav').classList.remove('is-onboarding-active');
  clubOrientation.overlay?.remove();
  clubOrientation.overlay = null;
  const layer = document.createElement('section');
  layer.className = 'club-prototype-layer club-orientation-layer';
  layer.setAttribute('aria-label', 'Recorrido de orientación de Club Olimpo');
  layer.addEventListener('click', (event) => {
    if (event.target.closest('[data-club-close]')) { finishClubOrientationGuide(); return; }
    if (event.target.closest('[data-club-orientation-next]')) { advanceClubOrientation(1); return; }
    if (event.target.closest('[data-club-orientation-prev]')) { advanceClubOrientation(-1); return; }
  });
  layer.addEventListener('scroll', positionClubOrientationUI, { passive: true, capture: true });
  document.body.append(layer);
  clubOrientation.layer = layer;
  clubOrientation.step = 0;
  renderClubOrientationStep();
}

function finishClubOrientationGuide({ completed = false } = {}) {
  if (!clubOrientation.active) return;
  if (completed) completeGuide('club');
  topbar.classList.remove('is-onboarding-active');
  clubNavTrigger.classList.remove('is-onboarding-target');
  clubNavTrigger.removeAttribute('aria-describedby');
  clubMobileNavTrigger.classList.remove('is-onboarding-target');
  clubMobileNavTrigger.removeAttribute('aria-describedby');
  clubMobileNavTrigger.closest('.mobile-nav').classList.remove('is-onboarding-active');
  clubOrientation.overlay?.remove();
  clubOrientation.overlay = null;
  clubOrientation.layer?.remove();
  clubOrientation.layer = null;
  clubOrientation.active = false;
  clubOrientation.step = 0;
  profileView();
  openDrawer();
  discoveryView({ animate: false });
}

function startClubOrientationGuide() {
  if (clubOrientation.active || !onboardingTaskIsUnlocked('club')) return;
  closeDrawer();
  clubOrientation.active = true;
  const overlay = document.createElement('div');
  overlay.className = 'initial-onboarding-overlay deposit-guide-overlay';
  overlay.dataset.stage = 'club-orientation';
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  clubOrientation.cursorTune = mobile ? { x: 0, y: 0, rotation: 90 } : { x: -58, y: -9, rotation: 59 };
  overlay.innerHTML = '<span class="initial-onboarding-scrim" aria-hidden="true"></span><span class="initial-onboarding-focus" aria-hidden="true"></span><span class="initial-onboarding-pointer" aria-hidden="true"><svg viewBox="0 0 28 34" fill="none"><path d="M5.5 2.5 23.5 19l-8 1.6-3.4 8.9L5.5 2.5Z" fill="#9EE86E" stroke="#0D2B16" stroke-width="2" stroke-linejoin="round"/></svg></span><aside class="initial-onboarding-coachmark" id="clubOrientationCoachmark" role="dialog" aria-live="polite" aria-label="Guía de Club Olimpo"><button class="initial-onboarding-close" type="button" aria-label="Cerrar guía">×</button><span class="initial-onboarding-eyebrow">Conoce Club Olimpo</span><strong>Ingresa a Club Olimpo</strong><p>Pulsa el botón para conocer Club Olimpo, el programa de lealtad de Olimpo.bet que premia tu fidelidad.</p><span class="initial-onboarding-progress">Paso 1 de ' + (clubOrientationSteps.length + 1) + '</span>' + tourProgressBar(1, clubOrientationSteps.length + 1) + '</aside>' + clubCursorTuner();
  document.body.append(overlay);
  clubOrientation.overlay = overlay;
  clubOrientation.focus = overlay.querySelector('.initial-onboarding-focus');
  clubOrientation.pointer = overlay.querySelector('.initial-onboarding-pointer');
  clubOrientation.coachmark = overlay.querySelector('.initial-onboarding-coachmark');
  topbar.classList.add('is-onboarding-active');
  const target = mobile ? clubMobileNavTrigger : clubNavTrigger;
  if (mobile) clubMobileNavTrigger.closest('.mobile-nav').classList.add('is-onboarding-active');
  target.classList.add('is-onboarding-target');
  target.setAttribute('aria-describedby', 'clubOrientationCoachmark');
  overlay.addEventListener('pointerdown', (event) => {
    if (event.target.closest('.initial-onboarding-close') || event.target.classList.contains('initial-onboarding-scrim')) finishClubOrientationGuide();
  });
  overlay.addEventListener('input', (event) => {
    const control = event.target.closest('[data-club-cursor]');
    if (!control) return;
    const key = control.dataset.clubCursor;
    clubOrientation.cursorTune[key] = Number(control.value);
    overlay.querySelector(`[data-club-cursor-value="${key}"]`).textContent = `${control.value}${key === 'rotation' ? '°' : ' px'}`;
    positionClubOrientationEntry();
  });
  positionClubOrientationEntry();
  requestAnimationFrame(positionClubOrientationEntry);
  target.focus({ preventScroll: true });
}

function clubHomeScreen({ guide = true } = {}) {
  const rewardItems = [['pizza-cutout.png', 'Fast food', 'Pizza'], ['tv-cutout.png', 'Audio y Tecnología', 'TV'], ['coffee-cutout.png', 'Electrohogar', 'Cafetera'], ['perfume-cutout.png', 'Cuidado personal', 'Perfume']]
    .map(([asset, label, alt]) => `<span><i><img src="assets/imgs/club/${asset}" alt="${alt}"></i><small>${label}</small></span>`).join('');
  return `${clubHeader('', 'main')}<main class="club-home-screen"><section class="club-home-hero" aria-label="Club Olimpo"><picture><source media="(max-width:768px)" srcset="https://www.olimpo.bet/assets/img/clubOlimpo/banners/guerrero.png"><img src="https://www.olimpo.bet/assets/img/clubOlimpo/banners/desktop/guerrero.png" alt="Empieza como Guerrero"></picture></section><section class="club-home-summary"><div class="club-level" tabindex="-1"><p>Necesitas <b>798 puntos de nivel</b> más para ser Espartano.</p><div class="club-level-track"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="club-level-labels"><span>Guerrero<b>0 P</b></span><span>Espartano<b>800 P</b></span><span>Héroe<b>5,000 P</b></span><span>Rey<b>25,000 P</b></span><span>Titán<b>100,000 P</b></span><span>Dios<b>400,000 P</b></span></div><button type="button">Ver nivel</button></div><div class="club-points-card" tabindex="-1"><div class="club-points-summary-target"><h2>Tienes <b>${clubPoints}</b> puntos canjeables</h2><p>ⓘ 0 puntos vencerán el 30/12/2026</p></div><div><button class="club-redemption-target" data-club-next="portal" type="button">¡Quiero canjear!</button><button type="button">Ver historial</button></div></div></section><section class="club-levels-preview"><h2>Niveles de divinidad</h2><p>Explora cada nivel y descubre los beneficios exclusivos que desbloqueas conforme avanzas.</p><div><article><strong>Nivel GUERRERO</strong><span>Desbloqueado con 0 puntos</span></article><article><strong>Nivel ESPARTANO</strong><span>Desbloqueado con 800 puntos</span></article><article><strong>Nivel HÉROE</strong><span>Desbloqueado con 5,000 puntos</span></article></div></section><section class="club-rewards-preview" tabindex="-1" aria-label="Qué puedes canjear"><h2>¿Qué puedes canjear?</h2><div>${rewardItems}</div><button class="club-store-link" type="button">Ir a la tienda</button></section></main>`;
}

function clubPortalScreen() {
  return `${clubHeader('bonuses')}<main class="club-portal-screen"><img class="club-portal-banner" src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/banners/OB_BANNER_TIENDA_SORTEO_1920X512.png" alt="Sorteo de aniversario Club Olimpo"><section class="club-portal-categories"><h2>¡Bienvenido al Club Olimpo!</h2><div class="club-portal-list"><button type="button"><span>Productos</span><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/product-preview.png" alt=""></button><button type="button"><span>Experiencias</span><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/experience-preview.png" alt=""></button><button data-club-next="marketplace" type="button"><span>Bonos</span><img src="https://d3ekkuiebeebts.cloudfront.net/public/web/img/bonus-preview.png" alt=""></button></div></section></main>`;
}

function clubMarketplaceScreen({ guide = true } = {}) {
  const categories = [['categoria_todos.png','Todos los bonos'],['categoria_especial.png','Especiales'],['categoria_apuestas_deportivas.png','Deportes'],['categoria_casino_vivo.png','Casino en vivo'],['categoria_casino.png','Casino'],['categoria_virtuales.png','Virtuales']].map(([asset,label],index)=>`<span class="${index===0?'is-active':''}"><b><img src="https://www.olimpo.bet/static/img/promociones/${asset}" alt="${label}"></b><small>${label}</small></span>`).join('');
  const ticketNames = ['Apuesta deportiva de S/50', 'Casino en vivo de S/150', 'Casino de S/50', 'Virtuales de S/50'];
  const tickets = [1, 2, 3, 4].map((ticket, index) => `<article class="club-ticket-card"><picture><source media="(max-width:767px)" srcset="assets/imgs/ticket-mobile-${ticket}.png"><img src="assets/imgs/ticket-web-${ticket}.png" alt="Bono de ${ticketNames[index]} disponible para canjear por 5,000 puntos"></picture><button class="club-ticket-hotspot" data-club-ticket="${ticket}" type="button" aria-label="Canjear bono de ${ticketNames[index]} por 5,000 puntos"></button></article>`).join('');
  return `${clubHeader('bonuses')}<main class="club-marketplace-screen"><img class="club-marketplace-banner" src="https://www.olimpo.bet/static/img/bonos/banner-club-olimpo-25032026.webp" alt="Canjea tus puntos por bonos increíbles"><section class="club-marketplace-content"><h1>Explora todos nuestros bonos</h1><div class="club-marketplace-tabs"><button class="is-active" type="button">Todos los bonos</button><button type="button">Sin rollover</button><button type="button">Con rollover</button></div><div class="club-marketplace-categories">${categories}</div><div class="club-marketplace-filters"><span>⌕&nbsp; Buscar bonos</span><span>Con mis puntos disponibles <i></i></span><span>Ordenar por⌄</span></div><div class="club-bonus-grid club-ticket-grid">${tickets}</div></section></main>`;
}

function clubTermsScreen() {
  const ticket = clubJourney.selectedTicket;
  const names = ['Apuesta deportiva de S/50', 'Casino en vivo de S/150', 'Casino de S/50', 'Virtuales de S/50'];
  const name = names[ticket - 1];
  const sports = ticket === 1;
  const odds = sports
    ? 'Cuota mínima por evento 2.0, por cupón 2.0, cuota máxima por cupón 20. Se añadirá al saldo la ganancia neta (se descuenta el monto de la jugada).'
    : 'Los requisitos de juego y el cálculo del beneficio dependen del bono elegido. Consulta sus condiciones específicas antes de confirmar el canje.';
  const exclusions = sports
    ? 'No válido para apuestas combinadas en un mismo evento. No aplica para apuestas con Cashout ni Creador de apuestas.'
    : 'Revisa qué modalidades quedan excluidas para este bono antes de utilizarlo.';
  const validity = sports
    ? 'Después de otorgada la promoción, esta tiene una vigencia de 7 días.'
    : 'Comprueba la vigencia indicada para el bono seleccionado.';
  const withdrawal = sports
    ? 'En caso de retiro antes de cumplir las condiciones, se cancelan el bono y las ganancias asociadas.'
    : 'Revisa cómo puede afectar un retiro a un bono con requisitos pendientes.';
  return `${clubMarketplaceScreen({ guide: false })}<div class="club-confirmation-layer club-terms-layer"><section class="club-ticket-detail" role="dialog" aria-modal="true" aria-label="Detalle y términos del bono"><div class="club-ticket-detail-layout"><article class="club-ticket-summary"><picture><source media="(max-width:767px)" srcset="assets/imgs/ticket-mobile-${ticket}.png"><img src="assets/imgs/ticket-web-${ticket}.png" alt="Bono de ${name}"></picture><button class="club-detail-redeem-hotspot" data-club-next="success" type="button" aria-label="Canjear bono de ${name} por 5,000 puntos"></button></article><article class="club-ticket-terms" aria-label="Términos y condiciones del bono"><h2>${sports ? 'Términos y condiciones' : 'Antes de canjear este bono'}</h2><p class="club-term-odds">${odds}</p><ul><li class="club-term-exclusions">${exclusions}</li><li class="club-term-validity">${validity}</li>${sports ? '<li>No válido para apuestas live, betbuilder ni E-sports.</li><li>No se considerarán apuestas para resultados complementarios de un mismo mercado en un mismo evento.</li>' : ''}<li class="club-term-withdrawal">${withdrawal}</li></ul></article></div></section></div>`;
}

function clubSuccessScreen() {
  return `${clubMarketplaceScreen({ guide: false })}<div class="club-confirmation-layer club-success-layer"><section class="club-success-modal" role="dialog" aria-modal="true" aria-label="Confirmación del canje"><img src="assets/imgs/modal-confirmacion-web.png" alt="Felicidades, canjeaste tu bono. Ve a Mis bonos, actívalo y empieza a jugar."><button data-club-close class="club-success-hotspot club-success-hotspot--bonuses" type="button" aria-label="Ir a Mis bonos"></button><button data-club-close class="club-success-hotspot club-success-hotspot--continue" type="button" aria-label="Continuar canjeando"></button></section></div>`;
}

function renderClubJourney(stepIndex = clubJourney.step) {
  if (!clubJourney.layer) return;
  window.clearTimeout(clubJourney.timer);
  const previousScreen = clubJourney.layer.dataset.clubScreen;
  const persistentCoachmark = clubJourney.layer.querySelector('#clubJourneyCoachmark');
  const persistentFocus = clubJourney.layer.querySelector('.club-journey-focus');
  clubJourney.step = stepIndex;
  const step = clubRedemptionSteps[stepIndex];
  const screens = { home: clubHomeScreen, portal: clubPortalScreen, marketplace: clubMarketplaceScreen, terms: clubTermsScreen, success: clubSuccessScreen };
  clubJourney.layer.classList.remove('is-guide-active');
  clubJourney.layer.dataset.clubGuideState = 'context';
  clubJourney.layer.dataset.clubScreen = step.screen;
  clubJourney.layer.dataset.clubStep = String(stepIndex);
  clubJourney.layer.innerHTML = `<button class="club-prototype-close" data-club-close type="button" aria-label="Cerrar recorrido">×</button>${screens[step.screen]({ guide: false })}${clubMobileNavMarkup()}`;
  if (persistentCoachmark) clubJourney.layer.append(persistentCoachmark);
  if (persistentFocus) clubJourney.layer.append(persistentFocus);
  if (previousScreen !== step.screen) clubJourney.layer.scrollTop = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  clubJourney.timer = window.setTimeout(() => {
    if (!clubJourney.layer || clubJourney.step !== stepIndex) return;
    const target = clubJourney.layer.querySelector(step.target);
    if (!target) return;
    target.classList.add('club-guide-target');
    target.setAttribute('tabindex', target.hasAttribute('tabindex') ? target.getAttribute('tabindex') : '-1');
    target.setAttribute('aria-describedby', 'clubJourneyCoachmark');
    clubJourney.layer.classList.add('is-guide-active');
    clubJourney.layer.dataset.clubGuideState = 'guided';
    if (persistentCoachmark) {
      const template = document.createElement('template');
      template.innerHTML = clubCoachmark(stepIndex);
      persistentCoachmark.innerHTML = template.content.firstElementChild.innerHTML;
    } else {
      clubJourney.layer.insertAdjacentHTML('beforeend', clubCoachmark(stepIndex));
    }
    if (!persistentFocus) clubJourney.layer.insertAdjacentHTML('beforeend', '<span class="initial-onboarding-focus club-journey-focus" aria-hidden="true"></span>');
    if (clubJourneyPointerSteps.has(stepIndex)) clubJourney.layer.insertAdjacentHTML('beforeend', `<span class="club-coachmark-pointer" aria-hidden="true"></span>${clubJourneyCursorTuner(stepIndex)}`);
    requestAnimationFrame(() => {
      positionClubJourneyUI();
      target.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
      window.setTimeout(() => {
        positionClubJourneyUI();
        target.focus({ preventScroll: true });
      }, reduceMotion ? 0 : 500);
    });
  }, reduceMotion ? 0 : 420);
}

function advanceClubJourney(delta, { viaTarget = false } = {}) {
  if (delta > 0 && clubJourneyRequiredActions[clubJourney.step] && !viaTarget) return;
  const next = clubJourney.step + delta;
  if (next < 0) return;
  if (next >= clubRedemptionSteps.length) { closeClubJourney(); return; }
  renderClubJourney(next);
}

function closeClubJourney() {
  window.clearTimeout(clubJourney.timer);
  clubJourney.layer?.remove();
  clubJourney.layer = null;
  clubJourney.step = 0;
  clubJourney.cursorTunes = {};
  profileView();
  openDrawer();
  discoveryView({ animate: false });
}

function startClubRedemptionJourney() {
  closeDrawer();
  const layer = document.createElement('section');
  layer.className = 'club-prototype-layer club-redemption-layer';
  layer.setAttribute('aria-label', 'Recorrido de canje en Club Olimpo');
  layer.addEventListener('click', (event) => {
    if (event.target.closest('[data-club-close]')) { closeClubJourney(); return; }
    if (event.target.closest('[data-club-journey-prev]')) { advanceClubJourney(-1); return; }
    if (event.target.closest('[data-club-journey-next]')) { advanceClubJourney(1); return; }
    const ticketButton = event.target.closest('[data-club-ticket]');
    if (ticketButton && clubJourney.step === 3) {
      clubJourney.selectedTicket = Number(ticketButton.dataset.clubTicket);
      renderClubJourney(4);
      return;
    }
    const next = event.target.closest('[data-club-next]')?.dataset.clubNext;
    if ((next === 'portal' && clubJourney.step === 1) ||
        (next === 'marketplace' && clubJourney.step === 2) ||
        (next === 'success' && clubJourney.step === 8)) advanceClubJourney(1, { viaTarget: true });
  });
  layer.addEventListener('input', (event) => {
    const control = event.target.closest('[data-club-journey-cursor]');
    if (!control) return;
    const key = control.dataset.clubJourneyCursor;
    const tune = clubJourney.cursorTunes[clubJourney.step] ||= { x: 0, y: 0, rotation: 0 };
    tune[key] = Number(control.value);
    layer.querySelector(`[data-club-journey-cursor-value="${key}"]`).textContent = `${control.value}${key === 'rotation' ? '°' : ' px'}`;
    positionClubJourneyUI();
  });
  layer.addEventListener('scroll', positionClubJourneyUI, { passive: true, capture: true });
  document.body.append(layer);
  clubJourney.layer = layer;
  clubJourney.step = 0;
  clubJourney.selectedTicket = 1;
  clubJourney.cursorTunes = {};
  renderClubJourney(0);
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
clubNavTrigger.addEventListener('click', () => {
  if (clubOrientation.active && !clubOrientation.layer) openClubOrientationHome();
});
clubMobileNavTrigger.addEventListener('click', () => {
  if (clubOrientation.active && !clubOrientation.layer) openClubOrientationHome();
});
close.addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (clubJourney.layer) { closeClubJourney(); return; }
  if (clubOrientation.active) { finishClubOrientationGuide(); return; }
  if (depositGuide.active) { finishDepositGuide(); return; }
  if (!initialOnboarding.active) closeDrawer();
});
window.addEventListener('resize', () => {
  positionInitialOnboarding();
  positionDepositGuide();
  positionClubOrientationEntry();
  positionClubJourneyUI();
  positionClubOrientationUI();
});
document.addEventListener('pointerdown', (event) => {
  if (!initialOnboarding.active) return;
  const clickedClose = event.target.closest('.initial-onboarding-close, .initial-onboarding-understood');
  if (clickedClose) { finishInitialOnboarding(); return; }
  const clickedPrevious = event.target.closest('[data-initial-prev]');
  if (clickedPrevious && !clickedPrevious.disabled) {
    if (initialOnboarding.stage === 'discover') {
      closeDrawer();
      initialOnboarding.stage = 'profile';
      setInitialOnboardingCopy({ title: 'Bienvenido a Olimpo', body: 'Antes de comenzar, abre tu menú de usuario para conocer la sección "Descubre Olimpo".' });
      setOnboardingTarget(trigger, 'header');
    } else if (initialOnboarding.stage === 'summary') {
      profileView();
      openDrawer();
      initialOnboarding.stage = 'profile';
      advanceInitialOnboardingToDiscover();
    }
    return;
  }
  if (initialOnboarding.stage !== 'summary') return;
  const clickedCoachmark = event.target.closest('.initial-onboarding-coachmark');
  const clickedTarget = event.target.closest('.first-steps-card');
  if (!clickedCoachmark && !clickedTarget) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);

document.addEventListener('click', event => {
  if (!initialOnboarding.active) return;
  if (event.target.closest('.initial-onboarding-coachmark') || initialOnboarding.target?.contains(event.target)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
}, true);

document.addEventListener('keydown', event => {
  if (!initialOnboarding.active || event.key !== 'Tab') return;
  const controls = [...initialOnboarding.coachmark.querySelectorAll('button:not(:disabled)')];
  if (initialOnboarding.target?.matches('button:not(:disabled),a,input')) controls.unshift(initialOnboarding.target);
  if (!controls.length) return;
  const current = controls.indexOf(document.activeElement);
  const next = event.shiftKey ? (current <= 0 ? controls.length - 1 : current - 1) : (current + 1) % controls.length;
  event.preventDefault();
  controls[next].focus({ preventScroll: true });
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
  if (guideId) { if (guideId === 'bonuses') startBonusTour(); else if (guideId === 'club') startClubOrientationGuide(); else guideView(guideId); return; }
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

// DEBUG temporal: pulsa 1-5 para abrir cualquier guía directamente, saltando sus requisitos. Quitar antes de producción.
const debugGuideShortcuts = {
  1: () => { openDrawer(); guideView('kyc', 0); },
  2: () => { completedGuideIds = [...new Set([...completedGuideIds, 'kyc'])]; startBonusTour(); },
  3: () => { completedGuideIds = [...new Set([...completedGuideIds, 'kyc', 'bonuses'])]; startClubOrientationGuide(); },
  4: () => { completedGuideIds = [...new Set([...completedGuideIds, 'kyc', 'bonuses', 'club'])]; startDepositGuide(); },
  5: () => { completedGuideIds = [...new Set([...completedGuideIds, 'kyc', 'bonuses', 'club'])]; depositStepCompleted = true; startClubRedemptionJourney(); }
};
document.addEventListener('keydown', (event) => {
  if (event.target.closest('input, textarea, [contenteditable="true"]')) return;
  debugGuideShortcuts[event.key]?.();
});

// El prototipo parte con saldo vacío en todas las superficies, incluidas las guías
// que se renderizan dinámicamente después de abrirse.
function normalizePrototypeBalance(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (node.nodeValue.includes('S/ 3.50') || node.nodeValue.includes('S/ 0.0 soles')) {
      node.nodeValue = node.nodeValue.replaceAll('S/ 3.50', 'S/ 0.0').replaceAll('S/ 0.0 soles', 'S/ 0.0');
    }
  });
}
normalizePrototypeBalance();
new MutationObserver(() => normalizePrototypeBalance()).observe(document.body, { childList: true, subtree: true });
