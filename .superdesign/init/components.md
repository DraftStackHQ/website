# UI Components Inventory

Vanilla HTML/CSS UI primitives in `index.html` and `style.css`.

## Button
```html
<a class="btn btn-primary" href="#services">See what we do</a>
<a class="btn btn-secondary" href="#community">Join our community</a>
```
```css
.btn {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}
.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 14px 26px -12px color-mix(in srgb, var(--accent) 60%, transparent);
}
.btn-primary:hover {
  background: var(--accent-shade);
  transform: translateY(-2px);
}
.btn-secondary {
  border: 1px solid var(--border);
  color: var(--text);
}
.btn-secondary:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  color: var(--accent);
}
```

## Eyebrow / Kicker Badge
```html
<p class="eyebrow reveal">Software startup</p>
<span class="kicker reveal">Why DraftStack</span>
```
```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  margin-bottom: 24px;
  padding: 7px 14px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(10, 10, 12, 0.6);
  backdrop-filter: blur(6px);
}
.kicker {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}
```

## Service Card
```html
<div class="card reveal">
  <div class="card-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
  </div>
  <h3>Website Development</h3>
  <p>Clean, fast websites built around your business and your customers.</p>
</div>
```
```css
.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.card:hover {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--border));
  background: color-mix(in srgb, var(--card-bg) 85%, var(--accent) 4%);
}
.card-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  color: var(--accent);
  background: var(--accent-tint);
  transition: background 0.25s ease;
}
```

## Browser Mockup Frame (GymFlow PH Preview)
```html
<div class="browser-frame">
  <span class="preview-badge">In progress</span>
  <div class="browser-bar">
    <span></span><span></span><span></span>
    <span class="browser-bar-url">app.gymflow.ph/members</span>
  </div>
  <div class="status-mock">
    <div class="status-row">
      <span class="status-label">Active</span>
      <span class="status-track"><span class="status-fill" style="width: 89%; background: #3ecf8e;"></span></span>
      <span class="status-count">214</span>
    </div>
    <div class="status-row">
      <span class="status-label">Expiring soon</span>
      <span class="status-track"><span class="status-fill" style="width: 8%; background: #f5b942;"></span></span>
      <span class="status-count">18</span>
    </div>
    <div class="status-row">
      <span class="status-label">Expired</span>
      <span class="status-track"><span class="status-fill" style="width: 3%; background: #e5555f;"></span></span>
      <span class="status-count">6</span>
    </div>
  </div>
</div>
```

## Comparison Table (Difference Panel)
```html
<div class="difference-panel reveal">
  <div class="difference-row difference-head">
    <span>What matters</span>
    <span class="difference-us">DraftStack</span>
    <span class="difference-them">Typical vendors</span>
  </div>
  <div class="difference-row">
    <span>Direct access to the developers building your product</span>
    <span class="difference-us"><svg class="diff-icon yes" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Yes</span>
    <span class="difference-them"><svg class="diff-icon no" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Routed through account managers</span>
  </div>
</div>
```
