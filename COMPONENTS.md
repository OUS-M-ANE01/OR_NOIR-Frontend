# 📦 Documentation des Composants

## 🎯 Composants Principaux

### `<App />`
Composant racine qui gère l'état global de l'application.

**État:**
- `cartCount` - Nombre d'articles dans le panier
- `selectedProduct` - Produit sélectionné pour le modal
- `isModalOpen` - État d'ouverture du modal
- `toastMessage` - Message du toast
- `isToastVisible` - Visibilité du toast

---

### `<Navbar />`
Barre de navigation sticky avec logo, liens et icônes.

**Props:**
```typescript
{
  cartCount: number;
  onCartClick: () => void;
}
```

**Fonctionnalités:**
- Navigation responsive
- Badge de panier dynamique
- Icônes de recherche et profil

---

### `<Hero />`
Section hero avec 3 panneaux et contenu central.

**Fonctionnalités:**
- Grid responsive (3 colonnes desktop, 1 mobile)
- Animations fadeUp au chargement
- Images avec effet hover

---

### `<ProductCard />`
Carte produit avec image, infos et actions.

**Props:**
```typescript
{
  product: Product;
  onAddToCart: (name: string) => void;
  onOpenModal: (id: number) => void;
}
```

**Fonctionnalités:**
- Badge (Nouveau, Best-Seller, Rupture)
- Actions au hover (Ajouter au panier, Wishlist)
- État soldOut géré

---

### `<ProductModal />`
Modal de détails produit avec image et informations.

**Props:**
```typescript
{
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (name: string) => void;
}
```

**Fonctionnalités:**
- Fermeture par clic extérieur
- Fermeture par touche Escape
- Animations d'ouverture/fermeture
- Gestion du scroll body

---

### `<ProductsSection />`
Section affichant une grille de produits.

**Props:**
```typescript
{
  products: Product[];
  eyebrow: string;
  title: string;
  onAddToCart: (name: string) => void;
  onOpenModal: (id: number) => void;
  showButton?: boolean;
  bgDark?: boolean;
}
```

---

### `<Categories />`
Grille de catégories avec images et compteurs.

**Fonctionnalités:**
- 4 catégories (Boucles, Bagues, Bracelets, Sets)
- Effet hover avec flèche
- Responsive (2 cols mobile, 4 desktop)

---

### `<FeaturedBanner />`
Bannière "À Propos" avec image et statistiques.

**Fonctionnalités:**
- Layout 2 colonnes (image + contenu)
- Statistiques animées
- Citation décorative en arrière-plan

---

### `<Countdown />`
Compte à rebours pour vente flash.

**Fonctionnalités:**
- Timer 24h automatique
- Mise à jour chaque seconde
- Format HH:MM:SS

---

### `<Testimonials />`
Grille d'avis clients avec étoiles.

**Fonctionnalités:**
- 3 témoignages
- Avatar avec initiale
- Citation décorative

---

### `<Process />`
Section expliquant le processus de fabrication.

**Fonctionnalités:**
- 4 étapes numérotées
- Icônes personnalisées
- Effet hover

---

### `<Instagram />`
Galerie Instagram avec overlay au hover.

**Fonctionnalités:**
- Grid 6 colonnes (3 sur mobile)
- Overlay "Like" au hover
- Images optimisées

---

### `<Newsletter />`
Formulaire d'inscription newsletter.

**Props:**
```typescript
{
  onSubscribe: () => void;
}
```

**Fonctionnalités:**
- Validation email HTML5
- Toast de confirmation

---

### `<Footer />`
Pied de page avec liens et informations.

**Sections:**
- À propos + réseaux sociaux
- Liens rapides
- Collections
- Service client
- Contact
- Moyens de paiement

---

### `<Toast />`
Notification temporaire.

**Props:**
```typescript
{
  message: string;
  isVisible: boolean;
  onHide: () => void;
}
```

**Fonctionnalités:**
- Auto-hide après 3s
- Animation slide-up
- Position fixe bottom-right

---

### `<CustomCursor />`
Curseur personnalisé avec anneau.

**Fonctionnalités:**
- Suit la souris
- Change au hover des éléments interactifs
- Double curseur (point + anneau)

---

### `<ScrollTop />`
Bouton retour en haut de page.

**Fonctionnalités:**
- Apparaît après 500px de scroll
- Scroll smooth vers le haut
- Position fixe bottom-left

---

### `<Ticker />`
Bandeau défilant avec texte.

**Fonctionnalités:**
- Animation infinie
- Texte dupliqué pour continuité
- Vitesse 25s par cycle

---

### `<Announcement />`
Bandeau d'annonce en haut de page.

**Contenu:**
- Livraison gratuite
- Informations produits
- Paiement sécurisé

---

### `<SectionHeader />`
En-tête de section réutilisable.

**Props:**
```typescript
{
  eyebrow: string;
  title: string;
  description?: string;
}
```

**Éléments:**
- Eyebrow (petit texte)
- Titre principal
- Divider or
- Description optionnelle

---

## 🎨 Conventions de Style

### Classes Tailwind communes

```typescript
// Bouton primaire
"py-3.5 px-10 border border-gold text-black bg-gold text-[10px] tracking-[3px] uppercase font-semibold hover:bg-transparent hover:text-gold"

// Bouton outline
"py-3 px-8 border border-gold text-gold bg-transparent text-[10px] tracking-[3px] uppercase font-semibold hover:bg-gold hover:text-black"

// Titre section
"font-serif text-5xl font-light leading-tight"

// Eyebrow
"text-[10px] tracking-[4px] uppercase text-gold"

// Texte gris
"text-grey text-[13px] leading-[1.8]"
```

### Animations

```typescript
// Fade in au scroll
className="opacity-0 translate-y-5 transition-all duration-700"
// Devient visible avec IntersectionObserver

// Hover scale
className="transition-transform duration-600 hover:scale-105"

// Slide up
className="translate-y-full transition-transform duration-300 group-hover:translate-y-0"
```

---

## 🔧 Hooks Personnalisés

### useIntersectionObserver (dans App.tsx)

Observe les éléments avec classe `.fade-in` et ajoute les classes d'animation quand ils entrent dans le viewport.

```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    },
    { threshold: 0.1 }
  );
  // ...
}, []);
```

---

## 📱 Responsive Breakpoints

```typescript
// Tailwind breakpoints
sm: '640px'   // Petit mobile
md: '768px'   // Tablette
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Exemples d'utilisation

```typescript
// Mobile first
className="grid-cols-2 lg:grid-cols-4"

// Hide on mobile
className="hidden lg:block"

// Different padding
className="px-4 lg:px-15"
```

---

## 🎯 Best Practices

1. **Composants réutilisables** : Créez des composants génériques (SectionHeader, Button, etc.)
2. **Props typées** : Utilisez TypeScript pour toutes les props
3. **Accessibilité** : Ajoutez `alt`, `aria-label`, etc.
4. **Performance** : Utilisez `loading="lazy"` pour les images
5. **Responsive** : Testez sur mobile, tablette et desktop

---

## 🚀 Ajouter un nouveau composant

1. Créer le fichier dans `src/components/`
2. Définir les types des props
3. Implémenter le composant
4. Exporter et importer dans `App.tsx`
5. Ajouter la documentation ici

Exemple :

```typescript
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  onClick: () => void;
}

export const MyComponent = ({ title, onClick }: MyComponentProps) => {
  return (
    <div className="p-4">
      <h2>{title}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
```
