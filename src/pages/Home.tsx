import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = () => {
    // Create a downloadable resume link
    const link = document.createElement('a');
    link.href = 'public/Sakthisaravanan Resume (3).pdf'; // You can add the actual resume file to public folder
    link.download = 'Sakthisaravanan_T_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 container-custom section-padding min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Sakthisaravanan T</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Full Stack java Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Full Stack Developer with experience in scalable applications, frontend & backend expertise, 
              ensuring optimized performance. Passionate about creating innovative solutions and learning 
              new technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-hero hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View My Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadResume}
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="mailto:sakthisaravana101@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/sakthi-saravanan-t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/sakthisaravanan-t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Floating Elements */}
          <div className={`hidden lg:block ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 p-6 bg-gradient-card rounded-lg shadow-large animate-float">
                <h3 className="font-semibold text-primary">5+ Projects</h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
              
              <div className="absolute top-32 left-0 p-6 bg-gradient-card rounded-lg shadow-large animate-float" style={{ animationDelay: '1s' }}>
                <h3 className="font-semibold text-secondary">B.Tech AI & DS</h3>
                <p className="text-sm text-muted-foreground">2021-2025</p>
              </div>
              
              <div className="absolute bottom-0 right-8 p-6 bg-gradient-card rounded-lg shadow-large animate-float" style={{ animationDelay: '2s' }}>
                <h3 className="font-semibold text-accent">Full Stack</h3>
                <p className="text-sm text-muted-foreground">Developer</p>
              </div>

              {/* Background Decoration */}
              <div className="w-96 h-96 bg-gradient-hero opacity-20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Home;