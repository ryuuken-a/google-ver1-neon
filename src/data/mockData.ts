import { ServiceItem, EngramItem, SystemMetric } from '../types';

export const ASSET_URLS = {
  // Main logo emblem from user HTML
  LOGO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB-ENjSjTQdBi_7EStOB3XDIFmfNvMCzV01aUI5rU-qMFUmFQebia22ZUV4VRTwJhCDnnqFHdi80dMcMpfbnIkRN8UrwJRJGCiW5d681VDzycujo7fe7UYkM3Q-QP7hSryMpn2uQpCJHRJSa3IGwTJD7jVhG-AfxBfqjuns7ZfpPWw7_Kd39j_2hBE3Cv8jEw8elMXQNXYoNZkfyFG6hVIqQ-celwSG46djVkLt8novjisBh4gSAT9Xg',
  // Hero logo emblem variant
  LOGO_HERO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyQWutq2m7kRBsW85wQlKZ4FZA0EcavFMxmpOx3zwho2V7SFqW03RuNTCtNTqKC1GFrer7Vpsv0-V4MCw4BV5srQWKOLfu0sXgAoMSN5EVthj7Yxz8Rn6SVv9_rm5ZVNqVIH2pLC7YgEBxg-9c9jJDDf5l1gAroS18bJRSfVbHZd9fvIieXF2TIZunGezdey5a4qc6a4JKsXMol3A_KfPDEIvQz7eSHL_EPgQEzYN3OLZ1MUWQJ628-Q',
  // 8K Futurist Cityscape Hero image
  HERO_IMAGE: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8fZB-pHffIyj5QhXSWaX-uSxTtglsBr9Zxd4RiaGbZ0eGBUyBqOl4LsQ5NVDxNzqDgqF8Bxm0lcCwQeVcWJz96Ww_8Ql__f3ZKgdLGFD8DeRznaBRAZlCQuKI2QCRx23gUu9ve8ehaRhJh1zcLsIM1xfGnU4-NBxW3x4_ieu-IhIN3AAN8oz_VCQaGr9hvKlY-UjIthVrIc7dIJ-YDoz9Y8snUMS8xBhzNVgfEPh43qyw4F19eJDT6A',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'svc-1',
    code: '01 // PREMIUM_EXECUTION',
    title: 'High-Fidelity Website Development',
    category: 'Spatial Web Architecture',
    description: 'Next-generation spatial web architectures. 8K-optimized interfaces with zero-latency interaction models and neural-adaptive layouts.',
    startingPrice: 'Starting from $599',
    highlighted: true,
    icon: 'dynamic_form',
    features: [
      '8K High-Definition WebGL Shaders & Canvas FX',
      'Ultra-Responsive Technical Grid Framework',
      'Instantaneous Latency (<0.4ms Theta Response)',
      'Custom Cyberpunk UI & Glassmorphism Motion',
      'SEO & Quantum Security Encryption'
    ]
  },
  {
    id: 'svc-2',
    code: '02 // COGNITIVE_LOGIC',
    title: 'AI Systems Architecture',
    category: 'Neural Agent Swarms',
    description: 'Bespoke LLM integration and autonomous agent swarms tailored for enterprise-scale cognitive task automation and decision trees.',
    startingPrice: 'Starting from $1,299',
    icon: 'hub',
    features: [
      'Multi-Agent Consciousness Routing',
      'Custom Context Embeddings & Vector Stores',
      'Real-Time Cognitive Stream Analytics',
      'Autonomous Task Execution Nodes'
    ]
  },
  {
    id: 'svc-3',
    code: '03 // GROWTH_ENGRAMS',
    title: 'Strategic Neural Marketing',
    category: 'Predictive Resonance',
    description: 'Data-driven algorithmic outreach and predictive brand positioning utilizing advanced sentiment analysis and neural engagement frameworks.',
    startingPrice: 'Starting from $899',
    icon: 'insights',
    features: [
      'Algorithmic Resonance Mapping',
      'Predictive Campaign Telemetry',
      'High-Conversion UI/UX Touchpoint Audit',
      'Global Perception Monitoring'
    ]
  }
];

export const ENGRAMS_LIST: EngramItem[] = [
  {
    id: 'eng-101',
    code: 'ENGRAM_8042',
    title: 'NEURAL_TRANSCENDENCE_KERNEL',
    category: 'Core System Protocol',
    date: '2026.07.30',
    latency: '0.001ms',
    description: 'Autonomous deployment of spatial WebGL shader nodes with real-time mouse interaction vector mapping.',
    metrics: [
      { label: 'THETA_STABILITY', value: '99.98%' },
      { label: 'BANDWIDTH', value: '128 TB/s' }
    ],
    tags: ['SYSTEMS', 'WEBGL', 'NEURAL']
  },
  {
    id: 'eng-102',
    code: 'ENGRAM_9103',
    title: 'QUANTUM_CONSCIOUSNESS_SYNC',
    category: 'Audio Synth Frequency',
    date: '2026.07.28',
    latency: '0.0004s',
    description: 'Acoustic frequency harmonic alignment at 432Hz with synthesized sine wave audio generator.',
    metrics: [
      { label: 'HARMONIC_FREQ', value: '432 Hz' },
      { label: 'LOCK_STATE', value: 'LOCKED' }
    ],
    tags: ['TRANSCEND', 'AUDIO', 'QUANTUM']
  },
  {
    id: 'eng-103',
    code: 'ENGRAM_7712',
    title: 'PREDICTIVE_RESONANCE_MATRIX',
    category: 'Marketing Engram',
    date: '2026.07.25',
    latency: '0.012ms',
    description: 'Algorithmic growth campaign targeting enterprise tech leaders across global neural feeds.',
    metrics: [
      { label: 'RESONANCE_INDEX', value: '9.84/10' },
      { label: 'IMPRESSIONS', value: '14.2M' }
    ],
    tags: ['STRATEGY', 'ENGRAMS', 'ANALYTICS']
  }
];

export const INITIAL_LOADING_LINES = [
  "> INITIALIZING SYSTEM CHECK...",
  "> KERNEL_LOAD: SUCCESS [0.0004s]",
  "> MEMORY_SCAN: 128TB NEURAL_BUFFER... OK",
  "> SYNCING WITH NEONTOMY_CORE...",
  "> ESTABLISHING QUANTUM_TUNNEL...",
  "> STATUS: TRANSCENDENCE INITIATED",
  "> BYPASSING HUMAN_LIMITATIONS...",
  "> ACCESS GRANTED.",
  "> WELCOME TO NEONTOMYEVANGELION."
];
