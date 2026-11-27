export type Lang = "en" | "pt";
export type Currency = "usd" | "brl";
export type Category = "theme" | "conversion" | "performance" | "access" | "interface";
export type Tone = "ink" | "citrus" | "foam" | "tangerine" | "cobalt" | "pine" | "violet";

export const EMAIL = "beatriz.knabbenp@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/biakp";
export const GITHUB = "https://github.com/biakp";

export const CV = {
  en: {
    href: "/Beatriz_Knabben_Resume.pdf",
    file: "Beatriz_Knabben_Resume.pdf",
  },
  pt: {
    href: "/Beatriz_Knabben_Curriculo_PT.pdf",
    file: "Beatriz_Knabben_Curriculo_PT.pdf",
  },
} as const;

export function mailHref(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface Copy {
  skip: string;
  langLabel: string;
  navLabel: string;
  nav: { capabilities: string; services: string; experience: string; about: string; contact: string };
  cv: string;
  cvFile: string;
  cvOther: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  recruiterKicker: string;
  clientKicker: string;
  available: string;
  availablePoints: string[];
  languagesTitle: string;
  languagesBody: string;
  howTitle: string;
  howBody: string;
  facts: string[];
  recruiterTitle: string;
  recruiterBody: string;
  recruiterCta: string;
  clientTitle: string;
  clientBody: string;
  clientCta: string;
  experienceKicker: string;
  experienceTitle: string;
  capKicker: string;
  capTitle: string;
  capIntro: string;
  capNote: string;
  filterLabel: string;
  filterAll: string;
  categories: Record<Category, string>;
  showingAll: string;
  showingOne: string;
  showingSome: string;
  details: string;
  close: string;
  includes: string;
  servicesKicker: string;
  servicesTitle: string;
  servicesIntro: string;
  currencyLabel: string;
  turnaround: string;
  request: string;
  servicesCta: string;
  servicesFine: string;
  aboutKicker: string;
  aboutTitle: string;
  skillsTitle: string;
  skillGroups: { label: string; items: string[] }[];
  eduTitle: string;
  edu: string[];
  certTitle: string;
  certs: string[];
  personaKicker: string;
  personaTitle: string;
  personaBody: string;
  personaChips: string[];
  contactKicker: string;
  contactTitle: string;
  contactBody: string;
  emailLabel: string;
  footer: string;
  roleSubject: string;
  roleBody: string;
  projectSubject: string;
  projectBody: string;
}

export const copy: Record<Lang, Copy> = {
  en: {
    skip: "Skip to content",
    langLabel: "Language",
    navLabel: "Sections",
    nav: {
      capabilities: "Capabilities",
      services: "Services",
      experience: "Experience",
      about: "About",
      contact: "Contact",
    },
    cv: "Download CV",
    cvFile: "Resume · English",
    cvOther: "Portuguese CV",
    heroKicker: "Beatriz · Front-End & Shopify Developer",
    heroTitle: "Online Store 2.0 Specialist",
    heroLead:
      "Front-end developer for remote product teams, and the person stores call for a fixed-price Shopify fix. Online Store 2.0, Liquid, JSON templates, performance, and accessibility.",
    available: "Available",
    availablePoints: [
      "Remote roles",
      "Fixed-price Shopify projects",
      "Tubarão, SC, Brazil",
      "UTC−3 · overlap with US & EU",
    ],
    languagesTitle: "Languages",
    languagesBody: "Native Portuguese. Fluent English. This page switches instantly.",
    howTitle: "How I work",
    howBody:
      "Eight years in web development, four of them specialized in Shopify and Liquid: Online Store 2.0, JSON templates and schemas, fast debugging, performance, and accessibility. I do my best work on async remote teams — a written queue in Jira or Trello, and a clear written status at the end of the day. I studied cybersecurity and I keep a strong interest in AI and QA automation.",
    facts: ["8 years in web development", "4 years in Shopify & Liquid", "Written queue, written daily status"],
    recruiterKicker: "Recruiters",
    clientKicker: "Studios & stores",
    recruiterTitle: "Hiring a remote front\u2011end?",
    recruiterBody:
      "Open to remote Front-End and Shopify Online Store 2.0 roles. Written tasks, a daily written update, and real overlap with US and EU hours.",
    recruiterCta: "Email about a role",
    clientTitle: "Need a Shopify fix?",
    clientBody:
      "Fixed-price theme fixes and improvements for stores and agencies. Send the store URL and what broke.",
    clientCta: "Email about a project",
    experienceKicker: "Experience",
    experienceTitle: "Where the work happened",
    capKicker: "Engineering",
    capTitle: "Capabilities & selected solutions",
    capIntro:
      "The architectures I actually ship — not a client list. Custom Online Store 2.0 themes, AJAX cart and PDP logic, performance, accessibility, search, Webflow, and React/Vue.",
    capNote: "Agency project references available on LinkedIn or on request.",
    filterLabel: "Filter capabilities",
    filterAll: "All",
    categories: {
      theme: "Custom OS 2.0 themes",
      conversion: "Conversion & AJAX cart / PDP",
      performance: "Performance & script cleanup",
      access: "Accessibility & search",
      interface: "Webflow & React / Vue",
    },
    showingAll: "Showing all {n} architectures",
    showingOne: "Showing 1 architecture",
    showingSome: "Showing {n} architectures",
    details: "Details",
    close: "Close",
    includes: "What ships",
    servicesKicker: "For stores & agencies",
    servicesTitle: "Fixed-price Shopify",
    servicesIntro:
      "A defined fix, with the scope written down before the work starts. Prices follow the language, and you can switch currency anytime.",
    currencyLabel: "Currency",
    turnaround: "Turnaround",
    request: "Request this",
    servicesCta: "Email about a Shopify project",
    servicesFine: "Tell me the store URL and what needs to change.",
    aboutKicker: "Profile",
    aboutTitle: "Skills, study, and the rest",
    skillsTitle: "Skills",
    skillGroups: [
      {
        label: "Shopify",
        items: ["Liquid", "Online Store 2.0", "JSON templates & schemas"],
      },
      {
        label: "Interface",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Vue.js",
          "Tailwind CSS",
          "Webflow",
          "WordPress / WooCommerce",
        ],
      },
      {
        label: "Practice",
        items: ["REST APIs", "Git / GitHub", "CI/CD", "TDD", "Accessibility (WCAG)", "Figma", "Jira / Trello"],
      },
    ],
    eduTitle: "Education",
    edu: [
      "Nanodegree in Front-End Development, Udacity (2018–2019)",
      "Coursework in Cybersecurity (Bachelor's program, not completed)",
    ],
    certTitle: "Certifications",
    certs: [
      "Introduction to Cybersecurity (Cisco)",
      "Shopify Theme Development + Tailwind CSS (Udemy)",
    ],
    personaKicker: "Off the clock",
    personaTitle: "A bit of Bea",
    personaBody:
      "Cybersecurity studies, sci-fi, and cats. I like systems that fail in interesting ways — and storefronts that don't.",
    personaChips: ["Cybersecurity", "AI & QA", "Sci-fi", "Cats"],
    contactKicker: "Contact",
    contactTitle: "Write to Bea",
    contactBody: "Roles, retainers, and one-off Shopify fixes all start in the same place: an email.",
    emailLabel: "Email",
    footer: "Tubarão, SC, Brazil · Remote (UTC−3)",
    roleSubject: "Remote Front-End / Shopify role",
    roleBody: "Hello Bea,\n\nI'm hiring for a remote front-end / Shopify role.\n\n",
    projectSubject: "Shopify project",
    projectBody: "Hello Bea,\n\nStore URL:\nWhat needs to change:\nPackage I'm considering:\n\n",
  },
  pt: {
    skip: "Pular para o conteúdo",
    langLabel: "Idioma",
    navLabel: "Seções",
    nav: {
      capabilities: "Soluções",
      services: "Serviços",
      experience: "Trajetória",
      about: "Sobre",
      contact: "Contato",
    },
    cv: "Baixar currículo",
    cvFile: "Currículo · Português",
    cvOther: "CV em inglês",
    heroKicker: "Beatriz · Desenvolvedora Front-End & Shopify",
    heroTitle: "Especialista em Online Store 2.0",
    heroLead:
      "Desenvolvedora front-end para times remotos, e a pessoa que lojas chamam para um conserto Shopify com preço fechado. Online Store 2.0, Liquid, templates JSON, performance e acessibilidade.",
    available: "Disponível",
    availablePoints: [
      "Vagas remotas",
      "Projetos Shopify com preço fechado",
      "Tubarão, SC, Brasil",
      "UTC−3 · sobreposição com EUA e Europa",
    ],
    languagesTitle: "Idiomas",
    languagesBody: "Português nativo. Inglês fluente. Esta página troca na hora.",
    howTitle: "Como eu trabalho",
    howBody:
      "Oito anos em desenvolvimento web, quatro deles especializados em Shopify e Liquid: Online Store 2.0, templates e schemas JSON, depuração rápida, performance e acessibilidade. Trabalho melhor em times remotos assíncronos — fila escrita no Jira ou no Trello e um status claro, por escrito, no fim do dia. Estudei cibersegurança e tenho um interesse forte em IA e automação de QA.",
    facts: ["8 anos em desenvolvimento web", "4 anos em Shopify e Liquid", "Fila escrita, status diário por escrito"],
    recruiterKicker: "Recrutamento",
    clientKicker: "Estúdios e lojas",
    recruiterTitle: "Contratando front-end remoto?",
    recruiterBody:
      "Aberta a vagas remotas de Front-End e Shopify Online Store 2.0. Tarefas por escrito, um status diário por escrito e sobreposição real com os horários de EUA e Europa.",
    recruiterCta: "Escrever sobre uma vaga",
    clientTitle: "Precisa de um conserto na Shopify?",
    clientBody:
      "Correções e melhorias de tema com preço fechado, para lojas e agências. Manda a URL da loja e o que quebrou.",
    clientCta: "Escrever sobre um projeto",
    experienceKicker: "Trajetória",
    experienceTitle: "Onde o trabalho aconteceu",
    capKicker: "Engenharia",
    capTitle: "Capacidades e soluções selecionadas",
    capIntro:
      "As arquiteturas que eu realmente entrego — não uma lista de clientes. Temas Online Store 2.0, carrinho AJAX e lógica de PDP, performance, acessibilidade, busca, Webflow e React/Vue.",
    capNote: "Referências de projetos em agência disponíveis no LinkedIn ou sob pedido.",
    filterLabel: "Filtrar capacidades",
    filterAll: "Todas",
    categories: {
      theme: "Temas OS 2.0 sob medida",
      conversion: "Conversão e carrinho AJAX / PDP",
      performance: "Performance e limpeza de scripts",
      access: "Acessibilidade e busca",
      interface: "Webflow e React / Vue",
    },
    showingAll: "Mostrando as {n} arquiteturas",
    showingOne: "Mostrando 1 arquitetura",
    showingSome: "Mostrando {n} arquiteturas",
    details: "Detalhes",
    close: "Fechar",
    includes: "O que entra",
    servicesKicker: "Para lojas e agências",
    servicesTitle: "Shopify com preço fechado",
    servicesIntro:
      "Um conserto definido, com o escopo escrito antes do trabalho começar. O preço segue o idioma, e a moeda pode ser trocada a qualquer momento.",
    currencyLabel: "Moeda",
    turnaround: "Prazo",
    request: "Pedir este",
    servicesCta: "Escrever sobre um projeto Shopify",
    servicesFine: "Me conta a URL da loja e o que precisa mudar.",
    aboutKicker: "Perfil",
    aboutTitle: "Ferramentas, estudo e o resto",
    skillsTitle: "Habilidades",
    skillGroups: [
      {
        label: "Shopify",
        items: ["Liquid", "Online Store 2.0", "Templates e schemas JSON"],
      },
      {
        label: "Interface",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Vue.js",
          "Tailwind CSS",
          "Webflow",
          "WordPress / WooCommerce",
        ],
      },
      {
        label: "Prática",
        items: ["REST APIs", "Git / GitHub", "CI/CD", "TDD", "Acessibilidade (WCAG)", "Figma", "Jira / Trello"],
      },
    ],
    eduTitle: "Formação",
    edu: [
      "Nanodegree em Desenvolvimento Front-End, Udacity (2018–2019)",
      "Disciplinas de Cibersegurança (bacharelado, não concluído)",
    ],
    certTitle: "Certificações",
    certs: [
      "Introduction to Cybersecurity (Cisco)",
      "Shopify Theme Development + Tailwind CSS (Udemy)",
    ],
    personaKicker: "Fora do expediente",
    personaTitle: "Um pouco da Bea",
    personaBody:
      "Cibersegurança, ficção científica e gatos. Gosto de sistemas que falham de um jeito interessante — e de vitrines que não falham.",
    personaChips: ["Cibersegurança", "IA e QA", "Ficção científica", "Gatos"],
    contactKicker: "Contato",
    contactTitle: "Escreve para a Bea",
    contactBody: "Vaga, parceria ou um conserto pontual na Shopify: tudo começa no mesmo lugar, um e-mail.",
    emailLabel: "E-mail",
    footer: "Tubarão, SC, Brasil · Remoto (UTC−3)",
    roleSubject: "Vaga remota de Front-End / Shopify",
    roleBody: "Olá, Bea,\n\nEstou contratando para uma vaga remota de front-end / Shopify.\n\n",
    projectSubject: "Projeto Shopify",
    projectBody: "Olá, Bea,\n\nURL da loja:\nO que precisa mudar:\nPacote que estou considerando:\n\n",
  },
};

export interface Role {
  id: string;
  tone: Tone;
  company: string;
  role: Record<Lang, string>;
  meta: Record<Lang, string>;
  body: Record<Lang, string>;
}

export const roles: Role[] = [
  {
    id: "check",
    tone: "ink",
    company: "Check Commerce",
    role: { en: "Front-End Developer", pt: "Desenvolvedora Front-End" },
    meta: {
      en: "2025 – 2026 · Florianópolis, Brazil · Remote",
      pt: "2025 – 2026 · Florianópolis, Brasil · Remoto",
    },
    body: {
      en: "Built and maintained Shopify and Liquid e-commerce stores for major Brazilian brands. Contributed to internal documentation and workflow architecture. Collaborated with designers and customer success on new layouts and bug fixes.",
      pt: "Construí e mantive lojas de e-commerce em Shopify e Liquid para grandes marcas brasileiras. Contribuí com a documentação interna e com a arquitetura dos fluxos de trabalho. Colaborei com design e com o time de CS em layouts novos e correções.",
    },
  },
  {
    id: "leadways",
    tone: "foam",
    company: "Leadways",
    role: { en: "Front-End Developer", pt: "Desenvolvedora Front-End" },
    meta: {
      en: "2021 – 2022 · Copenhagen, Denmark · Remote",
      pt: "2021 – 2022 · Copenhague, Dinamarca · Remoto",
    },
    body: {
      en: "Built and maintained Shopify and Liquid e-commerce stores for Danish brands, visually engaging Webflow sites, and Vue.js components with international designers and PMs.",
      pt: "Construí e mantive lojas de e-commerce em Shopify e Liquid para marcas dinamarquesas, sites Webflow visualmente envolventes e componentes em Vue.js, com designers e PMs internacionais.",
    },
  },
  {
    id: "freelance",
    tone: "citrus",
    company: "Freelance",
    role: {
      en: "Front-End Developer & Shopify Specialist",
      pt: "Desenvolvedora Front-End e especialista Shopify",
    },
    meta: { en: "2016 – Present · Remote", pt: "2016 – atual · Remoto" },
    body: {
      en: "Responsive interfaces in React, Vue, Tailwind CSS, Shopify (Liquid), Webflow, and WordPress/WooCommerce. Fixed-price Shopify theme fixes and improvements.",
      pt: "Interfaces responsivas em React, Vue, Tailwind CSS, Shopify (Liquid), Webflow e WordPress/WooCommerce. Correções e melhorias de tema Shopify com preço fechado.",
    },
  },
];

export interface Solution {
  id: string;
  category: Category;
  number: string;
  tone: Tone;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  points: Record<Lang, readonly string[]>;
}

export const solutions: Solution[] = [
  {
    id: "os2-theme",
    category: "theme",
    number: "01",
    tone: "ink",
    title: {
      en: "Custom Online Store 2.0 theme",
      pt: "Tema Online Store 2.0 sob medida",
    },
    summary: {
      en: "A storefront built from JSON templates and section schemas, so a merchandising change is a setting, not a rescue mission.",
      pt: "Uma vitrine feita de templates JSON e schemas de seção, para que uma mudança de vitrine seja uma configuração, não uma missão de resgate.",
    },
    points: {
      en: [
        "JSON templates for the homepage, product, collection, page, and cart",
        "Section schemas with blocks, presets, and limits a merchant can read",
        "Snippets split so the header, product form, and cart do not share hidden state",
        "Section-scoped CSS, so a campaign block does not restyle the product page",
      ],
      pt: [
        "Templates JSON para home, produto, coleção, página e carrinho",
        "Schemas de seção com blocos, presets e limites que a loja consegue ler",
        "Snippets separados para header, formulário de produto e carrinho não dividirem estado escondido",
        "CSS no escopo da seção, para um bloco de campanha não reestilizar a página de produto",
      ],
    },
  },
  {
    id: "theme-architecture",
    category: "theme",
    number: "02",
    tone: "foam",
    title: {
      en: "Theme architecture and deep modifications",
      pt: "Arquitetura de tema e modificações profundas",
    },
    summary: {
      en: "End-to-end structure when the theme is new, and careful modifications when a rewrite would be the wrong risk.",
      pt: "Estrutura de ponta a ponta quando o tema é novo, e modificação cuidadosa quando reescrever seria o risco errado.",
    },
    points: {
      en: [
        "Section groups and a settings map the next developer can follow",
        "Custom UI components that use the theme's existing tokens",
        "App embeds and custom sections that do not fight each other",
        "Refinement of an existing theme: type, spacing, navigation, and collection patterns for a larger catalog",
      ],
      pt: [
        "Grupos de seção e um mapa de configurações que a próxima pessoa desenvolvedora consegue seguir",
        "Componentes de UI customizados usando os tokens que o tema já tem",
        "Apps embutidos e seções customizadas que não brigam entre si",
        "Refino de um tema existente: tipo, espaçamento, navegação e padrões de coleção para um catálogo maior",
      ],
    },
  },
  {
    id: "ajax-cart",
    category: "conversion",
    number: "03",
    tone: "tangerine",
    title: {
      en: "AJAX slide cart and side cart",
      pt: "Carrinho AJAX em gaveta e lateral",
    },
    summary: {
      en: "Cart UI on Shopify's Ajax cart endpoints, so line items and quantities update without a full reload.",
      pt: "Interface de carrinho nos endpoints Ajax da Shopify, para itens e quantidades atualizarem sem recarregar a página.",
    },
    points: {
      en: [
        "cart/add.js, cart/change.js, and cart.js as the source of truth",
        "One renderer for line items, quantities, and the empty state",
        "Drawer behavior: focus stays inside, Escape closes, focus returns to the trigger",
        "Loading and error states that do not depend on a page refresh",
      ],
      pt: [
        "cart/add.js, cart/change.js e cart.js como fonte da verdade",
        "Um único render para itens, quantidades e o estado vazio",
        "Gaveta com foco preso, Escape para fechar e foco de volta no botão que abriu",
        "Estados de carregamento e erro que não dependem de recarregar a página",
      ],
    },
  },
  {
    id: "pdp",
    category: "conversion",
    number: "04",
    tone: "foam",
    title: {
      en: "PDP variants and upsell blocks",
      pt: "Variantes na PDP e blocos de upsell",
    },
    summary: {
      en: "Product forms that resolve combined options, availability, and on-page upsells.",
      pt: "Formulários de produto que resolvem opções combinadas, disponibilidade e upsells na própria página.",
    },
    points: {
      en: [
        "Variant resolution from option selects, including unavailable combinations",
        "Price, media, and SKU tied to the selected variant",
        "Upsell blocks fed by product data or metafields inside the product section",
        "Add to cart that opens the AJAX cart instead of leaving the page",
      ],
      pt: [
        "Resolução de variante a partir dos seletores, inclusive combinações indisponíveis",
        "Preço, mídia e SKU amarrados à variante selecionada",
        "Blocos de upsell alimentados por dados do produto ou metafields, dentro da seção de produto",
        "Adicionar ao carrinho abre o carrinho AJAX em vez de sair da página",
      ],
    },
  },
  {
    id: "speed",
    category: "performance",
    number: "05",
    tone: "citrus",
    title: {
      en: "Speed check and script cleanup",
      pt: "Checagem de performance e limpeza de scripts",
    },
    summary: {
      en: "A pass over theme weight and third-party scripts before another app gets stacked on top.",
      pt: "Uma passagem pelo peso do tema e pelos scripts de terceiros, antes de empilhar mais um app.",
    },
    points: {
      en: [
        "Inventory of app scripts, duplicate pixels, and render-blocking assets",
        "Unused scripts removed or deferred, with a note on what has to stay",
        "Image and font loading that matches how the section actually renders",
        "A written list of what changed, so the next release does not put the weight back",
      ],
      pt: [
        "Inventário de scripts de app, pixels duplicados e assets que bloqueiam a renderização",
        "Scripts sem uso removidos ou adiados, com uma nota do que precisa ficar",
        "Carregamento de imagem e fonte de acordo com o que a seção realmente renderiza",
        "Uma lista escrita do que mudou, para o próximo release não devolver o peso",
      ],
    },
  },
  {
    id: "a11y",
    category: "access",
    number: "06",
    tone: "cobalt",
    title: {
      en: "Accessibility fixes on the storefront",
      pt: "Ajustes de acessibilidade na vitrine",
    },
    summary: {
      en: "WCAG-oriented work on the controls people actually use: menu, search, cart, and forms.",
      pt: "Trabalho orientado a WCAG nos controles que as pessoas realmente usam: menu, busca, carrinho e formulários.",
    },
    points: {
      en: [
        "Accessible names on icon buttons, the cart, and search",
        "Focus order through drawers and the mobile menu",
        "Contrast and target size on primary actions",
        "Errors and status messages that are not conveyed by color alone",
      ],
      pt: [
        "Nomes acessíveis em botões de ícone, no carrinho e na busca",
        "Ordem de foco em gavetas e no menu mobile",
        "Contraste e área de toque nas ações principais",
        "Erros e mensagens de status que não dependem só da cor",
      ],
    },
  },
  {
    id: "search",
    category: "access",
    number: "07",
    tone: "foam",
    title: {
      en: "Native search and collection filtering",
      pt: "Busca nativa e filtro de coleção",
    },
    summary: {
      en: "Search and collection filters that follow the platform, in a layout that holds when the filters are on.",
      pt: "Busca e filtros de coleção que seguem a plataforma, num layout que aguenta quando os filtros estão ligados.",
    },
    points: {
      en: [
        "Native search patterns, including predictive results where the theme supports them",
        "Collection filtering that does not break the product grid",
        "Sort, filter chips, and pagination sharing a row without collision",
        "A clear empty state, and a way back",
      ],
      pt: [
        "Padrões de busca nativa, inclusive resultado preditivo quando o tema suporta",
        "Filtro de coleção que não quebra a grade de produtos",
        "Ordenação, chips de filtro e paginação na mesma faixa, sem colisão",
        "Estado vazio claro, e um caminho de volta",
      ],
    },
  },
  {
    id: "interface",
    category: "interface",
    number: "08",
    tone: "pine",
    title: {
      en: "Webflow sites and React / Vue UI",
      pt: "Sites Webflow e UI em React / Vue",
    },
    summary: {
      en: "Marketing sites in Webflow, and interface components in Vue and React, built with designers and PMs.",
      pt: "Sites institucionais em Webflow e componentes de interface em Vue e React, com designers e PMs.",
    },
    points: {
      en: [
        "Webflow structure: responsive sections, CMS collections, interactions that do not fight the layout",
        "Vue components with explicit props and the same spacing system as the page",
        "React and Next.js interfaces with Tailwind for product UI",
        "Handoff notes so the next person can edit without reverse-engineering",
      ],
      pt: [
        "Estrutura em Webflow: seções responsivas, coleções de CMS, interações que não brigam com o layout",
        "Componentes Vue com props explícitas e o mesmo sistema de espaçamento da página",
        "Interfaces em React e Next.js com Tailwind para UI de produto",
        "Notas de handoff para a próxima pessoa editar sem precisar de engenharia reversa",
      ],
    },
  },
];

export interface Service {
  id: string;
  tone: Tone;
  name: Record<Lang, string>;
  summary: Record<Lang, string>;
  turnaround: Record<Lang, string>;
  usd: string;
  brl: Record<Lang, string>;
}

export const services: Service[] = [
  {
    id: "quick",
    tone: "citrus",
    name: { en: "Quick Fix", pt: "Correção rápida" },
    summary: {
      en: "A focused theme fix, with a clear before and after.",
      pt: "Um ajuste pontual de tema, com o antes e o depois claros.",
    },
    turnaround: { en: "24h", pt: "24h" },
    usd: "US$89",
    brl: { en: "R$290", pt: "R$ 290" },
  },
  {
    id: "conversion",
    tone: "foam",
    name: { en: "Conversion & Cart Fix", pt: "Conversão e carrinho" },
    summary: {
      en: "A cart, purchase-path, or product-page problem that is getting in the way of the sale.",
      pt: "Um problema de carrinho, de caminho de compra ou de página de produto que está atrapalhando a venda.",
    },
    turnaround: { en: "24–48h", pt: "24–48h" },
    usd: "US$199",
    brl: { en: "R$690", pt: "R$ 690" },
  },
  {
    id: "speed",
    tone: "ink",
    name: { en: "Speed Check & Script Cleanup", pt: "Performance e scripts" },
    summary: {
      en: "Theme weight and third-party scripts, with the unused ones removed.",
      pt: "Peso do tema e scripts de terceiros, com o que não está em uso removido.",
    },
    turnaround: { en: "48h", pt: "48h" },
    usd: "US$199",
    brl: { en: "R$690", pt: "R$ 690" },
  },
  {
    id: "a11y",
    tone: "cobalt",
    name: { en: "Accessibility Audit (WCAG)", pt: "Auditoria de acessibilidade (WCAG)" },
    summary: {
      en: "A WCAG-oriented review of the storefront and a written list of what to fix.",
      pt: "Uma revisão da vitrine orientada a WCAG e uma lista escrita do que corrigir.",
    },
    turnaround: { en: "5 business days", pt: "5 dias úteis" },
    usd: "US$300",
    brl: { en: "R$1,090", pt: "R$ 1.090" },
  },
  {
    id: "deep",
    tone: "tangerine",
    name: { en: "Deep Fix / Emergency", pt: "Correção profunda / emergência" },
    summary: {
      en: "A larger break, a launch blocker, or a theme area that needs more than a patch.",
      pt: "Uma quebra maior, um bloqueio de lançamento ou uma área do tema que pede mais do que um remendo.",
    },
    turnaround: { en: "48–72h", pt: "48–72h" },
    usd: "US$399",
    brl: { en: "R$1,490", pt: "R$ 1.490" },
  },
];

export const categories: Category[] = ["theme", "conversion", "performance", "access", "interface"];

export function priceFor(service: Service, currency: Currency, lang: Lang) {
  return currency === "usd" ? service.usd : service.brl[lang];
}

export function formatCount(template: string, count: number) {
  return template.replace("{n}", String(count));
}
