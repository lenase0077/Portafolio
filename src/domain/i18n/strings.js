/** UI chrome strings — domain-level copy, not component internals. */
export const uiStrings = Object.freeze({
  langToggle: { es: 'EN', en: 'ES' },
  soundOn: { es: 'Sonido', en: 'Sound' },
  soundOff: { es: 'Silencio', en: 'Muted' },
  close: { es: 'Cerrar', en: 'Close' },
  explore: { es: 'Mirar alrededor', en: 'Look around' },
  loading: { es: 'Encendiendo la lámpara…', en: 'Lighting the lamp…' },
  chapters: { es: 'Capítulos', en: 'Chapters' },
  openToWork: { es: 'Disponible para trabajar', en: 'Open to work' },
});

export const LANGS = Object.freeze(['es', 'en']);
export const DEFAULT_LANG = 'es';

/**
 * Resolve a bilingual field `{ es, en }` for a language.
 * @param {{es: string, en: string} | string} value
 * @param {'es'|'en'} lang
 * @param {string} [fallback]
 */
export function resolveLang(value, lang, fallback = '') {
  if (value == null) return fallback;
  if (typeof value === 'string') return value;
  return value[lang] ?? value.en ?? fallback;
}
