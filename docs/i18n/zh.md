# COPY DECK i18n — gusit.de — 简体中文 (ZH)

**Version:** 1.0 · **Date:** 2026-06-12
**Author:** Jonas Weber (mkt-content-jonas) · Task #279 · Review: Marta Keller (mkt-vp-marta) · native-speaker review pending
**Source:** `docs/copy-deck-2026-06-11.md` — EN strings translated; Simplified Chinese, professional B2B register (您).
**Scope:** marketing surface only (GLOBAL, `/`, `/work/`, 404, SEO home + work + 404). Legal pages (Impressum, Privacy Policy) remain DE/EN pending counsel — ZH pages link to the EN privacy page at `/privacy/`.
**Conventions:** URL anchors stay English (`#services`, `#how-we-work`, `#luca-ai`, `#about`, `#contact`); locale path prefix `/zh/` mirrors `/de/`. Proper nouns untranslated per deck compliance rules. CJK SEO limits applied: meta title ≤30 chars, meta description ≤78 chars. Front page follows deck **CHANGELOG v1.1** (partner-name discreet: Dell named ONLY on `/work/`; Unisys not named anywhere; "leading OEM" / channel phrasing on `/`).

---

## GLOBAL: Shared UI strings

### Navigation (header, in order)

#### ZH
- 服务 → `/zh/#services`
- 项目案例 → `/zh/work/`
- Luca AI → `/zh/#luca-ai`
- 关于我们 → `/zh/#about`
- 联系我们 → `/zh/#contact`

### Language toggle

#### ZH
- Label (entry pointing to the ZH page, shown on non-ZH pages): `简体中文`
- aria-label: `以简体中文阅读本页`
- On ZH pages, the entry back to English reuses the deck's EN strings — Label: `English` · aria-label: `Read this page in English`

### Skip link

#### ZH
`跳至主要内容`

### Footer

#### ZH
- Tagline line: `Gus IT —— 运行在自研 AI 之上的 IT 咨询。`
- Link column 1 (站点): 服务 · 项目案例 · Luca AI · 关于我们 · 联系我们
- Link column 2 (法律信息): Impressum (`/impressum/`) · 隐私政策 (`/privacy/`，页面为英文)
- Trust line (plain text, no logo until badge approval lands): `NVIDIA Inception Member`
- Legal-entity line: `Gus IT LLC —— 一家依据美国佛罗里达州法律设立的有限责任公司，以远程与驻场方式服务 DACH 地区客户。`
- Contact line: `gus@gusit.de`
- Copyright: `© 2026 Gus IT LLC. 保留所有权利。`

---

## PAGE: `/` (ZH mirror: `/zh/`)

### Hero

#### ZH
- H1: `运行在自研 AI 之上的 IT 咨询。`
- Subhead: `十年 AI 工程经验，加上深厚的 Microsoft Azure 专业能力——来自一支自主构建并运营自有 AI 平台的团队。NVIDIA Inception 计划成员。经企业级渠道项目验证。`
- CTA primary: `预约 30 分钟评估` → `/zh/#contact`
- CTA secondary: `查看项目案例` → `/zh/work/`

### Proof-point bar (4 chips, directly under hero)

#### ZH
1. `NVIDIA Inception Member`
2. `企业级应用迁移`
3. `Microsoft Azure · AKS · Azure Local`
4. `十年 AI 工程经验`

### Services (`#services`)

#### ZH

**Section heading:** `我们的服务`
**Section intro:** `四项服务。每一项都以实际交付的项目为支撑——而不是一页能力介绍。`

---

**Offer 1 — AI 增强型基础设施驻场服务**

Promise: `一位资深首席工程师按约定周数嵌入您的团队——并由 AI 交付团队提供支持，让每个工时都沉淀为可长期使用的交付物。`

What's included:
- `资深工程师驻场或远程投入，按明确约定的周块安排`
- `AI 智能体在工作推进的同时生成文档、运维手册（Runbook）与验证报告`
- `所有交付物均纳入版本管理并完整移交——知识留在您的组织内`
- `范围灵活，覆盖虚拟化、混合平台与迁移`

Proof point: `已交付：为某州政府最终客户实施的多站点 Hyper-V 与 SCVMM 驻场项目，依据与一家领先 OEM 厂商签订的合作驻场合同执行。`

---

**Offer 2 — Azure 与混合平台工程（设计–构建）**

Promise: `针对 Microsoft 虚拟化与混合平台的固定范围设计、构建、重建与迁移——以明确的成果为目标，而非无止境的咨询。`

What's included:
- `Azure Local、Hyper-V 故障转移群集、SCVMM、Network ATC`
- `目标架构设计在动工之前先与您的工程师共同评审`
- `自动化支持安全试运行（dry-run），每个阶段均配备回滚方案`
- `每份交付物都遵循安全先行（Secure-by-Design）的构建标准`

Proof point: `已交付：经客户验证的双站点群集设计，并在项目进行期间根据客户工程团队的评审意见完成修订。`

---

**Offer 3 — 应用迁移工厂（Application Migration Factory）**

Promise: `把应用迁移做成一座受治理的工厂——而不是一次性的英雄式项目。`

What's included:
- `基于一家领先 OEM 厂商的三阶段迁移方法论构建`
- `阶段关卡：每次阶段切换都由人工做出通过/中止（go/no-go）决策`
- `为每个迁移批次（move group）生成运维手册与回滚方案`
- `全程可追溯：做了什么、何时、由谁执行、经谁批准`

Proof point: `已在与一家全球领先 OEM 厂商的进行中应用迁移项目内完成产品化。`

---

**Offer 4 — AI 运营模式咨询（"AI Workforce"）**

Promise: `我们自己的咨询业务就运行在由首席工程师监督的 AI 工作团队之上——并把同一套运营模式落地到您的交付组织中。`

What's included:
- `评估智能体交付在您的组织中哪些环节站得住——哪些环节站不住`
- `运营模式设计：角色、审批关卡，以及对每一个 AI 行为的问责`
- `源于实践而非理论：我们出售的模式，正是我们在签约项目中实际运行的模式`
- `治理优先：每个智能体行为都可归因，每道关卡都由人负责`

Proof point: `我们自己的交付体系运行在 Luca 平台之上——并已用于真实的签约项目。`

### How we work (`#how-we-work`)

#### ZH

**Section heading:** `我们的工作方式`

**Step 1 — 评估**
`一切从一次 30 分钟的通话开始——没有幻灯片，只谈您的环境与目标。如果双方契合，我们会跟进一次固定范围的评估或设计冲刺（两到四周），把工作量界定清楚。您得到的是一份可直接用于决策的环境全貌，而不是一份销售材料。`

**Step 2 — 合作**
`选择适合您的模式：驻场服务（以多周为单位的资深工程师工时）、带明确工作说明书（SOW）的固定范围设计–构建，或顾问咨询合约。我们也通过合作伙伴与渠道合同交付——我们已交付的两个项目均在总包合同下执行，我们乐于成为您合同背后的引擎。`

**Step 3 — 运营**
`移交是目的本身，而不是事后补充。设计文档、运维手册、回滚方案与项目文档全部纳入版本管理并归您所有。我们帮助您的团队具备自主运营平台的能力——如有需要，也可通过顾问合约随时提供支持。`

**Engagement-model strip (microcopy under the steps):**
`合作模式：驻场服务 · 固定范围评估/设计冲刺 · 设计–构建 · 顾问咨询合约 · 合作伙伴与渠道交付`

### Luca AI differentiator (`#luca-ai`)

#### ZH

**Section heading:** `我们用自己构建的 AI 工作`

**Body:**
`多数咨询公司在谈论 AI，我们在运营 AI。Luca 是我们自有的 AI 平台——由我们构建、运营并持续进行工程演进，每天都在签约客户项目中使用：环境探查、文档编写、运维手册生成、验证。`

`这从两个方面改变了您可以对我们抱有的期待。其一，您购买的 AI 增强型交付，正是我们自己每天在用的交付方式——而不是一页能力介绍。其二，当我们就 AI 运营模式提供咨询时，建议来自实际运营一套模式的经验——包括其中所有的难点。`

`这不是产品推销。Luca 就是我们的工作方式。`

**Link label:** `了解 Luca 平台 → lucaexpress.com` (external link to `https://www.lucaexpress.com`)

### About (`#about`)

#### ZH

**Section heading:** `关于 Gus IT`
**Sub-heading:** `与您共事的人`

**Founder narrative:**
`Gus IT 由创始人 Gustavo Assunção 领导——他首先是工程师，其次才是顾问。他拥有十年 AI 工程经验，并在 Microsoft 技术栈上具备深厚造诣：Azure、AKS、Azure Local、Hyper-V 与 SCVMM。其交付履历包括企业级应用迁移工作，以及为某州政府最终客户实施的多站点 Hyper-V 与 SCVMM 驻场项目——均依据与领先 OEM 厂商签订的合作合同交付。Gus IT 是 NVIDIA Inception 计划成员，并自主构建和运营自有 AI 平台 Luca。`

`当您联系 Gus IT 时，与您对话的是实际交付工作的工程师——而不是客户经理层。`

**Values (heading: `我们的信念`):**
1. `先验证，再构建。` — `在设计未来之前，先检验现状。假设是任何 IT 环境中最昂贵的组件。`
2. `与客户共同做工程。` — `我们最好的设计都带着客户的印记。能经受住您的工程师评审的设计，远比从未被质疑过的设计更有价值。`
3. `每个工时都留下交付物。` — `设计文档、运维手册、回滚方案、项目文档——纳入版本管理并完整移交。随顾问离开而流失的知识，等于从未交付。`
4. `责任到人。` — `AI 加速我们的工作，但每个决策、每个改变系统状态的操作，都由一位具名工程师负责。`

### Contact (`#contact`)

#### ZH

**Section heading:** `联系我们`
**Sub-heading:** `聊聊您的基础设施`
**Intro:** `告诉我们您正在构建、验证或迁移什么——或直接预约一次 30 分钟评估。与您交流的，将是实际负责交付的工程师。`

**Contact details:**
- Email line: `邮箱：gus@gusit.de` (mailto link)
- Phone note: `电话：德国与美国的专用业务号码正在开通中，将很快在此公布。`
- Transparency line: `Gus IT LLC 是一家注册于美国佛罗里达州的法律实体，以远程与驻场方式服务 DACH 地区客户。`

**Form heading:** `给我们留言`

Form fields:
- Label: `姓名` (required) — placeholder: `您的姓名` — validation error: `请输入您的姓名。`
- Label: `邮箱` (required) — placeholder: `you@company.com` — validation error: `请输入有效的邮箱地址。`
- Label: `公司（选填）` — placeholder: `您的公司`
- Label: `留言` (required) — placeholder: `您正在构建、验证或迁移什么？` — validation error: `请输入留言内容。`
- Privacy notice (below form, before button): `提交本表单，即表示您同意我们为处理您的咨询而处理您所提供的信息。详情请见我们的` + link `隐私政策（英文）` → `/privacy/`
- Submit button: `发送留言`
- Submitting state: `发送中…`
- Success message: `谢谢——您的留言已发出。我们通常会在一个工作日内回复。`
- Error message: `发送失败，您的留言未能送达。请重试，或直接发送邮件至 gus@gusit.de。`
- Required-field legend: `* 必填项`
- Generic validation fallback: `请填写所有必填项。`

---

## PAGE: `/work/` (ZH mirror: `/zh/work/`)

### Page header

#### ZH
- H1: `精选项目`
- Intro: `三个关于我们如何交付的故事。客户名称仅在获得书面许可后展示；许可尚在办理中的项目以匿名方式呈现——但无论哪种情况，项目都是真实的。`

### Case study 1 — Residency

#### ZH

**Title:** `验证先行：多站点 Hyper-V 与 SCVMM 驻场项目`
**Context line:** `服务对象：一家全球 IT 服务公司的州政府最终客户 · 依据 Dell 驻场合同交付`

**Body:**

`客户的工程师已经完成了最繁重的工作：主机部署到位，故障转移群集组建完毕，跨两个站点的网络架构搭建完成。他们要的不是重建——而是确定性。是否建得正确？能否经得起运行？管理层应该是什么样子？`

`我们围绕这个问题来组织整个驻场项目。前三周是纯粹的验证：主机配置、群集行为、存储与网络路径——按部就班地逐项测试，发现随做随记。不沿用任何既有假设，也不给"应该没问题"留情面。`

`在这个经过验证的基础上，我们设计了 SCVMM 目标架构并在两个站点完成搭建，随后开展赋能培训，让客户团队能够运营这套如今属于他们自己的平台。`

`我们之所以讲这个故事，正是因为项目中段发生的一幕：客户的工程团队评审了我们的目标架构设计，并对其中一项核心决策提出质疑——在网络配置上，Network ATC 与 SCVMM 之间的归属边界应该划在哪里。他们的坚持是对的。我们修订了设计，1.1 版承载着他们的评审成果：职责划分更加清晰，由实际运营平台的人逐行确认。`

`有些咨询公司会把这称为范围摩擦。我们则称之为项目按设计运转——我们与客户共同做工程，而不是对着客户做工程。能经受住客户自己工程师检验的设计，远比从未被质疑过的设计更有价值。`

`我们离开时留下的是：验证报告、修订后的目标架构设计、构建文档，以及一支有能力运营平台的团队。驻场的每个工时都留下了一份交付物。`

### Case study 2 — Migration methodology

#### ZH

**Title:** `应用迁移方法论的工业化`
**Context line:** `与 Dell 合作的进行中应用迁移项目 · B2B2B 交付`

**Body:**

`应用迁移很少败在工具上。它们败在缝隙里——败在探查与规划之间，败在某人脑子里的操作步骤与凌晨两点实际执行的手册之间，败在"我们可以回滚"与一份真实、经过测试的回滚方案之间。`

`在与 Dell 的合作项目中，我们将 Dell 的三阶段迁移方法论工业化：不是一套幻灯片框架，而是一座受治理的迁移工厂。`

`工厂如此运转：`

- `**阶段关卡。** 每个阶段都终止于一道关卡，关卡有明确的进入与退出标准。任何事项都不会凭惯性继续推进。`
- `**生成的运维手册——以及生成的回滚方案。** 对每个迁移批次，工厂都会以一致、可评审的形式产出前进路径与回退路径。回滚方案不是事后补充；它每一次都与运维手册同步生成。`
- `**人工通过/中止决策。** AI 智能体负责准备依据——探查结果汇总、依赖关系映射、验证检查、文档。每一道关卡的决策都由人做出。没有任何迁移步骤会仅凭智能体的判断而执行。`
- `**全程可追溯。** 每个决策与操作都有日志记录、可以归因：做了什么、何时、由谁执行、经谁批准。`

`对于本页所声称的内容，我们刻意保持克制。这是一个关于方法论与能力的故事：该工厂已在与 Dell 的进行中项目内完成产品化，并以 B2B2B 模式交付给 Dell 的客户。我们将在客户迁移完成之后再发布成果——绝不提前。`

`如果您的迁移积压清单看起来像一长排英雄式的一次性项目，工厂模式就是另一种选择：交付物具备工业级一致性，每道关卡都有人的判断。`

### Case study 3 — Delivery model

#### ZH

**Title:** `智能体交付，工程师监督`
**Context line:** `我们的交付模式 · Gus IT 每个项目的运行方式`

**Body:**

`认真采购的买家对 AI 驱动交付提出的第一个问题，正是该问的那个：让 AI 智能体接近生产基础设施，安全吗？`

`我们的回答是一套严格的分工，适用于每一个项目。`

`我们的 AI 智能体做什么：那些消耗资深工程师时间、又容易诱发人为失误的重复性工程工作。它们在整个环境中执行探查，把配置归纳为文档，生成运维手册与回滚方案，执行验证检查，并保持记录始终是最新的——稳定一致，全天候，不知疲倦。`

`它们绝不做什么：批准设计。在无人监督下触碰生产系统。做出通过/中止决策。`

`每个项目都有一位具名的资深工程师，负责设计审批以及每一个改变系统状态的操作。我们的自动化按安全试运行（dry-run）标准构建：可以在不触碰生产系统的情况下预演，并且每个阶段在承载任何变更之前，先承载一份回滚方案。每个操作——无论出自人还是智能体——都有日志记录、可以归因，您始终知道是谁决策、谁执行。`

`这对您意味着什么：您在交付物上获得工厂级的一致性——文档真正完整，运维手册真正最新——而无需把判断权交给机器。工程师不是事后批改 AI 的作业；工程师本身就是工作必须通过的那道关卡。`

`这不是实验室概念。这就是我们今天交付签约工作的方式，包括在合作伙伴与渠道合同下执行的项目。`

`如果您正在权衡 AI 是否应该进入您的交付链条——或者它进入之后该如何治理——请把您最尖锐的问题带到评估通话中来。这套模式生来就是为接受拷问而构建的。`

### Work page — closing CTA

#### ZH
- Text: `听起来像您的处境？`
- Button: `预约 30 分钟评估` → `/zh/#contact`

---

## PAGE: 404

#### ZH
- H1: `页面未找到。`
- Body: `您要找的页面不存在或已被移动。请从首页开始——或发送邮件至 gus@gusit.de，告诉我们您在找什么。`
- Button primary: `返回首页` → `/zh/`
- Button secondary: `查看项目案例` → `/zh/work/`

---

## SEO METADATA

> Note: `og:site_name` = `Gus IT`; `og:locale` = `zh_CN` with reciprocal `og:locale:alternate` + hreflang per the engineering plan. Anchors and `/work/` path segment stay English. CJK limits: meta title ≤30 chars, meta description ≤78 chars. Front-page metadata follows CHANGELOG v1.1 (no partner names).

### `/zh/` (ZH home)
- Meta title: `Gus IT — 运行在自研 AI 上的 IT 咨询`
- Meta description: `基于自有 AI 平台交付的 Azure 与混合基础设施咨询。NVIDIA Inception 计划成员，经企业级渠道项目验证。`
- OG title: `运行在自研 AI 之上的 IT 咨询。`
- OG description: `基于自有 AI 平台交付的 Azure 与混合基础设施咨询。NVIDIA Inception 计划成员，经企业级渠道项目验证。`

### `/zh/work/` (ZH)
- Meta title: `精选项目与案例 — Gus IT`
- Meta description: `我们的交付方式：多站点 Hyper-V 与 SCVMM 驻场项目、工业化的应用迁移方法论，以及工程师监督下的 AI 交付。`
- OG title: `精选项目 — Gus IT`
- OG description: `多站点 Hyper-V 与 SCVMM 驻场、工业化迁移方法论、工程师监督下的 AI 交付。`

### 404 (ZH)
- Meta title: `页面未找到 — Gus IT`
- Meta description: none required — set `robots: noindex` on the 404 page.

---

— 简体中文版结束。Jonas Weber (mkt-content-jonas), Task #279.
