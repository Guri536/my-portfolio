import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gursim3388@gmail.com",
      href: "mailto:gursim3388@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 88377 89697",
      href: "tel:+918837789697"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Guri536",
      href: "https://github.com/Guri536"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ingursimranjit",
      href: "https://linkedin.com/in/ingursimranjit"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to collaboration opportunities, freelance projects, and exciting challenges
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-primary/20 glow-effect animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Get in Touch</CardTitle>
              <CardDescription className="text-base">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <Card className="glass-card border-primary/20 hover:glow-effect hover:scale-105 transition-all cursor-pointer h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/20 rounded-lg">
                            <contact.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <p className="font-medium">{contact.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Interested in working together? Let's create something amazing!
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 glow-effect"
                  asChild
                >
                  <a href="mailto:gursim3388@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send a Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="glass-card border-primary/20 animate-fade-in">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                  <div>
                    <span className="font-medium">Languages:</span> English, Hindi, Punjabi
                  </div>
                  <div className="hidden md:block">•</div>
                  <div>
                    <span className="font-medium">Location:</span> Mohali, Punjab, India
                  </div>
                  <div className="hidden md:block">•</div>
                  <div>
                    <span className="font-medium">Interests:</span> Writing, Designing, Reading, Puzzles, Coding
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
