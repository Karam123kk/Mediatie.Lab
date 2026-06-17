Deployment naar Vercel

1) Vereisten
- Een Vercel account (https://vercel.com)
- Node.js en npm beschikbaar op je laptop

2) Snelle deploy via CLI
Open een terminal in de projectmap (`c:\Users\User\Desktop\mediatie Lab`) en voer uit:

```bash
npm install -g vercel
vercel login
vercel --prod
```

Volg de prompts (kies account, projectnaam of link aan bestaand project).

3) Alternatief: GitHub integratie
- Maak een Git-repo en push naar GitHub.
- Koppel de repo in Vercel dashboard → New Project → Import Git Repository.

4) Opmerkingen
- De site is een statische site; `index.html` is de entry.
- Als je aangepaste domeinnaam wilt, voeg die toe in het Vercel dashboard.
