# Copy Instructions

This folder contains a complete standalone landing page package. To use it in another project:

## Quick Copy Steps

1. **Copy the entire `landing` folder** to your target project
2. **Update imports** - Replace `@/` aliases with relative paths or your project's path aliases
3. **Install dependencies** - Run `npm install` with the packages listed in `package.json`
4. **Add assets** - Place required images in the `public` folder
5. **Configure Tailwind** - Ensure your project has Tailwind CSS with the theme variables from `styles/globals.css`

## Files to Update Imports

All component files use `@/` path aliases. You need to either:
- Configure your project to use `@/` aliases (recommended)
- Or replace `@/components` with `../../components` and `@/lib` with `../../lib` in all files

## Required Assets

Place these files in your project's `public` folder:
- `/public/logo2.png` - Main logo
- `/public/abstract-professional-finance-pattern.jpg` - Background pattern
- `/public/logos/cib.png` - CIB logo
- `/public/logos/hsbc.png` - HSBC logo  
- `/public/logos/deloitte.png` - Deloitte logo
- `/public/logos/kpmg.png` - KPMG logo

## Integration

### Option 1: As a Route
Copy `app/landing/page.tsx` to your `app/landing/` directory

### Option 2: As a Component
Import the page component and use it anywhere in your app

