# Caply — Site web

Landing page de Caply. **Next.js 14 + Tailwind CSS + TypeScript.**
Traduction automatique selon la langue du navigateur (EN / FR / ES / DE / IT / PT) + sélecteur manuel.

## Lancer en local

```bash
cd site-web
npm install
npm run dev
```

Ouvre http://localhost:3000

## Structure

```
app/
  layout.tsx        → fonts (Bricolage Grotesque), métadonnées, LanguageProvider
  page.tsx          → la landing (hero, démo, 3 cartes, punchline, signature)
  globals.css       → Tailwind + animation reveal
components/
  Logo.tsx          → logo "□ t Caply"
  LanguageProvider  → détection auto langue navigateur + persistance
  LanguageSwitcher  → menu drapeaux pour changer de langue
  Reveal.tsx        → apparition douce au scroll
  WaitlistModal.tsx → formulaire d'inscription (front prêt, API à brancher)
lib/
  i18n.ts           → toutes les traductions (1 bloc par langue)
public/
  demo.mp4          → vidéo démo compressée (5,9 Mo)
  platform-logos.svg, popup-cards.svg, product-mockup.png, logos…
```

## Ajouter une langue

Dans `lib/i18n.ts` : ajoute la langue dans `LOCALES`, puis un bloc complet dans `STRINGS`.

## Back-end (à venir)

La waitlist appelle `POST /api/waitlist` (à créer dans `app/api/waitlist/route.ts`).
En attendant, le formulaire confirme côté client.

## Déploiement Vercel

1. Push le dossier `site-web/` sur GitHub
2. Sur vercel.com → New Project → importe le repo → Root Directory = `site-web`
3. Deploy. C'est tout (Next.js est détecté automatiquement).
