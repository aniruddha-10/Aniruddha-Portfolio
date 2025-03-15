
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background particle-container">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Aniruddha </span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Computer Science Student at University of Calgary
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Button asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.open('https://github.com/aniruddha-10', '_blank')}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/aniruddha-khan-4b052121a/', '_blank')}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay="delay-200">
            <div className="mt-12">
              <h2 className="font-heading text-3xl font-bold mb-6">Explore My Portfolio</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/about" className="group">
                  <div className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-primary/10 transition-colors">
                    <h3 className="text-lg font-semibold group-hover:text-primary">About Me</h3>
                  </div>
                </Link>
                <Link to="/projects" className="group">
                  <div className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-primary/10 transition-colors">
                    <h3 className="text-lg font-semibold group-hover:text-primary">Projects</h3>
                  </div>
                </Link>
                <Link to="/experience" className="group">
                  <div className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-primary/10 transition-colors">
                    <h3 className="text-lg font-semibold group-hover:text-primary">Experience</h3>
                  </div>
                </Link>
                <Link to="/contact" className="group">
                  <div className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-primary/10 transition-colors">
                    <h3 className="text-lg font-semibold group-hover:text-primary">Contact</h3>
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedSection>
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

export default Home;
