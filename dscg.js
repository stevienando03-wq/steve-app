/* ============================ DSCG ============================
   Tout ce qui est réglementaire vient de l'arrêté du 4 août 2025, publié au Bulletin
   officiel n° 32 du 28 août 2025 (NOR MENS2523324A), et du décret n° 2012-432 modifié.
   Rien n'est repris d'un blog quand le texte officiel le dit lui-même.
   Les volumes horaires et les intitulés des parties sont ceux de l'annexe 2 de l'arrêté.
   Construit le 14/09/2026. Les dates de la session 2027 ne sont PAS encore publiées. */

const DSCG_META = {
  maj: "14/09/2026",
  source: "Arrêté du 4 août 2025, BO n° 32 du 28 août 2025",
  cible: "Session 2027",
  grade: "Le DSCG confère le grade de master et 120 crédits européens (article 7).",
  validation: [
    "Moyenne générale d'au moins 10 sur 20 sur l'ensemble des épreuves.",
    "Aucune note en dessous de 6 sur 20, c'est éliminatoire.",
    "Une note d'au moins 10 est conservée pendant les HUIT sessions suivantes.",
    "Une note entre 6 et 10 peut être gardée pour compensation, huit sessions aussi.",
    "Se réinscrire à une épreuve ANNULE automatiquement la note conservée."
  ],
  reforme: [
    "La réforme s'applique à partir de la session 2027. Jusqu'à la session 2026 incluse, c'est encore l'arrêté de 2019.",
    "L'UE 3 change de nom : Contrôle de gestion et stratégie, au lieu de Management et contrôle de gestion.",
    "Les référentiels sont réécrits : durabilité, éthique et déontologie, intelligence artificielle.",
    "L'UE 2 Finance est ALLÉGÉE des techniques sophistiquées. Les modèles d'évaluation d'options et les aspects juridiques et fiscaux partent vers l'UE 1.",
    "L'oral d'anglais et l'agrément du sujet de mémoire sont clarifiés."
  ],
  ia: "Pour le mémoire professionnel (UE 7), utiliser une IA générative sans travail personnel d'appropriation à partir de ce qu'elle produit constitue une FRAUDE. C'est écrit noir sur blanc à l'article 9 de l'arrêté."
};

/* Les sept UE. durée, coefficient et ECTS viennent de l'article 11 de l'arrêté.
   Les parties et leurs volumes horaires viennent de l'annexe 2. */
const DSCG_UE = [
 {n:1, nm:"Gestion juridique, fiscale et sociale", nat:"écrit", duree:"4 heures", coef:"1,5", ects:20, h:180,
  dispense:false,
  pour:"Le droit des affaires, la fiscalité et le social, au service du conseil au client.",
  prereq:"Les UE 1, 2, 3 et 4 de l'axe juridique du DCG.",
  parties:[
    {t:"Accompagner le client dans son environnement juridique", h:65,
     d:"Contrats spéciaux, données personnelles et RGPD, éthique des affaires."},
    {t:"Accompagner le développement de l'activité du client", h:65,
     d:"Financement de l'activité, structuration, droit de la concurrence."},
    {t:"Accompagner la continuité de l'activité du client selon le contexte", h:50,
     d:"Transmission d'entreprise, entreprise en difficulté, cessation d'activité."}
  ],
  moi:"C'est l'UE la plus loin de ce que je fais. Aucune dispense n'est possible dessus, donc elle se prépare pour de vrai. À traiter comme un vrai cours de droit, pas comme une révision."},

 {n:2, nm:"Finance", nat:"écrit", duree:"3 heures", coef:"1", ects:15, h:140,
  dispense:true,
  pour:"Diagnostic financier de groupe, évaluation, ingénierie financière, risques et trésorerie.",
  prereq:"L'UE 6 du DCG : diagnostic financier, sources de financement, actualisation, CMPC et MEDAF, critères d'investissement en avenir certain.",
  parties:[
    {t:"Établir un diagnostic financier approfondi à partir de comptes consolidés", h:15,
     d:"ROCE, ROIC, ROE, structure financière, analyse par les flux. Périmètre constant."},
    {t:"Analyser la performance durable et la responsabilité sociétale", h:15,
     d:"Gouvernance, code AFEP-MEDEF, théorie de l'agence, loi Pacte, reporting de durabilité."},
    {t:"Maîtriser les méthodes d'évaluation de l'entreprise", h:20,
     d:"Approches patrimoniale, par les flux, par les multiples."},
    {t:"Maîtriser les opérations d'ingénierie financière", h:20,
     d:"LBO, restructurations du capital, introduction en bourse."},
    {t:"Analyser les mécanismes et instruments des marchés financiers", h:25,
     d:"Efficience des marchés et finance comportementale, les deux paradigmes."},
    {t:"Gérer les risques et la trésorerie", h:25,
     d:"Risques de change et de taux, risques climatiques et limites planétaires."},
    {t:"Conseiller en matière d'investissement et de financement", h:20,
     d:"Décision en avenir incertain."}
  ],
  moi:"C'est mon terrain. Analyse financière, rentabilité, structure, flux : je le fais tous les jours sur huit sociétés. Le programme a été allégé des maths financières lourdes. À passer en premier."},

 {n:3, nm:"Contrôle de gestion et stratégie", nat:"écrit", duree:"4 heures", coef:"1,5", ects:20, h:180,
  dispense:true,
  pour:"Le contrôle de gestion au service des choix stratégiques, et les outils de pilotage.",
  prereq:"L'UE 11 Contrôle de gestion et l'UE 7 Management du DCG.",
  parties:[
    {t:"Contribuer à la définition des choix stratégiques et organisationnels au prisme du contrôle de gestion", h:60,
     d:"Diagnostic stratégique, structure de l'organisation, choix de gouvernance."},
    {t:"Favoriser le déploiement de la stratégie grâce à des outils de contrôle de gestion", h:80,
     d:"Budgets, coûts, prix de cession interne, mesure de la performance."},
    {t:"Concevoir et exploiter des outils de pilotage de la stratégie", h:40,
     d:"Tableaux de bord, balanced scorecard, pilotage de la performance durable."}
  ],
  moi:"L'autre UE où je pars avec de l'avance : reporting mensuel monté de zéro, écarts budget contre réalisé, marge par affaire et par consultant. La partie stratégie est celle à travailler, pas les outils."},

 {n:4, nm:"Comptabilité et audit", nat:"écrit", duree:"4 heures", coef:"1,5", ects:20, h:180,
  dispense:false,
  pour:"Restructurations, comptes consolidés en normes françaises et IFRS, audit.",
  prereq:"Les UE 9 et 10 du DCG : écritures courantes et d'inventaire, états financiers.",
  parties:[
    {t:"Accompagner le chef d'entreprise dans les opérations de restructuration", h:25,
     d:"Fusions, scissions, apports partiels d'actifs, TUP. Régime de droit commun et régime de faveur."},
    {t:"Participer à l'élaboration du reporting financier des groupes, normes françaises et IFRS", h:80,
     d:"Principes de consolidation, processus d'élaboration, documents de synthèse des groupes."},
    {t:"Participer à la mise en place d'une mission d'audit", h:75,
     d:"Cadre légal, certification des états financiers, audit de durabilité."}
  ],
  moi:"L'UE la plus lourde avec l'UE 1, et aucune dispense possible dessus non plus. Bonne nouvelle : la consolidation est le mot le plus demandé dans mes offres, 152 mentions sur 468. Cette UE sert deux fois."},

 {n:5, nm:"Management des systèmes d'information", nat:"écrit", duree:"3 heures", coef:"1", ects:15, h:140,
  dispense:true,
  pour:"Piloter, sécuriser et faire évoluer le système d'information d'une organisation.",
  prereq:"Les UE 7 et 8 du DCG.",
  parties:[
    {t:"Analyser le rôle stratégique du système d'information dans l'organisation", h:48,
     d:"Alignement stratégique SI et métier, gouvernance de la DSI, veille technologique."},
    {t:"Organiser, exploiter et sécuriser les données de l'organisation", h:36,
     d:"Modélisation, bases de données, qualité et protection des données."},
    {t:"Mettre en œuvre des outils SI au service de la performance", h:20,
     d:"ERP, décisionnel, automatisation des processus."},
    {t:"Sécuriser et rendre durable le système d'information", h:36,
     d:"Cybersécurité, conformité, numérique responsable."}
  ],
  moi:"Le Python, le SQL et les appels API que j'écris déjà couvrent une partie du terrain. Le reste est du vocabulaire de gouvernance à apprendre, pas de la technique."},

 {n:6, nm:"Anglais des affaires", nat:"oral", duree:"30 minutes, plus 1 heure de préparation", coef:"1", ects:15, h:120,
  dispense:true,
  pour:"Synthèse et commentaire d'un texte en anglais, puis entretien en anglais.",
  prereq:"L'UE 12 du DCG.",
  parties:[
    {t:"Préparation sur le sujet fourni", h:0,
     d:"Une heure, sans autre document que ceux du sujet."},
    {t:"Exposé en anglais, 15 minutes maximum", h:0,
     d:"D'abord la synthèse du texte, puis le commentaire organisé à partir d'une question du jury."},
    {t:"Entretien en anglais, 15 minutes maximum", h:0,
     d:"Le jury comprend deux enseignants dont au moins un professeur d'anglais."}
  ],
  moi:"Avec un TOEIC à 955 sur 990, c'est la note à aller chercher pour tirer la moyenne. Attention : le TOEIC teste la compréhension, ici il faut PARLER et structurer un commentaire. L'entraînement porte sur l'oral, pas sur le vocabulaire."},

 {n:7, nm:"Mémoire professionnel", nat:"mémoire et soutenance", duree:"soutenance d'une heure maximum", coef:"1", ects:15, h:50,
  dispense:true,
  pour:"Relier la formation théorique aux pratiques professionnelles observées ou exercées.",
  prereq:"Un stage d'au moins seize semaines, ou une expérience professionnelle au moins équivalente.",
  parties:[
    {t:"Initier une recherche en sciences de gestion", h:25,
     d:"Problématique, méthodologie, revue de littérature."},
    {t:"Produire et soutenir à l'oral un mémoire professionnel de niveau master", h:25,
     d:"Rédaction, puis soutenance devant un enseignant et un professionnel."}
  ],
  moi:"J'ai déjà écrit et soutenu un mémoire quantitatif. L'exercice m'est connu. L'expérience de seize semaines est largement couverte par l'alternance. Le vrai point de vigilance est le calendrier de l'agrément, pas le contenu."}
];

/* Le calendrier. Les dates 2026 sont celles publiées par le SIEC. Celles de 2027 ne sont
   PAS publiées au 14/09/2026 : l'arrêté de calendrier paraît chaque année au Bulletin
   officiel vers la rentrée. Ce qui est marqué « à confirmer » est une projection sur le
   rythme de 2026, pas une date officielle. */
const DSCG_CAL = [
 {q:"Vérifier que je peux m'inscrire", d:"Tout de suite", sur:true,
  x:"Regarder si mon diplôme porte la mention grade de master. Sans elle, l'inscription au DSCG n'est pas ouverte."},
 {q:"Vérifier si j'ai droit à une dispense", d:"Tout de suite", sur:true,
  x:"Comparer l'intitulé exact de mes deux M2 avec la liste des arrêtés, sur le site du SIEC."},
 {q:"Acheter les manuels du nouveau programme", d:"À partir de novembre 2026", sur:true,
  x:"Dunod finalise la réédition DSCG pour novembre 2026. DSCG 3 et DSCG 4 réforme 2026-2027 sont déjà sortis."},
 {q:"Faire agréer le sujet de mémoire", d:"Vers le 1er avril 2027, à confirmer", sur:false,
  x:"Pour la session 2026 la limite de retour des fiches d'agrément était le 1er avril 2026. C'est la date la plus facile à rater, elle tombe trois mois avant l'inscription."},
 {q:"S'inscrire sur Cyclades", d:"Juillet et août 2027, à confirmer", sur:false,
  x:"Session 2026 : du 1er juillet au 27 août 2026 à 12h. Pièces et paiement pour le 27 août à 23h59."},
 {q:"Passer les écrits", d:"Fin octobre 2027, à confirmer", sur:false,
  x:"Session 2026 : écrits du 20 au 22 octobre, oraux à compter du 26 octobre."},
 {q:"Résultats", d:"Décembre 2027, à confirmer", sur:false,
  x:"Les résultats de la session 2025 sont tombés le 10 décembre 2025."}
];

const DSCG_ACHATS = [
 {q:"Les manuels des UE que je passe", p:"35 à 50 € le manuel",
  x:"Éditions RÉFORME 2026-2027 obligatoires, le programme change à la session 2027. Un manuel d'avant est périmé sur le fond. Éditeurs de référence : Dunod collection Expert Sup, Foucher, Vuibert, Nathan.",
  prio:1},
 {q:"Les annales corrigées", p:"20 à 30 € le volume",
  x:"À prendre pour l'entraînement au format d'épreuve, en sachant que les sujets d'avant 2027 portent sur l'ancien programme. Les sujets zéro publiés par le ministère sont gratuits et collent au nouveau programme.",
  prio:2},
 {q:"Les droits d'inscription", p:"30 € par UE",
  x:"Soit 210 € pour les sept UE. Paiement par carte en euros au moment de l'inscription sur Cyclades, pas de chèque.",
  prio:1},
 {q:"Le Plan comptable général et un recueil IFRS", p:"30 à 60 €",
  x:"Pour l'UE 4. Beaucoup d'épreuves sont des cas à traiter documentation en main.",
  prio:2},
 {q:"Une préparation encadrée, si je veux de l'encadrement", p:"1 500 à 4 000 € par UE",
  x:"INTEC du Cnam, Comptalia, ou une école. Pas indispensable en candidat libre, mais l'UE 1 et l'UE 4 sont celles où un cadre aide vraiment.",
  prio:3}
];

/* L'ordre de passage proposé tient compte de trois choses : ce que je sais déjà faire,
   le fait que l'UE 1 et l'UE 4 ne peuvent JAMAIS être dispensées, et le fait qu'une note
   d'au moins 10 reste acquise huit sessions. Rien n'oblige à tout passer d'un coup. */
const DSCG_PLAN = [
 {vague:"Session 2027, la vague qui s'appuie sur mon métier", ue:"UE 2, UE 3, UE 6",
  x:"Trois UE où je pars avec de l'avance réelle. L'UE 2 et l'UE 3 sont mon quotidien, l'UE 6 est un oral d'anglais et j'ai 955 au TOEIC. Coefficients 1, 1,5 et 1 : de quoi construire une moyenne avant d'attaquer le dur.",
  quand:"Révisions de janvier à octobre 2027"},
 {vague:"Session 2028, la vague lourde", ue:"UE 1, UE 4",
  x:"Les deux UE sans dispense possible, à 4 heures et coefficient 1,5 chacune. L'UE 4 sert deux fois : la consolidation est le mot le plus demandé dans mes offres.",
  quand:"Révisions à partir de novembre 2027"},
 {vague:"Session 2028 ou 2029, la fin", ue:"UE 5, UE 7",
  x:"L'UE 5 est du vocabulaire de gouvernance sur un terrain que je connais. L'UE 7 est un mémoire, exercice que j'ai déjà fait, mais qui demande un sujet agréé six mois avant.",
  quand:"Le mémoire se prépare en parallèle, pas en dernier"}
];

const DSCG_LIENS = [
 ["S'inscrire, portail Cyclades", "https://candidat.examens-concours.gouv.fr"],
 ["SIEC, le centre d'examen d'Île-de-France", "https://siec.education.fr/candidats/examens/DSCG"],
 ["Le calendrier officiel du SIEC", "https://siec.education.fr/candidats/agenda/examens/DSCG"],
 ["La liste des dispenses, arrêté par arrêté", "https://siec.education.fr/candidats/docutheque/examens/DSCG/dispenses-depreuves"],
 ["L'arrêté du 4 août 2025, le programme complet", "https://www.enseignementsup-recherche.gouv.fr/fr/bo/2025/Hebdo32/MENS2523324A"],
 ["La page DSCG du ministère", "https://www.enseignementsup-recherche.gouv.fr/fr/le-dscg-diplome-superieur-de-comptabilite-et-de-gestion-49877"]
];

/* Ce qui décide de tout, et que je suis le seul à pouvoir vérifier. */
const DSCG_VERIF = [
 {q:"Est-ce que je peux seulement m'inscrire ?",
  r:"L'article 49 du décret 2012-432 ouvre le DSCG à trois profils : les titulaires du DCG, les titulaires d'un titre admis en dispense du DCG, et les titulaires d'un diplôme national de master ou d'un diplôme CONFÉRANT LE GRADE DE MASTER.",
  a:"Un titre RNCP de niveau 7 ne confère pas automatiquement le grade de master. Il faut lire le diplôme lui-même : la mention grade de master y est écrite, ou elle n'y est pas. Un simple niveau bac+5 ne suffit pas."},
 {q:"Est-ce que j'ai droit à une dispense ?",
  r:"Les dispenses sont attachées à des diplômes NOMMÉS dans des arrêtés, pas à un profil ni à une école. Le master national mention Finance dispense des UE 2, 6 et 7. Le master CCA dispense des UE 2, 3, 5, 6 et 7. Une vingtaine de diplômes d'écoles sont listés un par un.",
  a:"Dans les arrêtés de 2021 à février 2025 que j'ai lus, ni l'ESG ni l'ESCE n'apparaissent. L'ESG Paris y figure seulement pour son option Audit et Expertise Comptable, qui n'est pas mon parcours. À vérifier moi-même avec l'intitulé exact de mes diplômes."},
 {q:"Quelles UE ne sont jamais dispensées ?",
  r:"L'UE 1 Gestion juridique, fiscale et sociale et l'UE 4 Comptabilité et audit. Article 5 de l'arrêté du 4 août 2025.",
  a:"Quoi qu'il arrive, ces deux UE sont à passer. Ce sont aussi les deux plus lourdes, 4 heures et coefficient 1,5. Elles décident du calendrier."},
 {q:"Une dispense, est-ce que c'est toujours une bonne idée ?",
  r:"Non. Une dispense ne donne PAS les crédits européens correspondants, et l'UE dispensée n'entre pas dans le calcul de la moyenne.",
  a:"Donc une dispense sur une UE où je serais bon me prive d'une note qui aurait tiré la moyenne vers le haut. Sur l'UE 2 Finance, il vaut peut-être mieux passer l'épreuve que la faire sauter."}
];
