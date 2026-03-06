import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="h-[95vh] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] overflow-hidden relative p-0">
      {/* Left Panel */}
      <div className="relative overflow-hidden hidden lg:block group">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
          alt="Bagues"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] brightness-[0.7] group-hover:scale-105 group-hover:brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 text-center font-serif text-lg italic text-white opacity-0 animate-[fadeUp_1s_ease_forwards_0.5s]">
          Bagues
        </div>
      </div>

      {/* Center Panel */}
      <div className="relative flex flex-col items-center justify-center z-[2] h-[90vh] lg:h-auto">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-[1] text-center px-6 sm:px-10">
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-5 sm:mb-10 opacity-0 animate-[fadeUp_1s_ease_forwards_0.6s]">
            Collection 2026
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white mb-2 opacity-0 animate-[fadeUp_1s_ease_forwards_0.3s]">
            L'Art du<br />
            <em className="italic text-gold-light">Bronze</em><br />
            Ancestral
          </h1>
          <Link
            to="/boutique"
            className="inline-block mt-4 sm:mt-2 py-3 sm:py-3.5 px-7 sm:px-10 border border-gold text-black bg-gold text-[10px] tracking-[3px] uppercase font-semibold no-underline cursor-pointer transition-all opacity-0 animate-[fadeUp_1s_ease_forwards_0.9s] hover:bg-transparent hover:text-gold"
          >
            Découvrir les Collections
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative overflow-hidden hidden lg:block group">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
          alt="Bracelets"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] brightness-[0.7] group-hover:scale-105 group-hover:brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 text-center font-serif text-lg italic text-white opacity-0 animate-[fadeUp_1s_ease_forwards_0.5s]">
          Bracelets
        </div>
      </div>
    </section>
  );
};
