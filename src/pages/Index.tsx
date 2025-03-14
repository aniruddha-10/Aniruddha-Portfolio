import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      githubLink: "https://github.com/your-username/portfolio",
      demoLink: "https://your-portfolio-url.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack application for managing tasks with user authentication and real-time updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/your-username/task-manager",
      demoLink: "https://your-task-app-url.com",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "An e-commerce website with product listings, shopping cart, and payment integration.",
      technologies: ["React", "Firebase", "Stripe API", "Redux"],
      githubLink: "https://github.com/your-username/ecommerce",
      demoLink: "https://your-ecommerce-url.com",
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "Nude Solutions",
      position: "Junior Product Development Intern",
      duration: "May 2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React, TypeScript, and Laravel",
        "Collaborated with cross-functional teams to implement new features and fix bugs",
        "Participated in code reviews and improved code quality through unit tests and documentation",
        "Optimized application performance by identifying and resolving bottlenecks"
      ]
    },
    {
      id: 2,
      company: "University of Calgary",
      position: "Research Assistant",
      duration: "September 2022 - April 2023",
      responsibilities: [
        "Assisted in developing algorithms for data analysis using Python and scikit-learn",
        "Created visualizations and reports to communicate research findings",
        "Collaborated with faculty members on research publications",
        "Maintained and organized research data for easy access and reference"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Button onClick={scrollToContact}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" onClick={() => window.open('https://github.com/your-username', '_blank')}>
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
                Hi, I'm Aniruddha Khan, a final-year Computer Science student at the University of Calgary and currently working as a Junior Product Development Intern at Nude Solutions. 
                I have a passion for software development and enjoy exploring different aspects of the software lifecycle, from design and architecture to deployment and optimization.
                Beyond coding, I love expressing my creativity through music and art. Whether it's playing the guitar, painting, or experimenting in the kitchen, I enjoy working with my hands and bringing ideas to life.
                I'm always open to new challenges and opportunities—let’s connect!
              </p>
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all">
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="p-6">
                <h3 className="font-heading text-xl font-semibold">{exp.company}</h3>
                <p className="text-primary font-medium">{exp.position} • {exp.duration}</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>• {resp}</li>
                  ))}
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
                <Button onClick={() => window.location.href = 'mailto:your-email@example.com'}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
                <Button variant="outline" onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}>
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
