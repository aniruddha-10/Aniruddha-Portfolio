
import React from 'react';
import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-background particle-container">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Aniruddha </span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Computer Science Student at University of Calgary
            </p>
            <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl font-bold mb-8">Explore My Portfolio</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-in-up" delay="delay-100">
              <Link to="/about" className="block p-6 bg-card rounded-lg border hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-semibold mb-2">About Me</h3>
                <p className="text-muted-foreground">Learn more about my background and skills</p>
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="delay-200">
              <Link to="/projects" className="block p-6 bg-card rounded-lg border hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-muted-foreground">Check out my latest work and achievements</p>
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="delay-300">
              <Link to="/experience" className="block p-6 bg-card rounded-lg border hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">See my professional journey and growth</p>
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay="delay-400">
              <Link to="/contact" className="block p-6 bg-card rounded-lg border hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">Get in touch or connect with me</p>
              </Link>
            </AnimatedSection>
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

export default Home;
