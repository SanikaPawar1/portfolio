# Sanika Pawar — Portfolio

Live site: https://sanikapawar1.github.io/portfolio/

A calm, responsive personal portfolio for Sanika Pawar, an aspiring full-stack developer, UI/UX designer, and AI-curious problem solver. It presents her introduction, education, skills, selected projects, internship experience, achievements, resume, and contact links.

## Features

- Responsive layout for phones, tablets, and desktop screens
- Mobile navigation menu and active section highlighting
- Light and dark themes, with the selected theme remembered in the browser
- Filter buttons for web, AI, and IoT projects
- Scroll reveal effects and a floating back-to-top button
- Keyboard-visible focus styles and reduced-motion support
- Resume download and direct email/social links

## Technology

This project uses plain HTML, CSS, and JavaScript. It has no frameworks, libraries, build tools, or npm dependencies. The only external resource is the Google Fonts stylesheet for Inter; the font falls back to `system-ui` when it is unavailable.

## Folder structure

```text
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── profile.jpeg
│   └── Resume_Sanika_Pawar.pdf
├── css/
│   └── style.css
└── js/
    └── script.js
```

The supplied portrait is named `profile.jpeg`, so the page uses that existing file. Keep the filename as shown, or update the image path in `index.html` if you choose a different portrait.

## Run locally

1. Keep the `assets`, `css`, and `js` folders next to `index.html`.
2. Open `index.html` directly in a modern browser, or use the VS Code **Live Server** extension.
3. If you use Live Server, right-click `index.html` and choose **Open with Live Server**.

## Edit the portfolio

- **Text and section content:** edit the matching section in `index.html`.
- **Profile picture and resume:** change the image or PDF path in `index.html`. The files currently live in `assets/`.
- **Project repository links:** edit each project’s GitHub link in `index.html`; each currently points to Sanika’s GitHub profile as a temporary destination.
- **Contact and social links:** edit the email, GitHub, and LinkedIn links in the contact section of `index.html`.
- **Colours, spacing, and rounded corners:** edit the CSS custom properties at the top of `css/style.css`. Dark-theme values are in the `html[data-theme="dark"]` block.
- **Interactions:** edit the clearly separated feature blocks in `js/script.js`.

## Notes

The project is intentionally plain HTML, CSS, and JavaScript. The project cards currently use Sanika’s GitHub profile as a temporary link until individual repository URLs are available.
