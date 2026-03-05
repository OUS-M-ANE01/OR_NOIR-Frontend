import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Snapchat icon (not in lucide-react)
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12.002 2c-1.5 0-4.373.84-4.998 4.25-.133.726-.102 1.39-.087 1.96l-.002.04c-.21.12-.48.19-.77.19-.27 0-.53-.07-.71-.18l-.03-.02c-.07-.04-.15-.06-.22-.06-.17 0-.33.1-.41.27-.1.2-.04.44.14.58.03.02.69.5 1.87.69.18.63.52 1.29 1.09 1.84-.13.07-.28.14-.45.19-.62.19-1.56.24-2.57-.38-.14-.09-.3-.1-.44-.03-.14.07-.22.21-.22.37 0 .28.19.51.46.56.04.01 1.05.23 1.62 1.26.03.05.63 1.08 2.14 1.54-.44.54-1.29 1.06-2.76 1.06-.15 0-.3.07-.39.19-.09.12-.11.28-.06.42.07.2.28.32.5.29 2.49-.38 4.08.52 4.15.57.08.05.17.08.26.08.08 0 .17-.02.24-.07.07-.05 1.66-.95 4.15-.57.22.03.43-.09.5-.29.05-.14.03-.3-.06-.42-.09-.12-.24-.19-.39-.19-1.47 0-2.32-.52-2.76-1.06 1.51-.46 2.11-1.49 2.14-1.54.57-1.03 1.58-1.25 1.62-1.26.27-.05.46-.28.46-.56 0-.16-.08-.3-.22-.37-.14-.07-.3-.06-.44.03-1.01.62-1.95.57-2.57.38-.17-.05-.32-.12-.45-.19.57-.55.91-1.21 1.09-1.84 1.18-.19 1.84-.67 1.87-.69.18-.14.24-.38.14-.58-.08-.17-.24-.27-.41-.27-.07 0-.15.02-.22.06l-.03.02c-.18.11-.44.18-.71.18-.29 0-.56-.07-.77-.19l-.002-.04c.015-.57.046-1.234-.087-1.96C16.375 2.84 13.502 2 12.002 2z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.24 8.24 0 0 0 4.84 1.55V7.05a4.85 4.85 0 0 1-1.07-.36z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gold/15 py-12 px-4 sm:px-8 lg:py-20 lg:px-15 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-8 lg:gap-15 mb-10 lg:mb-15">
        <div>
          <span className="font-serif text-[32px] font-semibold text-gold tracking-[3px] mb-2 block">
            Or Noir
          </span>
          <div className="text-[9px] tracking-[4px] text-white uppercase mb-5">
            African Jewelry
          </div>
          <p className="text-grey text-xs leading-[1.8] mb-6">
            Marque de bijoux artisanaux faits avec du bronze. Chaque pièce est conçue avec soin, 
            alliant finesse, identité et savoir-faire ancestral.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
              { icon: <SnapchatIcon />, href: '#', label: 'Snapchat' },
              { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
              { icon: <TikTokIcon />, href: '#', label: 'TikTok' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold no-underline transition-all hover:bg-gold hover:text-black hover:border-gold"
                data-cursor-hover
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-2">
            Liens Rapides
          </div>
          <div className="w-7 h-[1px] bg-gold mb-5" />
          <ul className="list-none">
            {[
              { label: 'Maison', to: '/' },
              { label: 'Boutique', to: '/boutique' },
              { label: 'À Propos', to: '/a-propos' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <li key={label} className="mb-2.5">
                <Link
                  to={to}
                  className="text-grey no-underline text-xs transition-colors tracking-[0.5px] hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-2">
            Collection
          </div>
          <div className="w-7 h-[1px] bg-gold mb-5" />
          <ul className="list-none">
            {['Boucles d\'oreilles', 'Bagues', 'Bracelets', 'Bracelets avant bras', 'Sets & Parures', 'Éditions limitées'].map((link) => (
              <li key={link} className="mb-2.5">
                <a
                  href="#"
                  className="text-grey no-underline text-xs transition-colors tracking-[0.5px] hover:text-gold"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-2">
            Service Client
          </div>
          <div className="w-7 h-[1px] bg-gold mb-5" />
          <ul className="list-none">
            {['FAQ', 'Livraison & Retours', 'Guide des tailles', 'Entretien des bijoux', 'Politique de confidentialité', 'Conditions générales'].map((link) => (
              <li key={link} className="mb-2.5">
                <a
                  href="#"
                  className="text-grey no-underline text-xs transition-colors tracking-[0.5px] hover:text-gold"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-2">
            Nous Contacter
          </div>
          <div className="w-7 h-[1px] bg-gold mb-5" />
          <div className="flex items-start gap-2.5 mb-3.5">
            <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-grey text-xs leading-[1.6]">Dakar, Sénégal</span>
          </div>
          <div className="flex items-start gap-2.5 mb-3.5">
            <Phone className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-grey text-xs leading-[1.6]">+221 77 000 00 00</span>
          </div>
          <div className="flex items-start gap-2.5 mb-3.5">
            <Mail className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-grey text-xs leading-[1.6]">contact@ornoirafricanjewelry.com</span>
          </div>
          <div className="flex items-start gap-2.5 mb-3.5">
            <Clock className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-grey text-xs leading-[1.6]">Lun–Sam : 9h–18h</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[11px] text-grey">
          Droits d'auteur 2026 © <a href="#" className="text-gold no-underline">Or Noir African Jewelry</a> — Tous droits réservés
        </div>
        <div className="flex gap-2 items-center">
          {['VISA', 'Mastercard', 'Orange Money', 'Wave'].map((payment) => (
            <span
              key={payment}
              className="bg-white/[0.08] border border-white/10 py-1 px-2.5 text-[10px] text-grey tracking-[1px] rounded-sm"
            >
              {payment}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
