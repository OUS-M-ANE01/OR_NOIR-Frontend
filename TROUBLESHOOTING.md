# 🔧 Résolution de Problèmes - Or Noir African Jewelry

## ❌ Erreur : "Cannot find module 'lucide-react'"

### Symptôme
L'éditeur (VS Code) affiche une erreur TypeScript :
```
Cannot find module 'lucide-react' or its corresponding type declarations.
```

Mais le serveur Vite fonctionne correctement sur http://localhost:5173

### Cause
C'est un problème de cache TypeScript dans l'éditeur. Le module est bien installé mais l'éditeur ne le détecte pas.

### Solutions

#### Solution 1 : Redémarrer le serveur TypeScript dans VS Code

1. Ouvrez la palette de commandes : `Ctrl+Shift+P` (ou `Cmd+Shift+P` sur Mac)
2. Tapez : `TypeScript: Restart TS Server`
3. Appuyez sur Entrée

#### Solution 2 : Recharger la fenêtre VS Code

1. Ouvrez la palette de commandes : `Ctrl+Shift+P`
2. Tapez : `Developer: Reload Window`
3. Appuyez sur Entrée

#### Solution 3 : Supprimer le cache et réinstaller

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

Puis redémarrez VS Code.

#### Solution 4 : Vérifier que le module est installé

```bash
cd frontend
npm list lucide-react
```

Vous devriez voir :
```
or-noir-frontend@0.0.0
└── lucide-react@0.460.0
```

Si le module n'est pas listé, installez-le :
```bash
npm install lucide-react
```

---

## ✅ Le serveur fonctionne mais l'éditeur affiche des erreurs

C'est normal ! Si le serveur Vite démarre sans erreur et que le site s'affiche correctement dans le navigateur, alors tout fonctionne.

Les erreurs dans l'éditeur sont souvent dues au cache TypeScript et disparaîtront après un redémarrage du serveur TS.

**Le plus important** : Si `npm run dev` fonctionne et que le site s'affiche, votre code est correct ! ✅

---

## 🚀 Vérification rapide

### 1. Le serveur démarre-t-il ?

```bash
npm run dev
```

Si vous voyez :
```
VITE v5.4.21  ready in 787 ms
➜  Local:   http://localhost:5173/
```

✅ Tout fonctionne !

### 2. Le site s'affiche-t-il dans le navigateur ?

Ouvrez http://localhost:5173

Si vous voyez le site Or Noir avec :
- La barre de navigation
- Le hero avec 3 panneaux
- Les produits
- Etc.

✅ Tout fonctionne parfaitement !

---

## 🐛 Autres problèmes courants

### Port 5173 déjà utilisé

**Erreur** :
```
Port 5173 is in use, trying another one...
```

**Solution** : Un autre processus utilise le port. Tuez-le ou changez le port dans `vite.config.ts` :

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Changez le port
  }
})
```

### Erreurs de build

**Erreur** :
```
npm run build
```
Affiche des erreurs TypeScript.

**Solution** : Corrigez les erreurs TypeScript une par une. Utilisez :
```bash
npm run build 2>&1 | less
```
Pour voir toutes les erreurs.

### Module non trouvé après installation

**Solution** :
```bash
# Nettoyer complètement
rm -rf node_modules package-lock.json

# Réinstaller
npm install

# Redémarrer VS Code
```

---

## 💡 Astuces

### Ignorer les erreurs TypeScript temporaires

Si vous voulez juste tester le site rapidement, vous pouvez ignorer les erreurs de l'éditeur tant que `npm run dev` fonctionne.

### Vérifier que tout fonctionne vraiment

```bash
# Build de production
npm run build

# Si ça compile sans erreur, tout est OK !
```

### Logs détaillés

```bash
# Voir les logs détaillés de Vite
npm run dev -- --debug

# Voir les logs de TypeScript
npx tsc --noEmit
```

---

## 📞 Besoin d'aide ?

1. Vérifiez que Node.js est à jour : `node --version` (minimum v18)
2. Vérifiez que npm est à jour : `npm --version` (minimum v9)
3. Essayez de supprimer `node_modules` et réinstaller
4. Redémarrez votre éditeur
5. Redémarrez votre ordinateur (parfois ça aide !)

---

## ✅ Checklist de vérification

- [ ] `npm install` s'exécute sans erreur
- [ ] `npm run dev` démarre le serveur
- [ ] http://localhost:5173 affiche le site
- [ ] Le site est responsive (testez sur mobile)
- [ ] Les produits s'affichent
- [ ] Le modal s'ouvre au clic sur un produit
- [ ] Le panier compte les articles
- [ ] Les animations fonctionnent

Si tous ces points sont ✅, votre projet fonctionne parfaitement !

Les erreurs dans l'éditeur sont juste cosmétiques et disparaîtront avec un redémarrage du serveur TypeScript.
