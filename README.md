# Système de Gestion des Passeports

Application web pour la gestion des passeports de l'ambassade, développée avec Next.js, Prisma et PostgreSQL.

## Fonctionnalités

- 🔐 Authentification sécurisée pour les administrateurs
- 📊 Tableau de bord administratif
- 📈 Statistiques en temps réel
- 📱 Notifications par email et SMS
- 📥 Import de données via fichiers Excel
- 🔍 Recherche de passeports
- 📋 Gestion des statuts des passeports

## Technologies utilisées

- Next.js 14
- Prisma
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- TypeScript
- Nodemailer (pour les emails)
- Twilio (pour les SMS)

## Prérequis

- Node.js 18+
- PostgreSQL
- Compte Gmail (pour les notifications par email)
- Compte Twilio (pour les notifications par SMS)

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/passport-app.git
cd passport-app
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement :
```bash
cp .env.example .env
```
Puis modifiez le fichier `.env` avec vos configurations.

4. Initialiser la base de données :
```bash
npx prisma migrate dev
```

5. Lancer l'application :
```bash
npm run dev
```

## Configuration

### Variables d'environnement

```env
# Base de données
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# NextAuth
JWT_SECRET="votre-secret-jwt"
ADMIN_EMAIL="admin@ambassade.gn"
ADMIN_PASSWORD="mot-de-passe-securise"

# Email (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-application
SMTP_FROM=votre-email@gmail.com

# SMS (Twilio)
TWILIO_ACCOUNT_SID=votre-account-sid
TWILIO_AUTH_TOKEN=votre-auth-token
TWILIO_PHONE_NUMBER=votre-numero-twilio
```

## Utilisation

1. Accédez à l'interface d'administration : `/admin`
2. Connectez-vous avec les identifiants administrateur
3. Importez des passeports via l'interface d'import
4. Gérez les passeports et envoyez des notifications

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT.
