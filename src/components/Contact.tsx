import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gursim3388@gmail.com",
      href: "mailto:gursim3388@gmail.com",
      command: "./send_email.sh"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Guri536",
      href: "https://github.com/Guri536",
      command: "ssh git@github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ingursimranjit",
      href: "https://www.linkedin.com/in/gursimranjit-singh-2ab127288/",
      command: "curl -X GET https://linkedin.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "instagram",
      href: "https://www.instagram.com/g.u.r.i_._s/",
      command: "wget https://instagram.com"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Establish Connection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            <span className="text-primary">{">"}</span> netstat -an | grep ESTABLISHED
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Terminal UI */}
          <div className="bg-[#0a0a0a] rounded-xl border border-secondary/30 shadow-[0_0_30px_rgba(16,185,129,0.05)] overflow-hidden font-mono animate-scale-in">
            
            {/* Fake OS Header */}
            <div className="bg-[#111] px-4 py-3 border-b border-secondary/30 flex items-center gap-2 text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
              <span className="ml-4 text-xs">secure_channel.sh</span>
            </div>

            <div className="p-6 md:p-10">
              
              {/* Executable Contact Links */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-4 rounded-lg border border-secondary/20 hover:border-primary/50 bg-[#0f0f0f] hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="text-xs text-muted-foreground mb-3 flex items-center justify-between">
                      <span className="group-hover:text-primary/70 transition-colors">{contact.command}</span>
                      <contact.icon className="h-4 w-4 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all" />
                    </div>
                    <div className="text-primary font-semibold group-hover:text-foreground transition-colors">
                      {contact.label}
                    </div>
                    <div className="text-sm text-foreground/70 group-hover:text-foreground transition-colors mt-1">
                      {contact.value}
                    </div>
                  </a>
                ))}
              </div>

              {/* Main Action Button */}
              <div className="flex flex-col items-center justify-center pt-8 border-t border-secondary/20">
                <p className="text-muted-foreground text-sm mb-6 text-center">
                  [sys] Open to collaboration opportunities, freelance projects, and exciting challenges.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-background border border-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 rounded font-mono"
                  asChild
                >
                  <a href="mailto:gursim3388@gmail.com">
                    <Send className="mr-2 h-4 w-4" />
                    ./initiate_handshake.sh
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Environment Variables (.env) */}
          <div className="mt-8 bg-[#0a0a0a] rounded-xl border border-secondary/30 p-6 md:p-8 font-mono text-sm md:text-base animate-fade-in shadow-lg">
            <div className="text-primary/70 mb-5 text-xs uppercase tracking-wider"># Environment Variables (.env)</div>
            <div className="flex flex-col gap-3 text-foreground/80 overflow-x-auto">
              <div className="whitespace-nowrap">
                <span className="text-blue-400">USER_LOCATION</span><span className="text-foreground">=</span><span className="text-yellow-500">"Chandigarh-Mohali, Punjab, India"</span>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-blue-400">SYS_LANGUAGES</span><span className="text-foreground">=</span><span className="text-yellow-500">"['English', 'Hindi', 'Punjabi']"</span>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-blue-400">IDLE_PROCESSES</span><span className="text-foreground">=</span><span className="text-yellow-500">"['Writing', 'Designing', 'Reading', 'Puzzles']"</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
