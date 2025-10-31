import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться в каталог</Button>
        </div>
      </div>
    );
  }

  const images = product.additionalImages || [product.image];
  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <h1 className="text-xl font-bold">TechStore</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Badge variant="secondary" className="mb-3">{product.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
            </div>

            <div className="flex gap-3 mb-8">
              <Button size="lg" className="flex-1">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                В корзину
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Heart" size={20} />
              </Button>
            </div>

            <Card className="p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">Основные характеристики</h3>
              <div className="space-y-3">
                {product.brand && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Бренд</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Материал</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                )}
                {product.size && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Размер</span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                )}
                {product.weight && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-medium">{product.weight}</span>
                  </div>
                )}
                {product.color && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Цвет</span>
                    <span className="font-medium">{product.color}</span>
                  </div>
                )}
              </div>
            </Card>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={18} className="text-primary" />
                <span>Доставка 1-3 дня</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-primary" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Описание</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.detailedDescription || product.description}
              </p>

              {product.specifications && product.specifications.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">Технические характеристики</h3>
                  <div className="space-y-3">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="flex justify-between py-3 border-b last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Card>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Преимущества покупки</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Оригинальная продукция</h4>
                    <p className="text-sm text-muted-foreground">Только официальные товары с гарантией</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Быстрая доставка</h4>
                    <p className="text-sm text-muted-foreground">Доставим за 1-3 дня по всей России</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Возврат 14 дней</h4>
                    <p className="text-sm text-muted-foreground">Не подошёл товар? Вернём деньги</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="aspect-square overflow-hidden bg-secondary/20">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-muted-foreground mb-4">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{relatedProduct.price.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
