# Theme & Design Tokens

## Part 1 — Compact Token Summary

### Colors
- `--bg`: `#0a0a0c` (near black background)
- `--bg-panel`: `#131418` (dark charcoal card surface)
- `--bg-alt`: `#0e0f12` (subtle dark section contrast)
- `--text`: `#f4f3ef` (warm light text)
- `--text-dim`: `#93959c` (muted slate gray secondary text)
- `--accent`: `#3f6cff` (electric indigo blue)
- `--accent-shade`: `#6d8dff` (lighter blue on hover)
- `--accent-tint`: `rgba(63, 108, 255, 0.14)` (subtle blue glow / card icon background)
- `--border`: `#232429` (subtle dark stroke border)
- `--card-bg`: `#131418`
- Success / Active: `#3ecf8e` (mint green)
- Warning / Expiring: `#f5b942` (amber)
- Danger / Expired: `#e5555f` (soft crimson)

### Typography
- Display / Headings: `Plus Jakarta Sans`, weights 400, 500, 600, 700, 800
- Body: `Plus Jakarta Sans`, line-height 1.65
- Monospace / Technical labels / Kickers: `JetBrains Mono`, weights 400, 500, 600, 700

### Layout & Spacing
- Max container width: `1160px`
- Section vertical padding: `104px 0` (mobile `72px 0`)
- Container gutter: `24px`
- Border radius: `10px` (buttons, inputs), `14px` (cards), `18px` (panels), `20px` (hero visual), `999px` (pill badges)

---

## Part 2 — Raw Source Dumps

```css
:root {
  --bg: #0a0a0c;
  --bg-panel: #131418;
  --bg-alt: #0e0f12;
  --text: #f4f3ef;
  --text-dim: #93959c;
  --accent: #3f6cff;
  --accent-shade: #6d8dff;
  --accent-tint: rgba(63, 108, 255, 0.14);
  --border: #232429;
  --card-bg: #131418;
  --max-width: 1160px;
  --font-body: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
```
