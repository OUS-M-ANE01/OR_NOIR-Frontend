import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { products, bestSellers } from '../data/products';
import type { Product } from '../types/Product';

const allProducts = [...products, ...bestSellers];
const categories = ['Tous', "Boucles d'oreilles", 'Bagues', 'Bracelets', 'Sets & Parures'];

interface BoutiquePageProps {
  onAddToCart: (product: Product) => void;
  cartCount: number;
  onCartClick: () => void;
}

export const BoutiquePage = ({ onAddToCart }: BoutiquePageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(urlCategory || 'Tous');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync filter when URL param changes (e.g. navigating from Categories)
  useEffect(() => {
    setActiveCategory(urlCategory || 'Tous');
  }, [urlCategory]);

  const handleSetCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'Tous') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filtered =
    activeCategory === 'Tous'
      ? allProducts
      : allProducts.filter((p) =>
          p.type.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0])
        );

  const handleOpenModal = (id: number) => {
    const product = allProducts.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleAddToCartAndClose = (product: Product) => {
    onAddToCart(product);
    handleCloseModal();
  };

  return (
    <main>
      {/* Hero banner */}
      <div className="relative h-[220px] sm:h-[280px] flex items-end pb-10 sm:pb-16 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80)' }}
        />
        <div className="relative z-10">
          <div className="text-[10px] tracking-[4px] uppercase text-gold mb-3">Or Noir African Jewelry</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">La Boutique</h1>
          <div className="w-12 h-[1px] bg-gold mt-4" />
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-[64px] sm:top-[72px] z-50 bg-black/95 backdrop-blur-xl border-b border-gold/15 px-4 sm:px-8 lg:px-16 py-4 flex gap-4 sm:gap-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleSetCategory(cat)}
            className={`text-[11px] tracking-[2px] uppercase font-medium whitespace-nowrap transition-colors cursor-pointer bg-transparent border-none pb-1 border-b ${
              activeCategory === cat
                ? 'text-gold border-gold'
                : 'text-grey border-transparent hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-[11px] text-grey self-center whitespace-nowrap">
          {filtered.length} article{filtered.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCartAndClose}
      />
    </main>
  );
};
