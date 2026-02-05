export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
  highlights: string[];
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: 'forms-portal',
    title: 'Forms Portal Web',
    subtitle: 'Workflow-driven forms platform focused on speed, auditability, and enterprise UX.',
    year: 'FY2023–2025',
    tags: ['Web', 'Workflow', 'Enterprise UX'],
    featured: true,
    highlights: [
      'Role-oriented flows (submit/approve/track) with predictable UI states.',
      'Designed for clarity and reduced friction in high-volume use.',
      'Extensible module pattern (Forms + Timekeeping).',
    ],
    gallery: [
      { src: '/projects/forms-portal/forms-portal-1.png', alt: 'Forms Portal UI 1' },
      { src: '/projects/forms-portal/forms-portal-2.png', alt: 'Forms Portal UI 2' },
      { src: '/projects/forms-portal/forms-portal-3.png', alt: 'Forms Portal UI 3' },
      { src: '/projects/forms-portal/forms-portal-4.png', alt: 'Forms Portal UI 4' },
      { src: '/projects/forms-portal/forms-portal-5.png', alt: 'Forms Portal UI 5' },
    ],
  },
  {
    slug: 'forms-portal-timekeeping',
    title: 'Forms Portal Timekeeping Modules',
    subtitle: 'TK001 / TK002 / TK007 / TK009 modules modeled for enterprise timekeeping.',
    year: 'FY2023–2025',
    tags: ['Timekeeping', 'Modules', 'Workflow'],
    featured: true,
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
    featured: true,
    highlights: [
      'Fast, app-like UX using PWA approach.',
      'Designed for constrained/real-world operational environments.',
      'Optimized interactions: fewer taps, clear status visibility.',
    ],
  },
  {
    slug: 'temporary-id',
    title: 'Temporary ID Web',
    subtitle: 'Scan-first issuance/return workflow with history logs and availability tracking.',
    year: 'FY2023–2025',
    tags: ['Scan-first UX', 'Audit Log', 'Enterprise'],
    featured: true,
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
    slug: 'appsheet',
    title: 'AppSheet',
    subtitle: 'Rapid internal solutions using AppSheet for operational workflows.',
    year: 'FY2023–2025',
    tags: ['Low-code', 'Internal', 'Ops'],
    highlights: [
      'Fast turnaround internal tooling.',
      'Optimized for business users with simple flows.',
    ],
    gallery: [
      { src: '/projects/appsheet/appsheet-1.png', alt: 'AppSheet UI 1' },
      { src: '/projects/appsheet/appsheet-2.png', alt: 'AppSheet UI 2' },
    ],
  },
  {
    slug: 'emergency-assistance-portal',
    title: 'Emergency Assistance Portal',
    subtitle: 'Portal built during Typhoon Tino for coordinated assistance workflows.',
    year: 'FY2023–2025',
    tags: ['Emergency', 'Portal', 'Workflow'],
    highlights: [
      'Built for quick response and status visibility.',
      'Designed to reduce friction and handle urgent scenarios.',
    ],
  },
  {
    slug: 'dc-motor-important-notice',
    title: 'DCモーター重要連絡事項管理',
    subtitle: 'Tokyo Japan project for important notice management and tracking.',
    year: 'FY2023–2025',
    tags: ['Japan', 'Management', 'Enterprise'],
    highlights: [
      'Structured notice handling and traceability.',
      'Designed with enterprise clarity and maintainable patterns.',
    ],
  },
  {
    slug: 'presence-board',
    title: 'Presence Board',
    subtitle: 'Internal presence visibility board for teams/operations.',
    year: 'FY2023–2025',
    tags: ['Internal', 'Visibility', 'Board'],
    highlights: [
      'At-a-glance status visibility.',
      'Simple UX optimized for frequent glance usage.',
    ],
  },
  {
    slug: 'eop',
    title: 'EOP',
    subtitle:
      'Enterprise operational process support solution (summary-level due to confidentiality).',
    year: 'FY2023–2025',
    tags: ['Enterprise', 'Ops', 'Process'],
    highlights: [
      'Designed around process clarity and repeatable outcomes.',
      'Kept intentionally high-level due to sensitive UI/flows.',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
