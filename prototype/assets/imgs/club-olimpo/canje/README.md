# Imágenes del canje

- `confirmacion-web.png`: modal de confirmación para web, imagen entregada por el usuario (598 × 408 px).
- `confirmacion-mobile.png`: modal de confirmación para mobile, imagen entregada por el usuario (312 × 424 px).

Se seleccionan con `<picture>` en `clubSuccessScreen()`. Cada imagen contiene un único botón «Ir a mis bonos»; el botón HTML transparente conserva la interacción y el nombre accesible.

- `terminos-web.png`: detalle de términos original entregado por el usuario (2058 × 939 px).
- `terminos-mobile.png`: detalle de términos original entregado por el usuario (344 × 680 px).

Se seleccionan con `<picture>` en `clubTermsScreen()` para el paso 5. Se utiliza la imagen completa, con un botón HTML transparente sobre Canjear y otro sobre la X de la imagen web. Los textos y la barra de desplazamiento dibujada forman parte del bitmap; el contenedor completo permite desplazamiento en pantallas de poca altura. El coach mark y la flecha siguen siendo elementos HTML independientes.
