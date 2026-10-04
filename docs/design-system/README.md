# Sistema visual de Olimpo — inventario observado

## Estado y propósito

Base de trabajo para las guías dinámica y estática de **Descubre Olimpo**. Es un inventario de patrones observables, no una reconstrucción del código ni una fuente de verdad por encima de Figma. Cuando lleguen los componentes de Figma, Figma tendrá prioridad y esta carpeta se corregirá o ampliará.

## Alcance auditado

Captura de escritorio y lectura de reglas responsive realizada el 16 de septiembre de 2026, exclusivamente desde:

- `https://www.olimpo.bet`
- `https://www.olimpo.bet/casino`
- `https://www.olimpo.bet/torneos/20260916_TORNEOCASINERO`
- `https://www.olimpo.bet/ayuda`

No usar este inventario para inferir pantallas, rutas o patrones no presentes en esas fuentes.

## Cómo usarlo

- [`tokens-observados.md`](tokens-observados.md): color, tipografía, espaciado, radios, sombras y gradientes.
- [`componentes-observados.md`](componentes-observados.md): componentes, estados y usos.
- [`responsive-observado.md`](responsive-observado.md): diferencias web/móvil verificadas desde las reglas cargadas por el sitio.

## Decisión vigente

Para las guías, tomar del producto el lenguaje de superficies oscuras, verde de acción y tarjetas redondeadas; no copiar banners promocionales ni usar estímulos de apuesta como recurso de progreso. La guía debe ser clara, opcional y compatible con juego responsable.

Las primeras referencias de Figma ya validan dos patrones: modal de invitación con código y tarjeta de combinada. Sus detalles se documentan en [`componentes-observados.md`](componentes-observados.md) y prevalecen sobre inferencias visuales anteriores.

## Preguntas abiertas

- ¿Qué tokens, componentes y variantes ya están normalizados en Figma?
- ¿La guía se montará sobre pantallas de superficie clara, oscura o ambas?
- ¿Qué patrón existente se elegirá para el punto de entrada: banner, tarjeta, aviso contextual o mezcla?

## Próximo paso

Cruzar esta base con los componentes que entregue el equipo en Figma y producir el kit canónico para la guía.
