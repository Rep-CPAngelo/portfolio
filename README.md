# Portfolio - Adjustable Template

A premium, responsive portfolio template built with **Next.js**. Designed to be easily adjustable, performant, and visually striking with a sophisticated dark-blue color theme.

## 🎨 Features

- **Premium Design**: Modern aesthetic with a curated color palette of deep blues and warm cream text.
- **Fully Adjustable**: Change the entire color scheme instantly via CSS Variables.
- **Performance First**: Built on Next.js 14/15 App Router for speed and SEO.
- **Responsive**: Flawless experience on mobile, tablet, and desktop.
- **Animations**: Subtle, high-quality entrance animations and hover effects.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: Standard CSS Modules & CSS Variables (No complex build steps for styles)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) & [Inter](https://fonts.google.com/specimen/Inter) via `next/font`

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Customization

### Changing Colors

Navigate to `app/globals.css` and simply update the variables at the top:

```css
:root {
  --primary-dark: #213448;
  --secondary-blue: #547792;
  --soft-blue: #94b4c1;
  --cream-text: #eae0cf;
}
```

### Adding Projects

Edit `components/Projects.js` to modify the `projects` array with your own work.

## 📦 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Deploy.

See the [Deployment Guide](.agent/workflows/deploy_to_vercel.md) for detailed steps.

## 📄 License

This project is open source and available for personal use.
