# Deploy US Logistics Ltd. on Vercel

## 1. Push your code to GitHub

Make sure your project is pushed to GitHub (e.g. `your-username/sellerstop` or your repo name).

```bash
git add .
git commit -m "Ready for Vercel deploy"
git push origin main
```

(Use `master` instead of `main` if that’s your default branch.)

---

## 2. Deploy on Vercel

### Option A: Deploy via Vercel website (recommended)

1. Go to **[vercel.com](https://vercel.com)** and sign in (use **GitHub**).
2. Click **Add New…** → **Project**.
3. **Import** your GitHub repository (e.g. `sellerstop`).
4. Vercel will detect **Next.js** and use:
   - **Build Command:** `next build`
   - **Output Directory:** (auto)
   - **Install Command:** `npm install`
5. Before deploying, add **Environment Variables** (see below).
6. Click **Deploy**. Vercel will build and give you a URL like `https://sellerstop-xxx.vercel.app`.

### Option B: Deploy via Vercel CLI

1. Install the CLI and log in:

   ```bash
   npm i -g vercel
   vercel login
   ```

2. In your project folder:

   ```bash
   cd path/to/sellerstop
   vercel
   ```

3. Follow the prompts (link to existing project or create new one). Set env vars in the Vercel dashboard (see below).

---

## 3. Environment variables (important)

In the Vercel project: **Settings → Environment Variables**, add:

| Name | Value | Notes |
|------|--------|------|
| `RESEND_API_KEY` | `re_xxxx...` | From [resend.com](https://resend.com) → API Keys. Required if you use the contact form. |
| `CASH_OFFER_NOTIFY_EMAIL` | Your email | Where cash-offer (and optionally contact) emails are sent. |
| `CONTACT_NOTIFY_EMAIL` | Your email | Optional; contact form recipient (falls back to `CASH_OFFER_NOTIFY_EMAIL`). |
| `RESEND_FROM_EMAIL` | e.g. `US Logistics Ltd. <onboarding@resend.dev>` | Optional; default “from” for emails. |

For **Supabase** (if you use it elsewhere in the app):

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Add them for **Production** (and Preview if you want the same behavior in preview deployments).

---

## 4. Custom domain (optional)

1. In Vercel: **Project → Settings → Domains**.
2. Add your domain (e.g. `uslogisticsltd.com`).
3. Follow Vercel’s DNS instructions (add the records they show at your DNS provider).

---

## 5. After deploy

- Every push to the connected branch (e.g. `main`) will trigger a new deployment.
- Build and runtime logs: **Project → Deployments → [deployment] → Building / Logs**.
- If the contact form doesn’t send mail, check that `RESEND_API_KEY` and the notify emails are set in Vercel and that Resend allows your “from” domain (or use `onboarding@resend.dev` for testing).
