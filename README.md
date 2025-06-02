# The Fix Clinic - Next.js Website

This is a Next.js website for The Fix Clinic, a medical spa providing aesthetic and wellness services in Ashburn, VA. The site is built with Next.js, TypeScript, and Tailwind CSS, converted from a WordPress export.

> **Note:** For a detailed overview of the site structure, components, and architecture, see [SITE_STRUCTURE.md](./SITE_STRUCTURE.md).

## Project Status

This project is currently in development. The following functionality has been implemented:

### Main Pages
- Homepage with sections for services, team, testimonials
- About page with clinic information and team
- Contact page with form and map
- Gallery page with before & after filtering
- Testimonials page with client reviews
- Membership tiers and benefits page

### Service Categories
- Facial Balancing services overview
- Skin services overview
- Weight Loss & Wellness services overview

### Treatment Pages
- Botox treatment details
- Filler treatment details
- Sculptra treatment details
- Facials treatment details
- Weight Loss programs details

### Components
- Responsive header with mobile navigation
- Footer with contact information
- Reusable UI components (buttons, forms, containers)
- Gallery with image filtering
- Contact form with email integration

## Quick Start

```bash
# Install dependencies
npm install

# Run setup script to create required fonts and images
node scripts/setup.js

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the site.

## URL Structure

The site implements a dual URL structure:
1. User-friendly URLs: `/facial-balancing`, `/skin`, `/weight-loss-wellness`
2. Organized backend URLs: `/services/facial-balancing`, `/services/skin`, `/services/weight-loss-wellness`

Redirect pages maintain both structures for better SEO and user experience.

## Next Steps

1. Create remaining treatment pages:
   - Facial balancing: Morpheus8 RF, Kybella, PRP/PRF
   - Skin: Laser Treatments, Permanent Makeup, Microblading, Lip Blushing
   - Wellness: IV Therapy, Vitamin Injections

2. Configure email service:
   - Set up environment variables
   - Test form submissions
   - See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions

3. Complete responsive design testing across all device sizes

4. Deploy to production

## Scripts

The project includes several utility scripts:

- `setup.js` - Main setup script that runs all other scripts
- `copy-images.js` - Main image copy script for WordPress media
- `copy-key-images.js` - Script to copy essential images
- `fix-fonts.js` - Creates font placeholders
- `fix-missing-images.js` - Creates placeholders for missing images

Run them from the project root:

```bash
node scripts/setup.js
```

## Directory Structure

```
fixclinic-next/
├── components/         # Reusable React components 
├── pages/              # Next.js page components and routes
├── public/             # Static assets (images, fonts)
├── scripts/            # Utility scripts
├── styles/             # CSS and Tailwind styles
└── [config files]      # Configuration files
```

For a detailed directory structure, see [SITE_STRUCTURE.md](./SITE_STRUCTURE.md).

## Technologies

- **Next.js** - React framework with SSR and file-based routing
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI component library
- **Swiper** - Touch slider for carousels

## WordPress Conversion

This site was converted from a WordPress website. The conversion process is documented in [CONVERSION_SUMMARY.md](./CONVERSION_SUMMARY.md).

## Development

### Prerequisites
- Node.js 16.8.0 or later
- npm or yarn

### Installation Steps

1. Clone the repository
2. Install dependencies: `npm install`
3. Run setup script: `node scripts/setup.js`
4. Start dev server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
# Generates production build in .next directory
```

## License

This project is proprietary and confidential. Unauthorized copying of files, via any medium is strictly prohibited.