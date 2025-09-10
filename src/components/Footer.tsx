import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom section-padding py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Sakthisaravanan T</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating scalable applications 
              and delivering optimized performance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:sakthisaravana101@gmail.com"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/sakthi-saravanan-t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sakthisaravanan-t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Sakthisaravanan T. Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
            and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;