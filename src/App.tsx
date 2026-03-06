import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Announcement } from './components/Announcement';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { Toast } from './components/Toast';
import { ScrollTop } from './components/ScrollTop';
import { CustomCursor } from './components/CustomCursor';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Loader } from './components/Loader';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { BoutiquePage } from './pages/BoutiquePage';
import { AProposPage } from './pages/AProposPage';
import { ContactPage } from './pages/ContactPage';
import { products, bestSellers } from './data/products';
import type { Product } from './types/Product';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const allProducts = [...products, ...bestSellers];
  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    showToast(`✓ ${product.name} ajouté au panier`);
  };

  const handleUpdateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.product.id === id ? { ...i, qty } : i))
      );
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

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

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleNewsletter = () => {
    showToast('Inscription réussie ! Merci de rejoindre Or Noir.');
  };

  return (
    <div className="md:cursor-none">
      <CustomCursor />
      <ScrollToTop />
      <Announcement />
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage
                onAddToCart={handleAddToCart}
                onOpenModal={handleOpenModal}
                onSubscribe={handleNewsletter}
              />
            </PageTransition>
          }
        />
        <Route
          path="/boutique"
          element={
            <PageTransition>
              <BoutiquePage onAddToCart={handleAddToCart} cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
            </PageTransition>
          }
        />
        <Route path="/a-propos" element={<PageTransition><AProposPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>

      <Footer />
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onHide={() => setIsToastVisible(false)}
      />
      <ScrollTop />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </>
  );
}

export default App;
