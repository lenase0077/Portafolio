/** Deterministic PRNG — pure, stable across renders (React purity-safe). */
export function rand(seed) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Linear interpolation. */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/** Clamp value between min and max. */
export function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

/** Normalize pointer coords to -1..1. */
export function pointerToNdc(clientX, clientY, width, height) {
  return {
    x: (clientX / width) * 2 - 1,
    y: (clientY / height) * 2 - 1,
  };
}
