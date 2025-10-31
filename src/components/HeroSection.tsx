import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  searchQuery: string;
  searchSuggestions: string[];
  onSearchChange: (value: string) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const HeroSection = ({ 
  searchQuery, 
  searchSuggestions, 
  onSearchChange, 
  onSuggestionClick 
}: HeroSectionProps) => {
  return (
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
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>

            {searchSuggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border p-2 animate-scale-in">
                {searchSuggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSuggestionClick(suggestion)}
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
  );
};

export default HeroSection;
