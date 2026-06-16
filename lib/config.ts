// ─────────────────────────────────────────────────────────────────────────
// Caply — config réception des messages
//
// 👉 LE PLUS SIMPLE qui existe (30 secondes, AUCUN compte à créer) :
//
//   1. Va sur  https://web3forms.com
//   2. Dans "Get your Access Key", tape ton email : nathan.gadiffet@gmail.com
//   3. Clique "Create Access Key" → tu reçois une clé par mail (un code comme :
//      "a1b2c3d4-....-....").
//   4. Colle cette clé ci-dessous à la place de "REMPLACE_MOI".
//
// C'est tout. Chaque inscription waitlist + chaque message t'arrivera DIRECTEMENT
// dans ta boîte mail. Pas de compte, pas de dashboard, pas de back-end.
// Gratuit : 250 messages / mois.
//
// Tant que tu n'as pas mis la clé, le site marche quand même (il confirme au visiteur).
// ─────────────────────────────────────────────────────────────────────────

export const WEB3FORMS_KEY = "5701c6e6-1fd1-4fce-a1bd-ea48c63ec150";

export const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export const isMailerReady = (WEB3FORMS_KEY as string).length > 10;
