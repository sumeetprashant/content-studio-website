# Content Studio Website - Project Context

## <� Project Overview

**Project Name:** Content Studio Website  
**Description:** Premium podcast and video production studio website with cinematic animations  
**Live URL:** [GitHub Pages](https://sumeetprashant.github.io/content-studio-website)  
**Local Dev:** http://localhost:3000/content-studio-website  
**Repository:** https://github.com/sumeetprashant/content-studio-website  

## =� Technical Stack

- **Frontend:** React 19.0.0
- **Animation:** GSAP 3.13.0 with ScrollTrigger & ScrollToPlugin
- **Styling:** Tailwind CSS 3.4.17 + Custom CSS
- **Build Tool:** CRACO 7.1.0
- **Icons:** Lucide React 0.525.0
- **Deployment:** GitHub Pages

## <� Design System

### Brand Colors
```css
--brand-teal: #02A39e       /* Primary brand color */
--light-blue: #87ceeb       /* Light accent */
--sky-blue: #40e0d0         /* Sky accent */
--teal-accent: #20b2aa      /* Teal variation */
--deep-teal: #008b8b        /* Deep teal */
```

### Gradients
```css
--primary-gradient: linear-gradient(135deg, #02A39e 0%, #40e0d0 100%)
--secondary-gradient: linear-gradient(135deg, #40e0d0 0%, #87ceeb 100%)
--gradient-text: linear-gradient(135deg, #02A39e 0%, #40e0d0 50%, #87ceeb 100%)
```

### Typography
- **Headers:** 'DM Serif Display' (serif)
- **Body:** 'Outfit' (sans-serif)
- **Weights:** 100-900 available

## <� Animation Philosophy

### Core Principles
1. **Performance Over Complexity** - Smooth 60fps is priority
2. **Snappy & Responsive** - Fast feedback for user interactions
3. **Cinematic Quality** - Premium studio feel without being heavy
4. **Purposeful Motion** - Every animation serves UX purpose

### Animation Constraints
- **Max Duration:** 0.3s for UI interactions
- **Scroll Animations:** 0.5s max for entrance effects
- **Stagger Timing:** 0.08s-0.1s between elements
- **Easing:** power2.out for snappy feel, back.out for bounce effects

### Current Animation System
```javascript
// Service Cards: 3D entrance with hover effects
gsap.set('.service-card', { opacity: 0, y: 50, scale: 0.95, rotationX: 15 });
gsap.to('.service-card', { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 0.5, stagger: 0.08 });

// Journey Steps: Elastic entrance
gsap.set('.journey-step', { opacity: 0, y: 60, scale: 0.9, rotation: 3 });
gsap.to('.journey-step', { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.6, stagger: 0.1 });

// Cinematic Headers: Character-by-character reveal
gsap.to(chars, { opacity: 1, y: 0, rotationX: 0, duration: 0.4, stagger: 0.02 });
```

## =� Current Implementation Status

###  Completed Features
- **Hero Section** with floating 3D elements and gradient text
- **Infinite Scrolling Logos** (left to right animation)
- **Moving Testimonials** (right to left animation)
- **Service Cards** with 3D entrance and hover effects
- **Journey Steps** with elastic animations
- **Magnetic Buttons** with mouse tracking
- **Cinematic Header Reveals** for all section titles
- **Theme Toggle** (light/dark mode)
- **Vertical Navigation** with smooth scrolling
- **Contact Form** with validation
- **Responsive Design** for mobile/tablet

### = Section Structure
1. **Hero** - Brand introduction with floating elements
2. **Portfolio** - Client logos + testimonials
3. **Studio Services** - Production offerings
4. **AI Services** - AI-powered enhancements
5. **Contact** - Contact form + details
6. **Footer** - Links and information

### <� Services Offered
**Studio Production:**
- Premium Studio Space (�20,000/day)
- Podcast Production (�15,000+)
- Corporate Films (Custom)
- Content Creation (Custom)

**AI Enhancement:**
- AI Voice Enhancement (�8,000/hr)
- AI Video Enhancement (�12,000/project)
- AI Content Generation (�25,000/package)

## =' Development Workflow

### Local Development
```bash
# Start development server
npm start
# Runs on http://localhost:3000/content-studio-website

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Testing Protocol
1. **Visual Testing:** Check animations on localhost:3000
2. **Performance:** Monitor for 60fps during scroll
3. **Responsive:** Test on mobile/tablet breakpoints
4. **Cross-browser:** Verify on Chrome, Firefox, Safari

### Git Workflow
```bash
# Commit format
git commit -m "feature: add cinematic header reveals

> Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

## =� Project Structure

```
src/
   App.js          # Main component with all animations
   App.css         # Custom styles + animations
   index.js        # React entry point
   index.css       # Global styles

public/
   index.html      # HTML template
   ...

.claude/
   CLAUDE.md       # This file
   settings.json   # Claude Code settings
   commands/       # Custom slash commands
   hooks/          # Shell command hooks
   memory/         # Project memory files
```

## <� Animation Implementation Notes

### GSAP ScrollTrigger Setup
```javascript
// Trigger points for optimal performance
start: 'top 75%'  // Service cards
start: 'top 85%'  // Header reveals
```

### Hover Effects Pattern
```javascript
// Consistent hover pattern across components
mouseenter: { scale: 1.02-1.05, y: -8 to -12, duration: 0.25-0.3 }
mouseleave: { scale: 1, y: 0, duration: 0.25-0.3 }
```

### Performance Optimizations
- **Reduced transform layers** for better GPU utilization
- **Optimized stagger timing** for smoother sequences
- **Efficient trigger points** to avoid unnecessary calculations
- **Minimal DOM manipulation** during animations

## =� Future Enhancement Ideas

### Potential Improvements
- **Page transitions** between sections
- **Custom cursor** animations
- **Loading screen** with brand animation
- **Interactive portfolio** gallery
- **Video testimonials** with play controls
- **Advanced scroll effects** (parallax, reveal masks)
- **Micro-interactions** on form elements

### Technical Considerations
- **Bundle size optimization** for faster loading
- **Lazy loading** for images and heavy components
- **Progressive enhancement** for older browsers
- **A11y improvements** for animations (prefers-reduced-motion)

## =� Common Issues & Solutions

### Animation Performance
- **Issue:** Laggy scrolling on mobile
- **Solution:** Use `will-change: transform` sparingly, optimize transforms

### GSAP Timeline Conflicts
- **Issue:** Animations interfering with each other
- **Solution:** Use proper cleanup with `ScrollTrigger.getAll().forEach(trigger => trigger.kill())`

### Responsive Animations
- **Issue:** Animations breaking on mobile
- **Solution:** Adjust trigger points and durations for smaller screens

## = Key Contacts & Resources

**Client:** Content Studio (Gurugram, Haryana)  
**Email:** info@contentstudio.co.in  
**Phone:** +91 8920249869  

**Development Notes:**
- User is non-technical, focus on visual results
- Emphasize performance and professional feel
- Always test changes on localhost before explaining
- Provide clear, actionable feedback

---

**Last Updated:** July 17, 2025  
**Claude Code Version:** Latest  
**Project Status:**  Core animations complete, ready for enhancements