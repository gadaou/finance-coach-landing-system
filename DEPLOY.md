# Deploying the LMS to Render

## What’s already set up

- **render.yaml** – Web service + PostgreSQL. Start command runs `npm run db:init` then `npm run start`.
- **Database tables** – Created automatically by `db:init` (and again by the app’s Postgres client if needed).
- **Initial landings data** – Seeded automatically when the app first loads landings (Home, FMVA 1/3/4/5/6, ACCA). No manual SQL needed.

---

## 1. What to do in Render

### A. PostgreSQL database

- If you deployed from the **Blueprint** (render.yaml): the file defines `finance-coach-db`. Ensure that database exists and is linked to your web service (see step B).
- If you only created a **Web Service** by hand:
  1. In Render Dashboard: **New → PostgreSQL**.
  2. Name it (e.g. `finance-coach-db`), choose a plan (e.g. Free).
  3. Create the database and wait until it’s ready.
  4. Open it → **Info** → copy the **Internal Database URL** (or External if your app is outside Render).

### B. Web Service environment variables

In your **Web Service** → **Environment**:

| Variable         | Where it comes from | Required |
|------------------|---------------------|----------|
| `DATABASE_URL`   | Postgres **Internal Connection String** (or link DB in blueprint so Render sets it). | Yes |
| `ADMIN_PASSWORD` | Set manually to a strong password (admin panel login). | Yes in production |
| `NODE_ENV`       | Usually set to `production` by Render or by you. | Optional |

- If you use the Blueprint and link the DB by name (`finance-coach-db`), `DATABASE_URL` can be set from the database (as in render.yaml). Otherwise paste the connection string.
- Set `ADMIN_PASSWORD` to something secure; do not rely on the default.

### C. Build and start (if not using Blueprint)

If you didn’t use the Blueprint, set:

- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm run db:init && npm run start`

Root directory: repository root (where `package.json` and `render.yaml` are).

---

## 2. What happens in the database (no manual steps)

You do **not** need to run SQL yourself.

1. **Tables** – On each deploy, `npm run db:init` runs before `npm run start` and creates (if not present):
   - **landings** – id, slug, name, path, created_at  
   - **submissions** – id, landing_id, name, email, phone, meta, created_at  
   - **analytics_events** – id, type, landing_id, page_id, error_message, created_at  

2. **Initial landings** – The app seeds these when the first request needs landings (e.g. homepage or admin):
   - Home, FMVA 1, FMVA 3, FMVA 4, FMVA 5, FMVA 6, ACCA  

3. **Submissions and analytics** – Stored automatically when users submit forms or when tracking runs.

---

## 3. After deploy

- Open your Render Web Service URL (e.g. `https://finance-coach.onrender.com`).
- Visit `/admin/login` and sign in with `ADMIN_PASSWORD`.
- Visit `/admin` to manage landings and view submissions.

If the app fails to start, check Render logs: missing `DATABASE_URL` or wrong connection string are the usual causes.
