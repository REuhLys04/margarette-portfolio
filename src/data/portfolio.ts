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
        href: "/jenina resume.pdf",
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
    liveDemoDisabledBadge: "BCC Internal LAN",
    liveDemoDisabledReason:
      "Deployed exclusively on Binalbagan Catholic College\u2019s internal library network",
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
    caseStudyEyebrow: "Web Application \u00B7 Multi-Page Restaurant & Admin Platform",
    subtitle:
      "A 9-page Filipino restaurant web platform combining live menu discovery, a 3-step GCash/COD cart checkout with printable receipts, table reservations, and a 5-tab role-guarded admin analytics suite powered by localStorage.",
    description:
      "An interactive restaurant experience with menu discovery, food categories, a shopping cart, and table reservation forms.",
    contribution:
      "Designed the customer-facing experience and built dynamic account and admin features, using localStorage to manage application data.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "localStorage"],
    accent: "coral",
    image: barkadabyteImg,
    imageAlt: "BarkadaByte restaurant web application menu and ordering interface",
    liveDemoUrl: "https://barkadabyte.netlify.app",
    liveDemoDisabledBadge: undefined,
    liveDemoDisabledReason: undefined,
    githubUrl: "https://github.com/REuhLys04/BarkadaByte-Website",
    caseStudy: {
      meta: {
        role: "Project Manager & Frontend / UI Developer",
        context: "5-Member Team Project \u00B7 Binalbagan, Negros Occidental",
        focusArea: "9-Page Ordering Flow \u00B7 3-Step Cart Checkout \u00B7 5-Tab Admin Suite",
      },
      metrics: [
        {
          value: "9 Pages",
          label:
            "End-to-end architecture across Home, About, Interactive Menu, 3-Step Cart, Reservations, Testimonials, Contact, Auth, and Admin Dashboard.",
        },
        {
          value: "17+ Dishes",
          label:
            "Live keyword search and radio filtering across Streetfoods, Breakfast, Dessert, Beverage, and Drinks (\u20B120\u2013\u20B1130) with 5-star ratings.",
        },
        {
          value: "5 Admin Tabs",
          label:
            "Role-guarded dashboard (userRole === 'admin') for KPI analytics, Menu CRUD, Order status lifecycles, Users, and Sales Reports.",
        },
      ],
      sections: [
        {
          number: "01",
          eyebrow: "01 \u00B7 The Problem",
          heading:
            "Bringing barkada dining discovery, cart checkout, table reservations, and restaurant operations into one cohesive web platform.",
          body: "Built around the story that \u201Cthe best coding sessions and gaming marathons happen over good food,\u201D BarkadaByte set out to replace static restaurant pages with an interactive ordering and management experience tailored for group dining in Binalbagan, Negros Occidental.",
          bullets: [
            "Diners needed a fast, zero-reload way to search and filter affordable Filipino comfort food and drinks (\u20B120\u2013\u20B1130) by category, rate dishes, and build group orders.",
            "Checkout needed to reflect real local fulfillment and payment workflows\u2014supporting Delivery (+\u20B130.00) vs. free Store Pickup alongside GCash or Cash on Delivery (COD) and printable order receipts.",
            "Restaurant staff needed an authenticated admin back-office to add or edit menu items, update order statuses, manage registered customer accounts, and track revenue by category.",
          ],
        },
        {
          number: "02",
          eyebrow: "02 \u00B7 System Architecture",
          heading:
            "A 9-page HTML5, CSS3, and vanilla JavaScript architecture synchronized through structured localStorage state keys.",
          body: "BarkadaByte is engineered as a 9-page client-rendered web application (index.html, about.html, menu.html, cart.html, reservation.html, testimonials.html, contact.html, login.html, and admin.html) where customer actions and admin analytics stay synchronized through a shared browser localStorage persistence engine.",
          bullets: [
            "Presentation & Styling Layer: Custom responsive CSS (style.css, contact.css, and dedicated checkout/admin layouts) paired with Poppins and Plus Jakarta Sans typography, Boxicons, and Font Awesome icons.",
            "Client-Side State Engine (localStorage): Synchronizes active shopping carts (cart), customer order records (bb_orders), CRUD menu catalogs (bb_menu), registered accounts (bb_users), and session tokens (currentUser, userRole).",
            "Role-Based Auth & Account Safeguards: Toggleable Log in / Sign up flow (#modeToggle) differentiating customers (userRole === 'user') from administrators (userRole === 'admin'), plus an Account Settings modal enforcing a 60-day display-name change cooldown (lastNameChange) and account deletion.",
          ],
        },
        {
          number: "03",
          eyebrow: "03 \u00B7 Core Features & Engineering",
          heading:
            "From live category filtering and 3-step GCash/COD checkout to a 5-tab administrative analytics dashboard.",
          body: "Every page in BarkadaByte connects the customer-facing dining journey directly to the operational back-office without requiring external database servers.",
          bullets: [
            "Interactive Menu Discovery (menu.html): Live keyword search (#input), category filters (All, Streetfoods, Breakfast, Dessert, Beverage, Drinks), 3 paginated grids across 17+ dishes (Halo-Halo Special, Taho, Siomai, Lomi, Pancit, Nachofries, Shawarma, Chocolate Float), interactive 5-star ratings, and instant cart badge (#cartCount) updates.",
            "3-Step Cart & Printable Receipt Flow (cart.html): Step 1 manages +/\u2212 item quantities and Delivery (\u20B130.00) vs. Store Pickup (Free) totals; Step 2 captures customer details and GCash or Cash on Delivery selection; Step 3 renders an Order Confirmed summary with window.print() receipt generation.",
            "Table Reservations & Social Proof (reservation.html, testimonials.html): Validated table booking form (party count, time, and date) paired with a customer stories showcase highlighting a 4.9 overall rating, 2,400+ happy customers, and 98% return rate.",
            "5-Tab Admin Suite (admin.html): Auth-guarded portal featuring Dashboard (4 KPI cards, Revenue by Category bar chart, Recent Orders), Menu Items (search, category tabs, Add/Edit/Delete modal synced to bb_menu), Orders (cart-to-order bridge getOrdersFromCart() and status updates across Pending, Confirmed, Completed, Cancelled), Users (bb_users management), and Sales Report (Avg. Order Value, Best Seller, Top Selling Items chart, and category breakdown).",
          ],
        },
        {
          number: "04",
          eyebrow: "04 \u00B7 Impact & Quality Built-In",
          heading:
            "End-to-end state continuity between customer ordering flows and back-office restaurant analytics.",
          body: "Coordinating a 5-member development team as Project Manager while engineering the customer account and localStorage admin workflows ensured that every UI action\u2014from clicking Buy on a \u20B120 Taho to marking an order Completed in the admin suite\u2014reflected immediately across the platform.",
          bullets: [
            "Seamless Cart-to-Admin Bridge: Active customer carts and checkout submissions bridge directly into bb_orders, enabling the admin dashboard and sales report tabs to compute live revenue and top-selling items automatically.",
            "Defensive Session & Profile Controls: Auth guards on admin.html block unauthorized access, while user profile settings validate credential updates and enforce cooldown rules in script.js.",
            "Cohesive Multi-Page Experience: Responsive navigation, user dropdowns, newsletter confirmations, and warm Filipino comfort-food branding across all 9 pages.",
          ],
        },
      ],
      tools: [
        "HTML5 (9-Page Architecture)",
        "CSS3 (Grid & Flexbox)",
        "Vanilla JavaScript (ES6+)",
        "localStorage State Engine",
        "Bootstrap",
        "Boxicons & Font Awesome",
        "Google Fonts (Poppins & Plus Jakarta Sans)",
        "Git & GitHub",
      ],
      takeaway:
        "Even without a traditional backend server, a well-structured localStorage state schema and role-guarded architecture can power a complete two-sided restaurant platform\u2014connecting live menu filtering and 3-step GCash/COD checkout directly to a 5-tab admin analytics and order management suite.",
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
