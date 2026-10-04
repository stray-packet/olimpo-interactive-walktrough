Actúa como Senior Product Designer, UX Research Lead y Presentation Designer.

Ya existe una presentación creada.
NO debes reconstruirla desde cero.

Tu tarea es realizar una segunda pasada de corrección, consistencia visual, rigor metodológico y alineamiento con el Design System real del proyecto.

Debes mantener:
- estructura general;
- composición;
- tipografía Manrope;
- fondo verde oscuro;
- lenguaje editorial;
- navegación;
- espaciado;
- ritmo visual;
- cards de 25 px;
- identidad premium y minimalista.

Debes modificar únicamente lo indicado a continuación.

==================================================
1. CORRECCIÓN CRÍTICA DE PALETA
==================================================

La presentación actual utiliza un tono celeste / menta aproximadamente similar a:

#8FE3CF

Este color NO pertenece a la paleta del proyecto.

Debe eliminarse completamente de:
- textos;
- iconos;
- pills;
- botones;
- bordes;
- diagramas;
- barras de progreso;
- highlights;
- checkmarks;
- elementos de navegación;
- estados positivos;
- gráficos;
- cualquier otra instancia.

NUEVO VERDE PRINCIPAL DE CONTRASTE:

#9EE86E

Este es el verde principal que debe contrastar contra el fondo verde oscuro.

Debe convertirse en el color semántico principal para:
- Descubre Olimpo;
- aprendizaje;
- progreso;
- elementos activos;
- iconos destacados;
- líneas de énfasis;
- checks;
- barras de progreso;
- labels relevantes;
- nodos de aprendizaje en diagramas;
- CTA principal cuando corresponda.

Definir:

--accent-green: #9EE86E;

==================================================
2. AMARILLO DE APOYO
==================================================

Utilizar:

#FFCC00

Definir:

--accent-yellow: #FFCC00;

Usarlo exclusivamente como color secundario de énfasis para:
- Libras;
- recompensas;
- hitos;
- pequeños highlights;
- nodo principal de Olimpo en diagramas;
- estados especiales;
- elementos que necesiten diferenciación secundaria.

NO utilizar amarillo de manera dominante.

El verde #9EE86E sigue siendo el principal color de contraste de la presentación.

==================================================
3. ELIMINAR VIOLETA COMO COLOR SEMÁNTICO
==================================================

Actualmente existen algunos elementos violeta introducidos como representación de:
- guía;
- asistencia;
- Rachas;
- finalización guiada.

Eliminar ese violeta.

No forma parte del sistema visual principal definido.

La diferenciación debe resolverse usando únicamente:
- verde #9EE86E;
- amarillo #FFCC00;
- crema;
- blanco;
- tonos neutros;
- distintos niveles de fondo verde;
- bordes;
- grosor;
- labels;
- iconos;
- jerarquía.

No introducir nuevos colores sin autorización.

==================================================
4. PALETA DEFINITIVA
==================================================

Utilizar como sistema base:

--bg-primary: #10210A;
--bg-secondary: #162A1E;
--surface-dark: #1D3327;

--accent-green: #9EE86E;
--accent-yellow: #FFCC00;

--surface-light: #F7F3E8;

--text-primary: #F7F5ED;
--text-secondary: #B8C8BF;
--text-muted: #7F9186;

--text-on-light: #17382E;

No introducir:
- azul;
- celeste;
- cyan;
- morado;
- rojo;
- naranja;
- rosa;

salvo petición explícita posterior.

==================================================
5. AUMENTAR LIGERAMENTE EL CONTRASTE
==================================================

La presentación será expuesta y posiblemente proyectada.

Aumentar aproximadamente un 10–15% la visibilidad de:
- textos secundarios;
- indicadores de capítulo;
- bordes de cards;
- iconos secundarios;
- líneas de diagramas.

No cambiar el carácter oscuro de la presentación.

No hacer que todo sea blanco.

==================================================
6. TERMINOLOGÍA: TODO EN ESPAÑOL
==================================================

Eliminar términos en inglés visibles en la presentación.

Cambiar:

RESEARCH

por:

INVESTIGACIÓN

Cambiar:

ONBOARDING

por:

ORIENTACIÓN

Cambiar:

Research y propuesta conceptual

por:

Investigación y propuesta conceptual

Cambiar:

hub

por:

espacio

o:

centro

según contexto.

Cambiar:

Tutorial

por:

Guía

Cambiar:

Tutorial visto

por:

Guía finalizada

Preferir siempre:
- orientación inicial;
- descubrimiento;
- aprendizaje;
- guía interactiva;
- finalización autónoma;
- finalización guiada;
- objetivo;
- progreso;
- acción;
- recompensa;
- evento;
- ayuda contextual.

==================================================
7. INDICADOR DE CAPÍTULO DUPLICADO
==================================================

Actualmente algunas slides muestran dos veces el capítulo.

Eliminar la duplicación.

Mantener únicamente el indicador pequeño superior:

01 / INVESTIGACIÓN
02 / OPORTUNIDAD
03 / SOLUCIÓN
04 / FUNCIONAMIENTO
05 / VALIDACIÓN

El área inmediatamente superior al título puede utilizarse para labels semánticos solamente cuando sea útil:

HALLAZGO
PRINCIPIO
OPORTUNIDAD
MODELO PROPUESTO

No repetir el capítulo.

==================================================
8. SLIDE 02 — CORREGIR FALSOS VERBATIMS
==================================================

Actualmente aparecen frases entre comillas que pueden interpretarse como citas reales de usuarios.

No hubo entrevistas de usuarios asociadas a estas frases.

Eliminar comillas y estilo de cita.

Reformular así:

DESCUBRIMIENTO

No sabe que la funcionalidad existe.

COMPRENSIÓN

Sabe que existe, pero no comprende cómo utilizarla.

EJECUCIÓN

Sabe qué quiere hacer, pero no encuentra cómo llegar.

No presentarlas como citas.

==================================================
9. SLIDE 03 — RIGOR METODOLÓGICO
==================================================

Mantener el título:

Mostrar no significa enseñar

Modificar lenguaje demasiado absoluto.

Utilizar:

INTERRUMPE

Puede interferir con la intención original.

Supporting:

El usuario entra a Olimpo para realizar una acción, no necesariamente para recibir una explicación inicial extensa.

SE OLVIDA

Aparece antes de ser relevante.

TIENDE A OMITIRSE

Las explicaciones extensas tienen mayor probabilidad de ser ignoradas cuando aparecen fuera de contexto.

Mantener statement:

La ayuda funciona mejor cuando aparece en contexto y cuando el usuario puede recuperarla cuando la necesita.

Agregar discretamente fuente inferior:

Fuente: Nielsen Norman Group — Onboarding Tutorials vs. Contextual Help.

Utilizar tipografía secundaria pequeña.

==================================================
10. SLIDE 05 — CAMBIAR “MOTORES DE MOTIVACIÓN”
==================================================

No afirmar que sabemos que estas funcionalidades efectivamente “movilizan” al usuario si no tenemos datos internos que lo demuestren.

Cambiar título:

Olimpo ya tiene dos mecánicas de progreso

Supporting:

Antes de introducir una nueva, entendamos el rol de las que ya existen.

Mantener:

Misiones
- desafíos promocionales;
- condiciones;
- duración;
- recompensa.

Rachas
- continuidad;
- repetición;
- progreso temporal;
- constancia.

Pregunta inferior:

¿Dónde vive entonces el aprendizaje?

==================================================
11. SLIDE 06 — USAR EL MERMAID REAL DEL ECOSISTEMA
==================================================

La slide 06 NO debe utilizar una reinterpretación manual simplificada.

Debe utilizar el diagrama Mermaid del proyecto.

Reemplazar el visual actual por un verdadero Mermaid.

Utilizar este código como estructura obligatoria:

%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%

flowchart TB

    O["OLIMPO"]

    O --> M["MISIONES"]
    O --> R["RACHAS"]
    O --> D["DESCUBRE OLIMPO"]

    M --> M1["Desafíos promocionales"]
    M1 --> M2["Cumplir condiciones"]
    M2 --> M3["Tienen una duración"]
    M3 --> M4["La recompensa es protagonista"]

    R --> R1["Continuidad"]
    R1 --> R2["Repetición de actividades"]
    R2 --> R3["Puede romperse"]
    R3 --> R4["La constancia es protagonista"]

    D --> D1["Descubrimiento y aprendizaje"]
    D1 --> D2["Completar objetivos"]
    D2 --> D3["Progreso permanente"]
    D3 --> D4["Autonomía como resultado"]

    classDef principal fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef misiones fill:#F7F3E8,stroke:#FFFFFF,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef rachas fill:#1D3327,stroke:#FFCC00,stroke-width:2px,color:#F7F5ED,font-weight:bold;

    classDef descubre fill:#9EE86E,stroke:#C6F5A7,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef detalle fill:#F7F3E8,stroke:#D8E5DF,stroke-width:1.5px,color:#17382E;

    class O principal;
    class M misiones;
    class R rachas;
    class D descubre;

    class M1,M2,M3,M4,R1,R2,R3,R4,D1,D2,D3,D4 detalle;

IMPORTANTE:
- renderizar Mermaid;
- no sustituir por cards manuales;
- no eliminar ramas;
- no convertirlo en tres cajas independientes;
- mantener la conexión jerárquica Olimpo → tres sistemas.

Título:

Un ecosistema, tres propósitos

Mensaje inferior:

Cada sistema responde a una función diferente dentro de la experiencia.

==================================================
12. “DESCUBRE OLIMPO” ES NOMBRE CONCEPTUAL
==================================================

La primera vez que aparezca formalmente el nombre:

Descubre Olimpo

agregar discretamente:

Nombre conceptual

o:

Nombre de trabajo

Después puede utilizarse normalmente.

No presentarlo todavía como naming definitivo validado.

==================================================
13. SLIDE 07
==================================================

Mantener:

Falta una capa de descubrimiento

Mantener tres pilares:

DESCUBRE

Qué puede hacer.

APRENDE

Cómo hacerlo.

PROGRESA

Cambiar:

Reconoce lo que ya domina

por:

Reconoce lo que ya sabe hacer.

Todos los elementos que actualmente utilizan celeste deben pasar a:

#9EE86E

==================================================
14. SLIDE 08 — CORREGIR LA LÓGICA DEL MINI DIAGRAMA
==================================================

Mantener:

El objetivo define QUÉ.
La guía explica CÓMO.

Pero NO utilizar una secuencia lineal:

QUÉ → Acción → Resultado | ¿Necesitas ayuda? → Ver cómo

porque comunica una arquitectura incorrecta.

Representar:

                     OBJETIVO
                         │
              ┌──────────┴──────────┐
              │                     │
          Sabe hacerlo        Necesita ayuda
              │                     │
              │                 Ver cómo
              │                     │
              └──────────┬──────────┘
                         │
                       Acción
                         │
                      Resultado

Utilizar:
- verde #9EE86E para objetivo/acción;
- amarillo #FFCC00 para resultado;
- neutros para “Sabe hacerlo” y “Necesita ayuda”.

No utilizar violeta.

==================================================
15. SLIDE 09 — INSERTAR FLUJO MERMAID COMPLETO
==================================================

La slide actual simplifica en exceso la lógica y hace parecer que el usuario está obligado a entrar en Descubre Olimpo.

Esto contradice la solución.

Eliminar el flujo manual existente.

Utilizar el Mermaid completo.

%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%

flowchart TD

    A["Nuevo usuario"]
    B["Primer ingreso"]
    C["Orientación inicial<br/>2–3 pasos"]
    D["Conoce dónde encontrar<br/>Descubre Olimpo"]
    E["Uso normal de Olimpo"]

    F{"¿Quiere explorar<br/>o necesita ayuda?"}

    G["Continúa usando Olimpo"]
    H["Ingresa a<br/>Descubre Olimpo"]
    I["Selecciona un objetivo"]

    J{"¿Sabe cómo<br/>realizarlo?"}

    K["Realiza la acción<br/>por su cuenta"]
    L["Selecciona<br/>Ver cómo"]
    M["Guía interactiva"]
    N["Realiza la acción<br/>en la interfaz real"]

    O["Olimpo detecta<br/>la acción realizada"]
    P["Objetivo completado"]
    Q["Recompensa en Libras<br/>si corresponde"]

    A --> B --> C --> D --> E --> F

    F -- "No" --> G
    F -- "Sí" --> H

    H --> I --> J

    J -- "Sí" --> K
    J -- "No" --> L --> M --> N

    K --> O
    N --> O

    O --> P --> Q

    classDef inicio fill:#F7F3E8,stroke:#FFFFFF,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef orientacion fill:#FFCC00,stroke:#FFE16B,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef normal fill:#F7F3E8,stroke:#FFFFFF,stroke-width:1.5px,color:#17382E;

    classDef decision fill:#10210A,stroke:#9EE86E,stroke-width:3px,color:#F7F5ED,font-weight:bold;

    classDef aprendizaje fill:#9EE86E,stroke:#C6F5A7,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef resultado fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    class A,B inicio;
    class C,D orientacion;
    class E,G,I,K normal;
    class F,J decision;
    class H,L,M,N,O aprendizaje;
    class P,Q resultado;

Título:

Una orientación inicial. Después, libertad.

Statement inferior:

Solo la orientación inicial es obligatoria.

NO eliminar la bifurcación:

¿Quiere explorar o necesita ayuda?

Esa bifurcación es esencial.

==================================================
16. SLIDE 10
==================================================

Mantener:

¿Qué debería enseñar el primer ingreso?

Cambiar statement final:

2–3 pasos. Una sola vez.

por:

Propuesta: 2–3 pasos. Una sola vez.

Esto deja claro que es una decisión de diseño recomendada.

==================================================
17. SLIDE 11 — CORRECCIONES
==================================================

Actualmente aparece:

2 de 4 objetivos

pero solamente hay uno completado.

Corregir a:

1 de 4 objetivos

Barra de progreso:
aproximadamente 25%.

Eliminar:

+20 Libras
+30 Libras

porque no existen montos definidos.

Sustituir por:

+ X Libras

o:

Recompensa en Libras

Preferir + X Libras si visualmente funciona mejor.

Cambiar:

Un hub persistente de objetivos.

por:

Un espacio persistente de objetivos.

Cambiar objetivo genérico:

Conoce una herramienta relevante

por:

Conoce tus herramientas de Juego Responsable

Supporting:

Descubre dónde encontrar opciones de control y ayuda.

La recompensa debe permanecer secundaria visualmente.

==================================================
18. SLIDE 12 — USAR MERMAID AUTÓNOMO VS. GUIADO
==================================================

La slide 12 debe incorporar el Mermaid que explica:

Dos caminos. Un mismo resultado.

Eliminar las dos cards manuales actuales y reemplazarlas por el siguiente diagrama.

%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%

flowchart TD

    A["OBJETIVO<br/>Comprende cómo realizar una apuesta"]

    B{"¿Sabes cómo<br/>realizar una apuesta?"}

    C["FINALIZACIÓN AUTÓNOMA"]
    D["FINALIZACIÓN GUIADA"]

    E["Explora Deportes<br/>por tu cuenta"]
    F["Selecciona un evento"]
    G["Selecciona un mercado"]
    H["Añade la selección<br/>al cupón"]
    I["Realiza la apuesta"]

    J["Selecciona<br/>Ver cómo"]
    K["La guía te lleva<br/>a Deportes"]
    L["Te indica dónde<br/>seleccionar un evento"]
    M["Te acompaña hasta<br/>el cupón"]
    N["Realiza la apuesta<br/>en la interfaz real"]

    O["Olimpo detecta<br/>APUESTA REALIZADA"]

    P["OBJETIVO COMPLETADO"]

    A --> B

    B -- "Sí" --> C
    B -- "No" --> D

    C --> E --> F --> G --> H --> I
    D --> J --> K --> L --> M --> N

    I --> O
    N --> O

    O --> P

    classDef objetivo fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef decision fill:#10210A,stroke:#9EE86E,stroke-width:3px,color:#F7F5ED,font-weight:bold;

    classDef autonomo fill:#F7F3E8,stroke:#FFFFFF,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef guiado fill:#1D3327,stroke:#9EE86E,stroke-width:2px,color:#F7F5ED,font-weight:bold;

    classDef pasoAuto fill:#F7F3E8,stroke:#D9E6E0,stroke-width:1.5px,color:#17382E;

    classDef pasoGuia fill:#1D3327,stroke:#9EE86E,stroke-width:1.5px,color:#F7F5ED;

    classDef evento fill:#9EE86E,stroke:#C6F5A7,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef resultado fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    class A objetivo;
    class B decision;

    class C autonomo;
    class D guiado;

    class E,F,G,H,I pasoAuto;
    class J,K,L,M,N pasoGuia;

    class O evento;
    class P resultado;

IMPORTANTE:

En esta slide NO añadir:

+ Libras

inmediatamente después de realizar la apuesta.

Este ejemplo se utiliza para explicar comprensión del flujo, no como incentivo a realizar actividad de juego.

Puede añadirse como nota secundaria:

La recompensa solo se incorpora cuando el objetivo sea elegible y haya sido validado desde Producto/Negocio/Compliance.

==================================================
19. SLIDE 13
==================================================

Cambiar:

Tutorial visto

por:

Guía finalizada

Cambiar:

tutorial_finalizado ≠ objetivo completado

por:

guia_finalizada ≠ objetivo_completado

Mantener:

apuesta_realizada = objetivo_completado

Mantener statement:

El sistema reconoce autonomía en lugar de obligar a consumir ayuda.

Todos los checks o highlights actualmente celestes deben pasar a:

#9EE86E

==================================================
20. SEMÁNTICA DE COLOR DEFINITIVA
==================================================

Mantener esta lógica en TODAS las slides:

VERDE #9EE86E

Representa:
- descubrimiento;
- aprendizaje;
- avance;
- acción;
- progreso;
- Descubre Olimpo;
- éxito funcional;
- elementos principales activos.

AMARILLO #FFCC00

Representa:
- recompensa;
- Libras;
- hitos;
- Olimpo como nodo principal;
- highlights puntuales.

CREMA

Representa:
- información neutra;
- contenido base;
- cards claras;
- ramas autónomas cuando se necesite distinguirlas.

VERDE OSCURO

Representa:
- superficies;
- cards;
- ramas secundarias;
- estados menos destacados.

No introducir semántica adicional mediante otros colores.

==================================================
21. DIAGRAMAS: REGLA GENERAL
==================================================

Los tres diagramas Mermaid obligatorios son:

SLIDE 06
Ecosistema Olimpo

SLIDE 09
Flujo general de la solución

SLIDE 12
Finalización autónoma vs. guiada

Estos diagramas YA HAN SIDO DISEÑADOS.

NO:
- reinterpretarlos;
- resumirlos;
- sustituirlos por cards;
- convertirlos en simples cadenas de pills;
- eliminar decisiones;
- eliminar bifurcaciones;
- inventar nuevas relaciones.

Renderizar el Mermaid como parte central de cada slide.

Se puede ajustar:
- escala;
- espaciado;
- tamaño;
- orientación;

solo cuando sea necesario para encajar en 16:9.

La lógica debe permanecer intacta.

==================================================
22. NO CAMBIAR EL RESTO DEL DISEÑO
==================================================

Mantener:
- Manrope;
- fondo actual;
- radios;
- navegación inferior;
- animaciones;
- estructura de slides;
- layouts existentes cuando no estén señalados;
- estilo minimalista;
- espacio negativo;
- iconografía Lucide.

Esta tarea es una corrección y alineamiento, no una reconstrucción completa.

==================================================
23. RESULTADO ESPERADO
==================================================

Después de aplicar estos cambios, la presentación debe:

1. utilizar únicamente la paleta real;
2. no contener celestes ni violetas;
3. utilizar #9EE86E como verde principal;
4. utilizar #FFCC00 como amarillo de apoyo;
5. mantener todo el copy principal en español;
6. ser metodológicamente rigurosa;
7. diferenciar afirmaciones de Research de propuestas de diseño;
8. mostrar claramente la opcionalidad del sistema;
9. utilizar los Mermaid originales;
10. evitar presentar recompensas económicas no definidas;
11. evitar asociar directamente apuesta realizada → premio;
12. mantener Descubre Olimpo como nombre conceptual;
13. conservar el diseño actual siempre que no contradiga estas reglas.

==================================================
REGLA FINAL
==================================================

Antes de modificar cualquier slide, aplicar este filtro:

¿Este elemento ayuda a explicar aprendizaje, descubrimiento o autonomía?

Si no lo hace, simplificarlo.

Aplicar siempre este principio rector:

El objetivo no es que el usuario complete tutoriales.
El objetivo es que aprenda a utilizar Olimpo con autonomía.