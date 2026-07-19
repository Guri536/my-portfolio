import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Core Languages",
      skills: ["Python", "Kotlin", "C++23", "Java", "TypeScript", "PHP", "Dart", "JavaScript"]
    },
    {
      id: "languages",
      title: "Core Languages",
      skills: ["Python", "Kotlin", "C++23", "Java", "TypeScript", "PHP", "Dart", "JavaScript"]
    },
    {
      id: "ai_vision",
      title: "Applied AI & Vision",
      skills: ["PyTorch", "SAM3", "ResNet18", "YOLO", "OpenRouter API", "OpenCV"]
    },
    {
      id: "iot_edge",
      title: "Hardware & IoT Edge",
      skills: ["ESP32 / CAM / S3", "Arduino Nano", "Raspberry Pi", "RFID Systems", "Actuators & Sensors"]
    },
    {
      id: "backend_db",
      title: "Backend & Data",
      skills: ["FastAPI", "Django", "Laravel", "PostgreSQL", "SQLite", "Ktor", "Redis"]
    },
    {
      id: "cloud_ops",
      title: "Cloud & DevOps",
      skills: ["Google Cloud + GKE", "Docker", "GitHub Actions (CI/CD)", "Git"]
    },
    {
      id: "client_ui",
      title: "Client Architecture",
      skills: ["Kotlin Multiplatform", "Jetpack Compose", "React", "Node.js", "TailwindCSS", "Flutter"]
    },
    {
      id: "design_tools",
      title: "Design Tools",
      skills: ["Adobe Illustrator", "Adobe After Effects", "GIMP", "Figma", "Canva", "Mermaid"]
    },
  ];

  const daemons = ["Decision_Making", "Collaboration", "Reliability", "Constructive_Feedback", "Adaptability"];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            <span className="text-primary">{">"}</span> cat configuration/tech_stack.json
          </p>
        </div>

        {/* Minimalist JSON Terminal */}
        <div className="w-full max-w-7xl mx-auto bg-[#0a0a0a] rounded-xl border border-secondary/30 
                        shadow-[0_0_30px_rgba(16,185,129,0.05)] overflow-hidden font-mono text-sm md:text-base animate-fade-in">

          {/* Mac/Linux OS Header */}
          <div className="bg-[#111] px-4 py-3 border-b border-secondary/30 flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-primary/80"></div>
            <span className="ml-4 text-xs">tech_stack.json</span>
          </div>

          {/* JSON Body */}
          <div className="p-6 md:p-10 overflow-x-auto custom-scrollbar text-foreground leading-relaxed">
            <div><span className="text-yellow-500">{"{"}</span></div>

            <div className="pl-6 md:pl-10 flex flex-col gap-4 my-2">
              {skillCategories.map((cat, index) => (
                <div key={index} className="group flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
                  {/* JSON Key */}
                  <div className="whitespace-nowrap">
                    <span className="text-blue-400 font-semibold text-xl uppercase">"{cat.id}"</span>
                    <span className="text-foreground">:</span> <span className="text-yellow-500">{"["}</span>
                  </div>

                  {/* JSON Array Values */}
                  <div className="pl-4 md:pl-0 flex flex-wrap gap-x-2 text-green-400">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="hover:text-green-300 hover:underline cursor-crosshair transition-colors">
                        "{skill}"{i < cat.skills.length - 1 ? <span className="text-foreground no-underline">,</span> : ""}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="text-yellow-500 align-text-bottom">{"]"}</span>
                    {index < skillCategories.length - 1 ? <span className="text-foreground">,</span> : ""}
                  </div>
                </div>
              ))}
            </div>

            {/* Interpersonal Skills Array */}
            <div className="pl-6 md:pl-10 mt-6 pt-6 border-t border-secondary/20 flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
              <div className="whitespace-nowrap">
                <span className="text-blue-400 font-semibold uppercase text-lg">"interpersonal"</span>
                <span className="text-foreground">:</span> <span className="text-yellow-500">{"["}</span>
              </div>
              <div className="pl-4 md:pl-0 flex flex-wrap gap-x-2 text-primary/70">
                {["Decision Making", "Collaboration", "Reliability", "Constructive Feedback", "Adaptability"].map((skill, i) => (
                  <span key={i}>
                    "{skill}"{i < 4 ? <span className="text-foreground">,</span> : ""}
                  </span>
                ))}
              </div>
              <div><span className="text-yellow-500">{"]"}</span></div>
            </div>

            <div><span className="text-yellow-500">{"}"}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
