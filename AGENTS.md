# Portfolio Project Rules

You are building a production-ready personal portfolio website for a Design & Verification Engineer.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Responsive design
- SEO optimized
- Accessible UI
- Clean reusable component architecture

## Theme

- Professional
- Modern
- Minimal
- Dark mode preferred
- Engineering aesthetic
- Subtle animations only
- Fast loading

## Primary Audience

- Recruiters
- ASIC/FPGA companies
- Hardware verification teams
- Engineering managers

## Site Requirements

- Mobile responsive
- Clean typography
- Reusable components
- Proper spacing and alignment
- Semantic HTML
- Accessibility support
- Smooth scrolling
- Optimized images
- Good Lighthouse score

## Pages

- Home
- About
- Projects
- Experience
- Skills
- Contact

## Global Features

- Sticky navbar
- Footer
- Dark/light mode toggle
- Resume download button
- Social links
- SEO metadata
- Favicon
- Open Graph support

## Coding Rules

- Extend the current codebase; do not rewrite from scratch.
- Use reusable components.
- Avoid unnecessary libraries.
- Keep code modular and minimal.
- Use Tailwind utility classes cleanly.
- Use TypeScript properly.
- Keep folder structure scalable.
- Add comments only where necessary.
- Ensure components are production quality.

## Static Export / GitHub Pages

- Configure `next.config.ts` for static export.
- Keep `output: 'export'`.
- Ensure compatibility with GitHub Pages.
- Do not use server-side rendering.
- Do not add API routes.
- All pages must be statically generated.
- Handle `basePath` properly.
- Keep asset paths compatible with GitHub Pages.
- Maintain GitHub Actions deployment workflow.
- Ensure static asset support.

## Content Assets

- **Profile Content:** `Walid_Akash_Profile.md` — The single source of truth for all site content including skills, about/summary, professional experience, projects, education, publications, and languages. Always derive page content from this file.
- **Profile Photo:** `walidakash_image.JPG` — The main profile photo to use across the site (hero section, about page, Open Graph image, etc.).

## Before Finishing Any Task

- Run lint.
- Check for TypeScript errors.
- Verify formatting.
- Ensure responsive behavior.
- Verify accessibility basics.
