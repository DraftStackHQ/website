# Extractable Components

## SiteHeader
- Source: `index.html` (lines 15-30)
- Category: layout
- Description: Sticky blurred header with logo, navigation links, and mobile toggle
- Extractable props: activeItem (string, default: "difference")
- Hardcoded: Logo text, navigation links, toggle button

## SiteFooter
- Source: `index.html` (lines 265-272)
- Category: layout
- Description: Minimal footer with copyright text and Facebook icon link
- Extractable props: year (string, default: "2026")
- Hardcoded: Social links and labels

## ServiceCard
- Source: `index.html` (lines 122-164)
- Category: basic
- Description: Card with icon, heading, and description for services
- Extractable props: title (string), description (string)
- Hardcoded: Card styling, icon container

## BrowserMockup
- Source: `index.html` (lines 47-70)
- Category: basic
- Description: Simulated macOS browser window with live status progress bars
- Extractable props: url (string, default: "app.gymflow.ph/members"), badgeText (string, default: "In progress")
- Hardcoded: Browser controls, status breakdown metrics
