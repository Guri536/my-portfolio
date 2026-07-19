import { useState, useRef, act } from "react";
import { ExternalLink, Github, Trophy, Terminal, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "AI/ML", "MOBILE", "FULL-STACK", "IOT", "SERVICE"];
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleProjectSelect = (project: typeof projects[0]) => {
    setActiveProject(project);

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        if (detailsRef.current) {
          // Calculate exact position minus a 96px offset for the sticky header
          const targetY = detailsRef.current.getBoundingClientRect().top + window.scrollY - 96;

          // Call our custom scroll with a 500ms duration (adjust time as needed!)
          smoothScrollTo(targetY, 500);
        }
      }, 50);
    }
  };

  // Custom smooth scroll function
  const smoothScrollTo = (targetY, duration = 500) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percent = Math.min(progress / duration, 1);

      // Easing curve: easeInOutQuad (smooth start and end)
      const ease = percent < 0.5
        ? 2 * percent * percent
        : 1 - Math.pow(-2 * percent + 2, 2) / 2;

      window.scrollTo(0, startY + difference * ease);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const projects = [
    {
      title: "Plant Vita",
      description: "Full-stack IoT plant monitor collecting telemetry via ESP32 into a central FastAPI server. Built a vision pipeline (SAM3, ResNet18) with Gemini LLM escalation for health verdicts.",
      tech: ["FastAPI", "PyTorch", "React", "Docker", "ESP32", "SAM3", "Jetpack Compose", "Express", "PostgreSQL", "ResNet18", "OpenRouter"],
      award: "Presented at AI Hackmatrix 2026",
      category: ["AI/ML", "FULL-STACK", "IOT", "MOBILE"],
      featured: true,
      github: "https://github.com/Guri536/Plant-Vita",
      demo: "https://drive.google.com/drive/folders/1I8W1B-4Hj2L9RuNKt5-_rGinr9g5kOHO?usp=sharing",
      gitDoc: "https://guri536.github.io/Plant-Vita/"
    },
    {
      title: "Peri-Lily",
      description: "Serverless Android safety app with a covert decoy UI. Streams speech through an on-device Python NLP engine (Chaquopy) with offline SQLite storage and SOS dispatch.",
      tech: ["Flutter", "Kotlin", "Chaquopy", "SQLite", "Native NLP"],
      category: ["MOBILE", "AI/ML"],
      featured: true,
      github: "https://github.com/Guri536/Peri-Lily",
      demo: "",
      gitDoc: "https://guri536.github.io/Peri-Lily/"
    },
    {
      title: "Resumini",
      description: "Chat-based resume generator where an LLM collects user information conversationally, generating LaTeX exports via pdfLaTeX and Pandoc CLI.",
      tech: ["Laravel", "Gemini API", "pdfLaTeX", "Pandoc"],
      award: "1st Prize Mind Maze 2024",
      category: ["FULL-STACK", "AI/ML"],
      featured: false,
      github: "https://github.com/Guri536/Resumini",
      demo: "https://drive.google.com/drive/folders/1zL7AUlxqyzWC6B4NJ3Qmd6gvY4SXzMz7?usp=drive_link",
      gitDoc: "https://guri536.github.io/Resumini/"
    },
    {
      title: "LoopLink",
      description: "Zero-configuration LAN chat and file-sharing app broadcasting peers via mDNS and connecting over WebSockets.",
      tech: ["Kotlin Multiplatform", "Ktor", "JmDNS", "SQLDelight", "WebSockets"],
      category: ["MOBILE", "FULL-STACK"],
      featured: false,
      github: "https://github.com/Guri536/LoopLink",
      demo: "https://drive.google.com/drive/folders/17ulPru-3AT2d3xuaw0U32irRb5LMQLpR?usp=sharing",
      gitDoc: "https://guri536.github.io/LoopLink/"
    },
    {
      title: "RFID Attendance System",
      description: "Physical mock-campus model reading RFID cards and logging attendance to Google Sheets via ESP32 HTTP requests, featuring MAC-address geofencing.",
      tech: ["ESP32", "Arduino", "AppScript", "RFID"],
      award: "1st Place Project Expo 2024",
      category: ["HARDWARE", "IOT"],
      featured: false,
      github: "",
      demo: "https://drive.google.com/drive/folders/1rnPoXfgtAoQIumXC2FbFpMrKu7AMg1ao?usp=sharing"
    },
    {
      title: "Motorized Robotic Arm",
      description: "Coded hard-coded servo paths on an Arduino Nano to drive a 3D-printed, 3-axis robotic arm with a claw pickup mechanism using DS5160 and SG90 servos.",
      tech: ["Arduino Nano", "Servos", "3D Printing (PLA+)", "C++"],
      award: "1st Prize Project Expo 2024",
      category: ["IOT"],
      featured: false,
      github: "",
      demo: "https://drive.google.com/drive/folders/1AY3NRInUbcpN3owLURbhQ_aG5v0b89wb?usp=sharing"
    },
    {
      title: "Gourmet Fiesta",
      description: "Django application for recipe sharing featuring dynamically incrementable ingredients, step-by-step guides, and a multi-parameter search engine.",
      tech: ["Django", "SQLite", "Python", "JSON"],
      award: "2nd Runner Up Mind Maze 2024",
      category: ["FULL-STACK"],
      featured: false,
      github: "https://github.com/Guri536/Gourmet-Fiesta---Website-Project/tree/master",
      demo: "https://drive.google.com/drive/folders/1XqCc9NB5Uv_zI2Gh9AT6E4LsI4u90S7W?usp=sharing"
    },
    {
      title: "EcoChef",
      description: "AI-driven kitchen demand forecasting tool designed to predict inventory needs and optimize logistics using time-series data.",
      tech: ["FastAPI", "PostgreSQL", "Prophet", "Streamlit"],
      award: "Pitched at Hackmol 7.0",
      category: ["AI & IOT"],
      featured: false,
      github: "",
      demo: "https://docs.google.com/presentation/d/19r77MVHoXPOsIAB-GbNima029v-UVNkqagMRyx64IIE/edit?usp=sharing"
    },
    {
      title: "ATUI ANSI Terminal UI",
      description: "A header-only C++ library utilizing ANSI escape codes to construct interactive and animated terminal frames and windows.",
      tech: ["C++", "ANSI Codes", "Console UI"],
      category: ["SERVICE"],
      featured: false,
      github: "https://github.com/Guri536/ATUI",
      demo: ""
    },
    {
      title: "Weather App - Jetpack Compose",
      description: "Simple city-search weather app.",
      tech: ["Jetpack Compose", "Kotlin", "Weather API"],
      category: ["MOBILE"],
      featured: false,
      github: "https://github.com/Guri536/Weather_App",
      demo: "https://drive.google.com/drive/folders/18q68cO8EblNgv2D5io93CO67Jj8TE14y?usp=sharing"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Tic-Tac-Toe/Circles-and-Crosses app made using Jetpack Compose, made for 2 players playing together on the same device.",
      tech: ["Jetpack Compose", "Kotlin"],
      category: ["MOBILE"],
      featured: false,
      github: "https://github.com/Guri536/Tic-Tac-Toe",
      demo: "https://drive.google.com/drive/folders/1QoHUdKLy0urldE1kCGKfXR80x3_wjlNz?usp=sharing"
    },
    {
      title: "Thriftify - E-Commerce Clone",
      description: "A Django based simple E-commerce clone, with discoverable items and authentication.",
      tech: ["Django", "SQLite", "Python"],
      category: ["FULL-STACK"],
      featured: false,
      github: "https://github.com/Guri536/E-Commerce-Clone",
      demo: "https://drive.google.com/drive/folders/1kDJ7tlEBgz34-AU0FaNnFKRYznbGTAIK?usp=sharing"
    },
    {
      title: "ASKEI Hotels - Hotel Management WebApp",
      description: " First Django web app for hotel booking with check-in/out invoicing; earliest full-stack project.",
      tech: ["Django", "MySQL", "Python", "AJAX"],
      category: ["FULL-STACK"],
      featured: false,
      demo: "https://drive.google.com/drive/folders/18Pf5cgu6kuV6BBl6wrghwWDMI8ZaerqG?usp=sharing"
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0])

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
        {/* IDE-Style Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:min-h-150">

          {/* Left Column: The File Directory (Master List) */}
          <div className="lg:col-span-4 flex flex-col gap-2 font-mono h-60 max-h-60 lg:h-125 lg:max-h-none overflow-y-auto pr-2 custom-scrollbar 
                          border border-secondary/20 lg:border-none pl-2 pb-2 lg:p-0 rounded-lg lg:rounded-none bg-[#0a0a0a]/50 lg:bg-transparent">
            <div className="text-xs text-muted-foreground mb-4 border-y border-secondary/30 pb-2 sticky top-0 bg-background/95 backdrop-blur z-10 pt-2">
              ~/projects/system_architectures
            </div>

            {filteredProjects.map((project, index) => {
              const isActive = activeProject.title === project.title;
              return (
                <button
                  key={index}
                  // CHANGED: Use the new handler instead of just setActiveProject
                  onClick={() => handleProjectSelect(project)}
                  className={`text-left px-4 py-3 text-sm transition-all duration-300 border-l-2
                    ${isActive
                      ? "border-primary bg-primary/10 text-primary shadow-[inset_4px_0_0_rgba(16,185,129,0.5)]"
                      : "border-secondary/20 text-muted-foreground hover:border-primary/50 hover:bg-secondary/10 hover:text-foreground"}`}
                >
                  <div className="flex items-center justify-between">
                    <span><span className={isActive ? "text-primary" : "text-primary/50"}>{"> "}</span>{project.title}</span>
                    {project.award && <Trophy className="w-3 h-3 text-yellow-500/70" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: The Details Pane (Sticky) */}
          <div
            ref={detailsRef}
            className="lg:col-span-8 sticky top-24 scroll-mt-24"
          >
            <Card className={`glass-card border-secondary/20 bg-[#0a0a0a] min-h-125 flex flex-col cursor-pointer ${activeProject.gitDoc && "hover:border-primary/50"}`}
              onClick={() => activeProject.gitDoc && window.open(activeProject.gitDoc, "_blank")}>
              <CardHeader className="border-b border-secondary/20 pb-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary font-mono text-[10px] bg-primary/5">
                    {activeProject.category.join(", ")}
                  </Badge>

                  <div className="flex gap-4">
                    {activeProject.github && <a href={activeProject.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-xs font-mono">
                      <Github className="w-4 h-4" /> [SRC]
                    </a>}
                    {activeProject.demo && <a href={activeProject.demo} target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-xs font-mono">
                      <ExternalLink className="w-4 h-4" /> [DEMO]
                    </a>}
                    {activeProject.gitDoc && <a href={activeProject.gitDoc} target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-xs font-mono">
                      <FileText className="w-4 h-4" /> [DOC]
                    </a>}
                  </div>
                </div>

                <CardTitle className="text-3xl md:text-4xl text-foreground mb-2">
                  {activeProject.title}
                </CardTitle>

                {activeProject.award && (
                  <div className="text-sm text-yellow-500/90 font-mono flex items-center gap-2 mt-4">
                    <Trophy className="h-4 w-4" /> {activeProject.award}
                  </div>
                )}
              </CardHeader>

              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="text-base text-muted-foreground leading-relaxed mb-8 font-mono">
                  <span className="text-primary mr-2">{"$"}</span>
                  cat ./readme.md
                  <div className="mt-4 text-foreground/80 font-dotted">
                    {activeProject.description}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-secondary/20">
                  <div className="text-xs text-muted-foreground font-mono mb-3 uppercase tracking-wider">
                    dependencies.json
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono border border-secondary/30 bg-secondary/5 rounded px-3 py-1.5 text-primary/90">
                        "{tech}"
                      </span>
                    ))}
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

export default Projects;