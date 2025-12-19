# Implementation Plan - Portfolio Template (Next.js)

## Goal

Create a premium, adjustable, portfolio website using **Next.js**. The design will be fully responsive, performant, and easy to customize via a central configuration and CSS variables.

## Aesthetic & Design

**Color Palette:**
(Implemented via CSS Variables in `globals.css` for easy adjustment)

- **Primary Dark**: `#213448` (`--primary-dark`)
- **Secondary Blue**: `#547792` (`--secondary-blue`)
- **Soft Blue**: `#94B4C1` (`--soft-blue`)
- **Cream**: `#EAE0CF` (`--cream-text`)

**Typography:**

- **Headings**: `Outfit` or `Inter` (via `next/font/google`).
- **Body**: `Inter` or `Roboto`.

## Tech Stack

- **Framework**: Next.js 14/15 (App Router).
- **Styling**: Global CSS (for variables/typography) + CSS Modules (for component-specific styles). _No Tailwind needed to keep it simple and standard CSS._
- **Icons**: `react-icons` or SVG assets.

## Proposed Architecture

### File Structure

```
/
├── app/
│   ├── layout.js      # Global layout (Fonts, Metadata)
│   ├── page.js        # Main Page (composes sections)
│   └── globals.css    # CSS Variables & Resets
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Portfolio.js
│   ├── About.js
│   ├── Contact.js
│   └── Footer.js
└── public/            # Static assets
```

### Component Details

#### 1. Setup & Globals

- Initialize with `create-next-app`.
- Define `:root` variables for the requested color palette.

#### 2. Components

- **Header**: Sticky nav with smooth scroll to sections (using IDs).
- **Hero**: High impact, using `--primary-dark` background and `--cream-text`.
- **Portfolio**: CSS Grid layout for project cards. Hover effects using standard CSS transitions.
- **Contact**: Minimalist form layout.

## User Review Required

- **Routing**: We will stick to a **Single Page Application** styled structure (scrolling to sections) for simplicity, unless you specifically want distinct `/about` or `/projects` pages.
  - _Recommendation_: Single page is more modern for personal portfolios and smoother for users.

## Verification

- **Build Check**: Run `npm run dev` to ensure no errors.
- **Responsive Test**: Check mobile/desktop breakpoints.
- **Lighthouse**: Run audit for accessibility and SEO scores.
