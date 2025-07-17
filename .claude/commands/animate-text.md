# Animate Text Command

Create smooth text reveal animations using GSAP ScrollTrigger with our cinematic animation philosophy.

## Usage
```
/animate-text <selector> <trigger-element> [direction] [stagger-delay]
```

## Parameters
- `<selector>`: CSS selector for text elements to animate (e.g., '.hero-title', 'h2')
- `<trigger-element>`: Element that triggers the animation (e.g., '.hero-section', 'section')
- `[direction]`: Animation direction - 'up' (default), 'down', 'left', 'right'
- `[stagger-delay]`: Delay between character animations in seconds (default: 0.02)

## Implementation

Create a cinematic text reveal animation that:

1. **Split text into individual characters** using JavaScript
2. **Set initial states** with opacity: 0 and transform based on direction
3. **Use GSAP ScrollTrigger** with start: 'top 85%' for optimal timing
4. **Apply our animation constraints**: 0.6s duration max, power2.out easing
5. **Stagger character animations** for cinematic effect

### Code Template
```javascript
// Text reveal animation for $ARGUMENTS[0]
const createTextReveal = (selector, triggerElement, direction = 'up', staggerDelay = 0.02) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = '';
    
    // Create character spans
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      
      // Set initial transform based on direction
      switch(direction) {
        case 'up':
          span.style.transform = 'translateY(50px) rotateX(90deg)';
          break;
        case 'down':
          span.style.transform = 'translateY(-50px) rotateX(-90deg)';
          break;
        case 'left':
          span.style.transform = 'translateX(-50px) rotateY(90deg)';
          break;
        case 'right':
          span.style.transform = 'translateX(50px) rotateY(-90deg)';
          break;
      }
      
      element.appendChild(span);
    });
  });
  
  // ScrollTrigger animation
  ScrollTrigger.create({
    trigger: triggerElement,
    start: 'top 85%',
    onEnter: () => {
      elements.forEach(element => {
        const chars = element.querySelectorAll('span');
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          x: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: 'power2.out'
        });
      });
    }
  });
};

// Initialize animation
createTextReveal('$ARGUMENTS[0]', '$ARGUMENTS[1]', '$ARGUMENTS[2]', $ARGUMENTS[3]);
```

## Design System Integration

### Brand Guidelines
- **Duration**: 0.6s max (follows our cinematic timing)
- **Easing**: power2.out for snappy, professional feel
- **Stagger**: 0.02s default for smooth character flow
- **Trigger**: 85% viewport for optimal user experience

### CSS Support
```css
/* Ensure smooth transforms */
$ARGUMENTS[0] span {
  transform-origin: center;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* Performance optimization */
$ARGUMENTS[0] {
  contain: layout;
  perspective: 1000px;
}
```

## Examples

### Hero Title Animation
```
/animate-text .hero-title .hero-section up 0.03
```

### Section Headers
```
/animate-text .section-title .portfolio down 0.02
```

### Service Category Titles
```
/animate-text .category-title .service-category left 0.025
```

## Performance Notes

- **GPU Acceleration**: Uses 3D transforms for hardware acceleration
- **Character Limit**: Optimal for headers/titles (avoid on long paragraphs)
- **Mobile Optimization**: Reduced stagger on smaller screens
- **Cleanup**: Includes proper ScrollTrigger cleanup

## Accessibility

- **Respects `prefers-reduced-motion`**: Fallback to simple fade
- **Semantic HTML**: Maintains text structure for screen readers
- **Focus Management**: Preserves keyboard navigation

## Testing Checklist

- [ ] Test on localhost:3000/content-studio-website
- [ ] Verify 60fps performance during scroll
- [ ] Check mobile responsiveness
- [ ] Validate Safari compatibility
- [ ] Test with dark/light theme toggle