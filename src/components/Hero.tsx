import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import MotionBackground from "./MotionBackground";

const Hero = () => {
  const name = "Gursimranjit Singh"
  const [displayedName, setDisplayedName] = useState("");

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (displayedName.length < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [displayedName]);

  return (
    <ParticlesProvider init={particlesInit}>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        <MotionBackground />
        {/* Background */}
        {/* <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div> */}

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 z-10 text-center">
            <div className="animate-fade-in-down">

              <h1 className="group text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-pixely hover:font-bytesized max-w-fit m-auto">

                <span className="gradient-text">
                  {displayedName}
                </span>
                <span className="animate-flash inline-block text-primary ml-1 after:content-['|'] group-hover:after:content-['\_']" />

              </h1>

              <p className="text-xl md:text-2xl lg:text-6xl text-muted-foreground mb-4 font-lightPixel">
                &nbsp;Full-Stack & Android Developer&nbsp;
              </p>
              <p className="text-lg md:text-2xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
                Crafting innovative solutions with multi-disciplinary technologies
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center mb-12">
                <Button
                  variant="outline"
                  className="glass-card hover:glow-effect transition-all size-12 rise-on-hover"
                  asChild
                >
                  <a href="https://github.com/Guri536" target="_blank" rel="noopener noreferrer" className="social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card hover:glow-effect transition-all size-12 rise-on-hover"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/gursimranjit-singh-2ab127288/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card hover:glow-effect transition-all size-12 rise-on-hover"
                  asChild
                >
                  <a href="mailto:gursim3388@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </a>
                </Button>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  size="lg"
                  className="bg-primary/70 hover:bg-primary glow-effect cursor-pointer font-bold rise-on-hover text-lg"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card hover:glow-effect  cursor-pointer rise-on-hover hover:font-bold text-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 animate-float">
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
        </div>
      </section>
    </ParticlesProvider>
  );
};

export default Hero;
