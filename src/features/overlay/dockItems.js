import { BookOpen, Compass, Flame, Hammer, Map, Radio } from 'lucide-react';

/**
 * Command-ish dock items: each entry opens a chapter.
 * Keep icon + id mapping out of the view.
 */
export const DOCK_ITEMS = Object.freeze([
  Object.freeze({ id: 'arrival', Icon: Flame }),
  Object.freeze({ id: 'story', Icon: BookOpen }),
  Object.freeze({ id: 'work', Icon: Hammer }),
  Object.freeze({ id: 'tools', Icon: Compass }),
  Object.freeze({ id: 'path', Icon: Map }),
  Object.freeze({ id: 'hello', Icon: Radio }),
]);
