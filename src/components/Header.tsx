import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToCalendly = () => {
    const calendarSection = document.querySelector('.google-calendar-widget');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">
              Vocalona
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-black hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-black hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-black hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-black hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="tel:07385763583" className="flex items-center hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                07385763583
              </a>
              <a href="mailto:info@vocalona.ai" className="flex items-center hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                info@vocalona.ai
              </a>
            </div>
            <Button onClick={scrollToCalendly} className="bg-gradient-to-br from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white hover-scale">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                FAQ
              </button>
              <div className="px-3 py-2 space-y-2">
                <a href="tel:07385763583" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  07385763583
                </a>
                <a href="mailto:info@vocalona.ai" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  info@vocalona.ai
                </a>
              </div>
              <div className="px-3 py-2">
                <Button onClick={scrollToCalendly} className="bg-gradient-to-br from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;