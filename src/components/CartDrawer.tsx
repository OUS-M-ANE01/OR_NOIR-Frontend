import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types/Product';

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

export const CartDrawer = ({ isOpen, onClose, items, onUpdateQty, onRemove }: CartDrawerProps) => {
  const total = items.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
  const formatPrice = (price: number) => price.toLocaleString('fr-FR') + ' CFA';

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[200] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[90vw] sm:max-w-[360px] bg-dark-2 z-[201] flex flex-col transition-transform duration-300 ease-in-out border-l border-gold/15 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/15">
          <div>
            <h2 className="font-serif text-lg font-light tracking-wide">Mon Panier</h2>
            <p className="text-grey text-[10px] tracking-[1px] mt-0.5">
              {items.length === 0 ? 'Vide' : `${items.reduce((s, i) => s + i.qty, 0)} article${items.reduce((s, i) => s + i.qty, 0) > 1 ? 's' : ''}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-gold/30 flex items-center justify-center text-grey hover:text-gold hover:border-gold transition-colors cursor-pointer bg-transparent"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6">
              <ShoppingBag className="w-10 h-10 text-gold/30" strokeWidth={1} />
              <p className="font-serif text-base font-light text-grey">Votre panier est vide</p>
              <p className="text-[10px] text-grey/60 tracking-[0.5px]">Découvrez nos collections et ajoutez vos pièces préférées.</p>
              <button
                onClick={onClose}
                className="mt-1 py-2 px-6 bg-gold text-black text-[10px] tracking-[2px] uppercase font-bold cursor-pointer hover:bg-gold-light transition-colors border-none"
              >
                Voir la boutique
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gold/10">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 px-6 py-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-16 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] text-gold tracking-[2px] uppercase mb-0.5">{product.type}</div>
                    <div className="font-serif text-sm leading-snug mb-0.5 truncate">{product.name}</div>
                    <div className="text-gold text-xs font-semibold mb-2">{formatPrice(product.price)}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-gold/30">
                        <button
                          onClick={() => onUpdateQty(product.id, qty - 1)}
                          className="w-6 h-6 flex items-center justify-center text-grey hover:text-gold hover:bg-gold/10 transition-colors cursor-pointer bg-transparent border-none"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-medium">{qty}</span>
                        <button
                          onClick={() => onUpdateQty(product.id, qty + 1)}
                          className="w-6 h-6 flex items-center justify-center text-grey hover:text-gold hover:bg-gold/10 transition-colors cursor-pointer bg-transparent border-none"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(product.id)}
                        className="text-grey hover:text-red-400 transition-colors cursor-pointer bg-transparent border-none p-0.5"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/15 px-6 py-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] tracking-[2px] uppercase text-grey">Sous-total</span>
              <span className="font-serif text-base text-gold font-light">{formatPrice(total)}</span>
            </div>
            <p className="text-[10px] text-grey/60 tracking-[0.5px]">
              Livraison gratuite dès 50 000 CFA — calculée à la commande
            </p>
            <button className="w-full py-3 bg-gold text-black text-[10px] tracking-[3px] uppercase font-bold cursor-pointer hover:bg-gold-light transition-colors border-none">
              Commander
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 border border-gold/40 text-gold text-[10px] tracking-[2px] uppercase font-semibold cursor-pointer hover:border-gold transition-colors bg-transparent"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </>
  );
};
