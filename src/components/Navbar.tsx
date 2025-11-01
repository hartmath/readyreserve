import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
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
  };

  const handleGetStarted = () => {
    if (window.location.pathname === '/') {
      scrollTo('contact');
    } else {
      navigate('/contact');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-accent rounded-sm" />
          <span className="text-xl font-bold">ReadyReserve</span>
        </Link>

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

        <Button 
          variant="outline" 
          size="default" 
          className="border-foreground/20"
          onClick={handleGetStarted}
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          GET STARTED
        </Button>
      </div>
    </nav>
  );
};
