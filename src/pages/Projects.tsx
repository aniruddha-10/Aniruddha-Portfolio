
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Job Quest",
      description: "Developed a full-stack job board application using PHP and Laravel, enabling users to search, filter, and apply for jobs, with secure authentication and employer functionalities. Designed a responsive UI with Tailwind CSS and Breadcrumbs Navigation, enhancing user experience across the platform.",
      technologies: ["React", "TypeScript", "PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Postman", "Adminer"],
      githubLink: "https://github.com/aniruddha-10/JobQuest",
      demoLink: "https://github.com/aniruddha-10/JobQuest",
    },
    {
      id: 2,
      title: "Twitter Sentiment Analysis using NLP",
      description: "Conducted Twitter Sentiment Analysis using Natural Language Processing (NLP) techniques. Performed essential preprocessing, exploratory data analysis (EDA), and feature extraction on a dataset of 31,962 labeled tweets. Developed machine learning models to classify tweets as racist/sexist (label '1') or non-racist/sexist (label '0'), achievingbthe project's objective of hate speech detection.",
      technologies: ["Python","Sklearn","NLTK","Pandas","Seaborn","Matplotlib"],
      githubLink: "https://github.com/aniruddha-10/Twitter-Sentiment-Analysis-using-NLP",
      demoLink: "https://github.com/aniruddha-10/Twitter-Sentiment-Analysis-using-NLP",
    },
    {
      id: 3,
      title: "Password Manager",
      description: "Developed a comprehensive Password Manager using Python that securely stores and manages passwords with an user-friendly interface. Uses SHA-256 hashing for password security and SQLite for database storage. Features user registration, login, password storage, and generation. Employs strong encryption and hashed passwords for enhanced security ",
      technologies: ["Python", "Hashlib", "Encryption", "SQLite" ],
      githubLink: "https://github.com/aniruddha-10/CPSC-329-PROJECT",
      demoLink: "https://github.com/aniruddha-10/CPSC-329-PROJECT",
    },
  ];

  return (
    <div className="min-h-screen bg-background particle-container">
      <AnimatedBackground />
      <Navigation />

      {/* Projects Section */}
      <section id="projects" className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl font-bold mb-8">Featured Projects</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                animation="fade-in-up" 
                delay={`delay-${(index + 1) * 100}` as any}
              >
                <Card className="group hover:shadow-lg transition-all">
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.githubLink, '_blank')}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => window.open(project.demoLink, '_blank')}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Aniruddha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
