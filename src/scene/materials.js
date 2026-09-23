/**
 * Factory + Singleton for Three.js materials.
 * Palette lives here so the study stays visually consistent.
 */
import * as THREE from 'three';

const PALETTE = Object.freeze({
  woodDark: '#3a2818',
  woodMid: '#7a4e2c',
  woodLight: '#b07a48',
  wall: '#3d3226',
  floor: '#4a3220',
  paper: '#efe2c4',
  paperEdge: '#c4956a',
  leather: '#4a301c',
  brass: '#c4a060',
  lampGlass: '#ffd89a',
  lampEmissive: '#e8a85c',
  mug: '#8a4a32',
  coffee: '#1a0e08',
  screen: '#0c1814',
  screenEmissive: '#1f4a38',
  bookA: '#5c4030',
  bookB: '#3d5c4a',
  bookC: '#6b5340',
  bookD: '#7a3e2a',
  bookE: '#2f4050',
  cork: '#a07828',
  frame: '#6a4830',
  map: '#d8c8a4',
  radio: '#4a3828',
  plant: '#3f6848',
  pot: '#9a5e38',
  rug: '#5a3a24',
  ground: '#243028',
  cream: '#e8d9b8',
  sky: '#4a6d8a',
  skyGlow: '#6a8aa8',
});

function standard(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.85,
    metalness: 0.05,
    ...opts,
  });
}

function basic(color, opts = {}) {
  return new THREE.MeshBasicMaterial({ color, ...opts });
}

const FACTORY = Object.freeze({
  woodDark: () => standard(PALETTE.woodDark, { roughness: 0.88 }),
  woodMid: () => standard(PALETTE.woodMid),
  woodLight: () => standard(PALETTE.woodLight, { roughness: 0.75 }),
  wall: () => standard(PALETTE.wall, { roughness: 0.95, metalness: 0 }),
  floor: () => standard(PALETTE.floor, { roughness: 0.88, metalness: 0.02 }),
  paper: () => standard(PALETTE.paper, { roughness: 0.9, metalness: 0 }),
  paperEdge: () => standard(PALETTE.paperEdge),
  leather: () => standard(PALETTE.leather, { roughness: 0.72 }),
  brass: () => standard(PALETTE.brass, { roughness: 0.35, metalness: 0.65 }),
  lampGlass: () =>
    standard(PALETTE.lampGlass, {
      emissive: PALETTE.lampEmissive,
      emissiveIntensity: 1.6,
      roughness: 0.25,
    }),
  mug: () => standard(PALETTE.mug, { roughness: 0.5 }),
  coffee: () => standard(PALETTE.coffee, { roughness: 0.25, metalness: 0 }),
  screen: () =>
    standard(PALETTE.screen, {
      emissive: PALETTE.screenEmissive,
      emissiveIntensity: 1.0,
      roughness: 0.2,
    }),
  bookA: () => standard(PALETTE.bookA),
  bookB: () => standard(PALETTE.bookB),
  bookC: () => standard(PALETTE.bookC),
  bookD: () => standard(PALETTE.bookD),
  bookE: () => standard(PALETTE.bookE),
  cork: () => standard(PALETTE.cork, { roughness: 0.95 }),
  frame: () => standard(PALETTE.frame, { roughness: 0.7 }),
  map: () => standard(PALETTE.map, { roughness: 0.9 }),
  radio: () => standard(PALETTE.radio, { roughness: 0.7, metalness: 0.12 }),
  plant: () => standard(PALETTE.plant),
  pot: () => standard(PALETTE.pot),
  rug: () => standard(PALETTE.rug, { roughness: 0.95 }),
  ground: () => standard(PALETTE.ground, { roughness: 1 }),
  cream: () => standard(PALETTE.cream),
  sky: () => basic(PALETTE.sky),
  skyGlow: () => basic(PALETTE.skyGlow, { transparent: true, opacity: 0.55 }),
});

const cache = new Map();

/**
 * Get a cached material (singleton per key).
 * @key {keyof typeof FACTORY}
 */
export function material(key) {
  if (!cache.has(key)) {
    const create = FACTORY[key];
    if (!create) throw new Error(`Unknown material: ${key}`);
    cache.set(key, create());
  }
  return cache.get(key);
}

/** Prebuild the common set (optional warmup). */
export function createStudyMaterials() {
  const out = {};
  for (const key of Object.keys(FACTORY)) {
    out[key] = material(key);
  }
  return out;
}

export { PALETTE };
