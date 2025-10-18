import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Gursimranjit Singh</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
            Full-Stack & Android Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            Computer Science Student crafting innovative solutions with modern technologies
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="icon"
              className="glass-card hover:glow-effect transition-all"
              asChild
            >
              <a href="https://github.com/Guri536" target="_blank" rel="noopener noreferrer">
                <Github className="h-15 w-15" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="glass-card hover:glow-effect transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/gursimranjit-singh-2ab127288/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-15 w-15" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="glass-card hover:glow-effect transition-all"
              asChild
            >
              <a href="mailto:gursim3388@gmail.com" target="_blank">
                <Mail className="h-15 w-15" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 glow-effect"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:glow-effect"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
