import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Беспроводные наушники',
    price: 12990,
    category: 'Аудио',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
    description: 'Премиум качество звука'
  },
  {
    id: 2,
    name: 'Ноутбук ProBook',
    price: 89990,
    category: 'Компьютеры',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
    description: 'Мощный и элегантный'
  },
  {
    id: 3,
    name: 'Умные часы',
    price: 24990,
    category: 'Гаджеты',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
    description: 'Следи за здоровьем'
  },
  {
    id: 4,
    name: 'Беспроводная мышь',
    price: 3990,
    category: 'Аксессуары',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/538e082c-e46e-4941-a8ec-227fee48b3df.jpg',
    description: 'Эргономичная и точная'
  },
  {
    id: 5,
    name: 'Механическая клавиатура',
    price: 8990,
    category: 'Аксессуары',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/b28143f8-a600-4efb-b181-80e4eec349e5.jpg',
    description: 'Тактильные переключатели'
  },
  {
    id: 6,
    name: 'Портативная колонка',
    price: 5990,
    category: 'Аудио',
    image: 'https://cdn.poehali.dev/projects/668aae89-1a1b-46c2-a441-3a599136289e/files/92038cd1-f886-47aa-aa91-c960ff29caef.jpg',
    description: 'Звук на ходу'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cart, setCart] = useState<{id: number; quantity: number}[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

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

  return (
    <div className="min-h-screen bg-background">
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
                onClick={() => setShowFavorites(!showFavorites)}
              >
                <Icon name="Heart" size={20} />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setShowCart(!showCart)}
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

      {showFavorites && (
        <div className="fixed inset-0 bg-black/50 z-50 animate-fade-in" onClick={() => setShowFavorites(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Избранное</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowFavorites(false)}>
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
                          <Button size="sm" onClick={() => addToCart(product.id)}>
                            <Icon name="ShoppingCart" size={14} className="mr-1" />
                            В корзину
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => toggleFavorite(product.id)}>
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
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 animate-fade-in" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Корзина</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowCart(false)}>
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
      )}

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Технологии для жизни</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Лучшие гаджеты и электроника с доставкой по всей России
            </p>

            <div className="relative">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Найти товар..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>

              {searchSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border p-2 animate-scale-in">
                  {searchSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-secondary rounded-md transition-colors flex items-center gap-2"
                    >
                      <Icon name="Search" size={16} className="text-muted-foreground" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Вам может понравиться</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cart.slice(0, 1).flatMap(item => getRecommendations(item.id)).map(product => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="aspect-square overflow-hidden bg-secondary/20 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">Рекомендуем</Badge>
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
                          toggleFavorite(product.id);
                        }}
                      >
                        <Icon 
                          name="Heart" 
                          size={18} 
                          className={favorites.includes(product.id) ? 'fill-primary text-primary' : ''}
                        />
                      </Button>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                      <Button onClick={() => addToCart(product.id)}>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="catalog" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Каталог товаров</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group animate-fade-in"
              >
                <div className="aspect-square overflow-hidden bg-secondary/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                        toggleFavorite(product.id);
                      }}
                    >
                      <Icon 
                        name="Heart" 
                        size={18} 
                        className={favorites.includes(product.id) ? 'fill-primary text-primary' : ''}
                      />
                    </Button>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                    <Button onClick={() => addToCart(product.id)}>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
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

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О магазине</h2>
            <p className="text-lg text-muted-foreground mb-8">
              TechStore — ваш надёжный партнёр в мире технологий. Мы предлагаем только
              оригинальную продукцию от проверенных производителей с официальной гарантией.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6">
                <Icon name="Shield" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">Только оригинальные товары</p>
              </div>
              <div className="p-6">
                <Icon name="Truck" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-sm text-muted-foreground">По всей России за 1-3 дня</p>
              </div>
              <div className="p-6">
                <Icon name="Headphones" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-sm text-muted-foreground">Всегда готовы помочь</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Доставка и оплата</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Package" size={24} className="text-primary" />
                  Способы доставки
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Курьерская доставка по Москве — 1-2 дня</li>
                  <li>• Доставка в регионы — 2-5 дней</li>
                  <li>• Самовывоз из пункта выдачи — бесплатно</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                  Способы оплаты
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Банковские карты (Visa, MasterCard, Мир)</li>
                  <li>• Оплата при получении</li>
                  <li>• Электронные кошельки</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">TechStore</h3>
              <p className="text-sm opacity-80">Технологии для жизни</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О компании</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Оплата</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>8 (800) 555-35-35</li>
                <li>info@techstore.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-sm opacity-80">
            <p>© 2024 TechStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;