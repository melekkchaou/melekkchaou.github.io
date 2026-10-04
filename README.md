# Melek Kchaou — Personal Portfolio

A responsive personal portfolio built with React + Vite. It is designed around an AI engineer / researcher profile rather than a generic developer template.

## 1. Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## 2. Replace the images

All image slots are in `public/images/`.

### Portrait
Replace:

`public/images/profile-placeholder.svg`

with your own image. The easiest option is to keep the same file name or update the path in `src/main.jsx`.

Recommended portrait ratio: roughly **4:5** or **3:4**.

### Project screenshots
Replace these files:

- `public/images/projects/questor.svg`
- `public/images/projects/multi-agent.svg`
- `public/images/projects/cardioscan.svg`
- `public/images/projects/hpc.svg`
- `public/images/projects/enterprise-rag.svg`

Use real UI screenshots, architecture diagrams or carefully cropped project visuals.

### Achievement / prize photos
Replace:

- `public/images/achievements/rank-1.svg`
- `public/images/achievements/ieee-paper.svg`
- `public/images/achievements/master-rank.svg`
- `public/images/achievements/bachelor-rank.svg`

Good choices: ceremony photos, certificates, ranking notices, conference photos, prize/award photos, or publication visuals.

## 3. Edit your content

Most content is stored as arrays near the top of `src/main.jsx`:

- `stats`
- `experience`
- `projects`
- `education`
- `achievements`
- `skills`
- `certifications`

Update those objects rather than rewriting layout code.

## 4. CV

Your current CV is already included as:

`public/Melek-Kchaou-CV.pdf`

Replace it whenever you update your CV, while keeping the same file name.

## 5. Build

```bash
npm run build
```

The production site will be generated in `dist/`.

## 6. Deploy on GitHub Pages

### Recommended repository name

`KcMelek.github.io`

With that repository name, your final URL becomes:

`https://kcmelek.github.io`

### Simple deployment with GitHub Actions

1. Create a repository named `KcMelek.github.io`.
2. Push this project to the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. The workflow included in `.github/workflows/deploy.yml` will build and deploy the site automatically on every push to `main`.

## 7. Custom domain later

You can later point a domain such as `melekkchaou.com`, `melekkchaou.dev`, or another domain you own to GitHub Pages.

## Content/privacy note

For company projects such as Questor or internal enterprise work, use only screenshots, architecture diagrams, metrics and descriptions that you are allowed to publish. Do not expose confidential source code, customer data, internal documents, credentials or proprietary prompts.
