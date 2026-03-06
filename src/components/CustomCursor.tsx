import { useEffect, useRef } from 'react';

// Detect touch-only devices — no custom cursor needed
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window);

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Don't run on touch devices
    if (isTouchDevice()) return;
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    const onHoverCheck = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-cursor-hover]')) onEnter();
      else onLeave();
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onHoverCheck);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const { x, y } = mouse.current;

      if (dot) {
        const size = hovering.current ? 20 : 12;
        const half = size / 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.backgroundColor = hovering.current ? 'transparent' : '#C9A84C';
        dot.style.borderWidth = hovering.current ? '2px' : '0px';
        dot.style.transform = `translate(${x - half}px, ${y - half}px)`;
      }

      // Ring trails the mouse with lerp for a smooth lag effect
      ringPos.current.x = lerp(ringPos.current.x, x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, y, 0.1);

      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onHoverCheck);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-gold hidden md:block"
        style={{ width: 12, height: 12, backgroundColor: '#C9A84C', willChange: 'transform, width, height' }}
      />
      {/* Outer ring — trails with lerp */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-gold/40 pointer-events-none z-[9998] hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
