import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 to 100 over ~1.8s
    const duration = 1800;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Ease-out curve: fast at start, slows near end
      const t = current / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setHiding(true);
          setTimeout(onComplete, 600);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        hiding ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Logo */}
      <div className="mb-12 flex flex-col items-center">
        <img
          src="/or-noir.png"
          alt="Or Noir African Jewelry"
          className="h-24 sm:h-32 w-auto object-contain mb-6"
        />
        <div className="text-[9px] tracking-[6px] uppercase text-grey font-sans">
          Chargement en cours
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-48 sm:w-64 h-[1px] bg-white/10 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gold transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-4 font-serif text-[11px] text-gold/60 tracking-[2px]">
        {progress}%
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
};
