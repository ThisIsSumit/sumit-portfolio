import { Project, Experience, TechCategory } from './types';
import lifelensImage from './assets/projects/lifelens.png';
import safebaseImage from './assets/projects/safebase.png';
import robosocImage from './assets/projects/robosoc.png';
import socialSyncImage from './assets/projects/social_sync.png';
import taskFlowImage from './assets/projects/taskflow.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "LifeLens",
    description: "AI-powerful life tracking platform",
    type: "Product",
    image: lifelensImage,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/ar_firstaid_flutter", icon: "Github" },
     
    ]
  },
  {
    id: 2,
    title: "SafeBase (Backup CLI)",
    description: "backups with restore and automation support",
    type: "Project",
    image: safebaseImage,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/Database-Backup-Utility-Cross-Platform-CLI-Tool ", icon: "Github" },
   
    ]
  },
  {
    id: 3,
    title: "RoboSoc",
    description: "Robotics community platform for events, projects, and  coordination",
    type: "Project",
    image: robosocImage,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/robosoc", icon: "Github" },
     
    ]
  },
  {
    id: 4,
    title: "Social Sync",
    description: "personal social media manager and scheduler with analytics",
    type: "Product",
    image: socialSyncImage,
    links: [
      { label: "GitHub", url: "https://github.com/ThisIsSumit/SocialSync-Flutter ", icon: "Github" },
    
    ]
  },
  {
  id: 5,
  title: "TaskFlow",
  description: "A modern task management and productivity app with smart task tracking, calendar planning, drag-and-drop scheduling, reminders, and analytics to monitor productivity.",
  type: "Project",
  image: taskFlowImage,
  links: [
    { 
      label: "GitHub", 
      url: "https://github.com/ThisIsSumit/Task-Flow-", 
      icon: "Github" 
    }
  ]
}
];
export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Grocery on wheels",
    role: "Flutter Developer Intern",
    period: "Oct 2025 - Present",
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
      { name: "UI/UX", icon: "Palette" }, 
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
      { name: "Notion", icon: "Book" }
    ]
  }
];
