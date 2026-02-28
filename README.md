# Sumit Portfolio

A modern, single-page developer portfolio built with **React + TypeScript + Vite**.

It highlights:
- Hero + About sections
- Tech stack showcase
- Project cards
- Experience timeline
- Contact and footer

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (`motion/react`)
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install & Run

```bash
npm install
npm run dev
```

App runs at: `http://localhost:3000`

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run TypeScript type checks (`tsc --noEmit`)
- `npm run clean` - remove `dist/`

## Project Structure

```text
src/
  components/      # Page sections (Hero, About, Projects, etc.)
  assets/projects/ # Project images
  lib/             # Shared utilities and env helpers
  App.tsx          # Main app composition
  constants.ts     # Portfolio content (projects, experience, tech stack)
  types.ts         # Shared TypeScript types
```

## Customize Content

To personalize this portfolio:
- Edit `src/constants.ts` for projects, experience, and skills.
- Update section UI/wording inside `src/components/*`.
- Replace or add images in `src/assets/projects/`.

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to your preferred static host (Vercel, Netlify, GitHub Pages, etc.).
