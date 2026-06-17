MediatorLab

Korte instructie om lokaal te starten en te deployen.

Lokaal testen:

```bash
# in project map
npm install     # optioneel, alleen nodig als je packages toevoegt
npm run start   # start lokale static server via npx serve
```

Deploy naar Vercel (snelle optie):

```bash
npm install -g vercel
vercel login
vercel --prod
```

Of push naar GitHub en importeer de repo in Vercel dashboard.
