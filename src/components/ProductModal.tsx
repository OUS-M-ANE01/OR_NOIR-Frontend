import { X } from 'lucide-react';
import { Product } from '../types/Product';
import { useEffect } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!product) return null;

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' CFA';
  };

  const handleAddToCart = () => {
    if (!product.soldOut) {
      onAddToCart(product);
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[500] bg-black/85 backdrop-blur-[10px] flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-dark-2 max-w-[900px] w-full sm:w-[90%] grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-transform duration-300 border border-gold/20 max-h-screen sm:max-h-[90vh] overflow-y-auto ${
          isOpen ? 'scale-100' : 'scale-90'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
        <div className="p-10 md:p-12 relative">
          <button
            className="absolute top-5 right-5 bg-transparent border-none text-grey text-xl cursor-pointer transition-colors hover:text-gold"
            onClick={onClose}
          >
            <X />
          </button>
          <div className="text-[10px] text-gold tracking-[3px] uppercase mb-3">
            {product.type}
          </div>
          <h2 className="font-serif text-[32px] font-light mb-2">
            {product.name}
          </h2>
          <div className="text-[22px] text-gold font-semibold mb-6">
            {formatPrice(product.price)}
          </div>
          <p className="text-grey text-xs leading-[1.8] mb-8">
            {product.desc}
          </p>
          <div className="mb-8">
            <div className="text-[10px] tracking-[2px] uppercase text-grey mb-2">
              Matériaux
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="border border-gold/30 text-gold text-[10px] py-1 px-2.5 tracking-[1px]">
                Bronze
              </span>
              <span className="border border-gold/30 text-gold text-[10px] py-1 px-2.5 tracking-[1px]">
                Artisanal
              </span>
              <span className="border border-gold/30 text-gold text-[10px] py-1 px-2.5 tracking-[1px]">
                Fait Main
              </span>
            </div>
          </div>
          <button
            className="w-full py-3.5 bg-gold border-none text-black font-sans text-[11px] tracking-[3px] uppercase font-bold cursor-pointer transition-colors hover:bg-gold-light disabled:bg-dark-3 disabled:text-grey disabled:cursor-not-allowed"
            onClick={handleAddToCart}
            disabled={product.soldOut}
          >
            {product.soldOut ? 'Épuisé' : 'Ajouter au Panier'}
          </button>
        </div>
      </div>
    </div>
  );
};
