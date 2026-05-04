import React, { useEffect, useRef } from 'react';

const CustomCursor = ({ isCozy }) => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
    };

    const onEnterInteractive = () => {
      if (ring) {
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'var(--accent-b)';
      }
    };

    const onLeaveInteractive = () => {
      if (ring) {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'var(--accent-a)';
      }
    };

    let rafId;
    const SMOOTHING = 0.35;

    const animate = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      posRef.current.x += (tx - posRef.current.x) * SMOOTHING;
      posRef.current.y += (ty - posRef.current.y) * SMOOTHING;

      if (ring) {
        ring.style.transform = `translate3d(${posRef.current.x - 16}px, ${posRef.current.y - 16}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    const addInteractiveListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };

    addInteractiveListeners();
    const observer = new MutationObserver(() => {
      addInteractiveListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [isCozy]);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot hidden md:block"
        style={{ backgroundColor: 'var(--accent-a)' }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring hidden md:block"
        style={{ borderColor: 'var(--accent-a)' }}
      />
    </>
  );
};

export default CustomCursor;
