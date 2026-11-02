# MyWeb

My personal portfolio website, built with **Next.js**, **TypeScript** and **Tailwind CSS**. It shows who I am, what I'm learning, what I've built and how to reach me.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- Deployed on [Vercel](https://vercel.com/)

## Getting started

Requirements: [Node.js](https://nodejs.org/) 20 or newer and npm.

```bash
# clone the repo
git clone https://github.com/Neo-alif/MyWeb.git
cd MyWeb

# install dependencies
npm install

# set up environment variables
cp .env.example .env.local

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

Copy `.env.example` to `.env.local` and fill it in.

| Variable               | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Full public URL of the site, e.g. `https://your-site.vercel.app`. Used for the sitemap, `robots.txt` and Open Graph tags. |

This value is baked into the static pages at build time, so after changing it on Vercel you need to redeploy.

## Scripts

| Command         | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Create a production build     |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint                    |

## Project structure

```
app/          Pages, layouts, metadata, sitemap and robots
components/   Reusable UI components
content/      Site content (text and data)
lib/          Helpers and utilities
public/       Static assets (images, favicon)
```

## Deployment

The site is deployed on Vercel.

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) with the default Next.js settings.
3. Add `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables** (Production).
4. Redeploy with the build cache turned off.

## Author

**Alif** — CSE student at CUET, Chittagong, Bangladesh.
GitHub: [@Neo-alif](https://github.com/Neo-alif)

## License

All rights reserved. The code is public for viewing; please don't copy the design or content as your own.
