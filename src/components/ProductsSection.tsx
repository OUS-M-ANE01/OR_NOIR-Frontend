import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { ProductCard } from './ProductCard';
import { SectionHeader } from './SectionHeader';

interface ProductsSectionProps {
  products: Product[];
  eyebrow: string;
  title: string;
  onAddToCart: (product: Product) => void;
  onOpenModal: (id: number) => void;
  showButton?: boolean;
  bgDark?: boolean;
}

export const ProductsSection = ({
  products,
  eyebrow,
  title,
  onAddToCart,
  onOpenModal,
  showButton = false,
  bgDark = false,
}: ProductsSectionProps) => {
  return (
    <section className={`py-14 px-4 sm:px-8 lg:py-25 lg:px-15 ${bgDark ? 'bg-dark-2' : ''}`}>
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
      {showButton && (
        <div className="text-center mt-12">
          <Link
            to="/boutique"
            className="inline-block py-3 px-8 border border-gold text-gold bg-transparent text-[10px] tracking-[3px] uppercase font-semibold no-underline cursor-pointer transition-all hover:bg-gold hover:text-black"
            data-cursor-hover
          >
            Voir tous les produits →
          </Link>
        </div>
      )}
    </section>
  );
};
