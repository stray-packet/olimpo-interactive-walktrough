# Tokens observados

Valores extraídos de estilos activos del sitio. Se conservan como referencia visual hasta validar equivalencias de Figma.

## Color

| Rol | Token / valor observado | Uso visible |
| --- | --- | --- |
| Fondo claro de aplicación | `#F6F8F7` | Base de páginas generales. |
| Fondo oscuro base | `#121212` | Casino, módulos de contenido y filas oscuras. |
| Fondo oscuro alterno | `#1C1C1C` | Superficies elevadas oscuras. |
| Verde marca oscuro | `#19572C` | Cabecera web fija. |
| Verde marca profundo | `#0D2B16` | Fondos, navegación móvil y gradientes oscuros. |
| Verde primario | `#3CC666` | Acción activa, links, borde hover y paginación. |
| Verde de acción claro | `#9EE86E` | CTA principal, títulos de Ayuda, cuotas y chips activos. |
| Verde de soporte | `#65CE21` | Borde/acento y detalles deportivos. |
| Verde suave | `#D9F6C6` | Texto claro sobre oscuro y hover suave. |
| Blanco | `#FFFFFF` / `#F9FAFB` | Texto inverso y superficies claras. |
| Gris claro | `#E8E8E8` / `#F5F5F5` | Neutros y superficies. |
| Gris medio | `#B5B5B5` / `#828282` | Iconografía, controles secundarios y texto de apoyo. |
| Gris oscuro | `#4F4F4F` / `#363636` | Bordes y niveles oscuros. |
| Amarillo Club | `#FFCC00` | Club Olimpo y premios especiales. |
| Amarillo soporte | `#F8F538` | Acento secundario heredado. |
| Error | `#B71F1F` / `#FF3747` | Insignia de notificación y error. |
| Éxito | `#26A36F` | Estado exitoso. |
| Advertencia | `#DB9200` | Estado de advertencia. |

## Tipografía

| Nivel | Valor observado | Uso |
| --- | --- | --- |
| Familia | `Olimpo` (alias local de `GT Walsheim Regular` y `GT Walsheim Bold`) | La hoja pública del sitio declara los archivos `GT-WALSHEIM-REGULAR_NEW.ttf` y `GT-WALSHEIM-BOLD_NEW.ttf` bajo la familia global `principal`. |
| Fuente de prototipo | `prototype/assets/fonts/GT-Walsheim-{Regular,Medium,Bold}.ttf` | Copias locales de la instalación de Windows; usar esta ruta en el prototipo para que GT Walsheim no dependa de CORS o conectividad. |
| Texto base | 16 px / 24 px / 400 | Lectura general. |
| Etiqueta pequeña | 14 px / 20 px | Navegación, campos y apoyo. |
| Microetiqueta | 12 px | Solo insignias o detalle compacto; evitarla para navegación, contenido y acciones. |
| Título de sección | 32 px / 700 | Secciones de Inicio, Casino y Ayuda. |
| Título de apoyo | 20 px / 700 | Contenido SEO, tabla y títulos secundarios. |
| Hero promocional | hasta 38 px / 900 | Uso editorial o de campaña; no adoptar para guía salvo validación. |

## Espaciado y forma

| Elemento | Valor observado |
| --- | --- |
| Escala base | 4, 8, 12, 16, 24, 32, 40, 64, 120 px. |
| Radio compacto | 8 px. |
| Radio estándar de acción | 12 px. |
| Radio de panel | 16 px. |
| Radio de modal | 20–24 px. |
| Radio de píldora | 9999 px / 48–51 px. |
| Padding de CTA principal | 10–12 px vertical; 16–64 px horizontal según contexto. |

## Elevación y contorno

| Patrón | Valor observado | Uso |
| --- | --- | --- |
| Tarjeta oscura editorial | Borde `0.5px #1A300C`, inset `-6px 6px 18px rgba(28,53,12,.64)` | Bloques de contenido Casino. |
| Panel informativo | `0 20px 24px -4px rgba(14,24,41,.08)` | Secciones de torneo. |
| Tarjeta de premio | `0 10px 15px -3px rgba(0,0,0,.10)` | Jerarquía de premios. |
| Hover de tarjeta Ayuda | Borde `#3CC666`, fondo `#EFFDF4`, sombra dura `4px 4px 0 rgba(0,0,0,.25)` | Estado interactivo claro. |
| Botón secundario | Contorno inset de 1.5 px en verde claro | CTA secundaria sobre fondos oscuros. |

## Gradientes y fondos

- Fondo oscuro de campaña: radial desde `#254B0C` a `#0F1F05`; se usa en el control flotante “Subir”.
- Superficie Casino/bonos: `linear-gradient(#0F1F05, #000)` con borde blanco al 20 % para modal o tarjeta de categoría.
- Fondo editorial SEO: base `#121212` con halos verdes difuminados (`#0D2B16` a `#3CC666`).
- Premios: capas radiales translúcidas sobre oro `#EDC421`, plata `#9D9D9D` o bronce/naranja `#FF8D00`.

Para la guía, estos gradientes deben reservarse para hitos, resumen o celebración moderada. No convertir cada paso en una pieza promocional.
