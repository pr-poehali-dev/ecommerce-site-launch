import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
