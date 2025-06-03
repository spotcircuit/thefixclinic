# The Fix Clinic - Design System (Phase 1)

## 1. Introduction

This document outlines the core design elements, color palette, typography, and reusable components for The Fix Clinic website redesign. It serves as a guide to maintain consistency and streamline development.

## 2. Color Palette

Colors are defined in `tailwind.config.ts` and applied throughout the application using Tailwind CSS utility classes.

## 3. Spacing System and White Space

Consistent spacing and ample white space are crucial for achieving The Fix Clinic's luxurious and serene aesthetic, inspired by UniquelyYou's design principles.

### Core Principles:

*   **Generous White Space:** Prioritize uncluttered layouts with significant "breathing room" around elements and sections.
*   **Consistent Vertical Rhythm:** Maintain a harmonious flow between text elements, components, and page sections. This is primarily achieved by leveraging Tailwind CSS's default spacing scale (which is based on multiples of 0.25rem / 4px).
*   **Strategic Negative Space:** Use negative space intentionally to guide the user's eye, improve readability, and enhance the overall visual hierarchy.

### Commonly Used Spacing Values (Examples from Current Implementation):

These values represent common patterns observed in the initial components and homepage sections. They serve as a guideline for maintaining consistency.

*   **Page Sections (Vertical Padding):**
    *   Most content sections (Service Categories, About, Testimonials, CTA): `py-24 sm:py-28 md:py-32 lg:py-40`. (Increased for more generous white space).
    *   Header: `py-5 sm:py-6` (Slightly adjusted during responsive pass).
*   **Page Sections (Horizontal Padding & Content Width):**
    *   Standard content width is managed by `container mx-auto`.
    *   Horizontal padding within the container: `px-4 md:px-8` (Maintained, considered sufficient).
*   **Margins Between Major Elements:**
    *   Section Titles to Content Below: Typically `mb-16 sm:mb-20 md:mb-24` (Increased).
    *   Headlines to Following Paragraphs/Elements: Generally `mb-6 sm:mb-8` (Increased).
    *   Paragraphs: Commonly `mb-6 sm:mb-8`. Variations like `mb-8 sm:mb-10` or `mb-10 sm:mb-12` are used before distinct elements like CTAs (Increased).
*   **Grid Gaps:**
    *   3-Column Card Grids (e.g., Service Categories, Testimonials): `gap-10 md:gap-12 lg:gap-16` (Increased).
    *   2-Column Grids (e.g., About Section): `gap-12 lg:gap-20` (Maintained, already generous).
*   **Component-Specific Spacing:**
    *   **Cards (`Card.tsx`):** Internal padding `p-6 md:p-8` (Maintained, considered balanced with increased grid gaps).
    *   **Buttons (`Button.tsx`):**
        *   Standard: `py-3 px-6`.
        *   Prominent (e.g., Hero CTA, Main CTA Section): `py-3 px-8 sm:py-4 sm:px-12` (Adjusted for prominence and responsiveness).
    *   **Form Labels (`Label.tsx`):** Margin below `mb-1.5`.
    *   **Form Inputs/Textareas/Selects:** Internal padding `py-3 px-4`.
*   **Text Element Line Heights:**
    *   Body Text: `leading-relaxed`.
    *   Lead/Intro Text: `leading-loose`.
    *   Headlines: `leading-tight` or `leading-snug` depending on size.

### Recommendations:

*   **Consistency Check:** While generally consistent, periodically review new components against these established patterns.
*   **Purposeful Deviation:** If deviating from these common values, ensure it's a conscious design decision to create emphasis or a specific visual effect, rather than an accidental inconsistency.
*   **Leverage Tailwind Scale:** Continue to primarily use Tailwind's default spacing scale to maintain inherent rhythm. Avoid arbitrary pixel values where possible.

## 4. Typography

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

## 4. Typography (Renumbered)

Custom fonts are defined in `tailwind.config.ts` and applied via Tailwind CSS utility classes. Default sans-serif and serif stacks are extended with these custom fonts.

### Font Families:

*   **Versailles**
    *   **Tailwind Utility:** `font-versailles` (or via `font-serif` as it's prepended to the serif stack)
    *   **Intended Use:** Main headlines (e.g., Hero Section headline) and the primary brand logotype ("The Fix Clinic" in the Header).
*   **ApfelGrotezk**
    *   **Tailwind Utility:** `font-apfel` (or via `font-sans` as it's prepended to the sans-serif stack)
    *   **Intended Use:** Body text, UI elements (e.g., navigation links, button text, descriptive text in cards), and any general interface text.

### Defined Typographic Scale:

This refined scale aims for an elegant hierarchy, drawing inspiration from luxury aesthetics like UniquelyYou. Specific attention is given to font weights, line heights, and letter spacing. Color classes should be applied contextually.

*   **H1 (Hero Headline / Main Page Titles)**
    *   **Intended Use:** Primary page titles, Hero section headlines.
    *   **Tailwind Classes:** `font-versailles text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight sm:leading-none tracking-tight`
    *   *Note:* `font-normal` assumes Versailles is inherently boldish. If it has weights, `font-medium` might be suitable.
    *   *(Example Color: `text-white` or `text-brand-cream` on dark backgrounds, `text-primary` on light)*

*   **H2 (Main Section Titles)**
    *   **Intended Use:** Titles for major page sections (e.g., "Explore Our Treatments").
    *   **Tailwind Classes:** `font-versailles text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight`
    *   *(Example Color: `text-primary`)*

*   **Section Tagline / Prominent Subtitle**
    *   **Intended Use:** A more stylized or descriptive line appearing below an H2 or H3, common in UniquelyYou's style.
    *   **Tailwind Classes:** `font-apfel text-lg sm:text-xl md:text-2xl font-light leading-snug tracking-normal sm:tracking-wide`
    *   *Note:* `font-light` is preferred; if ApfelGrotezk doesn't support it well, use `font-normal` and rely on size/spacing.
    *   *(Example Color: `text-gray-600` or `text-primary`)*

*   **H3 (Sub-section Titles)**
    *   **Intended Use:** Titles for distinct sub-sections within a page (e.g., "Pioneering Aesthetic Excellence" in About Section, CTA headline).
    *   **Tailwind Classes:** `font-versailles text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-normal`
    *   *(Example Color: `text-primary`)*

*   **H4 (Card Titles, Important Labels)**
    *   **Intended Use:** Titles within components like Cards, or prominent labels.
    *   **Tailwind Classes:** `font-apfel text-xl sm:text-2xl font-medium leading-snug tracking-normal`
    *   *(Example Color: `text-primary`)*

*   **H5 (Minor Headlines)**
    *   **Intended Use:** Less prominent headlines, perhaps for footer sections or minor callouts.
    *   **Tailwind Classes:** `font-apfel text-lg sm:text-xl font-medium leading-normal tracking-normal`
    *   *(Example Color: `text-primary`)*

*   **H6 (Group Labels)**
    *   **Intended Use:** Labels for groups of form elements or detailed list item titles.
    *   **Tailwind Classes:** `font-apfel text-base sm:text-lg font-medium leading-normal tracking-normal`
    *   *(Example Color: `text-gray-800`)*

*   **Body Text**
    *   **Intended Use:** Standard paragraph text, descriptions within cards.
    *   **Tailwind Classes:** `font-apfel text-sm sm:text-base font-normal leading-relaxed sm:leading-loose tracking-normal`
    *   *Note:* Consider `font-light` if available and highly legible for a more delicate feel.
    *   *(Example Color: `text-gray-700` or `text-gray-600`)*

*   **Lead / Introductory Text**
    *   **Intended Use:** Sub-text in Hero, introductory paragraphs in sections like "About Us", supporting text in CTA.
    *   **Tailwind Classes:** `font-apfel text-base sm:text-lg md:text-xl font-light leading-loose tracking-normal sm:tracking-wide`
    *   *Note:* `font-light` preferred for an airy, elegant feel; if not well-supported by ApfelGrotezk, use `font-normal`.
    *   *(Example Color: Context-dependent, e.g., `text-brand-cream`, `text-gray-700`)*

*   **Caption / Small Text**
    *   **Intended Use:** Image captions, footnotes, UI hints (e.g., testimonial client names).
    *   **Tailwind Classes:** `font-apfel text-xs sm:text-sm font-normal leading-normal tracking-normal`
    *   *(Example Color: `text-gray-600`)*
    *   **Emphasized Variant (e.g., Testimonial Client Name):** Add `font-medium text-primary`.

*   **Button Text**
    *   **Intended Use:** Text within `Button` components.
    *   **Tailwind Classes:** `font-apfel text-sm sm:text-base font-medium leading-none tracking-wide`
    *   *(Color: Context-dependent, e.g., `text-background` on primary buttons, `text-primary` on secondary)*

*   **Navigation Link Text (Header)**
    *   **Intended Use:** Links in desktop and mobile navigation.
    *   **Desktop:** `font-apfel text-base font-normal tracking-normal`
    *   **Mobile Menu:** `font-apfel text-xl sm:text-2xl font-normal tracking-normal`
    *   *(Color: `text-primary` for desktop, `text-background` for mobile menu overlay)*

## 5. Core Components (Renumbered)

Reusable components form the building blocks of the UI.

### Button

*   **File Location:** `src/components/Button.tsx`
*   **Description:** A versatile button component that can render as a `<button>` or a `next/link` (styled as a button) if `href` prop is provided. It supports primary and secondary visual variants, designed for a clean and elegant aesthetic.
*   **Key Tailwind Classes/Styling Props (as of latest refinement):**
    *   **Base Typography & Structure:** `font-apfel font-medium tracking-wide leading-none rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2`
    *   **Default Sizing (can be overridden by `className`):** `py-3 px-6 text-sm sm:text-base`
    *   **Primary Variant (`variant='primary'`):** 
        *   `bg-primary text-background border border-primary` (border added for definition)
        *   `hover:bg-opacity-90`
        *   `focus:ring-primary focus:ring-offset-background` (ensure `ring-offset-background` matches the actual page background where button is used)
    *   **Secondary Variant (`variant='secondary'`):** 
        *   `bg-transparent text-primary border border-primary`
        *   `hover:bg-primary hover:text-background`
        *   `focus:ring-primary focus:ring-offset-background`

### Card

*   **File Location:** `src/components/Card.tsx`
*   **Description:** A flexible container component for grouping content, designed with a clean and minimalist aesthetic.
*   **Key Tailwind Classes/Styling Props (as of latest refinement):**
    *   `bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-md`
    *   *Note:* Shadow reduced from `shadow-lg` to `shadow-md`, and a subtle `border border-gray-200` was added for better definition on various backgrounds.

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

### Footer (`src/components/Footer.tsx`)

*   **Description:** Provides global site information, navigation, contact details, and copyright at the bottom of each page.
*   **Structure & Layout:**
    *   Responsive multi-column layout (typically 4 columns on desktop: Brand/Social, Quick Links, Contact Us, Hours; stacking to 1-2 columns on mobile).
    *   Uses `container mx-auto` for content width.
    *   Generous vertical padding: `py-16 sm:py-20 md:py-24`.
    *   Background: `bg-white`.
    *   Separators: Top border `border-t border-gray-200` for the main footer area, and another internal top border for the copyright section.
*   **Key Tailwind Classes/Styling Props:**
    *   **Column Titles (e.g., "Quick Links"):** Styled as H5 (`font-apfel text-base sm:text-lg font-medium text-primary mb-4 sm:mb-6 tracking-wide`).
    *   **Links & Text:** Generally `font-apfel text-sm sm:text-base text-gray-600`. Links have `hover:text-primary hover:underline underline-offset-2`.
    *   **Brand Name (Logo Placeholder):** `font-versailles text-2xl sm:text-3xl text-primary mb-4`.
    *   **Social Icons:** Placeholders styled as `w-6 h-6 bg-gray-300 rounded-full ...`. Links `hover:text-primary`.
    *   **Copyright/Credits:** `font-apfel text-xs sm:text-sm text-gray-500`.

### Instagram Section (`src/components/InstagramSection.tsx`)

*   **Description:** A placeholder section for an Instagram feed, designed to visually integrate with the homepage and encourage users to follow on social media.
*   **Structure & Layout:**
    *   Full-width section with `container mx-auto` for content.
    *   Background: `bg-background` (Cream).
    *   Generous vertical padding: `py-24 sm:py-28 md:py-32 lg:py-40`.
    *   Content includes a main title (H2), a tagline (@username), a grid of placeholder posts, and a CTA button.
*   **Key Tailwind Classes/Styling Props:**
    *   **Section Title (H2):** `font-versailles text-3xl sm:text-4xl md:text-5xl font-normal text-primary ... text-center`.
    *   **Tagline:** `font-apfel text-base sm:text-lg md:text-xl font-light text-gray-600 ... text-center max-w-xl mx-auto`.
    *   **Placeholder Post Grid:** `grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8`.
    *   **Individual Post Placeholder:** `a` tag styled with `aspect-square bg-gray-200 rounded-md overflow-hidden relative group shadow-md hover:shadow-lg`. Uses `next/image` with `layout="fill" objectFit="cover"`. Hover includes image scale and overlay with placeholder icon.
    *   **CTA Button:** Secondary variant, e.g., `Button variant="secondary"`. Text: "Follow Us @TheFixClinic". Centered below the grid.

## 6. Responsive Design Notes (Initial) (Renumbered)

The project aims for a responsive design, adapting gracefully to various screen sizes. This section outlines key strategies and addresses concerns identified during development.

### General Responsive Strategies Applied:

During the responsive design review and refinement pass, the following general strategies were applied across components:

*   **Mobile-First Approach with Breakpoint Overrides:** Base Tailwind classes generally target mobile styles. Responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) are used to adapt layouts, typography, and spacing for larger screens.
*   **Typography Scaling:**
    *   Font sizes for headlines and body text are adjusted across breakpoints to ensure readability and visual hierarchy. Typically, base font sizes are suitable for mobile, scaling up with `sm:`, `md:`, etc. prefixes. (Refer to Section 4: Typography for specific scales).
    *   Example: `text-2xl sm:text-3xl md:text-4xl`.
*   **Spacing Adjustments (Padding & Margins):**
    *   Vertical and horizontal padding for sections is often adjusted for different screen sizes (e.g., `py-12 sm:py-16 md:py-20`).
    *   Margins between elements (e.g., headlines, paragraphs, cards) are also fine-tuned using responsive prefixes to maintain balance.
*   **Grid Layouts:**
    *   Tailwind's grid system (`grid grid-cols-X gap-Y`) is used extensively.
    *   Grids typically stack to a single column on mobile (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) by defining column counts for `md` or `lg` breakpoints.
*   **Image Scaling:**
    *   The `next/image` component with `layout="fill" objectFit="cover"` or `layout="responsive"` is used to ensure images adapt well to their containers.
    *   Container heights for images are sometimes adjusted responsively (e.g., `h-72 sm:h-80 md:h-[450px]`).
*   **Tap Target Sizes:** For interactive elements like buttons and mobile menu links, padding and font sizes are considered to ensure they are easily tappable on touch devices.

### Previously Identified Concerns & Resolutions:

1.  **Header Navigation (Mobile):**
    *   **Resolved:** A mobile menu with a hamburger toggle has been implemented in `Header.tsx`. It features appropriately sized links and tap targets. (Details in Core Components > Header).
2.  **Hero Section Text Scaling & Min Height (Mobile):**
    *   **Resolved:**
        *   Headline font size adjusted: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`.
        *   Intro text font size adjusted: `text-base sm:text-lg md:text-xl`.
        *   CTA button text/padding adjusted.
        *   Minimum height changed to `min-h-[560px] sm:min-h-[650px] md:min-h-screen` for better mobile adaptability.
3.  **General Mobile Layouts & Readability:**
    *   **Ongoing Refinement:** This pass addressed key sections like `ServiceCategoriesSection`, `AboutSection`, `TestimonialsSection`, and `CtaSection` by adjusting text sizes, margins, padding, and component-specific properties (e.g., image heights) for mobile and tablet views.
    *   The `forms-showcase` page was also refined for better mobile presentation of form elements.

### Future Considerations:

*   Continued testing on various devices is crucial.
*   More complex components or layouts added in the future will require their own specific responsive design attention.

## 7. Forms (Renumbered)

Form elements are designed for a clean, minimalist aesthetic with clear usability. They are typically composed of individual components found in `src/components/forms/`.

### Label (`src/components/forms/Label.tsx`)

*   **Description:** Used to label form inputs, textareas, and selects.
*   **Key Tailwind Classes/Styling:**
    *   `block` (for layout)
    *   `font-apfel text-sm text-gray-700` (typography)
    *   `mb-1.5` (margin below label)

### Input (`src/components/forms/Input.tsx`)

*   **Description:** A versatile input component for various types (text, email, password, etc.).
*   **Key Tailwind Classes/Styling:**
    *   `w-full` (full width by default)
    *   `font-apfel text-base text-gray-800` (typography)
    *   `bg-white py-3 px-4` (background and padding)
    *   `border border-gray-300 rounded-md` (border and rounding)
    *   `focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30` (focus state with primary color border and ring)
    *   `transition-colors duration-200 ease-in-out` (smooth transition for focus)
*   **Disabled State:** Achieved by passing the `disabled` HTML attribute. Browsers typically style this with a grayed-out appearance. The component itself doesn't add specific disabled styles beyond default browser behavior.
*   **Error State (Conceptual):** Apply border and ring color classes like `border-red-500 focus:border-red-500 focus:ring-red-500/30`. Error messages should be separate elements.

### Textarea (`src/components/forms/Textarea.tsx`)

*   **Description:** For multi-line text input.
*   **Key Tailwind Classes/Styling:**
    *   Similar to `Input`: `w-full font-apfel text-base text-gray-800 bg-white py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors duration-200 ease-in-out`
    *   `resize-y` (allows vertical resizing, can be changed to `resize-none` or `resize` for all directions)
*   **Default Rows:** `rows={4}` (can be overridden via props)
*   **Disabled & Error States:** Similar to `Input`.

### Select (`src/components/forms/Select.tsx`)

*   **Description:** For dropdown selection.
*   **Key Tailwind Classes/Styling:**
    *   Similar to `Input`: `w-full font-apfel text-base text-gray-800 bg-white py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors duration-200 ease-in-out`
    *   `appearance-none` (removes default browser appearance for custom arrow)
    *   `pr-8` (padding on the right to make space for the arrow)
    *   `bg-no-repeat bg-right px-4 bg-[url('data:image/svg+xml;...')]` (custom SVG chevron icon background positioned to the right)
*   **Options (`<option>` elements):** Should use `font-apfel`. Browsers have limitations on styling options directly, but the font should be inherited.
*   **Disabled & Error States:** Similar to `Input`.

## 8. Image Usage and Treatment (Renumbered)

Images are a critical component of The Fix Clinic's luxury aesthetic. Careful selection and consistent treatment are essential.

### General Guidelines:

*   **Quality:** Always prioritize high-quality, professional photography. Images should be sharp, well-composed, and align with the brand's sophisticated and serene identity. Avoid pixelated, blurry, or poorly lit images.
*   **Aspect Ratios:**
    *   **Hero/Banner Images:** Typically `16:9` or wider (e.g., `21:9`) for full-width hero sections.
    *   **Card/Thumbnail Images:** `4:3`, `3:2`, or `1:1` (square) are common and can be used based on the specific component's design (e.g., Service Category cards, About Section image). Consistency within similar components is key.
    *   **Editorial/Content Images:** Flexible, but should be chosen to complement the text layout. The `AboutSection` image, for instance, aims for a large, dominant "editorial-style" presentation, often requiring significant vertical space (e.g., `h-[30rem]` to `h-[45rem]` depending on screen size) to make an impact.
*   **Optimization:**
    *   All images must be optimized for web to ensure fast loading times. Use tools to compress images (e.g., TinyPNG, ImageOptim) without significant visible quality loss.
    *   Utilize `next/image` component whenever possible for automatic optimization, responsive sizing, and lazy loading.
*   **Minimalism & Style:**
    *   Avoid overly complex treatments like heavy filters, artificial vignettes, or distracting borders unless they are an integral part of a specific design element (e.g., a subtle border within a Card component).
    *   The image itself, its quality, and composition should be the focus.
    *   Color palettes within images should ideally complement the brand's colors (Teal, Cream, Brown/Tan) or provide a neutral, calming backdrop.

### Interactive Image Hover Effect:

For images that are interactive (e.g., an image within a link, clickable gallery thumbnails), a subtle hover effect should be applied to provide visual feedback.

*   **Effect:** A combination of slight scale-up and a subtle change in opacity or brightness to create an engaging but not distracting effect.
*   **Implementation Method:**
    *   A global utility class `.interactive-image-hover` can be created in `globals.css`.
    *   Alternatively, apply Tailwind classes directly to the parent (often an `<a>` tag) and the child `<img>` tag.
*   **Example Utility Class (`globals.css`):**
    ```css
    /* In globals.css or a similar central stylesheet */
    .interactive-image-hover .image-target { /* Apply .image-target to the actual <img> tag */
      @apply transition-all duration-300 ease-in-out;
    }
    .interactive-image-hover:hover .image-target {
      @apply scale-105 opacity-90; /* Or brightness-105 / filter saturate-150 etc. */
    }
    /* Ensure the container of the image has overflow-hidden if scale causes issues */
    .interactive-image-container {
        @apply overflow-hidden rounded-lg; /* Example for a card image */
    }
    ```
*   **Direct Tailwind Class Application (Conceptual):**
    ```html
    <a href="#" class="block overflow-hidden rounded-lg group">
      <img 
        src="..." 
        alt="..." 
        class="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90" 
      />
    </a>
    ```
    *   In this direct method, the `group` class on the parent `<a>` tag allows styling the child `<img>` on parent hover. `overflow-hidden` on the parent is crucial if scaling the image.

*   **Transition:** `transition-all duration-300 ease-in-out` (or similar) for a smooth effect.

## 9. Scroll Animations (Renumbered)

Subtle animations are applied to sections or elements as they enter the viewport to enhance user engagement and provide a sense of dynamism.

### Implementation Method:

*   **Intersection Observer API with Custom Hook:** Animations are primarily triggered using the native `IntersectionObserver` API. This is encapsulated within a custom React hook: `src/hooks/useScrollAnimation.ts`.
*   **`useScrollAnimation` Hook:**
    *   Takes an optional `options` object for the `IntersectionObserver` (e.g., `threshold`, `triggerOnce`).
    *   Returns a `ref` to be attached to the element to observe, and an `isVisible` boolean state.
    *   Components using this hook must be Client Components (`"use client";`).

### Usage:

1.  **Import Hook:** `import useScrollAnimation from '@/hooks/useScrollAnimation';`
2.  **Instantiate Hook:** `const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });`
3.  **Attach Ref:** Add `ref={elementRef}` to the JSX element (usually a section or a wrapper div) that you want to animate.
4.  **Apply Conditional Styling:** Use the `isVisible` boolean to conditionally apply Tailwind CSS classes for initial (hidden) and final (visible) states.

### Animation Style: "Fade-in-up"

This is the primary subtle animation style used for sections. Elements start slightly below their final position and faded out, then slide up and fade in.

*   **Target Element Base Classes (applied directly to the component/element):**
    *   General Section Wrapper: `transition-opacity transform duration-700 ease-out`
    *   Internal Elements (Titles, Text, Grids, Buttons): `transition-opacity transform duration-500 ease-out` (often slightly quicker than the main section wrapper).
*   **Initial (Hidden) State Classes (applied when `!isVisible`):**
    *   For main section wrapper: `opacity-0 translate-y-10` (or `translate-y-12` for slightly larger initial offset).
    *   For internal elements: `opacity-0 translate-y-8` (a common subtle upward translation).
    *   For specific effects (e.g., `AboutSection` image): `opacity-0 scale-95 translate-y-8`.
    *   For specific effects (e.g., `AboutSection` text block): `opacity-0 -translate-x-10`.
*   **Final (Visible) State Classes (applied when `isVisible`):**
    *   `opacity-100 translate-y-0` (or `translate-x-0`, `scale-100` as appropriate).
*   **Delays for Staggering:**
    *   Tailwind `delay-*` utility classes (e.g., `delay-100`, `delay-200`, `delay-300`) are applied to child elements based on the `isSectionVisible` state of their parent section. This simplifies hook usage to one observer per section, while still achieving a staggered effect.
    *   Example: Title `delay-100`, Tagline `delay-200`, Content Grid/Block `delay-300`, CTA Button `delay-400`.
    *   For grids of cards/items, an inline style `transitionDelay` (e.g., `style={{ transitionDelay: isVisible ? \`${baseDelay + index * 150}ms\` : '0ms' }}`) is used on the items themselves for a dynamic stagger.

*   **Refined Example Application on a Section Component (Conceptual):**
    ```tsx
    // Inside a Client Component
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    return (
      <section
        ref={sectionRef}
        className={`py-24 transition-opacity transform duration-700 ease-out ${
          isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className={`... transition-opacity transform duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}>...</h2>
        <p className={`... transition-opacity transform duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`}>...</p>
        {/* Grid or other content with further delays */}
      </section>
    );
    ```

This refined approach ensures animations are smooth, subtle, and consistently applied, enhancing the user experience without being distracting. The `triggerOnce: true` setting in `useScrollAnimation` remains crucial for performance.
