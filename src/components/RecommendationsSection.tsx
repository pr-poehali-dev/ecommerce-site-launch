import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface RecommendationsSectionProps {
  recommendations: Product[];
  favorites: number[];
  onAddToCart: (productId: number) => void;
  onToggleFavorite: (productId: number) => void;
}

const RecommendationsSection = ({ 
  recommendations, 
  favorites, 
  onAddToCart, 
  onToggleFavorite 
}: RecommendationsSectionProps) => {
  if (recommendations.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Вам может понравиться</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              isRecommended={true}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
