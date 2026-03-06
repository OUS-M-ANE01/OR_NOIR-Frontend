import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');
  const pendingChildren = useRef(children);

  useEffect(() => {
    pendingChildren.current = children;

    // Start exit animation
    setPhase('out');

    const outTimer = setTimeout(() => {
      // Swap content mid-transition
      setDisplayChildren(pendingChildren.current);
      setPhase('in');

      const inTimer = setTimeout(() => {
        setPhase('idle');
      }, 300);

      return () => clearTimeout(inTimer);
    }, 200);

    return () => clearTimeout(outTimer);
  }, [location.pathname]);

  const styles: Record<string, React.CSSProperties> = {
    idle: { opacity: 1, transform: 'translateY(0px)' },
    out:  { opacity: 0, transform: 'translateY(12px)' },
    in:   { opacity: 0, transform: 'translateY(-8px)' },
  };

  return (
    <div
      style={{
        ...styles[phase],
        transition: 'opacity 300ms ease, transform 300ms ease',
      }}
    >
      {displayChildren}
    </div>
  );
};
