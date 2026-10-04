# Liquidación de apuestas deportivas — base para guía visual

## Estado

**Verificado en el reglamento; requiere revisión de Compliance antes de publicación.** La guía debe explicar el proceso de forma neutral y concreta. No debe afirmar que un único proveedor decide todos los mercados.

## Qué está confirmado

| Tema | Regla observada | Fuente |
|---|---|---|
| Fuente de información | El reglamento indica que la resolución prioriza información de primera mano, retransmisiones y sitios oficiales. Si esos datos faltan o contienen un error evidente, puede recurrirse a otras fuentes públicas. | [Reglamento, B.5.1](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |
| Resultado de referencia | Como regla general, se utiliza el primer resultado oficial comunicado. Cambios posteriores no modifican una apuesta ya resuelta, salvo que exista un error claro y verificable en el primer resultado. | Misma fuente |
| Eventos anulados | Un hecho no sancionado o admitido por la autoridad competente —por ejemplo, un gol anulado— no cuenta para la resolución. | [Reglamento, B.5.3](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |
| Estadísticas de mercado | Tiros, tiros a puerta, posesión, asistencias, rebotes y otras estadísticas se interpretan según la definición publicada por la autoridad oficial competente. | [Reglamento, B.5.10](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |
| Apuestas en vivo | El reglamento indica que el marcador en vivo es informativo y puede requerir actualización; la regla de liquidación prevalece sobre una lectura momentánea de la transmisión. | [Complemento, B.1.2](https://www.olimpo.bet/static/img/pdfs/Modificaciones_al_Reglamento_de_Apuestas_Deportivas.pdf) |
| Tarjetas en fútbol | Para varios mercados cuentan las tarjetas a jugadores que están en el campo; medidas posteriores al partido y sanciones a personas fuera del campo no cuentan. En tarjetas totales, amarilla vale 1 y roja vale 2. | [Reglamento, C.13.5 y C.13.12](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |
| Asistencias | Si la federación responsable no reconoce una asistencia, esa oferta se anula en los supuestos previstos por la regla específica. | [Reglamento, C.13.18](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |
| VAR | Una revisión de VAR puede anular apuestas afectadas entre el incidente y la decisión final, o corregir una resolución si la decisión final se comunica antes de terminar el encuentro o periodo aplicable. | [Reglamento, C.13.20](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |
| Suspensiones | Las ofertas ya decididas pueden mantenerse; las pendientes pueden declararse nulas según si el evento continúa, se reinicia o el resultado no puede cambiar. | [Reglamento, B.5.5–B.5.9](https://www.olimpo.bet/static/img/pdfs/ReglamentoAADDPeru_v2.0.pdf) |

## Punto clave sobre proveedores

La interfaz pública muestra un mercado de asistencia rotulado como resuelto con datos de `Opta`. Eso demuestra que al menos un mercado muestra una fuente de datos concreta, pero no permite afirmar que Opta valida goles, faltas, tarjetas, córners y todos los demás mercados.

La formulación segura para la guía es:

> Cada mercado se resuelve con las reglas aplicables y la información de fuentes oficiales o de datos utilizadas por Olimpo para ese mercado.

No usar todavía:

> El proveedor siempre decide el resultado.

La segunda frase es más amplia de lo que las fuentes comprobadas permiten sostener.

## Riesgo de fuente detectado

El PDF de Términos Apuestas Deportivas conserva expresiones de plantilla como `<El Operador>` y marcadores editoriales. Es una fuente válida para detectar reglas, pero no debe enlazarse desde la guía como único recurso de autoservicio sin revisión legal y editorial: su lectura es extensa, técnica y presenta inconsistencias de presentación.

## Estructura recomendada de la guía

Título de trabajo: `Conoce cómo validamos las apuestas deportivas`.

1. **Cada mercado tiene una regla.** Explicar que goles, tarjetas, asistencias y córners no se interpretan de la misma forma.
2. **La liquidación sigue fuentes y reglas definidas.** Presentar fuentes oficiales, datos de mercado y reglamento como base, sin señalar un proveedor único.
3. **El marcador en vivo orienta; la liquidación confirma.** Preparar al usuario para actualizaciones, VAR y eventos anulados.
4. **Ejemplos simples.** Un gol anulado no cuenta; una asistencia debe ser reconocida por la autoridad pertinente; las tarjetas siguen reglas específicas.
5. **Dónde revisar un caso.** Enlazar a Historial / detalle de jugada, reglamento y canales de ayuda o reclamo.

## UX writing inicial

> Las apuestas deportivas se resuelven según las reglas de cada mercado y la información confirmada para el evento.

> Por eso, un marcador en vivo puede actualizarse y algunos hechos —como un gol anulado o una decisión de VAR— pueden cambiar cómo se valida una apuesta.

> Revisa el detalle de tu jugada para conocer el mercado, la regla aplicada y su resultado.

## Pendientes obligatorios antes de publicar

- Matriz por mercado: proveedor o fuente aplicable, regla de liquidación, tiempo estimado de actualización y responsable de soporte.
- Aprobación de la frase legal sobre fuente de datos y resultados posteriores.
- Confirmación del comportamiento de Historial / detalle de jugada y de la ruta de reclamo.
- Decidir si la guía debe mostrar un ejemplo de Opta; solo hacerlo si se limita explícitamente al mercado donde aparece y sigue vigente.
