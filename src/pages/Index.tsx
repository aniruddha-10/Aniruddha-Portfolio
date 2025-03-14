
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedSection from '@/components/AnimatedSection';

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
      title: "Job Quest",
      description: "Developed a full-stack job board application using PHP and Laravel, enabling users to search, filter, and apply for jobs, with secure authentication and employer functionalities. Designed a responsive UI with Tailwind CSS and Breadcrumbs Navigation, enhancing user experience across the platform.",
      technologies: ["React", "TypeScript", "PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Postman", "Adminer"],
      githubLink: "https://github.com/aniruddha-10/JobQuest",
      demoLink: "https://github.com/aniruddha-10/JobQuest",
    },
    {
      id: 2,
      title: "Twitter Sentiment Analysis using NLP",
      description: "Conducted Twitter Sentiment Analysis using Natural Language Processing (NLP) techniques. Performed essential preprocessing, exploratory data analysis (EDA), and feature extraction on a dataset of 31,962 labeled tweets. Developed machine learning models to classify tweets as racist/sexist (label ’1’) or non-racist/sexist (label ’0’), achievingbthe project’s objective of hate speech detection.",
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
              <Button onClick={scrollToContact}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" onClick={() => window.open('https://github.com/aniruddha-10', '_blank')}>
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
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl font-bold mb-8">About Me</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-in-left" delay="delay-100">
              <p className="text-lg text-muted-foreground">
                Hi, I'm Aniruddha, a final-year Computer Science student at the University of Calgary and currently working as a Junior Product Development Intern at Nude Solutions. 
                I have a passion for software development and enjoy exploring different aspects of the software lifecycle, from design and architecture to deployment and optimization.
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

      {/* Projects Section */}
      <section id="projects" className="py-16">
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

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/50">
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
                  <h3 className="font-heading text-xl font-semibold">{exp.company}</h3>
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

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
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
                  'Information and Security', 'Theoritical Computer Science'].map((course) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
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
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay="delay-200">
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

export default Index;
