import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartItemsCount: number;
  favoritesCount: number;
  onShowCart: () => void;
  onShowFavorites: () => void;
}

const Header = ({ cartItemsCount, favoritesCount, onShowCart, onShowFavorites }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">TechStore</h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О магазине</a>
            <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onShowFavorites}
            >
              <Icon name="Heart" size={20} />
              {favoritesCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {favoritesCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onShowCart}
            >
              <Icon name="ShoppingCart" size={20} />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
