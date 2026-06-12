# COPY DECK i18n — gusit.de — FRANÇAIS (FR)

**Version:** 1.0 · **Date:** 2026-06-12
**Author:** Jonas Weber (mkt-content-jonas) · Task #279 · Review: Marta Keller (mkt-vp-marta)
**Source:** `docs/copy-deck-2026-06-11.md` — EN strings translated; DE used as register reference (formal vous).
**Scope:** marketing surface only (GLOBAL, `/`, `/work/`, 404, SEO home + work + 404). Legal pages (Impressum, Privacy Policy) remain DE/EN pending counsel — FR pages link to the EN privacy page at `/privacy/`.
**Conventions:** URL anchors stay English (`#services`, `#how-we-work`, `#luca-ai`, `#about`, `#contact`); locale path prefix `/fr/` mirrors `/de/`. Proper nouns untranslated per deck compliance rules. Front page follows deck **CHANGELOG v1.1** (partner-name discreet: Dell named ONLY on `/work/`; Unisys not named anywhere; "leading OEM" / channel phrasing on `/`).

---

## GLOBAL: Shared UI strings

### Navigation (header, in order)

#### FR
- Services → `/fr/#services`
- Références → `/fr/work/`
- Luca AI → `/fr/#luca-ai`
- À propos → `/fr/#about`
- Contact → `/fr/#contact`

### Language toggle

#### FR
- Label (entry pointing to the FR page, shown on non-FR pages): `Français`
- aria-label: `Lire cette page en français`
- On FR pages, the entry back to English reuses the deck's EN strings — Label: `English` · aria-label: `Read this page in English`

### Skip link

#### FR
`Aller au contenu principal`

### Footer

#### FR
- Tagline line: `Gus IT — le conseil IT qui tourne sur sa propre IA.`
- Link column 1 (Site): Services · Références · Luca AI · À propos · Contact
- Link column 2 (Légal): Impressum (`/impressum/`) · Politique de confidentialité (`/privacy/` — page servie en anglais)
- Trust line (plain text, no logo until badge approval lands): `NVIDIA Inception Member`
- Legal-entity line: `Gus IT LLC — société à responsabilité limitée de droit de l'État de Floride (États-Unis), au service de clients de la région DACH, à distance et sur site.`
- Contact line: `gus@gusit.de`
- Copyright: `© 2026 Gus IT LLC. Tous droits réservés.`

---

## PAGE: `/` (FR mirror: `/fr/`)

### Hero

#### FR
- H1: `Le conseil IT qui tourne sur sa propre IA.`
- Subhead: `Une décennie d'ingénierie de l'IA et une expertise approfondie de Microsoft Azure — portées par une équipe qui construit et exploite sa propre plateforme d'IA. Membre du programme NVIDIA Inception. Missions menées via le channel entreprise.`
- CTA primary: `Réserver un diagnostic de 30 minutes` → `/fr/#contact`
- CTA secondary: `Voir nos références` → `/fr/work/`

### Proof-point bar (4 chips, directly under hero)

#### FR
1. `NVIDIA Inception Member`
2. `Migration d'applications — OEM de premier plan`
3. `Microsoft Azure · AKS · Azure Local`
4. `Une décennie d'ingénierie de l'IA`

### Services (`#services`)

#### FR

**Section heading:** `Ce que nous faisons`
**Section intro:** `Quatre offres. Chacune adossée à des projets livrés — pas à une slide de capacités.`

---

**Offer 1 — Résidences d'infrastructure augmentées par l'IA**

Promise: `Un ingénieur principal senior intégré à votre équipe pour un nombre de semaines défini — épaulé par une force de travail IA, pour que chaque heure produise des artefacts durables.`

What's included:
- `De l'ingénierie senior sur site ou à distance, par blocs hebdomadaires définis`
- `Des agents IA produisent en parallèle la documentation, les runbooks et les rapports de validation`
- `Chaque artefact est versionné et remis — le savoir reste chez vous`
- `Un périmètre flexible : virtualisation, plateformes hybrides et migration`

Proof point: `Livré : une résidence multi-sites Hyper-V & SCVMM pour un client final du secteur public américain (administration d'un État), sous contrat de résidence d'un OEM de premier plan.`

---

**Offer 2 — Ingénierie de plateformes Azure & hybrides (Design–Build)**

Promise: `Conception, construction, refonte et migration de plateformes de virtualisation Microsoft et de plateformes hybrides, à périmètre fixe — avec un résultat défini, pas du conseil à durée indéterminée.`

What's included:
- `Azure Local, clusters de basculement Hyper-V, SCVMM, Network ATC`
- `Des architectures cibles revues avec vos ingénieurs avant toute construction`
- `Une automatisation testable à blanc (dry-run), avec un plan de rollback pour chaque phase`
- `Des standards de construction secure-by-design dans chaque artefact`

Proof point: `Livré : un design de cluster bi-site validé par le client, révisé en cours de mission après la revue de ses propres équipes d'ingénierie.`

---

**Offer 3 — Application Migration Factory**

Promise: `La migration d'applications conduite comme une usine gouvernée — pas comme un projet héroïque mené une seule fois.`

What's included:
- `Fondée sur la méthodologie de migration en trois phases d'un OEM de premier plan`
- `Des jalons de phase (phase gates) avec décision humaine go/no-go à chaque transition`
- `Des runbooks générés et des plans de rollback générés pour chaque groupe de migration (move group)`
- `Une traçabilité complète : quoi, quand, par qui, sur quelle approbation`

Proof point: `Productisée au sein d'une mission active de migration d'applications avec un OEM de premier plan.`

---

**Offer 4 — Conseil en modèle opératoire de l'IA (« AI Workforce »)**

Promise: `Nous faisons tourner notre propre cabinet sur une force de travail IA sous supervision d'ingénieurs principaux — et nous mettons en place le même modèle opératoire au sein de votre organisation de delivery.`

What's included:
- `Un diagnostic : où la delivery agentique tient dans votre organisation — et où elle ne tient pas`
- `La conception du modèle opératoire : rôles, jalons d'approbation, responsabilité pour chaque action de l'IA`
- `De la pratique, pas de la théorie : le modèle que nous vendons est celui sur lequel nous livrons nos contrats`
- `La gouvernance d'abord : chaque action d'agent attribuable, chaque jalon sous responsabilité humaine`

Proof point: `Notre propre système de delivery tourne sur la plateforme Luca — en usage sur des missions réelles, sous contrat.`

### How we work (`#how-we-work`)

#### FR

**Section heading:** `Comment nous travaillons`

**Step 1 — Diagnostic**
`Tout commence par un échange de 30 minutes — pas de slides, seulement votre environnement et votre objectif. S'il y a un terrain d'entente, nous enchaînons sur un diagnostic ou un design sprint à périmètre fixe (deux à quatre semaines) qui dimensionne correctement le projet. Vous obtenez une vision de votre parc prête pour la décision, pas un document commercial.`

**Step 2 — Engagement**
`Choisissez le modèle adapté : une résidence (blocs de plusieurs semaines d'heures senior), un design–build à périmètre fixe avec statement of work défini, ou un accompagnement récurrent (advisory retainer). Nous livrons aussi via des contrats partenaires et channel — nos deux missions livrées se sont déroulées sous contrat d'un contractant principal, et nous savons être le moteur derrière le vôtre.`

**Step 3 — Exploitation**
`La passation est le but, pas une formalité de fin de mission. Designs, runbooks, plans de rollback et documentation sont versionnés et vous appartiennent. Nous rendons votre équipe capable d'exploiter la plateforme — et restons joignables en retainer si vous le souhaitez.`

**Engagement-model strip (microcopy under the steps):**
`Modèles d'engagement : Résidence · Diagnostic / design sprint à périmètre fixe · Design–build · Advisory retainer · Delivery via partenaires & channel`

### Luca AI differentiator (`#luca-ai`)

#### FR

**Section heading:** `Nous travaillons sur l'IA que nous construisons`

**Body:**
`Beaucoup de cabinets parlent d'IA. Nous, nous en exploitons une. Luca est notre propre plateforme d'IA — construite, opérée et continuellement développée par nos soins, utilisée chaque jour sur des missions clients sous contrat : discovery, documentation, génération de runbooks, validation.`

`Cela change ce que vous pouvez attendre de nous, à deux égards. D'abord, la delivery augmentée par l'IA que vous achetez est celle que nous utilisons déjà nous-mêmes — pas une slide de capacités. Ensuite, quand nous vous conseillons sur les modèles opératoires de l'IA, le conseil vient de l'exploitation d'un tel modèle — y compris tout ce qui y est difficile.`

`Ce n'est pas un argumentaire produit. Luca est notre façon de travailler.`

**Link label:** `À propos de la plateforme Luca → lucaexpress.com` (external link to `https://www.lucaexpress.com`)

### About (`#about`)

#### FR

**Section heading:** `À propos de Gus IT`
**Sub-heading:** `Avec qui vous travaillerez`

**Founder narrative:**
`Gus IT est dirigée par son fondateur, Gustavo Assunção — ingénieur d'abord, consultant ensuite. Il apporte une décennie d'ingénierie de l'IA et une expertise approfondie de la stack Microsoft : Azure, AKS, Azure Local, Hyper-V et SCVMM. Son parcours de delivery comprend une mission de migration d'applications avec un OEM de premier plan et une résidence multi-sites Hyper-V & SCVMM livrée sous contrat partenaire pour un client final du secteur public américain (administration d'un État). Gus IT est membre du programme NVIDIA Inception et construit et exploite Luca, sa propre plateforme d'IA.`

`Quand vous contactez Gus IT, vous parlez à l'ingénieur qui livre le travail — pas à une couche commerciale.`

**Values (heading: `Ce en quoi nous croyons`):**
1. `Valider avant de construire.` — `Nous testons l'existant avant de concevoir la suite. Les hypothèses sont le composant le plus coûteux de tout parc informatique.`
2. `Concevoir avec le client.` — `Nos meilleurs designs portent les empreintes de nos clients. Un design qui résiste à la revue de vos ingénieurs vaut plus qu'un design qui n'a jamais été contesté.`
3. `Chaque heure laisse un artefact.` — `Designs, runbooks, plans de rollback, documentation — versionnés et remis. Un savoir qui part avec le consultant n'a jamais été livré.`
4. `Responsabilité nominative.` — `L'IA accélère notre travail, mais un ingénieur nommément désigné assume chaque décision et chaque action qui modifie l'état des systèmes.`

### Contact (`#contact`)

#### FR

**Section heading:** `Contact`
**Sub-heading:** `Parlons de votre infrastructure`
**Intro:** `Dites-nous ce que vous construisez, validez ou migrez — ou réservez directement un diagnostic de 30 minutes. Vous parlerez à l'ingénieur qui livrerait le travail.`

**Contact details:**
- Email line: `E-mail : gus@gusit.de` (mailto link)
- Phone note: `Téléphone : des lignes professionnelles dédiées pour l'Allemagne et les États-Unis sont en cours de mise en place et seront publiées ici prochainement.`
- Transparency line: `Gus IT LLC est une entité de droit américain (Floride) au service de clients de la région DACH, à distance et sur site.`

**Form heading:** `Écrivez-nous`

Form fields:
- Label: `Nom` (required) — placeholder: `Votre nom` — validation error: `Veuillez saisir votre nom.`
- Label: `E-mail` (required) — placeholder: `vous@entreprise.com` — validation error: `Veuillez saisir une adresse e-mail valide.`
- Label: `Entreprise (facultatif)` — placeholder: `Votre entreprise`
- Label: `Message` (required) — placeholder: `Que construisez-vous, validez-vous ou migrez-vous ?` — validation error: `Veuillez saisir un message.`
- Privacy notice (below form, before button): `En envoyant ce formulaire, vous acceptez que nous traitions vos données pour répondre à votre demande. Détails dans notre` + link `Politique de confidentialité (en anglais)` → `/privacy/`
- Submit button: `Envoyer le message`
- Submitting state: `Envoi en cours…`
- Success message: `Merci — votre message est en route. Nous répondons généralement sous un jour ouvré.`
- Error message: `Une erreur s'est produite et votre message n'a pas été envoyé. Veuillez réessayer, ou écrivez-nous directement à gus@gusit.de.`
- Required-field legend: `* Champ obligatoire`
- Generic validation fallback: `Veuillez remplir les champs obligatoires.`

---

## PAGE: `/work/` (FR mirror: `/fr/work/`)

### Page header

#### FR
- H1: `Références`
- Intro: `Trois histoires sur notre façon de livrer. Les noms de clients n'apparaissent qu'avec une autorisation écrite ; lorsque celle-ci est encore en attente, la mission est décrite de façon anonymisée — le travail, lui, est réel dans les deux cas.`

### Case study 1 — Residency

#### FR

**Title:** `Valider d'abord : une résidence multi-sites Hyper-V & SCVMM`
**Context line:** `Pour le client final d'un prestataire mondial de services IT — l'administration d'un État américain · livrée dans le cadre d'un contrat de résidence Dell`

**Body:**

`Les ingénieurs du client avaient déjà fait le plus dur : hôtes déployés, clusters de basculement constitués, fabric réseau construite entre deux sites. Ce qu'ils demandaient n'était pas une reconstruction — c'était une certitude. Était-ce bien construit ? Est-ce que cela tiendrait en exploitation ? Et à quoi devait ressembler la couche de management ?`

`Nous avons structuré la résidence autour de cette question. Les trois premières semaines ont été de la validation pure : configuration des hôtes, comportement des clusters, chemins de stockage et chemins réseau — testés méthodiquement, avec des constats documentés au fil de l'eau. Pas d'hypothèses héritées, pas de crédit accordé au « ça devrait aller ».`

`Sur cette fondation validée, nous avons conçu l'état cible SCVMM et l'avons déployé sur les deux sites, avant des sessions d'enablement pour que l'équipe du client exploite ce qui lui appartenait désormais.`

`Le moment pour lequel nous racontons cette histoire est arrivé à mi-parcours : l'équipe d'ingénierie du client a passé notre design d'état cible en revue et a contesté l'une de ses décisions centrales — où placer la frontière de responsabilité entre Network ATC et SCVMM pour la configuration réseau. Ils avaient raison d'insister. Nous avons révisé le design, et la version 1.1 porte la marque de leur revue : une répartition plus nette de qui gère quoi, validée ligne par ligne avec les personnes qui exploitent la plateforme.`

`Certains cabinets appelleraient cela une friction de périmètre. Nous y voyons la mission fonctionnant exactement comme prévu — nous concevons avec le client, pas contre lui. Un design qui résiste aux propres ingénieurs du client vaut plus qu'un design jamais contesté.`

`Ce qui est resté après notre départ : des rapports de validation, le design d'état cible révisé, la documentation de build, et une équipe rendue autonome dans l'exploitation de la plateforme. Chaque heure de la résidence a laissé un artefact.`

### Case study 2 — Migration methodology

#### FR

**Title:** `Une méthodologie de migration d'applications, industrialisée`
**Context line:** `Mission de migration d'applications en cours avec Dell · delivery B2B2B`

**Body:**

`Les migrations d'applications échouent rarement à cause de l'outillage. Elles échouent dans les interstices — entre la discovery et la planification, entre le runbook dans la tête de quelqu'un et celui exécuté à deux heures du matin, entre « on peut revenir en arrière » et un plan de rollback réel et testé.`

`Dans notre mission avec Dell, nous avons pris la méthodologie de migration en trois phases de Dell et nous l'avons industrialisée : pas un framework sur slides, mais une usine de migration gouvernée.`

`Comment fonctionne l'usine :`

- `**Des jalons de phase (phase gates).** Chaque phase se termine par un jalon aux critères d'entrée et de sortie définis. Rien n'avance sur la seule inertie.`
- `**Des runbooks générés — et des plans de rollback générés.** Pour chaque move group, l'usine produit le chemin aller et le chemin retour, sous une forme cohérente et révisable. Le plan de rollback n'est pas une pièce rapportée ; il est généré en même temps que le runbook, à chaque fois.`
- `**Un go/no-go humain.** Les agents IA préparent les éléments de décision — synthèse de discovery, cartographie des dépendances, contrôles de validation, documentation. C'est un humain qui prend chaque décision de jalon. Aucune étape de migration ne s'exécute sur la seule parole d'un agent.`
- `**Une traçabilité complète.** Chaque décision et chaque action est journalisée et attribuable : quoi, quand, par qui, sur quelle approbation.`

`Nous sommes volontairement prudents sur ce que cette page affirme. C'est une histoire de méthodologie et de capacité : l'usine est productisée au sein d'une mission Dell active, livrée en B2B2B aux clients de Dell. Nous publierons des résultats quand des migrations clients seront terminées — pas avant.`

`Si votre backlog de migration ressemble à une longue série de projets héroïques menés une seule fois, le modèle d'usine est l'alternative : une constance industrielle dans les artefacts, un jugement humain à chaque jalon.`

### Case study 3 — Delivery model

#### FR

**Title:** `La delivery agentique, sous supervision d'ingénieurs`
**Context line:** `Notre modèle de delivery · comment se déroule chaque mission Gus IT`

**Body:**

`La première question qu'un acheteur sérieux pose sur la delivery pilotée par l'IA est la bonne : est-il sûr de laisser des agents IA s'approcher d'une infrastructure de production ?`

`Notre réponse est une division du travail stricte, appliquée à chaque mission.`

`Ce que font nos agents IA : l'ingénierie répétitive qui consume du temps senior et favorise l'erreur humaine. Ils mènent la discovery sur des parcs entiers, synthétisent les configurations en documentation, génèrent runbooks et plans de rollback, exécutent les contrôles de validation et tiennent le dossier à jour — avec constance, à toute heure, sans fatigue.`

`Ce qu'ils ne font jamais : approuver un design. Toucher un système de production sans supervision. Prendre une décision go/no-go.`

`Chaque mission a un ingénieur senior nommément désigné, qui assume l'approbation du design et chaque action modifiant l'état des systèmes. Notre automatisation est conçue pour le dry-run : elle peut être répétée sans toucher aux systèmes réels, et chaque phase porte un plan de rollback avant de porter un changement. Chaque action — humaine ou agentique — est journalisée et attribuable : vous savez toujours qui a décidé et qui a agi.`

`Pourquoi cela compte pour vous : vous obtenez la constance d'une usine dans les artefacts — une documentation réellement complète, des runbooks réellement à jour — sans abandonner le jugement à une machine. L'ingénieur ne corrige pas les devoirs de l'IA après coup ; l'ingénieur est le jalon par lequel le travail doit passer.`

`Ce n'est pas un concept de laboratoire. C'est ainsi que nous livrons aujourd'hui nos missions sous contrat, y compris dans le cadre de contrats partenaires et channel.`

`Si vous pesez la place de l'IA dans votre chaîne de delivery — ou la façon de la gouverner une fois en place —, apportez vos questions les plus dures au diagnostic. Ce modèle est fait pour être interrogé.`

### Work page — closing CTA

#### FR
- Text: `Cela ressemble à votre situation ?`
- Button: `Réserver un diagnostic de 30 minutes` → `/fr/#contact`

---

## PAGE: 404

#### FR
- H1: `Page introuvable.`
- Body: `La page que vous cherchez n'existe pas ou a été déplacée. Le plus simple : repartir de la page d'accueil — ou nous écrire à gus@gusit.de pour nous dire ce que vous cherchiez.`
- Button primary: `Aller à la page d'accueil` → `/fr/`
- Button secondary: `Voir nos références` → `/fr/work/`

---

## SEO METADATA

> Note: `og:site_name` = `Gus IT`; `og:locale` = `fr_FR` with reciprocal `og:locale:alternate` + hreflang per the engineering plan. Anchors and `/work/` path segment stay English. Front-page metadata follows CHANGELOG v1.1 (no partner names).

### `/fr/` (FR home)
- Meta title: `Gus IT — Le conseil IT qui tourne sur sa propre IA`
- Meta description: `Conseil en infrastructure Azure et hybride, livré sur notre propre plateforme d'IA. Membre NVIDIA Inception. Missions menées via le channel entreprise.`
- OG title: `Le conseil IT qui tourne sur sa propre IA.`
- OG description: `Conseil en infrastructure Azure et hybride, livré sur notre propre plateforme d'IA. Membre NVIDIA Inception. Missions menées via le channel entreprise.`

### `/fr/work/` (FR)
- Meta title: `Références & études de cas — Gus IT`
- Meta description: `Notre façon de livrer : résidence multi-sites Hyper-V & SCVMM, méthodologie de migration industrialisée, delivery IA supervisée par des ingénieurs.`
- OG title: `Références — Gus IT`
- OG description: `Résidence multi-sites Hyper-V & SCVMM, méthodologie de migration industrialisée, delivery IA supervisée par des ingénieurs.`

### 404 (FR)
- Meta title: `Page introuvable — Gus IT`
- Meta description: none required — set `robots: noindex` on the 404 page.

---

— Fin du copy deck FR. Jonas Weber (mkt-content-jonas), Task #279.
