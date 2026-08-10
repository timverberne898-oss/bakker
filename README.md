# Het Bakkershuys — website

Next.js 14 + Tailwind CSS site, klaar om te deployen op Vercel. Zelfde
opzet als je vorige project (Tim).

## Bestandsstructuur

```
bakkershuys/
├── app/
│   ├── globals.css      → styling (kleuren, "kassabon"-kaartjes)
│   ├── layout.tsx       → lettertypes + metadata
│   └── page.tsx         → alle content: hero, over, reviews, contact
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── .gitignore
```

## Deployen op Vercel

1. Upload alle bestanden uit deze map naar een **nieuwe** GitHub-repository
   (zet ze in de hoofdmap van de repo, niet in een submap).
2. Ga naar vercel.com → **Add New** → **Project** → importeer de repository.
3. Controleer bij **Build & Development Settings** dat "Framework Preset"
   op **Next.js** staat (zou automatisch moeten gebeuren).
4. Klik **Deploy**.

## Wat je zelf nog wilt aanvullen

- **Reviews**: de array `reviews` bovenaan `app/page.tsx`. Ik heb een
  selectie van de positieve, leesbare reviews gebruikt uit wat je
  aanleverde — reviews zonder tekst en één met een klacht heb ik
  weggelaten. Voeg zelf nieuwe toe door een object aan de lijst toe te
  voegen, in hetzelfde formaat (`name`, `meta`, `quote`, `tilt`).
- **Openingstijden**: nog niet ingevuld (stond niet in je gegevens) —
  te vinden in de Contact-sectie in `app/page.tsx`, zoek naar
  "Openingstijden".
- **Telefoonnummer / e-mail**: nog niet toegevoegd, ook niet aangeleverd.
- **Kleuren**: in `tailwind.config.ts` onder `theme.extend.colors`.

## Lokaal testen (optioneel)

```bash
npm install
npm run dev
```
Open daarna `http://localhost:3000`.
