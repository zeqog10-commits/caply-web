// ─────────────────────────────────────────────────────────────────────────
// Caply — config réception des messages (waitlist + contact)
//
// On utilise Web3Forms (https://web3forms.com). La clé "access_key" est une clé
// PUBLIQUE par conception : elle est faite pour vivre côté navigateur et ne donne
// accès à rien (ni à la boîte mail, ni aux inscriptions). Au pire quelqu'un peut
// soumettre le formulaire — c'est tout. Donc l'exposer côté client est normal et sûr.
//
// La clé est lue depuis une variable d'environnement quand elle existe
// (NEXT_PUBLIC_WEB3FORMS_KEY, à définir sur Vercel → Settings → Environment Variables),
// sinon on retombe sur la clé par défaut ci-dessous.
// ─────────────────────────────────────────────────────────────────────────

export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "5701c6e6-1fd1-4fce-a1bd-ea48c63ec150";

export const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export const isMailerReady = WEB3FORMS_KEY.length > 10;
