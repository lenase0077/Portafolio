# Leandro Serrano — 3D Cozy Portfolio

Warm wooden study at dusk. Interactive Three.js portfolio with bilingual content (ES/EN).

## Quick start

System `node`/`npm` may be missing. Use the managed runtime wrappers:

```powershell
# Windows PowerShell
.\scripts\dev.ps1
.\scripts\build.ps1
.\scripts\lint.ps1
```

```powershell
# Or call npm through managed Node
& $env:MIMO_NODE $env:MIMO_NPM run dev
```

If Node is on PATH:

```bash
npm install
npm run dev
```

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for layers, design patterns, and how to add a chapter.

```
src/
  app/        # providers + composition root
  features/   # overlay, story-panel (strategy)
  scene/      # three.js study (materials factory, furniture, camera, hotspots)
  domain/     # pure content + i18n strings
  data/       # ContentRepository
  shared/     # utils, hooks, ui atoms
  styles/     # tokens, base, components
```

## Scripts

| Script | Purpose |
|---|---|
| `scripts/dev.ps1` | Vite dev server |
| `scripts/build.ps1` | Production build → `dist/` |
| `scripts/lint.ps1` | ESLint |
| `scripts/npm.ps1` | Managed npm passthrough |
