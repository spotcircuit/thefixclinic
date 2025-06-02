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
    *   Most content sections (Service Categories, About, Testimonials, CTA): `py-16 md:py-24`
    *   Header: `py-6`
*   **Page Sections (Horizontal Padding & Content Width):**
    *   Standard content width is managed by `container mx-auto`.
    *   Horizontal padding within the container: `px-4 md:px-8`.
*   **Margins Between Major Elements:**
    *   Section Titles to Content Below: Typically `mb-16` (e.g., before a grid of cards or main text block).
    *   Headlines to Following Paragraphs/Elements: Generally `mb-6`.
    *   Paragraphs: Commonly `mb-6`. Variations like `mb-8` or `mb-10` are used before distinct elements like CTAs.
*   **Grid Gaps:**
    *   3-Column Card Grids (e.g., Service Categories, Testimonials): `gap-10`.
    *   2-Column Grids (e.g., About Section): `gap-12 lg:gap-20`.
*   **Component-Specific Spacing:**
    *   **Cards (`Card.tsx`):** Internal padding `p-6 md:p-8`.
    *   **Buttons (`Button.tsx`):**
        *   Standard: `py-3 px-6`.
        *   Prominent (e.g., Hero CTA, Main CTA Section): `py-3 px-8` or `py-4 px-10`.
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

Below is the defined scale for various text elements. These are achieved by combining Tailwind CSS utility classes. Color classes (e.g., `text-primary`, `text-gray-700`) should be applied based on context and background.

*   **Heading 1 (H1)**
    *   **Intended Use:** Primary page titles, Hero section headlines.
    *   **Tailwind Classes:** `font-versailles text-5xl md:text-7xl font-normal leading-tight md:leading-none tracking-tight`
    *   *(Example Color: `text-brand-cream` on dark backgrounds, `text-primary` on light backgrounds)*

*   **Heading 2 (H2)**
    *   **Intended Use:** Main section titles.
    *   **Tailwind Classes:** `font-versailles text-4xl md:text-5xl font-normal leading-tight tracking-tight`
    *   *(Example Color: `text-primary`)*

*   **Heading 3 (H3)**
    *   **Intended Use:** Sub-section titles, large card titles.
    *   **Tailwind Classes:** `font-versailles text-3xl md:text-4xl font-normal leading-snug tracking-normal`
    *   *(Example Color: `text-primary`)*

*   **Heading 4 (H4)**
    *   **Intended Use:** Smaller card titles, important labels.
    *   **Tailwind Classes:** `font-apfel text-2xl md:text-3xl font-semibold leading-snug tracking-normal`
    *   *(Example Color: `text-primary`)*

*   **Heading 5 (H5)**
    *   **Intended Use:** Minor headlines (e.g., potential Footer section titles).
    *   **Tailwind Classes:** `font-apfel text-xl md:text-2xl font-semibold leading-normal tracking-normal`
    *   *(Example Color: `text-primary`)*

*   **Heading 6 (H6)**
    *   **Intended Use:** Group labels within forms or detailed sections.
    *   **Tailwind Classes:** `font-apfel text-lg md:text-xl font-semibold leading-normal tracking-normal`
    *   *(Example Color: `text-gray-800`)*

*   **Body Text**
    *   **Intended Use:** Standard paragraph text.
    *   **Tailwind Classes:** `font-apfel text-base md:text-lg font-normal leading-relaxed tracking-normal`
    *   *(Example Color: `text-gray-700`)*

*   **Lead / Introductory Text**
    *   **Intended Use:** Larger body text, often used at the start of sections or for emphasis (e.g., supporting text in Hero/CTA, About section paragraphs).
    *   **Tailwind Classes:** `font-apfel text-lg md:text-xl font-normal leading-loose tracking-normal`
    *   *(Example Color: `text-gray-700` or context-dependent, like `text-brand-cream` in Hero)*

*   **Caption / Small Text**
    *   **Intended Use:** Image captions, footnotes, UI hints.
    *   **Tailwind Classes:** `font-apfel text-sm md:text-base font-normal leading-normal tracking-normal`
    *   *(Example Color: `text-gray-600`)*
    *   **Emphasized Variant (e.g., Testimonial Client Name):** Add `font-semibold text-primary`.

## 5. Core Components (Renumbered)

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
    *   **Editorial/Content Images:** Flexible, but should be chosen to complement the text layout.
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
    *   `transition-opacity transform duration-700 ease-out` (Example duration, can be adjusted. `duration-500` is also common).
    *   Optionally, a `delay-[n]` class can be added if a delay is desired before the animation starts after becoming visible.
*   **Initial (Hidden) State Classes (applied when `!isVisible`):**
    *   `opacity-0`
    *   `translate-y-10` (or `translate-y-8`, `translate-y-12` - adjust distance as needed)
*   **Final (Visible) State Classes (applied when `isVisible`):**
    *   `opacity-100`
    *   `translate-y-0`

*   **Example Application on a Section Component:**
    ```tsx
    // Inside a Client Component
    const [sectionRef, isVisible] = useScrollAnimation();

    return (
      <section
        ref={sectionRef}
        className={`py-16 transition-opacity transform duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* ... content ... */}
      </section>
    );
    ```

*   **Staggering Child Elements:**
    *   For multiple items within an animated section (e.g., cards in a grid), individual transition delays can be applied to create a staggered effect. This is typically done by adding an inline `style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}` to child elements, along with their own `opacity` and `transform` classes based on the parent's `isVisible` state.
    *   Example for child elements:
        *   Initial: `opacity-0 translate-y-10`
        *   Visible: `opacity-100 translate-y-0`
        *   Transition: `transition-opacity transform duration-500 ease-out`
        *   Inline style for delay: `style={{ transitionDelay: isVisible ? \`150ms + index * 150ms\` : '0ms' }}`

This approach provides a lightweight and performant way to implement scroll-triggered animations without external libraries.
