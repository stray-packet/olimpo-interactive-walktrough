# Auditoría de coach marks y guías interactivas

**Alcance:** lectura estática del prototipo local, principalmente `prototype/app.js`, `prototype/styles.css` y `prototype/bonus-tour.css`. Los valores son CSS implementado (px CSS), no mediciones de una captura del producto publicado. Breakpoint móvil usado por los recorridos: `max-width: 768px` (aunque hay pantallas Club con reglas complementarias a 767 px). Esta auditoría documenta el estado encontrado; no modifica ni normaliza los componentes.

## Inventario y nomenclatura

| Flujo | Superficie | Tipo | Pasos |
|---|---|---|---:|
| Bienvenida inicial (`initial-onboarding-*`) | Web y mobile | Coach mark contextual sobre header/panel y resumen | 3 etapas; el resumen es la etapa 3 |
| Primer depósito (`depositGuide`) | Web y mobile | Coach mark en entrada, después panel coachmark dentro del flujo | 4 pasos declarados; paso de selección de medio requiere elegir una tarjeta; los controles pueden estar bloqueados por la acción |
| Orientación de Club Olimpo (`clubOrientation`) | Web y mobile | Coach mark contextual en entrada y en réplica de Club | 4 pasos (entrada + 3 en Club) |
| Canje de bono Club (`clubJourney`) | Web y mobile | Coach mark contextual que acompaña pantallas simuladas | 10 pasos |
| Bonos (`bonusTour`) | Web y mobile | Coach mark anclado a los términos/acciones de la página | 8 pasos |
| KYC y otras guías de `guideView` | Web y mobile | Modal/sheet de guía con pasos, ilustración/video y controles; **no** es coach mark anclado a un objetivo | La guía KYC tiene 2 pasos de contenido |

El recorrido Club también tiene un primer coach mark de entrada montado sobre `initial-onboarding-coachmark`; luego pasa a `club-prototype-coachmark`. Por tanto, un mismo flujo cambia de implementación a mitad del recorrido. Bonos tiene una implementación aislada en `bonus-tour.css/js`. Las guías de `guideView` son otro patrón y no deben mezclarse con las métricas de coach marks.

## Web (más de 768 px)

### Contenedor y espaciado

| Familia | Ancho | Padding interno | Gap entre hijos | Separaciones especiales |
|---|---:|---:|---:|---|
| Bienvenida / entrada de depósito / entrada Club | 340 px | base 16 × 18; override vigente 22 × 24 px (vertical × horizontal) | 5 px | progreso `margin-top: 3px`; controles `margin-top: 4px`; botones separados 8 px |
| Club orientación / canje | `min(340px, 100vw - 32px)` | base 18 × 20; reglas tardías reducen a 18 × 20 efectivo (luego de una regla temporal de 52 px a la derecha) | 5 px | progreso `margin-top: 3px` efectivo; controles `margin-top: 4px`; cierre 30 × 30 px |
| Depósito, pasos 2–4 | 340 px | 18 × 20 px | 5 px | progreso `margin-top: 3px` efectivo; controles usan 10 px arriba y 10 px entre botones |
| Bonos | 340 px | 17 × 19 px | 6 px | progreso y controles `margin-top: 8px`; gap botones 8 px |
| Modal `guideView` (referencia, no coach mark) | hasta 340 px | `52px 18px 18px` | cuerpo usa márgenes 6/8 px; layout del modal gap 22 px | imagen 142 px alto + 18 px inferior; progreso 24 px arriba; acciones 18 px arriba |

Bienvenida, Club y depósito alinean el encabezado/eyebrow, título, cuerpo y paso con `display:grid`; el gap de 5 px o 6 px es el espaciado base uniforme entre esos hijos. El margen superior de progreso/acciones se suma al gap, no lo reemplaza. Bonos repite la jerarquía pero con otros valores. El cierre absoluto está en la esquina superior derecha; el contenedor de Club tuvo un override temporal de padding derecho de 52 px que luego queda anulado a 20 px, y hoy deja solo 20 px para un cierre de 30 px colocado a 10 px del borde: potencial solape con el texto.

### Tipografía, color y superficie

- Superficie común oscura: `rgba(18,18,18,.94–.97)`; Club y depósito `.95`. Bordes verde lima translúcidos: `rgba(158,232,110,.28–.48)`. Radio común 16 px en onboarding y 18 px en Club/depósito/Bonos.
- Eyebrow/paso: GT Olimpo Medium 12/16 px en onboarding, Club y depósito; Bonos usa 12/17 px.
- Título: 18/24 px onboarding; 19/24 px Club/depósito; Bonos 19/25 px.
- Cuerpo: 14/20 px onboarding, Club y depósito; Bonos 14/20 px. Tonos de cuerpo varían: `#e8e8e8`, `#e1e4e2`, `#e7eae7`.
- Texto general blanco `#fff`; eyebrow verde `#9EE86E`; progreso onboarding `#D9F6C6` y en otros a veces vuelve a verde lima.
- Sombra: onboarding `0 16px 40px rgba(0,0,0,.34)`; Club/depósito `0 18px 50px rgba(0,0,0,.4)`; Bonos `0 18px 52px rgba(0,0,0,.38)`. Club/depósito agregan blur de fondo 12 px.
- Botones: primario `#9EE86E` con texto `#0F1F05`; secundario transparente con borde/texto verde. Radios 12–14 px, alto mínimo 36 px, excepto Bonos 38 px. Disabled alterna entre gris `#B5B5B5` y variantes translúcidas verdes.
- Progreso segmentado de 4 px alto y 5 px de separación; base `rgba(158,232,110,.22)`, segmento completado `#9EE86E`. En onboarding el helper genera `is-filled` por índice; en CSS se llama `.tour-progress` y `.initial-onboarding-progress`.

### Highlight y oscurecimiento

- Onboarding inicial: foco separado del objetivo, copia su caja con 8 px de extensión por lado (+16 px total); borde 1 px lima, radio 14 px web. Halo con spread 7 px (`rgba(158,232,110,.16)`) y glow de 28 px (`.36`). Sombreado global inicialmente `.72`, con override posterior `.42`; el panel Descubre ajusta aparte a `.18` por variable. El borde y caja cambian con transición de posición/tamaño, no hacen un recorrido continuo alrededor del objetivo.
- Panel “Primeros pasos”: selector especial usa outline 2 px, `outline-offset: 8px` y pulso de opacidad/glow a 1.7 s. Una regla previa fuerza radio 0 y elimina sombra, otra posterior añade ese outline animado.
- Club orientación/canje: el target base recibe outline 2 px, offset animado 5→9 px y glow; el oscurecimiento se implementa en un pseudo-elemento de pantalla con negro `.68` (en términos hay una máscara local adicional `.58`). Hay excepciones de padding añadidas por tipo: resumen Club `14 × 18 px`, bloque de nivel `16 × 20 px`, cuadrícula de bonos `12 px` con margen compensatorio, términos `8 × 12 px` con márgenes negativos. Esto mejora varios highlights pero no constituye un contrato común: el target de confirmación/CTA es hotspot absoluto y queda al tamaño ya definido del hotspot; otros nodos no tienen expansión. Una regla posterior reduce el offset visual a 7 px, aunque el keyframe del pulso lo anima hasta 9 px.
- Depósito: outline 2 px con offset 5 px, máscara de 9999 px al .68 y glow de 28 px; reutiliza pulso Club (offset llega a 9 px). La entrada “Deposita” usa foco aparte con extensión 8 px.
- Bonos: outline 2 px con offset fijo 4 px, glow 24 px; añade `background-color: #ECF9F0` al objetivo (override a verde original solo para el botón Activar). No hay pulso de borde definido; el scrim es `rgba(18,18,18,.42)`. Esta diferencia puede alterar el elemento original y contrasta con Club/depósito, donde el borde respira.
- Puntero: onboarding usa imagen de cursor de 48 px (existe override final; tamaño previo era 28×34 px). En móvil de onboarding se sustituye un círculo/tap ripple previo por esa imagen. Club coloca cursor de 48 px alrededor del target en pasos concretos. Bonos no usa puntero.

## Mobile (hasta 768 px)

Los controles conservan sistema y colores de desktop salvo los ajustes indicados; no hay token móvil común entre familias.

| Familia | Coach mark y posición | Padding y tipo | Controles |
|---|---|---|---|
| Bienvenida/entrada depósito/entrada Club | ancho disponible entre 12 px laterales; onboarding fija abajo a 88 px del borde, salvo entrada Club a 142 px | 22 × 22 px efectivo (una regla previa fija 15 × 16); título 17/22 px; cuerpo 13/19 px; gap sigue 5 px | botones 34 px alto mínimo, padding 6 × 7 px |
| Club orientación/canje | 12 px laterales; normalmente top 76 px para `.club-prototype-coachmark`; posicionador JS puede ubicar debajo/arriba del target (min top 62 px, 70 px en términos), el media query posterior pone bottom 76 px en otro contexto | conserva 18 × 20 px; ancho fluido; no reduce tipografía explícitamente | 36 px alto mínimo; cierre 30 px |
| Depósito pasos 2–4 | 12 px laterales; base CSS bottom 76 px, pero JS reposiciona arriba/abajo del target | conserva 18 × 20 px y tipografía 19/24 + 14/20 | controles definidos por variante; pueden estar bloqueados hasta completar selección/entrada |
| Bonos | 12 px laterales; posicionador JS ancla debajo o arriba del target; regla antigua bottom 82 luego sustituida por `top:90px` | efectivo 13 × 15 px; gap 4 px; título 17/22, cuerpo 12/17; sin límite/scroll interno en regla final | botones 34 px; cierre 30 px en top 10 dentro del panel |
| Modal `guideView` | layer padding 12 px; modal ocupa hasta el ancho del drawer | padding `48px 16px 16px`; imagen 122 px; título 20/26, cuerpo 14/21 | botones continúan 14 px; distinto del coach mark |

Highlight móvil conserva las divergencias: Club y depósito mantienen halo/máscara y offset 5–9 px; Bonos offset 4 px fijo. Onboarding conserva el marco separado de +8 px y radios responsivos, pero Club entrada lo convierte a círculo en el objetivo del icono. En Bonos el coachmark JS evita la altura del nav calculando la posición; en Club y depósito existen márgenes de scroll 84/230 px y padding inferior de pantalla para reservar espacio. La bienvenida usa posición fija y medidas constantes (`coachmarkHeight = 168`) para calcular ubicación, aunque el contenido real pueda crecer.

## Navegación, progreso y cierre

| Flujo | Anterior | Siguiente / completar | Cerrar | Observaciones |
|---|---|---|---|---|
| Bienvenida inicial | Sí, disabled en paso 1 | Sí; pasos iniciales disabled mientras requieren clic en el objetivo; cierre “Entendido” en resumen | Solo resumen tiene X; durante las primeras etapas no hay X; clic externo finaliza solo en etapa resumen | La salida no es uniforme; el usuario puede quedar obligado a realizar la acción para avanzar o depender de clic exterior |
| Depósito | Sí, desde ciertos subpasos; botón atrás también navega | Sí, puede estar disabled hasta elegir medio, monto válido o confirmar | Sí, X; clic en scrim cierra solo overlay inicial | El panel en pasos 2+ tiene controles disabled estratégicamente, no un botón “Siguiente” activo en todos los pasos. Escape no se ve implementado aquí |
| Orientación Club | Sí; disabled cuando corresponde | “Continuar” / “Finalizar” | Sí en cada coachmark y botón de cerrar pantalla | Entrada inicial no ofrece anterior/siguiente, solo acción del usuario sobre el menú; luego aparecen los dos controles |
| Canje Club | Sí, disabled paso 1 | “Siguiente” / “Finalizar” | Sí en cada paso; además hay botón global de cerrar pantalla oculto visualmente en paso guiado | Se oculta el cierre global para evitar duplicación; el coachmark mantiene su propio cierre |
| Bonos | Sí, disabled paso 1 | “Continuar” / “Finalizar”; pasos con `action` avanzan al actuar sobre target, paso Activar enseña siguiente deshabilitado “Presiona Activar” | Sí en cada paso; Escape global | La acción objetivo sustituye navegación en pasos 1 y 6; consistente con una guía interactiva, pero distinto de pasos informativos |
| Modal de guía KYC | Anterior solo después del paso 1 | “Siguiente” y acción final asociada a mock de KYC | Sí, botón X | No hay highlight contextual ni puntero; pertenece a patrón de modal multipaso |

## Inconsistencias y riesgos de UX encontrados

1. **No existe una especificación única de padding.** Coach marks web son 16×18, 17×19, 18×20 o 22×24 px. En móvil el onboarding termina en 15×16, Club/depósito conservan 18×20 y Bonos usa 13×15.
2. **Espaciado interno y ritmo tipográfico no coinciden.** Gap 5/6 px; títulos 18 o 19 px; cuerpo baja hasta 12 px en Bonos móvil. “Paso”, barra y controles usan márgenes propios diferentes (3/4/8/10 px), haciendo más largo un mismo bloque según familia.
3. **Highlight no comparte contrato geométrico.** Onboarding separa el foco y expande la caja 8 px; Club agrega padding solo a algunos tipos de target (14×18, 16×20, 12 o 8×12 px), mientras otros quedan al tamaño DOM/hotspot; depósito y Bonos usan borde externo con `outline-offset` pero no padding de target. El offset visual no equivale a padding interior ni amplía el área tocable. En términos Club se tiñe el fondo blanco para mantener lectura; Bonos tiñe el target de verde, salvo el botón. El ajuste manual por selector puede desbordarse o alterar el layout si no compensa el margen.
4. **Tratamiento del scrim es distinto.** Onboarding cambia de .72 a .42 y panel a .18; Club usa pseudo-elemento global `.68` y en términos otra máscara `.58`; depósito usa spread de sombra 9999 px al .68; Bonos usa una capa independiente al .42. La percepción del contraste de target y del resto de pantalla no será igual.
5. **Animaciones halladas antes de la estandarización.** Club/depósito animaban el offset del outline, onboarding movía el marco entre objetivos y animaba el cursor, y Bonos tenía reglas de animación propias. Esas diferencias se consolidaron en el contrato de highlight descrito abajo; el movimiento del marco al cambiar de objetivo y el cursor siguen siendo específicos del onboarding.
6. **Controles de salida varían.** La bienvenida solo tiene X en resumen; Bonos soporta Escape; depósito no muestra soporte Escape; otros flujos dependen del X del coachmark. La entrada Club ofrece menos controles que sus pasos siguientes.
7. **Doble cierre en Club.** Hay cierre global de pantalla y cierre del coachmark; el global se oculta durante los pasos guiados, pero el criterio depende de clase/estado y puede romperse en una pantalla transicional.
8. **Contradicciones acumuladas en CSS.** Valores redefinidos en varios bloques: scrim onboarding `.72 → .42`; padding coachmark `.16/18 → 22/24 → móvil 15/16`; padding Club derecho `52 → 20`; posición Bonos móvil `bottom:82 → top:90`; cursor onboarding `28×34 → 48×48`. El resultado efectivo es difícil de auditar y los comentarios conservan decisiones ya sobreescritas.
9. **Posicionamiento con medición fija o reglas cruzadas.** Bienvenida asume alto de coachmark de 168 px, mientras el copy puede ocupar más; Club tiene reglas top y bottom según orden de CSS más cálculo JS; términos Club usan excepción de posicionamiento. Riesgo de solape, salto o clipping ante traducciones, texto largo, zoom o viewport bajo.
10. **El recorrido cambia de componente.** Orientación Club empieza como onboarding genérico y continúa como coachmark Club; depósito también transiciona de uno al otro. Eso duplica estado, geometría, roles ARIA y cierre.
11. **Semántica ARIA heterogénea.** Onboarding usa `role=dialog`; la mayoría Club/depósito usan `role=status`, pese a incluir botones que requieren interacción. Bonos usa diálogo, pero no se ve `aria-modal`; algunas relaciones `aria-describedby` no se establecen en todos los tipos.

## Base recomendada para estandarizar

Tomar una sola familia de tokens (ajustable por breakpoint): contenedor web 340 px máximo, móvil 12 px de margen; padding web 20 px y móvil 16 px; radio 16 px; gap de contenido 8 px; eyebrow/paso 12/16, título 18/24, cuerpo 14/20; progreso 4 px alto y 5 px gap; separación progreso/controles 8 px; botones 36 px mínimo web y móvil. Cierre de 30 px debe quedar dentro de una reserva superior/derecha suficiente para no colisionar con el título.

Para el target, definir `targetPadding` explícito por objetivo/semántica (por ejemplo 4–8 px, mayor para control táctil), crear una capa de foco independiente que expanda la caja DOM por ese valor y poner el borde/glow exterior en esa capa. No resolverlo solo con `outline-offset`: este cambia lo visual, no el área interactiva ni el fondo del elemento. Elegir un único tratamiento de scrim/glow; mantener la forma/color originales del target; animar solo si respeta `prefers-reduced-motion`.

Unificar bajo un controlador compartido los estados de posicionamiento (medir tamaño real, límites del viewport, safe area y nav fija), navegación, X, Escape, progreso, foco y ARIA. Las acciones obligatorias pueden bloquear “Siguiente”, pero deben comunicar el paso requerido y conservar una salida visible. Mantener el modal KYC como patrón hermano separado, pues su contenido y no un target del producto es el foco.

### Archivos fuente revisados

- `prototype/app.js`: bienvenida inicial, guías modales, depósito, Club orientación y canje.
- `prototype/styles.css`: estilos base/overrides de onboarding, Club, depósito y modal de guía.
- `prototype/bonus-tour.js` y `prototype/bonus-tour.css`: recorrido de Bonos.

## Actualización: estándar mobile aplicado

Después de esta auditoría se tomó como referencia la variante mobile de Club Olimpo y se aplicó a los coach marks de bienvenida, depósito, Club Olimpo y Bonos tanto en mobile como en web: padding `16 px`; eyebrow `12/16`; título `18/24`; cuerpo `14/20`; separaciones `6 px` entre eyebrow/título y título/cuerpo, `14 px` entre cuerpo/paso; progreso `4 px` arriba; controles `12 px` arriba, gap `6 px` y padding de botón `7 × 8 px`; radio `18 px`. En la primera implementación web solo se había actualizado Club Olimpo; una corrección posterior extendió el estándar a bienvenida, depósito y Bonos.

El highlight ya comparte borde lima de 2 px, offset base de `7 px` con pulso a `9 px`, halo exterior de `7 px` y glow de hasta `26 px`, con ciclo de `1.7 s` en web y mobile. Un keyframe común controla el offset en los targets de Club, depósito, primeros pasos y Bonos; otro keyframe común pulsa borde y halo en los marcos separados de bienvenida/orientación Club. Los overlays genéricos ocultan el halo propio del target para no duplicarlo. La entrada a Club Olimpo usa outline directo, dado que su marco separado acompaña la explicación de entrada. `prefers-reduced-motion` desactiva ambos pulsos.

La caja geométrica del marco de orientación Club se expande ahora `7 px` por lado (`14 px` en ancho y alto), igual que los otros marcos separados. Esto es espacio visual del highlight, no un aumento del área interactiva ni del hitbox del control. La capa/scrim y el fondo original del elemento permanecen específicos por flujo; el glow y el borde ya no varían entre ellos.

Siguen siendo específicas de cada contexto la ubicación del coach mark, los punteros, la opacidad del scrim y el fondo original del elemento resaltado. Por eso el recorrido de Bonos conserva su capa `.42`, y Club/depósito sus capas de oscurecimiento de `.68`; no se dedujo un nuevo valor de scrim porque el ajuste elegido no especificaba uno.

## Actualización de textos y navegación — 2026-10-05

Correcciones mobile posteriores: la línea de niveles conserva 92 px por hito y un contenido de 552 px, recortado dentro de su contenedor hacia la derecha, sin comprimir etiquetas ni ensanchar la página. El marco de nivel mantiene el espacio interior del contenido. La entrada Club coloca el coach mark encima de su flecha, junto al acceso inferior; la flecha apunta hacia abajo. La entrada de depósito utiliza la misma imagen de flecha, en horizontal desde el encabezado hacia Deposita, con tamaño 36 px para encajar sin recorte. Los marcos/coach marks se recalculan cuando cambian las medidas del objetivo o del banner; en el portal mobile se reserva la posición del coach mark respecto al botón Bonos para mantenerlo pulsable.

Se fijaron las configuraciones aprobadas de flechas de canje: paso 2 mobile X −73, Y 62, rotación −15°, flip Sí; web X 10, Y 43, rotación −6°, flip Sí. Paso 3 mobile X 0, Y 101, rotación 5°, flip No; web X 24, Y 133, rotación 5°, flip No. Los valores anteriores guardados por el navegador se ignoran en esos dos pasos. Solo el paso 5 conserva el panel de ajustes. Validación en Chromium y WebKit: 390×844, 320×480 y 1366×768, con clics por las guías, encuadre de flechas, separación del coach mark, ancho de hitos y configuraciones aprobadas.

Los pasos de Bonos que requieren una acción muestran Anterior y Siguiente deshabilitado, incluyendo la entrada desde el menú. El coach mark de medios de pago se centra horizontalmente con la grilla; Anterior vuelve a la entrada y Siguiente permanece bloqueado. Los botones Anterior de los coach marks conservan el estilo outline incluso deshabilitados. Se sustituyeron las comillas angulares por comillas rectas en los textos de las guías.

En canje, el primer paso anima los puntos desde 0 hasta 5,000 durante 1.6 segundos (sin animación cuando se solicita reducir movimiento). Los pasos 2 y 3 muestran Siguiente bloqueado. El marco del paso 3 agrupa Productos, Experiencias y Bonos; solo Bonos está habilitado y la flecha se posiciona respecto a ese botón. Cada flecha de canje dispone de un panel desplegable con X, Y, rotación y flip horizontal. Los valores se guardan en el navegador por paso y por dispositivo, con configuraciones independientes para web y mobile. Los modales de confirmación usan las imágenes originales del usuario: se compararon sus hashes SHA-256 con los archivos recibidos y coinciden.

Actualización posterior del canje: cinco pasos guiados, seguidos del modal de confirmación. Los antiguos pasos de cuotas, restricciones, vigencia, retiro y confirmación se condensaron en un único coach mark fijo: «Lee los términos y condiciones» / «Revisa las condiciones del bono. Cuando termines de leerlas, pulsa “Canjear”». En esta pantalla no se muestran controles de paso: la acción Canjear abre directamente la confirmación. Las condiciones tienen desplazamiento propio, el botón permanece visible y la flecha apunta a él. La confirmación utiliza las imágenes entregadas por el usuario, separadas en `prototype/assets/imgs/club-olimpo/canje/confirmacion-web.png` y `confirmacion-mobile.png`, sin coach mark adicional ni botón Continuar canjeando. La grilla web mantiene dos bonos por fila; el espacio entre filas mobile baja a 6 px. Validación: 32 canjes completos (cuatro bonos en cuatro tamaños, Chromium y WebKit), comprobando lectura, coach mark fijo, botón accesible y variante de imagen correcta.

La bienvenida inicial conserva tres pasos y muestra únicamente título y texto, sin etiqueta común, número de paso, barra de progreso ni botones Anterior/Siguiente. Los dos primeros pasos avanzan mediante el objetivo resaltado; el resumen conserva su X para cerrar. El texto final indica completar los cuatro tutoriales para recibir un bono de S/50.

Bonos incorpora dos pasos al inicio: abrir Mis bonos desde el menú de usuario y presentar la tarjeta completa del bono de prueba. El recorrido pasa a diez pasos, con diez segmentos de progreso en una sola línea. Las restricciones preceden a la advertencia sobre retiros, luego se explica el límite de un bono activo y finalmente se solicita Activar. Pulsar Activar completa el tutorial directamente. El menú de entrada bloquea el desplazamiento manual para mantener el objetivo alineado.

Se actualizaron los cuatro textos de orientación Club, con el mismo texto de entrada para web y mobile. En depósito se actualizaron las instrucciones de entrada y confirmación. En mobile, la selección del medio de pago permite desplazamiento táctil, mantiene fijo el coach mark y elimina el borde/glow contextual de la colección. Se reserva espacio sobre los medios para evitar que el coach mark cubra opciones en ambos dispositivos. El último Siguiente permanece deshabilitado, incluso al editar el monto: Ir a depositar completa el flujo directamente. Los textos de canje se mantienen para una revisión posterior.

Validación de estos cambios: 184 comprobaciones sin fallos en Chromium y WebKit, usando 390×480, 390×640, 1024×600 y 1366×768. Se recorrieron onboarding, los diez pasos de Bonos (incluido regresar al menú), orientación Club y depósito mediante clics, comprobando encuadre, controles habilitados y finalización. Comprobaciones adicionales verificaron la máscara fija del menú, los diez segmentos en una fila, el ancho del highlight del bono y el bloqueo de Siguiente después de editar el monto final. Se comprobó desplazamiento real mediante rueda y gesto táctil simulado en Chromium. El laboratorio refleja los textos actualizados; JavaScript y diff revisados. Estas pruebas usan motores de navegador locales, sin validación en un teléfono físico.

## Corrección y validación de visibilidad — 2026-10-05

Actualización posterior: los coach marks de orientación Club usan fondo opaco y no aplican `filter` ni `backdrop-filter`, eliminando el desenfoque observado en los pasos 2 y 3. El resumen del onboarding inicial incorpora una barra de carga de cuatro segundos; al completar ese tiempo sin interacción se cierra la guía y se libera el desplazamiento. Una pulsación o tecla reinicia el contador; cerrar manualmente cancela el temporizador.

El paso 5 del canje utiliza las imágenes originales `club-olimpo/canje/terminos-web.png` y `terminos-mobile.png`. Canjear conserva su interacción mediante un botón transparente sobre el botón dibujado; la X web también es interactiva. El contenedor de la imagen permite desplazamiento cuando la altura disponible es reducida. El coach mark permanece fijo y la flecha sigue apuntando al botón. La barra de desplazamiento y los términos dentro de la imagen son parte del bitmap recibido.

Validación de esta actualización: Chromium y WebKit en 1366×768, 390×844 y 320×480. Se comprobó el cierre automático y el reinicio por interacción, la liberación del scroll, los filtros desactivados en ambos pasos de Club, la imagen correspondiente por dispositivo y el canje mediante el botón superpuesto, sin errores de página.

Corrección adicional del primer paso: iniciar la guía con la página previamente desplazada dejaba el avatar fuera del viewport al bloquear el scroll. Se reprodujo con WebKit: tras desplazar 500 px, el avatar quedaba en `top: -488 px`. Ahora la guía vuelve al inicio antes del bloqueo y fija el encabezado al área de `visualViewport`, actualizándolo cuando cambia su offset. Validación: ocho recorridos táctiles completos (Chromium/WebKit, 320×480 y 390×844, área visible normal y desplazada), pulsando avatar, entrada Descubre Olimpo y Entendido. Todos pasaron y el objetivo inicial quedó visible y pulsable.

Los coach marks de onboarding, Bonos, Club y depósito se limitan al área de `visualViewport`, con margen de 12 px y medición del alto después de aplicar el ancho. Si el contenido supera el área visible, el coach mark permite desplazamiento interno. Bonos mide su contenido con el ancho mobile antes de posicionar el objetivo. Los objetivos móviles de Club/depósito se desplazan por programa cuando hace falta espacio para el coach mark.

Durante el onboarding inicial se bloquea el desplazamiento manual del panel y la interacción con elementos ajenos al objetivo y a los controles del coach mark. El foco con Tab permanece en esos controles. Los paneles temporales de ajuste del cursor requieren `data-guide-debug` en el body, para que no cubran objetivos ni botones. La entrada Club en anchos de 769–1150 px muestra su acceso mientras la guía lo requiere.

Validación en Chromium mediante Playwright: 155 estados (31 por tamaño) en 390×640, 390×480, 1366×768, 1024×600 y 390×844 con área visible simulada de 640 px. Se revisaron los tres pasos iniciales, dos pasos KYC, ocho de Bonos, entrada y tres pasos de orientación Club, diez de canje y cuatro de depósito. Se comprobó el encuadre del coach mark, la accesibilidad de sus controles habilitados mediante hit testing, la accesibilidad de los objetivos pulsables y el bloqueo del scroll inicial. También se navegó con clics reales por onboarding y adelante/atrás en Bonos, verificando una posición intermedia del highlight durante su transición. Sin fallos en la pasada final; sintaxis JavaScript y `git diff --check` correctos. Las pruebas no incluyen Safari en un iPhone físico; los recursos externos se bloquearon durante la validación local de geometría.
