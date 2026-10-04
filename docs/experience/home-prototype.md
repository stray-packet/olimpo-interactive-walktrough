# Prototipo de Inicio

## Estado vigente

Existe una réplica local y editable de la pantalla de Inicio de Olimpo, creada como base de mockup para las guías. No reemplaza el producto ni contiene lógica real de cuenta, depósito, apuestas o rutas externas.

## Ubicación

- Entrada: [`prototype/index.html`](../../prototype/index.html)
- Estilos: [`prototype/styles.css`](../../prototype/styles.css)
- Interacciones: [`prototype/app.js`](../../prototype/app.js)

## Alcance implementado

- Cabecera de escritorio y navegación inferior móvil.
- Hero con banners rotativos y controles manuales.
- Accesos rápidos, módulo `En vivo`, eventos deportivos, catálogo visual de juegos y bloque de ayuda.
- Drawer lateral derecho desde el avatar de perfil: apertura, cierre, overlay, Escape y estados de menú.
- Adaptación CSS para escritorio, tablet y móvil.
- La tipografía local del prototipo es GT Walsheim (Regular, Medium y Bold), tomada de la instalación nativa de Windows y servida desde `prototype/assets/fonts` para evitar fallback remoto.
- El panel de perfil se ajustó contra una sesión autenticada de prueba: cabecera verde, tarjeta de saldo flotante, accesos Mensajes/Deposita/Retira y menú de tarjetas. `Descubre Olimpo` se integra como una opción adicional de esa lista.

## Onboarding inicial de cuenta nueva — prototipo

- El Inicio comienza en estado público con `Registrarse` e `Iniciar sesión` en la cabecera. `Registrarse` entra directamente al Inicio autenticado simulado; `Iniciar sesión` activa el onboarding de cuenta nueva.
- El onboarding obligatorio tiene dos acciones: abrir el menú de perfil y seleccionar `Descubre Olimpo`. No ofrece cierre, omisión ni interacciones alternativas durante el recorrido.
- El primer foco explica que el menú reúne ayuda, guías y el bono inicial; el segundo enfoca `Descubre Olimpo`. Al abrirlo, un mensaje final estable resalta `Primeros pasos` y comunica el bono inicial de S/50 por completar los tres primeros pasos. Se cierra de forma explícita con su X o al pulsar fuera del coachmark y del módulo enfocado.
- En escritorio se usa un cursor visual con transición suave hacia el objetivo; en móvil se sustituye por un indicador de tap con pulso. El fondo se atenúa y desenfoca, mientras el único objetivo accionable conserva contraste y área de interacción.
- La capa se adapta a ambos breakpoints: coachmark anclado junto al objetivo en web y como tarjeta inferior sobre la navegación móvil. Incluye foco programático, `aria-describedby`, progreso textual, bloqueo de interacción ajena y respeto por `prefers-reduced-motion`.
- El prototipo no persiste sesión, progreso de guías ni onboarding: cada recarga restablece el estado público, las cuatro tareas pendientes y el onboarding al pulsar «Iniciar sesión».

## Descubre Olimpo — onboarding progresivo

- El acceso vive dentro del drawer de perfil como `Descubre Olimpo`. Al abrirlo, el mismo drawer se transforma en un espacio dedicado de onboarding; no abre una ruta externa.
- La vista contiene un único módulo `Primeros pasos`; se retiraron las categorías independientes de Apuestas deportivas, Casino, Casino en vivo y Deportes virtuales.
- La secuencia tiene cuatro tareas dependientes y se desbloquea en este orden: `Verifica tu identidad` → `Conoce tus bonos` → `Conoce Club Olimpo` → `Realiza tu primer depósito`.
- Club Olimpo se mantiene como guía estática. KYC adopta un inicio híbrido: antes de entrar al recorrido interactivo de verificación, muestra solo dos pantallas preparatorias —tener a la mano el DNI o Carnet de Extranjería vigente y ubicarse en un espacio bien iluminado, sin filtros ni desenfoque—. El último CTA cambia a `Iniciar verificación` y abre un mockup de pantalla completa basado en capturas separadas para web y móvil, ubicadas en `prototype/assets/imgs/kyc/`. Como el flujo interno de KYC no se prototipa, el mockup permanece cuatro segundos y regresa automáticamente al Inicio con la tarea marcada localmente como completada y una confirmación breve. Completar esta simulación no equivale a completar una verificación real del producto.
- `Conoce tus bonos` abre ahora un recorrido interactivo dentro de una réplica local de `/private/mis-bonos`, con composiciones web y móvil observadas en sesión autenticada. Replica la cabecera, pestañas `Promociones`/`Mis bonos`, categorías, aviso de un bono activo, tarjeta deportiva, detalle desplegable, código promocional y billetera. Usa los iconos y banners públicos observados; la tarjeta central está identificada como `Bono de prueba` y sus condiciones son ilustrativas.
- El recorrido de Bonos tiene ocho focos: abrir `Más Información`, revisar vigencia, secciones válidas, condiciones, requisitos, activar el bono de prueba, leer la regla de un bono activo y revisar el posible efecto de retirar con requisitos pendientes. Los cuatro campos se enfocan individualmente en el detalle; el usuario debe abrirlo y pulsar `Activar` para avanzar. La activación solo cambia el estado local de la tarjeta. El resto de la interfaz conserva legibilidad con una atenuación suave (`rgba(18,18,18,.28)` y desenfoque de 1 px), mientras el objetivo activo mantiene su contorno y halo verdes. Al finalizar, `Descubre Olimpo` marca la guía como completada y desbloquea `Conoce Club Olimpo`. Los valores de conversión y cuota del bono de prueba no representan reglas universales.
- `Realiza tu primer depósito` es una guía interactiva de cuatro estados: enfoca `Deposita` en el header; resalta como una sola zona todas las alternativas de pago; permite elegir cualquiera de ellas; y deja definir el monto escribiéndolo o usando los presets `5`, `170`, `335` y `500`. Al ingresar un monto válido entre S/5 y S/500, el foco avanza al CTA `Ir a depositar`. El flujo conserva los assets públicos observados de BCP, Interbank, BBVA, PagoEfectivo, Monnet, Yape, Plin y Kashio y se adapta a web y móvil. En el prototipo, el CTA final solo completa la guía local y nunca envía dinero; en producto, el evento válido deberá ser la confirmación instrumentada del primer depósito.
- Las tareas futuras permanecen visibles hasta completar la anterior, con el mismo CTA en estado desactivado y sin exponer al usuario etiquetas técnicas como «guía estática» o «guía interactiva». La secuencia se representa como un stepper vertical: los cuatro indicadores están unidos por una línea tenue y punteada; cada tarea completada cambia al icono `Check` de Lucide, activa el siguiente indicador y pinta de verde el tramo que los conecta. El mismo icono de librería se reutiliza en los estados de éxito. El progreso global también se comunica como `n de 4 completados` y mediante cuatro segmentos discretos.
- `Primeros pasos` se integra directamente sobre el fondo del drawer, sin una card contenedora adicional; la jerarquía se resuelve con espaciado, tipografía, stepper y el divisor de la recompensa final.
- La recompensa no es una quinta tarea. Al completar los cuatro pasos se habilita `Canjea tu bono de S/50`; el beneficio se expresa como los puntos necesarios para canjear el bono dentro de la tienda de Club Olimpo.
- El CTA final abre un clon local de alta fidelidad de las tres superficies autenticadas del recorrido: `/private/club-olimpo`, el portal SSO `clubolimpo.com/OlimpoBetWeb/` y `/private/marketplace-bonos`. La implementación replica la estructura y medidas observadas, usa los banners, logos, iconos, previews y cards publicados en los CDN del producto, y conserva las composiciones responsive verificadas en web y móvil. El estado queda congelado para la presentación; no incorpora los bundles ni las APIs transaccionales de producción.
- El recorrido entrega 15,000 puntos simulados, enfoca `¡Quiero canjear!`, conduce a la categoría `Bonos`, habilita un bono de bienvenida de S/50 y termina en el modal de éxito del marketplace. Las tarjetas, el detalle y la confirmación utilizan los assets locales aprobados de `prototype/assets/imgs`; las variantes `ticket-web-*` y `ticket-mobile-*` se seleccionan con `<picture>` según el breakpoint.
- El canje de Club Olimpo es una guía interactiva de cinco acciones obligatorias. Después de pulsar `Canjear` en el marketplace, se abre el detalle completo del bono y un paso específico solicita revisar sus términos y condiciones; solo desde el CTA integrado en ese detalle se avanza al modal final de confirmación. Tanto el detalle como el modal final se encuadran como objetivos completos. Cada pantalla mantiene un coachmark, atenúa el resto de la interfaz y deja enfocado únicamente el control o superficie que continúa el viaje; puede cerrarse con la X o con Escape. Los coachmarks se posicionan a partir del rectángulo real de su objetivo y disponen de composición responsive propia para web y móvil; en la lectura móvil de términos se reservan espacios separados para el coachmark superior y el CTA del detalle.
- Ningún paso del recorrido navega, canjea puntos ni activa bonos en la cuenta real. Los 15,000 puntos, el bono S/50 y la confirmación son datos exclusivos del prototipo; los assets remotos observados se usan únicamente como referencia visual local.
- Al abrir el panel lateral, el scrim usa `rgba(18,18,18,.70)` con `backdrop-filter: blur(6px)`. Los estados mantienen verde para progreso, éxito y CTA, y se adaptan a escritorio y móvil.
- Mientras el drawer está abierto, el documento bloquea su scroll exterior y conserva únicamente el scroll interno del panel; así se evita que el gutter claro del navegador parezca un borde o `inner glow` blanco junto al lateral derecho.
- El CTA verde del depósito usa radio de 16 px; su estado desactivado aplica fondo `#B5B5B5` y texto `#4F4F4F`, mientras hover aplica fondo `#D9F6C6` y texto `#0F1F05`.
- Esos estados son compartidos por los CTA del onboarding: tareas futuras, recompensa global y navegación `Anterior` usan el tratamiento desactivado completo cuando no son accionables; los CTA activos y `Volver a ver guía` aplican en hover fondo `#D9F6C6` con texto `#0F1F05`. Todos mantienen radio de 16 px y el estado desactivado no conserva bordes verdes ni opacidad adicional.
- En KYC y Club Olimpo, `Ver guía` abre el modal interno sobre `Descubre Olimpo` desenfocado. En Bonos, abre la réplica interactiva de `Mis bonos` con coachmarks y controles propios.
- El prototipo no persiste progreso: al refrescar se restablecen las cuatro tareas y el onboarding inicial.

## Decisión aplicada

Se conserva `Descubre Olimpo` como nombre conceptual de trabajo. No se renombra hasta validar naming.

## Límites

- Los controles no navegan ni ejecutan acciones financieras o de juego.
- Los banners son recursos remotos observados en Inicio; sustituirlos antes de distribuir el prototipo fuera del entorno de diseño.
- Los iconos y las portadas usados en la réplica proceden de assets públicos observados de Olimpo; conservar únicamente los que cuenten con aprobación de uso para una entrega fuera del entorno de diseño.
- La réplica visual se está corrigiendo contra capturas y medidas de Inicio. Aún no debe declararse 1:1 hasta comparar en un navegador de escritorio real con sesión autenticada activa, incluyendo márgenes y breakpoints finales.
- El contenido de perfil es ficticio y no representa una sesión real.
- La información de Bonos, KYC y liquidación deportiva proviene de la auditoría vigente y mantiene sus límites de Legal/Compliance.

## Próximo paso

Completar comparación de escritorio autenticado —header, márgenes y carruseles—; validar con Producto, Negocio y Compliance si el valor visual de 100 Libras debe convertirse en una regla real; y continuar el cruce de componentes de Figma con la réplica.
