import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
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

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      scrollTo('features');
    } else {
      navigate('/#features');
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      scrollTo('contact');
    } else {
      navigate('/contact');
    }
  };

  return (
    <footer id="contact" className="py-12 sm:py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-8 h-8 bg-accent rounded-sm" />
              <span className="text-xl font-bold">ReadyReserve</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              ReadyReserve™ works every lead—engaging, following up, and booking appointments, 24/7.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" onClick={handleFeaturesClick} className="hover:text-accent transition-colors">Features</a></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><a href="#contact" onClick={handleContactClick} className="hover:text-accent transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ReadyReserve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
