# Fix Performance Command

Optimize animations for perceived performance with 60fps target, lightweight transforms, and 0.3s max duration.

## Usage
```
/fix-performance <target-elements> [performance-level] [mobile-optimization]
```

## Parameters
- `<target-elements>`: CSS selector for elements to optimize (e.g., '.service-card', '.journey-step')
- `[performance-level]`: 'strict' (0.2s max), 'balanced' (0.3s max), 'cinematic' (0.6s max) - default: 'balanced'
- `[mobile-optimization]`: 'true' (default) or 'false' - enables mobile-specific optimizations

## Implementation

Analyze and optimize animations to achieve:

1. **60fps smooth performance** across all devices
2. **Lightweight transforms only** (translate, scale, opacity)
3. **Maximum 0.3s duration** for UI interactions
4. **GPU acceleration** with 3D transforms
5. **Reduced motion respect** for accessibility

### Optimization Strategy
```javascript
// Performance optimization for $ARGUMENTS[0]
const optimizeAnimations = (selector, performanceLevel = 'balanced', mobileOptimization = true) => {
  const elements = document.querySelectorAll(selector);
  
  // Performance timing based on level
  const timings = {
    strict: { duration: 0.2, stagger: 0.05 },
    balanced: { duration: 0.3, stagger: 0.08 },
    cinematic: { duration: 0.6, stagger: 0.1 }
  };
  
  const config = timings[performanceLevel];
  
  // Mobile detection and optimization
  const isMobile = mobileOptimization && window.innerWidth < 768;
  const mobileConfig = {
    duration: Math.min(config.duration, 0.25),
    stagger: Math.min(config.stagger, 0.06),
    easing: 'power2.out'
  };
  
  const finalConfig = isMobile ? mobileConfig : {
    duration: config.duration,
    stagger: config.stagger,
    easing: 'power2.out'
  };
  
  // Optimize existing animations
  elements.forEach(element => {
    // Add performance CSS
    element.style.willChange = 'transform, opacity';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
    
    // Remove heavy transforms, keep only lightweight ones
    gsap.killTweensOf(element);
    
    // Scroll trigger optimization
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%', // Earlier trigger for perceived performance
      onEnter: () => {
        gsap.fromTo(element, {
          opacity: 0,
          scale: 0.98,
          y: 20 // Reduced from heavy transforms
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: finalConfig.duration,
          ease: finalConfig.easing,
          force3D: true // GPU acceleration
        });
      }
    });
    
    // Lightweight hover effects
    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale: 1.02,
        y: -4,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
  
  // Cleanup old ScrollTriggers
  ScrollTrigger.refresh();
};

// Apply optimizations
optimizeAnimations('$ARGUMENTS[0]', '$ARGUMENTS[1]', $ARGUMENTS[2]);
```

## Performance Checklist

### Before Optimization
- [ ] Identify heavy animations (>0.3s duration)
- [ ] Check for complex transforms (rotationX, rotationY, skew)
- [ ] Monitor FPS during scroll (use DevTools)
- [ ] Test on mobile devices

### Optimization Actions
- [ ] Replace heavy transforms with translate/scale/opacity
- [ ] Reduce animation duration to 0.3s max
- [ ] Add `force3D: true` for GPU acceleration
- [ ] Implement `will-change` CSS property
- [ ] Optimize ScrollTrigger start points

### After Optimization
- [ ] Verify 60fps performance
- [ ] Test on localhost:3000/content-studio-website
- [ ] Check mobile responsiveness
- [ ] Validate Safari compatibility

## CSS Performance Enhancements

```css
/* Apply to $ARGUMENTS[0] */
$ARGUMENTS[0] {
  /* GPU acceleration */
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
  
  /* Layout containment */
  contain: layout style;
  
  /* Smooth transitions */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Hover optimizations */
$ARGUMENTS[0]:hover {
  transform: translateY(-4px) scale(1.02) translateZ(0);
  transition-duration: 0.2s;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  $ARGUMENTS[0] {
    transition-duration: 0.25s;
  }
  
  $ARGUMENTS[0]:hover {
    transform: translateY(-2px) scale(1.01) translateZ(0);
  }
}
```

## Brand Guidelines Integration

### Content Studio Animation Standards
- **Teal Theme**: Maintain #02A39e color consistency
- **Snappy Feel**: Power2.out easing for professional response
- **Cinematic Quality**: Preserve premium feel with optimized timing
- **Performance First**: Never compromise 60fps for visual complexity

### Mobile Optimization
```javascript
// Mobile-specific optimizations
if (window.innerWidth < 768) {
  // Reduce stagger timing
  stagger: 0.05;
  
  // Shorter durations
  duration: 0.25;
  
  // Simplified transforms
  transforms: ['translateY', 'scale', 'opacity'];
}
```

## Debugging Performance Issues

### Common Problems & Solutions

**Laggy Scroll:**
```javascript
// Solution: Reduce transform complexity
// Before: rotationX: 45, rotationY: 15, scale: 0.8
// After: scale: 0.95, opacity: 0
```

**Mobile Stuttering:**
```javascript
// Solution: Mobile-specific timing
const duration = window.innerWidth < 768 ? 0.2 : 0.3;
```

**Memory Leaks:**
```javascript
// Solution: Proper cleanup
return () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
```

## Testing Protocol

1. **Performance Monitor**: Chrome DevTools > Performance tab
2. **FPS Counter**: Enable in DevTools > Rendering > FPS meter
3. **Mobile Testing**: Use device emulation + real devices
4. **Safari Testing**: Webkit-specific performance validation

## Example Usage

### Service Cards Optimization
```
/fix-performance .service-card strict true
```

### Journey Steps Optimization
```
/fix-performance .journey-step balanced true
```

### Button Hover Effects
```
/fix-performance .cta-primary strict false
```