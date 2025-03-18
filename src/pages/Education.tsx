
import React from 'react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card } from '@/components/ui/card';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background particle-container">
      <AnimatedBackground />
      
      <div className="flex-grow z-10 flex flex-col">
        <Navigation />
        
        {/* Education Section */}
        <section className="flex-grow py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-heading text-3xl font-bold mb-8">Education</h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay="delay-200">
              <Card className="p-6">
                <h3 className="font-heading text-xl font-semibold">University of Calgary</h3>
                <p className="text-primary font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground mt-2">Expected Graduation: 2027</p>
                <div className="mt-4">
                  <p className="font-medium">Relevant Coursework:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Data Structures', 
                    'Algorithms', 'Software Engineering', 
                    'Database Systems','Computer Networks', 
                    'Design and Analysis of Algorithms', 
                    'Operating Systems', 'Computing Machinery', 
                    'Information and Security', 'Theoretical Computer Science'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
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

export default Education;
