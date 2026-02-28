export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'Product' | 'Open Source' | 'Project';
  image: string;
  links: {
    label: string;
    url: string;
    icon: string;
  }[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  technologies: string[];
  points: string[];
}

export interface TechCategory {
  title: string;
  skills: { name: string; icon: string }[];
}
