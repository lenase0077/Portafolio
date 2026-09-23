/**
 * Repository pattern — single read API over portfolio domain data.
 * Features and scene never import domain/content.js directly.
 */
import { chapters, contact, CHAPTER_IDS } from '../domain/content.js';
import { uiStrings, resolveLang, DEFAULT_LANG } from '../domain/i18n/strings.js';

/** @typedef {'es'|'en'} Lang */

class ContentRepository {
  /** @returns {readonly string[]} */
  listChapterIds() {
    return CHAPTER_IDS;
  }

  /** @returns {typeof contact} */
  getContact() {
    return contact;
  }

  /**
   * @param {string} id
   * @returns {(typeof chapters)[keyof typeof chapters] | null}
   */
  getChapter(id) {
    return chapters[id] ?? null;
  }

  /** @returns {(typeof chapters)[keyof typeof chapters][]} */
  listChapters() {
    return CHAPTER_IDS.map((id) => chapters[id]).filter(Boolean);
  }

  /**
   * @param {string} id
   * @param {Lang} lang
   */
  getChapterLabel(id, lang) {
    const ch = this.getChapter(id);
    return ch ? resolveLang(ch.label, lang, id) : id;
  }

  /**
   * @param {string} key dotted key into uiStrings, e.g. "explore"
   * @param {Lang} lang
   */
  getUiString(key, lang) {
    return resolveLang(uiStrings[key], lang, key);
  }

  /** @returns {typeof uiStrings} */
  getUiStrings() {
    return uiStrings;
  }

  /**
   * @param {Lang} lang
   */
  getCvHref(lang) {
    return contact.cv[lang] ?? contact.cv[DEFAULT_LANG];
  }
}

/** Singleton repository instance. */
export const contentRepository = new ContentRepository();
