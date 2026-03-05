import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-10 left-10 z-[200] w-11 h-11 bg-gold text-black border-none cursor-pointer flex items-center justify-center text-lg transition-all ${
        isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2.5'
      }`}
      onClick={scrollToTop}
      data-cursor-hover
    >
      <ArrowUp />
    </button>
  );
};
