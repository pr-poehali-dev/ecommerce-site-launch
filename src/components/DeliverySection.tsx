import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
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
  );
};

export default DeliverySection;
