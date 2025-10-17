# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Start development server (runs on localhost:5173 with --host flag)
npm run dev

# Build for production
npm run build

# Lint code (ESLint with React plugin, max 0 warnings)
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

This is a React-based portfolio website built with Vite, featuring:

### Core Structure
- **React 18** with **Vite** as build tool
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Three Fiber** for 3D elements
- **EmailJS** for contact form

### Component Organization
- `src/components/` - Main page components (Hero, About, Experience, Projects, etc.)
- `src/components/canvas/` - 3D canvas components (Stars, Earth, Computers, Ball)
- `src/hoc/` - Higher-order components (SectionWrapper for scroll animations)
- `src/utils/` - Utility functions (motion configurations)
- `src/constants/` - Centralized data (navLinks, experiences, projects, etc.)
- `src/assets/` - Images and icons organized by category

### Key Architecture Patterns
- **Centralized Data**: All content data is in `src/constants/index.js`
- **Component Exports**: All components exported from `src/components/index.js`
- **Asset Management**: Images imported through `src/assets/index.js`
- **Animation System**: Uses Framer Motion with predefined variants in `utils/motion.js`
- **3D Integration**: React Three Fiber components for interactive backgrounds

### Page Sections
1. Hero (with animated background)
2. About (service cards)
3. Experience (work timeline)
4. Projects (portfolio showcase)
5. Courses (education timeline)
6. Tech (technology stack)
7. Contact (with email form)

### Deployment Configuration
- Vite config has `base: "/Portfolio/"` for GitHub Pages deployment
- Development server runs with `--host` flag for network access

### Code Style
- Uses ESLint with React plugin
- Functional components with hooks
- Tailwind CSS for styling with custom gradient classes
- Component-based architecture with clear separation of concerns