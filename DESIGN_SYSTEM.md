# The Fix Clinic - Design System (Phase 1)

## 1. Introduction

This document outlines the core design elements, color palette, typography, and reusable components for The Fix Clinic website redesign. It serves as a guide to maintain consistency and streamline development.

## 2. Color Palette

Colors are defined in `tailwind.config.ts` and applied throughout the application using Tailwind CSS utility classes.

### Brand Specific Colors:

*   **Brand Teal:** `brand-teal: #6D8185`
*   **Brand Cream:** `brand-cream: #F8F0E6`
*   **Brand Brown/Tan:** `brand-brown-tan: #D5BCAE`

### Semantic Colors:

*   **Primary:** `primary: '#6D8185'` (Teal)
    *   *Intended Use:* Primary calls-to-action (CTAs), important highlights, key brand elements, and active navigation states.
*   **Background:** `background: '#F8F0E6'` (Cream)
    *   *Intended Use:* Main page backgrounds, and as text color on primary backgrounds (e.g., text on a Teal button).
*   **Accent:** `accent: '#D5BCAE'` (Brown/Tan)
    *   *Intended Use:* Secondary highlights, hover effects on navigation or interactive elements, subtle decorative elements, or secondary text.

### Other Key Colors:

*   **Text on Dark Backgrounds:** `text-brand-cream` (`#F8F0E6`)
    *   *Intended Use:* For text placed on dark images or backgrounds, such as in the Hero Section, to ensure readability.
*   **Card Backgrounds:** `bg-white` (`#FFFFFF`)
    *   *Intended Use:* Used for `Card` component backgrounds to provide a distinct, clean surface, especially when cards are placed on the main `bg-background` (Cream).

## 3. Typography

Custom fonts are defined in `tailwind.config.ts` and applied via Tailwind CSS utility classes. Default sans-serif and serif stacks are extended with these custom fonts.

### Font Families:

*   **Versailles**
    *   **Tailwind Utility:** `font-versailles` (or via `font-serif` as it's prepended to the serif stack)
    *   **Intended Use:** Main headlines (e.g., Hero Section headline) and the primary brand logotype ("The Fix Clinic" in the Header).
*   **ApfelGrotezk**
    *   **Tailwind Utility:** `font-apfel` (or via `font-sans` as it's prepended to the sans-serif stack)
    *   **Intended Use:** Body text, UI elements (e.g., navigation links, button text, descriptive text in cards), and any general interface text.

### Key Text Styles/Utility Class Examples:

*   **Hero Section Headline:**
    *   Classes: `text-5xl md:text-7xl font-versailles text-brand-cream`
    *   Represents: Large, prominent headline text using the Versailles font, colored Brand Cream for contrast on dark backgrounds. Responsive sizing for medium devices and up.
*   **Header Navigation Links:**
    *   Classes: `font-apfel hover:text-accent` (color `text-primary` inherited from header)
    *   Represents: UI navigation text using ApfelGrotezk font, with a hover effect changing text color to the Accent color.
*   **Button Text (Primary CTA in Hero):**
    *   Classes: `font-apfel text-lg` (within a button styled `bg-primary text-background`)
    *   Represents: Call-to-action text using ApfelGrotezk font, typically on a contrasting background.

## 4. Core Components

Reusable components form the building blocks of the UI.

### Button

*   **File Location:** `src/components/Button.tsx`
*   **Description:** A versatile button component that can render as a `<button>` or a `next/link` (styled as a button) if `href` prop is provided. It supports primary and secondary visual variants.
*   **Key Tailwind Classes/Styling Props:**
    *   **Base:** `py-3 px-6 rounded-md transition-colors duration-300 ease-in-out font-apfel focus:outline-none focus:ring-2 focus:ring-offset-2`
    *   **Primary Variant (`variant='primary'`):** `bg-primary text-background hover:bg-opacity-90 focus:ring-primary`
    *   **Secondary Variant (`variant='secondary'`):** `bg-background text-primary border border-primary hover:bg-primary hover:text-background focus:ring-primary`

### Card

*   **File Location:** `src/components/Card.tsx`
*   **Description:** A flexible container component used to group related content, typically with a distinct background and shadow to give it elevation.
*   **Key Tailwind Classes/Styling Props:**
    *   `bg-white p-6 md:p-8 rounded-lg shadow-lg`

### Header

*   **File Location:** `src/components/Header.tsx`
*   **Description:** The main site navigation bar, typically containing the logo and primary navigation links.
*   **Key Tailwind Classes/Styling Props:**
    *   **Background & Layout:** `bg-background text-primary py-6 px-4 md:px-8`, `container mx-auto flex justify-between items-center`
    *   **Logo:** `text-2xl font-versailles text-primary`
    *   **Navigation Links:** `font-apfel hover:text-accent` (inherits `text-primary`)

### Hero Section

*   **File Location:** `src/components/HeroSection.tsx`
*   **Description:** A large, prominent section typically at the top of the homepage, featuring a background image, headline, introductory text, and a call-to-action.
*   **Key Tailwind Classes/Styling Props:**
    *   **Sizing & Background:** `relative flex items-center justify-center min-h-[700px] md:min-h-screen bg-cover bg-center` (with inline style for `backgroundImage` URL)
    *   **Overlay:** `absolute inset-0 bg-black opacity-30` (for readability)
    *   **Text Container:** `relative z-10 max-w-3xl mx-auto text-center`
    *   **Headline:** `text-5xl md:text-7xl font-versailles text-brand-cream mb-6`
    *   **Introductory Text:** `text-lg md:text-xl font-apfel text-brand-cream mb-10`
    *   **CTA (Link styled as Button):** `bg-primary text-background font-apfel py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors text-lg`

## 5. Responsive Design Notes (Initial)

The project aims for a responsive design, adapting gracefully to various screen sizes. While initial components are built with desktop in mind, responsive considerations are key for subsequent phases.

### Identified "Immediate Responsive Concerns" (to be addressed):

1.  **Header Navigation:** The current horizontal list of navigation links in the `Header` will not work on small screens. A collapsible "hamburger" menu mechanism is required.
2.  **Hero Section Text Scaling:** Font sizes for the headline and introductory text in the `HeroSection` (`text-5xl`, `text-lg`) may be too large for narrow mobile screens and need adjustment (e.g., using responsive prefixes like `sm:text-3xl` or different base sizes).
3.  **Hero Section Minimum Height on Mobile:** The `min-h-[700px]` on the `HeroSection` might be excessive for some mobile viewports, potentially pushing content too far down or creating unnecessary scrolling. Alternatives like viewport height units (e.g., `min-h-[80vh]`) or smaller fixed heights for mobile should be evaluated.
4.  **General Mobile Layouts:** All components and page layouts will need specific testing and refinement for mobile and tablet views.
