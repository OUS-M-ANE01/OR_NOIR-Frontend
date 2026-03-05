import { useEffect, useState } from 'react';

export const Countdown = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endTime = Date.now() + 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const diff = Math.max(0, endTime - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ hours: h, minutes: m, seconds: s });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="relative overflow-hidden py-14 px-4 sm:px-8 lg:py-25 lg:px-15" id="contact">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.2]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
        }}
      />
      <div className="relative z-[1] text-center">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light mb-2">
          Vente Flash Exclusive
        </h2>
        <p className="text-gold text-xs tracking-[3px] uppercase mb-12">
          Offres limitées — Profitez-en avant la fin
        </p>
        <div className="flex justify-center gap-4 sm:gap-10 mb-12">
          <div className="text-center">
            <div className="font-serif text-[48px] sm:text-[72px] font-light leading-none text-gold bg-gold/10 border border-gold/30 w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] flex items-center justify-center mb-2">
              {pad(time.hours)}
            </div>
            <div className="text-[9px] tracking-[3px] uppercase text-grey">
              Heures
            </div>
          </div>
          <div className="font-serif text-[48px] sm:text-[72px] text-gold opacity-30 leading-[72px] sm:leading-[100px]">
            :
          </div>
          <div className="text-center">
            <div className="font-serif text-[48px] sm:text-[72px] font-light leading-none text-gold bg-gold/10 border border-gold/30 w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] flex items-center justify-center mb-2">
              {pad(time.minutes)}
            </div>
            <div className="text-[9px] tracking-[3px] uppercase text-grey">
              Minutes
            </div>
          </div>
          <div className="font-serif text-[48px] sm:text-[72px] text-gold opacity-30 leading-[72px] sm:leading-[100px]">
            :
          </div>
          <div className="text-center">
            <div className="font-serif text-[48px] sm:text-[72px] font-light leading-none text-gold bg-gold/10 border border-gold/30 w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] flex items-center justify-center mb-2">
              {pad(time.seconds)}
            </div>
            <div className="text-[9px] tracking-[3px] uppercase text-grey">
              Secondes
            </div>
          </div>
        </div>
        <a
          href="/boutique"
          className="inline-block py-3.5 px-10 border border-gold text-black bg-gold text-[10px] tracking-[3px] uppercase font-semibold no-underline cursor-pointer transition-all hover:bg-transparent hover:text-gold"
          data-cursor-hover
        >
          Acheter Maintenant
        </a>
      </div>
    </section>
  );
};
