import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  isRecommended?: boolean;
  onAddToCart: (productId: number) => void;
  onToggleFavorite: (productId: number) => void;
  onCardClick?: (productId: number) => void;
}

const ProductCard = ({ 
  product, 
  isFavorite, 
  isRecommended = false,
  onAddToCart, 
  onToggleFavorite,
  onCardClick
}: ProductCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group animate-fade-in cursor-pointer"
      onClick={() => onCardClick && onCardClick(product.id)}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isRecommended && (
          <Badge className="absolute top-3 left-3 bg-primary">Рекомендуем</Badge>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary">{product.category}</Badge>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(product.id);
            }}
          >
            <Icon 
              name="Heart" 
              size={18} 
              className={isFavorite ? 'fill-primary text-primary' : ''}
            />
          </Button>
        </div>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
          <Button onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product.id);
          }}>
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;