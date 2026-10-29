# Imperial Studios

A multi-page React website for a creative digital studio, rebuilt from the "Imperial" Bootstrap template.
Built with React, Vite, React Router, Tailwind CSS and daisyUI.

**Pages:** Home, About, Services, five service detail pages, Portfolio (with category filter), twelve project detail pages, Contact (validated form + FAQ) and a 404 page.

## Requirements

- Node.js 18 or newer (Node 20 recommended)

## Install and run

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the build locally
```

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify choose **Add new site > Import an existing project** and select the repository.
3. Build command `npm run build`, publish directory `dist` (both are already set in `netlify.toml`).

Direct URLs and browser refreshes work because `netlify.toml` and `public/_redirects` send every route to `index.html`.

## Editing content

All business content lives in `src/data/`:

| File | Contents |
| --- | --- |
| `site.js` | Business name, address, phone, email, opening hours, footer credit, navigation |
| `services.js` | The five services and their detail-page content |
| `projects.js` | Portfolio projects and categories |
| `faqs.js` | General FAQs |
| `process.js` | The four-step project process |

Images are in `public/images/`. Theme colors are in `tailwind.config.js` (daisyUI theme `imperial`).

## Important: placeholder content

The original template contained no real business information. It used Latin placeholder text, a sample address
(A108 Adam Street, New York), `info@example.com` and a sample phone number. Those contact details were kept as-is
in `src/data/site.js` and **must be replaced** for a real client. The service names come from the template's
service list. Descriptions, process, FAQs and portfolio titles are sample copy written for demonstration, and the
portfolio uses the template's stock photos. The template's fake testimonials, team members and blog were not carried over.

## Contact form

The form has client-side validation, clear errors and success/failure states. No backend is included:

- **Default:** after validation it opens a prepared email draft (`mailto:`) and says plainly that nothing has been sent.
- **Real sending:** copy `.env.example` to `.env`, set `VITE_FORM_ENDPOINT` to a form service URL (for example Formspree), and rebuild.
  The form then posts JSON to that endpoint and shows real success or failure messages.

## Licensing note

The photos come from the free BootstrapMade "Imperial" template. Its license asks for attribution to BootstrapMade
unless you buy the Pro version. Check the license at https://bootstrapmade.com/license/ before using the photos
on a public site or client project, or replace them with your own images.
