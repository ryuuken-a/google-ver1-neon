export type NavTab = 'SERVICES' | 'WORK' | 'CALCULATOR' | 'TEAM' | 'PROCESS' | 'SCOUT';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  startingPrice: string;
  highlighted?: boolean;
  features: string[];
  icon: string;
  timeline: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: { label: string; value: string }[];
  techStack: string[];
  imageUrl: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  avatarUrl: string;
  location: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface EstimatorFeature {
  id: string;
  title: string;
  description: string;
  category: 'WEB' | 'AI' | 'BRAND' | 'INFRA';
  price: number;
  days: number;
}

export interface TerminalLog {
  id: string;
  text: string;
  type: 'info' | 'success' | 'warn' | 'error' | 'input';
  timestamp: string;
}

export interface SystemStatus {
  uptime: string;
  thetaLatency: string;
  activeClients: number;
  projectsCompleted: number;
  coord: string;
  frequency: number;
  quantumLocked: boolean;
  systemLoad: string;
}
