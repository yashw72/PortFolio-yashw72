// ============================================================
// portfolioData.js — All portfolio content for Yash Warungase
// Update this file to customize your portfolio content
// ============================================================

export const PERSONAL = {
  name: 'Yash Sandip Warungase',
  firstName: 'YASH',
  lastName: 'WARUNGASE.',
  role: 'FULL STACK DEVELOPER & BUILDER',
  tagline: 'Crafting scalable full-stack applications, robust backend systems, and modern web experiences that are',
  taglineHighlight: 'clean, fast',
  taglineEnd: 'and built to perform.',
  status: 'OPEN TO WORK',
  location: 'PUNE, IN',
  locationCoords: '18.52° N',
  // ⚠️ Update with your real links:
  email: 'yashwarungase5@gmail.com',
  phone: '+91 XXXXXXXXXX',
  github: 'https://github.com/yashw72',
  linkedin: 'https://linkedin.com/in/yashwarungase', // Update this
  leetcode: 'https://leetcode.com/yashw72',           // Update this
  whatsapp: 'https://wa.me/91XXXXXXXXXX',             // Update this
  resume: '/Yash_Warungase_Resume.pdf',               // Add resume to /public
  profileImage: '/profile.jpg',                        // Add profile photo to /public
  passId: '#7254-PUNE-IN',
  passAccess: 'YW // ACCESS 01',
  passYear: '2026',
};

export const HERO_STATS = [
  { value: '04+', label: 'PROJECTS BUILT' },
  { value: 'FULL STACK', label: '& AI/ML WORKFLOWS' },
  { value: 'B.E. IT', label: '(2025–2028)' },
];

export const HERO_TECH_BADGES = [
  { icon: '⚛', label: 'REACT' },
  { icon: '🟨', label: 'JAVASCRIPT' },
  { icon: '🐍', label: 'PYTHON' },
  { icon: '🟢', label: 'NODE.JS' },
  { icon: '🗄', label: 'MONGODB' },
];

export const MARQUEE_ITEMS = [
  'OPEN TO WORK',
  'BUILDING DIGITAL PRODUCTS',
  'FULL STACK DEVELOPMENT',
  'REACT',
  'NODE.JS',
  'PYTHON',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'REST APIS',
  'MONGODB',
];

export const ABOUT_BIO = {
  quote1Parts: [
    "I'm an aspiring full-stack developer with a strong foundation in ",
    { chip: 'React & JavaScript' },
    ", ",
    { chip: 'Node.js & Express' },
    ", and ",
    { chip: 'Python & Django' },
    ". Currently pursuing B.E. in Information Technology at Pune, I build end-to-end web applications with clean, maintainable code.",
  ],
  quote2Parts: [
    "I have hands-on experience with databases like ",
    { chip: 'MongoDB, MySQL & PostgreSQL' },
    ", and I'm passionate about ",
    { chip: 'backend architecture & REST APIs' },
    ". I love solving real-world problems through scalable, performance-driven solutions — and I never stop learning.",
  ],
  meta: [
    { label: 'LOCATION', value: 'Pune, India' },
    { label: 'ROLE', value: 'Full Stack Dev' },
    { label: 'STATUS', value: 'Open to Work ✦' },
    { label: 'FOCUS', value: 'Web Development' },
  ],
};

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'LANGUAGES',
    accentColor: '#FF5733',
    textColor: '#000',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frontend',
    label: 'FRONTEND',
    accentColor: '#C4FF00',
    textColor: '#000',
    skills: ['⚛ React', '◈ HTML / CSS', '🌊 TailwindCSS', '⚡ Vite'],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    accentColor: '#A78BFA',
    textColor: '#fff',
    skills: ['🟢 Node.js', '🚂 Express.js', '🎸 Django', '⚡ REST APIs'],
  },
  {
    id: 'database',
    label: 'DATABASE',
    accentColor: '#FF5733',
    textColor: '#000',
    skills: ['🍃 MongoDB', '🗄 MySQL', '🐘 PostgreSQL', '◼ SQLite'],
  },
  {
    id: 'tools',
    label: 'TOOLS',
    accentColor: '#C4FF00',
    textColor: '#000',
    skills: ['⎇ Git', '⊛ GitHub', '◧ VS Code', '🔬 Postman', '🐋 Docker'],
  },
];

// ⚠️ Replace with your REAL projects:
export const PROJECTS = [
  {
    id: '01',
    title: 'TaskFlow Pro',
    badge: 'FULL-STACK PRODUCTIVITY APP',
    badgeColor: '#FF5733',
    badgeTextColor: '#fff',
    description:
      'A full-stack productivity platform where users create, organize, and track tasks with real-time updates, user authentication, priority scheduling, and team collaboration features. Built with a focus on clean UX and scalable backend architecture.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/yashw72',
    demo: null,
    projectNumber: '01',
    bgAccent: '#FF5733',
  },
  {
    id: '02',
    title: 'ShopCart',
    badge: 'E-COMMERCE PLATFORM',
    badgeColor: '#A78BFA',
    badgeTextColor: '#fff',
    description:
      'A feature-rich e-commerce web application with product listings, category filtering, cart management, user authentication, and order tracking. Includes an admin panel for inventory and order management built with Django REST Framework.',
    stack: ['React', 'Django', 'Python', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/yashw72',
    demo: null,
    projectNumber: '02',
    bgAccent: '#A78BFA',
  },
  {
    id: '03',
    title: 'DevConnect',
    badge: 'DEVELOPER SOCIAL PLATFORM',
    badgeColor: '#C4FF00',
    badgeTextColor: '#000',
    description:
      'A developer-focused social networking platform where users share projects, follow peers, post tech articles, and connect professionally. Features JWT authentication, real-time notifications, and a clean card-based feed interface.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'],
    github: 'https://github.com/yashw72',
    demo: null,
    projectNumber: '03',
    bgAccent: '#C4FF00',
  },
];

export const JOURNEY = [
  {
    id: 1,
    type: 'EDUCATION',
    typeColor: '#C4FF00',
    typeTextColor: '#000',
    title: 'B.E. in Information Technology',
    organization: 'Pune University · Pune, Maharashtra',
    period: 'AUG 2025 – 2028 PRESENT',
    highlight: 'In Progress',
    description:
      'Pursuing core IT & Computer Science subjects including Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming, and Software Engineering principles.',
    link: null,
    linkLabel: null,
  },
  {
    id: 2,
    type: 'EDUCATION',
    typeColor: '#C4FF00',
    typeTextColor: '#000',
    title: 'HSC — 12th Grade',
    organization: 'Maharashtra State Board · Pune, Maharashtra',
    period: 'JUN 2023 – MAR 2025',
    highlight: null,
    description:
      'Completed Higher Secondary Certificate with strong performance in Mathematics, Physics, and Computer Science. Developed foundational problem-solving and analytical thinking skills.',
    link: null,
    linkLabel: null,
  },
];

export const SOCIAL_LINKS = [
  {
    label: 'GITHUB',
    icon: '⌥',
    description: 'View my code & projects',
    url: 'https://github.com/yashw72',
    arrow: '↗',
  },
  {
    label: 'LINKEDIN',
    icon: 'in',
    description: 'Connect professionally',
    url: 'https://linkedin.com/in/yashwarungase',
    arrow: '↗',
  },
  {
    label: 'LEETCODE',
    icon: '{}',
    description: 'See my problem solving',
    url: 'https://leetcode.com/yashw72',
    arrow: '↗',
  },
  {
    label: 'EMAIL',
    icon: '@',
    description: 'yashwarungase5@gmail.com',
    url: 'mailto:yashwarungase5@gmail.com',
    arrow: '→',
  },
];
