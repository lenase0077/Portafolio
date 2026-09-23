/* Context + Provider + hook co-located by design (standard React pattern). */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ChapterContext = createContext({
  activeId: null,
  arrived: false,
  select: () => {},
  close: () => {},
  arrive: () => {},
  toggle: () => {},
});

/** Provider for which chapter is open + first-arrival veil. */
export function ChapterProvider({ children }) {
  const [activeId, setActiveId] = useState(null);
  const [arrived, setArrived] = useState(false);

  const select = useCallback((id) => setActiveId(id), []);
  const close = useCallback(() => setActiveId(null), []);
  const arrive = useCallback(() => setArrived(true), []);
  const toggle = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const value = useMemo(
    () => ({ activeId, arrived, select, close, arrive, toggle }),
    [activeId, arrived, select, close, arrive, toggle]
  );
  return <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>;
}

export function useChapter() {
  return useContext(ChapterContext);
}
