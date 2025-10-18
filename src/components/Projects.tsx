import { ExternalLink, Github, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Resumini",
      description: "AI-assisted resume builder using Laravel, Gemini API, and LaTeX. Winner of Mind Maze Showcase with practical use cases and impressive presentation.",
      tech: ["Laravel", "TailwindCSS", "Vite", "Gemini API", "pdfLaTeX", "Pandoc"],
      award: "Winner Mind Maze",
      category: "Web Development"
    },
    {
      title: "LoopLink",
      description: "Multiplatform LAN-based collaboration application for Android and Desktop, enabling seamless local network communication and file sharing.",
      tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "SQLDelight", "WebSockets"],
      category: "Cross-Platform"
    },
    {
      title: "IoT RFID Attendance System",
      description: "Innovative IoT-based attendance tracking system using RFID technology. Secured 2nd Runner Up at Android Expo 2023.",
      tech: ["IoT", "RFID", "Android", "Firebase"],
      award: "2nd Runner Up Android Expo 2023",
      category: "IoT & Android"
    },
    {
      title: "Motorized Robotic Arm",
      description: "Fully 3D printed motorized robotic arm with precise control. Winner of Tech Expo 2024, showcasing mechanical and software integration.",
      tech: ["3D Printing", "Arduino", "Servo Control", "CAD"],
      award: "Winner Tech Expo 2024",
      category: "Robotics"
    },
    {
      title: "THRIFTify E-Commerce",
      description: "Full-featured e-commerce platform built with React and Node.js, offering seamless shopping experience with modern UI/UX.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      title: "Gourmet Fiesta",
      description: "Django-based cooking website featuring recipe management, user authentication, and interactive cooking guides.",
      tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      category: "Web Development"
    },
    {
      title: "Criss-Cross Android Game",
      description: "Modern take on the classic game built with Jetpack Compose, featuring smooth animations and intuitive gameplay.",
      tech: ["Jetpack Compose", "Kotlin", "Android Studio", "Material Design"],
      category: "Mobile Game"
    },
    {
      title: "ANSI UI Library",
      description: "C++23 console UI library available on GitHub for production use, utilizing ANSI codes and escape codes for terminal interfaces.",
      tech: ["C++23", "ANSI Codes", "Console UI", "Git"],
      category: "Open Source Library"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise across web, mobile, and hardware development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover:glow-effect hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {project.category}
                  </Badge>
                  {project.award && (
                    <Trophy className="h-5 w-5 text-secondary" />
                  )}
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                {project.award && (
                  <div className="text-sm text-secondary font-medium mb-2">
                    🏆 {project.award}
                  </div>
                )}
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
