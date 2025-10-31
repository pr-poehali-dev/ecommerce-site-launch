import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import Header from '@/components/Header';
import FavoritesSidebar from '@/components/FavoritesSidebar';
import CartSidebar from '@/components/CartSidebar';
import HeroSection from '@/components/HeroSection';
import RecommendationsSection from '@/components/RecommendationsSection';
import CatalogSection from '@/components/CatalogSection';
import AboutSection from '@/components/AboutSection';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cart, setCart] = useState<{id: number; quantity: number}[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const categories = ['Все', 'Аудио', 'Компьютеры', 'Гаджеты', 'Аксессуары'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const searchSuggestions = searchQuery.length > 0
    ? products
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 3)
        .map(p => p.name)
    : [];

  const addToCart = (productId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  const getRecommendations = (productId: number) => {
    const currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return [];
    
    return products
      .filter(p => p.id !== productId && p.category === currentProduct.category)
      .slice(0, 3);
  };

  const cartTotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const recommendations = cart.length > 0 
    ? cart.slice(0, 1).flatMap(item => getRecommendations(item.id))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={cartItemsCount}
        favoritesCount={favorites.length}
        onShowCart={() => setShowCart(!showCart)}
        onShowFavorites={() => setShowFavorites(!showFavorites)}
      />

      <FavoritesSidebar
        show={showFavorites}
        favoriteProducts={favoriteProducts}
        onClose={() => setShowFavorites(false)}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
      />

      <CartSidebar
        show={showCart}
        cart={cart}
        products={products}
        cartTotal={cartTotal}
        onClose={() => setShowCart(false)}
      />

      <HeroSection
        searchQuery={searchQuery}
        searchSuggestions={searchSuggestions}
        onSearchChange={setSearchQuery}
        onSuggestionClick={setSearchQuery}
      />

      <RecommendationsSection
        recommendations={recommendations}
        favorites={favorites}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        onProductClick={handleProductClick}
      />

      <CatalogSection
        categories={categories}
        selectedCategory={selectedCategory}
        filteredProducts={filteredProducts}
        favorites={favorites}
        onCategoryChange={setSelectedCategory}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        onProductClick={handleProductClick}
      />

      <AboutSection />

      <DeliverySection />

      <Footer />
    </div>
  );
};

export default Index;