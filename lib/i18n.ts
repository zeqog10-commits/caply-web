// ─────────────────────────────────────────────────────────────────────────
// Caply — i18n
// Détection auto de la langue du navigateur + sélecteur manuel.
// Pour ajouter une langue : ajoute sa clé dans LOCALES + le bloc de strings.
// ─────────────────────────────────────────────────────────────────────────

export type Locale = "en" | "fr" | "es" | "de" | "it" | "pt";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

export const DEFAULT_LOCALE: Locale = "en";

export type Dict = {
  nav: { feedback: string };
  hero: {
    title: string;
    subtitle: string;
    waitlist: string;
    feedback: string;
  };
  extensionFor: string;
  cards: {
    hidden: { title: string; sub: string };
    appears: { title: string; sub: string };
    gone: { title: string; sub: string };
  };
  punchline: string;
  signature: string;
  waitlistModal: {
    title: string;
    sub: string;
    placeholder: string;
    submit: string;
    success: string;
    error: string;
  };
  messageModal: {
    title: string;
    sub: string;
    placeholder: string;
    contactPlaceholder: string;
    submit: string;
    success: string;
    error: string;
  };
};

export const STRINGS: Record<Locale, Dict> = {
  en: {
    nav: { feedback: "Feedback" },
    hero: {
      title: "Watch movies. Don't read them.",
      subtitle: "Caply hides subtitles until you actually need them.",
      waitlist: "Join the waitlist",
      feedback: "Give Feedback",
    },
    extensionFor: "Chrome Extension for",
    cards: {
      hidden: { title: "Hidden", sub: "Subtitles stay away." },
      appears: { title: "Appears", sub: "Only when needed." },
      gone: { title: "Gone", sub: "Then disappears." },
    },
    punchline: "When text disappears, the image returns.",
    signature:
      "I'm a graphic design student exploring a new way to use subtitles.",
    waitlistModal: {
      title: "Join the waitlist",
      sub: "Be the first to watch, not read.",
      placeholder: "your@email.com",
      submit: "Join",
      success: "You're on the list. Talk soon.",
      error: "Something went wrong. Try again.",
    },
    messageModal: {
      title: "Send a message",
      sub: "A question, an idea, a bug? Tell me.",
      placeholder: "Your message",
      contactPlaceholder: "Email (optional, to get a reply)",
      submit: "Send",
      success: "Got it. Thank you.",
      error: "Something went wrong. Try again.",
    },
  },
  fr: {
    nav: { feedback: "Retour" },
    hero: {
      title: "Regardez les films. Ne les lisez plus.",
      subtitle: "Caply masque les sous-titres jusqu'à ce que vous en ayez vraiment besoin.",
      waitlist: "Rejoindre la liste",
      feedback: "Donner un avis",
    },
    extensionFor: "Extension Chrome pour",
    cards: {
      hidden: { title: "Absent", sub: "Le texte reste à l'écart." },
      appears: { title: "Apparaît", sub: "Seulement quand il le faut." },
      gone: { title: "Parti", sub: "Puis il s'efface." },
    },
    punchline: "Quand le texte disparaît, l'image revient.",
    signature:
      "Étudiant en design graphique, j'explore une nouvelle façon d'utiliser les sous-titres.",
    waitlistModal: {
      title: "Rejoindre la liste",
      sub: "Soyez parmi les premiers à regarder, pas à lire.",
      placeholder: "votre@email.com",
      submit: "Rejoindre",
      success: "Vous êtes inscrit. À très vite.",
      error: "Une erreur est survenue. Réessayez.",
    },
    messageModal: {
      title: "Envoyer un message",
      sub: "Une question, une idée, un bug ? Dites le moi.",
      placeholder: "Votre message",
      contactPlaceholder: "Email (facultatif, pour avoir une réponse)",
      submit: "Envoyer",
      success: "Bien reçu. Merci à vous.",
      error: "Une erreur est survenue. Réessayez.",
    },
  },
  es: {
    nav: { feedback: "Opinión" },
    hero: {
      title: "Mira las películas. No las leas.",
      subtitle: "Caply oculta los subtítulos hasta que de verdad los necesitas.",
      waitlist: "Unirse a la lista",
      feedback: "Dar opinión",
    },
    extensionFor: "Extensión de Chrome para",
    cards: {
      hidden: { title: "Oculto", sub: "Los subtítulos se apartan." },
      appears: { title: "Aparece", sub: "Solo cuando hace falta." },
      gone: { title: "Se va", sub: "Y luego desaparece." },
    },
    punchline: "Cuando el texto desaparece, la imagen vuelve.",
    signature:
      "Soy estudiante de diseño gráfico explorando una nueva forma de usar los subtítulos.",
    waitlistModal: {
      title: "Unirse a la lista",
      sub: "Sé de los primeros en mirar, no en leer.",
      placeholder: "tu@email.com",
      submit: "Unirme",
      success: "Estás en la lista. Hablamos pronto.",
      error: "Algo salió mal. Inténtalo de nuevo.",
    },
    messageModal: {
      title: "Enviar un mensaje",
      sub: "¿Una duda, una idea, un fallo? Cuéntame.",
      placeholder: "Tu mensaje",
      contactPlaceholder: "Email (opcional, para recibir respuesta)",
      submit: "Enviar",
      success: "Recibido. Gracias.",
      error: "Algo salió mal. Inténtalo de nuevo.",
    },
  },
  de: {
    nav: { feedback: "Feedback" },
    hero: {
      title: "Filme schauen. Nicht lesen.",
      subtitle: "Caply blendet Untertitel aus, bis du sie wirklich brauchst.",
      waitlist: "Auf die Warteliste",
      feedback: "Feedback geben",
    },
    extensionFor: "Chrome-Erweiterung für",
    cards: {
      hidden: { title: "Versteckt", sub: "Untertitel halten sich zurück." },
      appears: { title: "Erscheint", sub: "Nur wenn nötig." },
      gone: { title: "Weg", sub: "Dann verschwindet er." },
    },
    punchline: "Wenn der Text verschwindet, kehrt das Bild zurück.",
    signature:
      "Ich bin Grafikdesign-Student und erkunde eine neue Art, Untertitel zu nutzen.",
    waitlistModal: {
      title: "Auf die Warteliste",
      sub: "Sei unter den Ersten, die schauen statt lesen.",
      placeholder: "deine@email.com",
      submit: "Eintragen",
      success: "Du bist auf der Liste. Bis bald.",
      error: "Etwas ist schiefgelaufen. Versuch es erneut.",
    },
    messageModal: {
      title: "Nachricht senden",
      sub: "Eine Frage, eine Idee, ein Bug? Schreib mir.",
      placeholder: "Deine Nachricht",
      contactPlaceholder: "E-Mail (optional, für eine Antwort)",
      submit: "Senden",
      success: "Angekommen. Danke dir.",
      error: "Etwas ist schiefgelaufen. Versuch es erneut.",
    },
  },
  it: {
    nav: { feedback: "Feedback" },
    hero: {
      title: "Guarda i film. Non leggerli.",
      subtitle: "Caply nasconde i sottotitoli finché non ti servono davvero.",
      waitlist: "Iscriviti alla lista",
      feedback: "Dai un parere",
    },
    extensionFor: "Estensione Chrome per",
    cards: {
      hidden: { title: "Nascosto", sub: "I sottotitoli restano da parte." },
      appears: { title: "Appare", sub: "Solo quando serve." },
      gone: { title: "Sparito", sub: "Poi svanisce." },
    },
    punchline: "Quando il testo sparisce, l'immagine torna.",
    signature:
      "Sono uno studente di design grafico che esplora un nuovo modo di usare i sottotitoli.",
    waitlistModal: {
      title: "Iscriviti alla lista",
      sub: "Sii tra i primi a guardare, non a leggere.",
      placeholder: "tua@email.com",
      submit: "Iscriviti",
      success: "Sei nella lista. A presto.",
      error: "Qualcosa è andato storto. Riprova.",
    },
    messageModal: {
      title: "Invia un messaggio",
      sub: "Una domanda, un'idea, un bug? Scrivimi.",
      placeholder: "Il tuo messaggio",
      contactPlaceholder: "Email (facoltativa, per una risposta)",
      submit: "Invia",
      success: "Ricevuto. Grazie.",
      error: "Qualcosa è andato storto. Riprova.",
    },
  },
  pt: {
    nav: { feedback: "Feedback" },
    hero: {
      title: "Assista aos filmes. Não os leia.",
      subtitle: "O Caply esconde as legendas até você realmente precisar delas.",
      waitlist: "Entrar na lista",
      feedback: "Dar opinião",
    },
    extensionFor: "Extensão do Chrome para",
    cards: {
      hidden: { title: "Oculto", sub: "As legendas ficam de lado." },
      appears: { title: "Aparece", sub: "Só quando preciso." },
      gone: { title: "Some", sub: "Depois desaparece." },
    },
    punchline: "Quando o texto some, a imagem volta.",
    signature:
      "Sou estudante de design gráfico explorando uma nova forma de usar legendas.",
    waitlistModal: {
      title: "Entrar na lista",
      sub: "Seja dos primeiros a assistir, não a ler.",
      placeholder: "seu@email.com",
      submit: "Entrar",
      success: "Você está na lista. Até breve.",
      error: "Algo deu errado. Tente de novo.",
    },
    messageModal: {
      title: "Enviar uma mensagem",
      sub: "Uma dúvida, uma ideia, um bug? Me conte.",
      placeholder: "Sua mensagem",
      contactPlaceholder: "Email (opcional, para receber resposta)",
      submit: "Enviar",
      success: "Recebido. Obrigado.",
      error: "Algo deu errado. Tente de novo.",
    },
  },
};

// Détecte la langue du navigateur et la fait correspondre à une locale supportée.
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase() as Locale;
    if (LOCALES.some((x) => x.code === code)) return code;
  }
  return DEFAULT_LOCALE;
}
