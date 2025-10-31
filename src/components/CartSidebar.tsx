import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';

interface CartSidebarProps {
  show: boolean;
  cart: {id: number; quantity: number}[];
  products: Product[];
  cartTotal: number;
  onClose: () => void;
}

const CartSidebar = ({ show, cart, products, cartTotal, onClose }: CartSidebarProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 animate-fade-in" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Корзина</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 opacity-50" />
            <p>Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map(item => {
                const product = products.find(p => p.id === item.id);
                if (!product) return null;
                return (
                  <div key={item.id} className="flex gap-4 pb-4 border-b">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.quantity} × {product.price.toLocaleString('ru-RU')} ₽</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium">Итого:</span>
                <span className="text-2xl font-bold">{cartTotal.toLocaleString('ru-RU')} ₽</span>
              </div>
              <Button className="w-full" size="lg">
                Оформить заказ
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
