const variants = [
  { id: 'onboarding', name: 'Bienvenida inicial', subtitle: 'Marco expandido y puntero', label: '', title: 'Bienvenido a Olimpo', body: 'Antes de comenzar, abre tu menú de usuario para conocer la sección "Descubre Olimpo".', target: 'Tu perfil', targetDetail: 'Guías · ayuda', values: { padX:24,padY:22,gap:5,eyebrowSize:12,eyebrowLine:16,titleSize:18,titleLine:24,bodySize:14,bodyLine:20,targetPadding:8,targetGap:7,progressTop:3,controlsTop:4,buttonGap:8,radius:16 } },
  { id: 'club', name: 'Club Olimpo', subtitle: 'Borde pulsante y scrim', label: 'Conoce Club Olimpo', title: 'Gana puntos jugando', body: 'Aquí ves cuántos puntos tienes acumulados y cuántos están por vencer. Revisa la fecha indicada para aprovecharlos a tiempo.', target: '5,000 puntos', targetDetail: 'Canjeables', values: { padX:20,padY:18,gap:5,eyebrowSize:12,eyebrowLine:16,titleSize:19,titleLine:24,bodySize:14,bodyLine:20,targetPadding:8,targetGap:7,progressTop:3,controlsTop:4,buttonGap:8,radius:18 } },
  { id: 'deposit', name: 'Primer depósito', subtitle: 'Coach contextual con acciones', label: 'Primer depósito', title: 'Elige el medio de pago', body: 'Selecciona el medio que se te acomode mejor.', target: 'Medios de pago', targetDetail: 'Elige una opción', values: { padX:20,padY:18,gap:5,eyebrowSize:12,eyebrowLine:16,titleSize:19,titleLine:24,bodySize:14,bodyLine:20,targetPadding:6,targetGap:5,progressTop:3,controlsTop:10,buttonGap:10,radius:18 } },
  { id: 'bonus', name: 'Bonos', subtitle: 'Coach anclado a contenido', label: 'Conoce tus bonos', title: 'Revisa la vigencia', body: 'Aquí ves hasta cuándo está disponible y cuánto tiempo tienes para cumplir las condiciones después de recibirlo.', target: 'Vigencia', targetDetail: 'Disponible hasta el 31/12', values: { padX:19,padY:17,gap:6,eyebrowSize:12,eyebrowLine:17,titleSize:19,titleLine:25,bodySize:14,bodyLine:20,targetPadding:4,targetGap:4,progressTop:8,controlsTop:8,buttonGap:8,radius:18 } }
];

const controls = [
  ['padX','Padding horizontal',8,36,1,'px'],['padY','Padding vertical',8,36,1,'px'],
  ['eyebrowSize','Tamaño eyebrow',10,16,1,'px'],['titleSize','Tamaño título',14,26,1,'px'],
  ['bodySize','Tamaño cuerpo',11,20,1,'px'],['titleGap','Eyebrow → título',0,20,1,'px'],
  ['bodyGap','Título → cuerpo',0,24,1,'px'],['stepGap','Cuerpo → paso',0,24,1,'px'],
  ['targetPadding','Padding del highlight',0,20,1,'px'],['targetGap','Separación del borde',0,14,1,'px'],
  ['progressTop','Espacio antes del progreso',0,20,1,'px'],['controlsTop','Espacio antes de botones',0,20,1,'px'],
  ['buttonGap','Gap entre botones',0,16,1,'px'],['buttonPadX','Padding horizontal botón',0,20,1,'px'],
  ['buttonPadY','Padding vertical botón',0,16,1,'px'],['radius','Radio del coach mark',8,28,1,'px']
];
const mobileStandard = { padX:16, padY:16, gap:6, eyebrowSize:12, eyebrowLine:16, titleSize:18, titleLine:24, bodySize:14, bodyLine:20, targetPadding:7, targetGap:7, progressTop:4, controlsTop:12, buttonGap:6, radius:18 };

function renderVariant(variant, device) {
  const isMobile = device === 'mobile';
  const source = isMobile ? { ...variant.values, ...mobileStandard } : variant.values;
  const model = { ...structuredClone(source), titleGap:isMobile?6:source.gap, bodyGap:isMobile?6:source.gap, stepGap:isMobile?14:source.gap, buttonPadX:8, buttonPadY:isMobile?7:6 };
  const id = `${device}-${variant.id}`;
  const controlsHtml = controls.map(([key,label,min,max,step,unit]) => `<div class="control"><label for="${id}-${key}"><span>${label}</span><output data-output="${key}">${model[key]}${unit}</output></label><input id="${id}-${key}" type="range" min="${min}" max="${max}" step="${step}" value="${model[key]}" data-key="${key}" data-unit="${unit}"></div>`).join('');
  const stage = isMobile ? 'mobile' : 'web';
  const outerTarget = variant.id === 'onboarding' ? '<span class="sample-target-outer" aria-hidden="true"></span>' : '';
  const card = document.createElement('article');
  card.className = `lab-card variant-${variant.id}`;
  card.innerHTML = `<div class="card-title"><div><h3>${variant.name}</h3><p>${variant.subtitle}</p></div><button class="copy-button" type="button">Copiar valores</button></div><div class="preview-stage ${stage}">${outerTarget}<div class="fake-product target"><b>${variant.target}</b><span>${variant.targetDetail}</span>${variant.id === 'deposit' ? '<button>Seleccionar</button>' : ''}</div><aside class="sample-coach"><p class="sample-eyebrow">${variant.label}</p><h4>${variant.title}</h4><p class="sample-body">${variant.body}</p><p class="sample-step">Paso 2 de 5</p><div class="sample-progress"><i></i><i></i><i></i><i></i><i></i></div><div class="sample-actions"><button>Anterior</button><button class="primary">${variant.id === 'deposit' ? 'Seleccionar' : 'Continuar'}</button></div></aside></div><div class="controls"><div class="controls-head"><strong>CONTROLES DE ESTA VARIANTE</strong><span class="copy-state" aria-live="polite"></span></div><div class="control-grid">${controlsHtml}</div></div><div class="value-strip"><code>${id}</code><code class="value-count">16 valores</code></div>`;
  const coach = card.querySelector('.sample-coach');
  if (variant.id === 'onboarding') coach.querySelectorAll('.sample-eyebrow,.sample-step,.sample-progress,.sample-actions').forEach(element => element.remove());
  const target = card.querySelector('.fake-product');
  function applyValues() {
    for (const [key, value] of Object.entries(model)) {
      const prop = ({padX:'--pad-x',padY:'--pad-y',eyebrowSize:'--eyebrow-size',eyebrowLine:'--eyebrow-line',titleSize:'--title-size',titleLine:'--title-line',bodySize:'--body-size',bodyLine:'--body-line',targetPadding:'--target-padding',targetGap:'--target-gap',progressTop:'--progress-top',controlsTop:'--controls-top',buttonGap:'--button-gap',buttonPadX:'--button-pad-x',buttonPadY:'--button-pad-y',radius:'--radius',titleGap:'--title-gap',bodyGap:'--body-gap',stepGap:'--step-gap'})[key];
      if (prop && !['targetPadding','targetGap'].includes(key)) coach.style.setProperty(prop, `${value}px`);
      if (key === 'targetPadding') target.style.setProperty(prop, `${value}px`);
      if (key === 'targetGap') target.style.setProperty(prop, `${value}px`);
    }
  }
  card.querySelectorAll('input[type=range]').forEach(input => input.addEventListener('input', () => {
    const key = input.dataset.key;
    model[key] = Number(input.value);
    card.querySelector(`[data-output="${key}"]`).textContent = `${input.value}${input.dataset.unit}`;
    applyValues();
  }));
  card.querySelector('.copy-button').addEventListener('click', async () => {
    const payload = { device, variant: variant.name, cssVariables: { padding: `${model.padY}px ${model.padX}px`, eyebrowFontSize: `${model.eyebrowSize}px`, titleFontSize: `${model.titleSize}px`, bodyFontSize: `${model.bodySize}px`, eyebrowTitleGap: `${model.titleGap}px`, titleBodyGap: `${model.bodyGap}px`, bodyStepGap: `${model.stepGap}px`, targetPadding: `${model.targetPadding}px`, targetOutlineOffset: `${model.targetGap}px`, progressMarginTop: `${model.progressTop}px`, controlsMarginTop: `${model.controlsTop}px`, buttonGap: `${model.buttonGap}px`, buttonPadding: `${model.buttonPadY}px ${model.buttonPadX}px`, borderRadius: `${model.radius}px` }, values: { ...model } };
    const text = JSON.stringify(payload, null, 2);
    try { await navigator.clipboard.writeText(text); }
    catch { const field = document.createElement('textarea'); field.value=text; document.body.append(field); field.select(); document.execCommand('copy'); field.remove(); }
    card.querySelector('.copy-state').textContent = 'Valores copiados';
    const toast=document.querySelector('#copy-toast'); toast.textContent=`${variant.name} (${isMobile?'mobile':'web'}): valores copiados`; toast.classList.add('is-visible');
    window.setTimeout(()=>{toast.classList.remove('is-visible');card.querySelector('.copy-state').textContent='';},1800);
  });
  applyValues();
  return card;
}

for (const [device, rail] of [['web',document.querySelector('#web-rail')],['mobile',document.querySelector('#mobile-rail')]]) {
  variants.forEach(variant => rail.append(renderVariant(variant,device)));
}
