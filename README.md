# RRK Automations Portfolio

A portfolio website showcasing software products and solutions developed by [RRK Automations](https://rrkautomations.com/). The site presents client work across AI/ML, enterprise software, web applications, mobile applications, e-commerce, business automation, and digital platforms.

**Live website:** [https://rrk-portfolio.vercel.app/](https://rrk-portfolio.vercel.app/)

---

## Features

- Responsive portfolio with glassmorphism design
- Project showcase with image previews and technology tags
- Detailed project pages with descriptions, tech stacks, and demo links
- Category filtering (Enterprise Software, AI/ML, E-Commerce, Web Application, Mobile Application, Portfolio/Branding)
- Featured project badges
- Demo credential display with copy-to-clipboard support
- Previous/next project navigation
- Mobile-responsive layout across all viewports
- About and Contact pages

---

## Projects

The portfolio currently showcases **13 projects**:

| # | Project | Category | Demo |
|---|---------|----------|------|
| 1 | Warehouse Management System (WMS) | Enterprise Software | [Live demo](https://rrk-wms-demo.vercel.app/) |
| 2 | StayKaro LMS | Enterprise Software | [Live demo](https://staykarolms-six.vercel.app/) |
| 3 | AI College Placement Prep | AI / ML | Demo available on request |
| 4 | SoulMate | E-Commerce | [Live demo](https://soulmate-liart.vercel.app/) |
| 5 | House of Midas | E-Commerce | [Live demo](https://house-of-midas.vercel.app/) |
| 6 | Diagnostic Centre Website & CMS | Web Application | [Live demo](https://rrk-diagnostic.vercel.app/) |
| 7 | AI Diagnostic Chatbot | AI / ML | [Live demo](https://diagnostic-chatbot-omega.vercel.app/) |
| 8 | SafeSnack | Web Application | [Live demo](https://safesnack-v1.vercel.app/) |
| 9 | Hydari Officers Club | Web Application | [Live demo](https://hydari-officers-club-demo.vercel.app/) |
| 10 | AquaBook — Water Tanker Booking | Mobile Application | [Live demo](https://water-tanker-demo.vercel.app/) |
| 11 | VTD Fitness | Mobile Application | Demo available on request |
| 12 | Fit Future with MMR | Portfolio / Branding | [Live demo](https://www.fitfuturewithmmr.com/) |
| 13 | Ramesh Polisetty | Portfolio / Branding | [Live demo](https://ramesh-polishetty-z3g.vercel.app/index.html) |

---

## Technology

### Portfolio Stack

The portfolio website itself is built with:

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| React Router DOM 7 | Client-side routing |
| Vite 8 | Build tool and dev server |
| Tailwind CSS | Styling (used by some showcased projects) |
| Vercel | Hosting and deployment |

### Project Technology Stacks

The showcased projects use a range of technologies depending on their requirements:

| Project | Technologies |
|---------|-------------|
| Warehouse Management System (WMS) | React, Node.js, PostgreSQL, REST API, Chart.js |
| StayKaro LMS | React, Vite, Tailwind CSS, Supabase, Node.js |
| AI College Placement Prep | React, Python, OpenAI API, FastAPI, MongoDB |
| SoulMate | Next.js, Tailwind CSS, Vercel |
| House of Midas | React, Framer Motion, Vercel |
| Diagnostic Centre Website & CMS | Next.js, Tailwind CSS, WhatsApp, Vercel |
| AI Diagnostic Chatbot | Next.js, Tailwind CSS, Vercel |
| SafeSnack | Next.js, Tailwind CSS, Vercel |
| Hydari Officers Club | React, Node.js, MongoDB, Express, Tailwind CSS |
| AquaBook | React, Vite, Leaflet Maps, Node.js, Firebase |
| VTD Fitness | React Native, Node.js, MongoDB, Socket.io, AWS S3 |
| Fit Future with MMR | React, Vite, Tailwind CSS |
| Ramesh Polisetty | HTML, CSS, JavaScript, Supabase |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/g-rtejaskumar/rrk-portfolio.git
cd rrk-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens the portfolio at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
  components/       # Reusable UI components (Navbar, Footer, Hero, ProjectCard, ProjectGrid)
  pages/            # Page components (HomePage, ProjectsPage, ProjectDetail, About, Contact)
  data/
    projectsData.js # All project definitions, categories, and helpers
  App.jsx           # Router and route definitions
  main.jsx          # Application entry point
  index.css         # Global styles

public/
  projects/         # Project preview images (PNG)
```

---

## Environment Variables

No environment variables are currently required.

---

## Deployment

The portfolio is deployed on [Vercel](https://rrk-portfolio.vercel.app/). The `vercel.json` configuration handles SPA routing by rewriting all paths to `index.html`.

---

## Security

- No secrets, API keys, or private credentials are stored in the repository.
- Demo credentials displayed in the portfolio (for the Warehouse Management System and StayKaro LMS) are intentional public demo credentials for prospective clients.
- Private admin credentials and internal workflow details are never exposed in the portfolio or source code.
- Environment variables should be used for any sensitive configuration in future development.

---

## License

No explicit open-source license is currently specified.

---

## Author

**RRK Automations** — [rrkautomations.com](https://rrkautomations.com/)

Repository: [github.com/g-rtejaskumar/rrk-portfolio](https://github.com/g-rtejaskumar/rrk-portfolio)
