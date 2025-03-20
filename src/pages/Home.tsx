
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background particle-container relative overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 dark:from-blue-950/10 dark:to-purple-950/10 z-0" />
      
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aniruddha </span> 👋
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Computer Science Student at University of Calgary
              </p>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" 
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open('https://github.com/aniruddha-10', '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" 
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open('https://www.linkedin.com/in/aniruddha-khan-4b052121a/', '_blank')}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </AnimatedSection>
            
            {/* Feature Cards */}
            <AnimatedSection animation="fade-in-up" delay="delay-200">
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-gradient-to-br from-white to-purple-50 dark:from-secondary/40 dark:to-secondary/20 rounded-lg p-6 shadow-sm border border-purple-100/50 dark:border-purple-900/20">
                  <h3 className="font-heading text-lg font-semibold mb-2">Software Development</h3>
                  <p className="text-muted-foreground">Passionate about building efficient, user-friendly applications with modern technologies.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-blue-50 dark:from-secondary/40 dark:to-secondary/20 rounded-lg p-6 shadow-sm border border-blue-100/50 dark:border-blue-900/20">
                  <h3 className="font-heading text-lg font-semibold mb-2">Creative Problem Solving</h3>
                  <p className="text-muted-foreground">Tackling complex challenges with innovative solutions and analytical thinking.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-green-50 dark:from-secondary/40 dark:to-secondary/20 rounded-lg p-6 shadow-sm border border-green-100/50 dark:border-green-900/20">
                  <h3 className="font-heading text-lg font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">Always exploring new technologies and methodologies to expand my skill set.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-4 border-t border-border/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground/80 text-sm">
          <p>© 2024 Aniruddha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
