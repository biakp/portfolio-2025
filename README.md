# Beatriz Knabben - Portfolio Website

A modern, responsive portfolio website showcasing Beatriz Knabben's expertise in front-end development, e-commerce solutions, and digital marketing automation.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lenis** - Smooth scrolling library
- **Lucide React** - Beautiful icons

## ✨ Features

- **Responsive Design** - Desktop-first with mobile support
- **Dark Mode Toggle** - Switch between light and dark themes
- **Smooth Scrolling** - Enhanced scrolling experience with Lenis
- **Animated Sections** - Elegant animations with Framer Motion
- **Modern UI** - Clean and minimal aesthetic with cyberpunk elements
- **TypeScript** - Full type safety
- **SEO Optimized** - Comprehensive metadata, Open Graph, structured data, and sitemap
- **Accessibility Enhanced** - ARIA labels, keyboard navigation, screen reader support
- **Performance Optimized** - Image optimization, lazy loading, and efficient animations
- **PWA Ready** - Progressive Web App capabilities with manifest and service worker support
- **Cyberpunk Effects** - Interactive lighting, data streams, and holographic elements

## 💼 About Beatriz

Beatriz Knabben is a front-end developer specializing in:
- **Modern Web Technologies**: React, Vue.js, Next.js, TypeScript
- **E-commerce Development**: Shopify Liquid templating and customization
- **Digital Marketing**: Meta Ads management and automation
- **Workflow Automation**: n8n for business process automation
- **Expanding Skills**: Back-end development and cybersecurity

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and CSS variables
├── components/
│   ├── providers/      # Context providers
│   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   └── ui/            # Reusable UI components
└── contexts/          # React contexts (Theme, etc.)
```

## 🎨 Sections

- **Hero** - Introduction with name, title, and call-to-action buttons
- **About** - Brief bio and skills showcase
- **Projects** - Featured work with hover animations
- **Contact** - Contact form and information
- **Footer** - Social links and copyright

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Customization

1. **Personal Information**
   - Update name, title, and bio in the Hero and About sections
   - Replace placeholder contact information
   - Add your actual social media links

2. **Projects**
   - Replace example projects with your actual work
   - Update project descriptions, technologies, and links
   - Add project images if desired

3. **Styling**
   - Modify colors in `tailwind.config.ts`
   - Adjust CSS custom properties in `globals.css`
   - Customize animations in component files

4. **Content**
   - Update meta information in `layout.tsx`
   - Modify section content to match your experience
   - Add or remove skills in the About section

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

Alternatively, you can deploy to any platform that supports Next.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚡ Performance & Accessibility

### Performance Optimizations
- **Image Optimization** - Next.js Image component with lazy loading and blur placeholders
- **Event Throttling** - Mouse and scroll events throttled to 60fps for smooth performance
- **Code Splitting** - Automatic code splitting with Next.js
- **Font Optimization** - Optimized Google Fonts loading with preconnect
- **Animation Performance** - Hardware-accelerated CSS animations with `transform` and `opacity`

### Accessibility Features
- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Reader Support** - Proper ARIA labels, roles, and semantic HTML
- **Skip to Content** - Skip navigation link for screen reader users
- **Reduced Motion** - Respects `prefers-reduced-motion` for users sensitive to animations
- **High Contrast** - Support for `prefers-contrast: high` media query
- **Color Accessibility** - WCAG compliant color contrast ratios

### SEO Enhancements
- **Meta Tags** - Comprehensive meta tags including Open Graph and Twitter Cards
- **Structured Data** - JSON-LD schema markup for better search engine understanding
- **Sitemap** - Dynamic sitemap generation with Next.js
- **Robots.txt** - Proper crawling instructions for search engines
- **Canonical URLs** - Prevent duplicate content issues
