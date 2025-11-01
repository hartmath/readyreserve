import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-9xl font-bold">404</h1>
          <p className="mb-8 text-2xl text-muted-foreground">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
