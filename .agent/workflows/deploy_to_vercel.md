---
description: How to deploy this portfolio to Vercel
---

# Deploying to Vercel

This guide assumes you have a GitHub account and a Vercel account.

## 1. Commit Your Code

First, save all your changes to the local git repository.

```bash
git add .
git commit -m "Initial portfolio build"
```

## 2. Push to GitHub

1.  Go to [GitHub.com](https://github.com) and create a **New Repository**.
    - Name it something like `my-portfolio`.
    - Initialize it as **Public** (or Private).
    - **Do not** add a README, .gitignore, or license (we already have them).
2.  Copy the commands to "push an existing repository from the command line".
3.  Run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

## 3. Deploy on Vercel

1.  Go to [Vercel.com](https://vercel.com) and log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find your `my-portfolio` repository in the list and clicking **"Import"**.
5.  **Configure Project**:
    - **Framework Preset**: Next.js (should be auto-detected).
    - **Root Directory**: `./` (default).
    - **Build Command**: `npm run build` (default).
6.  Click **"Deploy"**.

Vercel will build your site and give you a live URL (e.g., `my-portfolio.vercel.app`) in about a minute.
