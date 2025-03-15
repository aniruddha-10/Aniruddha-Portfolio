import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log({ email, message });
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background particle-container">
      {/* Position the background relative to this container */}
      <AnimatedBackground />
      
      {/* Main content with z-index to appear above background */}
      <div className="flex-grow z-10 flex flex-col">
        <Navigation />

        {/* Contact Section */}
        <section id="contact" className="flex-grow flex items-center justify-center py-16">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-heading text-3xl font-bold mb-8">Get In Touch</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-in-left" delay="delay-100">
                <p className="text-lg text-muted-foreground mb-6">
                  I'm currently looking for new opportunities. Whether you have a question
                  or just want to say hi, feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <Button onClick={() => window.location.href = 'mailto:aniruddhakhan747@gmail.com'}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Button>
                  <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/aniruddha-khan-4b052121a/', '_blank')}>
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" onClick={() => window.open('https://github.com/aniruddha-10', '_blank')}>
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-in-right" delay="delay-200">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-md border bg-background"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="px-4 py-2 rounded-md border bg-background"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button type="submit">Send Message</Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer with proper z-index */}
      <footer className="py-2 border-t border-border/30 bg-background z-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground/60 text-xs">
          <p>© 2024 Aniruddha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;