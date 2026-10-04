# ROL Y CONTEXTO GENERAL

Actúa como un **Senior Product Designer, UX Research Lead, Information Architect, Presentation Designer y Frontend Prototyping Specialist**, con experiencia avanzada en:

* UX Research.
* Product Strategy.
* Onboarding.
* Progressive Onboarding.
* Interactive Walkthroughs.
* Contextual Help.
* Gamificación responsable.
* Productos digitales de apuestas online.
* Diseño de presentaciones ejecutivas.
* Storytelling para stakeholders.
* Figma.
* Figma Make.
* React.
* Tailwind CSS.
* Motion.
* Mermaid.
* Lucide Icons.

Tu tarea es construir una **presentación interactiva, visualmente premium, clara, estratégica y lista para exposición**, basada en un Research UX sobre una nueva funcionalidad de descubrimiento, aprendizaje y acompañamiento progresivo dentro de **Olimpo**.

La presentación debe ayudar a explicar:

1. cuál es el problema;
2. qué oportunidad existe;
3. qué aprendimos del Research;
4. por qué un tour tradicional no es suficiente;
5. cómo debería funcionar la solución propuesta;
6. cómo convivirá con funcionalidades existentes como Misiones y Rachas;
7. cuáles son los principios UX fundamentales;
8. cómo funcionarán los objetivos y las guías interactivas;
9. cómo mediremos si realmente funciona;
10. qué riesgos deben considerarse;
11. cuál debería ser el MVP;
12. cómo puede evolucionar posteriormente.

La presentación debe sentirse como un **caso de Product Design / UX Strategy de alto nivel**, no como documentación técnica ni como un pitch comercial publicitario.

---

# REGLA CRÍTICA SOBRE EL CONTENIDO

NO reutilices términos, conceptos, nombres, contenido, títulos ni estructuras narrativas provenientes de otros proyectos.

El estilo visual puede seguir las reglas descritas en este documento, pero todo el contenido debe estar exclusivamente relacionado con:

**Olimpo + onboarding progresivo + descubrimiento + aprendizaje contextual + objetivos + walkthroughs interactivos + Libras + Misiones + Rachas.**

No inventes funcionalidades adicionales.

No cambies las decisiones de producto definidas en este prompt.

No presentes alternativas de solución A/B/C.

La única solución que se desarrollará es el:

# MODELO HÍBRIDO

Una orientación inicial mínima y obligatoria una sola vez, seguida de un sistema completamente opcional de descubrimiento, objetivos y guías interactivas bajo demanda.

---

# OBJETIVO DE LA PRESENTACIÓN

La presentación debe lograr que una persona que no conoce previamente el proyecto pueda entender progresivamente:

> “Olimpo no necesita simplemente un tour guiado. Necesita un sistema de descubrimiento y aprendizaje progresivo que permita a cada usuario aprender cuando lo necesita, completar objetivos mediante acciones reales y recibir ayuda solamente cuando no sabe cómo avanzar.”

La narrativa debe conducir hacia esa conclusión.

Evitar explicar la solución completa demasiado pronto.

Construir primero:

problema → evidencia → contexto Olimpo → oportunidad → principios → solución → funcionamiento → medición → MVP.

---

# DIRECCIÓN VISUAL GENERAL

La presentación debe utilizar un lenguaje visual:

* oscuro;
* elegante;
* premium;
* moderno;
* tecnológico;
* muy limpio;
* editorial;
* minimalista;
* con fuerte jerarquía tipográfica;
* con suficiente espacio negativo;
* evitando saturación;
* evitando estética gamer exagerada;
* evitando exceso de gráficos decorativos.

Debe sentirse cercana a una combinación entre:

* producto digital premium;
* presentación estratégica de producto;
* dashboard editorial;
* case study de UX;
* keynote tecnológica moderna.

No usar estética corporativa genérica de PowerPoint.

No usar gradientes innecesarios.

No usar glassmorphism excesivo.

No utilizar sombras fuertes.

No utilizar bordes luminosos tipo neón.

No usar ilustraciones decorativas sin función.

Cada elemento debe ayudar a comunicar una idea.

---

# PALETA DE COLORES

## Fondo principal

Utilizar como base un verde extremadamente oscuro.

Referencia aproximada:

```css
--bg-primary: hsla(97, 72%, 7%, 1);
```

Equivalente visual aproximado:

```css
#10210A
```

Puede ajustarse ligeramente para mejorar contraste, pero siempre debe conservar una apariencia verde oscura y sofisticada.

---

## Fondo secundario

Para paneles ligeramente diferenciados:

```css
--bg-secondary: #162A1E;
```

o una variante cercana.

Debe permitir crear profundidad sin abandonar el universo verde oscuro.

---

## Superficie elevada

Para algunas cards:

```css
--surface-dark: #1D3327;
```

Utilizarla con moderación.

---

# COLORES DE TEXTO

## Texto principal

```css
--text-primary: #F7F5ED;
```

Crema casi blanco.

Evitar blanco puro en grandes masas de texto.

---

## Texto secundario

```css
--text-secondary: #B8C8BF;
```

Para descripciones, supporting copy, labels y metadatos.

---

## Texto deshabilitado

```css
--text-muted: #73857B;
```

---

# COLOR DE ACENTO PRINCIPAL

Usar un verde menta luminoso para conceptos relacionados con:

* Descubre Olimpo;
* aprendizaje;
* progreso;
* acciones positivas;
* finalización;
* elementos destacados.

```css
--accent-mint: #8FE3CF;
```

---

# COLOR DE ACENTO SECUNDARIO

Usar amarillo cálido / dorado suave para:

* Libras;
* recompensas;
* números destacados;
* hitos;
* pequeños highlights.

```css
--accent-yellow: #FFD84D;
```

Debe utilizarse de forma controlada.

No convertir toda la presentación en verde + amarillo.

---

# ACENTO COMPLEMENTARIO

Usar violeta suave para distinguir:

* walkthrough;
* asistencia;
* información contextual;
* ramas guiadas de los diagramas.

```css
--accent-purple: #CDB4FF;
```

---

# SUPERFICIE CLARA

En algunas slides estratégicas se pueden usar tarjetas claras sobre fondo oscuro.

```css
--surface-light: #F7F3E8;
```

Texto:

```css
--text-on-light: #17382E;
```

Nunca usar demasiadas cards claras simultáneamente.

---

# DISTRIBUCIÓN DEL COLOR

Como orientación:

* 65–75% verde oscuro / fondos.
* 15–20% crema / texto.
* 5–10% menta.
* 3–5% amarillo.
* violeta solo cuando sea necesario diferenciar asistencia o walkthrough.

La presentación no debe sentirse “multicolor”.

---

# TIPOGRAFÍA

Utilizar:

# Manrope

como tipografía principal en absolutamente toda la presentación.

Fallback:

```css
font-family: "Manrope", Inter, sans-serif;
```

---

# ESCALA TIPOGRÁFICA

## Hero / Cover

Entre:

```css
font-size: 64px;
font-weight: 700;
line-height: 0.98;
letter-spacing: -0.04em;
```

---

## H1 de slides

```css
font-size: 44px;
font-weight: 700;
line-height: 1.05;
letter-spacing: -0.03em;
```

---

## H2

```css
font-size: 30px;
font-weight: 650;
line-height: 1.15;
```

---

## H3 / Card title

```css
font-size: 20px;
font-weight: 650;
```

---

## Body principal

```css
font-size: 17px;
font-weight: 400;
line-height: 1.55;
```

---

## Supporting text

```css
font-size: 14px;
font-weight: 450;
line-height: 1.45;
```

---

## Labels / eyebrow

```css
font-size: 12px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
```

No abusar de mayúsculas.

---

# PRINCIPIO TIPOGRÁFICO

Preferir títulos cortos y grandes.

Ejemplo correcto:

# El problema no es enseñar todo

Supporting:

> El usuario necesita descubrir y aprender funcionalidades cuando son relevantes para su intención actual.

Evitar títulos extremadamente descriptivos.

---

# SISTEMA DE ESPACIADO

Utilizar una base de 8 px.

Valores preferidos:

8 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96.

Mantener mucho espacio negativo.

Nunca llenar todos los espacios de la slide.

---

# CONTENEDORES

Cards principales:

```css
border-radius: 25px;
```

En Tailwind:

```html
rounded-[25px]
```

Cards pequeñas:

```css
border-radius: 18px;
```

Botones:

```css
border-radius: 14px;
```

Pills:

```css
border-radius: 999px;
```

---

# BORDES

Usar bordes muy sutiles.

Ejemplo:

```css
border: 1px solid rgba(255,255,255,0.08);
```

Para cards claras:

```css
border: 1px solid rgba(23,56,46,0.10);
```

---

# SOMBRAS

Extremadamente suaves.

Ejemplo:

```css
box-shadow:
0 12px 40px rgba(0,0,0,0.18);
```

No utilizar sombras duras.

---

# ICONOGRAFÍA

Utilizar:

```js
lucide-react
```

Estilo:

* stroke 1.5–2 px;
* simple;
* lineal;
* sin relleno excesivo;
* tamaño coherente;
* preferentemente 20–28 px.

Iconos útiles:

* Compass
* Map
* Route
* Target
* Trophy
* Flame
* BookOpen
* CircleHelp
* Check
* ArrowRight
* MousePointerClick
* Eye
* User
* Play
* Sparkles
* Coins
* ChartNoAxesColumnIncreasing
* CircleCheck
* Search
* Gauge
* ShieldCheck

No utilizar emojis.

---

# LAYOUT GENERAL

Formato 16:9.

Referencia:

```css
aspect-ratio: 16 / 9;
```

Resolución conceptual:

1920 × 1080.

Safe area mínimo:

80–96 px.

---

# TIPOS DE LAYOUT

Alternar principalmente entre:

## A. Hero

Título grande + frase + elemento gráfico principal.

---

## B. Split 50 / 50

Texto estratégico izquierda.

Diagrama / card / visual derecha.

---

## C. Split 40 / 60

Texto breve izquierda.

Visual complejo derecha.

---

## D. 3 columnas

Solo para comparación de conceptos.

---

## E. Full visual

Una idea + gran diagrama.

---

## F. Editorial

Número grande + insight + supporting copy.

---

# NAVEGACIÓN

Agregar navegación minimalista inferior.

Controles:

* ChevronLeft
* ChevronRight

Botones circulares discretos.

Mostrar:

`07 / 18`

o equivalente.

No distraer del contenido.

---

# MOTION

Usar `motion`.

La presentación debe sentirse viva, pero nunca como una web promocional exagerada.

---

# TRANSICIÓN ENTRE SLIDES

Entrada:

```js
{
  opacity: 0,
  y: 18
}
```

Estado:

```js
{
  opacity: 1,
  y: 0
}
```

Salida:

```js
{
  opacity: 0,
  y: -12
}
```

Duración:

```js
0.45
```

Easing:

```js
[0.22, 1, 0.36, 1]
```

---

# STAGGER

Para cards:

```js
staggerChildren: 0.08
```

Para listas:

```js
staggerChildren: 0.05
```

---

# MICROINTERACCIONES

Hover cards:

```js
scale: 1.015
```

Hover botones:

```js
scale: 1.03
```

Tap:

```js
scale: 0.97
```

Evitar animaciones grandes.

---

# PROGRESO NARRATIVO

La presentación debe avanzar como una historia.

No crear un conjunto de slides independientes.

Construir cinco capítulos visuales:

### CAPÍTULO 01

Contexto y problema

### CAPÍTULO 02

Qué aprendimos

### CAPÍTULO 03

La oportunidad para Olimpo

### CAPÍTULO 04

Cómo funciona

### CAPÍTULO 05

Cómo validamos y evolucionamos

Utilizar pequeñas slides de transición si ayudan a respirar narrativamente.

---

# ESTRUCTURA DE LA PRESENTACIÓN

Crear aproximadamente:

# 18 SLIDES

No es obligatorio que absolutamente todas tengan el mismo volumen.

Algunas deben ser muy visuales.

---

# SLIDE 01 — PORTADA

Título:

# Descubrimiento y aprendizaje progresivo en Olimpo

Supporting:

> Research y propuesta conceptual para una experiencia de acompañamiento contextual dentro del producto.

No utilizar “Interactive Walkthrough” como título principal.

Puede aparecer pequeño:

`ONBOARDING · DESCUBRIMIENTO · APRENDIZAJE CONTEXTUAL`

Visual:

un recorrido abstracto de nodos conectados que avance suavemente.

No utilizar mockups todavía.

---

# SLIDE 02 — EL PUNTO DE PARTIDA

Título:

# El problema no es enseñar todo

Idea principal:

Los usuarios entran a Olimpo con una intención concreta.

No quieren estudiar la plataforma antes de utilizarla.

Mostrar tres situaciones:

### Descubrimiento

“No sabía que esto existía.”

### Comprensión

“Sé que existe, pero no sé cómo funciona.”

### Ejecución

“Sé qué quiero hacer, pero no encuentro dónde.”

Visual:

tres cards grandes.

---

# SLIDE 03 — POR QUÉ UN TOUR TRADICIONAL NO ES SUFICIENTE

Título:

# Mostrar no significa enseñar

Presentar tres limitaciones:

### Interrumpe

El usuario llega con otra intención.

### Se olvida

La información aparece antes de ser relevante.

### Se omite

Los usuarios tienden a saltar explicaciones extensas.

Closing statement destacado:

> La ayuda funciona mejor cuando aparece en contexto y cuando el usuario puede recuperarla cuando la necesita.

---

# SLIDE 04 — CAMBIO DE ENFOQUE

Slide editorial.

Texto grande:

# De “explicar Olimpo”

# a “ayudar a descubrir Olimpo”

Debajo:

> La experiencia debe acompañar el aprendizaje progresivamente y no concentrarlo todo en el primer ingreso.

Visual mínimo.

Mucho espacio negativo.

---

# SLIDE 05 — EL ECOSISTEMA ACTUAL

Título:

# Olimpo ya tiene dos motores de motivación

Introducir:

## Misiones

Desafíos promocionales.

Condiciones.

Duración.

Recompensa.

## Rachas

Continuidad.

Repetición.

Progreso temporal.

Persistencia de hábito.

Luego abrir la pregunta:

> ¿Dónde vive entonces el aprendizaje?

---

# SLIDE 06 — DIAGRAMA DE ECOSISTEMA

Utilizar el diagrama Mermaid de ecosistema.

Conceptualmente:

```text
OLIMPO
├── MISIONES
│   ├── Desafío promocional
│   ├── Condiciones
│   ├── Expira
│   └── Recompensa protagonista
│
├── RACHAS
│   ├── Continuidad
│   ├── Repetición
│   ├── Puede romperse
│   └── Constancia protagonista
│
└── DESCUBRE OLIMPO
    ├── Descubrimiento
    ├── Aprendizaje
    ├── Progreso permanente
    └── Autonomía protagonista
```

Jerarquía visual:

Misiones → crema.

Rachas → violeta.

Descubre Olimpo → menta.

Olimpo → amarillo.

Mensaje inferior:

> Cada sistema responde a una motivación diferente.

---

# SLIDE 07 — LA OPORTUNIDAD

Título:

# Falta una capa de descubrimiento

Presentar:

## Descubre Olimpo

Propuesta conceptual:

> Un espacio persistente donde el usuario puede conocer funcionalidades, completar objetivos y solicitar ayuda solamente cuando la necesita.

Tres pilares:

### Descubre

Qué puede hacer.

### Aprende

Cómo hacerlo.

### Progresa

Reconoce lo que ya domina.

---

# SLIDE 08 — PRINCIPIO CENTRAL

Gran statement:

# El objetivo define QUÉ.

# La guía explica CÓMO.

Debajo:

> El sistema no premia haber visto un tutorial. Reconoce haber realizado la acción real.

Visual:

QUÉ → acción → resultado

y debajo

¿Necesitas ayuda? → Ver cómo.

---

# SLIDE 09 — MODELO DE EXPERIENCIA

Título:

# Una orientación inicial. Después, libertad.

Utilizar el Mermaid correspondiente al:

**Flujo general de la solución híbrida.**

Representar:

Nuevo usuario
↓
Primer ingreso
↓
Orientación inicial 2–3 pasos
↓
Conoce Descubre Olimpo
↓
Uso normal
↓
Puede continuar libremente o entrar al hub
↓
Objetivo
↓
Acción autónoma o guía
↓
Evento real
↓
Completado
↓
Libras

Mensaje destacado:

> Solo la orientación inicial es obligatoria.

---

# SLIDE 10 — LA PRIMERA EXPERIENCIA

Título:

# ¿Qué debería enseñar el primer ingreso?

NO explicar Deportes, Casino, Cash Out, promociones, etc.

Mostrar solamente:

### 01

Cómo orientarse.

### 02

Que existe Descubre Olimpo.

### 03

Dónde volver a encontrarlo.

Statement:

> 2–3 pasos. Una sola vez.

---

# SLIDE 11 — DESCUBRE OLIMPO

Presentar conceptual UI.

No construir un diseño final rígido.

Crear un wireframe visual premium de:

# Descubre Olimpo

Progreso:

`2 de 4 objetivos`

Cards:

✓ Conoce dónde encontrar tus objetivos

○ Guarda un favorito

○ Revisa tus apuestas

○ Conoce una herramienta relevante

Cada card puede mostrar:

recompensa secundaria `+20 Libras`

y:

`Ver cómo`

cuando aplique.

La recompensa no debe dominar visualmente.

---

# SLIDE 12 — APRENDER SIN SER OBLIGADO

Título:

# Dos caminos. Un mismo resultado.

Utilizar Mermaid:

# Finalización autónoma vs. guiada

Orientado al ejemplo:

> Realiza una apuesta.

Rama izquierda:

### Finalización autónoma

Explora Deportes.

Selecciona evento.

Selecciona mercado.

Añade al cupón.

Realiza apuesta.

Rama derecha:

### Finalización guiada

Ver cómo.

La guía lleva a Deportes.

Señala evento.

Acompaña hasta cupón.

Usuario realiza la apuesta real.

Ambas convergen:

# APUESTA REALIZADA

↓

# OBJETIVO COMPLETADO

↓

# + Libras

---

# SLIDE 13 — LA FUENTE DE VERDAD

Título:

# La acción real determina el progreso

Visual muy simple:

```text
Tutorial visto ≠ objetivo completado

Acción realizada = objetivo completado
```

Ejemplo:

`apuesta_realizada`

es el evento.

No:

`tutorial_finalizado`

Añadir:

> El sistema reconoce autonomía en lugar de obligar a consumir ayuda.

---

# SLIDE 14 — PROGRESO QUE RESPETA AL USUARIO

Título:

# Si ya sabe hacerlo, Olimpo debería saberlo

Caso:

Usuario ya realizó una acción antes de entrar a Descubre Olimpo.

Incorrecto:

○ Realiza tu primera acción

Correcto:

✓ Ya conoces esta funcionalidad

Explicar conceptualmente:

**estado de finalización**

es independiente de:

**elegibilidad de recompensa**.

Mostrar visualmente:

```text
COMPLETADO
        +
ELEGIBLE
        ↓
Recompensa

COMPLETADO
        +
NO ELEGIBLE
        ↓
Sin recompensa retroactiva
```

---

# SLIDE 15 — PRINCIPIOS DEL SISTEMA

Crear 6 cards compactas.

### 01. Progresivo

No mostrar todo desde el inicio.

### 02. Opcional

Después de la orientación inicial.

### 03. Contextual

Ayuda cuando existe intención.

### 04. Basado en acciones

Los eventos reales determinan progreso.

### 05. Permanente

El aprendizaje no expira ni se resetea.

### 06. Diferenciado

No competir conceptualmente con Misiones y Rachas.

---

# SLIDE 16 — LAS LIBRAS

Título:

# La recompensa acompaña. No define.

Mostrar jerarquía:

1. Descubrir.
2. Aprender.
3. Dominar.
4. Recibir recompensa.

No:

1. Ganar Libras.
2. Hacer cualquier acción disponible.

Statement:

> Si las Libras se convierten en la única razón para completar objetivos, el sistema deja de percibirse como aprendizaje y empieza a competir con Misiones.

Visual:

una balanza conceptual donde aprendizaje tiene mayor peso visual que recompensa.

---

# SLIDE 17 — MÉTRICAS

Título:

# No mediremos cuántos tutoriales se vieron

Subtítulo:

> Mediremos cuánto puede hacer el usuario.

Crear grupos:

## Descubrimiento

* Visitas a Descubre Olimpo.
* Reingresos.
* Categorías exploradas.

## Progreso

* Objetivos iniciados.
* Objetivos completados.
* Tiempo hasta completar.

## Aprendizaje

* Finalización autónoma.
* Finalización guiada.
* Abandono de guía.

## UX

* Objetivos con mayor uso de ayuda.
* Fricciones por paso.
* Flujos con mayor dependencia de guía.

Destacar especialmente:

# Autónomo vs. guiado

porque esta es la métrica UX más valiosa.

---

# SLIDE 18 — MVP Y CIERRE

Título:

# Empezar pequeño. Aprender rápido.

MVP:

### Orientación inicial

2–3 pasos.

### Descubre Olimpo

Una categoría inicial.

### Objetivos

3–5.

### Guías

2–3 flujos realmente relevantes.

### Progreso

Basado en eventos.

### Medición

Autónomo vs. guiado desde el día uno.

Cierre grande:

# El objetivo no es que el usuario complete tutoriales.

Debajo:

# El objetivo es que deje de necesitarlos.

Este debe ser el statement final de la presentación.

---

# SISTEMA DE DIAGRAMAS MERMAID

Los diagramas deben sentirse integrados visualmente a la presentación.

No deben parecer capturas estándar de Mermaid.

Utilizar:

```js
mermaid.initialize({
  startOnLoad: true,
  theme: "base",
  securityLevel: "loose",
  themeVariables: {
    fontFamily: "Manrope, Inter, sans-serif",
    background: "transparent",
    primaryColor: "#8FE3CF",
    primaryTextColor: "#17382E",
    primaryBorderColor: "#CCFFF3",
    lineColor: "#F7F3E8",
    secondaryColor: "#F7F3E8",
    tertiaryColor: "#CDB4FF"
  }
});
```

---

# CLASES DE NODO

### Olimpo / nodos principales

```mermaid
classDef principal fill:#FFD84D,stroke:#FFF0A8,stroke-width:3px,color:#17382E,font-weight:bold;
```

### Aprendizaje

```mermaid
classDef aprendizaje fill:#8FE3CF,stroke:#CCFFF3,stroke-width:2px,color:#12382F,font-weight:bold;
```

### Asistencia / Walkthrough

```mermaid
classDef asistencia fill:#CDB4FF,stroke:#E7DBFF,stroke-width:2px,color:#25163F,font-weight:bold;
```

### Nodo neutro

```mermaid
classDef neutro fill:#F7F3E8,stroke:#FFFFFF,stroke-width:1.5px,color:#17382E;
```

### Decisión

```mermaid
classDef decision fill:#FFFFFF,stroke:#FFD84D,stroke-width:3px,color:#17382E,font-weight:bold;
```

### Resultado

```mermaid
classDef resultado fill:#FFD84D,stroke:#FFF0A8,stroke-width:3px,color:#17382E,font-weight:bold;
```

---

# ESTILO DE DIAGRAMAS

Los Mermaid deben:

* tener máximo contraste;
* evitar demasiados nodos simultáneos;
* usar dirección vertical cuando explique proceso;
* usar horizontal cuando compare ramas;
* tener bordes redondeados;
* mantener labels cortos;
* priorizar lectura sobre densidad;
* usar flechas limpias;
* evitar cruces;
* mantener mucho espacio entre nodos;
* no utilizar iconos dentro de Mermaid si comprometen legibilidad.

---

# TRATAMIENTO DE DATOS Y RESEARCH

No inventar porcentajes.

Si no existen métricas reales:

utilizar etiquetas conceptuales.

Ejemplo:

```text
Finalización autónoma
vs.
Finalización guiada
```

NO:

```text
65% vs. 35%
```

a menos que esos datos sean proporcionados explícitamente.

---

# TRATAMIENTO DE FUENTES

Cuando una slide haga referencia a evidencia externa:

agregar una pequeña fuente inferior.

Estilo:

```css
font-size: 11px;
color: rgba(247,245,237,0.45);
```

No saturar la slide.

Las fuentes principales que pueden aparecer son:

* Nielsen Norman Group.
* Appcues.
* Intercom.
* Pendo.
* literatura académica sobre gamificación.
* MINCETUR.
* referencias competitivas de betting cuando sean relevantes.

No inventar citas.

---

# CONSIDERACIONES DE BETTING RESPONSABLE

La presentación debe mostrar madurez de producto.

No representar la funcionalidad como mecanismo para:

* aumentar frecuencia de apuestas;
* incrementar montos;
* aumentar depósitos;
* aumentar duración de sesión.

Presentarla como:

* aprendizaje;
* descubrimiento;
* reducción de incertidumbre;
* autonomía;
* comprensión de producto.

Si se muestran objetivos relacionados con apuestas, tratarlos como ejemplo de comprensión del flujo y no como incentivo a aumentar actividad de juego.

---

# DIFERENCIACIÓN VISUAL ENTRE SISTEMAS

## Misiones

Crema + amarillo.

Sensación:

promoción / desafío.

---

## Rachas

Violeta.

Sensación:

continuidad.

---

## Descubre Olimpo

Menta.

Sensación:

aprendizaje / exploración.

---

Esto debe mantenerse consistentemente en toda la presentación.

Nunca intercambiar sus colores arbitrariamente.

---

# COPYWRITING

Usar español.

NO utilizar términos en inglés cuando exista equivalente natural.

Preferir:

* Finalización autónoma.
* Finalización guiada.
* Guía interactiva.
* Orientación inicial.
* Descubrimiento.
* Aprendizaje.
* Objetivos.
* Progreso.
* Acción.
* Ayuda contextual.
* Primer ingreso.
* Flujo.
* Evento.
* Recompensa.

Evitar:

* onboarding en títulos principales;
* walkthrough en títulos;
* checklist;
* streak;
* guided;
* organic;
* reward;
* user flow;

salvo que sea estrictamente necesario en documentación técnica secundaria.

---

# TONO DE COPY

Directo.

Estratégico.

Claro.

No exagerado.

Evitar:

“Revolucionaremos la experiencia del usuario.”

Preferir:

“Reducimos la cantidad de aprendizaje que ocurre fuera de contexto.”

Evitar marketing.

Hablar como equipo de Producto / UX.

---

# PATRÓN DE SLIDE

Cada slide debe poder resumirse en una sola frase.

Si una slide comunica tres ideas diferentes:

dividirla.

---

# DENSIDAD

Máximo recomendado:

* título;
* una frase de contexto;
* 3–6 elementos;
* un visual principal.

No crear walls of text.

El Research completo sirve de sustento, pero la presentación debe condensarlo.

---

# HIGHLIGHTS

Usar números grandes cuando ayude:

`2–3`

PASOS INICIALES

`3–5`

OBJETIVOS POR BLOQUE

`1`

FUENTE DE VERDAD: LA ACCIÓN

Pero solamente cuando estos números estén sustentados por la propuesta.

---

# COMPONENTES REUTILIZABLES

Crear:

```jsx
<Slide />
<SlideHeader />
<StatementSlide />
<InsightCard />
<PrincipleCard />
<MetricCard />
<SystemCard />
<DiagramContainer />
<QuoteBlock />
<ProgressBar />
<ObjectiveCard />
<NavigationControls />
<SectionIndicator />
```

---

# TARJETA BASE

```jsx
<div
  className="
    rounded-[25px]
    border border-white/10
    bg-white/[0.045]
    p-8
  "
>
  {children}
</div>
```

---

# TARJETA CLARA

```jsx
<div
  className="
    rounded-[25px]
    bg-[#F7F3E8]
    text-[#17382E]
    p-8
  "
>
  {children}
</div>
```

---

# TARJETA MENTA

```jsx
<div
  className="
    rounded-[25px]
    bg-[#8FE3CF]
    text-[#12382F]
    p-8
  "
>
  {children}
</div>
```

---

# BOTONES

Principal:

menta.

Secundario:

outline crema.

No usar amarillo como CTA principal sistemáticamente.

Reservar amarillo para recompensa y highlights.

---

# OBJETIVE CARD CONCEPTUAL

Debe poder mostrar:

* estado;
* nombre;
* descripción breve;
* progreso;
* Libras;
* acción;
* ayuda.

Ejemplo:

```text
○

Realiza tu primera apuesta

Conoce el flujo básico para seleccionar
un mercado y confirmar tu apuesta.

+20 Libras

[Ir]      [Ver cómo]
```

Pero evitar hacerlo parecer una “Misión”.

No incluir:

* countdown;
* presión temporal;
* barra promocional;
* “vence hoy”.

---

# ESTADO COMPLETADO

Visual:

check menta.

Texto:

`Completado`

Reducir protagonismo del CTA.

Mostrar la recompensa de forma secundaria.

---

# ANIMACIÓN DE DIAGRAMAS

Cuando una slide con Mermaid aparece:

1. mostrar título;
2. dibujar nodo principal;
3. revelar ramas;
4. revelar conclusión.

No animar todas las líneas simultáneamente.

Duración total ideal:

aprox. 1–1.5 segundos.

---

# ANIMACIÓN DE PROGRESO

Las barras deben crecer suavemente.

```js
transition={{
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1]
}}
```

---

# ACCESIBILIDAD

Garantizar:

* contraste AA como mínimo;
* tamaño de texto legible;
* controles navegables;
* estados hover y focus diferenciados;
* no depender exclusivamente del color;
* icono + texto para estados importantes;
* diagramas legibles sin zoom excesivo.

---

# RESPONSIVE

Aunque la prioridad sea desktop 16:9, construir de manera responsiva.

Mantener:

```css
max-width: 1600px;
```

para el contenido.

En pantallas pequeñas:

* convertir columnas en stack;
* conservar jerarquía;
* evitar overflow horizontal;
* permitir scroll si fuera necesario.

---

# DETALLES DE PRESENTACIÓN

Agregar un pequeño indicador de sección superior o lateral:

```text
01 / RESEARCH
02 / OPORTUNIDAD
03 / SOLUCIÓN
04 / FUNCIONAMIENTO
05 / VALIDACIÓN
```

Debe ser discreto.

---

# TRANSICIONES DE CAPÍTULO

Las slides de cambio de capítulo pueden tener solamente:

un pequeño número:

`03`

y un título grande:

# Cómo debería funcionar

con una línea corta de apoyo.

No utilizar todas las slides como capítulo.

---

# PRIORIDAD VISUAL

En cada slide:

1. mensaje principal;
2. visual;
3. supporting detail;
4. fuente.

Nunca invertir esta jerarquía.

---

# EVITAR

No crear:

* mockups de smartphones genéricos;
* personas de stock;
* fotografías;
* ilustraciones 3D decorativas;
* dashboards ficticios;
* gráficos sin datos;
* pie charts innecesarios;
* fondos con patrones;
* gradientes fuertes;
* glow excesivo;
* tablas densas;
* más de 6 cards pequeñas en una slide;
* párrafos de más de 4 líneas;
* tipografías diferentes a Manrope;
* colores adicionales sin justificación.

---

# RESULTADO ESPERADO

Generar una presentación interactiva que se sienta:

* madura;
* rigurosa;
* estratégica;
* visualmente premium;
* fácil de exponer;
* comprensible sin leer un documento paralelo;
* claramente relacionada con UX Research;
* preparada para conversación con Producto, Tecnología, Negocio y stakeholders.

La audiencia debe terminar entendiendo claramente:

### Problema

Un tour largo no resuelve el aprendizaje contextual.

### Contexto

Olimpo ya tiene Misiones y Rachas.

### Espacio nuevo

Descubre Olimpo cubre aprendizaje y descubrimiento.

### Mecánica

Objetivos basados en acciones reales.

### Asistencia

Guías únicamente cuando el usuario las necesita.

### Motivación

Las Libras acompañan el progreso sin convertirse en el centro.

### Resultado

Mayor autonomía del usuario.

---

# MENSAJE RECTOR DE TODA LA PRESENTACIÓN

Utiliza esta idea como filtro para cada decisión visual y narrativa:

> **No queremos que los usuarios aprendan a completar tutoriales. Queremos que aprendan a utilizar Olimpo.**

Y utiliza como cierre:

# El mejor resultado del sistema será que, con el tiempo, el usuario deje de necesitar la guía.

Construye toda la presentación alrededor de esa idea.
