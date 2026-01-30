# FMVA Landing Page - Standalone Package

This is a complete, standalone landing page package for the FMVA (Financial Modeling and Valuation Analyst) course. It includes all necessary components, styles, and dependencies to be used in any Next.js project.

## 📁 Folder Structure

```
landing/
├── app/
│   └── landing/
│       └── page.tsx          # Main landing page
├── components/
│   ├── landing/              # Landing page specific components
│   │   ├── hero-section.tsx
│   │   ├── instructor-section.tsx
│   │   ├── audience-filter-section.tsx
│   │   ├── curriculum-section.tsx
│   │   ├── social-proof-section.tsx
│   │   ├── enroll-section.tsx
│   │   └── animated-charts.tsx
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer component
│   ├── scroll-reveal.tsx     # Scroll animation component
│   └── ui/                   # UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── chart.tsx
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   └── logos/                # Company logos (add your logos here)
└── styles/
    └── globals.css           # Global styles and animations
```

## 🚀 Installation

1. Copy the entire `landing` folder to your Next.js project
2. Install required dependencies:
```bash
npm install recharts lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label next-themes
```

3. Ensure your project has Tailwind CSS configured with the same theme variables (see `styles/globals.css`)

4. Add the necessary assets:
   - Logo: Place your logo at `/public/logo2.png`
   - Background pattern: Place at `/public/abstract-professional-finance-pattern.jpg`
   - Company logos: Place in `/public/logos/` with names: `cib.png`, `hsbc.png`, `deloitte.png`, `kpmg.png`

## 📝 Usage

### Option 1: Use as a route in your Next.js app

1. Copy the `app/landing` folder to your `app` directory
2. Update imports in `app/landing/page.tsx` to match your project structure
3. Access at `/landing`

### Option 2: Use as a component

Import and use the landing page as a component:

```tsx
import LandingPage from './landing/app/landing/page'

export default function Page() {
  return <LandingPage />
}
```

## 🎨 Customization

### Colors
Update the CSS variables in `styles/globals.css` to match your brand:
- `--primary`: Main brand color
- `--background`: Background color
- `--foreground`: Text color
- Other theme colors as needed

### Content
All Arabic content is in the component files. Edit directly:
- `components/landing/hero-section.tsx` - Hero section content
- `components/landing/instructor-section.tsx` - Instructor section
- `components/landing/curriculum-section.tsx` - Curriculum details
- `components/landing/social-proof-section.tsx` - Company logos and testimonials

### Video
Replace the video placeholder in `components/landing/instructor-section.tsx` with your actual video embed or player.

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "recharts": "^2.15.4",
    "lucide-react": "^0.454.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-label": "^2.1.1",
    "next": "^16.0.8",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

## 🎯 Features

- ✅ Fully responsive design
- ✅ RTL (Right-to-Left) support for Arabic content
- ✅ Animated charts using Recharts
- ✅ Scroll-reveal animations
- ✅ Luxury design with glassmorphism effects
- ✅ Form handling with validation
- ✅ Video placeholder ready for integration
- ✅ Company logo placeholders

## 📱 Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+)
- Large: `lg:` (1024px+)
- XL: `xl:` (1280px+)

## 🔧 Configuration

### Update Path Aliases

If your project uses different path aliases, update imports in all component files:
- Replace `@/components` with your components path
- Replace `@/lib` with your lib path

### Font Configuration

The page uses the Parkinsans font. Ensure it's configured in your `layout.tsx` or update the font in `styles/globals.css`.

## 📄 License

This is a standalone package for internal use. Customize as needed for your project.

