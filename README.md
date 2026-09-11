# Portfolio

A personal portfolio site for a DevOps / Infrastructure Engineer — plain HTML, CSS,
and JS, no framework or build step. Dark theme, a fixed side navigation rail,
two-column editorial section layout, and subtle scroll/hover animation.

**Live demo:** _add your deployed URL here once it's live_

---

## Features

- **No build step** — open `index.html` directly, or serve the folder with any static file server.
- **Dark, editorial layout** — serif display type (Fraunces) paired with IBM Plex Sans, a
  fixed left-hand navigation rail with scroll-tracked active state, and a two-column
  grid (section label + content) instead of a single centered column.
- **Motion, kept subtle** — sections fade/slide in on scroll via `IntersectionObserver`,
  with hover states on nav links, project rows, tags, and buttons. Everything respects
  `prefers-reduced-motion`.
- **Responsive** — the side rail collapses into a standard top nav with a mobile menu
  below ~1180px / ~720px breakpoints.
- **Container-ready** — a minimal `Dockerfile` and `nginx.conf` are included for
  serving the static build.

## Project structure

```
.
├── index.html        # all page content and sections
├── css/
│   └── style.css      # design tokens, layout, components, responsive rules
├── js/
│   └── script.js       # mobile nav toggle, scroll-reveal, rail active-state tracking
├── assets/             # put resume.pdf, favicon, images, etc. here
├── Dockerfile
├── nginx.conf
└── README.md
```

## Getting started

Clone the repo, then either open `index.html` directly in a browser, or serve it
locally:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Any static server works — `npx serve`, `php -S localhost:8080`, VS Code's Live
Server extension, etc.

## Customizing

This repo currently ships with sample content (name, role history, projects) so
you can see the layout filled in. To make it yours:

1. Open `index.html` and replace the sample name, location, and positioning line
   in the **hero** and side rail (`Alex Morgan`, `Bengaluru, India`, etc.).
2. Update the **About** paragraphs and the three focus-area rows.
3. Edit the **Stack** section's tag groups to match your own tools.
4. Replace the three **Experience** entries with your own roles, dates, and impact lines.
5. Swap the three **Projects** for your own, with real links where you have them.
6. Update the **Contact** email/GitHub/LinkedIn links, and the footer name.
7. Drop your résumé at `assets/resume.pdf` (the hero's "Download résumé" button
   links there), or remove that button if you don't want it.
8. Update the `<title>` and `meta description` in `index.html`'s `<head>`.

Colors, type, and spacing are controlled by CSS variables at the top of
`css/style.css` (`:root { ... }`) if you want to adjust the palette or fonts.

## Deployment

### Docker

A minimal `Dockerfile` (nginx:alpine) is included:

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
# open http://localhost:8080
```

Swap the base image, add a reverse proxy, or wire this into a CI/CD pipeline
depending on where you're deploying — behind an existing ingress, a small VPS,
or a Kubernetes cluster.

### Static hosting

Since there's no build step, this also deploys as-is to any static host —
GitHub Pages, Netlify, Vercel, Cloudflare Pages, or an S3 bucket behind
CloudFront. Point the host at the repo root; `index.html` is the entry point.

## License

Add a license here if you intend to make this repo public (e.g. MIT).

## Author

**Your Name** — [GitHub](https://github.com/yourhandle) · [LinkedIn](https://linkedin.com/in/yourhandle)
