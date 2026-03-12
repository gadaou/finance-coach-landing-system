---
name: Phone Validation for Spam Protection
overview: Add multi-layer phone number validation to protect against spam submissions, including digit count per country, format validation, and spam pattern detection.
todos:
  - id: validation-lib
    content: Create lib/phone-validation.ts with digit rules for all 59 countries and spam pattern detection
    status: completed
  - id: update-country-select
    content: Add digit rules to country data in country-code-select.tsx
    status: completed
  - id: client-validation
    content: Add real-time validation to enroll-form-section.tsx with error messages
    status: completed
  - id: server-validation
    content: Add server-side validation to app/api/submit/route.ts
    status: completed
  - id: update-other-forms
    content: Apply same validation to all other enroll forms (fmva1, fmva3, fmva4, fmva6, landing)
    status: completed
isProject: false
---

# Phone Number Validation Plan

## Current State

- Phone input accepts any text with no validation
- Country code selector exists with 59 countries in `[components/country-code-select.tsx](components/country-code-select.tsx)`
- Form submits raw phone string to API in `[app/api/submit/route.ts](app/api/submit/route.ts)`

## Validation Layers to Add

### Layer 1: Digit Count Validation by Country (Core Protection)

Create a validation map with min/max digits for each country code:

```typescript
const phoneDigitRules: Record<string, { min: number; max: number }> = {
  "+20": { min: 10, max: 10 },  // Egypt
  "+966": { min: 9, max: 9 },   // Saudi Arabia
  "+971": { min: 9, max: 9 },   // UAE
  "+1": { min: 10, max: 10 },   // USA/Canada
  "+44": { min: 10, max: 11 },  // UK
  // ... etc for all 59 countries
}
```

### Layer 2: Format Checks

- **Digits only**: Strip/reject non-numeric characters (except spaces/dashes for display)
- **No leading zeros** for some countries (e.g., Egypt mobile numbers start with 1)
- **Real-time feedback**: Show error message as user types

### Layer 3: Spam Pattern Detection

Reject obvious fake/spam numbers:

- All same digits: `1111111111`, `0000000000`
- Sequential digits: `1234567890`, `9876543210`
- Test patterns: `1231231234`

### Layer 4: Server-Side Validation (Security)

Client validation can be bypassed - add same validation in API route.

## Implementation Files

1. **Create** `lib/phone-validation.ts` - Shared validation logic
  - `validatePhone(countryCode: string, phone: string)` function
  - Returns `{ valid: boolean; error?: string }`
2. **Update** `[components/country-code-select.tsx](components/country-code-select.tsx)`
  - Add digit rules to country data
3. **Update** `[components/enroll-form-section.tsx](components/enroll-form-section.tsx)`
  - Add real-time validation on phone input
  - Show error message below phone field
  - Disable submit if phone invalid
4. **Update** `[app/api/submit/route.ts](app/api/submit/route.ts)`
  - Add server-side phone validation
  - Return 400 error for invalid phones
5. **Update all other enroll forms** (fmva1, fmva3, fmva4, fmva6, landing)

## Optional: Use libphonenumber-js Library

For more robust validation, we could use Google's `libphonenumber-js` library which provides:

- Automatic country detection
- Mobile vs landline detection  
- Stricter format validation
- ~40KB bundle size (tree-shakeable)

This is optional but recommended if you want professional-grade validation.

## Example UX Flow

```
User selects: +20 (Egypt)
User types: 123
-> Shows: "Egyptian numbers must be 10 digits (you have 3)"

User types: 1234567890
-> Shows: Valid (green checkmark)

User types: 1111111111
-> Shows: "Please enter a valid phone number"
```

