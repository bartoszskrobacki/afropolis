# Afropolis - Next.js Multilingual Website

A modern, bilingual (Polish/English) website for Afropolis real estate project in Gambia, built with Next.js 14+, TypeScript, Tailwind CSS, and next-intl.

## Features

- **Multilingual Support**: Polish (default) and English with `next-intl`
- **Modern Design System**: Portable design system with reusable components
- **Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Fully typed for better developer experience
- **shadcn/ui**: Beautiful, accessible UI components
- **EmailJS Integration**: Contact form with email functionality
- **Image Optimization**: Next.js Image component for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Configure EmailJS (for contact form):**

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update `src/app/[locale]/contact/page.tsx` with your credentials:

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  { /* template params */ },
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Internationalization

The website supports Polish and English:

- **Polish**: `http://localhost:3000` (default)
- **English**: `http://localhost:3000/en`

### Adding/Editing Translations

Edit the translation files in the `messages/` directory:
- `messages/pl.json` - Polish translations
- `messages/en.json` - English translations

## Design System

The design system is located in `src/design-system/` and is portable - you can copy it to other projects.

### Brand Colors

Defined in `src/app/globals.css`:
- **Afro Blue**: `#1a3a8b`
- **Afro Orange**: `#f9a626`
- **Afro Green**: `#059669`

### Using Design System Components

```typescript
import { Container, Section } from '@/design-system';

<Section variant="gray">
  <Container>
    {/* Your content */}
  </Container>
</Section>
```

## Pages

- **Home** (`/`): Hero, about preview, amenities, location, CTA
- **About** (`/about`): Detailed information
- **Homes** (`/homes`): Property listings
- **Gallery** (`/gallery`): Photo gallery
- **Contact** (`/contact`): Contact form with EmailJS

## Technologies

- [Next.js 14+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl.dev/) - Internationalization
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [EmailJS](https://www.emailjs.com/) - Email service

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended):
1. Push code to GitHub
2. Import repository to Vercel
3. Deploy automatically

Also supports: Netlify, AWS Amplify, Railway, DigitalOcean

## License

© 2025 Afropolis. All rights reserved.
