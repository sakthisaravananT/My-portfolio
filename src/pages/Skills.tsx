import { useEffect, useState, useRef } from "react";
import { Code, Database, Globe, Layers, Server, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    {
      name: "HTML",
      level: 95,
      icon: <Code className="h-6 w-6" />,
      category: "Frontend"
    },
    {
      name: "CSS",
      level: 90,
      icon: <Globe className="h-6 w-6" />,
      category: "Frontend"
    },
    {
      name: "Bootstrap",
      level: 85,
      icon: <Layers className="h-6 w-6" />,
      category: "Frontend"
    },
    {
      name: "JavaScript",
      level: 88,
      icon: <Code className="h-6 w-6" />,
      category: "Frontend"
    },
    {
      name: "React.js",
      level: 92,
      icon: <Smartphone className="h-6 w-6" />,
      category: "Frontend"
    },
    {
      name: "Java (Spring Boot)",
      level: 80,
      icon: <Server className="h-6 w-6" />,
      category: "Backend"
    },
    {
      name: "MySQL",
      level: 85,
      icon: <Database className="h-6 w-6" />,
      category: "Backend"
    }
  ];

  const categories = {
    Frontend: skills.filter(skill => skill.category === "Frontend"),
    Backend: skills.filter(skill => skill.category === "Backend")
  };

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <Card 
      className={`card-hover ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>
          <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
        </div>
        
        <div className="skill-progress h-2">
          <div 
            className={`skill-progress-bar ${animateProgress ? 'animate-progress' : ''}`}
            style={{ 
              '--progress-value': `${skill.level}%`,
              width: animateProgress ? `${skill.level}%` : '0%'
            } as React.CSSProperties}
          />
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
            My <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div ref={progressRef} className="space-y-12">
          {/* Frontend Skills */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                Frontend Development
              </h2>
              <p className="text-muted-foreground">
                Creating engaging and responsive user interfaces
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.Frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Server className="h-6 w-6" />
                </div>
                Backend Development
              </h2>
              <p className="text-muted-foreground">
                Building robust and scalable server-side applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.Backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + categories.Frontend.length} />
              ))}
            </div>
          </div>

          {/* Overall Summary */}
          <Card className={`card-hover bg-gradient-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Technical Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;