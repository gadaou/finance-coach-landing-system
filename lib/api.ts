/**
 * When NEXT_PUBLIC_BACKEND_URL is set (e.g. on Vercel), client-side API calls
 * use this origin so they hit the Render backend. When unset (local or Render),
 * returns "" so fetch stays same-origin.
 */
export function getApiOrigin(): string {
  return process.env.NEXT_PUBLIC_BACKEND_URL ?? ""
}
