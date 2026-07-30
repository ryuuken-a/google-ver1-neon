import { ServiceItem, CaseStudy, TeamMember, Testimonial, EstimatorFeature } from '../types';

export const ASSET_URLS = {
  LOGO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB-ENjSjTQdBi_7EStOB3XDIFmfNvMCzV01aUI5rU-qMFUmFQebia22ZUV4VRTwJhCDnnqFHdi80dMcMpfbnIkRN8UrwJRJGCiW5d681VDzycujo7fe7UYkM3Q-QP7hSryMpn2uQpCJHRJSa3IGwTJD7jVhG-AfxBfqjuns7ZfpPWw7_Kd39j_2hBE3Cv8jEw8elMXQNXYoNZkfyFG6hVIqQ-celwSG46djVkLt8novjisBh4gSAT9Xg',
  LOGO_HERO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyQWutq2m7kRBsW85wQlKZ4FZA0EcavFMxmpOx3zwho2V7SFqW03RuNTCtNTqKC1GFrer7Vpsv0-V4MCw4BV5srQWKOLfu0sXgAoMSN5EVthj7Yxz8Rn6SVv9_rm5ZVNqVIH2pLC7YgEBxg-9c9jJDDf5l1gAroS18bJRSfVbHZd9fvIieXF2TIZunGezdey5a4qc6a4JKsXMol3A_KfPDEIvQz7eSHL_EPgQEzYN3OLZ1MUWQJ628-Q',
  HERO_IMAGE: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8fZB-pHffIyj5QhXSWaX-uSxTtglsBr9Zxd4RiaGbZ0eGBUyBqOl4LsQ5NVDxNzqDgqF8Bxm0lcCwQeVcWJz96Ww_8Ql__f3ZKgdLGFD8DeRznaBRAZlCQuKI2QCRx23gUu9ve8ehaRhJh1zcLsIM1xfGnU4-NBxW3x4_ieu-IhIN3AAN8oz_VCQaGr9hvKlY-UjIthVrIc7dIJ-YDoz9Y8snUMS8xBhzNVgfEPh43qyw4F19eJDT6A',
  PROJECT_AETHERIA: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
  PROJECT_KURO: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  PROJECT_VOXEL: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
  AVATAR_KAELEN: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  AVATAR_EVELYN: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  AVATAR_SOREN: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  AVATAR_MIRA: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
};

export const CLIENT_LOGOS = [
  'AETHERIA FINTECH',
  'KURO CYBERNETICS',
  'VOXEL MOTION',
  'VERITAS AI',
  'SYNAPSE LABS',
  'NEXUS PROTOCOL'
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'svc-1',
    code: '01 // WEB_ENGINEERING',
    title: 'High-Fidelity Web Application Development',
    category: 'Spatial Web Architecture',
    description: 'Custom React 19 & WebGL web applications. Built for extreme speed, 8K ultra-crisp responsive typography, and flawless SEO Core Web Vitals.',
    startingPrice: 'Starting at $599',
    timeline: '7–14 Days Sprint',
    highlighted: true,
    icon: 'layout',
    features: [
      'React 19, TypeScript, & Tailwind CSS v4 Engine',
      'Interactive Custom WebGL Shaders & Canvas FX',
      'Ultra-Fast Load Times (<0.2s LCP Score)',
      'Fully Mobile-Optimized & Accessible Layouts',
      'Full Source Code Ownership & GitHub Handoff'
    ]
  },
  {
    id: 'svc-2',
    code: '02 // COGNITIVE_AI',
    title: 'Custom AI Systems & Agent Workflows',
    category: 'Neural AI Architecture',
    description: 'Bespoke LLM integrations, Gemini 2.5/Flash agent swarms, vector retrieval systems, and automated intelligence pipelines tailored to your enterprise.',
    startingPrice: 'Starting at $1,299',
    timeline: '2–3 Weeks Sprint',
    icon: 'cpu',
    features: [
      'Custom Gemini API & Multi-Agent Swarm Orchestration',
      'Contextual Knowledge Base Retrieval (RAG / Vector DB)',
      'Automated Customer Service & Scoping Assistants',
      'Secure Serverless Express / Node API Proxies',
      'Real-Time Streaming Telemetry Dashboards'
    ]
  },
  {
    id: 'svc-3',
    code: '03 // BRAND_STRATEGY',
    title: 'Cyberpunk Brand Identity & Design Systems',
    category: 'Spatial Design & Identity',
    description: 'Comprehensive dark/neon aesthetic brand design systems. Includes custom UI component libraries, vector asset suites, and interactive design tokens.',
    startingPrice: 'Starting at $899',
    timeline: '10 Days Turnaround',
    icon: 'sparkles',
    features: [
      'Complete Cyberpunk / High-Tech Brand Style Guide',
      'Figma Component Library & Design Tokens',
      'High-Resolution Custom Vector Logos & Icons',
      'Marketing Collateral & Pitch Deck Templates',
      'Interactive UI Motion Guidelines'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    clientName: 'Aetheria FinTech',
    industry: 'High-Frequency Quantitative Trading',
    title: 'Real-Time WebGL Streaming Financial Portal',
    summary: 'Engineered a zero-latency web trading interface handling over 100k data points per second with interactive WebGL candle shaders.',
    challenge: 'Existing legacy portal crashed during volatility spikes and suffered 1.2s lag on mobile web browsers.',
    solution: 'Rebuilt the frontend using React 19, WebGL canvas rendering, and server-sent WebSocket events with client-side state caching.',
    deliverables: ['Custom WebGL Canvas Chart', 'Express Node WebSocket Proxy', 'Cyberpunk Dark Trading Theme', 'Mobile Responsive UI'],
    results: [
      { label: 'CONVERSION INCREASE', value: '+340%' },
      { label: 'AVG PAGE LATENCY', value: '0.04s' },
      { label: 'SERIES-A CAPITAL RAISED', value: '$4.2M' }
    ],
    techStack: ['React 19', 'WebGL', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    imageUrl: ASSET_URLS.PROJECT_AETHERIA,
    quote: {
      text: 'NEONTOMY delivered our web application 5 days ahead of deadline. The custom shader animations and lightning load times blew our investors away.',
      author: 'Marcus Sterling',
      role: 'Chief Technology Officer, Aetheria FinTech'
    }
  },
  {
    id: 'case-2',
    clientName: 'Kuro Cybernetics',
    industry: 'Autonomous Robotics & Tele-Ops',
    title: 'Spatial Tele-Operations Control Surface',
    summary: 'Constructed an intuitive web-based control center for remote robotic fleet monitoring and telemetry diagnostics.',
    challenge: 'Operators needed a real-time HUD with instantaneous feedback, encrypted connection, and 3D robot status previews.',
    solution: 'Designed a dark high-contrast octagonal control UI with custom WebAudio sound design and status monitoring widgets.',
    deliverables: ['Spatial Control HUD', 'WebAudio Acoustic Feedback', 'Encrypted Telemetry Stream', '3D Asset Viewers'],
    results: [
      { label: 'OPERATOR ENGAGEMENT', value: '+180%' },
      { label: 'SHADER RESPONSE', value: '<0.01ms' },
      { label: 'ENTERPRISE CONTRACTS', value: '12 Won' }
    ],
    techStack: ['React', 'WebAudio API', 'Three.js / WebGL', 'Express API'],
    imageUrl: ASSET_URLS.PROJECT_KURO,
    quote: {
      text: 'The cleanest code and most impressive visual execution we have ever commissioned. NEONTOMY is our go-to engineering agency.',
      author: 'Dr. Yumi Tanaka',
      role: 'VP of Robotics, Kuro Cybernetics'
    }
  },
  {
    id: 'case-3',
    clientName: 'Voxel Motion Studios',
    industry: 'Digital Media & 3D Asset Store',
    title: '8K Spatial Digital Showcase & E-Commerce',
    summary: 'Created a high-converting digital product showcase for 3D creators with instant live model previews and secure downloads.',
    challenge: 'Slow image loading and generic ecommerce templates were hurting brand perception and bounce rates.',
    solution: 'Deployed a custom Next-generation React showcase with glassmorphism panels, instant search filtering, and automated email fulfillment.',
    deliverables: ['Custom Asset Showcase', 'Instant Filtering System', 'Stripe Payment Proxy Integration', 'Performance Audit'],
    results: [
      { label: 'REVENUE GROWTH', value: '+220%' },
      { label: 'PERFORMANCE SCORE', value: '100/100' },
      { label: 'BOUNCE RATE REDUCTION', value: '-45%' }
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Node Express', 'Stripe API'],
    imageUrl: ASSET_URLS.PROJECT_VOXEL,
    quote: {
      text: 'Our sales tripled in the first month after NEONTOMY redesigned our web platform. Authentic, reliable, and ridiculously talented.',
      author: 'David Vance',
      role: 'Founder, Voxel Motion'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Kaelen Vance',
    role: 'Founder & Principal Web Architect',
    bio: '12+ years building enterprise web applications, high-performance UI frameworks, and WebGL graphics engines. Former lead engineer at top Silicon Valley agency.',
    experience: '12+ YRS // EX-LEAD FRONTEND',
    specialties: ['React 19', 'TypeScript', 'WebGL Shaders', 'Performance Tuning'],
    avatarUrl: ASSET_URLS.AVATAR_KAELEN,
    location: 'San Francisco / Remote'
  },
  {
    id: 'team-2',
    name: 'Dr. Evelyn Ren',
    role: 'Head of AI & Cognitive Systems',
    bio: 'PhD in Machine Learning and Natural Language Processing. Specialized in multi-agent swarm architecture, LLM fine-tuning, and vector retrieval pipelines.',
    experience: 'PhD ML // 8+ YRS AI RESEARCH',
    specialties: ['Gemini API', 'Multi-Agent Swarms', 'RAG Vector DBs', 'Python / Node'],
    avatarUrl: ASSET_URLS.AVATAR_EVELYN,
    location: 'Seattle / Remote'
  },
  {
    id: 'team-3',
    name: 'Soren Takahashi',
    role: 'Creative Director & Spatial UI/UX Lead',
    bio: 'Award-winning digital designer with a focus on dark mode ergonomics, cyberpunk visual branding, typography systems, and interactive motion graphics.',
    experience: '10+ YRS // AWWWARDS WINNER',
    specialties: ['Spatial UI/UX', 'Dark Aesthetics', 'Figma Systems', 'Motion Design'],
    avatarUrl: ASSET_URLS.AVATAR_SOREN,
    location: 'Tokyo / Remote'
  },
  {
    id: 'team-[#4]',
    name: 'Mira Chen',
    role: 'Lead DevOps & Cloud Infrastructure',
    bio: 'Specialist in low-latency serverless deployments, Cloud Run containers, automated CI/CD pipelines, and AES-level application security auditing.',
    experience: '9+ YRS // CLOUD ARCHITECT',
    specialties: ['Node.js / Express', 'Cloud Run / GCP', 'Docker', 'Security Audits'],
    avatarUrl: ASSET_URLS.AVATAR_MIRA,
    location: 'Singapore / Remote'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Elena Rostova',
    role: 'Product Director',
    company: 'Synapse Neural Labs',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    content: 'We approached NEONTOMY to replace an outdated marketing site with a futuristic web application. They delivered a fully functional, responsive product in 10 days flat. 100% real engineers, no fluff.',
    rating: 5,
    projectType: 'Web Application + AI Agent'
  },
  {
    id: 'test-2',
    author: 'Jason Kolar',
    role: 'Co-Founder',
    company: 'Nexus Protocol',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    content: 'Unlike agencies that hide behind endless sub-contractors, NEONTOMY’s core team worked directly with us in Slack every day. Transparent pricing, pristine TypeScript code, and zero delays.',
    rating: 5,
    projectType: 'AI Systems Architecture'
  },
  {
    id: 'test-3',
    author: 'Sarah Jenkins',
    role: 'Head of Marketing',
    company: 'Aetheria FinTech',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    content: 'The custom WebGL shader background and octagonal button layouts gave us the exact premium edge we needed to stand out in a saturated financial market.',
    rating: 5,
    projectType: 'Spatial Web App Design'
  }
];

export const ESTIMATOR_FEATURES: EstimatorFeature[] = [
  {
    id: 'feat-1',
    title: 'Custom React 19 Single Page App',
    description: 'High-performance responsive web frontend with Tailwind CSS v4 styling.',
    category: 'WEB',
    price: 599,
    days: 5
  },
  {
    id: 'feat-2',
    title: 'Interactive WebGL Canvas Shaders',
    description: 'Custom 60fps 8K background shaders with real-time mouse interaction.',
    category: 'WEB',
    price: 350,
    days: 3
  },
  {
    id: 'feat-3',
    title: 'Gemini AI Assistant / Scouter Agent',
    description: 'Serverless Node API backend with Gemini LLM integration & prompt engineering.',
    category: 'AI',
    price: 700,
    days: 4
  },
  {
    id: 'feat-4',
    title: 'Complete Brand Identity & UI Kit',
    description: 'Custom logo, typography pairing, Figma design system tokens, and color palette.',
    category: 'BRAND',
    price: 450,
    days: 3
  },
  {
    id: 'feat-5',
    title: 'Express Node.js Backend API Proxy',
    description: 'Secure server API layer to protect secrets, rate limiting, and database routes.',
    category: 'INFRA',
    price: 400,
    days: 3
  },
  {
    id: 'feat-6',
    title: 'Speed & Core Web Vitals Audit',
    description: '100/100 Lighthouse optimization score, asset minification, and image compression.',
    category: 'WEB',
    price: 250,
    days: 2
  }
];

export const AGENCY_PROCESS_STEPS = [
  {
    step: '01',
    title: 'TECHNICAL DISCOVERY & SCOPE',
    timeframe: 'Day 1 – 3',
    description: 'We analyze your functional goals, target audience, technical constraints, and brand vision to create a detailed technical specification document and wireframe outline.'
  },
  {
    step: '02',
    title: 'SPATIAL PROTOTYPING & UI DESIGN',
    timeframe: 'Day 4 – 7',
    description: 'Our creative team crafts dark high-contrast Figma UI layouts, custom WebGL canvas shader proofs, typography pairings, and interactive motion components for your approval.'
  },
  {
    step: '03',
    title: 'HIGH-FIDELITY ENGINEERING',
    timeframe: 'Day 8 – 14',
    description: 'We code your application using clean, modular React 19, TypeScript, and serverless Node.js endpoints. Continuous progress updates via live staging link.'
  },
  {
    step: '04',
    title: 'QA, SECURITY AUDIT & GLOBAL LAUNCH',
    timeframe: 'Day 15',
    description: 'Comprehensive cross-browser testing, Core Web Vitals optimization, zero-vulnerability security checks, full source code transfer, and deployment to production.'
  }
];

export const INITIAL_LOADING_LINES = [
  "> INITIALIZING NETWORK CORE: NEONTOMY EVANGELION.SPACE...",
  "> VERIFYING AGENCY SECURITY CREDENTIALS: OK [TLS 1.3 ENCRYPTED]",
  "> MOUNTING SPATIAL GRAPHICS & GEMINI AI ENGINE...",
  "> DOMAIN VERIFIED: https://neontomyevangelion.space",
  "> STATUS: DIGITAL AGENCY INFRASTRUCTURE ACTIVE",
  "> WELCOME TO NEONTOMY EVANGELION.SPACE"
];
