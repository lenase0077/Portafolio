# Leandro Serrano — 3D Cozy Portfolio
## Design Plan

### 1. Concept + Subject
A personal portfolio as a **cozy wooden study at dusk** — the kind of quiet workspace you find in a Ghibli film (Howl's room, Kiki's attic loft) crossed with a lo-fi study night. Not pastel, not "cute girl bedroom": warm timber, amber lamp, rain on the glass, coffee steam, a leather notebook, a corkboard of memories. The visitor sits at the desk and explores five glowing objects in the room — each opens a chapter of Leandro's life: story, projects, skills, path, and contact.

**Tone:** contemplative, warm, capable, quietly confident. Masculine cozy — materials of wood, brass, paper, wool; light of tungsten lamp and dying sky.

### 2. Inspiration DNA
| Channel | Extract |
|---|---|
| **Material** | Hand-painted / stylized soft-shading. Flat warm materials with gentle light wrap. Wood grain implied by hue variation. Matte paper. Soft emissive lamp glass. |
| **Motion** | Slow breathing. Dust motes drift. Coffee steam curls. Lamp glow pulses almost imperceptibly. Rain streaks on the window. Camera answers the mouse with lazy parallax — never snappy. |
| **Palette** | Deep warm night-wood, forest dusk outside, single amber accent. Figure-ground: warm amber glows against cool brown-green room. |
| **Composition** | Single intimate interior. Rule of thirds: window left, desk center-right, shelf right. Hotspots sit at focal intersections. Negative space in the air for floating UI. |

### 3. Palette + Typography

**Palette**
- `#14100C` — night wood (page bg)
- `#1E1812` — wall timber
- `#3A2C20` — deep wood shadow
- `#8B5E3C` — warm oak mid
- `#C4956A` — light oak / paper edge
- `#E8A85C` — lamp amber (primary accent)
- `#F5D9A0` — lamp bloom / highlight
- `#3D5C4A` — forest dusk green
- `#5B7FA3` — window dusk blue
- `#F2E6D0` — cream paper / primary text
- `#A89880` — muted parchment secondary text
- `#C45C3A` — ember rust (sparingly: badges, active states)

**Typography**
- Display: **Fraunces** (soft optical serif — literary, warm, slightly whimsical without being childish)
- Body: **DM Sans** (clean humanist, friendly, highly legible)
- Mono tags: **JetBrains Mono** for tech chips
- Scale: 11 / 13 / 15 / 18 / 22 / 32 / 48 / 72
- Weights: body 400–500, display 600–700, never ultra-black

### 4. Layout System
- Full-viewport WebGL canvas as the world (fixed).
- UI is a **different-layer overlay**: frosted warm-glass panels floating over the scene, never fighting the 3D.
- Top bar: name mark left, language + sound right — slim, translucent.
- Bottom dock: five wooden "chapter" buttons (Story / Work / Tools / Path / Hello).
- Story panel: right-side drawer (max 420px) with cream paper surface, soft wood frame, content scrolls internally.
- Spacing rhythm: 8px base (8 / 16 / 24 / 32 / 48 / 64).
- Density: one idea per panel section; generous line-height (1.65) for cozy readability.

### 5. Section Structure (chapters as room objects)

| # | Chapter | Object in room | Content |
|---|---|---|---|
| 0 | **Arrival** | Desk lamp + name card | Name, role, short invitation. CTA "look around" |
| 1 | **Story** | Open notebook | Life + career narrative (VW internship, mods, freelance, student path) |
| 2 | **Work** | Corkboard / floating project cards | FastEditor, GameStorageManager, TaskFlow, ISLANDER, mods, VW dashboard |
| 3 | **Tools** | Shelf of labeled books / pegboard | Languages, systems, data, AI — from CV skills |
| 4 | **Path** | Window + map on wall | Timeline education & experience 2019→2026 |
| 5 | **Hello** | Radio / mailbox | Goal statement + email / links + CV download |

### 6. Interaction List

| Trigger | Visual change |
|---|---|
| Mouse move | Camera parallax (lazy lerp, ±3°), dust motes drift opposite slightly |
| Hover hotspot | Soft amber glow bloom + floating label rises + slight scale 1.08 |
| Click hotspot / dock button | Camera eases toward that object; story panel slides open |
| Panel open | Fog thickens slightly; hotspot becomes "active" ring |
| Close panel | Camera returns to default desk framing |
| Language toggle (ES/EN) | All copy swaps; button flips; no reload |
| Sound toggle | Plays existing lofi-beat.mp3 at low volume |
| Idle | Lamp pulse, steam, rain, fireflies outside window continue |
| Scroll (optional in panel) | Paper texture, soft section fades |

### 7. Tech Stack
- **three.js** + **@react-three/fiber** + **@react-three/drei** — scene graph, soft lights, OrbitControls-lite custom mouse look
- **Procedural geometry** (boxes, lathe, planes) — no external GLB required; Ghibli look via flat warm materials + soft lights + fog
- **Framer Motion** — panel/UI choreography
- **React 19 + Vite + Tailwind** — existing shell
- **Custom shaders minimal** — rain lines via instanced planes; dust via Points; steam via soft sprites
- Offline-first: fonts via system stack fallback + Google fonts CDN with local fallbacks; no remote 3D assets

### 8. Priority

**Core (must)**
1. Cozy 3D study scene with warm lighting + fog + dust
2. Mouse parallax camera
3. Five interactive hotspots with labels
4. Story panels with full bilingual CV-based content
5. ES/EN language switch
6. Sound toggle (lo-fi)
7. Responsive enough on desktop; mobile gets simplified camera + bottom sheet

**Bonus (if time)**
- Coffee steam animation
- Rain on window
- Fireflies outside
- Soft hover SFX
- Resume PDF download per language
- Loading vignette ("lighting the lamp…")

### 9. Tone Lock (one sentence)
> **Cinematic-Painterly Interior × Editorial Paper UI × Stylized soft-3D: a warm masculine Ghibli study at dusk, navigated with lazy mouse look and amber hotspots.**
