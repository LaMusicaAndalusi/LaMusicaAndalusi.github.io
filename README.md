# Hasnaa Salmouni - Personal Portfolio

A modern, elegant, and high-end personal portfolio website for Hasnaa Salmouni, a Computer Science Master's student and aspiring Software Engineer.

![Portfolio Preview](assets/images/preview.png)

## Live Demo

Visit the live portfolio at: [https://lamusicaandalusi.github.io](https://lamusicaandalusi.github.io)

## Features

### Design & UX
- **Modern Dark Theme** - Premium dark color palette with violet/pink accents
- **Light Theme Toggle** - Seamless light/dark mode switch with localStorage persistence
- **Responsive Design** - Mobile-first approach, fully responsive across all devices
- **Smooth Animations** - Intersection Observer-based reveal animations, hover effects, and micro-interactions
- **Loading Screen** - Elegant loader with smooth transition
- **Scroll Progress Indicator** - Visual progress bar at the top of the viewport
- **Back to Top Button** - Appears after scrolling down

### Sections
1. **Hero** - Full-screen introduction with typing effect, animated particles, and floating cards
2. **About** - Professional biography with animated stat counters
3. **Skills** - Interactive skill cards with animated progress bars and technology badges
4. **Projects** - Filterable and searchable project showcase with hover effects
5. **Education** - Interactive timeline with academic journey
6. **Experience** - Grid layout showcasing activities and contributions
7. **GitHub** - Dashboard-style statistics, contribution graph, and featured repositories
8. **Contact** - Professional contact form with validation and social links
9. **Footer** - Quick links and social connections

### Technical Features
- **Vanilla JavaScript** - No frameworks or libraries required
- **CSS Custom Properties** - Theme-aware design system
- **Intersection Observer API** - Performance-optimized scroll animations
- **Form Validation** - Client-side validation with error states
- **SEO Optimized** - Complete meta tags, Open Graph, and structured HTML
- **Accessibility** - WCAG-compliant with proper ARIA labels, focus states, and semantic HTML
- **Performance** - Optimized loading, efficient animations, and minimal repaints

## Technology Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - ES6+ features, modular code structure

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── main.js         # All JavaScript functionality
├── assets/
│   ├── images/         # Image assets
│   └── icons/          # Icon assets
└── README.md           # This file
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/lamusicaandalusi/LaMusicaAndalusi.github.io.git
cd LaMusicaAndalusi.github.io
```

2. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if available)
npx serve .
```

3. Visit `http://localhost:8000`

### GitHub Pages Deployment

This portfolio is designed for easy GitHub Pages deployment:

1. Push the code to a GitHub repository
2. Go to repository Settings > Pages
3. Select the branch (usually `main` or `master`)
4. Your portfolio will be live at `https://yourusername.github.io`

## Customization

### Colors
Edit CSS custom properties in `:root` within `css/style.css`:

```css
:root {
    --primary: #7C3AED;       /* Violet */
    --primary-light: #A855F7; /* Light Violet */
    --accent: #EC4899;        /* Pink */
    --background: #0F172A;    /* Dark Blue */
    --surface: #1E293B;       /* Surface */
    --text: #F8FAFC;          /* White */
    --text-muted: #94A3B8;    /* Gray */
}
```

### Content
Update the HTML content in `index.html` to personalize:
- Name and title
- Bio and description
- Skills and percentages
- Project details
- Education timeline
- Contact information

### Projects
Add new projects by duplicating the `.project-card` article in the Projects section:

```html
<article class="project-card" data-category="python flask">
    <!-- Project content -->
</article>
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- Google Fonts loaded with `preconnect`
- Efficient CSS with minimal specificity
- JavaScript uses passive event listeners
- Intersection Observer for lazy animations
- Reduced motion support for accessibility

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Color contrast compliance (WCAG AA)
- Screen reader friendly
- `prefers-reduced-motion` support

## License

&copy; 2026 Hasnaa Salmouni. All Rights Reserved.

## Contact

- GitHub: [@lamusicaandalusi](https://github.com/lamusicaandalusi)
- LinkedIn: [Hasnaa Salmouni](https://www.linkedin.com/in/hasnaa-salmouni)
- YouTube: [@LaMusicaAndalusi](https://www.youtube.com/@LaMusicaAndalusi)
- Website: [lamusicaandalusi.com](https://lamusicaandalusi.com)

---

Built with passion and precision by Hasnaa Salmouni.
