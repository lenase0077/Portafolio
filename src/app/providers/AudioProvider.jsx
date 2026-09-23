/* Context + Provider + hook co-located by design (standard React pattern). */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo } from 'react';
import { useAudioPlayer } from '../../shared/hooks/index.js';

const AudioContext = createContext({
  playing: false,
  toggle: () => {},
  play: () => {},
  pause: () => {},
});

const LOFI_SRC = '/lofi-beat.mp3';

/** Provider for ambient lo-fi audio. */
export function AudioProvider({ children, src = LOFI_SRC }) {
  const player = useAudioPlayer(src, { loop: true, volume: 0.28 });
  const value = useMemo(
    () => ({ playing: player.playing, toggle: player.toggle, play: player.play, pause: player.pause }),
    [player.playing, player.toggle, player.play, player.pause]
  );
  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  return useContext(AudioContext);
}
