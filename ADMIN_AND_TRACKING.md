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
- **Tracking & analytics:** `/admin/analytics` — dashboard with landing cards, per-landing view, and charts for page views, form submissions, form errors, and thank you views. Use the landing selector or click a card to view a single landing’s analytics.

Set a strong `ADMIN_PASSWORD` in `.env.local` for production.

## Form submissions

- Each landing form posts to `POST /api/submit` with body: `{ landing, name, email, phone }`.
- Submissions are stored in `data/store.json` (see `lib/store.ts`).
- For production on Vercel or similar, replace the file-based store in `lib/store.ts` with a database (e.g. Vercel Postgres, Supabase); the API and admin already use the same API.

## Tracking & analytics (GTM, Google Ads, Meta Pixel, Microsoft Clarity)

The app fires four events that are ready to be sent to Google Tag Manager, Google Ads, Meta Pixel, and Microsoft Clarity. Set the following in `.env.local` to enable each integration:

- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID (e.g. `GTM-XXXXXX`). The connector pushes events to `dataLayer` and loads the GTM script. Use GTM to forward events to Google Analytics and Google Ads.
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta (Facebook) Pixel ID. The connector loads the base pixel and sends custom events.
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity project ID. The connector loads Clarity and sets custom tags for each event so you can segment sessions in Clarity.

### Event names and payloads

All events are pushed to `window.dataLayer` for GTM and sent to the server for the admin analytics dashboard.

| Event | dataLayer event name | Payload |
| ----- | -------------------- | ------- |
| Page view | `finance_coach_page_view` | `{ pageId?: string }` |
| Form submission (success) | `finance_coach_form_submission` | `{ pageId?: string, landing?: string }` |
| Form submission error | `finance_coach_form_submission_error` | `{ pageId?: string, landing?: string, error?: string }` |
| Thank you page view | `finance_coach_thank_you_view` | `{ pageId?: string, landing?: string }` |

- **GTM:** Create a trigger with Event name equals the event name above (e.g. `finance_coach_page_view`). Use the built-in data layer variables for `pageId`, `landing`, `error`. Create tags that fire on these triggers to send to GA4 (e.g. GA4 Event) or Google Ads (e.g. Google Ads Conversion).
- **Meta Pixel:** The connector calls `fbq('trackCustom', 'FinanceCoachPageView', { page_id, ... })` (and similarly for `FinanceCoachFormSubmission`, `FinanceCoachFormSubmissionError`, `FinanceCoachThankYouView`). In Events Manager you can create custom conversions based on these event names.
- **Microsoft Clarity:** The connector calls `clarity("set", "finance_coach_page_view", pageId)` (and similarly for the other events). In Clarity, use these custom tag names to filter or segment sessions.

### Server-side event storage

Events are also sent to `POST /api/analytics/event` and stored in the `analytics_events` table so the admin dashboard at `/admin/analytics` can show graphs and per-landing metrics without depending on GA/Clarity.

## Google Analytics

- Use Google Tag Manager (see above) and set `NEXT_PUBLIC_GTM_ID`. In GTM, add a GA4 configuration tag and event tags that fire on the `finance_coach_*` dataLayer events. Alternatively, add a direct GA4 measurement script and use the same dataLayer events in GTM to send GA4 events.
