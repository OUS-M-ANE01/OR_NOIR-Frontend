#!/bin/bash

echo "🚀 Installation d'Or Noir African Jewelry Frontend"
echo "=================================================="
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation réussie!"
    echo ""
    echo "🎉 Pour lancer le projet:"
    echo "   npm run dev"
    echo ""
    echo "Le site sera accessible sur http://localhost:5173"
else
    echo ""
    echo "❌ Erreur lors de l'installation"
    echo "Essayez: npm install --legacy-peer-deps"
fi
