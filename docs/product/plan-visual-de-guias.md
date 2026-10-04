# Plan visual de las guías

## Decisión de dirección

Las guías estáticas combinarán dos medios:

- **Grabación de pantalla:** para enseñar dónde encontrar algo o qué interacción realizar.
- **Iconos animados y elementos de interfaz:** para explicar conceptos, reglas, estados y relaciones que no dependen de una ruta concreta.

Se descarta la mascota para esta primera versión. El lenguaje visual se apoyará en iconos propios de Olimpo, tarjetas de interfaz simplificadas, líneas de conexión, estados y acentos verdes. Las animaciones deben enseñar, no promocionar ni aumentar la intensidad de juego.

## Distribución por guía y paso

### Bonos

| Paso | Medio recomendado | Qué debe mostrar |
|---|---|---|
| 1. Encuentra tu bono | **Grabación de pantalla** | Perfil → Mis bonos; entrada al módulo y ubicación de bonos/jugadas gratuitas. |
| 2. Revisa sus condiciones | **Iconos animados + tarjeta UI** | Una tarjeta se abre y revela vigencia, juegos, requisitos y restricciones. |
| 3. Actívalo antes de usarlo | **Grabación de pantalla** | Selección de un bono y cambio del botón a estado activo. |
| 4. Úsalo donde corresponde | **Grabación de pantalla + señalización** | Dónde se muestran los juegos o productos aplicables según las condiciones del bono. |
| 5. Revisa antes de retirar | **Iconos animados + estado de advertencia** | Bono activo, revisión de condiciones y posible consecuencia de solicitar retiro antes de cumplirlas. No simular una operación financiera real. |

**Grabaciones necesarias:** 1, 3 y 4.

**Elementos animados necesarios:** tarjeta de condiciones, etiquetas de requisito, estado activo, conexiones con productos, alerta de revisión y estado de bono cancelado/no disponible como representación conceptual.

### KYC

| Paso | Medio recomendado | Qué debe mostrar |
|---|---|---|
| 1. Ten listo tu documento original | **Iconos animados** | Documento original que pasa a estado completo, nítido y legible. |
| 2. No uses sustitutos digitales | **Iconos animados** | Comparación entre documento original y fotografía, impresión o captura no admitida. |
| 3. Completa la verificación biométrica | **Grabación de pantalla si se mapea el flujo; si no, iconos animados** | Cámara, rostro y documento; permiso de cámara y video en vivo. |
| 4. Revisa el resultado | **Grabación de pantalla si existe la pantalla real; si no, iconos animados** | Estados pendiente, en revisión, aprobado y solicitud de información adicional. |

**Grabaciones potenciales:** 3 y 4, condicionadas a mapear el flujo autenticado real. La documentación vigente dice que la interfaz y los estados de KYC todavía están pendientes de mapear; no debemos grabar una pantalla inventada como si fuera la experiencia real.

**Elementos animados necesarios:** documento, marco de captura, cámara, rostro, coincidencia biométrica, permiso, estados de revisión, solicitud de información adicional, error/reintento y escudo de protección de cuenta.

### Validación de apuestas deportivas

| Paso | Medio recomendado | Qué debe mostrar |
|---|---|---|
| 1. Cada mercado tiene una regla | **Iconos animados** | Goles, tarjetas, asistencias y córners como mercados distintos, cada uno con su regla. |
| 2. Fuentes y reglas definidas | **Iconos animados + diagrama de fuentes** | Fuentes oficiales, datos del mercado y reglamento convergen en la regla aplicable. No mostrar un proveedor único como autoridad universal. |
| 3. El marcador en vivo orienta | **Iconos animados + línea temporal** | Marcador informativo, actualización y posterior confirmación de la liquidación. |
| 4. Algunos hechos pueden cambiar | **Iconos animados** | Gol anulado, revisión de VAR y asistencia no reconocida como eventos que pueden afectar la validación según la regla. |
| 5. Revisa tu caso | **Grabación de pantalla** | Historial → detalle de jugada → mercado, regla aplicada, resultado y ayuda. |

**Grabación necesaria:** 5.

**Grabación opcional:** 3, solo si se quiere enseñar una ruta real de consulta del marcador o del detalle. Para la guía estática, la línea temporal animada es más clara y menos dependiente de una interfaz cambiante.

**Elementos animados necesarios:** balón, tarjeta amarilla, tarjeta roja, córner, silbato o señal de resultado, documento/reglamento, fuente oficial, dato de mercado, marcador en vivo, reloj, flecha de actualización, VAR, gol anulado, asistencia, historial, detalle de jugada y centro de ayuda.

## Inventario consolidado de iconos

### Iconos de Bonos

- Ticket o bono.
- Carpeta o sección `Mis bonos`.
- Lupa.
- Documento de condiciones.
- Calendario para vigencia.
- Juego válido / producto aplicable.
- Lista de requisitos.
- Restricción o condición especial.
- Botón `Activar` y estado activo.
- Casino.
- Casino en vivo.
- Deportes virtuales.
- Retiro / flecha de salida.
- Advertencia.
- Bono cancelado o no disponible.

### Iconos de KYC

- DNI.
- Carnet de Extranjería.
- Documento completo.
- Documento nítido / enfoque.
- Documento ilegible.
- Fotografía.
- Impresión.
- Captura de pantalla.
- Cámara.
- Permiso de cámara.
- Rostro / biometría.
- Coincidencia entre rostro y documento.
- Video en vivo.
- Escudo de protección.
- Pendiente.
- En revisión.
- Aprobado.
- Información adicional.
- Error y reintento.

### Iconos de validación deportiva

- Balón / gol.
- Tarjeta amarilla.
- Tarjeta roja.
- Córner.
- Asistencia.
- Fuente oficial.
- Documento de reglamento.
- Dato estadístico.
- Regla aplicable.
- Marcador en vivo.
- Reloj / actualización.
- Confirmación de resultado.
- VAR.
- Gol anulado.
- Historial.
- Detalle de jugada.
- Centro de ayuda.

### Elementos transversales

- Check circular.
- Estado pendiente.
- Estado completado.
- Línea de conexión.
- Flecha de recorrido.
- Cursor o puntero.
- Click / tap.
- Zoom de foco.
- Tarjeta de interfaz simplificada.
- Tooltip o etiqueta de explicación.
- Contenedor de alerta.
- Fondo oscuro y acento verde de Olimpo.

## Criterios para grabar pantalla

Grabar solo cuando se cumplan estas condiciones:

- La ruta está confirmada en la interfaz real.
- El paso requiere saber dónde hacer clic o qué pantalla consultar.
- La interfaz no contiene datos personales, saldos reales ni información sensible.
- La grabación puede mantenerse vigente o se acepta que deberá actualizarse cuando cambie la interfaz.

Si la ruta no está confirmada, usar iconos y una tarjeta de interfaz conceptual claramente presentada como explicación, no como captura real del producto.

## Criterios de animación

- Una idea visual dominante por paso.
- Duración corta y repetible en loop.
- Movimiento de entrada, foco, explicación y cierre; sin exceso de efectos.
- Verde para acción/confirmación, gris para información secundaria y amarillo/rojo solo para advertencias necesarias.
- No usar monedas, premios o confeti como foco visual en estos pasos.
- No mostrar una apuesta como logro ni asociar visualmente una acción de juego con una recompensa.

## Formato de producción recomendado

- **Lottie:** iconos, estados, diagramas y microinteracciones vectoriales.
- **MP4/WebM:** grabaciones de pantalla con zoom, cursor y transiciones.
- **GIF:** solo para una primera prueba o cuando el contenedor no acepte video; no es el formato ideal para calidad y peso.

## Dependencias pendientes

- Mapear y aprobar las rutas reales de Bonos, KYC e Historial.
- Confirmar la interfaz exacta de estados KYC.
- Validar el contenido de reglas deportivas con Compliance antes de animar afirmaciones definitivas.
- Definir el generador de iconos y sus reglas de exportación para mantener consistencia.
