# Olimpo Interactive Walkthrough

Prototipo local de `Descubre Olimpo`, con recorridos de bienvenida, guías y simulaciones de Bonos, KYC, depósito y Club Olimpo. Las acciones del prototipo no modifican una cuenta real.

## Abrir el prototipo

1. Instala Node.js.
2. Desde la raíz del repositorio, ejecuta `npx serve prototype -l 4173`.
3. Abre `http://127.0.0.1:4173/#descubre`.

El código principal está en `prototype/index.html`, `prototype/styles.css`, `prototype/app.js` y `prototype/bonus-tour.*`. La documentación vigente comienza en [`OLIMPO_DISCOVERY_HANDOFF.md`](OLIMPO_DISCOVERY_HANDOFF.md) y [`docs/README.md`](docs/README.md).

## Otras carpetas

- `presentations/`: fuentes de las presentaciones Vite. En cada proyecto, ejecuta `pnpm install` y `pnpm dev`.
- `videos/`: materiales fuente de las animaciones. El archivo `.mov` grande usa Git LFS; instala Git LFS antes de clonar para recibirlo completo.
- `tmp/pdfs/`: referencias PDF conservadas para la auditoría.

No se versionan dependencias instaladas, builds ni perfiles temporales del navegador.
