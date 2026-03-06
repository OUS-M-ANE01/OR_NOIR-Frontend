import { Link } from 'react-router-dom';

export const FeaturedBanner = () => {
  return (
    <div className="px-0 lg:px-15" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] overflow-hidden group">
        <div className="relative overflow-hidden h-[400px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&q=80"
            alt="Artisanat"
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="bg-dark-2 flex flex-col justify-center p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute -top-5 right-10 font-serif text-[300px] text-gold/5 leading-none font-light pointer-events-none select-none">
            "
          </div>
          
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-5">
            Notre Histoire
          </div>
          <h2 className="font-serif text-[38px] lg:text-[52px] font-light leading-[1.15] mb-6">
            Finesse,<br />
            <em className="italic text-gold-light">Identité</em><br />
            & Héritage
          </h2>
          <p className="text-grey leading-[1.9] text-[13px] mb-10 max-w-[380px]">
            Or Noir African Jewelry est une marque de bijoux artisanaux faits avec du bronze. 
            Chaque pièce est conçue avec soin, alliant finesse, identité et savoir-faire ancestral. 
            Nos créations célèbrent la richesse culturelle africaine à travers des formes contemporaines.
          </p>
          <div className="flex flex-wrap gap-8 lg:gap-10 mb-10 pt-8 border-t border-gold/20">
            <div>
              <div className="font-serif text-[40px] font-light text-gold leading-none">
                200+
              </div>
              <div className="text-[10px] text-grey tracking-[2px] uppercase mt-1">
                Pièces créées
              </div>
            </div>
            <div>
              <div className="font-serif text-[40px] font-light text-gold leading-none">
                5★
              </div>
              <div className="text-[10px] text-grey tracking-[2px] uppercase mt-1">
                Note moyenne
              </div>
            </div>
            <div>
              <div className="font-serif text-[40px] font-light text-gold leading-none">
                100%
              </div>
              <div className="text-[10px] text-grey tracking-[2px] uppercase mt-1">
                Bronze artisanal
              </div>
            </div>
          </div>
          <Link
            to="/a-propos"
            className="inline-block py-3.5 px-10 border border-gold text-black bg-gold text-[10px] tracking-[3px] uppercase font-semibold no-underline cursor-pointer transition-all hover:bg-transparent hover:text-gold self-start"
            data-cursor-hover
          >
            Découvrir notre histoire
          </Link>
        </div>
      </div>
    </div>
  );
};
