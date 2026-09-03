# Layout Components

Shared layout components in `index.html` and `style.css`.

## Header / Navigation Bar
File: `index.html` (lines 15-30)
```html
<header class="site-header">
  <div class="container header-inner">
    <a href="#top" class="logo">Draft<span>Stack</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
    <nav id="site-nav">
      <a href="#difference">Why us</a>
      <a href="#services">Services</a>
      <a href="#ai">AI</a>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#community">Community</a>
    </nav>
  </div>
</header>
```
CSS (from `style.css`):
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.site-header.scrolled {
  box-shadow: 0 8px 24px -18px rgba(0, 0, 0, 0.5);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
}
.logo {
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--text);
  letter-spacing: -0.01em;
}
.logo span {
  color: var(--accent);
}
nav {
  display: flex;
  gap: 32px;
}
nav a {
  position: relative;
  color: var(--text-dim);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 4px 0;
  transition: color 0.2s ease;
}
nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.25s ease;
  border-radius: 2px;
}
nav a:hover, nav a.active {
  color: var(--text);
}
nav a:hover::after, nav a.active::after {
  width: 100%;
}
```

## Footer
File: `index.html` (lines 265-272)
```html
<footer class="site-footer">
  <div class="container footer-inner">
    <p>&copy; 2026 DraftStack. All rights reserved.</p>
    <a class="social-link" href="https://www.facebook.com/profile.php?id=61590037648877" target="_blank" rel="noopener noreferrer" aria-label="DraftStack on Facebook">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    </a>
  </div>
</footer>
```
CSS:
```css
.site-footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.site-footer p {
  font-family: var(--font-mono);
  color: var(--text-dim);
  font-size: 0.8rem;
  margin: 0;
}
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  color: var(--text-dim);
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
```

## Container & Section Wrapper
```css
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}
.section {
  padding: 104px 0;
}
.section-alt {
  background: var(--bg-alt);
  position: relative;
}
```
