export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
] as const;

export const profile = {
  initials: "JV",
  name: "Jeni\u00F1a Vargas",
  hero: {
    kicker: "IT student \u00B7 developer \u00B7 problem solver",
    heading: {
      before: "Building useful",
      accent: "digital",
      after: "things, thoughtfully.",
    },
    summary:
      "I\u2019m Jeni\u00F1a, an aspiring IT professional turning ideas into reliable, approachable web experiences.",
    locationLabel: "Based in",
    location: ["Negros Occidental", "Philippines"],
    cta: "Explore selected work",
  },
} as const;

export const contact = {
  email: "jenmargvargas@gmail.com",
  phone: "+63 993 079 7626",
  phoneHref: "tel:+639930797626",
  github: "https://github.com/REuhLys04",
  cta: "Let\u2019s talk",
} as const;

export const workSection = {
  kicker: "01 / Selected work",
  heading: "Ideas made tangible.",
  description: "Two projects, one common goal: making everyday systems feel easier to use.",
  contributionLabel: "My contribution",
} as const;

export const projects = [
  {
    number: "01",
    title: "Scan2Borrow",
    eyebrow: "Capstone \u00B7 Library System",
    description:
      "A web-based library management system that makes borrowing, returns, and inventory tracking simpler for students and staff.",
    contribution:
      "Built PHP and MySQL workflows, connected database operations to a responsive interface, and refactored legacy code while preserving core business logic.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600",
    imageAlt: "Code displayed on a laptop at a developer workspace",
  },
  {
    number: "02",
    title: "BarkadaByte",
    eyebrow: "Restaurant \u00B7 Web Experience",
    description:
      "An interactive restaurant experience with menu discovery, food categories, a shopping cart, and table reservation forms.",
    contribution:
      "Designed the customer-facing experience and built dynamic account and admin features, using localStorage to manage application data.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "localStorage"],
    accent: "coral",
    image: undefined,
    imageAlt: undefined,
  },
] as const;

export const aboutSection = {
  kicker: "02 / About me",
  quoteMark: "\u201C",
  quote: "Good technology should solve the problem without becoming one.",
  headingBefore: "I care about the space between",
  headingAccent: "how it works",
  headingAfter: "and how it feels.",
  description:
    "My experience spans responsive interfaces, database-driven systems, business applications, testing, debugging, and UI/UX design. I use AI as a development partner\u2014not a substitute for understanding\u2014to explore, verify, and build with more intention.",
} as const;

export const skillGroups = [
  ["Languages", "HTML5, CSS3, JavaScript, PHP, Java, VB.NET"],
  ["Frameworks", "Bootstrap, jQuery"],
  ["Data & backend", "MySQL, REST, JSON"],
  ["Tools", "Git, GitHub, Postman"],
  ["AI workflow", "ChatGPT, Gemini, GitHub Copilot, Claude Code"],
  ["Foundations", "OOP, DBMS, testing & debugging"],
] as const;

export const credentialsSection = {
  kicker: "03 / Credentials",
  education: {
    label: "Education \u00B7 Expected July 2027",
    title: "B.S. in Information Technology",
    institution: "Binalbagan Catholic College",
    details: "GPA 85.6 \u00B7 Negros Occidental, Philippines",
    subjects: [
      "Intelligent Systems",
      "Software Engineering",
      "Project Management",
      "Data Structures",
    ],
  },
  certification: {
    label: "Certification \u00B7 September 2026",
    title: "AI Literacy & Responsible Use",
    subtitle: "Certificate of Completion",
    institution: "Map\u00FAa University",
    mark: "AI",
  },
} as const;

export const contactSection = {
  kicker: "04 / Get in touch",
  heading: "Have a problem worth solving?",
  sayHello: "Say hello",
  emailLabel: "Email",
  phoneLabel: "Phone",
  githubLabel: "Find me on",
  githubName: "GitHub",
  copyLabel: "Copy",
  copySuccess: "Copied to clipboard",
} as const;

export const footer = {
  copyrightName: "Jeni\u00F1a Margaret G. Vargas",
  copyrightMark: "\u00A9",
  message: "Designed with curiosity. Built with care.",
} as const;

export const uiText = {
  home: "Home",
  mainNavigation: "Main navigation",
  toggleMenu: "Toggle menu",
} as const;
