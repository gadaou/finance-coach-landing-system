/**
 * Phone number validation utilities for spam protection.
 * Validates phone numbers based on country-specific digit rules and spam patterns.
 */

export type PhoneValidationResult = {
  valid: boolean
  error?: string
}

// Digit count rules for each country code (min/max digits excluding country code)
export const phoneDigitRules: Record<string, { min: number; max: number; name: string }> = {
  "+20": { min: 10, max: 10, name: "Egypt" },
  "+966": { min: 9, max: 9, name: "Saudi Arabia" },
  "+971": { min: 9, max: 9, name: "UAE" },
  "+962": { min: 9, max: 9, name: "Jordan" },
  "+965": { min: 8, max: 8, name: "Kuwait" },
  "+974": { min: 8, max: 8, name: "Qatar" },
  "+973": { min: 8, max: 8, name: "Bahrain" },
  "+968": { min: 8, max: 8, name: "Oman" },
  "+961": { min: 7, max: 8, name: "Lebanon" },
  "+964": { min: 10, max: 10, name: "Iraq" },
  "+963": { min: 9, max: 9, name: "Syria" },
  "+970": { min: 9, max: 9, name: "Palestine" },
  "+967": { min: 9, max: 9, name: "Yemen" },
  "+218": { min: 9, max: 10, name: "Libya" },
  "+216": { min: 8, max: 8, name: "Tunisia" },
  "+213": { min: 9, max: 9, name: "Algeria" },
  "+212": { min: 9, max: 9, name: "Morocco" },
  "+249": { min: 9, max: 9, name: "Sudan" },
  "+1": { min: 10, max: 10, name: "USA/Canada" },
  "+44": { min: 10, max: 11, name: "UK" },
  "+49": { min: 10, max: 11, name: "Germany" },
  "+33": { min: 9, max: 9, name: "France" },
  "+39": { min: 9, max: 10, name: "Italy" },
  "+34": { min: 9, max: 9, name: "Spain" },
  "+31": { min: 9, max: 9, name: "Netherlands" },
  "+32": { min: 9, max: 9, name: "Belgium" },
  "+41": { min: 9, max: 9, name: "Switzerland" },
  "+43": { min: 10, max: 13, name: "Austria" },
  "+90": { min: 10, max: 10, name: "Turkey" },
  "+91": { min: 10, max: 10, name: "India" },
  "+92": { min: 10, max: 10, name: "Pakistan" },
  "+86": { min: 11, max: 11, name: "China" },
  "+81": { min: 10, max: 11, name: "Japan" },
  "+82": { min: 9, max: 10, name: "South Korea" },
  "+61": { min: 9, max: 9, name: "Australia" },
  "+64": { min: 8, max: 10, name: "New Zealand" },
  "+27": { min: 9, max: 9, name: "South Africa" },
  "+234": { min: 10, max: 10, name: "Nigeria" },
  "+254": { min: 9, max: 9, name: "Kenya" },
  "+55": { min: 10, max: 11, name: "Brazil" },
  "+52": { min: 10, max: 10, name: "Mexico" },
  "+54": { min: 10, max: 10, name: "Argentina" },
  "+7": { min: 10, max: 10, name: "Russia" },
  "+48": { min: 9, max: 9, name: "Poland" },
  "+46": { min: 9, max: 9, name: "Sweden" },
  "+47": { min: 8, max: 8, name: "Norway" },
  "+45": { min: 8, max: 8, name: "Denmark" },
  "+358": { min: 9, max: 10, name: "Finland" },
  "+353": { min: 9, max: 9, name: "Ireland" },
  "+351": { min: 9, max: 9, name: "Portugal" },
  "+30": { min: 10, max: 10, name: "Greece" },
  "+60": { min: 9, max: 10, name: "Malaysia" },
  "+65": { min: 8, max: 8, name: "Singapore" },
  "+62": { min: 10, max: 12, name: "Indonesia" },
  "+66": { min: 9, max: 9, name: "Thailand" },
  "+84": { min: 9, max: 10, name: "Vietnam" },
  "+63": { min: 10, max: 10, name: "Philippines" },
}

// Default fallback for unknown country codes
const DEFAULT_RULE = { min: 6, max: 15, name: "Unknown" }

/**
 * Extract only digits from a phone number string
 */
export function extractDigits(phone: string): string {
  return phone.replace(/\D/g, "")
}

/**
 * Check if phone number contains spam patterns
 */
export function isSpamPattern(digits: string): boolean {
  if (digits.length < 6) return false

  // All same digits (e.g., 1111111111, 0000000000)
  if (/^(.)\1+$/.test(digits)) return true

  // Sequential ascending (e.g., 1234567890)
  const ascending = "0123456789"
  if (ascending.includes(digits) || digits === "1234567890") return true

  // Sequential descending (e.g., 9876543210)
  const descending = "9876543210"
  if (descending.includes(digits) || digits === "9876543210") return true

  // Repeating patterns (e.g., 123123123, 121212)
  for (let patternLen = 2; patternLen <= 4; patternLen++) {
    const pattern = digits.slice(0, patternLen)
    const repeated = pattern.repeat(Math.ceil(digits.length / patternLen)).slice(0, digits.length)
    if (repeated === digits && digits.length >= patternLen * 2) return true
  }

  return false
}

/**
 * Validate a phone number for a given country code
 */
export function validatePhone(countryCode: string, phone: string): PhoneValidationResult {
  const digits = extractDigits(phone)
  const rule = phoneDigitRules[countryCode] || DEFAULT_RULE

  // Check if empty
  if (digits.length === 0) {
    return { valid: false, error: "Phone number is required" }
  }

  // Check minimum digits
  if (digits.length < rule.min) {
    return {
      valid: false,
      error: `${rule.name} numbers must be at least ${rule.min} digits (you have ${digits.length})`,
    }
  }

  // Check maximum digits
  if (digits.length > rule.max) {
    return {
      valid: false,
      error: `${rule.name} numbers must be at most ${rule.max} digits (you have ${digits.length})`,
    }
  }

  // Check for spam patterns
  if (isSpamPattern(digits)) {
    return { valid: false, error: "Please enter a valid phone number" }
  }

  return { valid: true }
}

/**
 * Get the digit rule for a country code
 */
export function getDigitRule(countryCode: string): { min: number; max: number; name: string } {
  return phoneDigitRules[countryCode] || DEFAULT_RULE
}
