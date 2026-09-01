import {
  IconGraduation,
  IconCode,
  IconBrain,
  IconSparkles,
  IconServer,
  IconTerminal
} from '../components/icons/TechIcons';

export const ABOUT_DATA = {
  header: {
    badge: 'Get To Know Me',
    title: 'About Me',
    subtitle: 'Passionate developer dedicated to building scalable software, solving algorithmic challenges, and exploring modern AI.',
  },
  narrative: [
    {
      id: 'intro',
      paragraph:
        "Hello! I am a software developer with a deep passion for designing and engineering high-impact digital solutions. My journey spans the full spectrum of software development—from crafting intuitive, responsive frontends to architecting robust, scalable backend services.",
    },
    {
      id: 'fullstack-practical',
      paragraph:
        "I specialize in Full-Stack Development, bringing ideas to life with modern web frameworks like React, Node.js, Express, and Django. Rather than just building static clones, my focus is always on creating practical software solutions that address real-world needs, prioritize performance, and provide frictionless user experiences.",
    },
    {
      id: 'dsa-problem-solving',
      paragraph:
        "A strong foundation in Data Structures and Algorithms (DSA) powers my approach to engineering. I enjoy dissecting complex algorithmic problems, optimizing time and space complexity in C++ and Java, and thinking systematically about how code behaves at scale.",
    },
    {
      id: 'ai-ml-interest',
      paragraph:
        "Driven by curiosity for intelligent technologies, I have a keen interest in Artificial Intelligence and Machine Learning. I actively explore data manipulation with Python, NumPy, and Pandas, alongside foundational machine learning models to integrate intelligent, data-driven features into modern applications.",
    },
  ],
  education: {
    degree: 'Bachelor of Technology / Computer Science & Engineering',
    institution: 'University / Institute of Technology',
    status: 'Currently Pursuing',
    duration: '2022 — Present',
    focus: 'Core Computer Science, Algorithms, Database Systems, Web Architectures & Machine Learning',
    highlights: [
      'Strong coursework in Data Structures, OOP, DBMS, OS, Computer Networks',
      'Active participant in coding hackathons, technical societies & algorithmic challenges',
      'Maintaining academic excellence alongside hands-on software development projects',
    ],
  },
  pillars: [
    {
      icon: IconCode,
      title: 'Full-Stack Development',
      description:
        'Building end-to-end web applications with reactive user interfaces, clean component hierarchies, and secure RESTful backend APIs.',
      color: '#6C63FF',
    },
    {
      icon: IconTerminal,
      title: 'DSA & Problem Solving',
      description:
        'Analytical problem-solving mindset with proficiency in algorithmic optimizations, recursion, dynamic programming, and data structures.',
      color: '#38BDF8',
    },
    {
      icon: IconBrain,
      title: 'AI & Data Exploration',
      description:
        'Harnessing Python, NumPy, Pandas, and ML fundamentals to clean datasets, extract insights, and build predictive intelligence.',
      color: '#A78BFA',
    },
    {
      icon: IconSparkles,
      title: 'Practical Solutions',
      description:
        'Focused on engineering production-ready, clean codebases with seamless UX, robust error handling, and maintainable architecture.',
      color: '#5FA04E',
    },
  ],
  highlights: [
    { label: 'Core Focus', value: 'Full-Stack & Applied AI' },
    { label: 'Primary Language', value: 'C++, Python, JS' },
    { label: 'Problem Solving', value: 'DSA & Clean Code' },
    { label: 'Status', value: 'Open for Opportunities' },
  ],
};
