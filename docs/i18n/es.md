# COPY DECK i18n — gusit.de — ESPAÑOL (ES)

**Version:** 1.0 · **Date:** 2026-06-12
**Author:** Jonas Weber (mkt-content-jonas) · Task #279 · Review: Marta Keller (mkt-vp-marta)
**Source:** `docs/copy-deck-2026-06-11.md` — EN strings translated; DE used as register reference (formal usted).
**Scope:** marketing surface only (GLOBAL, `/`, `/work/`, 404, SEO home + work + 404). Legal pages (Impressum, Privacy Policy) remain DE/EN pending counsel — ES pages link to the EN privacy page at `/privacy/`.
**Conventions:** URL anchors stay English (`#services`, `#how-we-work`, `#luca-ai`, `#about`, `#contact`); locale path prefix `/es/` mirrors `/de/`. Proper nouns untranslated per deck compliance rules. Front page follows deck **CHANGELOG v1.1** (partner-name discreet: Dell named ONLY on `/work/`; Unisys not named anywhere; "leading OEM" / channel phrasing on `/`).

---

## GLOBAL: Shared UI strings

### Navigation (header, in order)

#### ES
- Servicios → `/es/#services`
- Proyectos → `/es/work/`
- Luca AI → `/es/#luca-ai`
- Quiénes somos → `/es/#about`
- Contacto → `/es/#contact`

### Language toggle

#### ES
- Label (entry pointing to the ES page, shown on non-ES pages): `Español`
- aria-label: `Leer esta página en español`
- On ES pages, the entry back to English reuses the deck's EN strings — Label: `English` · aria-label: `Read this page in English`

### Skip link

#### ES
`Saltar al contenido principal`

### Footer

#### ES
- Tagline line: `Gus IT — consultoría TI que funciona con su propia IA.`
- Link column 1 (Sitio): Servicios · Proyectos · Luca AI · Quiénes somos · Contacto
- Link column 2 (Legal): Impressum (`/impressum/`) · Política de privacidad (`/privacy/` — página servida en inglés)
- Trust line (plain text, no logo until badge approval lands): `NVIDIA Inception Member`
- Legal-entity line: `Gus IT LLC — sociedad de responsabilidad limitada constituida en Florida (EE. UU.), que atiende a clientes de la región DACH en remoto y de forma presencial.`
- Contact line: `gus@gusit.de`
- Copyright: `© 2026 Gus IT LLC. Todos los derechos reservados.`

---

## PAGE: `/` (ES mirror: `/es/`)

### Hero

#### ES
- H1: `Consultoría TI que funciona con su propia IA.`
- Subhead: `Una década de ingeniería de IA y una profunda especialización en Microsoft Azure — de un equipo que construye y opera su propia plataforma de IA. Miembro del programa NVIDIA Inception. Proyectos entregados a través del canal enterprise.`
- CTA primary: `Reservar una evaluación de 30 minutos` → `/es/#contact`
- CTA secondary: `Ver nuestros proyectos` → `/es/work/`

### Proof-point bar (4 chips, directly under hero)

#### ES
1. `NVIDIA Inception Member`
2. `Migración de aplicaciones — OEM líder`
3. `Microsoft Azure · AKS · Azure Local`
4. `Una década de ingeniería de IA`

### Services (`#services`)

#### ES

**Section heading:** `Qué hacemos`
**Section intro:** `Cuatro ofertas. Cada una respaldada por trabajo entregado — no por una diapositiva de capacidades.`

---

**Offer 1 — Residencias de infraestructura potenciadas por IA**

Promise: `Un ingeniero principal sénior integrado en su equipo durante semanas definidas — respaldado por una fuerza de trabajo de IA, para que cada hora produzca artefactos duraderos.`

What's included:
- `Ingeniería sénior in situ o en remoto, en bloques semanales definidos`
- `Agentes de IA producen documentación, runbooks e informes de validación en paralelo al trabajo`
- `Cada artefacto, versionado y entregado — el conocimiento se queda con usted`
- `Alcance flexible: virtualización, plataformas híbridas y migración`

Proof point: `Entregado: una residencia multisitio de Hyper-V y SCVMM para un cliente final de la administración de un estado de EE. UU., bajo un contrato de residencia con un OEM líder.`

---

**Offer 2 — Ingeniería de plataformas Azure e híbridas (Design–Build)**

Promise: `Diseño, construcción, reconstrucción y migración de plataformas de virtualización Microsoft e híbridas, con alcance cerrado — con un resultado definido, no consultoría sin final.`

What's included:
- `Azure Local, clústeres de conmutación por error de Hyper-V, SCVMM, Network ATC`
- `Diseños de estado objetivo revisados con sus ingenieros antes de construir nada`
- `Automatización segura en modo dry-run, con un plan de rollback para cada fase`
- `Estándares de construcción secure-by-design en cada artefacto`

Proof point: `Entregado: un diseño de clúster de doble sitio validado por el cliente, revisado durante el propio proyecto tras la revisión de su equipo de ingeniería.`

---

**Offer 3 — Application Migration Factory**

Promise: `La migración de aplicaciones como una fábrica gobernada — no como un proyecto heroico e irrepetible.`

What's included:
- `Construida sobre la metodología de migración en tres fases de un OEM líder`
- `Puertas de fase con decisión humana de go/no-go en cada transición`
- `Runbooks generados y planes de rollback generados para cada grupo de migración (move group)`
- `Trazabilidad completa: qué se hizo, cuándo, quién y con qué aprobación`

Proof point: `Productizada dentro de un proyecto activo de migración de aplicaciones con un OEM líder.`

---

**Offer 4 — Consultoría de modelo operativo de IA («AI Workforce»)**

Promise: `Operamos nuestra propia consultora con una fuerza de trabajo de IA bajo supervisión de ingenieros principales — y montamos ese mismo modelo operativo dentro de su organización de delivery.`

What's included:
- `Evaluación de dónde se sostiene el delivery agéntico en su organización — y dónde no`
- `Diseño del modelo operativo: roles, puertas de aprobación, responsabilidad sobre cada acción de la IA`
- `Práctica, no teoría: el modelo que vendemos es el modelo con el que trabajamos en proyectos contratados`
- `Gobernanza ante todo: cada acción de agente es atribuible y cada puerta tiene un responsable humano`

Proof point: `Nuestro propio sistema de delivery funciona sobre la plataforma Luca — en uso en proyectos reales y contratados.`

### How we work (`#how-we-work`)

#### ES

**Section heading:** `Cómo trabajamos`

**Step 1 — Evaluación**
`Todo empieza con una llamada de 30 minutos — sin diapositivas, solo su entorno y su objetivo. Si encaja, continuamos con una evaluación o un design sprint de alcance cerrado (de dos a cuatro semanas) que dimensiona bien el trabajo. Usted recibe una imagen de su entorno lista para decidir, no un documento comercial.`

**Step 2 — Colaboración**
`Elija el modelo que mejor encaje: una residencia (bloques de varias semanas de horas sénior), un design–build de alcance cerrado con un statement of work definido, o un acompañamiento continuo (advisory retainer). También entregamos bajo contratos de partner y de canal — nuestros dos proyectos entregados se ejecutaron bajo contratos prime, y nos sentimos cómodos siendo el motor detrás del suyo.`

**Step 3 — Operación**
`La entrega del conocimiento es el objetivo, no una nota al pie. Diseños, runbooks, planes de rollback y documentación quedan versionados y son suyos. Capacitamos a su equipo para operar la plataforma — y seguimos disponibles mediante retainer si nos quiere cerca.`

**Engagement-model strip (microcopy under the steps):**
`Modelos de colaboración: Residencia · Evaluación / design sprint de alcance cerrado · Design–build · Advisory retainer · Entrega vía partners y canal`

### Luca AI differentiator (`#luca-ai`)

#### ES

**Section heading:** `Trabajamos sobre la IA que construimos`

**Body:**
`Muchas consultoras hablan de IA. Nosotros operamos una. Luca es nuestra propia plataforma de IA — construida, operada y en continua evolución por nuestro equipo, y en uso diario en trabajo contratado con clientes: discovery, documentación, generación de runbooks, validación.`

`Eso cambia lo que puede esperar de nosotros en dos sentidos. Primero: el delivery potenciado por IA que usted compra es el que ya usamos nosotros mismos — no una diapositiva de capacidades. Segundo: cuando asesoramos sobre modelos operativos de IA, el consejo procede de operar uno — incluido todo lo que tiene de difícil.`

`Esto no es un discurso de venta de producto. Luca es nuestra forma de trabajar.`

**Link label:** `Sobre la plataforma Luca → lucaexpress.com` (external link to `https://www.lucaexpress.com`)

### About (`#about`)

#### ES

**Section heading:** `Sobre Gus IT`
**Sub-heading:** `Con quién trabajará`

**Founder narrative:**
`Gus IT está dirigida por su fundador, Gustavo Assunção — ingeniero primero, consultor después. Aporta una década de ingeniería de IA y una profunda especialización en el stack de Microsoft: Azure, AKS, Azure Local, Hyper-V y SCVMM. Su historial de entrega incluye un proyecto de migración de aplicaciones con un OEM líder y una residencia multisitio de Hyper-V y SCVMM para un cliente final de la administración de un estado de EE. UU., entregada bajo contrato de partner. Gus IT es miembro del programa NVIDIA Inception y construye y opera Luca, su propia plataforma de IA.`

`Cuando contacta con Gus IT, habla con el ingeniero que entrega el trabajo — no con una capa comercial.`

**Values (heading: `En qué creemos`):**
1. `Validar antes de construir.` — `Probamos lo que existe antes de diseñar lo que viene. Las suposiciones son el componente más caro de cualquier entorno.`
2. `Diseñar con el cliente.` — `Nuestros mejores diseños llevan las huellas de nuestros clientes. Un diseño que supera la revisión de sus ingenieros vale más que uno que nunca fue cuestionado.`
3. `Cada hora deja un artefacto.` — `Diseños, runbooks, planes de rollback, documentación — versionados y entregados. El conocimiento que se va con el consultor nunca fue entregado.`
4. `Responsabilidad con nombre y apellidos.` — `La IA acelera nuestro trabajo, pero un ingeniero con nombre y apellidos responde de cada decisión y de cada acción que cambia el estado de los sistemas.`

### Contact (`#contact`)

#### ES

**Section heading:** `Contacto`
**Sub-heading:** `Hablemos de su infraestructura`
**Intro:** `Cuéntenos qué está construyendo, validando o migrando — o reserve directamente una evaluación de 30 minutos. Hablará con el ingeniero que entregaría el trabajo.`

**Contact details:**
- Email line: `Correo electrónico: gus@gusit.de` (mailto link)
- Phone note: `Teléfono: estamos habilitando líneas de empresa dedicadas para Alemania y EE. UU.; las publicaremos aquí en breve.`
- Transparency line: `Gus IT LLC es una entidad legal estadounidense (Florida) que atiende a clientes de la región DACH en remoto y de forma presencial.`

**Form heading:** `Escríbanos`

Form fields:
- Label: `Nombre` (required) — placeholder: `Su nombre` — validation error: `Por favor, indique su nombre.`
- Label: `Correo electrónico` (required) — placeholder: `usted@empresa.com` — validation error: `Por favor, indique una dirección de correo válida.`
- Label: `Empresa (opcional)` — placeholder: `Su empresa`
- Label: `Mensaje` (required) — placeholder: `¿Qué está construyendo, validando o migrando?` — validation error: `Por favor, escriba un mensaje.`
- Privacy notice (below form, before button): `Al enviar este formulario, acepta que tratemos sus datos para gestionar su consulta. Más detalles en nuestra` + link `Política de privacidad (en inglés)` → `/privacy/`
- Submit button: `Enviar mensaje`
- Submitting state: `Enviando…`
- Success message: `Gracias — su mensaje está en camino. Normalmente respondemos en un día laborable.`
- Error message: `Algo ha fallado y su mensaje no se ha enviado. Inténtelo de nuevo o escríbanos directamente a gus@gusit.de.`
- Required-field legend: `* Campo obligatorio`
- Generic validation fallback: `Por favor, complete los campos obligatorios.`

---

## PAGE: `/work/` (ES mirror: `/es/work/`)

### Page header

#### ES
- H1: `Proyectos destacados`
- Intro: `Tres historias sobre cómo entregamos. Los nombres de clientes aparecen solo con permiso escrito; cuando la autorización está pendiente, el proyecto se describe de forma anónima — el trabajo es real en ambos casos.`

### Case study 1 — Residency

#### ES

**Title:** `Validar primero: una residencia multisitio de Hyper-V y SCVMM`
**Context line:** `Para el cliente final — la administración de un estado de EE. UU. — de una firma global de servicios TI · entregada bajo un contrato de residencia de Dell`

**Body:**

`Los ingenieros del cliente ya habían hecho el trabajo pesado: hosts desplegados, clústeres de conmutación por error formados, la red construida entre dos sitios. Lo que pedían no era una reconstrucción — era certeza. ¿Se había construido bien? ¿Aguantaría en operación? ¿Y qué aspecto debía tener la capa de gestión?`

`Estructuramos la residencia en torno a esa pregunta. Las tres primeras semanas fueron validación pura: configuración de hosts, comportamiento de los clústeres, rutas de almacenamiento y de red — probadas metódicamente, documentando los hallazgos sobre la marcha. Sin suposiciones heredadas, sin dar por bueno el «debería estar bien».`

`Sobre esa base validada diseñamos el estado objetivo de SCVMM y lo construimos en ambos sitios, seguido de sesiones de capacitación para que el equipo del cliente pudiera operar lo que ahora era suyo.`

`El momento por el que contamos esta historia llegó a mitad del proyecto: el equipo de ingeniería del cliente revisó nuestro diseño de estado objetivo y cuestionó una de sus decisiones centrales — dónde debía situarse la frontera de responsabilidad entre Network ATC y SCVMM para la configuración de red. Hicieron bien en insistir. Revisamos el diseño, y la versión 1.1 lleva su revisión: un reparto más limpio de quién gestiona qué, acordado línea por línea con las personas que operan la plataforma.`

`Algunas consultoras lo llamarían fricción de alcance. Nosotros lo llamamos el proyecto funcionando tal y como se diseñó — diseñamos con el cliente, no a sus espaldas. Un diseño que supera a los propios ingenieros del cliente vale más que uno que nunca fue cuestionado.`

`Lo que quedó cuando nos fuimos: informes de validación, el diseño de estado objetivo revisado, documentación de construcción y un equipo capacitado para operar la plataforma. Cada hora de la residencia dejó un artefacto.`

### Case study 2 — Migration methodology

#### ES

**Title:** `Una metodología de migración de aplicaciones, industrializada`
**Context line:** `Proyecto activo de migración de aplicaciones con Dell · entrega B2B2B`

**Body:**

`Las migraciones de aplicaciones rara vez fracasan por las herramientas. Fracasan en los huecos — entre el discovery y la planificación, entre el runbook en la cabeza de alguien y el que se ejecuta a las dos de la madrugada, entre «podemos volver atrás» y un plan de rollback real y probado.`

`En nuestro proyecto con Dell tomamos la metodología de migración en tres fases de Dell y la industrializamos: no un marco de diapositivas, sino una fábrica de migración gobernada.`

`Así funciona la fábrica:`

- `**Puertas de fase.** Cada fase termina en una puerta con criterios de entrada y salida definidos. Nada avanza por inercia.`
- `**Runbooks generados — y planes de rollback generados.** Para cada grupo de migración, la fábrica produce el camino de ida y el de vuelta, en un formato consistente y revisable. El plan de rollback no es un añadido posterior; se genera junto con el runbook, todas las veces.`
- `**Go/no-go humano.** Los agentes de IA preparan la evidencia — síntesis del discovery, mapa de dependencias, comprobaciones de validación, documentación. Cada decisión de puerta la toma una persona. Ningún paso de migración se ejecuta porque lo diga un agente.`
- `**Trazabilidad completa.** Cada decisión y cada acción queda registrada y es atribuible: qué se hizo, cuándo, quién y con qué aprobación.`

`Somos deliberadamente prudentes con lo que esta página afirma. Esta es una historia de metodología y capacidad: la fábrica está productizada dentro de un proyecto activo con Dell y se entrega en modelo B2B2B a los clientes de Dell. Publicaremos resultados cuando las migraciones de los clientes terminen — no antes.`

`Si su backlog de migración parece una larga fila de proyectos heroicos e irrepetibles, el modelo de fábrica es la alternativa: consistencia industrial en los artefactos y juicio humano en cada puerta.`

### Case study 3 — Delivery model

#### ES

**Title:** `Delivery agéntico, supervisado por ingenieros`
**Context line:** `Nuestro modelo de entrega · así funciona cada proyecto de Gus IT`

**Body:**

`La primera pregunta que un comprador serio hace sobre el delivery impulsado por IA es la correcta: ¿es seguro dejar que agentes de IA se acerquen a infraestructura productiva?`

`Nuestra respuesta es una división del trabajo estricta, aplicada en cada proyecto.`

`Qué hacen nuestros agentes de IA: la ingeniería repetitiva que consume tiempo sénior e invita al error humano. Ejecutan discovery sobre entornos completos, sintetizan configuraciones en documentación, generan runbooks y planes de rollback, ejecutan comprobaciones de validación y mantienen el expediente al día — con consistencia, a cualquier hora, sin fatiga.`

`Qué no hacen nunca: aprobar un diseño. Tocar un sistema productivo sin supervisión. Tomar una decisión de go/no-go.`

`Cada proyecto tiene un ingeniero sénior con nombre y apellidos que responde de la aprobación del diseño y de cada acción que cambia el estado de los sistemas. Nuestra automatización está construida para el dry-run: puede ensayarse sin tocar sistemas reales, y cada fase lleva un plan de rollback antes de llevar un cambio. Cada acción — humana o de agente — queda registrada y es atribuible: usted siempre sabe quién decidió y quién actuó.`

`Por qué le importa: obtiene la consistencia de una fábrica en los artefactos — documentación realmente completa, runbooks realmente actualizados — sin entregar el juicio a una máquina. El ingeniero no corrige los deberes de la IA a posteriori; el ingeniero es la puerta por la que pasa el trabajo.`

`Esto no es un concepto de laboratorio. Es como entregamos hoy nuestro trabajo contratado, incluidos los proyectos bajo contratos de partner y de canal.`

`Si está sopesando si la IA tiene sitio en su cadena de delivery — o cómo gobernarla una vez dentro —, traiga sus preguntas más difíciles a la llamada de evaluación. Este modelo está construido para ser interrogado.`

### Work page — closing CTA

#### ES
- Text: `¿Le suena a su situación?`
- Button: `Reservar una evaluación de 30 minutos` → `/es/#contact`

---

## PAGE: 404

#### ES
- H1: `Página no encontrada.`
- Body: `La página que busca no existe o se ha movido. Pruebe desde la página de inicio — o escríbanos a gus@gusit.de contándonos qué buscaba.`
- Button primary: `Ir a la página de inicio` → `/es/`
- Button secondary: `Ver nuestros proyectos` → `/es/work/`

---

## SEO METADATA

> Note: `og:site_name` = `Gus IT`; `og:locale` = `es_ES` with reciprocal `og:locale:alternate` + hreflang per the engineering plan. Anchors and `/work/` path segment stay English. Front-page metadata follows CHANGELOG v1.1 (no partner names).

### `/es/` (ES home)
- Meta title: `Gus IT — Consultoría TI que funciona con su propia IA`
- Meta description: `Consultoría de infraestructura Azure e híbrida sobre nuestra propia plataforma de IA. Miembro de NVIDIA Inception. Proyectos por canal enterprise.`
- OG title: `Consultoría TI que funciona con su propia IA.`
- OG description: `Consultoría de infraestructura Azure e híbrida sobre nuestra propia plataforma de IA. Miembro de NVIDIA Inception. Proyectos por canal enterprise.`

### `/es/work/` (ES)
- Meta title: `Proyectos y casos de estudio — Gus IT`
- Meta description: `Cómo entregamos: una residencia multisitio de Hyper-V y SCVMM, una metodología de migración industrializada y delivery de IA supervisado por ingenieros.`
- OG title: `Proyectos — Gus IT`
- OG description: `Residencia multisitio de Hyper-V y SCVMM, metodología de migración industrializada y delivery de IA supervisado por ingenieros.`

### 404 (ES)
- Meta title: `Página no encontrada — Gus IT`
- Meta description: none required — set `robots: noindex` on the 404 page.

---

— Fin del copy deck ES. Jonas Weber (mkt-content-jonas), Task #279.
