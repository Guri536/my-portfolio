import { Award, BookOpen, Code2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.48" },
    { icon: Code2, label: "Projects", value: "8+" },
    { icon: Award, label: "Awards", value: "3+" },
    { icon: BookOpen, label: "Certifications", value: "2+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Goal-Oriented Solutionist in Application & Web Development with Graphics Design & Writing Experience
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass-card border-primary/20 hover:glow-effect transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <Card className="glass-card border-primary/20 animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I'm a passionate Computer Science student at Chandigarh University, specializing in creating 
              innovative solutions across multiple platforms. With expertise spanning from Android development 
              with Kotlin to full-stack web applications with Django, React and Laravel, I bring ideas to life through
              clean code and thoughtful design.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              My journey has been marked by recognition in various tech competitions, including winning 1st Prize 
              at Tech Expo 2024 with a motorized robotic arm and the Mind Maze Showcase with Resumini, an 
              AI-powered resume generator. I'm constantly exploring new technologies and pushing the boundaries 
              of what's possible.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond coding, I'm passionate about graphic design, writing, and solving complex puzzles. 
              This multidisciplinary approach helps me create user experiences that are both technically 
              sound and aesthetically pleasing.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
