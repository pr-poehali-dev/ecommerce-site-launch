import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';

interface FavoritesSidebarProps {
  show: boolean;
  favoriteProducts: Product[];
  onClose: () => void;
  onAddToCart: (productId: number) => void;
  onToggleFavorite: (productId: number) => void;
}

const FavoritesSidebar = ({ 
  show, 
  favoriteProducts, 
  onClose, 
  onAddToCart, 
  onToggleFavorite 
}: FavoritesSidebarProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 animate-fade-in" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Избранное</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Icon name="Heart" size={48} className="mx-auto mb-4 opacity-50" />
            <p>Пока нет избранных товаров</p>
          </div>
        ) : (
          <div className="space-y-4">
            {favoriteProducts.map(product => (
              <Card key={product.id} className="p-4">
                <div className="flex gap-4">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <p className="text-lg font-bold mb-2">{product.price.toLocaleString('ru-RU')} ₽</p>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => onAddToCart(product.id)}>
                        <Icon name="ShoppingCart" size={14} className="mr-1" />
                        В корзину
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => onToggleFavorite(product.id)}>
                        <Icon name="X" size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesSidebar;
