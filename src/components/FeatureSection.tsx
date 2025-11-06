import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  badge?: string;
}

const FeatureSection = ({ 
  title, 
  subtitle,
  description, 
  features, 
  image, 
  imageAlt, 
  reverse = false,
  badge 
}: FeatureSectionProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`relative animate-fade-in-up ${reverse ? 'lg:order-2' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl card-glow group">
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-auto transform group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
          
          {/* Content */}
          <div className={`animate-fade-in-up ${reverse ? 'lg:order-1' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-2xl p-8 md:p-12 card-glow">
              {badge && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-4">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{badge}</span>
                </div>
              )}
              
              {subtitle && (
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                  {subtitle}
                </p>
              )}
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
                {title}
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                {description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/50 transition-all duration-300">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="hero" size="lg" className="hover:scale-105 transition-all duration-300">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
