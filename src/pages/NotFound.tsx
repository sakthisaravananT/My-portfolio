import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* 404 Illustration */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-9xl font-bold text-gradient">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '300ms' }}>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 group"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => window.history.back()}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <p className="text-muted-foreground mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/about" 
                className="text-sm text-primary hover:text-primary-light transition-colors duration-300"
              >
                About Me
              </Link>
              <Link 
                to="/projects" 
                className="text-sm text-primary hover:text-primary-light transition-colors duration-300"
              >
                My Projects
              </Link>
              <Link 
                to="/skills" 
                className="text-sm text-primary hover:text-primary-light transition-colors duration-300"
              >
                Skills
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-primary hover:text-primary-light transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
