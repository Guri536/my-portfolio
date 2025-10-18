import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Kotlin", "Java", "C++23", "Python", "JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "LaTeX"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Jetpack Compose", "TailwindCSS", "Bootstrap 5", "Material Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Django", "Laravel", "Ktor", "KMP"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQLite", "SQLDelight", "Firebase"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Android Studio", "Git", "GitHub", "Figma", "Adobe Illustrator", "After Effects", "App Script API"]
    },
    {
      title: "Specialized",
      skills: ["Android Development", "Compose", "KMP", "Networking", "Django"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover:glow-effect transition-all animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-primary/10 hover:bg-primary/20 border-primary/30 transition-colors text-xs text-white-200 p-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interpersonal Skills */}
        <Card className="glass-card border-primary/20 mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Interpersonal Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {["Decision Making", "Collaboration", "Reliability", "Constructive Feedback", "Adaptability"].map((skill, i) => (
                <Badge 
                  key={i}
                  variant="outline"
                  className="text-sm py-2 px-4 border-primary/50 hover:border-secondary hover:bg-secondary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
