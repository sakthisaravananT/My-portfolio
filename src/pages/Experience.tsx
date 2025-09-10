import { useEffect, useState } from "react";
import { Calendar, MapPin, Building2, ExternalLink, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  status: "current" | "completed";
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences: Experience[] = [
    {
      title: "Full Stack Developer Intern",
      company: "Infronex",
      location: "Remote",
      duration: "June 2025 - August 2025",
      type: "Internship",
      description: "Gaining hands-on experience in full-stack development, working on real-world projects and learning industry best practices.",
      achievements: [
        "Working on scalable web applications",
        "Collaborating with senior developers",
        "Learning modern development workflows",
        "Contributing to production codebases"
      ],
      technologies: ["React", "Node.js", "JavaScript", "Git", "Agile"],
      status: "current"
    },
    // {
    //   title: "Web Developer",
    //   company: "Excellency TNPSC Academy",
    //   location: "Project-based",
    //   duration: "June 2025",
    //   type: "Freelance Project",
    //   description: "Developed a comprehensive responsive React web application for TNPSC exam preparation, successfully deployed on Netlify.",
    //   achievements: [
    //     "Built responsive web application using React",
    //     "Implemented modern UI/UX design principles",
    //     "Successfully deployed on Netlify platform",
    //     "Delivered project on time and within scope"
    //   ],
    //   technologies: ["React", "HTML", "CSS", "JavaScript", "Netlify"],
    //   status: "completed"
    // },
    // {
    //   title: "Full Stack Developer",
    //   company: "CSG Education System",
    //   location: "Project-based",
    //   duration: "July 2025",
    //   type: "Development Project",
    //   description: "Created an educational academy platform featuring robust authentication system and structured course management capabilities.",
    //   achievements: [
    //     "Developed authentication and authorization system",
    //     "Implemented structured course management",
    //     "Created admin panel for content management",
    //     "Built responsive user interface"
    //   ],
    //   technologies: ["React", "Authentication", "Database", "Course Management"],
    //   status: "completed"
    // }
  ];

  const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
    <Card 
      className={`card-hover relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${
        experience.status === 'current' ? 'bg-accent' : 'bg-primary'
      }`} />
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="space-y-1">
            <CardTitle className="text-xl">{experience.title}</CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <Badge 
            variant="secondary"
            className={`${
              experience.status === 'current' 
                ? 'bg-accent/20 text-accent border-accent/20' 
                : 'bg-primary/20 text-primary border-primary/20'
            }`}
          >
            {experience.type}
          </Badge>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{experience.duration}</span>
            {experience.status === 'current' && (
              <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent">
                Current
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <CardDescription className="text-muted-foreground leading-relaxed mt-3">
          {experience.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Technologies */}
        <div>
          <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="text-xs bg-surface hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-2">
            <Award className="h-4 w-4" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
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
            My <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey showcasing internships, projects, and hands-on experience 
            in full-stack development and modern technologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Summary Statistics */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <Card className="bg-gradient-card border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Professional Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">2025</div>
                  <div className="text-sm text-muted-foreground">Active Year</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Project Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <h3 className="text-2xl font-bold mb-4">Ready for New Opportunities</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm actively seeking full-time opportunities and exciting projects where I can 
            contribute my skills and continue growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;