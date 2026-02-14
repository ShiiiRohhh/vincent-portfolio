export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  featured?: boolean;
  gallery?: { src: string; alt: string }[];
  confidential?: boolean;
  cover?: string;
  highlights: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'temporary-id',
    title: 'Temporary ID Web',
    subtitle: 'Scan-first issuance/return workflow with history logs and availability tracking.',
    year: 'FY2023–2025',
    tags: ['Scan-first UX', 'Audit Log', 'Enterprise'],
    featured: true,
    cover: '/projects/temporary-id/temporary-id-1.png',
    highlights: [
      'Issuance/return flow designed for guards with minimal steps.',
      'Strong transaction logging for accountability.',
      'Clear available vs not-returned visibility.',
    ],
    gallery: [
      { src: '/projects/temporary-id/temporary-id-1.png', alt: 'Temporary ID UI 1' },
      { src: '/projects/temporary-id/temporary-id-2.png', alt: 'Temporary ID UI 2' },
    ],
  },
  {
    slug: 'suit-traceability',
    title: 'Suit Traceability Web',
    subtitle: 'PC + Mobile traceability system designed for real operational tracking.',
    year: 'FY2023–2025',
    tags: ['PC/Mobile', 'Traceability', 'Operations'],
    featured: true,
    cover: '/projects/suit-traceability/suit-traceability-2.png',
    highlights: [
      'Built for fast lookup + reliable trace tracking.',
      'Mobile-friendly UI for floor/operations usage.',
      'Clear information hierarchy for quick decisions.',
    ],
    gallery: [
      { src: '/projects/suit-traceability/suit-traceability-1.png', alt: 'Suit Traceability UI 1' },
      { src: '/projects/suit-traceability/suit-traceability-2.png', alt: 'Suit Traceability UI 2' },
    ],
  },
  {
    slug: 'job-order-technical',
    title: 'Job Order Technical Web',
    subtitle: 'Internal technical job order web system for structured requests and tracking.',
    year: 'FY2023–2025',
    tags: ['Internal Tool', 'Tracking', 'Web'],
    featured: true,
    cover: '/projects/job-order-technical/job-order-web-2.png',
    highlights: [
      'Structured job order capture and routing.',
      'Optimized for clarity and consistency of request details.',
      'Built for maintainability and predictable UX states.',
    ],
    gallery: [
      { src: '/projects/job-order-technical/job-order-web-1.png', alt: 'Job Order UI 1' },
      { src: '/projects/job-order-technical/job-order-web-2.png', alt: 'Job Order UI 2' },
      { src: '/projects/job-order-technical/job-order-web-3.png', alt: 'Job Order UI 3' },
    ],
  },
  {
    slug: 'location-tracer',
    title: 'Location Tracer',
    subtitle: 'Tracking utility focused on visibility and quick trace navigation.',
    year: 'FY2023–2025',
    tags: ['Tracking', 'Utility', 'Web'],
    featured: true,
    cover: '/projects/location-tracer/location-tracer-2.png',
    highlights: [
      'Designed for quick trace actions and reduced search time.',
      'Clear UI hierarchy for operational use.',
    ],
    gallery: [
      { src: '/projects/location-tracer/location-tracer-1.png', alt: 'Location Tracer UI 1' },
      { src: '/projects/location-tracer/location-tracer-2.png', alt: 'Location Tracer UI 2' },
    ],
  },
  {
    slug: 'dc-motor-important-notice',
    title: 'DCモーター重要連絡事項管理',
    subtitle: 'Tokyo Japan project for important notice management and tracking.',
    year: 'FY2023–2025',
    tags: ['Japan', 'Management', 'Enterprise'],
    cover: '/projects/appsheet/appsheet-2.png',
    highlights: [
      'Structured notice handling and traceability.',
      'Designed with enterprise clarity and maintainable patterns.',
    ],
  },
  {
    slug: 'emergency-assistance-portal',
    title: 'Emergency Assistance Portal',
    subtitle: 'Portal built during Typhoon Tino for coordinated assistance workflows.',
    year: 'FY2023–2025',
    tags: ['Emergency', 'Portal', 'Workflow'],
    confidential: true,
    highlights: [
      'Built for quick response and status visibility.',
      'Designed to reduce friction and handle urgent scenarios.',
    ],
  },
  {
    slug: 'forms-portal',
    title: 'Forms Portal Web',
    subtitle: 'Workflow-driven forms platform focused on speed, auditability, and enterprise UX.',
    year: 'FY2023–2025',
    tags: ['Web', 'Workflow', 'Enterprise UX'],
    confidential: true,
    highlights: [
      'Role-oriented flows (submit/approve/track) with predictable UI states.',
      'Designed for clarity and reduced friction in high-volume use.',
      'Extensible module pattern (Forms + Timekeeping).',
    ],
  },
  {
    slug: 'forms-portal-timekeeping',
    title: 'Forms Portal Timekeeping Modules',
    subtitle: 'TK001 / TK002 / TK007 / TK009 modules modeled for enterprise timekeeping.',
    year: 'FY2023–2025',
    tags: ['Timekeeping', 'Modules', 'Workflow'],
    confidential: true,
    highlights: [
      'Module-driven architecture for consistent UX and maintenance.',
      'Designed for kiosk/employee confirmation style flows.',
      'Clear audit trail behavior and predictable status handling.',
    ],
  },
  {
    slug: 'logbox-pwa',
    title: 'Logbox PWA',
    subtitle: 'Progressive Web App built for operational logging and mobile-first use.',
    year: 'FY2023–2025',
    tags: ['PWA', 'Mobile-first', 'Offline-ready'],
    confidential: true,
    highlights: [
      'Fast, app-like UX using PWA approach.',
      'Designed for constrained/real-world operational environments.',
      'Optimized interactions: fewer taps, clear status visibility.',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
