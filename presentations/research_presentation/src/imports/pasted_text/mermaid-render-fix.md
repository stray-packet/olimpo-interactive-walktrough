Corrige ÚNICAMENTE el problema de renderizado del Mermaid de la slide 05
“Un ecosistema, tres propósitos”.

NO rediseñes la slide.
NO reemplaces Mermaid por shapes manuales.
NO cambies el contenido del diagrama.
NO cambies la estructura conceptual.
NO elimines nodos.
NO simplifiques información.

El problema actual es TÉCNICO:

El SVG generado por Mermaid tiene una altura mayor que el área disponible y está siendo RECORTADO por su contenedor. Por eso las tres cajas inferiores aparecen cortadas por abajo.

Debes corregir específicamente el sistema de renderizado / escalado responsive del Mermaid para garantizar que el SVG completo siempre quepa dentro del área disponible de la slide 16:9.

==================================================
PROBLEMA A RESOLVER
==================================================

Actualmente ocurre algo equivalente a:

- Mermaid calcula su tamaño natural.
- El SVG tiene dimensiones mayores que el contenedor.
- El contenedor tiene altura limitada.
- El contenido excedente queda oculto / recortado.
- Las partes inferiores de los nodos desaparecen.

NO debes resolver esto reduciendo manualmente texto o eliminando información.

Debes hacer que el SVG completo se escale proporcionalmente para entrar dentro del espacio disponible.

==================================================
IMPLEMENTACIÓN OBLIGATORIA
==================================================

Después de renderizar Mermaid:

1. Eliminar cualquier width y height rígidos generados por Mermaid.

2. Conservar obligatoriamente el viewBox original del SVG.

3. Aplicar:

preserveAspectRatio="xMidYMid meet"

4. El SVG debe utilizar:

width: 100%;
height: 100%;
max-width: 100%;
max-height: 100%;
display: block;

5. El contenedor del Mermaid debe tener dimensiones explícitas correspondientes al área realmente disponible de la slide.

Ejemplo conceptual:

.mermaid-container {
  width: 100%;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.mermaid-container svg {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  display: block;
}

El valor exacto de height puede ajustarse según el espacio real de la slide, pero debe calcularse para que el diagrama completo entre entre el título superior y el texto inferior.

==================================================
IMPORTANTE: NO USAR SOLO WIDTH: 100%
==================================================

No aplicar únicamente:

width: 100%;
height: auto;

porque eso puede hacer que el diagrama siga excediendo verticalmente el área disponible.

El SVG debe ajustarse simultáneamente al ANCHO y al ALTO disponibles mediante:

width: 100%;
height: 100%;
preserveAspectRatio="xMidYMid meet"

De esta manera el navegador debe escalar el diagrama completo proporcionalmente hasta que entre dentro de ambos límites.

==================================================
CONFIGURACIÓN MERMAID
==================================================

Mantener Mermaid con:

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: "basis"
  }
});

Si useMaxWidth está desactivado, activarlo.

No establecer un ancho o alto fijo dentro de Mermaid que entre en conflicto con el contenedor.

==================================================
POSTPROCESADO DEL SVG
==================================================

Después de:

mermaid.render(...)

y después de insertar el SVG en el DOM:

obtener el elemento svg y aplicar explícitamente:

svg.removeAttribute("width");
svg.removeAttribute("height");

svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

svg.style.width = "100%";
svg.style.height = "100%";
svg.style.maxWidth = "100%";
svg.style.maxHeight = "100%";
svg.style.display = "block";

IMPORTANTE:

No eliminar ni sobrescribir el atributo viewBox generado por Mermaid.

El viewBox es necesario para que preserveAspectRatio pueda escalar correctamente el contenido completo.

==================================================
VERIFICAR CONTENEDORES PADRE
==================================================

Revisar TODOS los wrappers padres del Mermaid.

Ninguno debe provocar clipping accidental.

Buscar y corregir propiedades como:

overflow: hidden;
overflow-y: hidden;
max-height demasiado pequeño;
height rígido incorrecto;
position absolute con límites incorrectos;
transform: scale(...) combinado con clipping.

Especialmente verificar cualquier wrapper de la slide que tenga:

overflow-hidden

Si el Mermaid vive dentro de un contenedor con overflow-hidden, asegurarse primero de que el SVG completo sea escalado para entrar dentro de sus dimensiones.

El objetivo NO es simplemente cambiar overflow a visible y dejar que el contenido salga de la slide.

El objetivo es:

TODO EL DIAGRAMA DENTRO DEL VIEWPORT.

==================================================
AJUSTE AUTOMÁTICO AL ÁREA DISPONIBLE
==================================================

La slide es 16:9.

El diagrama debe calcular su área entre:

- final del título;
- inicio del texto inferior;
- navegación inferior.

Debe escalarse para entrar íntegramente en ese rectángulo.

No permitir:

- contenido fuera de la slide;
- cajas cortadas;
- texto cortado;
- flechas cortadas;
- nodos parcialmente visibles.

El Mermaid completo debe ser visible simultáneamente.

==================================================
NO CAMBIAR EL MERMAID
==================================================

Mantener el contenido actual:

OLIMPO

MISIONES
- Desafío promocional
- Condiciones
- Expira
- Recompensa protagonista

RACHAS
- Continuidad
- Repetición
- Puede romperse
- Constancia protagonista

DESCUBRE OLIMPO
- Descubrimiento
- Aprendizaje
- Progreso permanente
- Autonomía como resultado

NO eliminar ninguna línea para solucionar el clipping.

==================================================
PRIORIDAD DE ESCALADO
==================================================

Orden de prioridad:

1. Todo el Mermaid debe quedar visible.
2. Ningún nodo puede quedar cortado.
3. Mantener proporciones del SVG.
4. Maximizar el tamaño dentro del espacio disponible.
5. Mantener legibilidad.
6. Mantener centrado el diagrama.

Una vez que el SVG completo entra correctamente, utilizar el mayor tamaño posible sin generar clipping.

==================================================
VALIDACIÓN OBLIGATORIA
==================================================

Antes de dar la tarea por terminada, verificar visualmente:

- se ve completo el borde inferior de MISIONES;
- se ve completo el borde inferior de RACHAS;
- se ve completo el borde inferior de DESCUBRE OLIMPO;
- se ve todo el último renglón de texto de cada nodo;
- ninguna flecha queda cortada;
- el texto inferior de la slide sigue visible;
- la navegación inferior sigue visible;
- nada sale del viewport 16:9.

Si cualquiera de estos elementos queda cortado, la implementación NO está terminada.

==================================================
REGLA FINAL
==================================================

NO intentes solucionar el problema rediseñando el diagrama.

El problema es de FIT / SCALE / VIEWBOX / CONTAINER del SVG generado por Mermaid.

Soluciónalo haciendo que el SVG completo se adapte proporcionalmente al rectángulo disponible utilizando:

viewBox intacto
+
preserveAspectRatio="xMidYMid meet"
+
width:100%
+
height:100%
+
contenedor con dimensiones correctas.

El resultado final debe mostrar el Mermaid COMPLETO, centrado y sin ningún contenido cortado.