export type SkillItem = { label: string; value: number };

export type SkillGroup = {
  title: string;
  accent: 'orange' | 'cyan' | 'white' | 'gray';
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Development Stack',
    accent: 'orange',
    items: [
      { label: 'Blazor WebAssembly', value: 85 },
      { label: 'MudBlazor', value: 90 },
      { label: 'ASP.NET Core Web API', value: 80 },
    ],
  },
  {
    title: 'Data & Integration',
    accent: 'cyan',
    items: [
      { label: 'SQL', value: 75 },
      { label: 'Dapper', value: 75 },
      { label: 'REST API Integration', value: 80 },
    ],
  },
  {
    title: 'Frontend Foundations',
    accent: 'white',
    items: [
      { label: 'HTML / CSS', value: 85 },
      { label: 'JavaScript (incl. JS Interop)', value: 65 },
    ],
  },
  {
    title: 'Engineering Practices',
    accent: 'gray',
    items: [
      { label: 'Role-Based Access & Authorization', value: 70 },
      { label: 'Form Validation & Workflow Logic', value: 80 },
      { label: 'Git / Team Workflow', value: 75 },
    ],
  },
];
