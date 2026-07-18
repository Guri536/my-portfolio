import { useState } from "react";
import { ExternalLink, Github, Trophy, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "AI/ML", "MOBILE", "FULL-STACK", "HARDWARE", "IOT"];

  const projects = [
    {
      title: "Plant Vita",
      description: "Full-stack IoT plant monitor collecting telemetry via ESP32 into a central FastAPI server. Built a vision pipeline (SAM3, ResNet18) with Gemini LLM escalation for health verdicts.",
      tech: ["FastAPI", "PyTorch", "React", "Docker", "ESP32"],
      award: "Presented at AI Hackmatrix 2026",
      category: ["AI/ML", "FULL-STACK", "HARDWARE", "IOT", "MOBILE"],
      featured: true
    },
    {
      title: "Peri-Lily",
      description: "Serverless Android safety app with a covert decoy UI. Streams speech through an on-device Python NLP engine (Chaquopy) with offline SQLite storage and SOS dispatch.",
      tech: ["Flutter", "Kotlin", "Chaquopy", "SQLite"],
      category: ["MOBILE", "AI/ML"],
      featured: true
    },
    {
      title: "Resumini",
      description: "Chat-based resume generator where an LLM collects user information conversationally, generating LaTeX exports via pdfLaTeX and Pandoc CLI.",
      tech: ["Laravel", "Gemini API", "pdfLaTeX", "Pandoc"],
      award: "1st Prize Mind Maze 2024",
      category: ["FULL-STACK", "AI/ML"],
      featured: false
    },
    {
      title: "LoopLink",
      description: "Zero-configuration LAN chat and file-sharing app broadcasting peers via mDNS and connecting over WebSockets.",
      tech: ["Kotlin Multiplatform", "Ktor", "JmDNS", "SQLDelight"],
      category: ["MOBILE", "FULL-STACK"],
      featured: false
    },
    {
      title: "RFID Attendance System",
      description: "Physical mock-campus model reading RFID cards and logging attendance to Google Sheets via ESP32 HTTP requests, featuring MAC-address geofencing.",
      tech: ["ESP32", "Arduino", "AppScript", "RFID"],
      award: "1st Place Project Expo 2024",
      category: ["HARDWARE", "IOT"],
      featured: false
    },
    {
      title: "Motorized Robotic Arm",
      description: "Coded hard-coded servo paths on an Arduino Nano to drive a 3D-printed, 3-axis robotic arm with a claw pickup mechanism using DS5160 and SG90 servos.",
      tech: ["Arduino Nano", "Servos", "3D Printing (PLA+)", "C++"],
      award: "1st Prize Project Expo 2024",
      category: ["HARDWARE", "IOT"],
      featured: false
    },
    {
      title: "Gourmet Fiesta",
      description: "Django application for recipe sharing featuring dynamically incrementable ingredients, step-by-step guides, and a multi-parameter search engine.",
      tech: ["Django", "SQLite", "Python", "JSON"],
      award: "2nd Runner Up Mind Maze 2024",
      category: ["FULL-STACK"],
      featured: false
    },
    {
      title: "EcoChef",
      description: "AI-driven kitchen demand forecasting tool designed to predict inventory needs and optimize logistics using time-series data.",
      tech: ["FastAPI", "PostgreSQL", "Prophet", "Streamlit"],
      award: "Pitched at Hackmol 7.0",
      category: ["AI & IOT"],
      featured: false
    },
    {
      title: "ATUI ANSI Terminal UI",
      description: "A header-only C++ library utilizing ANSI escape codes to construct interactive and animated terminal frames and windows.",
      tech: ["C++", "ANSI Codes", "Console UI"],
      category: ["HARDWARE"], 
      featured: false
    }
  ];

  const filteredProjects = filter === "ALL"
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            <span className="text-primary">{">"}</span> ./execute_portfolio.sh --show-all
          </p>
        </div>

        {/* Command-Line Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-mono text-xs md:text-sm border transition-all duration-300 rounded flex items-center gap-2
                ${filter === cat
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "border-secondary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
            >
              {filter === cat && <Terminal className="w-3 h-3 animate-pulse" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`group glass-card border-secondary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] flex flex-col
                ${project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary font-mono text-[10px] bg-primary/5">
                    {project.category.join(", ")}
                  </Badge>

                  {/* Interactive Action Links (Visible on Hover) */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>

                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>

                {project.award && (
                  <div className="text-xs text-yellow-500/80 font-mono mb-2 flex items-center gap-2">
                    <Trophy className="h-3 w-3" /> {project.award}
                  </div>
                )}
              </CardHeader>

              <CardContent className="mt-auto flex flex-col justify-end">
                <CardDescription className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono border border-secondary/30 rounded px-2 py-1 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
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