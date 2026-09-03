# Pages Component Dependency Trees

## / (Landing Page)
Entry: `index.html`
Dependencies:
- `style.css`
  - CSS Variables & Reset
  - Header & Navigation (`.site-header`, `.nav-toggle`, `#site-nav`)
  - Hero Section (`.hero`, `.hero-inner`, `.hero-copy`, `.hero-visual`, `.browser-frame`, `.status-mock`)
  - Difference Panel (`.difference-panel`, `.difference-row`)
  - Services Grid (`.cards.services-cards`, `.card`, `.card-icon`)
  - AI Roadmap Section (`#ai`, `.cards`)
  - Products Showcase (`#products`, `.product-cards`, `.product-card`)
  - About Section (`#about`, `.about-backdrop`, `.about-copy`)
  - Community Section (`#community`, `.community-inner`)
  - Footer (`.site-footer`, `.footer-inner`)
- `script.js`
  - IntersectionObserver scroll reveal
  - Header scroll state toggling
  - Mobile nav menu toggle & outside-click dismissal
  - Nav scrollspy with IntersectionObserver
- Assets:
  - `images/hero-graphic.svg`
  - `images/about-graphic.svg`
  - `images/product-1.jpg`
  - `images/product-2.jpg`
  - `images/product-3.jpg`
