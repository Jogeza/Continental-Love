import type {CollectionLandingConfig} from "@/components/commerce/CollectionLanding";

const italian: Record<string, Partial<CollectionLandingConfig>> = {
  coffee: {
    eyebrow: "Caffè ugandese · Radicato nell’origine",
    title: "Dall’Uganda. Alla tua tazza.",
    heroCopy: "Caffè plasmato dal territorio, dalla coltivazione e dalla preparazione, presentato senza separarlo dal luogo d’origine.",
    introEyebrow: "Radicato in Uganda",
    introTitle: "Il sapore comincia dall’origine.",
    introCopy: "La collezione mette in primo piano l’Uganda, i suoi paesaggi di coltivazione e il lavoro dietro ogni confezione da 250 g e 500 g.",
    storyEyebrow: "Un rito quotidiano",
    storyTitle: "Una storia in ogni tazza.",
    storyCopy: "Il caffè collega territorio e quotidianità. Le pagine prodotto mostrano tostatura, formato, prezzo e disponibilità.",
    storyLinkLabel: "Scopri l’origine",
    relatedTitle: "Continua il viaggio."
  },
  apparel: {
    eyebrow: "T-shirt grafiche · Felpe · Uso quotidiano",
    title: "Indossa la cultura.",
    heroCopy: "T-shirt grafiche e una felpa verde oliva con il logotipo e il monogramma Continental Love.",
    introEyebrow: "Disegnato con chiarezza",
    introTitle: "Un guardaroba essenziale costruito attorno al marchio.",
    introCopy: "La selezione attuale comprende T-shirt nere e bianche, una felpa verde oliva e cappellini coordinati, con taglie e disponibilità indicate nelle schede prodotto.",
    storyEyebrow: "Grafica, colore, presentazione",
    storyTitle: "L’identità vive nei dettagli visibili.",
    storyCopy: "Una palette contenuta e una grafica coerente uniscono T-shirt, felpe, cappellini e confezioni. Composizione e origine produttiva devono ancora essere confermate.",
    storyLinkLabel: "Leggi la nostra storia",
    relatedTitle: "Continua a esplorare."
  },
  jewelry: {
    eyebrow: "Forme in ottone · Bracciali · Orecchini",
    title: "Ottone scultoreo, da indossare.",
    heroCopy: "Bracciali, orecchini pendenti, anelli e pendenti dorati presentati in ritratti e immagini di studio.",
    introEyebrow: "Forme essenziali",
    introTitle: "Una piccola collezione dalle linee decise.",
    introCopy: "Il catalogo attuale comprende un bracciale scultoreo e orecchini pendenti. Lega, placcatura, misure e origine produttiva richiedono conferma.",
    storyEyebrow: "Superfici e proporzioni",
    storyTitle: "Curve ampie e texture martellate.",
    storyCopy: "Le immagini mostrano metallo caldo, superfici martellate e forme oversize senza attribuire processi artigianali non documentati.",
    storyLinkLabel: "Scopri l’Uganda",
    relatedTitle: "Esplora la collezione completa."
  }
};

export function localizeCollectionConfig(config: CollectionLandingConfig, locale: string): CollectionLandingConfig {
  return locale === "it" ? {...config, ...(italian[config.handle] ?? {})} : config;
}
