# Deploy Check Command

Comprehensive deployment preparation checklist that tests localhost:3000, verifies mobile compatibility, checks Safari support, and creates clean commits.

## Usage
```
/deploy-check [commit-message] [skip-tests] [auto-deploy]
```

## Parameters
- `[commit-message]`: Custom commit message (default: auto-generated based on changes)
- `[skip-tests]`: 'true' to skip testing steps, 'false' (default) to run full check
- `[auto-deploy]`: 'true' to auto-deploy after checks, 'false' (default) for manual deploy

## Implementation

Complete deployment preparation workflow:

1. **Local Testing**: Verify localhost:3000 functionality
2. **Mobile Testing**: Check responsive design and touch interactions
3. **Safari Compatibility**: Validate WebKit-specific features
4. **Performance Audit**: Ensure 60fps animations
5. **Clean Commit**: Create properly formatted git commit
6. **Optional Deploy**: Push to GitHub Pages

### Deployment Checklist Script
```bash
#!/bin/bash

# Deploy Check for Content Studio Website
echo "🚀 Starting deployment check for Content Studio..."

# 1. LOCALHOST TESTING
echo "📍 Step 1: Testing localhost:3000..."
if lsof -ti:3000 > /dev/null; then
    echo "✅ Local server running on port 3000"
    
    # Test key endpoints
    curl -s "http://localhost:3000/content-studio-website" > /dev/null
    if [ $? -eq 0 ]; then
        echo "✅ Website loads successfully"
    else
        echo "❌ Website failed to load"
        exit 1
    fi
else
    echo "❌ Local server not running. Starting..."
    npm start &
    sleep 10
    echo "✅ Local server started"
fi

# 2. BUILD TESTING
echo "📍 Step 2: Testing production build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Production build successful"
else
    echo "❌ Production build failed"
    exit 1
fi

# 3. MOBILE TESTING CHECKLIST
echo "📍 Step 3: Mobile compatibility check..."
echo "📱 Manual mobile testing required:"
echo "   - Test on Chrome DevTools mobile emulation"
echo "   - Verify touch interactions on service cards"
echo "   - Check infinite scroll logos on mobile"
echo "   - Validate testimonial swipe behavior"
echo "   - Test contact form on mobile"

# 4. SAFARI TESTING CHECKLIST
echo "📍 Step 4: Safari compatibility check..."
echo "🌐 Safari testing required:"
echo "   - Test GSAP animations in Safari"
echo "   - Verify backdrop-filter support"
echo "   - Check CSS Grid layouts"
echo "   - Validate smooth scrolling"
echo "   - Test theme toggle functionality"

# 5. PERFORMANCE AUDIT
echo "📍 Step 5: Performance audit..."
echo "⚡ Performance checklist:"
echo "   - Verify 60fps during scroll"
echo "   - Check animation duration (<0.3s for UI)"
echo "   - Test service card hover performance"
echo "   - Validate mobile scroll performance"
echo "   - Check bundle size (should be <2MB)"

# 6. ANIMATION VALIDATION
echo "📍 Step 6: Animation validation..."
echo "🎬 Animation checklist:"
echo "   - Hero floating elements working"
echo "   - Infinite logos scrolling smoothly"
echo "   - Testimonials moving right-to-left"
echo "   - Service cards 3D entrance effects"
echo "   - Journey steps elastic animations"
echo "   - Cinematic header text reveals"
echo "   - Magnetic button interactions"

# 7. BRAND CONSISTENCY
echo "📍 Step 7: Brand consistency check..."
echo "🎨 Brand checklist:"
echo "   - Teal (#02A39e) color consistency"
echo "   - Gradient text effects working"
echo "   - Typography (DM Serif Display + Outfit)"
echo "   - Theme toggle between light/dark"
echo "   - Glassmorphism effects intact"

# 8. ACCESSIBILITY CHECK
echo "📍 Step 8: Accessibility validation..."
echo "♿ Accessibility checklist:"
echo "   - Vertical navigation keyboard accessible"
echo "   - Contact form labels and validation"
echo "   - Focus indicators visible"
echo "   - Color contrast ratios met"
echo "   - prefers-reduced-motion support"

# 9. CONTENT VALIDATION
echo "📍 Step 9: Content validation..."
echo "📝 Content checklist:"
echo "   - All service prices correct"
echo "   - Contact information accurate"
echo "   - Client testimonials displaying"
echo "   - Call-to-action buttons working"
echo "   - Footer links functional"

# 10. COMMIT PREPARATION
echo "📍 Step 10: Preparing commit..."

# Generate commit message if not provided
if [ -z "$1" ]; then
    # Auto-generate based on git diff
    CHANGES=$(git diff --name-only | head -5 | tr '\n' ' ')
    COMMIT_MSG="update: improve website animations and performance

Modified files: $CHANGES

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
else
    COMMIT_MSG="$1

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
fi

echo "📝 Commit message preview:"
echo "$COMMIT_MSG"
echo ""
```

## Interactive Testing Protocol

### Step-by-Step Manual Testing
```javascript
// Automated test runner for key features
const runDeploymentTests = async () => {
  console.log('🧪 Running deployment tests...');
  
  // Test 1: Animation Performance
  const testAnimations = () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const journeySteps = document.querySelectorAll('.journey-step');
    
    console.log('✅ Service cards found:', serviceCards.length);
    console.log('✅ Journey steps found:', journeySteps.length);
    
    // Trigger scroll animations
    window.scrollTo(0, 1000);
    setTimeout(() => {
      console.log('✅ Scroll animations triggered');
    }, 500);
  };
  
  // Test 2: Theme Toggle
  const testThemeToggle = () => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.click();
      console.log('✅ Theme toggle working');
    }
  };
  
  // Test 3: Navigation
  const testNavigation = () => {
    const navDots = document.querySelectorAll('.nav-dot');
    console.log('✅ Navigation dots found:', navDots.length);
    
    // Test smooth scrolling
    navDots[1]?.click();
    setTimeout(() => {
      console.log('✅ Smooth scrolling working');
    }, 1000);
  };
  
  // Test 4: Contact Form
  const testContactForm = () => {
    const form = document.querySelector('.contact-form form');
    const inputs = form?.querySelectorAll('input, select, textarea');
    console.log('✅ Form inputs found:', inputs?.length);
  };
  
  // Run all tests
  testAnimations();
  testThemeToggle();
  testNavigation();
  testContactForm();
  
  console.log('🎉 All deployment tests completed!');
};

// Auto-run tests
if (typeof window !== 'undefined') {
  setTimeout(runDeploymentTests, 2000);
}
```

## Git Commit Standards

### Commit Message Format
```
<type>: <description>

<body>

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Commit Types
- **feat**: New feature addition
- **fix**: Bug fix
- **perf**: Performance improvement
- **style**: Visual/styling changes
- **refactor**: Code restructuring
- **docs**: Documentation updates
- **test**: Testing improvements

### Example Commits
```bash
# Feature commit
git commit -m "feat: add cinematic header text reveals

Added character-by-character animation for all section headers
with 0.02s stagger timing and 3D rotation effects.

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Performance commit
git commit -m "perf: optimize service card animations

Reduced animation duration from 1.2s to 0.5s and simplified
transforms for better mobile performance.

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Style commit
git commit -m "style: update brand color consistency

Applied teal (#02A39e) gradient throughout all components
and improved glassmorphism effects.

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

## Deployment Commands

### GitHub Pages Deploy
```bash
# Build and deploy to GitHub Pages
npm run build
npm run deploy

# Verify deployment
curl -s "https://sumeetprashant.github.io/content-studio-website" > /dev/null
```

### Manual Deploy Steps
```bash
# 1. Clean build
rm -rf build/
npm run build

# 2. Test build locally
npx serve -s build -l 3001

# 3. Deploy to GitHub Pages
npm run deploy

# 4. Verify live site
open "https://sumeetprashant.github.io/content-studio-website"
```

## Post-Deployment Verification

### Live Site Checklist
- [ ] Hero section animations working
- [ ] Infinite logos scrolling
- [ ] Testimonials moving correctly
- [ ] Service cards interactive
- [ ] Contact form functional
- [ ] Theme toggle working
- [ ] Mobile responsive
- [ ] Safari compatible
- [ ] Performance optimized

### Monitoring
```javascript
// Performance monitoring script
const monitorPerformance = () => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(`${entry.name}: ${entry.duration}ms`);
    });
  });
  
  observer.observe({ entryTypes: ['measure', 'navigation'] });
};
```

## Example Usage

### Full Deployment Check
```
/deploy-check "feat: add new service animations"
```

### Quick Deploy (Skip Tests)
```
/deploy-check "fix: minor styling updates" true
```

### Auto Deploy After Checks
```
/deploy-check "perf: optimize mobile performance" false true
```