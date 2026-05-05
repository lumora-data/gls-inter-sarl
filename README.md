# GLS-INTER SARL - Next.js

Site vitrine migré vers **Next.js App Router**.

## Démarrage

1. Installer les dépendances:
   `npm install`
2. Lancer le serveur de développement:
   `npm run dev`

## Scripts

- `npm run dev` : lance Next.js en local sur le port 3000
- `npm run build` : build de production
- `npm run start` : démarre l'application en mode production
- `npm run lint` : lint Next.js

## Structure

- `src/app` : routes App Router (`/`, `/transport`, `/transit`, `/about`, `/contact`)
- `src/components` : composants de layout et UI
- `src/pages` : sections/pages client réutilisées par les routes App Router
- `public/images` : logos, favicon et médias locaux

## Déploiement Vercel

- Framework preset: **Next.js**
- Root directory: **repository root**
- Build command: `npm run build`
- Install command: `npm install`

Si Vercel conserve un ancien cache, relancer un déploiement avec cache vidé.
