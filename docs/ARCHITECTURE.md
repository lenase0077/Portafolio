# Architecture

Layered portfolio app. Each layer only depends on the layer below it.

```
src/
├── app/                 # Composition root (wires providers + shell)
├── features/            # Vertical slices of product behavior (React)
├── scene/               # Three.js presentation (3D study world)
├── domain/              # Pure data + rules (no React, no Three)
├── data/                # Repository adapters over domain data
├── shared/              # Cross-cutting utils, hooks, ui primitives
└── styles/              # Design tokens + global styles
```

## Layers

| Layer | Responsibility | Depends on |
|---|---|---|
| `app` | Bootstrap, providers, root layout | features, scene, shared |
| `features` | UI + interaction for one capability | domain (via data), shared |
| `scene` | 3D world, camera, atmosphere | domain (chapter coords), shared |
| `data` | `ContentRepository` over static content | domain |
| `domain` | Entities, translations, constants | nothing |
| `shared` | `rand`, hooks, small UI atoms | nothing app-specific |
| `styles` | CSS tokens and global rules | nothing |

## Design patterns

| Pattern | Where | Why |
|---|---|---|
| **Repository** | `data/contentRepository.js` | Single read API for portfolio content; swap source later (CMS/API) without touching UI |
| **Provider / Context** | `app/providers/*` | Cross-cutting state (i18n, audio, active chapter) without prop drilling |
| **Strategy** | `features/story-panel/chapterStrategies.jsx` | Each chapter is a render strategy; add chapters without `if/else` chains |
| **Factory + Singleton** | `scene/materials.js` | Build/caches Three materials once; consistent palette |
| **Facade** | `scene/StudyScene.jsx` | One entry that assembles room, furniture, atmosphere, hotspots |
| **Composite** | `scene/furniture/*` | Small scene nodes composed into the study |
| **Command-ish** | `features/overlay/*` dock buttons | Encapsulate “open chapter X” actions |

## Content flow

```
domain/content  →  ContentRepository  →  features / scene
translations    →  I18nProvider       →  any UI string
```

## Toolchain

System `node`/`npm` may be missing. Prefer the managed runtime:

```powershell
# PowerShell wrappers (see scripts/)
.\scripts\dev.ps1
.\scripts\build.ps1
.\scripts\lint.ps1
```

Or call explicitly:

```powershell
& $env:MIMO_NODE $env:MIMO_NPM run dev
```

`package.json` scripts stay standard (`npm run dev`) once Node is on PATH.

## Feature checklist when adding a chapter

1. Add content in `domain/content.js` + `domain/i18n/translations.js` if needed
2. Register hotspot/camera in `scene/config/hotspots.js`
3. Add a strategy in `features/story-panel/chapterStrategies.jsx`
4. Add a dock entry in `features/overlay/dockItems.js`
