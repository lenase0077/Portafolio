/**
 * Scene layout config — pure data for hotspots + camera shots.
 * Keep composition decisions out of components.
 */

export const DEFAULT_CAMERA = Object.freeze({
  pos: Object.freeze([0.35, 1.7, 3.5]),
  look: Object.freeze([0.35, 1.15, -1.35]),
});

/**
 * Each hotspot: world position of the bead + camera shot when active.
 * look is shifted slightly left so the story panel (right) does not cover the subject.
 */
export const HOTSPOTS = Object.freeze([
  Object.freeze({
    id: 'arrival',
    position: Object.freeze([1.35, 1.25, -1.15]),
    cam: Object.freeze([0.2, 1.65, 1.8]),
    look: Object.freeze([0.6, 1.15, -1.2]),
    size: 0.045,
  }),
  Object.freeze({
    id: 'story',
    position: Object.freeze([0.7, 1.18, -0.78]),
    cam: Object.freeze([0.1, 1.45, 1.1]),
    look: Object.freeze([0.5, 1.05, -0.75]),
    size: 0.045,
  }),
  Object.freeze({
    id: 'work',
    position: Object.freeze([3.35, 2.35, -3.85]),
    cam: Object.freeze([1.6, 2.1, -0.6]),
    look: Object.freeze([2.6, 2.15, -3.4]),
    size: 0.045,
  }),
  Object.freeze({
    id: 'tools',
    position: Object.freeze([3.95, 2.0, -3.15]),
    cam: Object.freeze([2.2, 1.7, -0.3]),
    look: Object.freeze([3.0, 1.55, -3.0]),
    size: 0.045,
  }),
  Object.freeze({
    id: 'path',
    position: Object.freeze([-4.15, 2.1, -3.85]),
    cam: Object.freeze([-1.8, 1.85, 0.2]),
    look: Object.freeze([-3.0, 1.9, -3.4]),
    size: 0.045,
  }),
  Object.freeze({
    id: 'hello',
    position: Object.freeze([-3.75, 0.95, -1.1]),
    cam: Object.freeze([-1.9, 1.2, 0.8]),
    look: Object.freeze([-3.0, 0.8, -1.1]),
    size: 0.045,
  }),
]);

export function getHotspot(id) {
  return HOTSPOTS.find((h) => h.id === id) ?? null;
}

export function getCameraShot(id) {
  const h = getHotspot(id);
  if (!h) return { pos: DEFAULT_CAMERA.pos, look: DEFAULT_CAMERA.look };
  return { pos: h.cam, look: h.look };
}
