# RecruiterAI - AI Recruiting Software Landing Page

A modern, conversion-focused landing page for RecruiterAI - an AI-powered recruiting automation platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Features

### Complete Landing Page Sections
1. **Hero Section** - Floating conversation bubbles with pain points
2. **How It Works** - 3 interactive flowcharts showing automation workflows
3. **Impact & Results** - 7 metric cards with animated progress bars
4. **Hire From Anywhere** - Infinite scrolling platform logos
5. **Testimonials** - Customer success stories
6. **FAQ** - Interactive accordion with 5 common questions
7. **Final CTA** - Strong closing with dual CTAs

### Professional Header
- Fixed navigation bar with glassmorphism effect
- Responsive mobile menu
- Smooth scroll animations
- Logo with gradient icon

### Stunning Visual Effects
- **Global Background**: Animated gradient orbs, floating particles, grid pattern
- **Section Effects**: Radial gradients, mesh patterns, pulse animations
- **Card Effects**: Glow borders, shimmer text, rotating highlights
- **Interactive**: Hover effects, smooth transitions, micro-interactions

### Animations
- Scroll-triggered animations for all sections
- Staggered entrance effects
- Floating and bouncing animations
- Progress bar fills
- Smooth page transitions

## 🎨 Design System

### Color Palette
```css
Accent #1: #A5D8FF
Accent #2: #D0BCFF
Accent #3: #B197FC
Primary: #3B82F6
Primary BG: #EFF6FF
Secondary BG: #FFFFFF
Secondary: #F3F4F6
```

### Design Principles
- Mobile-first responsive design
- Clean SaaS aesthetic (Stripe/Linear inspired)
- Soft gradients and rounded cards
- Clear visual hierarchy
- Modern typography

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **CSS Modules** - Scoped styling
- **Custom Hooks** - Scroll animations

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🎯 Performance

- Hardware-accelerated animations
- Optimized for 60fps
- Reduced motion support
- Mobile-optimized effects
- Lazy-loaded animations

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📂 Project Structure

```
RecruiterAI/
├── src/
│   ├── components/
│   │   ├── BackgroundEffects/
│   │   ├── Button/
│   │   ├── FAQ/
│   │   ├── FinalCTA/
│   │   ├── Flowchart/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── HireAnywhere/
│   │   ├── HowItWorks/
│   │   ├── Impact/
│   │   └── Testimonials/
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── tokens.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## 🎨 Customization

### Update Colors
Edit `src/styles/tokens.css` to modify the color palette.

### Update Content
- **Hero**: `src/components/Hero/Hero.jsx`
- **Flowcharts**: `src/components/HowItWorks/HowItWorks.jsx`
- **Metrics**: `src/components/Impact/Impact.jsx`
- **Testimonials**: `src/components/Testimonials/Testimonials.jsx`
- **FAQ**: `src/components/FAQ/FAQ.jsx`

## 📄 License

This project is part of the RecruiterAI product suite.

---

**Built with ❤️ for modern recruiting teams**
