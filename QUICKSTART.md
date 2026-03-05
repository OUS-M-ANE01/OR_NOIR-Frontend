# 🚀 Guide de Démarrage Rapide - Or Noir African Jewelry

## Installation en 3 étapes

### 1️⃣ Installer les dépendances

```bash
cd frontend
npm install
```

Si vous rencontrez des erreurs, utilisez :
```bash
npm install --legacy-peer-deps
```

### 2️⃣ Lancer le serveur de développement

```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur

Ouvrez [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile pour la production |
| `npm run preview` | Prévisualise la version de production |

---

## 📂 Structure des fichiers

```
frontend/
├── src/
│   ├── components/          # Tous les composants React
│   │   ├── Navbar.tsx       # Barre de navigation
│   │   ├── Hero.tsx         # Section hero
│   │   ├── ProductCard.tsx  # Carte produit
│   │   ├── ProductModal.tsx # Modal de détails
│   │   └── ...
│   ├── data/
│   │   └── products.ts      # Données des produits
│   ├── types/
│   │   └── Product.ts       # Types TypeScript
│   ├── App.tsx              # Composant principal
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux + Tailwind
├── index.html               # Template HTML
├── tailwind.config.js       # Config Tailwind
├── tsconfig.json            # Config TypeScript
└── vite.config.ts           # Config Vite
```

---

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` :

```js
colors: {
  gold: {
    DEFAULT: '#C9A84C',  // Votre couleur or
    light: '#E8C97A',
    dark: '#A07830',
  },
  // ...
}
```

### Ajouter des produits

Éditez `src/data/products.ts` :

```typescript
export const products: Product[] = [
  {
    id: 1,
    name: 'Votre Produit',
    type: 'Bague',
    price: 15000,
    img: 'url-de-votre-image',
    badge: 'Nouveau',
    desc: 'Description...'
  },
  // ...
];
```

---

## 🐛 Résolution de problèmes

### Erreur: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 déjà utilisé
Modifiez `vite.config.ts` :
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Changez le port
  }
})
```

### Erreurs TypeScript
```bash
npm run build
```
Cela affichera toutes les erreurs TypeScript.

---

## 📱 Responsive Design

Le site est entièrement responsive :
- 📱 Mobile : < 768px
- 💻 Tablette : 768px - 1024px
- 🖥️ Desktop : > 1024px

---

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers seront dans le dossier `dist/`

### Déployer sur Vercel

```bash
npm install -g vercel
vercel
```

### Déployer sur Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

---

## 💡 Conseils

1. **Images** : Remplacez les images Unsplash par vos propres images
2. **SEO** : Ajoutez des meta tags dans `index.html`
3. **Analytics** : Intégrez Google Analytics ou Plausible
4. **Performance** : Optimisez les images avec WebP
5. **Accessibilité** : Testez avec un lecteur d'écran

---

## 📞 Support

Pour toute question, consultez :
- [Documentation Vite](https://vitejs.dev/)
- [Documentation React](https://react.dev/)
- [Documentation Tailwind](https://tailwindcss.com/)

Bon développement ! 🎉
