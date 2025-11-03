import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    if (window.location.pathname === '/') {
      scrollTo('contact');
    } else {
      navigate('/contact');
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-8 h-8 bg-accent rounded-sm" />
          <span className="text-xl font-bold">ReadyReserve</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                scrollTo('contact');
              } else {
                navigate('/contact');
              }
            }}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Contact
          </a>
          <a 
            href="#results" 
            onClick={(e) => {
              e.preventDefault();
              scrollTo('results');
            }}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Results
          </a>
        </div>

        {/* Desktop Button */}
        <Button 
          variant="outline" 
          size="default" 
          className="hidden md:flex border-foreground/20"
          onClick={handleGetStarted}
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          GET STARTED
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname === '/') {
                  scrollTo('contact');
                } else {
                  navigate('/contact');
                }
              }}
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
            >
              Contact
            </a>
            <a 
              href="#results" 
              onClick={(e) => {
                e.preventDefault();
                scrollTo('results');
              }}
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
            >
              Results
            </a>
            <Button 
              variant="outline" 
              size="default" 
              className="w-full border-foreground/20 mt-2"
              onClick={handleGetStarted}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              GET STARTED
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
