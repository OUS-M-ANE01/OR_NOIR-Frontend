import { Ticker } from '../components/Ticker';
import { Categories } from '../components/Categories';
import { ProductsSection } from '../components/ProductsSection';
import { FeaturedBanner } from '../components/FeaturedBanner';
import { ProcessSection } from '../components/ProcessSection';
import { Countdown } from '../components/Countdown';
import { Testimonials } from '../components/Testimonials';
import { Instagram } from '../components/Instagram';
import { Newsletter } from '../components/Newsletter';
import { Hero } from '../components/Hero';
import type { Product } from '../types/Product';
import { products, bestSellers } from '../data/products';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onOpenModal: (id: number) => void;
  onSubscribe: () => void;
}

export const HomePage = ({ onAddToCart, onOpenModal, onSubscribe }: HomePageProps) => {
  return (
    <>
      <Hero />
      <Ticker />
      <Categories />
      <div id="boutique">
        <ProductsSection
          products={products}
          eyebrow="Fraîchement Arrivés"
          title="Nouveaux Arrivants"
          onAddToCart={onAddToCart}
          onOpenModal={onOpenModal}
          showButton
          bgDark
        />
      </div>
      <FeaturedBanner />
      <ProductsSection
        products={bestSellers}
        eyebrow="Best-Sellers"
        title="Les Plus Vendus"
        onAddToCart={onAddToCart}
        onOpenModal={onOpenModal}
      />
      <ProcessSection />
      <Countdown />
      <Testimonials />
      <Instagram />
      <Newsletter onSubscribe={onSubscribe} />
    </>
  );
};
