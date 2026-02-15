# Admin panel and form tracking

## Landings and routes

| Route    | Slug   | Code location        |
| -------- | ------ | --------------------- |
| `/`      | (redirects to /fmva5) | - |
| `/fmva1` | fmva1  | `codes/fmva1/`        |
| `/fmva3` | fmva3  | `codes/fmva3/`        |
| `/fmva4` | fmva4  | `codes/fmva4/`        |
| `/fmva5` | fmva5  | `landing/`            |

## Admin panel

- **URL:** `/admin` (redirects to login or dashboard)
- **Login:** `/admin/login` — use the password set in `ADMIN_PASSWORD` (default: `admin`)
- **Dashboard:** `/admin/dashboard` — total submissions, landings list, recent submissions
- **Landings:** `/admin/landings` — list of all landings and paths
- **Submissions:** `/admin/submissions` — all form submissions, filterable by landing

Set a strong `ADMIN_PASSWORD` in `.env.local` for production.

## Form submissions

- Each landing form posts to `POST /api/submit` with body: `{ landing, name, email, phone }`.
- Submissions are stored in `data/store.json` (see `lib/store.ts`).
- For production on Vercel or similar, replace the file-based store in `lib/store.ts` with a database (e.g. Vercel Postgres, Supabase); the API and admin already use the same API.

## Google Analytics

- Not implemented yet. When ready: add GA id in env or in admin settings, and inject the script in the root layout or per-landing layout.
