# GitHub Pages Deployment Guide (using /docs folder)

## Setup Instructions

Your SignalSprint landing page is now configured for GitHub Pages deployment using the `/docs` folder method.

---

## Automatic Deployment (Recommended)

GitHub Actions will automatically build and commit the `/docs` folder on every push to `main` branch.

### Prerequisites:
1. Push your code to a GitHub repository
2. Go to **Settings → Pages**
3. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ docs`
4. Save and wait for the first deployment

### How it works:
- On every push to `main`, the workflow in `.github/workflows/deploy.yml` runs
- It builds your Vite app to the `/docs` folder
- It automatically commits the updated `/docs` folder back to main
- Your site will be available at: `https://username.github.io/landing-page/`

---

## Manual Build (for local testing)

```bash
npm run build
```

This builds your project to the `/docs` folder. Then commit and push:

```bash
git add docs/
git commit -m "build: update docs"
git push
```

---

## Configuration Notes

- **Build output**: Now goes to `/docs` instead of `dist`
- **Base path**: Set to `/landing-page/` in `vite.config.ts`
- If your repo name is different, update `vite.config.ts`:
  ```typescript
  base: "/your-repo-name/",
  ```
- For a **user/org site** (deploying to `username.github.io`), use:
  ```typescript
  base: "/",
  ```

---

## Testing Locally

Test the production build before deploying:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview the built app.

---

## .gitignore Note

Make sure your `.gitignore` does NOT exclude the `/docs` folder:

```gitignore
node_modules/
dist/           ← This is still excluded (optional)
# But /docs is NOT in here, so it gets committed
```

---

## Troubleshooting

### Site not updating:
- GitHub Pages can take 1-2 minutes to update
- Make sure `/docs` folder is committed to main branch
- Check GitHub Actions tab for build status

### Assets not loading:
- Verify the base path in `vite.config.ts` matches your repo name
- Check browser console for 404 errors on assets

### Build fails:
- Run `npm run build` locally to catch errors
- Check GitHub Actions logs

---

## Next Steps

1. Commit this code to your GitHub repository
2. Go to your repo **Settings → Pages**
3. Select "Deploy from a branch" → Branch: `main` → Folder: `/docs`
4. Save and wait for deployment (check Actions tab)
5. Your site will be live!

---

**Happy deploying! 🚀**

