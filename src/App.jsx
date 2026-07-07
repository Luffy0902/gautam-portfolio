import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  FileText, 
  ExternalLink, 
  Code, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  MapPin, 
  Briefcase, 
  Cpu, 
  Layers, 
  Send,
  ArrowUp,
  Phone,
  Sparkles,
  Globe,
  Terminal,
  Database,
  Calendar
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

// Custom SVG Icons for Brands since lucide-react removed them in recent versions
const GithubIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return 'dark'; // Always default to dark for premium visual contrast
  });

  const [activeSection, setActiveSection] = useState('home');
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [activeSkillsTab, setActiveSkillsTab] = useState(portfolioData.skills[0].category);

  const lastScrollY = useRef(0);

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track active section and scroll metrics
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate Scroll Progress Bar width
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Show/Hide Navbar on scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false); // Scrolling down, hide nav
      } else {
        setIsNavVisible(true); // Scrolling up, show nav
      }
      lastScrollY.current = currentScrollY;

      // Show/Hide Back to Top button
      if (currentScrollY > 400) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }

      // Check current active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spotlight mouse listener for premium card effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitStatus('loading');
    // Simulate contact form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1500);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Get distinct categories of projects for filters
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

  // Filter projects list
  const filteredProjects = projectFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === projectFilter);

  // Skill category items helper
  const activeSkillsGroup = portfolioData.skills.find(s => s.category === activeSkillsTab) || portfolioData.skills[0];

  // Helper function to return skill icon
  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('javascript') || name.includes('typescript')) return <Code size={20} />;
    if (name.includes('react') || name.includes('next')) return <Layers size={20} />;
    if (name.includes('node') || name.includes('api') || name.includes('fastapi')) return <Cpu size={20} />;
    if (name.includes('sql') || name.includes('mongo') || name.includes('redis') || name.includes('database')) return <Database size={20} />;
    if (name.includes('docker') || name.includes('cloud') || name.includes('aws') || name.includes('cicd')) return <Terminal size={20} />;
    return <Sparkles size={20} />;
  };

  // Mock progress level for Gautam's skills to display in Awwwards layouts
  const getSkillProgress = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('react') || name.includes('javascript') || name.includes('html')) return 95;
    if (name.includes('typescript') || name.includes('css') || name.includes('tailwind')) return 90;
    if (name.includes('node') || name.includes('git') || name.includes('figma')) return 85;
    if (name.includes('python') || name.includes('fastapi') || name.includes('next')) return 80;
    return 75;
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Grid Overlay Background */}
      <div className="grid-bg" />

      {/* Ambient Lighting Blurred Blobs */}
      <div className="ambient-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Navigation Header */}
      <header className={`navbar ${isNavVisible ? '' : 'nav-hidden'}`}>
        <div className="container">
          <a href="#home" className="nav-brand">
            {portfolioData.name.split(' ')[0]}<span>.{portfolioData.name.split(' ')[1]}</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
              <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a href={portfolioData.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              <FileText size={16} /> Resume
            </a>
            
            <button 
              className="btn btn-secondary" 
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="mobile-drawer-actions">
          <a href={portfolioData.resumeUrl} className="btn btn-primary" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
            <FileText size={18} /> Download Resume
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="ping-dot" />
                🔥 Available for Freelance
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="name-highlight">{portfolioData.name}</span>
                <span className="role-gradient">Full Stack Developer & AI Engineer</span>
              </h1>
              <p className="hero-desc">
                {portfolioData.subtitle} I specialize in constructing lightweight web systems, robust cross-platform mobile apps, and deep browser integrations.
              </p>
              
              <div className="hero-btns">
                <a href="#projects" className="btn btn-primary">
                  Explore Projects <ExternalLink size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Hire Me
                </a>
              </div>

              <div className="hero-socials">
                {portfolioData.socials.github && (
                  <a href={portfolioData.socials.github} className="social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon size={20} />
                  </a>
                )}
                <a href={portfolioData.socials.linkedin} className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href={portfolioData.socials.email} className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="hero-visuals">
              <div className="visuals-container">
                <div className="glowing-ring ring-1" />
                <div className="glowing-ring ring-2" />
                <div className="avatar-wrapper">
                  <img src={portfolioData.avatar} alt={portfolioData.name} />
                </div>
                
                {/* Floating Tech Icons */}
                <div className="floating-icon icon-react" title="React"><Layers size={22} style={{ color: '#61dafb' }} /></div>
                <div className="floating-icon icon-next" title="Next.js"><Sparkles size={22} style={{ color: '#ffffff' }} /></div>
                <div className="floating-icon icon-ts" title="TypeScript"><Code size={22} style={{ color: '#3178c6' }} /></div>
                <div className="floating-icon icon-node" title="Node.js"><Cpu size={22} style={{ color: '#339933' }} /></div>
                <div className="floating-icon icon-python" title="Python"><Terminal size={22} style={{ color: '#ffd43b' }} /></div>
                <div className="floating-icon icon-docker" title="Docker"><Database size={22} style={{ color: '#2496ed' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="stats-grid">
            {portfolioData.stats.map((stat, index) => (
              <div className="stat-card glass-card spotlight-card" key={index}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="about-details" style={{ maxWidth: '850px', marginLeft: '0', marginRight: 'auto', textAlign: 'left' }}>
            <span className="section-tag" style={{ marginLeft: '0' }}>About Me</span>
            <h2 className="section-title">Crafting digital blueprints that feel premium.</h2>
            <p className="about-text" style={{ marginBottom: '24px' }}>{portfolioData.about.paragraph1}</p>
            <p className="about-text" style={{ marginBottom: '40px' }}>{portfolioData.about.paragraph2}</p>
            
            <div className="about-info-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', textAlign: 'left', gap: '30px' }}>
              <div className="info-item" style={{ alignItems: 'flex-start' }}>
                <span className="label">Location</span>
                <span className="val">Indore, India</span>
              </div>
              <div className="info-item" style={{ alignItems: 'flex-start' }}>
                <span className="label">Education</span>
                <span className="val">B.Tech (IT) - Acropolis Institute</span>
              </div>
              <div className="info-item" style={{ alignItems: 'flex-start' }}>
                <span className="label">Current Role</span>
                <span className="val">Junior Developer at Cyber Infrastructure</span>
              </div>
              <div className="info-item" style={{ alignItems: 'flex-start' }}>
                <span className="label">Academic Performance</span>
                <span className="val">CGPA: 8.09</span>
              </div>
            </div>

            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'flex-start' }}>
              <a href={portfolioData.resumeUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                <FileText size={18} /> View Offline Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ margin: '0 auto 60px', textAlign: 'center' }}>
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title" style={{ fontSize: '3rem' }}>Expertise & Technology Stack</h2>
            <p className="section-subtitle">A curated suite of modern technologies and tools I utilize to craft robust user experiences.</p>
          </div>

          <div className="skills-tabs-container">
            <div className="skills-tabs-header">
              {portfolioData.skills.map((s, idx) => (
                <button 
                  className={`skills-tab-btn ${activeSkillsTab === s.category ? 'active' : ''}`}
                  key={idx}
                  onClick={() => setActiveSkillsTab(s.category)}
                >
                  {s.category}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {activeSkillsGroup.items.map((skill, index) => {
                const progress = getSkillProgress(skill);
                return (
                  <div className="skill-card glass-card spotlight-card" key={index}>
                    <div className="skill-card-header">
                      <h3 className="skill-card-title">{skill}</h3>
                      <div className="skill-icon-box">
                        {getSkillIcon(skill)}
                      </div>
                    </div>
                    
                    <div className="skill-progress-wrap">
                      <div className="progress-info">
                        <span>Proficiency</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Portfolio Showcase</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">Explore a collection of browser plugins, graphic design layers, and dynamic web portals.</p>
          </div>

          <div className="projects-filter-bar">
            {categories.map((cat, idx) => (
              <button 
                className={`filter-btn ${projectFilter === cat ? 'active' : ''}`}
                key={idx}
                onClick={() => setProjectFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              // Mark the first project in the filtered list as a featured large project card
              const isFeatured = index === 0 && projectFilter === 'All';
              
              return (
                <div 
                  className={`project-card glass-card spotlight-card ${isFeatured ? 'project-card-featured' : ''}`} 
                  key={project.id}
                >
                  <div className="project-img-container">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay-glow" />
                  </div>
                  
                  <div className="project-info">
                    <span className="project-cat">{project.category}</span>
                    <h3 className="project-card-title" onClick={() => handleProjectClick(project)}>
                      {project.title}
                    </h3>
                    <p className="project-card-desc">{project.shortDescription}</p>
                    
                    <div className="project-tech">
                      {project.tech.map((t, idx) => (
                        <span className="tech-badge" key={idx}>{t}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      <button className="btn btn-secondary" onClick={() => handleProjectClick(project)} style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                        Read Details
                      </button>
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="project-link" target="_blank" rel="noreferrer">
                          <ExternalLink size={16} /> Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ margin: '0 auto 80px', textAlign: 'center' }}>
            <span className="section-tag">Career Path</span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">Professional milestones outlining developer roles across tech systems and freelance pipelines.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line" />
            
            {portfolioData.experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot" />
                <div className="timeline-card glass-card spotlight-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <span className="timeline-company">{exp.company}</span>
                    </div>
                    <span className="timeline-period">
                      <Calendar size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="timeline-desc">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '30px' }}>Let's build something beautiful.</h2>
              <p className="about-text" style={{ marginBottom: '48px', maxWidth: '500px' }}>
                Have an exciting project, freelance enquiry, or job opportunity? Send me a message and I will reply within 24 hours.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>dalalgautam09@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <Phone size={22} />
                  </div>
                  <div className="contact-details">
                    <h5>Phone</h5>
                    <p>+91 77239 2027</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-details">
                    <h5>Location</h5>
                    <p>Indore, MP, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <div className="glass-card spotlight-card">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="form-control"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={submitStatus === 'loading'}
                    style={{ marginTop: '12px' }}
                  >
                    {submitStatus === 'loading' ? (
                      'Sending...'
                    ) : submitStatus === 'success' ? (
                      'Message Sent!'
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <a href="#home" className="nav-brand">
              {portfolioData.name.split(' ')[0]}<span>.{portfolioData.name.split(' ')[1]}</span>
            </a>

            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-socials">
              {portfolioData.socials.github && (
                <a href={portfolioData.socials.github} className="social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
              )}
              <a href={portfolioData.socials.linkedin} className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={portfolioData.socials.email} className="social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <p className="footer-text">
            © {new Date().getFullYear()} {portfolioData.name}. Crafted with premium visual storytelling.
          </p>
        </div>
      </footer>

      {/* Project Detail Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal} id="projectModal">
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close Modal">
              <X size={20} />
            </button>
            
            <div className="modal-hero-img">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <div className="modal-body">
              <span className="modal-cat">{selectedProject.category}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              
              <div className="modal-tech">
                {selectedProject.tech.map((t, idx) => (
                  <span className="tech-badge" key={idx}>{t}</span>
                ))}
              </div>
              
              <div className="modal-meta-links">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                    <Code size={18} /> View Repository
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> Visit Live Demo
                  </a>
                )}
              </div>
              
              <div className="modal-section">
                <h4>Project Overview</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.description}</p>
              </div>
              
              {selectedProject.features && (
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="timeline-desc">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} style={{ color: 'var(--text-secondary)' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.challengeSolved && (
                <div className="modal-section">
                  <h4>Technical Challenge & Solution</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.challengeSolved}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      <button 
        className={`back-to-top ${isBackToTopVisible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}

export default App;
