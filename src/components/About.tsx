import { Layers, BrainCircuit, Cpu, ShieldCheck, Cloud, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import InteractiveFace2D from "./interactive2dFace";
import { useState, useEffect, useRef } from "react";

const FauxTerminal = ({ type, limit }: { type: "fullstack" | "cloud" | "ai", limit: number }) => {
  const [lines, setLines] = useState<string[]>([]);

  // The pool of random messages for each stack
  const fullstackLogs = [
    // Original
    "[sys] syncing state...",
    "[api] POST /v1/auth 200 OK",
    "[db] pool connected",
    "worker thread spawned",
    "compiling kmp modules...",
    "[ui] recomposition complete",
    "cache hit: true",

    // UI / Frontend
    "[ui] hydration finished in 42ms",
    "[bundler] hmr update /src/App.tsx",
    "[ui] rendering virtual dom...",
    "asset optimization complete",

    // API / Backend
    "[api] GET /v1/users/profile 200 OK",
    "[api] rate limit: 495/500 remaining",
    "[router] mapped 42 endpoints",
    "[auth] validating jwt signature...",
    "[middleware] cors headers injected",
    "[ws] socket connected (id: 8f2a)",

    // Database / Cache
    "[db] executing migration v2.4.1...",
    "[db] query ok (rows: 14, 2ms)",
    "[orm] schema synchronized",
    "[redis] key expired: session:829x",
    "[cache] purging stale records...",

    // System / DevOps
    "[sys] memory usage: 142MB",
    "[worker] job queued: send_email",
    "starting background processes...",
    "[sys] watching for file changes...",
    "[docker] container healthcheck passed",
    "cleaning build artifacts..."
  ];

  const cloudLogs = [
    "[gcp] scaling pods (2/4)",
    "container image pulled",
    "[ci] tests passed",
    "deploying to edge...",
    "[nginx] proxy reloaded",
    "health check: OK",
    "[pubsub] message acked"
  ];

  const aiLogs = [
    "[gpu] allocating vram...",
    "loading weights: resnet18.pt",
    "[sam3] segmentation mask generated",
    "epoch 45/50 - loss: 0.021",
    "[llm] orchestrating gemini-pro",
    "inference time: 42ms",
    "[langgraph] node transition OK"
  ];

  useEffect(() => {
    const source = type === "fullstack" ? fullstackLogs :
      type === "cloud" ? cloudLogs : aiLogs;
    let timeoutId: ReturnType<typeof setTimeout>;

    const addLog = () => {
      const randomLog = source[Math.floor(Math.random() * source.length)];

      setLines(prev => {
        const newLines = [...prev, randomLog];
        return newLines.slice(limit);
      });

      const nextDelay = Math.random() * 1500 + 500;
      timeoutId = setTimeout(addLog, nextDelay);
    };

    timeoutId = setTimeout(addLog, 500);
    return () => clearTimeout(timeoutId);
  }, [type]);

  const heightOfCont = (limit == -3) ? "h-16" : "h-72"

  return (
    // The group-hover classes here handle the "shoot up and vanish" effect
    <div className={`absolute bottom-2 left-6 right-6 flex flex-col gap-1 opacity-30 group-hover:opacity-0 
                    group-hover:-translate-y-8 transition-all duration-500 pointer-events-none font-mono 
                    text-[9px] md:text-[10px] text-muted-foreground overflow-hidden ${heightOfCont}`}>
      {lines.map((line, i) => (
        <div key={`${i}-${line}`} className="animate-in fade-in slide-in-from-bottom-2 duration-500 truncate">
          <span className="text-primary mr-1">{">"}</span> {line}
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [termStep, setTermStep] = useState(0);

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 2. Set up the observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 3. When the terminal enters the viewport (threshold 0.5 means 50% visible)
        if (entry.isIntersecting) {
          setTimeout(() => setTermStep(1), 600);
          setTimeout(() => setTermStep(2), 1400);
          setTimeout(() => setTermStep(3), 2200);
          setTimeout(() => setTermStep(4), 3000);
          setTimeout(() => setTermStep(5), 3800);

          // Disconnect so it only boots up once, rather than every time they scroll up and down
          if (terminalRef.current) observer.unobserve(terminalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Layers,
      value: "Full-Stack",
      label: "Cross-Domain Architecture",
      description: `Architecting scalable systems across mobile, web, and server environments.\n
      > Backend: FastAPI, Django, Laravel, Node.js\n
      > Client: React, Jetpack Compose, Kotlin Multiplatform\n
      > Database: PostgreSQL, MySQL, SQLite, SQLDelight\n
      > Core: Python, Kotlin, TypeScript, PHP
      `,
      rotation: "-rotate-6"
    },
    {
      icon: BrainCircuit,
      value: "Applied AI",
      label: "Vision & LLM Pipelines",
      description: "Engineered multi-stage vision pipelines using PyTorch, TensorFlow, LangGraph, SAM3, ResNet18, and orchestrated LLMs like Gemini, Llama, Gemma, and more.",
      rotation: "rotate-[3deg]"
    },
    {
      icon: Cpu,
      value: "IoT Edge",
      label: "Embedded Systems",
      description: "Integrated ESP32s, Arduino Nanos, RFID Systems, Actutors, and Ambient Sensors with central services.",
      rotation: "rotate-[-4deg]"
    },
    {
      icon: ShieldCheck,
      value: "Privacy-First",
      label: "Local-Only Processing",
      description: "Implemented on-device Python NLP and encrypted SQLite storage with zero external data transmission.",
      rotation: "rotate-[6deg]"
    },
    {
      icon: Cloud,
      value: "Cloud & DevOps",
      label: "Infrastructure & CI/CD",
      description: "Deployed architectures using Google Cloud Platform (GKE, Compute), Docker, and automated CI/CD pipelines via GitHub Actions.",
      rotation: "rotate-[-2deg]"
    },
    {
      icon: PenTool,
      value: "Tech & Ops",
      label: "Communication & Leadership",
      description: "Authored 85+ articles growing a tech blog to 37,000+ readers, and drove floor-level supply chain operations at Flipkart.",
      rotation: "rotate-[4deg]"
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Goal-Oriented Solutionist in Application, Hardware & Web Development with Graphics Design & Writing Experience
          </p>
        </div>

        {/* Stats Grid & Interactive Face Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 px-4">

          {/* Left Column: Asymmetric Bento Box with Ghost Containers */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 w-full h-full">
            {stats.map((stat, index) => {

              // Grid spans with fixed minimum heights for the Ghost Containers
              let bentoClass = "";
              if (index === 0) bentoClass = "md:col-span-2 md:row-span-2 min-h-[16rem] md:min-h-[22rem]";
              else if (index === 1) bentoClass = "md:col-span-2 min-h-[12rem] md:min-h-[14rem]";
              else if (index === 2 || index === 3) bentoClass = "md:col-span-1 min-h-[12rem] md:min-h-[14rem]";
              else if (index == 4) bentoClass = "md:col-span-3 min-h-[12rem] md:min-h-[14rem]";
              else "md:col-span-1 min-h-[12rem] md:min-h-[14rem]";

              return (
                /* 1. The Ghost Container: Stays rigidly in the grid to prevent layout shifts */
                <div key={index} className={`relative group z-10 hover:z-50 ${bentoClass}`}>

                  /* 2. The Pop-Out Card: Absolute positioning allows it to expand over other elements */
                  <Card
                    className="absolute top-0 left-0 w-full h-fit min-h-full glass-card border-secondary/20 hover:border-primary/50 
                              bg-background/90 backdrop-blur-md hover:bg-[#0a0a0a] transition-all duration-500 overflow-hidden
                              shadow-lg group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] flex flex-col 
                              origin-top group-hover:scale-[1.05] group-hover:-translate-y-2"
                  >
                    <CardContent className="p-6 h-full flex flex-col justify-between">

                      <div className="flex items-start justify-between mb-4">
                        <stat.icon className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors duration-500 group-hover:scale-110" />
                        <span className="text-[10px] font-mono text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                          0{index + 1}
                        </span>
                      </div>

                      {index === 0 && <FauxTerminal type="fullstack" limit={-15} />}
                      {index === 1 && <FauxTerminal type="ai" limit={-3} />}
                      {index === 4 && <FauxTerminal type="cloud" limit={-3} />}

                      <div className="mt-auto z-10 relative bg-background/5 rounded-t-lg">
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:gradient-text transition-all duration-300">
                          {stat.value}
                        </h3>

                        <p className="text-xs md:text-sm font-semibold text-primary/80 transition-all duration-300">
                          {stat.label}
                        </p>

                        {/* Smooth height reveal */}
                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                          <p className="text-xs text-muted-foreground leading-relaxed overflow-hidden font-mono mt-3 border-t border-secondary/30 pt-3 whitespace-pre-line">
                            <span className="text-primary mr-2">{">"}</span>{stat.description}
                          </p>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Wireframe Face */}
          <div className="relative h-[91%] min-h-100 flex items-center justify-center bg-background/30 rounded-lg border border-dashed border-secondary/30">
            <div className="absolute top-4 left-4 text-xs font-mono text-muted-foreground/50 pointer-events-none">
              [INTERACTIVE_MESH_OF_ME]
            </div>
            <InteractiveFace2D />
          </div>

        </div>


        <Card className="glass-card border-secondary/20 animate-fade-in overflow-hidden">

          {/* Fake OS Window Header */}
          <div className="bg-secondary/30 px-4 py-3 flex items-center gap-2 border-b border-secondary/20">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-primary/80"></div>
            <span className="ml-4 text-xs font-mono text-muted-foreground">guri@system: ~/about</span>
          </div>

          {/* Updated CardContent - Single Column Full-Width Terminal */}
          {/* Updated CardContent - Live Boot Sequence Terminal */}
          <CardContent className="p-8 md:p-12">
            <div
              ref={terminalRef}
              className="bg-[#0a0a0a] rounded-lg p-6 font-mono text-sm md:text-base border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.1)] h-full flex flex-col relative overflow-hidden"
            >
              {/* Optional background grid/scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-size-[100%_4px] pointer-events-none"></div>

              {/* Boot Sequence */}
              {termStep === 0 && (
                <div className="text-muted-foreground animate-pulse">
                  [ OK ] Booting virtual environment...<br />
                  [ OK ] Loading neural mesh...<br />
                  [ OK ] Establishing connection...
                </div>
              )}

              {/* Command 1: whoami */}
              {termStep >= 1 && (
                <div className="mb-4">
                  <span className="text-primary font-bold">guri@system:~$</span> <span className="text-foreground font-semibold">whoami</span>

                  {termStep >= 2 && (
                    <div className="text-muted-foreground mt-2 leading-relaxed animate-in fade-in slide-in-from-bottom-1 duration-500">
                      <span className="text-primary/50">{">"}</span> I am a Computer Science fresher building at the intersection of hardware, software, and AI.
                      <br /><br />
                      <span className="text-primary/50">{">"}</span> Managing floor-level logistics taught me how physical systems break under pressure.
                      <br /><br />
                      <span className="text-primary/50">{">"}</span> Growing a tech blog to 37,000+ readers taught me how to distill complex architectures into human terms.
                    </div>
                  )}
                </div>
              )}

              {/* Command 2: cat current_status */}
              {termStep >= 3 && (
                <div className="mb-4 mt-2">
                  <span className="text-primary font-bold">guri@system:~$</span> <span className="text-foreground font-semibold">cat <span className="text-yellow-400/90">current_status.txt</span></span>

                  {termStep >= 4 && (
                    <div className="text-muted-foreground mt-2 animate-in fade-in slide-in-from-bottom-1 duration-500">
                      <span className="text-primary/50">{">"}</span> Open to roles in <span className="text-emerald-400">Android, Backend, IoT, DevOps, AI/ML, or TPM.</span> 
                      <br />
                      <span className="text-primary/50">{">"}</span> Status: Based in Chandigarh-Mohali, ready to relocate.
                    </div>
                  )}
                </div>
              )}

              {/* Blinking Terminal Cursor */}
              {termStep >= 4 && (
                <div className="mt-auto pt-4 flex items-center">
                  <span className="text-primary font-bold">guri@system:~$</span>
                  <span className="animate-flash inline-block w-2.5 h-5 bg-primary ml-2 align-middle shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                </div>
              )}

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
