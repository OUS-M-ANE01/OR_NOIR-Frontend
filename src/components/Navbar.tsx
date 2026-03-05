import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X as CloseIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Maison', to: '/' },
    { label: 'Boutique', to: '/boutique' },
    { label: 'À Propos', to: '/a-propos' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-black/95 backdrop-blur-xl border-b border-gold/15 flex items-center justify-between px-5 sm:px-10 lg:px-16 h-[64px] sm:h-[72px]">
        <NavLink to="/" className="no-underline">
          <img src="/or-noir.png" alt="Or Noir African Jewelry" className="h-14 sm:h-18 w-auto object-contain" />
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-10 list-none">
          {links.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-white no-underline text-[11px] tracking-[2px] uppercase font-medium relative transition-colors hover:text-gold group ${isActive ? 'text-gold' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-gold transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 sm:gap-5 items-center">
          <Search className="hidden sm:block w-[18px] h-[18px] stroke-white cursor-pointer transition-all hover:stroke-gold" strokeWidth={1.5} />
          <User className="hidden sm:block w-[18px] h-[18px] stroke-white cursor-pointer transition-all hover:stroke-gold" strokeWidth={1.5} />
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <ShoppingBag className="w-[18px] h-[18px] stroke-white transition-all hover:stroke-gold" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          {/* Hamburger button */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 text-white bg-transparent border-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-[64px] sm:top-[72px] bg-black/98 backdrop-blur-xl z-[99] flex flex-col items-center justify-center gap-10 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            end={to === '/'}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `font-serif text-3xl font-light tracking-[4px] no-underline transition-colors ${
                isActive ? 'text-gold' : 'text-white hover:text-gold'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        <div className="flex gap-8 mt-4 border-t border-gold/20 pt-8">
          <Search className="w-5 h-5 stroke-grey cursor-pointer hover:stroke-gold transition-all" strokeWidth={1.5} />
          <User className="w-5 h-5 stroke-grey cursor-pointer hover:stroke-gold transition-all" strokeWidth={1.5} />
          <div className="relative cursor-pointer" onClick={() => { setIsMenuOpen(false); onCartClick(); }}>
            <ShoppingBag className="w-5 h-5 stroke-grey hover:stroke-gold transition-all" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
