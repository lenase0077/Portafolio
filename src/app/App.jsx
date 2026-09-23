import React, { useEffect } from 'react';
import { I18nProvider, useI18n } from './providers/I18nProvider.jsx';
import { AudioProvider } from './providers/AudioProvider.jsx';
import { ChapterProvider, useChapter } from './providers/ChapterProvider.jsx';
import StudyScene from '../scene/StudyScene.jsx';
import Overlay from '../features/overlay/Overlay.jsx';
import StoryPanel from '../features/story-panel/StoryPanel.jsx';

function DocumentTitle() {
  const { lang } = useI18n();
  useEffect(() => {
    document.title = `Leandro Serrano — ${lang === 'es' ? 'Portafolio' : 'Portfolio'}`;
  }, [lang]);
  return null;
}

function AppShell() {
  const { lang } = useI18n();
  const { activeId, select } = useChapter();

  return (
    <div className={`app-shell ${activeId ? 'panel-open' : ''}`}>
      <DocumentTitle />
      <StudyScene lang={lang} activeId={activeId} onSelect={select} />
      <Overlay />
      <StoryPanel />
    </div>
  );
}

/** Composition root: wires providers around the shell. */
export default function App() {
  return (
    <I18nProvider>
      <AudioProvider>
        <ChapterProvider>
          <AppShell />
        </ChapterProvider>
      </AudioProvider>
    </I18nProvider>
  );
}
