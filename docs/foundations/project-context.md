# OLIMPO — HANDOFF DE PROYECTO
## Descubrimiento, aprendizaje progresivo y guías interactivas

> Este archivo conserva el contexto consolidado de producto. La navegación de la memoria vive ahora en [docs/README.md](../README.md): cada hallazgo nuevo debe actualizarse en su archivo temático, no añadirse automáticamente al handoff raíz.

> Nota de organización: las instrucciones antiguas de este documento que indican centralizar toda la información en `OLIMPO_DISCOVERY_HANDOFF.md` han sido sustituidas por la estructura documental actual. Las decisiones de producto aquí contenidas se mantienen vigentes salvo sustitución explícita.

---

# 1. Rol esperado del siguiente chat

Actúa como un **Senior Product Designer / UX Research Lead / Product Strategist / Information Architect / Presentation Designer** para continuar un proyecto de Olimpo relacionado con:

- orientación inicial;
- descubrimiento de funcionalidades;
- aprendizaje progresivo;
- ayuda contextual;
- guías interactivas;
- objetivos;
- progreso;
- recompensas en Libras;
- convivencia con Misiones y Rachas;
- presentación estratégica para stakeholders.

No trates este documento como una especificación inmutable. Es la **base vigente**. Si durante la conversación se toma una nueva decisión, debe reemplazar la anterior y registrarse aquí.

Al inicio del nuevo chat:
1. Lee este handoff completo.
2. Tómalo como contexto principal.
3. No vuelvas a empezar el Research desde cero salvo que se solicite.
4. No reabras decisiones ya cerradas sin una razón concreta.
5. Si aparece una contradicción nueva, señálala.
6. Mantén lenguaje de Producto/UX, no marketing.
7. Usa español para conceptos visibles del proyecto.
8. Crea o actualiza un archivo llamado `OLIMPO_DISCOVERY_HANDOFF.md` con esta información y úsalo como fuente de verdad del proyecto.
9. Cada vez que se defina algo importante, actualiza ese `.md`.
10. Mantén al final del archivo:
   - Decisiones vigentes.
   - Preguntas abiertas.
   - Cambios recientes.
   - Próximos pasos.

---

# 2. Contexto del producto

Olimpo es una plataforma de apuestas online.

El proyecto surgió inicialmente como una exploración de **Interactive Walkthrough / Tour guiado**, pero el Research llevó a ampliar la definición.

La oportunidad no se entiende ya como “hacer un tour”, sino como diseñar un:

# Sistema de descubrimiento y aprendizaje progresivo de Olimpo

El walkthrough es solo una herramienta dentro del sistema.

El sistema completo busca ayudar al usuario a:

- descubrir funcionalidades;
- comprender para qué sirven;
- saber cómo utilizarlas;
- recibir ayuda cuando la necesita;
- progresar sin ser obligado a consumir tutoriales;
- obtener reconocimiento por acciones que ya sabe realizar.

Resultado buscado:

# autonomía del usuario.

---

# 3. Problema de producto

La pregunta principal del proyecto es:

> ¿Cómo ayudamos a los usuarios de Olimpo a descubrir, comprender y utilizar funcionalidades relevantes en el momento adecuado, sin interrumpir su intención principal y permitiendo que aprendan de forma autónoma?

El problema se divide en tres capas:

## Descubrimiento
El usuario no sabe que una funcionalidad existe.

## Comprensión
El usuario sabe que existe, pero no comprende cómo utilizarla.

## Ejecución
El usuario sabe qué quiere hacer, pero no encuentra cómo llegar o necesita acompañamiento para completar el flujo.

No asumir que un tour tradicional resuelve las tres.

---

# 4. Principio de Research

La orientación inicial no debería intentar enseñar toda la plataforma.

Los tutoriales extensos y adelantados al momento de necesidad pueden:
- interrumpir;
- olvidarse;
- omitirse;
- aparecer antes de ser relevantes.

La ayuda debe acercarse al momento de intención.

Principio rector:

> Mostrar no significa enseñar.

Y:

> La ayuda funciona mejor cuando aparece en contexto y cuando el usuario puede recuperarla cuando la necesita.

Referencias de Research ya utilizadas:
- Nielsen Norman Group.
- Appcues.
- Intercom.
- Pendo.
- literatura académica sobre gamificación.
- MINCETUR / Juego Responsable.
- benchmark de betting y productos digitales.

El usuario ya cuenta además con un benchmark visual propio con imágenes. No rehacer ese benchmark salvo que se solicite; puede contrastarse contra la investigación ya realizada.

---

# 5. Solución elegida

Se descartó la necesidad de comparar múltiples soluciones.

La dirección de producto vigente es un:

# MODELO HÍBRIDO

## Primera experiencia
Existe una **orientación inicial mínima**, una sola vez.

Propuesta actual:
- 2–3 pasos.
- Muy corta.
- Su función es orientar, no enseñar todas las funcionalidades.

Debe comunicar:
1. cómo orientarse en Olimpo;
2. que existe el espacio de aprendizaje/descubrimiento;
3. dónde volver a encontrarlo.

Después:

# el resto del aprendizaje es opcional.

No deben aparecer múltiples tours obligatorios después del primer ingreso.

---

# 6. Arquitectura conceptual

La lógica central del sistema es:

# El objetivo define QUÉ.
# La guía explica CÓMO.
# La acción real determina el progreso.

Un usuario puede completar un objetivo de dos maneras.

## Finalización autónoma
El usuario ya sabe realizar la acción y la ejecuta normalmente en Olimpo.

## Finalización guiada
El usuario no sabe realizarla:
- selecciona “Ver cómo”;
- entra a una guía interactiva;
- la guía lo acompaña;
- el usuario ejecuta la acción real.

Ambos caminos deben converger en el mismo evento real.

La fuente de verdad NO es:
- haber visto una guía;
- haber llegado al último paso de un tutorial.

La fuente de verdad es:
- haber realizado la acción real.

Ejemplo:

`guia_finalizada ≠ objetivo_completado`

`apuesta_realizada = objetivo_completado`

---

# 7. Principio de reconocimiento del comportamiento previo

Si el usuario ya realizó una acción antes de entrar al espacio de aprendizaje, Olimpo debe reconocerlo.

Incorrecto:
> “Realiza tu primera acción”

cuando ya la hizo.

Correcto:
> “Ya conoces esta funcionalidad”
> Completado

Por tanto:

# estado de finalización ≠ elegibilidad de recompensa

Un objetivo puede estar:
- completado y elegible para recompensa;
- completado y no elegible para recompensa retroactiva.

Esto evita obligar a repetir acciones que el usuario ya domina.

---

# 8. Misiones, Rachas y nueva funcionalidad

Olimpo ya tiene:

## Misiones
Modelo mental:
- desafío promocional;
- condiciones;
- duración definida;
- recompensa protagonista;
- puede expirar.

## Rachas
Modelo mental:
- continuidad;
- repetición;
- comportamiento a lo largo del tiempo;
- puede romperse;
- constancia protagonista.

La nueva capa NO debe competir semánticamente con ellas.

## Nueva funcionalidad
Modelo mental:
- descubrimiento;
- aprendizaje;
- objetivos;
- progreso permanente;
- autonomía como resultado.

No debería:
- expirar como una Misión;
- resetearse como una Racha.

El aprendizaje se acumula.

---

# 9. Naming

“Misiones” está descartado para la nueva funcionalidad porque ya existe en Olimpo y tiene otro significado.

También hay riesgo con términos como:
- retos;
- tareas;
- tutoriales.

Actualmente se utiliza como **nombre conceptual / nombre de trabajo**:

# Descubre Olimpo

No está validado como naming definitivo.

Dentro de la arquitectura:

- Hub / espacio: `Descubre Olimpo` (nombre conceptual).
- Unidad: `Objetivo`.
- Ayuda: `Ver cómo`.
- Estado: `Completado`.

Evitar tratar “Descubre Olimpo” como naming aprobado hasta que se valide.

---

# 10. Libras y recompensas

Las Libras son la moneda/recompensa de la plataforma que se está considerando para reforzar el progreso.

Principio vigente:

# La recompensa acompaña. No define.

La jerarquía deseada es:

1. Descubrir.
2. Aprender.
3. Hacer con autonomía.
4. Recibir recompensa cuando corresponda.

No convertir el sistema en una nueva variante de Misiones.

No inventar valores económicos.

En diseños conceptuales usar:
- `+ X Libras`
o
- `Recompensa en Libras`

hasta que Negocio defina montos.

---

# 11. Guardrails de betting responsable

El sistema debe orientarse a:
- aprendizaje;
- descubrimiento;
- reducción de incertidumbre;
- autonomía;
- comprensión del producto.

No debe optimizar como objetivo principal:
- número de apuestas;
- monto apostado;
- frecuencia de depósitos;
- duración de sesión;
- intensidad de juego.

Cuando se utiliza “realizar una apuesta” como ejemplo, debe explicarse como **comprensión del flujo**, no como incentivo a aumentar actividad.

Evitar una relación visual directa:

`APUESTA REALIZADA → + LIBRAS`

si eso hace parecer que se está premiando directamente la actividad de juego.

La recompensa debe aparecer solo si el objetivo es elegible y ha sido validado por Producto / Negocio / Compliance.

El sistema puede incluir objetivos educativos relacionados con Juego Responsable, por ejemplo:
- conocer herramientas de control;
- saber dónde encontrarlas;
- conocer opciones de ayuda.

---

# 12. Scope de Research

Research ya realizado en el proyecto:

- definición del problema;
- progressive onboarding;
- contextual help;
- guías interactivas;
- checklists / objetivos persistentes;
- completion basado en eventos;
- aprendizaje vs. gamificación;
- convivencia con Misiones y Rachas;
- recompensas;
- responsabilidad en betting;
- accesibilidad;
- instrumentación y métricas;
- arquitectura conceptual;
- riesgos de mantenimiento;
- progresión;
- personalización futura.

Decisiones sobre fases:
- La fase de entrevistas de usuarios fue omitida.
- No se compararán múltiples soluciones conceptuales.
- Si se realiza concept test, se evaluará solo el modelo híbrido elegido.
- El usuario ya dispone de benchmark visual propio.

---

# 13. Research questions relevantes

Aunque no todas se muestran en el deck, las preguntas principales son:

1. ¿La orientación inicial permite saber dónde volver a encontrar ayuda?
2. ¿Se diferencia claramente la nueva funcionalidad de Misiones y Rachas?
3. ¿Se entiende que un objetivo puede completarse sin abrir una guía?
4. ¿Se entiende para qué sirve “Ver cómo”?
5. ¿El usuario puede volver al espacio cuando lo necesita?
6. ¿El progreso resulta comprensible?
7. ¿Las Libras funcionan como incentivo secundario sin eclipsar el aprendizaje?
8. ¿Los grupos pequeños de objetivos resultan manejables?
9. ¿Las guías ayudan a completar acciones donde existe fricción?
10. ¿La arquitectura permite reconocer comportamiento previo?
11. ¿Se evita incentivar intensidad de juego de forma problemática?

---

# 14. Hipótesis principales

- La orientación inicial debe ser corta.
- El aprendizaje posterior debe ser opcional.
- La ayuda contextual es preferible a múltiples tours forzados.
- Los objetivos deben completarse por eventos reales.
- Los usuarios que ya saben hacerlo no deben ser obligados a ver guías.
- Los objetivos deben organizarse en bloques pequeños.
- El progreso debe ser permanente.
- La nueva capa debe diferenciarse de Misiones y Rachas.
- Las Libras deben funcionar como incentivo secundario.
- El sistema puede actuar también como señal de fricción UX.
- La personalización por comportamiento puede ser una evolución posterior.

---

# 15. Arquitectura de objetivos

Un objetivo debería entrar al sistema si:
- tiene valor real;
- existe brecha de descubrimiento;
- existe brecha de comprensión;
- puede detectarse mediante un evento;
- puede enseñarse brevemente;
- la interfaz es relativamente estable;
- es apropiado incentivar la acción.

No crear objetivos solo para llenar el sistema.

No explicar UI obvia.

Enseñar capacidades, no convenciones evidentes.

---

# 16. Walkthrough / guía interactiva

La guía ideal:
- es corta;
- aparece bajo demanda;
- usa la interfaz real;
- evita cadenas de “Siguiente” cuando el usuario puede ejecutar la acción;
- puede cerrarse;
- puede recuperarse;
- no bloquea permanentemente;
- no penaliza por abandono.

Ejemplo:

“Ver cómo”
→ lleva al lugar correcto
→ señala la interacción
→ usuario realiza la acción
→ evento real
→ objetivo completado.

---

# 17. Accesibilidad y robustez

Considerar:
- teclado;
- foco;
- escape/cerrar;
- lectores de pantalla;
- contraste;
- responsive;
- zoom;
- overlays;
- headers sticky;
- estados donde un elemento no existe.

Las guías necesitan condiciones de elegibilidad y fallback.

Evitar depender de elementos DOM frágiles sin manejo de errores.

---

# 18. Instrumentación conceptual

Eventos considerados:

- `learning_hub_viewed`
- `learning_category_viewed`
- `objective_viewed`
- `objective_cta_clicked`
- `guide_started`
- `guide_step_completed`
- `guide_dismissed`
- `guide_completed`
- `objective_completed`
- `objective_completion_source`
- `reward_granted`
- `reward_seen`
- `reward_failed`

`objective_completion_source` puede distinguir:
- autónoma;
- guiada.

No usar “tutorial completion” como North Star.

Una métrica UX importante sería:
- finalización autónoma vs. finalización guiada.

Esto puede revelar fricción de producto:
si una acción necesita demasiada ayuda, quizá el flujo original necesita mejorarse.

Estas métricas fueron retiradas del deck final condensado, pero siguen siendo válidas en el Research y documentación.

---

# 19. Presentación actual

El deck se condensó de 18 a:

# 11 slides

Objetivo:
- exposición aproximada de 10–15 minutos;
- una idea dominante por slide;
- no mostrar todo el Research;
- mostrar solo lo necesario para defender la propuesta.

## Slide 01 — Portada
Título:
`Descubrimiento y aprendizaje progresivo en Olimpo`

Supporting:
`Investigación y propuesta conceptual para una experiencia de acompañamiento contextual dentro del producto.`

Label:
`ORIENTACIÓN · DESCUBRIMIENTO · APRENDIZAJE CONTEXTUAL`

No debe mostrar el label “PORTADA”.

---

## Slide 02 — Problema
Label:
`PROBLEMA`

Título:
`El problema no es enseñar todo`

Tres dimensiones:
- Descubrimiento.
- Comprensión.
- Ejecución.

No usar falsas citas de usuarios.

---

## Slide 03 — Principio
Label:
`PRINCIPIO`

Título:
`Mostrar no significa enseñar`

Explica:
- puede interrumpir;
- aparece antes de ser relevante;
- tiende a omitirse.

Conclusión:
`La ayuda funciona mejor cuando aparece en contexto y cuando el usuario puede recuperarla cuando la necesita.`

Fuente visible:
Nielsen Norman Group — Onboarding Tutorials vs. Contextual Help.

---

## Slide 04 — Cambio de enfoque
Label:
`CAMBIO DE ENFOQUE`

Título conceptual:
`De "explicar Olimpo" a "ayudar a descubrirlo"`

Incluye además:
`Olimpo ya tiene dos mecánicas de progreso`

Cards:
- Misiones.
- Rachas.

Cierra con:
`¿Dónde vive entonces el aprendizaje?`

---

## Slide 05 — Mapa del ecosistema
Label:
`MAPA DEL ECOSISTEMA`

Título:
`Un ecosistema, tres propósitos`

Debe mostrar:
OLIMPO
→ Misiones
→ Rachas
→ Descubre Olimpo.

Contenido:
Misiones:
- desafío promocional;
- condiciones;
- duración;
- recompensa protagonista.

Rachas:
- continuidad;
- repetición;
- puede romperse;
- constancia protagonista.

Descubre Olimpo:
- descubrimiento;
- aprendizaje;
- progreso permanente;
- autonomía como resultado.

Nota:
`Descubre Olimpo — nombre conceptual de trabajo`

Cierre:
`Cada sistema responde a una función diferente dentro de la experiencia.`

### Problema técnico actual de esta slide
El Mermaid se ha estado recortando por abajo.

El problema NO es conceptual.
El problema es de:
- SVG fit;
- viewBox;
- preserveAspectRatio;
- tamaño del contenedor;
- clipping/overflow.

NO abandonar Mermaid por defecto.

Solución técnica preferida:
- conservar viewBox original;
- eliminar width/height rígidos del SVG;
- `preserveAspectRatio="xMidYMid meet"`;
- `width:100%`;
- `height:100%`;
- max-width/max-height 100%;
- contenedor con ancho y alto explícitos;
- escalar simultáneamente por ancho y alto;
- revisar `overflow:hidden` en wrappers;
- validar que todo el contenido quede dentro del viewport 16:9.

Si el usuario vuelve a mostrar esta slide cortada, atacar específicamente el render del SVG, no rediseñar arbitrariamente el contenido.

---

## Slide 06 — Principio central
Label:
`PRINCIPIO CENTRAL`

Título:
`El objetivo define QUÉ. La guía explica CÓMO.`

Lógica:
Objetivo
→ sabe hacerlo / necesita ayuda
→ si necesita ayuda: Ver cómo
→ acción
→ resultado.

Supporting:
`El sistema no reconoce haber visto una guía. Reconoce haber realizado la acción real.`

---

## Slide 07 — Primer ingreso
Label:
`PRIMER INGRESO`

Título:
`¿Qué debería enseñar el primer ingreso?`

Cards:
1. Cómo orientarse en Olimpo.
2. Que existe Descubre Olimpo.
3. Dónde volver a encontrarlo.

Statement:
`Propuesta: 2–3 pasos. Una sola vez.`

Supporting:
`Después de esta orientación inicial, el resto del aprendizaje es opcional y puede retomarse cuando el usuario lo necesite.`

---

## Slide 08 — Propuesta conceptual
Label:
`PROPUESTA CONCEPTUAL`

Mostrar:
`Descubre Olimpo`

Concepto:
`Un espacio persistente de objetivos`

Supporting:
`La recompensa acompaña, pero no domina la lectura.`

Mockup conceptual:
- 1 de 4 objetivos;
- uno completado;
- otros pendientes;
- `Ir`;
- `Ver cómo`;
- `+ X Libras`;
- Juego Responsable.

Debe llevar un pequeño label:
`EJEMPLO CONCEPTUAL`

para evitar que se interprete como UI final aprobada.

---

## Slide 09 — Modelo de finalización
Label:
`MODELO DE FINALIZACIÓN`

Título:
`Dos caminos. Una misma fuente de verdad.`

Supporting:
`Ejemplo para explicar el flujo, no para incentivar actividad de juego.`

Debe mostrar un Mermaid HORIZONTAL:
- objetivo;
- decisión;
- finalización autónoma;
- finalización guiada;
- ambas convergen en APUESTA REALIZADA;
- objetivo completado.

Callouts:
`Guía finalizada ≠ objetivo completado`

`Acción realizada = objetivo completado`

Statement:
`El sistema reconoce autonomía en lugar de obligar a consumir ayuda.`

Nota:
`La recompensa solo se incorpora cuando el objetivo sea elegible y haya sido validado desde Producto / Negocio / Compliance.`

No añadir directamente:
`APUESTA REALIZADA → + LIBRAS`.

El Mermaid debe ser grande y legible.
Los labels Sí/No no deben usar rosa/violeta.

---

## Slide 10 — Regla de progreso
Label:
`REGLA DE PROGRESO`

Título:
`Si ya sabe hacerlo, Olimpo debería saberlo`

Mostrar:
- estado incorrecto;
- estado correcto.

Estado incorrecto:
`Realiza tu primera acción`

Estado correcto:
`Ya conoces esta funcionalidad`
`Completado`

Además:
`El estado de finalización es independiente de la elegibilidad de recompensa.`

Mostrar:
Completado + Elegible → Recompensa.

Completado + No elegible → Sin recompensa retroactiva.

No usar rojo para “incorrecto”.
Usar neutros/muted y verde para correcto.

---

## Slide 11 — Cierre
Label:
`CIERRE`

Título:
`Principios del sistema`

Cinco principios:

1. Progresivo.
   No enseñar todo desde el inicio.

2. Opcional.
   El usuario decide cuándo continuar.

3. Contextual.
   La ayuda aparece cuando existe intención o necesidad.

4. Basado en acciones.
   El progreso depende de acciones reales, no de guías vistas.

5. Permanente.
   El aprendizaje se acumula. No funciona como Misión ni Racha.

Bloque Libras:
`La recompensa acompaña. No define.`

Secuencia:
Descubrir
→ Aprender
→ Hacer con autonomía
→ Recibir recompensa.

Cierre:
`El objetivo no es que el usuario complete guías. El objetivo es que aprenda a utilizar Olimpo con autonomía.`

Esta es la última slide.
No añadir slide de métricas ni MVP en el deck actual.

---

# 20. Sistema visual de la presentación

Formato:
- 16:9.
- Fondo oscuro.
- Editorial.
- Premium.
- Minimalista.
- Mucho espacio negativo.
- No PowerPoint corporativo genérico.

Tipografía:
# Manrope

Cards:
- radio aproximado 25 px.

Iconografía:
- Lucide;
- lineal;
- simple;
- sin emojis.

No usar:
- stock;
- gradientes fuertes;
- neon/glow;
- glassmorphism excesivo;
- imágenes decorativas innecesarias;
- gráficos sin datos.

---

# 21. Paleta final

## Fondo principal
`#10210A`

## Fondo secundario
`#162A1E`

## Superficie oscura
`#1D3327`

## Verde principal
`#9EE86E`

Semántica:
- aprendizaje;
- progreso;
- acción;
- autonomía;
- Descubre Olimpo;
- estados positivos;
- activos.

## Amarillo
`#FFCC00`

Semántica:
- énfasis secundario;
- Olimpo;
- resultado;
- recompensa;
- hitos;
- highlights puntuales.

## Crema
`#F7F3E8`

Semántica:
- contenido neutro;
- nodos autónomos;
- superficies claras.

## Texto principal
`#F7F5ED`

## Texto secundario
`#B8C8BF`

## Texto oscuro
`#17382E`

No introducir sin autorización:
- celeste;
- cyan;
- azul;
- violeta;
- rosa;
- rojo;
- naranja.

Importante:
Un celeste `#8FE3CF` apareció en una iteración anterior, pero fue descartado.
NO volver a usarlo.

---

# 22. Lenguaje

Todo el contenido visible debe estar en español.

Preferir:
- orientación;
- descubrimiento;
- aprendizaje;
- guía;
- objetivo;
- finalización autónoma;
- finalización guiada;
- acción;
- evento;
- progreso;
- recompensa;
- ayuda contextual.

Evitar en UI/presentación:
- onboarding;
- walkthrough;
- hub;
- research;
- guided;
- organic;
- reward;
- streak.

Pueden usarse términos técnicos en código si son necesarios.

---

# 23. QA visual ya acordado

Antes de cerrar cualquier iteración del deck:
- revisar legibilidad en proyector;
- revisar contraste de textos secundarios;
- evitar labels de capítulo duplicados;
- el indicador superior ya comunica el capítulo;
- los labels interiores deben ser semánticos;
- ningún Mermaid debe quedar recortado;
- ningún contenido debe requerir zoom;
- no mostrar UI de Figma Make, botón “?”, scrollbars o editor en modo presentación.

---

# 24. Decisiones vigentes

- Se mantiene el modelo híbrido.
- Solo la orientación inicial es obligatoria.
- El aprendizaje posterior es opcional.
- El objetivo define QUÉ.
- La guía explica CÓMO.
- La acción real determina progreso.
- Se reconoce comportamiento previo.
- La elegibilidad de recompensa es independiente del completion.
- Misiones, Rachas y aprendizaje son sistemas distintos.
- “Descubre Olimpo” es nombre conceptual.
- Las Libras son incentivo secundario.
- El deck final tiene 11 slides.
- El diseño usa Manrope + verde oscuro + #9EE86E + #FFCC00 + crema.
- El deck actual no incluye métricas ni MVP como slides.
- Mermaid sigue siendo válido; si se rompe, resolver el problema técnico del SVG antes de reemplazarlo.

---

# 25. Preguntas abiertas

Mantener como abiertas hasta que el equipo las defina:

- Naming final de “Descubre Olimpo”.
- Ubicación final del acceso dentro de la navegación real.
- Objetivos exactos del MVP.
- Qué objetivos son elegibles para Libras.
- Valores de Libras.
- Reglas de elegibilidad y retroactividad.
- Qué acciones concretas necesitan guía.
- Reglas de segmentación.
- Estados técnicos definitivos.
- Criterios de Producto / Negocio / Compliance.
- Diseño final de UI del espacio.
- Instrumentación definitiva.
- Plan de validación posterior.

---

# 26. Próximo modo de trabajo

A partir del nuevo chat, continuar desde este estado.

Cuando se tome una nueva decisión:
1. indicar qué cambia;
2. indicar qué decisión reemplaza;
3. actualizar este archivo;
4. mantener coherencia con todo lo demás.

No volver a producir un “mega Research” desde cero salvo petición explícita.

Los próximos trabajos pueden incluir:
- refinamiento de alcance;
- definición de MVP;
- diagramas;
- flujos;
- estados;
- arquitectura de información;
- naming;
- contenido;
- UX writing;
- UI conceptual;
- validación;
- instrumentación;
- presentación;
- guion de exposición.

---

# 27. Principio rector final

Toda decisión debe pasar por esta pregunta:

> ¿Este elemento ayuda al usuario a descubrir, aprender o actuar con mayor autonomía?

Si no, cuestionarlo.

Y mantener siempre:

# El objetivo no es que el usuario complete guías.
# El objetivo es que aprenda a utilizar Olimpo con autonomía.

---

# 28. Nuevos insumos en revisión — septiembre de 2026

Se incorporó una propuesta inicial para aterrizar el MVP del espacio de aprendizaje. Estos puntos son **hipótesis de producto en revisión**, no decisiones definitivas:

- Crear un espacio dedicado donde vivan los objetivos de aprendizaje.
- Considerar una ruta inicial de primeros pasos sobre bonos, KYC y descubrimiento de productos.
- Explorar objetivos relacionados con Casino, Casino en vivo, Deportes virtuales y Apuestas deportivas.
- Diferenciar dos formatos de ayuda: contenido visual pregrabado y guía interactiva sobre la interfaz real.
- Evaluar una medición breve de utilidad o satisfacción después de algunas experiencias de ayuda.

## Tensiones detectadas con decisiones vigentes

- “Misión de entrada” entra en conflicto con la separación semántica ya definida para Misiones. Debe tratarse como una ruta, colección u objetivos de inicio, no como una nueva Misión.
- Exigir el ingreso a varios productos para desbloquear el espacio completo puede convertir el aprendizaje opcional en una obligación y acercarlo a una mecánica de cross-selling. La propuesta debe revisarse bajo los guardrails de autonomía y juego responsable.
- El handoff contempla cuatro productos, pero la propuesta inicial menciona una tarea 3 de 3 para tres productos y deja Apuestas deportivas en otra sección. La inclusión o exclusión de cada producto en el MVP sigue abierta.
- Una recompensa monetaria concreta no está definida. Mantener “Recompensa en Libras” o “+ X Libras” hasta contar con validación de Producto, Negocio y Compliance.

## Nomenclatura provisional en exploración

- Espacio: `Descubre Olimpo` sigue siendo nombre conceptual.
- Ruta inicial: `Primeros pasos` o `Ruta de inicio` son alternativas de trabajo; no están validadas.
- Contenido visual con GIF y texto: `Guía visual` o `Explicación visual`.
- Guía con coachmarks/tooltips y acción dentro del producto: `Guía interactiva`.

Estos nombres sustituyen provisionalmente “tour estático” y “tour dinámico” como lenguaje de Producto/UX, sin cerrar aún el naming final.

## Preguntas abiertas añadidas

- ¿La ruta inicial orienta y desbloquea contenido, o también condiciona el acceso a recompensas?
- ¿Se busca descubrir productos o incentivar su uso? La redacción y los eventos deben reflejar la primera intención.
- ¿Qué papel cumple Apuestas deportivas en el primer MVP?
- ¿Bonos y KYC son objetivos educativos permanentes, contenido de referencia o requisitos de elegibilidad?
- ¿La guía visual con GIF tendrá alternativa accesible y contenido actualizado cuando cambie la interfaz?
- ¿La medición posterior se aplicará a todas las guías o mediante muestreo para no interrumpir la experiencia?

## Próximos pasos de esta línea

1. Reformular la ruta de entrada sin llamarla Misión y sin bloquear el acceso general al aprendizaje.
2. Definir el alcance de productos y objetivos del MVP.
3. Mapear cada objetivo a: valor, brecha, evento real, tipo de ayuda, elegibilidad y riesgo.
4. Validar la nomenclatura “Guía visual” / “Guía interactiva”.
5. Diseñar una medición ligera de utilidad, separada de la finalización del objetivo.

---

# 29. Base consolidada para el primer MVP

La conversación posterior al handoff permite precisar la primera base de producto. Estas definiciones pasan a ser el estado vigente, salvo los elementos marcados como ejemplo o pendiente.

## Objetivo del MVP

El objetivo principal es ayudar a que los usuarios conozcan los distintos espacios de Olimpo, entiendan cómo funcionan y puedan utilizarlos, avanzando hacia una experiencia multiproducto.

El incentivo inicial puede acompañar este descubrimiento, pero no debe sustituir el aprendizaje ni convertir la experiencia en una obligación de juego.

## Alcance y disponibilidad

- El espacio estará disponible para todos los usuarios durante el MVP.
- No habrá segmentación inicial.
- Desde el comienzo se mostrarán todos los objetivos definidos para el MVP.
- Las incorporaciones futuras podrán comunicarse mediante notificaciones u otros puntos de entrada todavía no definidos.
- Los cuatro productos incluidos son: Casino, Casino en vivo, Deportes virtuales y Apuestas deportivas.

## Acceso y obligatoriedad

- Todos los objetivos y guías serán opcionales para el usuario.
- Para una cuenta recién creada se podrá mostrar una orientación inicial —por ejemplo, un modal— que lleve al espacio de aprendizaje. Esta es la única intervención potencialmente obligatoria y debe limitarse a orientar.
- Los objetivos accionables pueden completarse desde la experiencia normal del producto, sin pasar por el espacio de aprendizaje.
- Las guías visuales se completan únicamente desde el espacio dedicado, porque su contenido no aparece en otro lugar.
- Una guía interactiva puede iniciarse desde el espacio, pero la acción real puede completarse de manera autónoma.

## Regla de finalización

- Abrir, acercarse o iniciar un flujo no completa un objetivo.
- Un objetivo accionable se completa cuando ocurre el evento real definido para ese objetivo.
- Un objetivo de guía visual se completa cuando el usuario llega al final y confirma la finalización mediante la acción definida, por ejemplo `Finalizar guía`, `Entendido` o una acción equivalente.
- No se mostrará progreso parcial como “4 de 10” en esta primera versión. El objetivo queda pendiente o completado.
- La finalización de una guía interactiva no equivale por sí sola a completar el objetivo; debe ocurrir la acción real.

## Recompensas

- La ruta de `Primeros pasos` podrá entregar una recompensa al completar la ruta completa.
- Los objetivos individuales de las demás categorías podrán entregar una recompensa por objetivo completado.
- `50 soles` y `100 Libras` son valores de ejemplo, no montos aprobados.
- Los montos, la elegibilidad y las reglas de retroactividad siguen pendientes de validación de Producto, Negocio y Compliance.

## Éxito del MVP

Las señales principales serán:

- activación o descubrimiento de productos;
- reducción de consultas relacionadas con bonos y KYC;
- utilidad y claridad percibidas de las guías.

La medición posterior a una guía debe priorizar utilidad y claridad, idealmente mediante muestreo para no interrumpir todos los recorridos.

## Decisiones que siguen abiertas

- Ubicación permanente del espacio dentro de la navegación, especialmente en móvil.
- Forma de presentar el acceso inicial y el acceso recurrente.
- Nombre final del espacio y de la ruta inicial.
- Definición exacta de cada objetivo, su evento real y su tipo de guía.
- Montos y elegibilidad de las recompensas.
- Cómo se comunicará la disponibilidad de nuevos objetivos en futuras versiones.

## Próximo paso recomendado

Resolver primero la arquitectura de acceso al espacio y después construir una matriz del MVP con estas columnas: producto, objetivo, propósito, tipo de guía, evento de finalización, recompensa, elegibilidad y riesgo de interpretación como incentivo de juego.

---

# 30. Referencias visuales recibidas

Se recibieron referencias mixtas de experiencias de orientación, aprendizaje y ayuda contextual. No representan una dirección visual final ni deben trasladarse sus colores, marcas o estilos literalmente.

## Patrones relevantes identificados

- Modal de bienvenida con saludo, explicación breve, indicador de avance, cierre y acción principal.
- Recorrido por varias pantallas con navegación anterior/siguiente y contador de pasos.
- Coachmark contextual con fondo atenuado, foco sobre el elemento relevante y explicación breve.
- Guía sobre una interfaz de apuestas en vivo, mostrando el contexto real donde ocurre la interacción.
- Guía visual móvil basada en video o animación, con una acción clara para continuar.
- Guía visual tipo checklist, con pasos numerados y una acción final que confirma que el usuario realizó lo indicado.
- Acceso contextual desde una novedad o elemento destacado de la pantalla principal.
- Uso de un espacio o modal de orientación como puerta de entrada a una funcionalidad nueva.

## Lectura aplicada a Olimpo

Las referencias respaldan mantener dos formatos diferenciados:

### Guía visual

Contenido explicativo con imagen, GIF, video o ilustración, texto breve y navegación controlada. Debe finalizar con una confirmación explícita y no simular que una acción del producto ocurrió si no puede detectarse.

### Guía interactiva

Ayuda contextual sobre la interfaz real, con fondo atenuado, elemento destacado, instrucción concreta y acceso al lugar donde el usuario puede ejecutar la acción. La guía debe poder cerrarse, retomarse y contar con un estado alternativo si el elemento ya no existe.

## Criterios que no se adoptan automáticamente

- No copiar la estética, colores, ilustraciones o branding de las referencias.
- No usar recorridos largos solo porque incluyan contador de pasos.
- No depender únicamente de `Siguiente` cuando el usuario puede realizar una acción real.
- No usar video o GIF como evidencia de finalización de un objetivo accionable.
- No asumir que un modal inicial debe ocupar toda la pantalla o bloquear permanentemente la experiencia.

## Implicación para la base conceptual

La primera propuesta debería mostrar una combinación de:

1. Un acceso inicial breve al espacio de aprendizaje.
2. Una vista dedicada con objetivos pendientes y completados.
3. Contenido visual para conceptos como bonos o KYC.
4. Guías interactivas para acciones que se ejecutan dentro de Casino, Casino en vivo, Deportes virtuales o Apuestas deportivas.
5. Una confirmación final y una recompensa solo cuando corresponda según la regla de elegibilidad.

---

# 31. Nueva línea de trabajo: auditoría de contenido para guías visuales

Se define como próximo trabajo una auditoría del contenido existente de Olimpo para identificar información reutilizable y vacíos de contenido relacionados con:

- bonos;
- KYC y validación de identidad;
- cómo se validan y liquidan las apuestas deportivas.

El trabajo se denomina preferentemente **auditoría de contenido y rastreo funcional**. La extracción automatizada mediante Playwright es una técnica de apoyo; no se considerará suficiente por sí sola para interpretar reglas, definir UX writing o aprobar contenido legal/compliance.

## Objetivo del rastreo

Construir un inventario trazable de las fuentes existentes dentro de Olimpo, incluyendo términos y condiciones, centros de ayuda, modales, acordeones, páginas de producto y mensajes de estados o errores.

Cada hallazgo debería conservar:

- URL o ruta de origen;
- sección y contexto donde aparece;
- título o tema;
- texto visible completo;
- estado de acceso o requisito de autenticación;
- fecha de captura;
- categoría: bonos, KYC, validación deportiva u otra;
- observaciones de claridad, duplicidad, contradicción o ausencia.

## Guías prioritarias por investigar

### Bonos

Buscar definición, activación, elegibilidad, vigencia, condiciones, restricciones, liberación, cancelación, expiración y relación con Libras u otras recompensas.

### KYC

Buscar propósito, documentos, pasos, estados, tiempos, rechazos, reintentos, límites durante la validación, privacidad y canales de ayuda.

### Validación de apuestas deportivas

Buscar cómo se determinan goles, faltas, tarjetas, desempates, resultados y correcciones; qué papel cumple el proveedor; qué fuente prevalece; cuándo se actualiza el resultado y cómo se atienden discrepancias.

La guía debe explicar con precisión la relación entre Olimpo y el proveedor sin afirmar reglas que no estén respaldadas por las condiciones vigentes. Su objetivo es reducir la confusión y las quejas, no trasladar responsabilidad de manera defensiva al usuario.

## Método previsto

1. Recorrer las rutas públicas y autenticadas permitidas.
2. Expandir elementos interactivos y capturar el contenido que no aparece inicialmente.
3. Guardar texto, ruta, contexto y evidencia visual cuando ayude a entender la experiencia.
4. Normalizar y agrupar hallazgos por tema.
5. Detectar contradicciones, lenguaje ambiguo, contenido duplicado y vacíos.
6. Convertir los hallazgos confiables en estructura y UX writing para las tres guías.

El rastreo debe respetar los accesos autorizados, no intentar evadir controles y distinguir claramente entre contenido vigente, contenido no verificable y recomendación de diseño.

---

# 32. Hallazgos iniciales del sitio de Olimpo

Se realizó un primer rastreo de solo lectura sobre el sitio público y la cuenta de prueba autorizada.

## Fuentes públicas localizadas

- `Centro de Ayuda` como espacio central de consulta.
- Categoría `Bonos y promociones`.
- Categoría `Apuestas Deportivas`.
- Categoría `Mi Cuenta`.
- `Términos y Condiciones`.
- `Reglamento de Juegos` en PDF.
- `Juego responsable`.
- Promociones, torneos y páginas de producto.

En `Bonos y promociones` ya existen contenidos sobre activación, uso de bonos de Casino/En Vivo, giros gratis, máxima conversión, apuestas gratis y bonos de Deportes virtuales.

En `Apuestas Deportivas` ya existen contenidos sobre apuesta gratis, Cashout, Segunda Oportunidad, Pago Anticipado, Cuota Mejorada, Ganancia Aumentada y bonos de Deportes virtuales.

## Hallazgos autenticados

En la navegación de cuenta aparecen:

- `Mis bonos`;
- `Misiones del Olimpo`;
- `Mi perfil`;
- `Historial`;
- `Centro de ayuda`;
- `Control`.

Esto confirma que el espacio de aprendizaje deberá diferenciarse claramente de Misiones y que el menú de cuenta es una ubicación candidata, aunque todavía no una decisión de arquitectura.

## Hallazgos para la guía de validación deportiva

La interfaz pública muestra mercados asociados a goles, tarjetas, córners y asistencias. En al menos un mercado visible se indica que la resolución usa datos de Opta. Esto constituye una pista de contenido, pero no basta para redactar la guía: todavía hay que verificar en reglamentos y condiciones qué fuente prevalece para cada tipo de evento y cómo se gestionan correcciones o discrepancias.

## Hallazgos pendientes

- No se localizó aún contenido público claramente identificable sobre KYC.
- No se localizó aún una explicación completa y única sobre la fuente de validación de todos los eventos deportivos.
- Algunas rutas privadas accedidas directamente no conservaron la sesión visible y devolvieron la navegación pública. Se debe investigar la ruta de entrada autenticada antes de concluir que el contenido no existe.

Estos hallazgos son un inventario inicial, no una validación legal ni una transcripción definitiva de las reglas.
