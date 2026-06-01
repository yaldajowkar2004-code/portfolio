# Yalda — Premium Portfolio

A dark, futuristic single-page portfolio for **Yalda** — Engineering Science
student, aviation background, and aspiring technology founder. Built with
React + Vite + Tailwind CSS + Framer Motion. Bilingual (English / Italian),
with glassmorphism + 3D depth, purple/white glow, cursor parallax, tilt cards,
particles, and a working light/dark toggle.

## Tech stack

- React 18 + Vite
- Tailwind CSS 3
- Framer Motion (animations, parallax, 3D tilt, reveals)
- lucide-react icons
- No backend (the contact form uses local React state + validation)

## Getting started

```bash
npm install
npm run dev      # open the printed URL, usually http://localhost:5173
```

```bash
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Highlights (latest revision)

- **Hero photo** (`public/photo.jpg`) feathered on every edge with a radial mask
  so it melts into the scene; gentle, elegant 3D tilt that follows the cursor
  **while hovering the photo**; purple + white aura, particles, and light sweep.
- **Hero name** is now clean white with a tight, subtle purple glow (a blurred
  twin + soft text-shadow) so it reads as the strongest element in the hero.
- **New hero line:** "I design and build modern websites, using innovative tools
  to create smarter solutions for businesses."
- **"My Work" section** (after Skills): three glass cards — University Projects
  (Live), Web Development Projects (In Progress), Applications (In Progress) —
  with status pills, descriptions, and tag chips, using the same TiltCard depth.
- **Full email** shown everywhere (hero card + contact), never truncated, and
  click-to-mail.
- **Language switch (EN ⇄ IT)** sits beside the theme toggle, same circular style.
  All UI text translates to Italian; names, the university name, email, and
  technical terms stay accurate. Choice persists via `localStorage`.
- **Education** uses your **uploaded University of Rome Tor Vergata logo**
  (`public/tor-vergata-logo.png`) on a colour-matched plate so it sits cleanly.
- **Aviation** uses your **uploaded jet engine image** (`public/jet-engine.webp`),
  feathered into the card with a purple glow.
- **More 3D / premium:** layered glassmorphism with inner highlight + gradient
  hairline borders, perspective tilt + parallax depth (`translateZ` layering),
  glossy buttons, and elegant hover states — kept clean, not crowded.
- **Performance & a11y:** all motion respects `prefers-reduced-motion`; the
  particle canvas pauses on hidden tabs; cursor effects disable on touch.

## Project structure

```
src/
├── App.jsx                  # layout, theme state + persistence, cursor glow, footer
├── main.jsx                 # wraps the app in LanguageProvider
├── i18n.jsx                 # EN + IT dictionaries, LanguageProvider, useLang()
├── index.css                # theme tokens, glass, gradient ring, button styles
├── hooks/
│   └── usePointer.js         # normalized cursor motion values for parallax
└── components/
    ├── Navbar.jsx            # scroll-spy, sliding underline, language + theme toggles
    ├── CursorGlow.jsx        # cursor-following light
    ├── Particles.jsx         # canvas particle field
    ├── Reveal.jsx            # scroll-reveal wrapper
    ├── TiltCard.jsx          # 3D tilt + glare wrapper
    ├── Home.jsx  About.jsx  Skills.jsx  Education.jsx  Learning.jsx  Contact.jsx
```

## Customizing

- **Images:** replace the files in `/public` (`photo.jpg`, `tor-vergata-logo.png`,
  `jet-engine.webp`) to update them — the code already points at those paths.
- **Language:** edit/extend strings in `src/i18n.jsx`. Add a third language by
  adding another key alongside `en` / `it` (keep the same shape).
- **Colors:** accent + surfaces are CSS variables in `index.css` (`--accent`,
  `--accent-2`, `--base`, `--card`…), mapped to Tailwind tokens in
  `tailwind.config.js` (the background token is named `canvas`).
- **Social links:** update the `SOCIALS` arrays in `Home.jsx` and `Contact.jsx`.
- **Motion intensity:** `TiltCard` accepts `max` (tilt degrees); hero tilt range
  and parallax live in `Home.jsx`; `Particles` accepts `count`.

## Notes

The contact form does not send anywhere — it validates and shows a confirmation.
Wire `handleSubmit` in `Contact.jsx` to Formspree, EmailJS, or your own endpoint
to send real email.
