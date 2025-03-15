
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Nude Solutions",
      location: "Calgary, Canada",
      position: "Junior Product Development Intern",
      duration: "Jan 2025 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React, TypeScript, and Laravel",
        "Collaborated with cross-functional teams to implement new features and fix bugs",
        "Participated in code reviews and improved code quality through unit tests and documentation",
        "Optimized application performance by identifying and resolving bottlenecks"
      ]
    },
    {
      id: 2,
      company: "Carasti",
      location: "Dubai, UAE",
      position: "Software Engineering Intern",
      duration: "July 2024 - August 2024",
      responsibilities: [
        "Contributed to the development of Carasti's mobile app using Flutter, focusing on UI/UX improvements.",
        "Played a key role in maintaining backend systems with Laravel, ensuring seamless app integration.",
        "Developed and integrated RESTful APIs to enhance communication between mobile and backend services",
        "Maintained and organized research data for easy access and reference",
        "Assisted in optimizing MySQL databases, improving data integrity and performance",
        "Collaborated with senior developers and team members, demonstrating strong teamwork and communication skills."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background particle-container">
      <AnimatedBackground />
      <Navigation />

      {/* Experience Section */}
      <section id="experience" className="pt-32 pb-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl font-bold mb-8">Experience</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection 
                key={exp.id} 
                animation="slide-in-left" 
                delay={`delay-${(index + 1) * 100}` as any}
              >
                <Card className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h3 className="font-heading text-xl font-semibold">{exp.company}</h3>
                    <span className="text-muted-foreground text-sm">{exp.location}</span>
                  </div>
                  <p className="text-primary font-medium">{exp.position} • {exp.duration}</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>• {resp}</li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - decreased size */}
      <footer className="py-4 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 Aniruddha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
