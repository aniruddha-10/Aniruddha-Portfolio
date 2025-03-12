
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Your Name</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Computer Science Student at University of Calgary
            </p>
            <div className="flex gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground">
                I'm a final year Computer Science student at the University of Calgary,
                passionate about building innovative solutions and exploring new technologies.
                My focus areas include [Your Interests/Specializations].
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="group hover:shadow-lg transition-all">
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    Brief description of your project. What it does and the technologies used.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {[1, 2].map((exp) => (
              <Card key={exp} className="p-6">
                <h3 className="font-heading text-xl font-semibold">Company/Organization Name</h3>
                <p className="text-primary font-medium">Position • Duration</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Key achievement or responsibility</li>
                  <li>• Another key achievement</li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Education</h2>
          <Card className="p-6">
            <h3 className="font-heading text-xl font-semibold">University of Calgary</h3>
            <p className="text-primary font-medium">Bachelor of Science in Computer Science</p>
            <p className="text-muted-foreground mt-2">Expected Graduation: 2024</p>
            <div className="mt-4">
              <p className="font-medium">Relevant Coursework:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'].map((course) => (
                  <span key={course} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm currently looking for new opportunities. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
              <div className="flex gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md border bg-background"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="px-4 py-2 rounded-md border bg-background"
              />
              <Button>Send Message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
