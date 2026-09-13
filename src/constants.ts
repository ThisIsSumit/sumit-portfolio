import { Project, Experience, TechCategory } from './types';

import Docusense from './assets/projects/Docusense.png';
import giftgraph from './assets/projects/giftgraph.png';
import HwakeyeAI from './assets/projects/Hawkeye.png';
import sikshaSathi from './assets/projects/siksha-sathi.png';
import MoneyManager from './assets/projects/Money-Manager.png';
import Linguachat from './assets/projects/Linguachat.png';


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "DocuSense",
    description: "AI-powered document intelligence platform with RAG pipeline, sub-300ms vector retrieval over 10K+ chunks",
    type: "Product",
    image: Docusense,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/docusense", icon: "Github" },
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/1m346YrftNa7BoNAM7Y0usseOjjmUx0jD?usp=drive_link", icon: "ExternalLink" },
    ]
  },
  {
    id: 2,
    title: "GiftGraph",
    description: "Agentic gift-recommendation concierge built on LangGraph with intent parsing, catalog search, and budget validation",
    type: "Project",
    image: giftgraph,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/giftgraph", icon: "Github" },
      { label: "Live Demo", url: "https://giftgraph-814bb.web.app", icon: "ExternalLink" },
    ]
  },
  {
    id: 3,
    title: "HawkEye AI",
    description: "Real-time WebSocket threat intelligence pipeline processing 1K+ daily events with AI-driven attack diagnosis",
    type: "Project",
    image: HwakeyeAI,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/hawkeye-ai", icon: "Github" },
    ]
  },
  {
    id: 4,
    title: "Shiksha Saathi",
    description: "Offline-first AI teacher assistant for rural India with Hindi lesson-plan generation and 3-role sync",
    type: "Product",
    image: sikshaSathi,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/shiksha-saathi", icon: "Github" },
    ]
  },
  {
    id: 5,
    title: "LinguaChat",
    description: "Real-time multilingual chat platform with Socket.IO messaging and Claude Haiku-powered translation",
    type: "Project",
    image: Linguachat,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/LinguaChat", icon: "Github" },
      { label: "Live Demo", url: "https://drive.google.com/drive/folders/1nbeP4Qgwf8dIToufTQhscuaaUf1SZ7ve?usp=drive_link", icon: "ExternalLink" },
    ]
  },
  {
    id: 6,
    title: "Money Manager",
    description: "Finance tracker with income/expense categorization and optimized PostgreSQL schemas for real-time reports",
    type: "Project",
    image: MoneyManager,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/money-manager-react", icon: "Github" },
      { label: "Live Demo", url: "https://money-manager-react-mocha.vercel.app/", icon: "ExternalLink" },
    ]
  },
];
export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Grocery on wheels",
    role: "Flutter Developer Intern",
    period: "Oct 2025 - Mar 2026",
    technologies: ["Flutter", "Dart", "REST APIs", "State Management", "Caching", "Prefetching"],
points: [
  "Developed 20+ cross-platform features using Flutter with a scalable and reusable architecture.",
  "Implemented real-time in-app customer support chat handling 200+ user interactions daily.",
  "Improved app performance by ~40% using data prefetching, lazy loading, and caching strategies.",
  "Migrated the inventory management module (~10k+ products) from React to Flutter.",
  "Reduced unnecessary widget rebuilds and optimized memory usage, improving UI responsiveness by ~30%.",
  "Managed App Store deployment and release cycles for production updates.",
  
]
  },
  {
    id: 2,
    company: "SCM Software Lab",
    role: "Software Engineer Intern",
    period: "May 2025 - Aug 2025",
    technologies: ["Flutter", "Java", "Spring Boot", "PostgreSQL", "REST APIs", "State Management"],
points: [
  "Built the complete Flutter delivery partner app supporting order flow, delivery tracking, and wallet features for 500+ daily orders.",
  "Developed 15+ REST APIs using Spring Boot and PostgreSQL to power real-time delivery and order operations.",
  "Implemented an event-driven architecture using Kafka to process 1000+ asynchronous order and delivery events per day.",
  "Optimized mobile performance and API response times, reducing delivery workflow delays by ~30%."
]
  },
  {
    id: 3,
    company: "PRAGAMENT TECH SOLUTIONS",
    role: "SDE Intern",
    period: "Oct 2024 - Jan 2025",
    technologies: ["Java", "Spring Boot", "Microservices", "React"],
    points: [
      "Contributed to enterprise-level software development using Java and Spring Boot.",
      "Worked on microservices architecture and frontend integration with React.",
      "Participated in collaborative problem-solving and code reviews."
    ]
  },
  {
    id: 4,
    company: "Robotics Society, NIT Hamirpur",
    role: "Coordinator",
    period: "July 2023 - July 2025",
    technologies: ["Leadership", "Project Management", "Robotics", "Collaboration"],
    points: [
      "Led a team of students in organizing robotics events and workshops.",
      "Managed project timelines and resources for society initiatives.",
      "Previously served as an Executive Member (Aug 2023 - July 2024)."
    ]
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "Coffee" }, 
      { name: "Go", icon: "Zap" }, 
      { name: "Python", icon: "Terminal" }, 
      { name: "JavaScript", icon: "Code2" }
    ]
  },
  {
    title: "Mobile development",
    skills: [{ name: "Flutter", icon: "Smartphone" }, { name: "Dart", icon: "Code2" }]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Spring Boot", icon: "Zap" }, 
     
      { name: "Node.js", icon: "Terminal" },
       { name: "Microservices", icon: "Cpu" }, 

    ]
  },
  {
    title: "Frontend & Design",
    skills: [
      { name: "React", icon: "Layout" }, 
      { name: "Next.js", icon: "Code" }, 
      { name: "State Management", icon: "Layers" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase", icon: "Flame" },
      { name: "MongoDB", icon: "Database" },
      { name: "Postgres SQL", icon: "Database" }
    ]
  },
  {
    title: "Version controlling & management",
    skills: [
      { name: "GitHub", icon: "Github" },
      { name: "Notion", icon: "Book" },
      { name: "Slack", icon: "Book" }
    ]
  }
];
