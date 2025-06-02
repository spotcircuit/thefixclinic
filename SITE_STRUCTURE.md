# The Fix Clinic - Site Structure Documentation

This document provides a comprehensive overview of The Fix Clinic website structure, organization, and key components.

## Directory Structure

```
fixclinic-next/
├── components/             # Reusable React components
│   ├── home/               # Homepage-specific components
│   │   ├── AboutSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── CallToActionSection.tsx
│   │   ├── FounderSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ImageGallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── TreatmentsSection.tsx
│   ├── layout/             # Layout components used across pages
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── ContactForm.tsx
│       ├── Container.tsx
│       └── SectionTitle.tsx
├── pages/                  # Next.js pages (route structure)
│   ├── api/                # API routes for server functionality
│   │   └── contact.ts
│   ├── facial-balancing/   # Facial balancing redirect pages
│   │   ├── botox.tsx
│   │   ├── filler.tsx
│   │   └── sculptra.tsx
│   ├── services/           # Main service pages
│   │   ├── facial-balancing/
│   │   │   ├── botox.tsx
│   │   │   ├── filler.tsx
│   │   │   └── sculptra.tsx
│   │   ├── facial-balancing.tsx
│   │   ├── index.tsx
│   │   ├── skin/
│   │   │   ├── facials.tsx
│   │   │   ├── laser-treatments.tsx
│   │   │   └── permanent-makeup.tsx
│   │   ├── skin.tsx
│   │   ├── weight-loss-wellness/
│   │   │   ├── iv-therapy.tsx
│   │   │   └── weight-loss.tsx
│   │   └── weight-loss-wellness.tsx
│   ├── skin/               # Skin services redirect pages
│   │   ├── facials.tsx
│   │   ├── laser-treatments.tsx
│   │   └── permanent-makeup.tsx
│   ├── weight-loss-wellness/ # Wellness redirect pages
│   │   ├── iv-therapy.tsx
│   │   └── weight-loss.tsx
│   ├── 404.tsx             # Custom 404 error page
│   ├── _app.tsx            # Custom App component
│   ├── _document.tsx       # Custom Document component
│   ├── about.tsx           # About page
│   ├── contact.tsx         # Contact page
│   ├── facial-balancing.tsx # Redirect to services/facial-balancing
│   ├── gallery.tsx         # Before & After gallery
│   ├── index.tsx           # Homepage
│   ├── membership.tsx      # Membership tiers page
│   ├── skin.tsx            # Redirect to services/skin
│   ├── testimonials.tsx    # Client testimonials page
│   └── weight-loss-wellness.tsx # Redirect to services/weight-loss-wellness
├── public/                 # Static assets
│   ├── fonts/              # Font files
│   │   ├── cormorant-garamond-var.woff2
│   │   └── montserrat-var.woff2
│   └── images/             # Image assets
│       ├── awards/         # Award logos
│       ├── gallery/        # Before & After images
│       ├── logo/           # Site logos
│       ├── misc/           # Miscellaneous images
│       ├── services/       # Service-related images
│       └── team/           # Team member photos
├── scripts/                # Utility scripts
│   ├── copy-images.js      # Main image copy script
│   ├── copy-key-images.js  # Script to copy essential images
│   ├── fix-fonts.js        # Creates font placeholders
│   ├── fix-missing-images.js # Creates placeholders for missing images
│   └── setup.js            # Main setup script that runs all others
├── styles/                 # CSS styles
│   └── globals.css         # Global CSS
├── CONVERSION_SUMMARY.md   # Summary of WordPress to Next.js conversion
├── EMAIL_SETUP.md          # Email configuration instructions
├── README.md               # Project overview and setup instructions
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Page Structure

### Main Pages
- **Homepage** (`/`): Landing page with sections for services, team, testimonials
- **About** (`/about`): Information about the clinic and team
- **Contact** (`/contact`): Contact information and form
- **Gallery** (`/gallery`): Before & After photo gallery
- **Testimonials** (`/testimonials`): Client reviews
- **Membership** (`/membership`): Membership tiers and benefits

### Service Category Pages
- **Services Overview** (`/services`): Overview of all services
- **Facial Balancing** (`/facial-balancing` or `/services/facial-balancing`): Facial treatments
- **Skin Services** (`/skin` or `/services/skin`): Skin treatments
- **Weight Loss & Wellness** (`/weight-loss-wellness` or `/services/weight-loss-wellness`): Wellness services

### Treatment Pages
- **Botox** (`/facial-balancing/botox` or `/services/facial-balancing/botox`)
- **Filler** (`/facial-balancing/filler` or `/services/facial-balancing/filler`)
- **Sculptra** (`/facial-balancing/sculptra` or `/services/facial-balancing/sculptra`)
- **Facials** (`/skin/facials` or `/services/skin/facials`)
- **Laser Treatments** (`/skin/laser-treatments` or `/services/skin/laser-treatments`)
- **Permanent Makeup** (`/skin/permanent-makeup` or `/services/skin/permanent-makeup`)
- **Weight Loss** (`/weight-loss-wellness/weight-loss` or `/services/weight-loss-wellness/weight-loss`)
- **IV Therapy** (`/weight-loss-wellness/iv-therapy` or `/services/weight-loss-wellness/iv-therapy`)

## Key Components

### Layout Components
- **Layout** (`components/layout/Layout.tsx`): Main layout wrapper with header and footer
- **Header** (`components/layout/Header.tsx`): Navigation and site header
- **Footer** (`components/layout/Footer.tsx`): Site footer with contact info and links

### UI Components
- **Button** (`components/ui/Button.tsx`): Reusable button component
- **Container** (`components/ui/Container.tsx`): Container for consistent page widths
- **ContactForm** (`components/ui/ContactForm.tsx`): Form component for contact page
- **SectionTitle** (`components/ui/SectionTitle.tsx`): Consistent section headings

### Homepage Sections
- **HeroSection**: Main hero banner
- **AwardsSection**: Displays clinic awards and certifications
- **AboutSection**: Brief about section with image
- **TreatmentsSection**: Overview of treatment categories
- **StatsSection**: Statistics and numbers
- **FounderSection**: Information about the clinic founder
- **ReviewsSection**: Client testimonials
- **ImageGallerySection**: Gallery carousel
- **CallToActionSection**: CTA for appointments

## URL Structure and Redirects

The site implements a dual URL structure:
1. User-friendly URLs: `/facial-balancing`, `/skin`, `/weight-loss-wellness`
2. Organized backend URLs: `/services/facial-balancing`, `/services/skin`, `/services/weight-loss-wellness`

Redirect pages are implemented to maintain both URL structures, allowing for better organization while preserving SEO value and user experience.

## Setup Process

The setup process involves:
1. Installing dependencies (`npm install`)
2. Running the setup script (`node scripts/setup.js`) which:
   - Creates font placeholders
   - Copies key images from WordPress export
   - Creates placeholders for any missing images
3. Starting the development server (`npm run dev`)

## API Endpoints

- **/api/contact**: Handles contact form submissions

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: JavaScript library for building user interfaces
- **Swiper**: For carousels and sliders