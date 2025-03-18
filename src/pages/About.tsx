
import React from 'react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background particle-container">
      <AnimatedBackground />
      
      <div className="flex-grow z-10 flex flex-col">
        <Navigation />
        
        {/* About Section */}
        <section id="about" className="flex-grow flex items-center justify-center py-16">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-heading text-3xl font-bold mb-8">About Me</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-in-left" delay="delay-100">
                <p className="text-lg text-muted-foreground">
                  Hi, I'm Aniruddha, a final-year Computer Science student at the University of Calgary and currently working as a Junior Product Development Intern at Nude Solutions. 
                  I have a passion for software development and enjoy exploring different aspects of the software lifecycle, from design and architecture to deployment and optimization.
                </p>
                <br></br>
                <p className="text-lg text-muted-foreground">
                  Beyond coding, I love expressing my creativity through music and art. Whether it's playing the guitar, painting, or experimenting in the kitchen, I enjoy working with my hands and bringing ideas to life.
                  I'm always open to new challenges and opportunities—let's connect!
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slide-in-right" delay="delay-200">
                <h3 className="font-heading text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'Git', 'PHP', 'Laravel',
                    'Dart', 'CSS3', 'Haskell', 'HTML5', 'C', 'AssemblyScript',
                    'Netlify', 'GithubPages', 'Firebase', 'Angular', 'Flask', 'Flutter', 'React Native',
                    'Yarn', 'JavaFX', 'Express.js', 'SASS', 'SQLite', 'Prisma', 'PlanetScale', 
                    'Postgres', 'MariaDB', 'MySQL', 'MongoDB', 
                    'NumPy', 'Matplotlib', 'Pandas', 'scikit-learn', 'Notion'
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
      
      {/* Smaller footer */}
      <footer className="py-3 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground/60 text-xs">
          <p>© 2024 Aniruddha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
