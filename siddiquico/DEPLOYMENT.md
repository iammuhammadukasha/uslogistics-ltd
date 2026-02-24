# Deploy Siddiqui & Co Online

Your app is ready to deploy. Here are the recommended options.

---

## Option 1: Vercel (recommended for Next.js)

1. **Push your code to GitHub** (if not already)
   - If `siddiquico` is inside the `sellerstop` repo, push the whole repo.
   - If you have a separate repo only for siddiquico, push that.

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub.

3. **Import your repository**
   - Click **Add New… → Project**.
   - Select the repo that contains `siddiquico` (e.g. `sellerstop`).

4. **Configure the project**
   - **Root Directory:** Click **Edit** and set to **`siddiquico`** (so Vercel builds from this folder).
   - **Framework Preset:** Next.js (auto-detected).
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** leave default.
   - **Install Command:** `npm install` (default).

5. **Deploy**
   - Click **Deploy**. Vercel will build and deploy.
   - You’ll get a URL like `your-project.vercel.app`. You can add a custom domain in **Project → Settings → Domains**.

---

## Option 2: Netlify

1. Push your code to GitHub (same as above).

2. Go to [netlify.com](https://netlify.com) and sign in with GitHub.

3. **Add new site → Import an existing project** and choose your repo.

4. **Build settings**
   - **Base directory:** `siddiquico`
   - **Build command:** `npm run build`
   - **Publish directory:** `siddiquico/.next` (Netlify may need a Next.js runtime; use **“Next.js”** in the build settings if offered).

5. Deploy. Netlify will give you a URL and you can add a custom domain.

---

## If siddiquico has its own Git repo

If you created a **separate repository** only for siddiquico (no parent `sellerstop` folder):

- Push that repo to GitHub.
- On Vercel (or Netlify), import **that** repo.
- Leave **Root Directory** empty (or `.`) so the project root is the app.

---

## After deployment

- **Assets:** Images in `siddiquico/public/` (e.g. `logo.png`, `contact-image.png`, `hero-ship.png`) are deployed with the app.
- **Custom domain:** In Vercel/Netlify, add your domain and follow their DNS instructions.
- **Env variables:** If you add API keys later, set them in **Project → Settings → Environment Variables** (Vercel) or the equivalent in Netlify.

Need a step done in this repo (e.g. `vercel.json` or a small script)? Say what you use (Vercel / Netlify / other) and we can add it.
