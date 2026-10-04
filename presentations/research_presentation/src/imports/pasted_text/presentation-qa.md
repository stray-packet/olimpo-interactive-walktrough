Actúa como Senior Product Designer, UX Research Lead y Presentation Designer.

Ya existe una presentación final de 11 slides.

NO debes reconstruirla desde cero.
NO debes cambiar la estructura narrativa.
NO debes agregar nuevas slides.
NO debes eliminar slides.

Tu tarea es realizar únicamente una última pasada de QA visual, consistencia, legibilidad y rigor metodológico.

El objetivo es cerrar la presentación al 100%, corrigiendo únicamente los puntos indicados a continuación.

Mantener:
- tipografía Manrope;
- fondo verde oscuro;
- color verde principal #9EE86E;
- amarillo #FFCC00;
- crema #F7F3E8;
- navegación inferior;
- estructura 16:9;
- estilo premium y minimalista;
- iconografía Lucide;
- motion actual;
- radios;
- espaciado;
- ritmo visual;
- contenido general;
- orden de slides.

==================================================
1. SLIDE 01 — PORTADA
==================================================

Eliminar únicamente el label:

PORTADA

de la esquina superior izquierda.

No sustituirlo por otro texto.

La portada debe quedar limpia.

Mantener:
- título;
- supporting;
- gráfica de nodos;
- navegación;
- composición.

==================================================
2. SLIDE 02 — CAMBIAR “HALLAZGO”
==================================================

Actualmente aparece:

HALLAZGO

Cambiar por:

PROBLEMA

No modificar el resto de la slide.

Mantener:

El problema no es enseñar todo

y las tres categorías:

DESCUBRIMIENTO
COMPRENSIÓN
EJECUCIÓN

==================================================
3. SLIDE 03 — AUMENTAR LEGIBILIDAD DE FUENTE
==================================================

Mantener todo el contenido actual.

Aumentar ligeramente el contraste y legibilidad de la fuente inferior:

Fuente: Nielsen Norman Group — Onboarding Tutorials vs. Contextual Help.

No hacerla protagonista.

Debe seguir siendo secundaria, pero legible en proyector.

Aumentar aproximadamente:
- 10–15% la luminancia;
- si es necesario, 1 px el tamaño tipográfico.

No cambiar la posición.

==================================================
4. LABELS INTERNOS — EVITAR REPETICIÓN DE CAPÍTULO
==================================================

El indicador superior ya comunica el capítulo:

01 / INVESTIGACIÓN
02 / OPORTUNIDAD
03 / SOLUCIÓN
04 / FUNCIONAMIENTO
05 / PRINCIPIOS

Por tanto, NO repetir exactamente el capítulo como label interno.

Aplicar estos labels semánticos:

SLIDE 02:
PROBLEMA

SLIDE 03:
PRINCIPIO

SLIDE 04:
CAMBIO DE ENFOQUE

SLIDE 05:
MAPA DEL ECOSISTEMA

SLIDE 06:
PRINCIPIO CENTRAL

SLIDE 07:
PRIMER INGRESO

SLIDE 08:
PROPUESTA CONCEPTUAL

SLIDE 09:
MODELO DE FINALIZACIÓN

SLIDE 10:
REGLA DE PROGRESO

SLIDE 11:
CIERRE

No modificar el indicador superior de capítulo.

==================================================
5. SLIDE 05 — CORREGIR MERMAID CORTADO
==================================================

La slide:

Un ecosistema, tres propósitos

tiene actualmente un Mermaid cuyas ramas continúan verticalmente fuera del área visible.

Esto debe corregirse.

NO dejar líneas cortadas.
NO permitir contenido fuera del viewport.
NO reducir el diagrama hasta hacerlo ilegible.

Condensar cada sistema en una única columna descriptiva compacta.

La estructura debe quedar aproximadamente así:

                         OLIMPO
              ┌────────────┼────────────┐
              │            │            │
              ↓            ↓            ↓

          MISIONES       RACHAS     DESCUBRE OLIMPO

          Desafío        Continuidad     Descubrimiento
          promocional    Repetición      Aprendizaje
          Condiciones    Puede romperse  Progreso permanente
          Expira         Constancia      Autonomía
          Recompensa

Mantener Mermaid.

Utilizar una versión más compacta como esta:

%%{init: {
  "theme": "base",
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 45,
    "rankSpacing": 55
  },
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%

flowchart TB

    O["OLIMPO"]

    O --> M
    O --> R
    O --> D

    M["MISIONES<br/><br/>Desafío promocional<br/>Condiciones<br/>Expira<br/>Recompensa protagonista"]

    R["RACHAS<br/><br/>Continuidad<br/>Repetición<br/>Puede romperse<br/>Constancia protagonista"]

    D["DESCUBRE OLIMPO<br/><br/>Descubrimiento<br/>Aprendizaje<br/>Progreso permanente<br/>Autonomía como resultado"]

    classDef principal fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef misiones fill:#F7F3E8,stroke:#FFFFFF,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef rachas fill:#1D3327,stroke:#9EE86E,stroke-width:2px,color:#F7F5ED,font-weight:bold;

    classDef descubre fill:#9EE86E,stroke:#C6F5A7,stroke-width:3px,color:#17382E,font-weight:bold;

    class O principal;
    class M misiones;
    class R rachas;
    class D descubre;

El Mermaid debe:
- ocupar correctamente el área disponible;
- verse completo;
- ser legible;
- mantener la relación Olimpo → tres sistemas;
- no mostrar ramas cortadas.

Mantener el texto inferior:

Cada sistema responde a una función diferente dentro de la experiencia.

Mantener:

Descubre Olimpo — nombre conceptual de trabajo

==================================================
6. SLIDE 08 — MARCAR COMO EJEMPLO CONCEPTUAL
==================================================

La slide muestra una representación visual de Descubre Olimpo.

Agregar discretamente un label:

EJEMPLO CONCEPTUAL

o:

ESTRUCTURA CONCEPTUAL

Preferencia:

EJEMPLO CONCEPTUAL

Debe ubicarse cerca del mockup o encima del contenedor.

Usar tipografía pequeña y secundaria.

El objetivo es dejar claro que:
- no es diseño final;
- no es UI aprobada;
- representa una posible estructura del producto.

No alterar el mockup.

==================================================
7. SLIDE 09 — MEJORAR LEGIBILIDAD DEL MERMAID
==================================================

La slide:

Dos caminos. Una misma fuente de verdad.

debe mantener su estructura actual.

NO cambiar la lógica.

Mejorar únicamente legibilidad.

Aumentar aproximadamente entre 10% y 15% el tamaño general del Mermaid.

Priorizar:
- labels;
- nodos;
- textos dentro de cajas;
- decisión;
- APUESTA REALIZADA;
- OBJETIVO COMPLETADO.

Reducir ligeramente espacios vacíos alrededor si fuera necesario.

El Mermaid debe poder leerse desde una pantalla proyectada.

==================================================
8. SLIDE 09 — CORREGIR “SÍ / NO”
==================================================

Los labels “Sí” y “No” de las bifurcaciones no deben utilizar colores rosados, violetas ni ajenos a la paleta.

Utilizar únicamente:

#F7F3E8

o:

#9EE86E

Preferencia:

Texto #F7F3E8 sobre fondo transparente.

Mantener:
- Sí;
- No;

pero integrados visualmente a la paleta.

No añadir cajas de color innecesarias.

==================================================
9. SLIDE 09 — SIMPLIFICAR COPY SECUNDARIO
==================================================

Cambiar:

Ejemplo de comprensión del flujo — no como incentivo a realizar actividad de juego.

por:

Ejemplo para explicar el flujo, no para incentivar actividad de juego.

Mantener significado.

No modificar el diagrama.

==================================================
10. SLIDE 10 — HACER MÁS CLARA LA COMPARACIÓN
==================================================

La slide:

Si ya sabe hacerlo, Olimpo debería saberlo

debe comunicar más claramente la diferencia entre el estado incorrecto y el correcto.

Agregar labels pequeños encima de los dos estados:

ESTADO INCORRECTO

sobre:

Realiza tu primera acción

y:

ESTADO CORRECTO

sobre:

Ya conoces esta funcionalidad

No utilizar rojo.

ESTADO INCORRECTO:
- texto muted;
- color #B8C8BF o similar;
- aspecto neutro.

ESTADO CORRECTO:
- verde #9EE86E;
- mayor jerarquía.

No cambiar la estructura general.

Mantener:
- se convierte en;
- lógica de completado;
- elegibilidad de recompensa;
- sin recompensa retroactiva.

==================================================
11. SLIDE 11 — CAMBIAR “SABER HACERLO”
==================================================

En la secuencia inferior:

Descubrir
→ Aprender
→ Saber hacerlo
→ Recibir recompensa

Cambiar:

Saber hacerlo

por:

Hacer con autonomía

La nueva secuencia debe ser:

Descubrir
→ Aprender
→ Hacer con autonomía
→ Recibir recompensa

Mantener todo el resto de la slide.

==================================================
12. SLIDE 11 — MEJORAR LEGIBILIDAD DE PRINCIPIOS
==================================================

Las cinco cards de principios deben seguir siendo compactas.

Aumentar ligeramente:
- título de cada principio;
- supporting de cada principio.

Aproximadamente 5–10%.

Si es necesario:
- reducir un poco el gap horizontal entre cards;
- no reducir márgenes externos;
- no hacer las cards más altas de forma excesiva.

El objetivo es mejorar lectura en presentación.

==================================================
13. CONTRASTE GENERAL PARA PROYECCIÓN
==================================================

Realizar una pasada global sobre las 11 slides.

Aumentar aproximadamente 10–15% la visibilidad de:
- textos secundarios;
- labels pequeños;
- notas;
- bordes sutiles;
- iconos secundarios.

No modificar:
- títulos grandes;
- fondo;
- identidad oscura;
- jerarquía principal.

La presentación debe seguir siendo sobria y premium.

No convertir secundarios en blanco puro.

==================================================
14. SEMÁNTICA DE COLOR FINAL
==================================================

Mantener consistentemente:

VERDE #9EE86E

Para:
- aprendizaje;
- progreso;
- acción;
- autonomía;
- Descubre Olimpo;
- estados positivos;
- elementos activos.

AMARILLO #FFCC00

Para:
- énfasis secundario;
- Olimpo;
- resultado;
- recompensa;
- hitos;
- highlights puntuales.

CREMA #F7F3E8

Para:
- contenido neutro;
- nodos autónomos;
- superficies claras;
- texto principal cuando aplique.

VERDE OSCURO

Para:
- fondos;
- cards;
- superficies;
- estados secundarios.

NO introducir:
- celeste;
- azul;
- violeta;
- rosa;
- rojo;
- naranja.

==================================================
15. UI DEL ENTORNO
==================================================

La presentación final no debe mostrar UI externa que no forme parte del deck.

Asegurarse de que en modo presentación no aparezca:
- botón de ayuda “?”;
- controles propios de Figma Make;
- bordes del editor;
- scrollbars innecesarios;
- elementos de debugging.

Solo debe verse:
- contenido;
- navegación;
- contador de slides;
- barra de progreso si pertenece al diseño.

==================================================
16. NO CAMBIAR ESTRUCTURA
==================================================

No:
- agregar slides;
- eliminar slides;
- cambiar orden;
- cambiar títulos principales;
- rehacer layouts que ya funcionan;
- añadir gráficos;
- añadir métricas;
- añadir nuevos conceptos;
- añadir más contenido de Research.

Esta es una pasada final de QA.

==================================================
RESULTADO FINAL ESPERADO
==================================================

Después de esta corrección, la presentación debe quedar lista para exposición.

Debe sentirse:
- cerrada;
- consistente;
- legible;
- rigurosa;
- premium;
- estratégica;
- fácil de presentar;
- sin redundancias;
- sin elementos visuales accidentales.

La estructura final debe permanecer en 11 slides.

El mensaje rector debe seguir siendo:

El objetivo no es que el usuario complete guías.
El objetivo es que aprenda a utilizar Olimpo con autonomía.

No realizar más cambios estructurales después de esta pasada.