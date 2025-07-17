import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { 
  Mic, 
  Video, 
  MapPin, 
  Phone, 
  Mail, 
  Camera, 
  Headphones, 
  Monitor, 
  Layers, 
  Sparkles,
  Brain,
  Zap,
  Play,
  Pause,
  Menu,
  X
} from "lucide-react";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
const API = `${BACKEND_URL}/api`;

// Enhanced Services Data with Consistent Icons
const services = {
  production: [
    {
      title: 'Premium Studio Space',
      price: '₹20,000',
      label: 'Per Day',
      description: 'State-of-the-art acoustically treated studio with multiple sets and backdrops',
      features: ['Professional Crew Included', '4K Multi-Camera Setup', 'Expert Lighting Team', 'Multiple Set Designs'],
      icon: <Monitor className="service-icon-consistent" strokeWidth={2} />,
      premium: false
    },
    {
      title: 'Podcast Production',
      price: '₹15,000',
      label: 'Starting From',
      description: 'Complete podcast production with our expert team and premium equipment',
      features: ['Multi-Camera Recording', 'Professional Audio', 'Full Post-Production', 'Distribution Support'],
      icon: <Mic className="service-icon-consistent" strokeWidth={2} />,
      premium: true
    },
    {
      title: 'Corporate Films',
      price: 'Custom',
      label: 'Quote',
      description: 'Professional corporate video production with cinematic quality',
      features: ['In-Studio or On-Location', 'Full Production Crew', 'Cinematic Quality', 'Brand Storytelling'],
      icon: <Video className="service-icon-consistent" strokeWidth={2} />,
      premium: false
    },
    {
      title: 'Content Creation',
      price: 'Custom',
      label: 'Quote',
      description: 'Social media content and digital marketing videos',
      features: ['Social Media Ready', 'Multiple Formats', 'Quick Turnaround', 'Trend-Focused'],
      icon: <Camera className="service-icon-consistent" strokeWidth={2} />,
      premium: false
    }
  ],
  ai: [
    {
      title: 'AI Voice Enhancement',
      price: '₹8,000',
      label: 'Per Hour',
      description: 'AI-powered voice enhancement and noise reduction',
      features: ['Real-time Processing', 'Voice Clarity', 'Noise Reduction', 'Multiple Languages'],
      icon: <Headphones className="service-icon-consistent" strokeWidth={2} />,
      premium: false
    },
    {
      title: 'AI Video Enhancement',
      price: '₹12,000',
      label: 'Per Project',
      description: 'Enhance your videos with cutting-edge AI technology',
      features: ['4K Upscaling', 'Color Correction', 'Auto-Edit Features', 'Smart Transitions'],
      icon: <Sparkles className="service-icon-consistent" strokeWidth={2} />,
      premium: true
    },
    {
      title: 'AI Content Generation',
      price: '₹25,000',
      label: 'Custom Package',
      description: 'AI-generated content tailored to your brand',
      features: ['Brand-Specific Content', 'Multiple Variants', 'A/B Testing Ready', 'Unlimited Revisions'],
      icon: <Brain className="service-icon-consistent" strokeWidth={2} />,
      premium: false
    }
  ]
};

// Particle System Component
const ParticleSystem = () => {
  const particlesRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      
      if (containerRef.current) {
        containerRef.current.appendChild(particle);
      }
      
      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="particles-container" />;
};


const ContentStudioApp = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Initialize animations
  useEffect(() => {
    // Advanced Hero animations with spectacular effects
    const tl = gsap.timeline();
    
    // Create initial states - but not for hero-title since we're handling it separately
    gsap.set('.hero-subtitle', { opacity: 0, y: 50, x: -30 });
    gsap.set('.hero-ctas', { opacity: 0, y: 30, scale: 0.9 });
    
    // Skip hero-title animation for now since we're handling it separately
    tl.to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to('.hero-ctas', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.4)'
    }, '-=0.5');

    // Simple text animation that works
    setTimeout(() => {
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        // Just ensure text is visible - no complex animation for now
        heroTitle.style.opacity = '1';
      }
    }, 100);

    // Enhanced Journey steps animation - snappier timing
    ScrollTrigger.create({
      trigger: '.journey-grid',
      start: 'top 75%',
      onEnter: () => {
        // Set initial states for journey steps
        gsap.set('.journey-step', { opacity: 0, y: 60, scale: 0.9, rotation: 3 });
        
        gsap.to('.journey-step', {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          onComplete: () => {
            // Add hover animations to journey steps
            document.querySelectorAll('.journey-step').forEach(step => {
              step.addEventListener('mouseenter', () => {
                gsap.to(step, {
                  scale: 1.03,
                  y: -8,
                  duration: 0.25,
                  ease: 'power2.out'
                });
              });
              
              step.addEventListener('mouseleave', () => {
                gsap.to(step, {
                  scale: 1,
                  y: 0,
                  duration: 0.25,
                  ease: 'power2.out'
                });
              });
            });
          }
        });
        
        // Animate journey numbers with snappy effect
        gsap.from('.journey-number', {
          scale: 0,
          rotation: 180,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          delay: 0.2
        });
      }
    });

    // Premium Service cards animation - creative and distinctive
    ScrollTrigger.create({
      trigger: '.services-grid',
      start: 'top 75%',
      onEnter: () => {
        // Set initial states with creative transforms
        gsap.set('.service-card', { 
          opacity: 0, 
          scale: 0.9,
          y: 80,
          rotationY: 15
        });
        
        gsap.to('.service-card', {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'back.out(1.2)',
          onComplete: () => {
            // Premium hover effects with creative flair
            document.querySelectorAll('.service-card').forEach(card => {
              card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                  scale: 1.05,
                  y: -15,
                  rotationY: 3,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              });
              
              card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                  scale: 1,
                  y: 0,
                  rotationY: 0,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              });
            });
          }
        });
        
        // Animate service titles with elegant reveal
        gsap.from('.service-title-prominent', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.2
        });
      }
    });

    // Enhanced magnetic button effects - snappier timing
    const addMagneticEffect = () => {
      document.querySelectorAll('.cta-primary, .cta-secondary, .service-cta').forEach(button => {
        button.addEventListener('mouseenter', (e) => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.25,
            ease: 'power2.out'
          });
        });
        
        button.addEventListener('mouseleave', (e) => {
          gsap.to(button, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.25,
            ease: 'power2.out'
          });
        });
        
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(button, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.15,
            ease: 'power2.out'
          });
        });
      });
    };
    
    // Add continuous particle animation
    const animateParticles = () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        gsap.to(particle, {
          y: -window.innerHeight,
          duration: Math.random() * 3 + 2,
          ease: 'none',
          repeat: -1,
          delay: Math.random() * 2
        });
      });
    };
    
    // Add parallax effect to background elements
    const createParallaxEffect = () => {
      gsap.to('.particles-container', {
        y: -20,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });
    };
    
    // Premium cinematic header text reveals - fixed for cross-browser
    const createHeaderReveals = () => {
      // Split text into characters for reveal animation
      const headers = document.querySelectorAll('.section-title, .category-title, .contact h2');
      
      headers.forEach(header => {
        // Skip if already processed
        if (header.querySelector('span')) return;
        
        const text = header.textContent.trim();
        header.innerHTML = '';
        header.style.whiteSpace = 'nowrap';
        header.style.overflow = 'visible';
        
        // Create spans for each character with stable transforms
        [...text].forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateY(30px) scale(0.9)';
          span.style.transformOrigin = 'center bottom';
          span.style.backfaceVisibility = 'hidden';
          span.style.webkitFontSmoothing = 'antialiased';
          span.style.mozOsxFontSmoothing = 'grayscale';
          span.style.textRendering = 'optimizeLegibility';
          span.style.willChange = 'transform, opacity';
          header.appendChild(span);
        });
      });
      
      // Animate headers on scroll with stable timing
      headers.forEach(header => {
        ScrollTrigger.create({
          trigger: header,
          start: 'top 85%',
          onEnter: () => {
            const chars = header.querySelectorAll('span');
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.03,
              ease: 'power2.out'
            });
          }
        });
      });
    };
    
    // Initialize all effects
    setTimeout(() => {
      addMagneticEffect();
      createHeaderReveals();
      animateParticles();
      createParallaxEffect();
    }, 300);

    // Vertical navigation
    setupVerticalNavigation();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const setupVerticalNavigation = () => {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section[id]');
    
    navDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetId = dot.dataset.section;
        gsap.to(window, {
          duration: 1,
          scrollTo: `#${targetId}`,
          ease: 'power3.inOut'
        });
      });
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: () => {
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navDots.forEach(dot => dot.classList.remove('active'));
            const activeDot = document.querySelector(`[data-section="${section.id}"]`);
            if (activeDot) activeDot.classList.add('active');
          }
        });
      }
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await axios.post(`${API}/contact`, contactForm);
      setSubmitStatus('success');
      setContactForm({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${sectionId}`,
      ease: 'power3.inOut'
    });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App" data-theme={theme}>
      <ParticleSystem />
      
      {/* Theme Toggle */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className="theme-toggle-indicator"></div>
      </button>

      {/* Vertical Navigation */}
      <nav className="vertical-nav">
        <div className="nav-dot active" data-section="home">
          <span className="nav-tooltip">Home</span>
        </div>
        <div className="nav-dot" data-section="journey">
          <span className="nav-tooltip">Journey</span>
        </div>
        <div className="nav-dot" data-section="studio">
          <span className="nav-tooltip">Studio</span>
        </div>
        <div className="nav-dot" data-section="ai">
          <span className="nav-tooltip">AI Services</span>
        </div>
        <div className="nav-dot" data-section="contact">
          <span className="nav-tooltip">Contact</span>
        </div>
      </nav>

      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">Content Studio</a>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="menu-icon" strokeWidth={2} />
            ) : (
              <Menu className="menu-icon" strokeWidth={2} />
            )}
          </button>
          
          {/* Mobile Navigation Menu */}
          <nav className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
            <div className="mobile-nav-content">
              <button 
                className="mobile-nav-item"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => scrollToSection('portfolio')}
              >
                Portfolio
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => scrollToSection('studio')}
              >
                Studio Services
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => scrollToSection('ai')}
              >
                AI Services
              </button>
              <button 
                className="mobile-nav-item"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                India's Premier <br />
                <span className="hero-highlight">Podcast & Video</span> <br />
                Production Studio
              </h1>
              <p className="hero-subtitle">
                From corporate giants to rising creators, we've produced 500+ hours of premium content. 
                State-of-the-art facilities, AI-powered post-production, and legendary results.
              </p>
              <div className="hero-ctas">
                <button 
                  className="cta-primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Book Studio Tour
                </button>
                <button 
                  className="cta-secondary"
                  onClick={() => scrollToSection('portfolio')}
                >
                  See Our Work
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
              <div className="hero-glow"></div>
            </div>
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="portfolio-container">
            <div className="section-header">
              <h2 className="section-title">Trusted by Industry Leaders</h2>
              <p className="section-subtitle">
                We've helped brands across industries create content that converts and captivates
              </p>
            </div>
            
            <div className="client-logos">
              <div className="logos-track">
                <div className="logo-item">
                  <div className="logo-placeholder">Microsoft</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Amazon</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Google</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Netflix</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Spotify</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Apple</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Adobe</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Tesla</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Uber</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Airbnb</div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="logo-item">
                  <div className="logo-placeholder">Microsoft</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Amazon</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Google</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Netflix</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Spotify</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Apple</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Adobe</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Tesla</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Uber</div>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder">Airbnb</div>
                </div>
              </div>
            </div>

            <div className="testimonials-section">
              <div className="testimonials-track">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "The team at Content Studio transformed our podcast from amateur to professional. 
                      The AI-powered editing saved us weeks of work, and the final product exceeded all expectations."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">SJ</div>
                      </div>
                      <div className="author-info">
                        <div className="author-name">Sarah Johnson</div>
                        <div className="author-title">Head of Content, TechCorp</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "Professional setup, incredible results. Our corporate video series became our most 
                      successful marketing campaign. The team's attention to detail is unmatched."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">MR</div>
                      </div>
                      <div className="author-info">
                        <div className="author-name">Michael Rodriguez</div>
                        <div className="author-title">CMO, StartupX</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "From concept to launch, Content Studio handled everything. The AI voice enhancement 
                      made our podcast sound like a major production. Highly recommend!"
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">AP</div>
                      </div>
                      <div className="author-info">
                        <div className="author-name">Anjali Patel</div>
                        <div className="author-title">Founder, CreativeMinds</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "Outstanding quality and service. Our brand video got 2M views in the first week. 
                      The studio's expertise in AI-powered content creation is game-changing."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">RK</div>
                      </div>
                      <div className="author-info">
                        <div className="author-name">Raj Kumar</div>
                        <div className="author-title">Brand Director, InnovateTech</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Duplicate for seamless loop */}
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "The team at Content Studio transformed our podcast from amateur to professional. 
                      The AI-powered editing saved us weeks of work, and the final product exceeded all expectations."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">SJ</div>
                      </div>
                      <div className="author-info">
                        <div className="author-name">Sarah Johnson</div>
                        <div className="author-title">Head of Content, TechCorp</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "Professional setup, incredible results. Our corporate video series became our most 
                      successful marketing campaign. The team's attention to detail is unmatched."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">MR</div>
                      </div>
                      <div className="author-info">
                        <div className="author-name">Michael Rodriguez</div>
                        <div className="author-title">CMO, StartupX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="studio">
          <div className="service-category">
            <div className="category-header">
              <h2 className="category-title">Studio Production</h2>
              <p className="category-subtitle">
                Premium studio space with multiple sets, professional crew, and cutting-edge equipment
              </p>
            </div>
            <div className="services-grid">
              {services.production.map((service, index) => (
                <div key={index} className={`service-card ${service.premium ? 'premium' : ''}`}>
                  <div className="service-header-new">
                    <h3 className="service-title-prominent">{service.title}</h3>
                    <div className="service-price">
                      <div className="price-label">{service.label}</div>
                      <div className="price-value">{service.price}</div>
                    </div>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="service-cta"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="ai">
          <div className="service-category">
            <div className="category-header">
              <h2 className="category-title">AI Enhancement</h2>
              <p className="category-subtitle">
                Cutting-edge AI technology to elevate your content production
              </p>
            </div>
            <div className="services-grid">
              {services.ai.map((service, index) => (
                <div key={index} className={`service-card ${service.premium ? 'premium' : ''}`}>
                  <div className="service-header-new">
                    <h3 className="service-title-prominent">{service.title}</h3>
                    <div className="service-price">
                      <div className="price-label">{service.label}</div>
                      <div className="price-value">{service.price}</div>
                    </div>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="service-cta"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Create Awesomeness</h2>
              <p className="contact-description">
                Ready to elevate your content with our premium studio and AI-powered production? 
                Let's discuss your vision and bring it to life.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin className="contact-icon" strokeWidth={2} />
                  <span className="contact-text">Gurugram, Haryana</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" strokeWidth={2} />
                  <span className="contact-text">+91 8920249869</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" strokeWidth={2} />
                  <span className="contact-text">info@contentstudio.co.in</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="form-input" 
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="form-input" 
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service"
                    className="form-input" 
                    value={contactForm.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="podcast">Podcast Production</option>
                    <option value="corporate">Corporate Films</option>
                    <option value="content">Content Creation</option>
                    <option value="ai">AI Enhancement</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    className="form-input" 
                    rows="4" 
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="success-message">Message sent successfully! We'll get back to you soon.</div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">Failed to send message. Please try again or contact us directly.</div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Content Studio</h3>
            <p>Where legends record. India's premier podcast and video production facility with cutting-edge AI technology.</p>
          </div>
          <div className="footer-section">
            <h3>Studio Services</h3>
            <button onClick={() => scrollToSection('studio')}>Premium Studio Space</button>
            <button onClick={() => scrollToSection('studio')}>Podcast Production</button>
            <button onClick={() => scrollToSection('studio')}>Corporate Films</button>
            <button onClick={() => scrollToSection('studio')}>Content Creation</button>
          </div>
          <div className="footer-section">
            <h3>AI Services</h3>
            <button onClick={() => scrollToSection('ai')}>AI Voice Enhancement</button>
            <button onClick={() => scrollToSection('ai')}>AI Video Enhancement</button>
            <button onClick={() => scrollToSection('ai')}>AI Content Generation</button>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <a href="mailto:info@contentstudio.co.in">info@contentstudio.co.in</a>
            <a href="tel:+918920249869">+91 8920249869</a>
            <p>Gurugram, Haryana</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Content Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.log('API not available - running in demo mode');
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return <ContentStudioApp />;
};

function App() {
  return (
    <BrowserRouter basename="/content-studio-website">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;