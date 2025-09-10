import { useEffect, useState } from "react";
import { GraduationCap, Award, Globe, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = {
    degree: "B.Tech in AI & Data Science",
    institution: "Nandha Engineering College",
    duration: "Oct 2021 - May 2025",
    location: "Erode, Tamil Nadu"
  };

  const languages = ["English", "Tamil"];
  
  const certifications = [
    "Infosys Springboard AI Primer"
  ];

  const awards = [
    "1st Prize for Gesture Controlled Drone"
  ];

  return (
    <section className="section-padding pt-24">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and achievements in the tech world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Main Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am currently pursuing my B.Tech in Artificial Intelligence & Data Science at 
                  Nandha Engineering College, where I've been developing my expertise in cutting-edge 
                  technologies since October 2021.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My passion lies in creating scalable applications that deliver optimized performance. 
                  I have experience working with both frontend and backend technologies, allowing me 
                  to build comprehensive full-stack solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm constantly learning and adapting to new technologies, with a particular interest 
                  in AI, machine learning, and modern web development frameworks. My goal is to create 
                  innovative solutions that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Erode, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ExternalLink className="h-4 w-4" />
                  <a 
                    href="https://linkedin.com/in/sakthi-saravanan-t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    linkedin.com/in/sakthi-saravanan-t
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Achievements */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            
            {/* Education */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">{education.degree}</h3>
                  <p className="text-foreground font-medium">{education.institution}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge 
                      key={language}
                      variant="secondary" 
                      className="px-3 py-1 bg-surface hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-surface rounded-lg border border-border hover:border-primary transition-colors duration-300"
                    >
                      <p className="font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-gradient-accent/10 rounded-lg border border-accent/20 hover:border-accent transition-colors duration-300"
                    >
                      <p className="font-medium text-accent">{award}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;