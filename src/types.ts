export type NavTab = 'SYSTEMS' | 'STRATEGY' | 'ENGRAMS' | 'TRANSCEND' | 'SERVICES';

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
}

export interface EngramItem {
  id: string;
  code: string;
  title: string;
  category: string;
  date: string;
  latency: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface SystemMetric {
  label: string;
  value: string;
  subtext: string;
  unit?: string;
  status: 'OPTIMAL' | 'SYNCED' | 'ACTIVE' | 'ENCRYPTED';
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
  neuralScale: string;
  dataPoints: string;
  coord: string;
  frequency: number; // e.g. 432
  quantumLocked: boolean;
  systemLoad: string;
}
