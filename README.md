# 📦 ReActEdge — Operational Intelligence Platform UI

> **Operational Intelligence for the Modern Edge.**
> 
> ⚡ **Fully SEO-Optimized** | 🎯 **Core Web Vitals Ready** | 📱 **Mobile-First** | ♿ **WCAG 2.1 AA Accessible** | 🎨 **Official Brand Colors**

ReActEdge is a high-performance, modern web application inspired by next-generation **cybersecurity and operational intelligence platforms**, designed for **defense, aerospace, rail, and fleet systems**.

Built with the official ReActEdge brand guidelines featuring **Deep Azure Blue** (#166FB4), **Signal Orange** (#F07F22), and a carefully curated accent palette for optimal visual hierarchy and accessibility.

This project replicates a production-grade UI/UX system similar to leading OT (Operational Technology) platforms — delivering **real-time insights, predictive intelligence, and cyber resilience interfaces**.

---

# 🚀 Overview

reActEdge represents a frontend architecture for platforms that:

* Transform **onboard operational data into actionable intelligence**
* Enable **real-time threat detection & monitoring**
* Provide **predictive maintenance insights**
* Ensure **compliance across critical systems**

Modern OT systems generate massive, complex datasets that are often inaccessible — platforms like this unlock that data and turn it into **decision-ready intelligence** ([PromptLoop][1])

---

# 🧠 Core Concepts

### 🔐 Cyber / EW (Electronic Warfare)

Analyze system-level data to detect anomalies and cyber threats in real time.

### ⚙️ Predictive Maintenance

Use data signals to anticipate failures and reduce downtime.

### 📊 Operational Intelligence

Gain fleet-wide visibility across distributed systems.

### 📋 Compliance

Automate monitoring and ensure regulatory adherence.

These concepts mirror real-world OT intelligence platforms that combine **cybersecurity, analytics, and observability** for mission-critical environments ([Carahsoft][2])

---

# 🧱 Tech Stack

* **Next.js 14+ (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS (Custom Design System)**
* **SSG (Static Site Generation)**
* **Atomic Design Architecture**

---

# 🎨 Design System

### Official Brand Colors

Following the ReActEdge Brand Guidelines (40-30-20-10 ratio):

```css
Primary (40%):   #166FB4  /* Deep Azure Blue */
Secondary (30%): #F07F22  /* Signal Orange */
Accent (10%):    #F2F0E6  /* Neutral White */
Accent (10%):    #D9F1FD  /* Ice Blue */
Accent (10%):    #4F4E51  /* Carbon Gray */
```

**Usage:**
- **Deep Azure Blue**: Primary CTAs, navigation, key UI elements, interactive states
- **Signal Orange**: Section backgrounds, emphasis, energy points, secondary CTAs
- **Neutral White**: Card backgrounds, content areas, clean surfaces
- **Ice Blue**: Subtle accents, hover states, informational elements
- **Carbon Gray**: Text, borders, footer backgrounds, secondary content

### Typography

* **Inter** — UI, headings, body copy (sans-serif)
* **JetBrains Mono** — Data displays, code, technical text (monospace)

**Font Optimization:**
- Google Fonts with `display=swap` for optimal loading
- Variable font weights for performance
- Enhanced kerning and ligatures (`font-feature-settings`)
- Letter spacing: `-0.025em` for headings, `0.08-0.2em` for mono text

### Motion System

* **Core Animations**: Fade-up, slide, scale-in with scroll triggers
* **Interactive Effects**: Lift hover states (sm/md/lg), cursor glow, magnetic buttons
* **Timing Functions**: 
  - `ease-out`: cubic-bezier(0.22, 1, 0.36, 1)
  - `ease-bounce`: cubic-bezier(0.34, 1.56, 0.64, 1)
* **Performance**: GPU-accelerated transforms, will-change optimization
* **Accessibility**: Respects `prefers-reduced-motion` for inclusive UX

---

# 🧩 Architecture

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── sections/
│   ├── layout/
│   ├── effects/
│
├── hooks/
├── lib/
```

### Principles

* Atomic Design (Reusable components)
* Fully dynamic, config-driven UI
* SEO-first structure
* Accessible & semantic HTML
* Performance optimized (SSR + SSG)

---

# ✨ Features

### 🎯 UI / UX

* Pixel-perfect modern defense-tech UI
* Sticky animated navbar + menu overlay
* Interactive hero with parallax + cursor glow
* Grid-based layout system
* Horizontal + vertical scroll interactions

### ⚡ Performance

* Static generation (SSG)
* Optimized assets (Next/Image)
* Minimal JS hydration

### 🎬 Motion

* Scroll-triggered animations
* Staggered reveals
* Smooth transitions
* Micro-interactions

---

# 🎨 Brand Implementation

### Official Color Palette Integration

The entire project has been updated to strictly follow the **ReActEdge Brand Guidelines**:

**Primary Elements (Deep Azure Blue #166FB4):**
- Navigation buttons and interactive elements
- Primary CTAs and links
- Key UI components and accents
- Hover states and active elements

**Secondary Elements (Signal Orange #F07F22):**
- Hero section backgrounds
- Newsletter and footer highlights
- Energy points and call-to-action sections
- Brand emphasis areas

**Supporting Colors:**
- **Neutral White (#F2F0E6)**: Card backgrounds, content surfaces
- **Ice Blue (#D9F1FD)**: Subtle highlights and informational accents
- **Carbon Gray (#4F4E51)**: Footer backgrounds, borders, secondary text

**Implementation:**
- Tailwind config updated with official brand colors
- All components refactored for consistent color usage
- Focus states use Deep Azure Blue for accessibility
- Maintains WCAG 2.1 AA contrast ratios

---

# 📬 Dynamic Form System

* Config-driven form rendering
* Atomic inputs & textarea
* API-ready submission
* Reusable across pages

---

# 🧠 Inspiration

reActEdge draws inspiration from real-world **Operational Intelligence platforms** that:

* Collect and analyze onboard system data
* Provide real-time visibility into cyber threats and system health
* Enable faster decision-making at both asset and fleet levels

---

# 🧪 Getting Started

### Installation

```bash
git clone https://github.com/your-username/reactedge.git
cd reactedge
npm install
```

### Environment Setup

Create `.env.local` from the example:

```bash
cp .env.example .env.local
```

Configure your environment variables:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional but Recommended for SEO
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
NEXT_PUBLIC_BING_VERIFICATION=your-bing-verification-code
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

# 🏗️ Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### SEO Checklist Before Deploy

1. ✅ Update `src/lib/seo.ts` with your domain and company info
2. ✅ Create Open Graph image (1200x630px) at `/public/images/og-image.jpg`
3. ✅ Generate favicon set in `/public/`
4. ✅ Configure environment variables in `.env.local`
5. ✅ Test with Lighthouse (score should be 90+)
6. ✅ Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Post-Deploy

1. Submit sitemap to Google Search Console
2. Verify site ownership with search engines
3. Monitor Core Web Vitals in Search Console
4. Set up Google Analytics 4

See `docs/SEO-GUIDE.md` for detailed instructions.

---

# 🌍 SEO Architecture (Fully Optimized)

This application implements **enterprise-grade SEO** with comprehensive optimization across all layers:

### ✅ Technical SEO
* **Server-Side Rendering**: Next.js App Router with automatic SSR
* **Static Generation**: Optimized for fast indexing and crawling
* **Sitemap**: Auto-generated XML sitemap (`/sitemap.xml`)
* **Robots.txt**: Dynamic robots.txt configuration
* **Security Headers**: HSTS, CSP, X-Frame-Options, and more
* **Image Optimization**: AVIF/WebP formats with lazy loading
* **Performance**: Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1)

### 📊 Structured Data (JSON-LD)
* Organization Schema
* WebPage Schema
* Breadcrumb Schema
* Article Schema (for blog posts)
* Product Schema (extensible)
* FAQ Schema (extensible)

### 🏷️ Metadata & Tags
* **Unique Titles**: Page-specific, optimized titles
* **Meta Descriptions**: Compelling, keyword-rich descriptions
* **Open Graph**: Full OG implementation for social sharing
* **Twitter Cards**: Large image cards
* **Canonical URLs**: Prevent duplicate content
* **Keywords**: Strategic keyword targeting per page

### 📱 Mobile & Accessibility
* **Mobile-First**: Responsive design with proper viewport
* **PWA Ready**: Web app manifest configured
* **WCAG 2.1 AA**: Fully accessible
* **Semantic HTML**: Proper heading hierarchy and ARIA labels
* **Reduced Motion**: Respects user preferences

### 📈 Analytics & Monitoring
* **Google Analytics 4**: Integrated with Web Vitals tracking
* **Performance Monitoring**: Core Web Vitals reporting
* **Search Console**: Verification tags configured
* **Custom Events**: Ready for conversion tracking

### 📚 Documentation
See comprehensive SEO documentation:
* `docs/SEO-GUIDE.md` - Complete SEO guide and best practices
* `docs/SEO-IMPLEMENTATION.md` - Implementation details and checklist

### 🎯 Target Keywords
Primary focus areas:
* Cybersecurity platform
* Operational intelligence
* Predictive maintenance
* Defense technology
* Real-time threat detection
* Military cybersecurity
* Fleet management systems
* Operational technology security

---

# 📱 Responsive Design

Breakpoints:

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

Fully mobile-first with adaptive layouts.

---

# 🔮 Future Enhancements

* WebGL data visualization layer
* Real-time dashboards
* AI-driven insights panels
* Dark/light adaptive modes
* Multi-tenant SaaS architecture

---

# 🛡️ Use Cases

* Defense Systems
* Aerospace Platforms
* Rail Infrastructure
* Fleet Operations
* Critical Infrastructure Monitoring

---

# 🤝 Contributing

PRs are welcome. For major changes:

1. Fork the repo
2. Create a feature branch
3. Submit PR

---

# 📄 License

MIT License

---

# ⚡ Final Note

reActEdge is not just a UI — it’s a **system design for modern operational intelligence platforms**, where **data becomes action** and **insight drives mission success**.
