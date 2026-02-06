export type Recommendation = {
  name: string;
  role: string;
  quote: string;
};

export const recommendations: Recommendation[] = [
  {
    name: 'Team Member Supervisor',
    role: 'Supervisor',
    quote:
      'Delivers reliable solutions and understands both UI and business logic. Strong problem-solver.',
  },
  {
    name: 'Team Lead',
    role: 'Tech Lead',
    quote:
      'Consistent and detail-oriented. Communicates clearly and ships features with good engineering judgment.',
  },
  {
    name: 'Project Stakeholder',
    role: 'Stakeholder',
    quote:
      'Turns requirements into predictable workflows quickly. Great attention to usability and correctness.',
  },
  {
    name: 'Senior Engineer',
    role: 'Senior Engineer',
    quote: 'Solid ownership, clean delivery, and practical design choices under real constraints.',
  },
];
