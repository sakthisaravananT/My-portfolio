import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-surface-elevated/95 backdrop-blur-xl border-b border-border/50 shadow-elevation" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <Code2 className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Sakthisaravanan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  location.pathname === item.path 
                    ? "text-primary bg-primary-muted" 
                    : "text-foreground/70 hover:text-primary hover:bg-surface-elevated"
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  location.pathname === item.path ? "w-6" : "w-0 group-hover:w-6"
                }`}></div>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4 pl-4 border-l border-border/50">
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className="relative p-2 rounded-full hover:bg-surface-elevated group"
              >
                <div className="relative">
                  {darkMode ? (
                    <Sun className="h-4 w-4 text-accent group-hover:rotate-90 transition-all duration-300" />
                  ) : (
                    <Moon className="h-4 w-4 text-primary group-hover:-rotate-12 transition-all duration-300" />
                  )}
                  <div className="absolute inset-0 bg-current rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="sm"
              className="p-2 rounded-full"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              size="sm"
              className="p-2 rounded-full"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-surface-elevated/95 backdrop-blur-xl rounded-xl mt-2 border border-border/50 shadow-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block mx-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/80 hover:bg-surface hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;