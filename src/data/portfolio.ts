import barkadabyteImg from "../assets/barkadabyte.png";
import scan2borrowImg from "../assets/scan2borrow-img.jpg";

export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
] as const;

export const profile = {
  initials: "JV",
  name: "Jeni\u00F1a Margaret G. Vargas",
  hero: {
    heading: {
      firstLine: "I\u2019m Jeni\u00F1a",
      secondLine: "Margaret G. Vargas",
    },
    summary: {
      lead: "An IT student and web developer building thoughtful interfaces and reliable database-driven systems that make everyday workflows feel effortless using ",
      techStack: "HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap, jQuery, Java, and VB.NET.",
    },
    actions: {
      primary: {
        label: "Explore my work",
        href: "#work",
      },
      resume: {
        label: "View resume",
        href: "#credentials",
      },
      secondary: {
        label: "More about me",
        href: "#about",
      },
    },
    availabilityLabel: "Availability",
    availability: "Open for OJT / Internship & Junior IT / Developer Roles",
    locationLabel: "Base",
    location: ["Based in Negros Occidental,", "Philippines"],
    card: {
      noteLabel: "Field Note / 001",
      year: "2026",
      name: "Jeni\u00F1a Margaret G. Vargas",
      role: "IT Student & Web Developer",
      badge: "code meets clarity",
      portraitUrl: "/margaret img.jpg",
      portraitAlt: "Portrait of Jeni\u00F1a Margarette G. Vargas",
    },
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
  actions: {
    caseStudy: "Mini case study",
    liveDemo: "Live demo",
    githubRepo: "GitHub repository",
    shareLink: "Share link",
    copiedLink: "Copied link",
    close: "Close",
    previousCaseStudy: "Previous case study",
    nextCaseStudy: "Next case study",
  },
  caseStudyLabels: {
    role: "Role",
    context: "Context",
    focusArea: "Focus Area",
    toolsUsed: "Tools & Technologies Used",
    keyTakeaway: "Key Takeaway",
  },
} as const;

export const projects = [
  {
    slug: "scan2borrow",
    number: "01",
    track: "Engineering Case Study",
    title: "Scan2Borrow",
    eyebrow: "Capstone \u00B7 Library System",
    caseStudyEyebrow: "Software Engineering \u00B7 BSIT Capstone",
    subtitle:
      "An automated web-based library borrowing and return system powered by barcode recognition, centralized MySQL inventory tracking, and automated Email/SMS notifications.",
    description:
      "A web-based library management system that makes borrowing, returns, and inventory tracking simpler for students and staff.",
    contribution:
      "Built PHP and MySQL workflows, connected database operations to a responsive interface, and refactored legacy code while preserving core business logic.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    accent: "blue",
    image: scan2borrowImg,
    imageAlt: "Scan2Borrow library management system student dashboard",
    liveDemoUrl: "", // no live demo, this is for BCC as an internal tool
    githubUrl: "https://github.com/adriaanamd/scan2borrow",
    caseStudy: {
      meta: {
        role: "Web Developer & Database Engineer",
        context: "BSIT Capstone Project \u00B7 Binalbagan Catholic College (Nov 2026)",
        focusArea: "Barcode Circulation \u00B7 Role-Based PHP/MySQL \u00B7 OTP & Overdue Alerts",
      },
      metrics: [
        {
          value: "4.75 / 5.0",
          label:
            "Overall combined evaluation mean (\u201CStrongly Agree\u201D) across student borrowers and IT expert review, led by Efficiency at 4.85.",
        },
        {
          value: "\u2264 2s Scan",
          label:
            "Target response time for barcode borrowing and return transactions (\u2264 3s catalog search) supporting ~50 concurrent local users.",
        },
        {
          value: "6 User Roles",
          label:
            "Role-based access across Admin, Librarian, Student, Teacher, Guest/Alumni, and Maintainer backed by a 12-entity MySQL schema.",
        },
      ],
      sections: [
        {
          number: "01",
          eyebrow: "01 \u00B7 The Problem",
          heading:
            "Replacing manual physical library cards and handwritten ledgers with instant barcode circulation.",
          body: "The institution\u2019s library previously relied on a manual process where students wrote borrowing details on physical library cards while librarians recorded and verified every transaction by hand. As student enrollment and book collections grew, manual record-keeping created daily bottlenecks for both borrowers and staff.",
          bullets: [
            "Long queues at the circulation desk during peak borrowing and return hours due to manual card verification.",
            "Inaccurate or misplaced handwritten records that caused delays in checking real-time book availability and physical shelf locations.",
            "Difficulty monitoring overdue books, computing penalties consistently, and compiling circulation reports manually.",
          ],
        },
        {
          number: "02",
          eyebrow: "02 \u00B7 System Architecture",
          heading:
            "A local-network PHP, MySQL, and AJAX architecture integrated with USB barcode scanners and OTP/SMS gateways.",
          body: "Scan2Borrow uses a three-tier local web architecture hosted on Apache (XAMPP) and MySQL/MariaDB over the campus network, pairing fast local barcode transactions with internet-connected email and SMS notification services.",
          bullets: [
            "Presentation Layer: Responsive interfaces built with HTML5, CSS3, JavaScript (AJAX), and Bootstrap, accepting USB barcode scanner input with manual barcode entry as a fallback.",
            "Application Layer: PHP backend enforcing role-based access control (RBAC), password hashing, 10-minute inactivity session timeouts, borrower eligibility validation, and automated overdue fine calculation.",
            "Normalized MySQL Schema: Centralized database modeling Users, Guests, Staff, Librarians, Books, Categories, Barcodes, BookCopies, BookInventory, Borrowings, Returns, Fines, and Reports.",
          ],
        },
        {
          number: "03",
          eyebrow: "03 \u00B7 Core Features & Engineering",
          heading:
            "End-to-end circulation automation from barcode login and hold queues to QR receipts and smart recommendations.",
          body: "The platform provides dedicated dashboards for borrowers and library administrators, keeping book availability, active borrowing slots, and audit logs synchronized in real time.",
          bullets: [
            "Barcode Login & OTP Registration: Students register with photo capture and Email/SMS One-Time Password (OTP) verification, then authenticate via their Student ID barcode.",
            "Automated Borrowing, Returns & Hold Queues: Scanning book barcodes verifies borrowing slot capacity (up to 3 slots), tracks pending/approved loans, generates QR borrowing receipts, and manages reservation waitlists and renewals.",
            "Catalog Discovery & Student Engagement: Searchable catalog by title, author, ISBN, category, or barcode showing shelf locations, history-based book recommendations, and reading achievement badges.",
            "Admin Governance & CSV Reporting: Real-time circulation alerts, automated due-date and overdue Email/SMS reminders, unprinted barcode export, activity logs, CSV/printable reports, and scheduled database backups.",
          ],
        },
        {
          number: "04",
          eyebrow: "04 \u00B7 Impact & Quality Built-In",
          heading:
            "Validated across 10 end-to-end test suites with a 4.75 / 5.00 combined evaluation score.",
          body: "Scan2Borrow was evaluated across functional, integration, usability, performance, security, and backup/recovery testing (TC-01 to TC-10) in compliance with the Philippine Data Privacy Act of 2012 (RA 10173), achieving a highly positive evaluation within a practical \u20B14,900 initial deployment budget.",
          bullets: [
            "Efficiency (4.85 / 5.00): Highest-rated criterion in combined student and IT expert evaluations, confirming faster transaction processing and reduced librarian workload.",
            "Reliability & Performance (4.79 / 5.00): Accurate inventory status updates, dependable barcode recognition, and consistent local-network responsiveness.",
            "Usability (4.78 / 5.00) & User Satisfaction (4.70 / 5.00): Clear navigation, actionable status feedback, and intuitive workflows for students and staff.",
            "Functionality (4.61 / 5.00): Complete coverage of barcode circulation, overdue penalty calculation, role permissions, and exportable administrative reports.",
          ],
        },
      ],
      tools: [
        "PHP",
        "MySQL / MariaDB",
        "HTML5",
        "CSS3",
        "JavaScript (AJAX)",
        "Bootstrap",
        "Apache (XAMPP)",
        "USB Barcode Scanner",
        "Email & SMS OTP",
        "QR Code Receipts",
        "Git & GitHub",
      ],
      takeaway:
        "Effective library automation doesn\u2019t require prohibitive infrastructure\u2014pairing accessible barcode hardware with a normalized MySQL schema and role-based PHP workflows turns slow, error-prone paper ledgers into a fast, transparent experience for both students and librarians.",
    },
  },
  {
    slug: "barkadabyte",
    number: "02",
    track: "Engineering Case Study",
    title: "BarkadaByte",
    eyebrow: "Restaurant \u00B7 Web Experience",
    caseStudyEyebrow: "Web Application \u00B7 Interactive Restaurant Platform",
    subtitle:
      "An interactive Filipino restaurant web experience featuring instant menu discovery, category filtering, client-side cart workflows, table reservations, and admin management.",
    description:
      "An interactive restaurant experience with menu discovery, food categories, a shopping cart, and table reservation forms.",
    contribution:
      "Designed the customer-facing experience and built dynamic account and admin features, using localStorage to manage application data.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "localStorage"],
    accent: "coral",
    image: barkadabyteImg,
    imageAlt: "BarkadaByte restaurant web application menu and ordering interface",
    liveDemoUrl: "https://barkadabyte.netlify.app",
    githubUrl: "https://github.com/REuhLys04/BarkadaByte-Website",
    caseStudy: {
      meta: {
        role: "Frontend & UI/UX Developer",
        context: "Web Development Project \u00B7 Interactive Restaurant System",
        focusArea: "Menu Discovery \u00B7 Cart & Reservation Flows \u00B7 localStorage State",
      },
      metrics: [
        {
          value: "6 Categories",
          label:
            "Instant client-side filtering across All, Streetfoods, Breakfast, Dessert, Beverage, and Drinks with live keyword search.",
        },
        {
          value: "Zero Reloads",
          label:
            "Reactive JavaScript DOM updates and persistent browser localStorage keep cart items, accounts, and menu data in sync.",
        },
        {
          value: "Dual Flow",
          label:
            "Unified customer ordering and table reservation experience paired with dynamic admin menu and account controls.",
        },
      ],
      sections: [
        {
          number: "01",
          eyebrow: "01 \u00B7 The Problem",
          heading:
            "Making group dining discovery, ordering, and table reservations feel effortless on the web.",
          body: "Static restaurant menus force diners to scroll through unstructured lists without quick search, category filtering, or an easy way to build an order and reserve a table in one place.",
          bullets: [
            "Customers needed a fast way to browse Filipino comfort food favorites by category and price without full-page reloads.",
            "Group orders required an interactive shopping cart badge and item counter that persisted across browsing sessions.",
            "Staff needed a lightweight administrative interface to manage menu items, customer accounts, and reservations without complex backend overhead.",
          ],
        },
        {
          number: "02",
          eyebrow: "02 \u00B7 System Architecture",
          heading:
            "Modular HTML5, CSS3, Bootstrap, and vanilla JavaScript backed by structured localStorage persistence.",
          body: "BarkadaByte is designed as a fast, client-rendered web application that pairs Bootstrap layout primitives with custom CSS styling and a structured localStorage data layer.",
          bullets: [
            "UI & Layout Layer: Responsive card grid, persistent dark navigation bar with quick-action icon pills, and warm amber/gold food cards designed around Filipino dining culture.",
            "State & Storage Layer: Structured JSON serialization in browser localStorage managing menu inventory, cart state, user sessions, and reservation records.",
            "Interactive Event Pipeline: Vanilla JavaScript event handlers powering real-time search filtering, category tab switching, cart badge updates, and form validation.",
          ],
        },
        {
          number: "03",
          eyebrow: "03 \u00B7 Core Features & Engineering",
          heading:
            "From instant streetfood and dessert filtering to cart management and table reservations.",
          body: "Every interaction in BarkadaByte is built to minimize friction between discovering a dish and completing an order or reservation.",
          bullets: [
            "Live Search & Category Pills: Instant filtering across dishes like Halo-Halo Special, Taho, Siomai, Hamburger, and Lomi by category or search query.",
            "Shopping Cart & Quick Buy: One-click Buy actions with real-time navbar cart counter updates and order summary calculation.",
            "Table Reservation & Customer Accounts: Validated reservation forms and user profile workflows stored persistently in the browser.",
            "Admin Management Controls: Dynamic interface for adding, updating, and organizing menu offerings and reviewing customer activity.",
          ],
        },
        {
          number: "04",
          eyebrow: "04 \u00B7 Impact & Quality Built-In",
          heading: "A responsive, zero-latency ordering experience with clean visual hierarchy.",
          body: "By focusing on clear typography, appetizing card presentation, and reliable client-side state management, BarkadaByte delivers a complete end-to-end restaurant web experience.",
          bullets: [
            "Immediate visual feedback on search queries, category switches, and cart additions.",
            "Consistent cross-device layout using Bootstrap grid utilities and custom responsive breakpoints.",
            "Resilient client-side state handling that preserves user carts and account data across page refreshes.",
          ],
        },
      ],
      tools: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Bootstrap",
        "localStorage API",
        "Responsive UI/UX",
        "Git & GitHub",
      ],
      takeaway:
        "Thoughtful client-side state management and clear visual categorization can turn a simple restaurant menu into an engaging, app-like ordering and reservation experience.",
    },
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
  copyrightName: "Jeni\u00F1a Margarette G. Vargas",
  copyrightMark: "\u00A9",
  message: "Designed with curiosity. Built with care.",
} as const;

export const uiText = {
  home: "Home",
  mainNavigation: "Main navigation",
  toggleMenu: "Toggle menu",
} as const;
