# Responsive observado: web y móvil

Esta matriz distingue observación de escritorio de reglas responsive cargadas por el sitio. No reemplaza una revisión visual final en dispositivos reales ni la especificación de Figma.

| Área | Web | Móvil / breakpoint observado | Implicación para la guía |
| --- | --- | --- | --- |
| Cabecera | Navegación textual completa y acciones de cuenta | A `≤1150 px` se ocultan los enlaces de menú; a `≤768 px` el padding baja a 16 px | No fijar tooltip a una posición de menú que desaparece. |
| Navegación móvil | No visible en escritorio | Barra inferior fija, 76 px, fondo `#0D2B16`, tabs con mínimo 80 px y scroll horizontal | Reservar al menos 76 px de safe area inferior para CTAs y sheets. |
| Carruseles | Flechas y CTA “Ver más” visibles | En varias secciones las flechas se ocultan a `≤1024 px`; se conserva exploración horizontal | No depender de flechas como única forma de avanzar. |
| Tarjetas de eventos | Tarjetas amplias y datos en una línea | A `≤767 px`, tarjeta de “Eventos de la semana” pasa a 168 × 176 px y el fondo cambia a asset móvil; logos y texto se reducen | Las anotaciones deben ser cortas y apuntar a áreas grandes, no a texto fino. |
| Información deportiva | Títulos y nombres con ellipsis | A `≤767 px`, títulos pasan a múltiples líneas; puntajes y equipos reducen ancho y tamaño | Evitar hotspots sobre nombres de equipos o mercados largos. |
| Ayuda | Categorías en grilla/filas con ancho de contenido | A `≤900 px`, enlaces de categoría ocupan `calc(100% - 40px)` y las tarjetas pasan a ancho completo | La guía estática puede ser una secuencia vertical de tarjetas; no exigir grilla. |
| Paneles de contenido | SEO/tarjetas oscuras con padding mayor | Desde `≥769 px` crecen padding, tipografía y halos; por debajo se usa lectura más compacta | Definir tokens de guía por modo: compacto móvil y cómodo web. |
| Tablas y pagos | Columnas y pasos horizontales | En `≤640 px`, las rejillas se apilan y los separadores pasan a horizontales | Para reglas, priorizar acordeón, tarjetas o tabla desplazable; no tabla ancha fija. |
| Popup / modal | Puede usar padding amplio y composición lateral | En torno a 760 px se vuelve ancho completo menos márgenes y centra contenido | Si se usa sheet/modal, ancho máximo móvil `calc(100% - 20px)`, cierre visible y CTA full width. |

## Breakpoints a conservar como hipótesis de trabajo

- `≥1151 px`: navegación completa de escritorio.
- `769–1150 px`: cabecera compacta y navegación primaria reducida.
- `≤768 px`: modo móvil general, padding lateral 16 px en cabecera.
- `≤640 px`: formularios, pasos y bloques informativos a una columna.

## Diferencias que deben comprobarse contra Figma

- Menú exacto y jerarquía de acciones para usuario autenticado versus visitante.
- Tamaños finales de tipografía móvil para títulos de guía.
- Comportamiento de hover en táctil: el sitio neutraliza o sustituye algunos estados hover; la guía necesita estados pressed/focus explícitos.
- Safe areas de iOS/Android y convivencia con chat flotante/notificaciones.
