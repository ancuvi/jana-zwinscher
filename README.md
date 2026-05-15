# Jana Zwinzscher — One-Pager

Statische One-Pager-Website für **Jana Zwinzscher** (Entrümpelung, Haushaltsauflösung, Transporte & Endreinigung im Raum Mittweida + 50 km). Gebaut mit [Astro](https://astro.build) — der Build erzeugt reines HTML/CSS/JS ohne Framework-Runtime, damit die Seite überall blitzschnell lädt.

---

## Schnellstart

```bash
npm install     # Abhängigkeiten installieren (einmalig)
npm run dev     # Dev-Server unter http://localhost:4321
npm run build   # Production-Build nach ./dist
npm run preview # gebauten Build lokal prüfen
```

Empfohlen: **Node.js 20 oder neuer**.

---

## Was anpassen, bevor es online geht

Alle Kontaktdaten und das Einzugsgebiet stehen zentral in [`src/site.config.ts`](src/site.config.ts) — die Werte werden automatisch in Nav, Hero, Kontaktsektion und Footer eingesetzt.

```ts
phoneDisplay: '0171 6153591',       // Anzeige
phoneHref:    '+491716153591',      // E.164 mit + für tel:-Link
whatsappNumber: '491716153591',     // E.164 ohne + für wa.me/-Link
email:        'jana_zwinzscher@web.de',
```

Außerdem:

- **Foto von Jana** in [`src/components/About.astro`](src/components/About.astro) eintragen (aktuell Platzhalter mit Raster-Muster).
- **Impressum & Datenschutz** — Footer-Links zeigen aktuell auf `/impressum` und `/datenschutz`. Entweder als zusätzliche Astro-Seiten anlegen (`src/pages/impressum.astro`, …) oder die `href`s in [`src/components/Footer.astro`](src/components/Footer.astro) entfernen.

---

## Projektstruktur

```
.
├── astro.config.mjs
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Nav, Hero, Marquee, Services, About, Region, Process, Contact, Footer
│   ├── layouts/Layout.astro
│   ├── pages/index.astro  # Einstiegspunkt
│   ├── scripts/site.ts    # Scroll-Progress, Hero-Reveal, Intersection-Observer, Cursor-Glow
│   ├── styles/global.css  # Design-Tokens + komplette Optik
│   └── site.config.ts     # zentrale Kontakt-/Region-Daten
└── tsconfig.json
```

---

## Design

- **Farbpalette:** Brand (Default) — abgeleitet aus dem Logo: tiefes Teal (`#2f8a83`), helles Teal (`#4fc4b9`), warmes Schwarz (`#231f20`) auf Creme-Hintergrund. Eine Alternative `data-palette="dark"` ist als Mirror der Visitenkarten-Front als CSS-Tokens vorbereitet.
- **Typografie:** Instrument Serif (Display, kursiv) · Manrope (Body) · JetBrains Mono (Mikro-Labels).
- **Animationen:** Wort-für-Wort Hero-Reveal, Marquee, animierte Service-Region-Karte mit pulsierendem Mittweida-Punkt, Scroll-Reveals, Scroll-Progress-Bar, Cursor-Glow, schwebender "Profi vom Fach"-Stempel, 24h-Verfügbarkeits-Uhr.
- **Reduced Motion:** Animationen werden bei `prefers-reduced-motion: reduce` deaktiviert.

---

## Deployment

Die `dist/`-Ausgabe ist 100 % statisch — lässt sich direkt hosten bei:

- **Cloudflare Pages** / **Netlify** / **Vercel** — Repo verknüpfen, Build-Befehl: `npm run build`, Output-Verzeichnis: `dist`.
- **GitHub Pages** — Workflow-Datei nach Bedarf hinzufügen.
- **eigener Webspace** — `dist/` per FTP/SSH hochladen.

Erste Ladegröße: ~48 KB (HTML+CSS+JS) plus die Google-Fonts.

---

## Lizenz

Inhalte © Jana Zwinzscher. Code unter Ihrer eigenen Lizenz veröffentlichen, falls Sie das Repo öffentlich machen.
