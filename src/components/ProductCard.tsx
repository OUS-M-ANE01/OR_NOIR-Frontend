import { Heart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenModal: (id: number) => void;
}

export const ProductCard = ({ product, onAddToCart, onOpenModal }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' CFA';
  };

  return (
    <div
      className="relative cursor-pointer group"
      data-cursor-hover
      onClick={() => onOpenModal(product.id)}
    >
      <div className="relative overflow-hidden bg-dark-2 aspect-[3/4]">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
        />
        {product.badge && (
          <div
            className={`absolute top-4 left-4 text-[9px] tracking-[2px] uppercase font-bold py-1 px-2.5 z-[2] ${
              product.soldOut
                ? 'bg-dark-3 text-grey border border-grey'
                : 'bg-gold text-black'
            }`}
          >
            {product.badge}
          </div>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-[10px] p-4 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={`flex-1 py-2.5 border-none text-[9px] tracking-[2px] uppercase font-bold cursor-pointer transition-colors ${
              product.soldOut
                ? 'bg-dark-3 text-grey cursor-not-allowed'
                : 'bg-gold text-black hover:bg-gold-light'
            }`}
            disabled={product.soldOut}
            onClick={() => !product.soldOut && onAddToCart(product)}
          >
            {product.soldOut ? 'Épuisé' : 'Ajouter au Panier'}
          </button>
          <button className="w-10 bg-transparent border border-gold/40 text-gold cursor-pointer flex items-center justify-center transition-all hover:bg-gold hover:text-black">
            <Heart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div className="py-4 pb-2">
        <div className="text-[10px] text-grey tracking-[1px] uppercase mb-2">
          {product.type}
        </div>
        <div className="font-serif text-base font-normal mb-1 text-white">
          {product.name}
        </div>
        <div className="text-[13px] font-semibold text-gold tracking-[1px]">
          {formatPrice(product.price)}
        </div>
      </div>
    </div>
  );
};
