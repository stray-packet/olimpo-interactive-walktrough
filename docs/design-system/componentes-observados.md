# Componentes observados

## Navegación y estructura

| Componente | Variante observada | Uso recomendado en guía |
| --- | --- | --- |
| Cabecera global | Fondo `#19572C`, logo blanco, navegación horizontal, estado activo con subrayado verde claro | La guía debe respetar la cabecera existente; no competir con ella. |
| Navegación inferior móvil | Fondo `#0D2B16`, fija, 76 px, pestañas con icono y texto | Considerar su altura al anclar tooltip, sheet o CTA móvil. |
| Footer institucional | Medios de pago, enlaces regulatorios, juego responsable | Fuera del flujo de guía; útil como referencia de tono institucional. |
| Carrusel | Flechas, puntos y tarjetas horizontales | Patrón para descubrimiento opcional, no para obligar a completar pasos. |

## Acciones y controles

| Componente | Base | Estado observado |
| --- | --- | --- |
| Botón primario | Fondo `#9EE86E`, texto oscuro, radio 12 px | Hover aclara a `#D9F6C6`. En Casino: “Jugar”; en Ayuda: “Chatea con un asesor”. |
| Botón secundario | Transparente, texto/borde verde claro, radio 12 px | Hover usa verde de acción, contorno actualizado y velo verde translúcido. |
| Botón de depósito | Primario compacto, 90 × 32 px en cabecera | No reutilizar como CTA de guía: representa una acción financiera. |
| Píldora / filtro | Fondo claro verde; variante activa en verde claro | Casino usa categorías y búsqueda como bloque de filtros. |
| Paginación | Página activa verde `#3CC666`; inactiva blanca; radio 8 px | Útil para tablas o pasos discretos, no como sustituto del progreso real. |
| Campo de búsqueda | Fondo transparente oscuro, icono inicial, borde claro | Ayuda lo usa como vía principal; buen patrón para búsqueda de artículos, no para guía contextual. |

## Tarjetas y contenido

| Componente | Rasgos | Caso de uso observado |
| --- | --- | --- |
| Tarjeta de evento deportivo | Fondo visual deportivo, etiqueta de liga, equipos, hora y cuotas | Información densa y accionable. Para la guía, solo puede ser elemento de contexto, nunca simular una apuesta. |
| Tarjeta de juego | Imagen dominante, favorito, badge “Nuevo”/“Exclusivo” y CTA revelado en hover | Catálogo visual de Casino. |
| Tarjeta de categoría de Ayuda | Contenido temático, FAQs y enlace “Ver más” | Referencia directa para una guía estática o hub de conocimiento. |
| Tarjeta de soporte / contacto | Icono, canal y disponibilidad | Útil como escape de la guía: “¿Necesitas ayuda?” |
| Panel de torneo | Hero, contador, CTA, navegación por anclas | Patrón para explicar mecánica por secciones, con uso moderado de urgencia. |
| Tabla de clasificación y premios | Encabezado verde, filas alternadas oscuras, premios destacados con metal | Referencia para reglas y transparencia de progreso/recompensa; no usar si no hay premio aprobado. |
| Modal de campaña | Gradiente oscuro, borde translúcido, radio 20 px | Solo para anuncios expresamente convocados; la guía base debe evitar interrumpir. |

## Badges, estados y microinteracciones

- Insignias de contenido: “Nuevo”, “Exclusivo” y categorías usan el verde de acción como señal de novedad o clasificación.
- Favorito: icono de estrella con estado activo/inactivo.
- Notificación: badge rojo compacto y toast oscuro flotante.
- Carga/selección: puntos de carrusel y tab activa.
- Juego en vivo: información temporal y cuotas deshabilitadas cuando no están disponibles.

## Componentes validados desde Figma

Estas referencias entregadas por el equipo tienen prioridad sobre la interpretación hecha desde el sitio público.

### Modal de invitación a polla privada

- Contenedor de `340 px`; layout vertical, alineado al centro y contenido hacia el final.
- Padding: `40 px 24 px 24 px`; gap de `32 px`; radio `12 px`.
- Superficie: `linear-gradient(180deg, rgba(15,31,5,0) 0%, rgba(37,75,12,.25) 100%)` sobre fondo oscuro.
- Ilustración celebratoria que sobresale por la parte superior; no debe quedar recortada.
- Cierre circular en esquina superior derecha, acciones duales al final: secundaria contorneada y primaria verde claro.
- Código de invitación en tipografía de gran escala y verde suave. Es un dato central, no un título.

### Tarjeta de combinada

- Fondo oscuro con gradiente verde profundo, borde verde muy sutil y radio amplio.
- Jerarquía: categoría pequeña morada, encabezado de partido, divisor, lista de selecciones y pie de cuota/CTA.
- La lista usa una línea vertical verde con nodos circulares: completado/activo en verde claro; pendiente en verde apagado y texto atenuado.
- Nombre de jugador y valor de mercado usan verde claro y peso alto; descriptor permanece en blanco/gris claro para facilitar lectura.
- Pie separado por línea discontinua verde; cuota muy visible y CTA “Agregar” en verde claro.

Estas dos piezas confirman que el lenguaje de producto combina superficies oscuras de alto contraste, acento verde claro y elementos ilustrativos de celebración, sin recurrir a sombras pesadas externas.

## Implicaciones para las guías

1. El patrón más compatible con una guía estática es **tarjeta de Ayuda + búsqueda + FAQ**, no un modal promocional.
2. Para la guía dinámica, el patrón adecuado es **superficie oscura contextual con CTA verde claro**, cercana a los paneles de torneo, pero con copy de aprendizaje y salida visible.
3. Toda guía debe tener cierre explícito, reingreso opcional y no bloquear depósito, retiro, autoexclusión ni controles de juego responsable.
