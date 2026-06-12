# COPY DECK i18n — gusit.de — PORTUGUÊS (PT)

**Version:** 1.0 · **Date:** 2026-06-12
**Author:** Jonas Weber (mkt-content-jonas) · Task #279 · Review: Marta Keller (mkt-vp-marta)
**Source:** `docs/copy-deck-2026-06-11.md` — EN strings translated; DE used as register reference. Register: European-leaning neutral, formal B2B, impersonal constructions preferred (no "tu"; "você" avoided where possible).
**Scope:** marketing surface only (GLOBAL, `/`, `/work/`, 404, SEO home + work + 404). Legal pages (Impressum, Privacy Policy) remain DE/EN pending counsel — PT pages link to the EN privacy page at `/privacy/`.
**Conventions:** URL anchors stay English (`#services`, `#how-we-work`, `#luca-ai`, `#about`, `#contact`); locale path prefix `/pt/` mirrors `/de/`. Proper nouns untranslated per deck compliance rules. Front page follows deck **CHANGELOG v1.1** (partner-name discreet: Dell named ONLY on `/work/`; Unisys not named anywhere; "leading OEM" / channel phrasing on `/`).

---

## GLOBAL: Shared UI strings

### Navigation (header, in order)

#### PT
- Serviços → `/pt/#services`
- Projetos → `/pt/work/`
- Luca AI → `/pt/#luca-ai`
- Sobre nós → `/pt/#about`
- Contacto → `/pt/#contact`

### Language toggle

#### PT
- Label (entry pointing to the PT page, shown on non-PT pages): `Português`
- aria-label: `Ler esta página em português`
- On PT pages, the entry back to English reuses the deck's EN strings — Label: `English` · aria-label: `Read this page in English`

### Skip link

#### PT
`Saltar para o conteúdo principal`

### Footer

#### PT
- Tagline line: `Gus IT — consultoria de TI que funciona com IA própria.`
- Link column 1 (Site): Serviços · Projetos · Luca AI · Sobre nós · Contacto
- Link column 2 (Legal): Impressum (`/impressum/`) · Política de privacidade (`/privacy/` — página servida em inglês)
- Trust line (plain text, no logo until badge approval lands): `NVIDIA Inception Member`
- Legal-entity line: `Gus IT LLC — sociedade de responsabilidade limitada constituída na Flórida (EUA), ao serviço de clientes da região DACH, de forma remota e no local.`
- Contact line: `gus@gusit.de`
- Copyright: `© 2026 Gus IT LLC. Todos os direitos reservados.`

---

## PAGE: `/` (PT mirror: `/pt/`)

### Hero

#### PT
- H1: `Consultoria de TI que funciona com IA própria.`
- Subhead: `Uma década de engenharia de IA e profunda especialização em Microsoft Azure — de uma equipa que constrói e opera a sua própria plataforma de IA. Membro do programa NVIDIA Inception. Projetos entregues através do canal enterprise.`
- CTA primary: `Marcar uma avaliação de 30 minutos` → `/pt/#contact`
- CTA secondary: `Ver os nossos projetos` → `/pt/work/`

### Proof-point bar (4 chips, directly under hero)

#### PT
1. `NVIDIA Inception Member`
2. `Migração de aplicações — OEM líder`
3. `Microsoft Azure · AKS · Azure Local`
4. `Uma década de engenharia de IA`

### Services (`#services`)

#### PT

**Section heading:** `O que fazemos`
**Section intro:** `Quatro ofertas. Cada uma sustentada por trabalho entregue — não por slides de capacidades.`

---

**Offer 1 — Residências de infraestrutura potenciadas por IA**

Promise: `Um engenheiro principal sénior integrado na sua equipa durante semanas definidas — apoiado por uma força de trabalho de IA, para que cada hora produza artefactos duradouros.`

What's included:
- `Engenharia sénior no local ou remota, em blocos semanais definidos`
- `Agentes de IA produzem documentação, runbooks e relatórios de validação em paralelo com o trabalho`
- `Todos os artefactos versionados e entregues — o conhecimento fica consigo`
- `Âmbito flexível: virtualização, plataformas híbridas e migração`

Proof point: `Entregue: uma residência multi-site de Hyper-V e SCVMM para um cliente final da administração de um estado dos EUA, ao abrigo de um contrato de residência com um OEM líder.`

---

**Offer 2 — Engenharia de plataformas Azure e híbridas (Design–Build)**

Promise: `Desenho, construção, reconstrução e migração de plataformas de virtualização Microsoft e híbridas, com âmbito fechado — com um resultado definido, não consultoria sem fim.`

What's included:
- `Azure Local, clusters de failover Hyper-V, SCVMM, Network ATC`
- `Desenhos de estado-alvo revistos com os seus engenheiros antes de qualquer construção`
- `Automatização segura em dry-run, com plano de rollback para cada fase`
- `Padrões de construção secure-by-design em todos os artefactos`

Proof point: `Entregue: um desenho de cluster em dois sites validado pelo cliente, revisto durante o próprio projeto após a revisão da equipa de engenharia do cliente.`

---

**Offer 3 — Application Migration Factory**

Promise: `Migração de aplicações como uma fábrica governada — não como um projeto heroico e irrepetível.`

What's included:
- `Assente na metodologia de migração em três fases de um OEM líder`
- `Gates de fase com decisão humana de go/no-go em cada transição`
- `Runbooks gerados e planos de rollback gerados para cada grupo de migração (move group)`
- `Rastreabilidade total: o que foi feito, quando, por quem e com que aprovação`

Proof point: `Produtizada no âmbito de um projeto ativo de migração de aplicações com um OEM líder.`

---

**Offer 4 — Consultoria de modelo operativo de IA («AI Workforce»)**

Promise: `Gerimos a nossa própria consultora com uma força de trabalho de IA sob supervisão de engenheiros principais — e implementamos o mesmo modelo operativo na sua organização de delivery.`

What's included:
- `Avaliação de onde o delivery agêntico se sustenta na sua organização — e onde não se sustenta`
- `Desenho do modelo operativo: papéis, gates de aprovação, responsabilidade por cada ação da IA`
- `Prática, não teoria: o modelo que vendemos é o modelo com que trabalhamos em projetos contratados`
- `Governação primeiro: cada ação de agente é atribuível e cada gate tem um responsável humano`

Proof point: `O nosso próprio sistema de delivery funciona sobre a plataforma Luca — em uso em projetos reais e contratados.`

### How we work (`#how-we-work`)

#### PT

**Section heading:** `Como trabalhamos`

**Step 1 — Avaliação**
`Tudo começa com uma conversa de 30 minutos — sem slides, apenas o seu ambiente e o seu objetivo. Se fizer sentido, segue-se uma avaliação ou um design sprint de âmbito fechado (duas a quatro semanas) que dimensiona o trabalho corretamente. O resultado é uma imagem do seu parque pronta para a decisão, não um documento de vendas.`

**Step 2 — Colaboração**
`Escolha o modelo que melhor se adequa: uma residência (blocos de várias semanas de horas sénior), um design–build de âmbito fechado com statement of work definido, ou um acompanhamento contínuo (advisory retainer). Também entregamos ao abrigo de contratos de parceiros e de canal — os nossos dois projetos entregues decorreram sob contratos prime, e estamos confortáveis em ser o motor por detrás do seu.`

**Step 3 — Operação**
`A passagem de conhecimento é o objetivo, não uma nota de rodapé. Desenhos, runbooks, planos de rollback e documentação ficam versionados e são seus. Capacitamos a sua equipa para operar a plataforma — e ficamos disponíveis em regime de retainer, se assim o desejar.`

**Engagement-model strip (microcopy under the steps):**
`Modelos de colaboração: Residência · Avaliação / design sprint de âmbito fechado · Design–build · Advisory retainer · Entrega via parceiros e canal`

### Luca AI differentiator (`#luca-ai`)

#### PT

**Section heading:** `Trabalhamos sobre a IA que construímos`

**Body:**
`Muitas consultoras falam de IA. Nós operamos uma. Luca é a nossa própria plataforma de IA — construída, operada e continuamente desenvolvida por nós, em uso diário em trabalho contratado com clientes: discovery, documentação, geração de runbooks, validação.`

`Isso muda o que pode esperar de nós em dois sentidos. Primeiro: o delivery potenciado por IA que está a comprar é o que nós próprios já usamos — não um slide de capacidades. Segundo: quando aconselhamos sobre modelos operativos de IA, o conselho vem de operar um — incluindo tudo o que isso tem de difícil.`

`Isto não é um discurso de venda de produto. Luca é a nossa forma de trabalhar.`

**Link label:** `Sobre a plataforma Luca → lucaexpress.com` (external link to `https://www.lucaexpress.com`)

### About (`#about`)

#### PT

**Section heading:** `Sobre a Gus IT`
**Sub-heading:** `Com quem vai trabalhar`

**Founder narrative:**
`A Gus IT é liderada pelo seu fundador, Gustavo Assunção — engenheiro primeiro, consultor depois. Traz uma década de engenharia de IA e profunda especialização na stack Microsoft: Azure, AKS, Azure Local, Hyper-V e SCVMM. O seu historial de entrega inclui um projeto de migração de aplicações com um OEM líder e uma residência multi-site de Hyper-V e SCVMM para um cliente final da administração de um estado dos EUA, entregue ao abrigo de um contrato de parceiro. A Gus IT é membro do programa NVIDIA Inception e constrói e opera o Luca, a sua própria plataforma de IA.`

`Quando contacta a Gus IT, fala com o engenheiro que entrega o trabalho — não com uma camada comercial.`

**Values (heading: `Em que acreditamos`):**
1. `Validar antes de construir.` — `Testamos o que existe antes de desenhar o que vem a seguir. As suposições são o componente mais caro de qualquer ambiente.`
2. `Fazer engenharia com o cliente.` — `Os nossos melhores desenhos têm as impressões digitais dos nossos clientes. Um desenho que sobrevive à revisão dos seus engenheiros vale mais do que um que nunca foi posto em causa.`
3. `Cada hora deixa um artefacto.` — `Desenhos, runbooks, planos de rollback, documentação — versionados e entregues. Conhecimento que parte com o consultor nunca foi entregue.`
4. `Responsabilidade com nome.` — `A IA acelera o nosso trabalho, mas é um engenheiro com nome que responde por cada decisão e por cada ação que altera o estado dos sistemas.`

### Contact (`#contact`)

#### PT

**Section heading:** `Contacto`
**Sub-heading:** `Falemos sobre a sua infraestrutura`
**Intro:** `Conte-nos o que está a construir, a validar ou a migrar — ou marque diretamente uma avaliação de 30 minutos. Vai falar com o engenheiro que entregaria o trabalho.`

**Contact details:**
- Email line: `E-mail: gus@gusit.de` (mailto link)
- Phone note: `Telefone: estão a ser criadas linhas empresariais dedicadas para a Alemanha e os EUA, que serão publicadas aqui em breve.`
- Transparency line: `A Gus IT LLC é uma entidade legal norte-americana (Flórida) ao serviço de clientes da região DACH, de forma remota e no local.`

**Form heading:** `Escreva-nos`

Form fields:
- Label: `Nome` (required) — placeholder: `O seu nome` — validation error: `Por favor, indique o seu nome.`
- Label: `E-mail` (required) — placeholder: `nome@empresa.com` — validation error: `Por favor, indique um endereço de e-mail válido.`
- Label: `Empresa (opcional)` — placeholder: `A sua empresa`
- Label: `Mensagem` (required) — placeholder: `O que está a construir, a validar ou a migrar?` — validation error: `Por favor, escreva uma mensagem.`
- Privacy notice (below form, before button): `Ao enviar este formulário, concorda que tratemos os seus dados para dar resposta ao seu pedido. Detalhes na nossa` + link `Política de privacidade (em inglês)` → `/privacy/`
- Submit button: `Enviar mensagem`
- Submitting state: `A enviar…`
- Success message: `Obrigado — a sua mensagem está a caminho. Normalmente respondemos no prazo de um dia útil.`
- Error message: `Algo correu mal e a sua mensagem não foi enviada. Tente novamente ou escreva-nos diretamente para gus@gusit.de.`
- Required-field legend: `* Campo obrigatório`
- Generic validation fallback: `Por favor, preencha os campos obrigatórios.`

---

## PAGE: `/work/` (PT mirror: `/pt/work/`)

### Page header

#### PT
- H1: `Projetos selecionados`
- Intro: `Três histórias sobre a forma como entregamos. Os nomes dos clientes aparecem apenas com autorização escrita; quando essa autorização está pendente, o projeto é descrito de forma anónima — o trabalho é real em qualquer dos casos.`

### Case study 1 — Residency

#### PT

**Title:** `Validar primeiro: uma residência multi-site de Hyper-V e SCVMM`
**Context line:** `Para o cliente final — a administração de um estado dos EUA — de uma empresa global de serviços de TI · entregue ao abrigo de um contrato de residência da Dell`

**Body:**

`Os engenheiros do cliente já tinham feito o trabalho pesado: hosts implementados, clusters de failover formados, a malha de rede construída entre dois sites. O que pediram não foi uma reconstrução — foi certeza. Tinha sido bem construído? Aguentaria em operação? E como deveria ser a camada de gestão?`

`Estruturámos a residência em torno dessa pergunta. As primeiras três semanas foram validação pura: configuração dos hosts, comportamento dos clusters, caminhos de armazenamento e de rede — testados metodicamente, com os resultados documentados à medida que avançávamos. Sem suposições herdadas, sem dar crédito ao «deve estar bem».`

`Sobre essa fundação validada, desenhámos o estado-alvo do SCVMM e construímo-lo em ambos os sites, seguindo-se sessões de capacitação para que a equipa do cliente pudesse operar o que agora era seu.`

`O momento que justifica esta história chegou a meio do projeto: a equipa de engenharia do cliente reviu o nosso desenho de estado-alvo e contestou uma das suas decisões centrais — onde deveria ficar a fronteira de responsabilidade entre o Network ATC e o SCVMM para a configuração de rede. Tinham razão em insistir. Revimos o desenho, e a versão 1.1 transporta essa revisão: uma divisão mais limpa de quem gere o quê, acordada linha a linha com as pessoas que operam a plataforma.`

`Algumas consultoras chamariam a isto fricção de âmbito. Para nós, é o projeto a funcionar exatamente como foi desenhado — fazemos engenharia com o cliente, não à revelia dele. Um desenho que sobrevive aos próprios engenheiros do cliente vale mais do que um que nunca foi posto em causa.`

`O que ficou quando saímos: relatórios de validação, o desenho de estado-alvo revisto, documentação de construção e uma equipa capacitada para operar a plataforma. Cada hora da residência deixou um artefacto.`

### Case study 2 — Migration methodology

#### PT

**Title:** `Uma metodologia de migração de aplicações, industrializada`
**Context line:** `Projeto ativo de migração de aplicações com a Dell · entrega B2B2B`

**Body:**

`As migrações de aplicações raramente falham nas ferramentas. Falham nos intervalos — entre o discovery e o planeamento, entre o runbook na cabeça de alguém e o que é executado às duas da manhã, entre «conseguimos reverter» e um plano de rollback real e testado.`

`No nosso projeto com a Dell, pegámos na metodologia de migração em três fases da Dell e industrializámo-la: não um framework em slides, mas uma fábrica de migração governada.`

`Como funciona a fábrica:`

- `**Gates de fase.** Cada fase termina num gate com critérios de entrada e de saída definidos. Nada avança por inércia.`
- `**Runbooks gerados — e planos de rollback gerados.** Para cada grupo de migração, a fábrica produz o caminho de ida e o de volta, num formato consistente e passível de revisão. O plano de rollback não é um acrescento posterior; é gerado em conjunto com o runbook, todas as vezes.`
- `**Go/no-go humano.** Os agentes de IA preparam a evidência — síntese do discovery, mapeamento de dependências, verificações de validação, documentação. Cada decisão de gate é tomada por uma pessoa. Nenhum passo de migração é executado apenas porque um agente o diz.`
- `**Rastreabilidade total.** Cada decisão e cada ação fica registada e é atribuível: o que foi feito, quando, por quem e com que aprovação.`

`Somos deliberadamente cautelosos com o que esta página afirma. Esta é uma história de metodologia e capacidade: a fábrica está produtizada num projeto ativo com a Dell e é entregue em modelo B2B2B aos clientes da Dell. Publicaremos resultados quando as migrações dos clientes estiverem concluídas — não antes.`

`Se o seu backlog de migração parece uma longa fila de projetos heroicos e irrepetíveis, o modelo de fábrica é a alternativa: consistência industrial nos artefactos e julgamento humano em cada gate.`

### Case study 3 — Delivery model

#### PT

**Title:** `Delivery agêntico, supervisionado por engenheiros`
**Context line:** `O nosso modelo de entrega · como decorre cada projeto da Gus IT`

**Body:**

`A primeira pergunta que um comprador sério faz sobre delivery conduzido por IA é a certa: é seguro deixar agentes de IA aproximarem-se de infraestrutura de produção?`

`A nossa resposta é uma divisão de trabalho rigorosa, aplicada em todos os projetos.`

`O que os nossos agentes de IA fazem: a engenharia repetitiva que consome tempo sénior e convida ao erro humano. Executam discovery sobre ambientes inteiros, sintetizam configurações em documentação, geram runbooks e planos de rollback, executam verificações de validação e mantêm o registo documental atualizado — de forma consistente, a qualquer hora, sem fadiga.`

`O que nunca fazem: aprovar um desenho. Tocar num sistema de produção sem supervisão. Tomar uma decisão de go/no-go.`

`Cada projeto tem um engenheiro sénior com nome, que responde pela aprovação do desenho e por cada ação que altera o estado dos sistemas. A nossa automatização é construída para dry-run: pode ser ensaiada sem tocar em sistemas reais, e cada fase transporta um plano de rollback antes de transportar uma alteração. Cada ação — humana ou de agente — fica registada e é atribuível: sabe-se sempre quem decidiu e quem agiu.`

`Porque é que isto lhe interessa: obtém a consistência de uma fábrica nos artefactos — documentação verdadeiramente completa, runbooks verdadeiramente atualizados — sem entregar o julgamento a uma máquina. O engenheiro não corrige os trabalhos de casa da IA depois do facto; o engenheiro é o gate por onde o trabalho tem de passar.`

`Isto não é um conceito de laboratório. É assim que entregamos hoje o nosso trabalho contratado, incluindo projetos ao abrigo de contratos de parceiros e de canal.`

`Se está a ponderar se a IA pertence à sua cadeia de delivery — ou como governá-la quando lá estiver —, traga as suas perguntas mais difíceis para a conversa de avaliação. Este modelo foi construído para ser interrogado.`

### Work page — closing CTA

#### PT
- Text: `Reconhece aqui a sua situação?`
- Button: `Marcar uma avaliação de 30 minutos` → `/pt/#contact`

---

## PAGE: 404

#### PT
- H1: `Página não encontrada.`
- Body: `A página que procura não existe ou foi movida. O melhor é recomeçar na página inicial — ou escrever-nos para gus@gusit.de a dizer o que procurava.`
- Button primary: `Ir para a página inicial` → `/pt/`
- Button secondary: `Ver os nossos projetos` → `/pt/work/`

---

## SEO METADATA

> Note: `og:site_name` = `Gus IT`; `og:locale` = `pt_PT` with reciprocal `og:locale:alternate` + hreflang per the engineering plan. Anchors and `/work/` path segment stay English. Front-page metadata follows CHANGELOG v1.1 (no partner names).

### `/pt/` (PT home)
- Meta title: `Gus IT — Consultoria de TI que funciona com IA própria`
- Meta description: `Consultoria de infraestrutura Azure e híbrida sobre a nossa própria plataforma de IA. Membro do NVIDIA Inception. Projetos através do canal enterprise.`
- OG title: `Consultoria de TI que funciona com IA própria.`
- OG description: `Consultoria de infraestrutura Azure e híbrida sobre a nossa própria plataforma de IA. Membro do NVIDIA Inception. Projetos através do canal enterprise.`

### `/pt/work/` (PT)
- Meta title: `Projetos e casos de estudo — Gus IT`
- Meta description: `Como entregamos: residência multi-site de Hyper-V e SCVMM, metodologia de migração industrializada e delivery de IA supervisionado por engenheiros.`
- OG title: `Projetos — Gus IT`
- OG description: `Residência multi-site de Hyper-V e SCVMM, metodologia de migração industrializada e delivery de IA supervisionado por engenheiros.`

### 404 (PT)
- Meta title: `Página não encontrada — Gus IT`
- Meta description: none required — set `robots: noindex` on the 404 page.

---

— Fim do copy deck PT. Jonas Weber (mkt-content-jonas), Task #279.
