/* Context + Provider + hook co-located by design (standard React pattern). */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { DEFAULT_LANG, LANGS } from '../../domain/i18n/strings.js';
import { contentRepository } from '../../data/contentRepository.js';

const I18nContext = createContext({
  lang: DEFAULT_LANG,
  t: (key) => key,
  toggleLang: () => {},
  setLang: () => {},
});

/**
 * Provider / Context for language.
 * `t(key)` resolves UI chrome strings via ContentRepository.
 */
export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  const t = useCallback(
    (key, fallback = '') => {
      const value = contentRepository.getUiString(key, lang);
      return value === key && fallback ? fallback : value;
    },
    [lang]
  );

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const idx = LANGS.indexOf(prev);
      return LANGS[(idx + 1) % LANGS.length];
    });
  }, []);

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next);
  }, []);

  const value = useMemo(() => ({ lang, t, toggleLang, setLang }), [lang, t, toggleLang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
