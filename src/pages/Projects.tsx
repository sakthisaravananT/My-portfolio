import { useEffect, useState } from "react";
import { ExternalLink, Github, Globe, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import project images
import tnpscAcademyImg from "@/assets/projects/tnpsc-academy.jpg";
import csgEducationImg from "@/assets/projects/csg-education.jpg";
import lungCancerImg from "@/assets/projects/lung-cancer-detection.jpg";
import housePriceImg from "@/assets/projects/house-price-prediction.jpg";
import gestureControlledDroneImg from "@/assets/projects/gesture-controlled-drone.jpg";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  type: string;
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects: Project[] = [
    {
      title: "Excellency TNPSC Academy Website",
      description: "A comprehensive educational platform for TNPSC exam preparation with modern design and responsive functionality.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      status: "Deployed",
      type: "Web Application",
      features: ["Responsive Design", "Course Management", "User Registration", "Study Materials"],
      image: tnpscAcademyImg,
      liveUrl: "https://excellencytnpsc-academy.netlify.app/",
      githubUrl: "https://github.com"
    },
    {
      title: "CSG Education System",
      description: "Academy platform with comprehensive authentication system and structured course management for enhanced learning experience.",
      technologies: ["React", "Authentication", "Course Management"],
      status: "Deployed",
      type: "Education Platform",
      features: ["User Authentication", "Structured Courses", "Progress Tracking", "Admin Panel"],
      image: csgEducationImg
    },
    {
      title: "Lung Cancer Detection using Vision Transformer",
      description: "Advanced AI model using Vision Transformer (ViT) architecture for accurate lung cancer detection from medical imaging.",
      technologies: ["Python", "Vision Transformer", "TensorFlow", "Medical Imaging"],
      status: "Completed",
      type: "AI/ML Project",
      features: ["ViT Architecture", "Medical Image Analysis", "High Accuracy", "Research Implementation"],
      image: lungCancerImg
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model for predicting house prices with Flask web interface for easy interaction and deployment.",
      technologies: ["Python", "Machine Learning", "Flask", "Data Analysis"],
      status: "Completed",
      type: "ML Web App",
      features: ["Price Prediction", "Web Interface", "Data Visualization", "Model Training"],
      image: housePriceImg
    },
    {
      title: "Gesture Controlled Drone",
      description: "Innovative drone control system using hand gestures, showcasing IoT and computer vision integration. Won 1st prize in competition.",
      technologies: ["IoT", "Computer Vision", "Hardware", "Python"],
      status: "Award Winner",
      type: "IoT Project",
      features: ["Gesture Recognition", "Real-time Control", "Computer Vision", "Hardware Integration"],
      image: gestureControlledDroneImg
    }
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <Card 
      className={`group card-hover h-full overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge Overlay */}
        <div className="absolute top-4 right-4">
          <Badge 
            className={`${
              project.status === 'Deployed' ? 'bg-success text-success-foreground shadow-soft' :
              project.status === 'Award Winner' ? 'bg-accent text-accent-foreground shadow-accent' :
              'bg-primary text-primary-foreground shadow-soft'
            } backdrop-blur-sm`}
          >
            {project.status}
          </Badge>
        </div>

        {/* Type Badge Overlay */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="backdrop-blur-sm bg-surface-elevated/90 border-border/50">
            {project.type}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Technologies */}
        <div>
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="text-xs bg-surface hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-sm text-muted-foreground">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          {project.liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 group bg-primary hover:bg-primary-dark hover:shadow-glow transition-all duration-300"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Code
            </Button>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 opacity-75"
              disabled
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Private Project
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="section-padding pt-24">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing full-stack development, AI/ML implementations, 
            and innovative solutions across various domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <Card className="bg-gradient-hero/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects and opportunities. 
                Let's create something amazing together!
              </p>
              <Button 
                size="lg"
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
              >
                <Globe className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;