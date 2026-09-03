// ============================================================
// portfolioData.js — Yash Warungase | Digital Developer Universe
// ============================================================

export const PERSONAL = {
  name: 'Yash Sandip Warungase',
  firstName: 'YASH',
  lastName: 'WARUNGASE',
  role: 'FULL STACK DEVELOPER',
  roles: [
    'FULL STACK DEVELOPER',
    'SOFTWARE BUILDER',
    'PROBLEM SOLVER',
    'AI/ML ENTHUSIAST',
  ],
  tagline:
    'Engineering scalable full-stack architectures, high-performance web systems, and intelligent digital experiences with surgical precision.',
  location: 'Pune, India',
  coordinates: '18.5204° N, 73.8567° E',
  status: 'ONLINE // OPEN TO OPPORTUNITIES',
  statusShort: 'OPEN TO WORK',
  uptime: '99.98%',
  experienceYears: '3+ YRS EXPLORING',
  email: 'yashwarungase5@gmail.com',
  phone: '+91 80104 22754',
  github: 'https://github.com/yashw72',
  linkedin: 'https://linkedin.com/in/yashwarungase',
  leetcode: 'https://leetcode.com/yashw72',
  resume: '/resume.pdf',
  avatarInitials: 'YW',
};

export const DIGITAL_IDENTITY = {
  codename: 'YASH.DEV // 01',
  handle: '@yashw72',
  title: 'FULL STACK SOFTWARE ENGINEER',
  bioLines: [
    'Focused on architecting end-to-end distributed web applications, robust backend microservices, and reactive user interfaces.',
    'Passionate about computational problem solving, data structures & algorithms, and bridging modern web development with AI/ML workflows.',
  ],
  telemetry: [
    { label: 'CORE SPECIALTY', value: 'Full Stack & APIs' },
    { label: 'BASE LOCATION', value: 'Pune, Maharashtra, IN' },
    { label: 'PRIMARY STACK', value: 'React · Node.js · Python' },
    { label: 'CURRENT PURSUIT', value: 'B.E. Information Technology' },
    { label: 'METHODOLOGY', value: 'Clean Code · Test Driven' },
    { label: 'AVAILABILITY', value: 'Full-time / Internships' },
  ],
  interests: [
    { title: 'WEB ENGINEERING', desc: 'Scalable cloud apps, RESTful architectures, and microservices.' },
    { title: 'AI / ML INTEGRATION', desc: 'Practical machine learning models, NumPy/Pandas pipelines, and predictive APIs.' },
    { title: 'DSA & PROBLEM SOLVING', desc: 'Algorithm optimization, algorithmic complexity analysis, and competitive programming.' },
    { title: 'SYSTEM DESIGN', desc: 'State machines, database normalization, relational & NoSQL data modeling.' },
  ],
};

export const TECH_ARSENAL = {
  categories: [
    { id: 'programming', label: 'PROGRAMMING', count: 5 },
    { id: 'frontend', label: 'FRONTEND', count: 4 },
    { id: 'backend', label: 'BACKEND', count: 4 },
    { id: 'data_ai', label: 'DATA & AI', count: 4 },
    { id: 'tools', label: 'TOOLS', count: 4 },
  ],
  skills: {
    programming: [
      { name: 'C', level: 'Fundamental', tag: 'System / Low-Level', icon: '©' },
      { name: 'C++', level: 'Advanced DSA', tag: 'STL / Algorithms', icon: '++' },
      { name: 'Java', level: 'OOP & Architecture', tag: 'Core / Enterprise', icon: '☕' },
      { name: 'Python', level: 'Backend & Data', tag: 'Django / ML', icon: '🐍' },
      { name: 'JavaScript', level: 'Modern ES6+', tag: 'Full Stack Web', icon: 'JS' },
    ],
    frontend: [
      { name: 'React', level: 'Advanced SPAs', tag: 'Hooks / State / Routing', icon: '⚛' },
      { name: 'Tailwind CSS', level: 'Rapid UI', tag: 'Responsive Design', icon: '🌊' },
      { name: 'HTML5', level: 'Semantic Markup', tag: 'Accessibility / SEO', icon: '◈' },
      { name: 'CSS3', level: 'Modern Animations', tag: 'Flex / Grid / Transitions', icon: '✧' },
    ],
    backend: [
      { name: 'Node.js', level: 'Runtime Engine', tag: 'Asynchronous Event Loop', icon: '⬢' },
      { name: 'Express.js', level: 'Microservices', tag: 'Middleware / Routing', icon: '⚡' },
      { name: 'Django', level: 'Python Framework', tag: 'ORM / Auth / Admin', icon: '🎸' },
      { name: 'REST APIs', level: 'API Design', tag: 'JWT / CRUD / Webhooks', icon: '⇄' },
    ],
    data_ai: [
      { name: 'NumPy', level: 'Array Math', tag: 'Scientific Computing', icon: '∑' },
      { name: 'Pandas', level: 'Data Wrangling', tag: 'DataFrames / ETL', icon: '🐼' },
      { name: 'Power BI', level: 'Visualization', tag: 'Dashboards & Reports', icon: '📊' },
      { name: 'AI / ML', level: 'Model Workflows', tag: 'Scikit-learn / Supervised', icon: '🧠' },
    ],
    tools: [
      { name: 'Git', level: 'Version Control', tag: 'Branching / Merges', icon: '⌥' },
      { name: 'GitHub', level: 'CI / CD & Collaboration', tag: 'Actions / Releases', icon: '⊛' },
      { name: 'VS Code', level: 'Primary IDE', tag: 'Workspaces / Debugging', icon: '⌨' },
      { name: 'Postman', level: 'API Testing', tag: 'Collections & Mock APIs', icon: '🚀' },
    ],
  },
};

export const BUILD_LOGS = [
  {
    id: 'clickngo',
    code: 'BUILD_01',
    title: 'CLICKNGO',
    subtitle: 'High-Throughput Bus Ticketing & Transit Platform',
    category: 'FULL STACK WEB SYSTEM',
    description:
      'An end-to-end intelligent bus ticketing and travel management web application that eliminates manual booking bottlenecks. Includes interactive seat matrices, dynamic schedule search, instant ticket generation with unique QR identifiers, and real-time seat lock state to avoid race-condition booking collisions.',
    features: [
      'Interactive visual seat allocation map with real-time locking state',
      'Dynamic multi-city route search and timing scheduler',
      'Instant digital ticket generation with verification QR codes',
      'Secure user authentication and ticket history repository',
      'Optimized backend API handling concurrent passenger requests',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/yashw72',
    demo: null,
    metrics: { efficiency: '+40% Faster Booking', latency: '<120ms API Response' },
  },
  {
    id: 'fitnexus',
    code: 'BUILD_02',
    title: 'FITNEXUS',
    subtitle: 'AI-Powered Fitness, Nutrition & Workout Ecosystem',
    category: 'FULL STACK HEALTH TECH',
    description:
      'A comprehensive digital wellness platform engineered to track workouts, calculate micronutrient targets, and deliver intelligent exercise guidance. Powered by algorithmic fitness calculation formulas, dynamic data charts, and customized regimen builder workflows.',
    features: [
      'Interactive workout routine builder with customized sets & reps telemetry',
      'Nutrient intake analytics calculator (BMR, TDEE, macro breakdown)',
      'Visual progress logs using animated metric dashboards',
      'Responsive dark interface built for seamless mobile fitness tracking',
      'Extensible architecture ready for real-time sensor & wearable integrations',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com/yashw72',
    demo: null,
    metrics: { retention: 'Daily Habit Tracking', precision: 'Strict Macro Calcs' },
  },
  {
    id: 'localkart',
    code: 'BUILD_03',
    title: 'LOCALKART',
    subtitle: 'Hyperlocal Marketplace & Merchant Management Platform',
    category: 'COMMERCE INFRASTRUCTURE',
    description:
      'A hyperlocal e-commerce ecosystem empowering neighborhood businesses and local merchants to digitize product catalogues, accept online orders, and manage inventory seamlessly without high third-party aggregator commissions.',
    features: [
      'Merchant dashboard for inventory tracking and catalog pricing management',
      'Geo-targeted customer storefront with fast category filtering',
      'Persistent shopping bag and reactive checkout workflow',
      'Order dispatch status tracking with live delivery stage updates',
      'Secure session validation and merchant administrative control',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/yashw72',
    demo: null,
    metrics: { scale: 'Zero Commission Model', speed: 'Ultra-fast Catalog Query' },
  },
];

export const JOURNEY = [
  {
    id: 1,
    year: '2025 – PRESENT',
    role: 'B.E. IN INFORMATION TECHNOLOGY',
    institution: 'Dr. D. Y. Patil Institute of Technology, Pune',
    badge: 'CURRENT ACADEMIC MILESTONE',
    type: 'DEGREE',
    description:
      'Pursuing Bachelor of Engineering in Information Technology. Deepening mastery across Core Computer Science: Advanced Data Structures & Algorithms, Distributed Systems, Database Management Systems, Cloud Computing, and Software Engineering.',
    highlights: ['Specialization in IT Systems', 'Active Technical Coding & DSA', 'Collaborative Hackathons & Projects'],
  },
  {
    id: 2,
    year: 'JAN 2025 – JULY 2025',
    role: 'PYTHON WITH DATA SCIENCE & AI/ML INTERN',
    institution: 'Sumago Infotech Pvt. Ltd.',
    badge: 'INDUSTRY EXPERIENCE',
    type: 'INTERNSHIP',
    description:
      'Engineered machine learning pipelines and Python backend solutions. Implemented data preprocessing routines with NumPy and Pandas, conducted exploratory data analysis, and integrated intelligent predictive endpoints into web applications.',
    highlights: [
      'Engineered data processing workflows using NumPy & Pandas',
      'Built and evaluated machine learning predictive models',
      'Collaborated on backend API connectivity with development teams',
    ],
  },
  {
    id: 3,
    year: '2022 – 2025',
    role: 'DIPLOMA IN COMPUTER TECHNOLOGY',
    institution: 'Government Polytechnic, Nashik',
    badge: 'FOUNDATIONAL MILESTONE',
    type: 'DIPLOMA',
    description:
      'Graduated with honors in Computer Technology. Built a rigorous foundation in structured programming (C, C++, Java), computer architecture, operating system fundamentals, relational databases, and network protocols.',
    highlights: ['Distinction in Computer Engineering Core', 'Practical Labs in C/C++/Java/DBMS', 'Final Capstone Project Execution'],
  },
];

export const CODE_LAB = {
  tagline: 'ALGORITHMIC AGILITY & CODE DISCIPLINE',
  description:
    'Dedicated developer workspace showcasing problem-solving methodology, algorithmic rigor, and continuous open-source craftsmanship.',
  editorSnippet: `// Yash Warungase — Algorithmic Core Engine
class DeveloperEngine {
  constructor() {
    this.name = "Yash Sandip Warungase";
    this.role = "Full Stack Developer";
    this.status = "Building high-performance systems";
    this.dsaFocus = ["Binary Trees", "Graphs", "DP", "Sliding Window"];
  }

  optimizeSolution(problem) {
    const timeComplexity = "O(n log n)";
    const spaceComplexity = "O(1) auxiliary";
    return { status: "ACCEPTED", runtime: "Beats 98%", problem };
  }

  commitWork() {
    return "git commit -m 'feat: scalable microservice architecture'";
  }
}

export default new DeveloperEngine();`,
  stats: [
    { label: 'PLATFORM', value: 'LeetCode & GitHub' },
    { label: 'FOCUS', value: 'DSA & Web Architecture' },
    { label: 'METHOD', value: 'Clean Code & Optimization' },
    { label: 'PIPELINE', value: 'Git / CI / Agile' },
  ],
};

export const SOCIAL_LINKS = [
  { label: 'GITHUB', url: 'https://github.com/yashw72', icon: '⌥', note: 'Inspect source code & repositories' },
  { label: 'LINKEDIN', url: 'https://linkedin.com/in/yashwarungase', icon: 'in', note: 'Professional career network' },
  { label: 'LEETCODE', url: 'https://leetcode.com/yashw72', icon: '{ }', note: 'Algorithmic problem solving' },
  { label: 'EMAIL', url: 'mailto:yashwarungase5@gmail.com', icon: '@', note: 'Direct developer communication' },
];
