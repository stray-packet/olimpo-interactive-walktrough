Actúa como Senior Product Designer y Presentation Designer.

Ya existe una presentación creada.
NO debes reconstruirla desde cero.

Tu tarea es corregir únicamente las slides 09 y 12 para mejorar la legibilidad de los diagramas Mermaid.

Actualmente ambos diagramas están dispuestos en vertical y, debido al formato 16:9 de la presentación, se ven demasiado pequeños y pierden legibilidad.

Debes reemplazar los diagramas actuales por versiones horizontales, manteniendo exactamente la misma lógica conceptual, pero aprovechando mucho mejor el ancho disponible de la slide.

Mantén:
- fondo verde oscuro actual;
- tipografía Manrope;
- navegación inferior;
- estructura general;
- títulos;
- jerarquía;
- estilo minimalista;
- colores definidos;
- lenguaje en español;
- radios;
- espaciado;
- motion actual.

NO cambies el resto de la presentación.

==================================================
PALETA A UTILIZAR
==================================================

Fondo principal:
#10210A

Fondo secundario:
#162A1E

Superficie oscura:
#1D3327

Verde principal:
#9EE86E

Amarillo:
#FFCC00

Crema:
#F7F3E8

Texto principal:
#F7F5ED

Texto secundario:
#B8C8BF

Texto oscuro:
#17382E

No utilizar celeste.
No utilizar violeta.
No introducir nuevos colores.

==================================================
SLIDE 09 — FLUJO GENERAL DE LA SOLUCIÓN
==================================================

Mantener el título:

Una orientación inicial. Después, libertad.

Mantener el label:

MODELO PROPUESTO

Mantener el statement inferior:

Solo la orientación inicial es obligatoria.

PROBLEMA ACTUAL:

El Mermaid actual se renderiza verticalmente y queda demasiado pequeño.

SOLUCIÓN:

Sustituirlo por un flujo horizontal dividido visualmente en tres grandes etapas:

1. ORIENTACIÓN INICIAL
2. EXPLORACIÓN OPCIONAL
3. ACCIÓN Y FINALIZACIÓN

El diagrama debe ocupar aproximadamente entre 75% y 85% del ancho útil de la slide.

Priorizar siempre legibilidad del texto.

No dejar grandes espacios vacíos alrededor del Mermaid.

No reducir el diagrama hasta que los labels sean difíciles de leer.

Utilizar este Mermaid:

%%{init: {
  "theme": "base",
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 30,
    "rankSpacing": 55
  },
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%

flowchart LR

    subgraph S1["ORIENTACIÓN INICIAL"]
        direction TB

        A["Nuevo usuario"]
        B["Primer ingreso"]
        C["Orientación inicial<br/>2–3 pasos"]
        D["Conoce dónde encontrar<br/>Descubre Olimpo"]
        E["Uso normal de Olimpo"]

        A --> B --> C --> D --> E
    end

    subgraph S2["EXPLORACIÓN OPCIONAL"]
        direction TB

        F{"¿Quiere explorar<br/>o necesita ayuda?"}

        G["Continúa usando<br/>Olimpo"]

        H["Ingresa a<br/>Descubre Olimpo"]
        I["Selecciona<br/>un objetivo"]

        J{"¿Sabe cómo<br/>realizarlo?"}

        H --> I --> J
    end

    subgraph S3["ACCIÓN Y FINALIZACIÓN"]
        direction TB

        K["Realiza la acción<br/>por su cuenta"]

        L["Selecciona<br/>Ver cómo"]
        M["Guía interactiva"]
        N["Realiza la acción<br/>en la interfaz real"]

        O["Olimpo detecta<br/>la acción realizada"]
        P["Objetivo<br/>completado"]
        Q["Recompensa en Libras<br/>si corresponde"]

        L --> M --> N
        K --> O
        N --> O
        O --> P --> Q
    end

    E --> F

    F -- "No" --> G
    F -- "Sí" --> H

    J -- "Sí" --> K
    J -- "No" --> L

    classDef neutro fill:#F7F3E8,stroke:#FFFFFF,stroke-width:1.5px,color:#17382E;

    classDef orientacion fill:#FFCC00,stroke:#FFE16B,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef decision fill:#10210A,stroke:#9EE86E,stroke-width:3px,color:#F7F5ED,font-weight:bold;

    classDef aprendizaje fill:#9EE86E,stroke:#C6F5A7,stroke-width:2px,color:#17382E,font-weight:bold;

    classDef resultado fill:#FFCC00,stroke:#FFE16B,stroke-width:2px,color:#17382E,font-weight:bold;

    class A,B,E,G,I,K neutro;
    class C,D orientacion;
    class F,J decision;
    class H,L,M,N,O aprendizaje;
    class P,Q resultado;

    style S1 fill:#162A1E,stroke:#354B3B,stroke-width:1px,color:#B8C8BF
    style S2 fill:#162A1E,stroke:#354B3B,stroke-width:1px,color:#B8C8BF
    style S3 fill:#162A1E,stroke:#354B3B,stroke-width:1px,color:#B8C8BF

IMPORTANTE:

- utilizar flowchart LR;
- mantener los subgrupos;
- no convertirlo nuevamente en una columna vertical;
- no eliminar la bifurcación de “¿Quiere explorar o necesita ayuda?”;
- no eliminar la bifurcación de “¿Sabe cómo realizarlo?”;
- no simplificar la lógica;
- no convertirlo en una cadena simple;
- mantener visible que “Continúa usando Olimpo” es una salida válida;
- mantener visible que la ayuda es opcional.

El diagrama debe leerse de izquierda a derecha.

==================================================
SLIDE 12 — FINALIZACIÓN AUTÓNOMA VS. GUIADA
==================================================

Mantener el título:

Dos caminos. Un mismo resultado.

Mantener el texto:

Ejemplo de comprensión del flujo — no como incentivo a realizar actividad de juego.

Mantener la nota inferior:

La recompensa solo se incorpora cuando el objetivo sea elegible y haya sido validado desde Producto / Negocio / Compliance.

PROBLEMA ACTUAL:

El diagrama actual se construye verticalmente y se reduce demasiado.

SOLUCIÓN:

Convertirlo en un flujo horizontal donde:

- el objetivo aparezca a la izquierda;
- la decisión aparezca después;
- los dos caminos se desarrollen en paralelo;
- ambas ramas converjan claramente;
- APUESTA REALIZADA aparezca como punto de convergencia;
- OBJETIVO COMPLETADO aparezca al extremo derecho.

La lectura debe ser:

OBJETIVO
→ decisión
→ dos caminos paralelos
→ APUESTA REALIZADA
→ OBJETIVO COMPLETADO

Utilizar este Mermaid:

%%{init: {
  "theme": "base",
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 28,
    "rankSpacing": 45
  },
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%

flowchart LR

    A["OBJETIVO<br/>Comprende cómo realizar<br/>una apuesta"]

    B{"¿Sabes cómo<br/>realizar una apuesta?"}

    subgraph AUT["FINALIZACIÓN AUTÓNOMA"]
        direction LR

        C1["Explora<br/>Deportes"]
        C2["Selecciona<br/>un evento"]
        C3["Selecciona<br/>un mercado"]
        C4["Añade al<br/>cupón"]
        C5["Realiza<br/>la apuesta"]

        C1 --> C2 --> C3 --> C4 --> C5
    end

    subgraph GUIA["FINALIZACIÓN GUIADA"]
        direction LR

        D1["Selecciona<br/>Ver cómo"]
        D2["La guía lleva<br/>a Deportes"]
        D3["Indica dónde<br/>seleccionar"]
        D4["Acompaña hasta<br/>el cupón"]
        D5["Realiza la apuesta<br/>en la interfaz real"]

        D1 --> D2 --> D3 --> D4 --> D5
    end

    O["APUESTA<br/>REALIZADA"]
    P["OBJETIVO<br/>COMPLETADO"]

    A --> B

    B -- "Sí" --> C1
    B -- "No" --> D1

    C5 --> O
    D5 --> O

    O --> P

    classDef objetivo fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef decision fill:#10210A,stroke:#9EE86E,stroke-width:3px,color:#F7F5ED,font-weight:bold;

    classDef autonomo fill:#F7F3E8,stroke:#FFFFFF,stroke-width:1.5px,color:#17382E;

    classDef guiado fill:#1D3327,stroke:#9EE86E,stroke-width:1.5px,color:#F7F5ED;

    classDef evento fill:#9EE86E,stroke:#C6F5A7,stroke-width:3px,color:#17382E,font-weight:bold;

    classDef resultado fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;

    class A objetivo;
    class B decision;

    class C1,C2,C3,C4,C5 autonomo;
    class D1,D2,D3,D4,D5 guiado;

    class O evento;
    class P resultado;

    style AUT fill:#162A1E,stroke:#F7F3E8,stroke-width:1px,color:#F7F5ED
    style GUIA fill:#162A1E,stroke:#9EE86E,stroke-width:1px,color:#9EE86E

IMPORTANTE:

- el flujo debe mantenerse horizontal;
- no apilar todo verticalmente;
- no colocar las dos ramas una debajo de otra si eso vuelve a comprimir el gráfico;
- priorizar que ambas ramas sean visibles como caminos paralelos;
- APUESTA REALIZADA debe funcionar como punto visual de convergencia;
- OBJETIVO COMPLETADO debe ser el resultado final;
- no añadir “+ Libras” después de la apuesta;
- no introducir violeta;
- utilizar verde #9EE86E para la rama guiada y el evento;
- utilizar crema para la rama autónoma;
- utilizar amarillo #FFCC00 para objetivo y resultado final.

==================================================
REGLA DE ESCALA PARA AMBOS DIAGRAMAS
==================================================

Actualmente los diagramas tienen demasiado espacio vacío alrededor y su escala es muy pequeña.

Corregirlo.

Los Mermaid deben ocupar el área principal de contenido.

Objetivo visual:

- entre 75% y 85% del ancho útil;
- altura suficiente para que todos los textos sean legibles;
- ningún label debería requerir zoom;
- tamaño mínimo visual equivalente a 14–16 px;
- títulos de subgrupos claramente legibles;
- separación suficiente entre nodos;
- flechas visibles.

Si existe conflicto entre:
1. mantener mucho espacio negativo
y
2. hacer legible el diagrama,

priorizar la legibilidad del diagrama.

==================================================
NO MODIFICAR
==================================================

No modificar:
- slides diferentes a 09 y 12;
- fondo;
- navegación;
- tipografía;
- título de las slides;
- número de slide;
- estructura global de la presentación;
- sistema de motion;
- paleta definida;
- lenguaje en español.

Esta tarea es exclusivamente una corrección de composición y orientación de los dos diagramas Mermaid.

Resultado esperado:

SLIDE 09:
un flujo horizontal de izquierda a derecha, dividido en tres etapas claras.

SLIDE 12:
dos caminos paralelos que convergen visualmente en un mismo evento.

Ambas slides deben poder entenderse desde una pantalla proyectada sin necesidad de acercarse ni hacer zoom.