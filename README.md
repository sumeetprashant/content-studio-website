# Content Studio - Premium Podcast & Video Production Website

![Content Studio](https://img.shields.io/badge/Content%20Studio-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)

## 🌟 Overview

Content Studio is India's premier podcast and video production facility featuring state-of-the-art equipment, AI-powered post-production, and professional content creation services. This website showcases our services with stunning GSAP animations, glass morphism design, and mobile-responsive interface.

## 🚀 Live Demo

**Production Site:** [https://sumeetprashant.github.io/content-studio-website/](https://sumeetprashant.github.io/content-studio-website/)

## ✨ Features

- **🎨 Modern Design:** Glass morphism with dark/light theme toggle
- **⚡ GSAP Animations:** Smooth, cinematic animations with ScrollTrigger
- **📱 Mobile-First:** Fully responsive design with mobile navigation
- **🎯 Service Showcase:** Premium and standard service offerings
- **🔮 AI Integration:** Highlighting AI-powered content enhancement
- **📧 Contact Form:** Integrated contact system with theme-aware styling
- **🌙 Dark Theme:** Consistent dark theme with subtle gold accents

## 🛠️ Tech Stack

- **Frontend:** React 19.0.0
- **Animation:** GSAP 3.13.0 with ScrollTrigger & ScrollToPlugin
- **Build Tool:** CRACO 7.1.0 (Create React App Configuration Override)
- **Styling:** Custom CSS with CSS Variables for theming
- **Icons:** Lucide React 0.525.0
- **Deployment:** GitHub Pages with gh-pages
- **Package Manager:** npm/yarn

## 📋 Prerequisites

Before running this project locally, ensure you have:

- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download here](https://git-scm.com/)

## 🏠 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sumeetprashant/content-studio-website.git
cd content-studio-website
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start Development Server

Using npm:
```bash
npm start
```

Or using yarn:
```bash
yarn start
```

### 4. View in Browser

Open your browser and navigate to:
```
http://localhost:3000/content-studio-website
```

The application will automatically reload when you make changes to the source files.

## 📦 Available Scripts

### Development
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

### Deployment
- `npm run deploy` - Builds and deploys to GitHub Pages
- `npm run predeploy` - Automatically runs before deploy (builds the app)

## 🌐 Hosting & Deployment Options

### Option 1: GitHub Pages (Current Setup)

**Automatic Deployment:**
1. Push changes to the main branch
2. Run deployment command:
   ```bash
   npm run deploy
   ```
3. Site will be available at: `https://yourusername.github.io/content-studio-website/`

**Setup GitHub Pages:**
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Save settings

### Option 2: Netlify

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings:**
   ```
   Build command: npm run build
   Publish directory: build
   ```

3. **Environment Variables:**
   ```
   PUBLIC_URL: /
   ```

### Option 3: Vercel

1. **Deploy with Vercel:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Or connect via dashboard:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Option 4: Traditional Web Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload build folder:**
   - Upload contents of `build/` folder to your web server
   - Ensure your server is configured for Single Page Applications

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --brand-teal: #02A39e;
  --premium-gold: #FFD700;
  --elegant-bronze: #CD7F32;
}
```

### Services Content
Update services data in `src/App.js`:
```javascript
const services = {
  production: [...],
  ai: [...]
};
```

### Contact Information
Update contact details in the contact section of `src/App.js`.

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger navigation menu
- Optimized touch interactions
- Fluid typography with clamp()
- Responsive grid layouts

## 🔧 Performance Optimization

- **Code Splitting:** React lazy loading
- **Image Optimization:** Optimized assets
- **CSS Optimization:** Purged unused styles
- **Animation Performance:** Hardware-accelerated transforms
- **Bundle Analysis:** Optimized dependencies

## 🐛 Troubleshooting

### Common Issues:

**1. Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Animation Issues:**
- Ensure GSAP licenses are properly configured
- Check for conflicting CSS animations

**3. Deployment Issues:**
```bash
# Verify homepage in package.json
"homepage": "https://yourusername.github.io/content-studio-website"
```

**4. Local Development Issues:**
```bash
# Check Node.js version
node --version

# Update dependencies
npm update
```

## 📞 Support & Contact

**Content Studio Contact:**
- **Email:** info@contentstudio.co.in
- **Phone:** +91 8920249869
- **Location:** Gurugram, Haryana, India

**Development Support:**
- Create an issue in this repository
- Check existing issues for solutions

## 📄 License

This project is proprietary software for Content Studio. All rights reserved.

## 🚀 Future Enhancements

- [ ] Blog integration
- [ ] Portfolio gallery with video previews
- [ ] Online booking system
- [ ] Client portal
- [ ] Advanced animations
- [ ] 3D elements integration

---

**Built with ❤️ by the Content Studio Team**

🔗 **Live Site:** [https://sumeetprashant.github.io/content-studio-website/](https://sumeetprashant.github.io/content-studio-website/)
