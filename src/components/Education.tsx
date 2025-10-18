import { Award, GraduationCap, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Chandigarh University",
      period: "2023 - 2026",
      grade: "CGPA: 8.48",
      location: "Mohali, Punjab"
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "Ryan International School",
      period: "2022 - 2023",
      grade: "83.7%",
      location: "Mohali, Punjab"
    },
    {
      degree: "Matriculation (CBSE)",
      institution: "Ryan International School",
      period: "2020 - 2021",
      grade: "92.7%",
      location: "Mohali, Punjab"
    }
  ];

  const awards = [
    {
      title: "1st Prize in Tech Expo",
      year: "2024",
      description: "Motorized Robotic Arm - Fully 3D printed",
      organization: "Chandigarh University"
    },
    {
      title: "Winner Mind Maze Showcase",
      year: "2024",
      description: "Resumini - AI Assisted Resume Generator",
      organization: "Chandigarh University"
    },
    {
      title: "2nd Runner Up Android Expo",
      year: "2023",
      description: "IoT RFID Attendance System",
      organization: "Chandigarh University"
    }
  ];

  const certifications = [
    {
      title: "Android Development Using Jetpack Compose",
      issuer: "Google Developers",
      year: "2024"
    },
    {
      title: "Backend with Django",
      issuer: "QuasTech Training, Mohali",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education & Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and recognition for technical excellence
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass-card border-primary/20 hover:glow-effect transition-all animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base mt-1">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-primary/50 w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary font-semibold">
                      {edu.grade}
                    </Badge>
                    <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-secondary" />
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="glass-card border-secondary/20 hover:glow-effect transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Trophy className="h-8 w-8 text-secondary mb-2" />
                  <Badge variant="outline" className="border-secondary/50 w-fit mb-2">
                    {award.year}
                  </Badge>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription className="text-sm">{award.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Awarded by {award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="glass-card border-primary/20 hover:glow-effect transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <Badge variant="outline" className="border-primary/50">
                      {cert.year}
                    </Badge>
                  </div>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
