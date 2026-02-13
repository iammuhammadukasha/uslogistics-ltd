# Push to New Repo: uslogistics-ltd

Repo **uslogistics-ltd** is created. Do the following to point this project to it and push.

---

## Run the script (easiest)

1. **Close Cursor** (or any app that might be using this Git repo), so the config file is not locked.
2. Open **PowerShell**, go to the project folder, and run:

```powershell
cd "c:\Users\DELL\OneDrive\Documents\GitHub\sellerstop"
.\push-to-new-repo.ps1
```

3. If prompted, sign in to GitHub (browser or credential manager).

---

## Or run the commands yourself

In PowerShell, from the project folder:

```powershell
cd "c:\Users\DELL\OneDrive\Documents\GitHub\sellerstop"

# Point origin to the new repo
git remote set-url origin https://github.com/iammuhammadukasha/uslogistics-ltd.git

# Push your current branch (feat)
git push -u origin feat
```

---

## After pushing

- Repo URL: **https://github.com/iammuhammadukasha/uslogistics-ltd**
- Deploy on Vercel: **https://vercel.com** → Add New → Project → Import **uslogistics-ltd** → Deploy (see `DEPLOY_VERCEL.md` for env vars).
