import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-8 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p className="flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Gursimranjit Singh
            </p>
            <p className="mt-1">© {currentYear} All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
              asChild
            >
              <a href="https://github.com/Guri536" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
              asChild
            >
              <a href="https://linkedin.com/in/ingursimranjit" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
              asChild
            >
              <a href="mailto:gursim3388@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
