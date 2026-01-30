# Setup Guide

## ✅ What's Included

This package includes:
- ✅ All landing page components (7 sections)
- ✅ Navbar and Footer components
- ✅ UI components (Button, Input, Label, Chart)
- ✅ Scroll reveal animation component
- ✅ Utility functions
- ✅ Global styles with animations
- ✅ Main page component

## 🚀 Quick Start

### 1. Copy to Your Project

Copy the entire `landing` folder to your Next.js project root.

### 2. Install Dependencies

```bash
npm install recharts lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label
```

### 3. Configure Path Aliases

Ensure your `tsconfig.json` has these path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

If you use different aliases, update imports in all component files.

### 4. Add Global Styles

Import the styles in your root layout:

```tsx
// app/layout.tsx
import "../landing/styles/globals.css"
```

Or copy the styles to your existing `globals.css`.

### 5. Add Required Assets

Place these in your `public` folder:
- `logo2.png` - Your logo
- `abstract-professional-finance-pattern.jpg` - Background pattern
- `logos/cib.png`, `logos/hsbc.png`, `logos/deloitte.png`, `logos/kpmg.png` - Company logos

### 6. Use the Landing Page

**Option A: As a Route**
```tsx
// app/landing/page.tsx
// Already included! Just ensure it's in your app directory
```

**Option B: As a Component**
```tsx
import LandingPage from '@/landing/app/landing/page'

export default function Page() {
  return <LandingPage />
}
```

## 🎨 Customization

### Update Brand Colors
Edit `styles/globals.css` and update CSS variables:
- `--primary`: Main brand color
- `--background`: Background color
- `--foreground`: Text color

### Update Content
All content is in component files:
- `components/landing/hero-section.tsx` - Hero content
- `components/landing/instructor-section.tsx` - Instructor info
- `components/landing/curriculum-section.tsx` - Course curriculum
- `components/landing/social-proof-section.tsx` - Testimonials & logos

### Update Navbar Links
Edit `components/navbar.tsx` to update navigation links.

### Update Footer
Edit `components/footer.tsx` to update footer content and links.

## 📝 Notes

- All components use `@/` path aliases
- RTL support is built-in for Arabic content
- Charts use Recharts library
- Animations are CSS-based for performance
- Form submission currently logs to console - update `enroll-section.tsx` to connect to your backend

## 🔧 Troubleshooting

**Import errors?**
- Check your `tsconfig.json` path aliases
- Or replace `@/` with relative paths

**Styles not working?**
- Ensure Tailwind CSS is configured
- Import `globals.css` in your layout
- Check that all CSS variables are defined

**Charts not showing?**
- Verify Recharts is installed
- Check browser console for errors

**Images not loading?**
- Verify image paths in `public` folder
- Check Next.js Image component configuration

