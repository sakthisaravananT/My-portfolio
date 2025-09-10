import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:sakthisaravana101@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sakthisaravana101@gmail.com",
      link: "mailto:sakthisaravana101@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location", 
      value: "Erode, Tamil Nadu, India",
      link: null
    },
    {
      icon: <ExternalLink className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sakthi-saravanan-t",
      link: "https://linkedin.com/in/sakthi-saravanan-t"
    }
  ];

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:sakthisaravana101@gmail.com",
      color: "hover:bg-red-500"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/sakthi-saravanan-t",
      color: "hover:bg-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/sakthisaravanan-t",
      color: "hover:bg-gray-800"
    }
  ];

  return (
    <section className="section-padding pt-24">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className={`lg:col-span-1 space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                Feel free to reach out through any of the following channels:
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-foreground hover:text-primary transition-colors duration-300 break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Me</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-lg bg-card text-muted-foreground hover:text-white transition-all duration-300 hover:shadow-glow hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:shadow-soft resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full group bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <Card className="bg-gradient-hero/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, need technical consultation, or just want to connect, 
                I'm always excited to discuss new opportunities and collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:sakthisaravana101@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me Directly
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://linkedin.com/in/sakthi-saravanan-t', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;