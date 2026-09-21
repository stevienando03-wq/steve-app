/* Les signaux de Steve : ce que la veille trouve et qui peut changer quelque chose
   pour lui. Une opportunite a saisir, un risque a couper, une info qui deplace une
   date. Ce fichier est fait pour etre REECRIT chaque jour par la session de veille,
   comme actu.js l'est par build_actu.py.

   Regles, les memes que pour l'actu :
   - aucun signal sans source verifiee le jour meme ;
   - un signal dit ce qu'il FAUT FAIRE, pas seulement ce qui se passe ;
   - on ne garde que ce qui le concerne LUI : son metier, sa nationalite, ses
     marches, ses echeances. Une nouvelle interessante en general n'est pas un signal.

   Champs :
     id     identifiant stable, sert a se souvenir qu'il l'a lu
     d      date de decouverte
     ty     "opportunite", "risque" ou "info"
     t      le titre, une phrase qui dit deja le fond
     q      ce que c'est, avec le chiffre verifie
     faire  ce qu'il a a faire, tout de suite
     lien   [libelle, url] ou null
*/
const SIGNAUX = {"maj":"2026-09-21","items":[

 {"id":"nat2120","d":"2026-09-21","ty":"opportunite",
  "t":"Tu n'as probablement pas cinq ans à attendre pour la nationalité française",
  "q":"L'article 21-20 du code civil dispense de TOUT stage de résidence le ressortissant d'un État dont le français est langue officielle, quand le français est sa langue maternelle. Le Tchad figure nommément dans l'annexe officielle du ministère, téléchargée et lue le 21/09/2026. Et à défaut, l'article 21-18 ramène le stage à deux ans pour un diplôme du supérieur français : tu en as deux.",
  "faire":"Prendre rendez-vous avec un avocat en droit des étrangers avant le 15 octobre. La question à poser est écrite mot pour mot dans l'onglet Parcours.",
  "lien":["La procédure et les pièces","https://www.service-public.gouv.fr/particuliers/vosdroits/F2213"]},

 {"id":"can2126","d":"2026-09-21","ty":"opportunite",
  "t":"Le Canada délivre 37 % de ses invitations à des francophones, à un score bien plus bas",
  "q":"En 2026, la catégorie francophone de l'Entrée Express a délivré 35 500 invitations en sept tirages, soit 37 % du total, à un score moyen de 405, quand les tirages généraux exigeaient 520 à 550. La condition est NCLC 7 en français : pour toi c'est un test à passer, pas une compétence à acquérir. Et le Canada ne regarde pas ta nationalité.",
  "faire":"Créer un profil Entrée Express pour connaître ton score réel. C'est gratuit et ça n'engage à rien. Attention, ton TOEIC ne compte pas : il faut IELTS General, CELPIP ou PTE Core.",
  "lien":["Vérifier son admissibilité","https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/qui-presenter-demande.html"]},

 {"id":"sql2109","d":"2026-09-21","ty":"risque",
  "t":"Ton CV annonce le SQL, ligne Outils, et tu ne l'as pas encore",
  "q":"Le CV français écrit « Pennylane, Excel avancé et VBA avec appels API, Python, SQL, Boond Manager, Sage ». Un recruteur peut poser une question dessus en entretien, ou envoyer un test. Être pris en défaut sur une ligne de son propre CV coûte beaucoup plus cher que de ne pas l'avoir écrite.",
  "faire":"Trancher cette semaine : soit tu l'apprends, six heures de cours suffisent pour le socle, soit on retire le mot en attendant. Dis-le moi et je fais la modification aux trois endroits.",
  "lien":["Le cours, gratuit et en français","https://openclassrooms.com/fr/courses/6971126-requetez-une-base-de-donnees-avec-sql"]},

 {"id":"dip2109","d":"2026-09-21","ty":"info",
  "t":"Le DipIFR sort de ta liste : zéro mention sur 409 annonces",
  "q":"Il était en tête de tes certifications, sur un comptage faux. Recompté sur 206 annonces françaises et 203 étrangères de sept marchés : le DipIFR n'apparaît nulle part. Un diplôme que personne ne nomme ne se cherche pas dans un CV, donc il ne fait passer aucun filtre. Ce qui voyage vraiment, c'est l'ACCA : 86 % des annonces de Dublin, 69 % de Dubaï.",
  "faire":"Ne rien engager. Si un jour tu vises Dublin ou Dubaï, commence par le calculateur de dispenses ACCA, cinq minutes, pour savoir combien d'examens tes deux M2 t'évitent.",
  "lien":["Calculateur de dispenses ACCA","https://www.accaglobal.com/gb/en/help/exemptions-calculator.html"]},

 {"id":"der2109","d":"2026-09-21","ty":"info",
  "t":"Dermatologue à Paris : 61 jours d'attente en moyenne",
  "q":"Ce n'est pas une urgence, c'est un délai. Si tu réserves le 15 octobre, tu consultes vers la mi-décembre. Si tu attends janvier, tu consultes en mars.",
  "faire":"Prendre le rendez-vous maintenant, même si la consultation est lointaine. C'est la seule chose à faire aujourd'hui.",
  "lien":null}

]};
