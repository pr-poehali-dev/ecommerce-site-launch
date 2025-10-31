import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface CatalogSectionProps {
  categories: string[];
  selectedCategory: string;
  filteredProducts: Product[];
  favorites: number[];
  onCategoryChange: (category: string) => void;
  onAddToCart: (productId: number) => void;
  onToggleFavorite: (productId: number) => void;
  onProductClick: (productId: number) => void;
}

const CatalogSection = ({ 
  categories, 
  selectedCategory, 
  filteredProducts, 
  favorites, 
  onCategoryChange, 
  onAddToCart, 
  onToggleFavorite,
  onProductClick
}: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Каталог товаров</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              onCardClick={onProductClick}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Icon name="Search" size={48} className="mx-auto mb-4 opacity-50" />
            <p>Ничего не найдено</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;