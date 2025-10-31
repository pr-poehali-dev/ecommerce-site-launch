import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
