import { useCallback, useEffect, useRef, useState } from 'react';
import { pointerToNdc } from '../utils/math.js';

/** Lazy pointer NDC (-1..1) via passive window listener. */
export function usePointerNdc() {
  const state = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const { x, y } = pointerToNdc(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
      state.current.x = x;
      state.current.y = y;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return state;
}

/** Toggle boolean with stable callback. */
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const set = useCallback((next) => setValue(next), []);
  return { value, toggle, set };
}

/** Looping HTMLAudioElement with cleanup. */
export function useAudioPlayer(src, { loop = true, volume = 0.3 } = {}) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [src, loop, volume]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) pause();
    else play();
  }, [playing, play, pause]);

  return { playing, play, pause, toggle };
}
