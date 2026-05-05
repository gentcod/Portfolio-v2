export type ExperienceData = {
   id: number;
   companyName: string;
   role: string;
   date: string;
   desc: string;
   color: string;
}[];

export const experienceData: ExperienceData = [
   {
      id: 1,
      companyName: 'eBanqo',
      role: 'Backend Developer',
      date: 'January 2026 - Present',
      desc: 'Own and maintain core webchat microservice, AI-driven chat flow services and core business services, enabling real-time customer-business communication across digital channels.',
      color: '#0054a4',
   },
   {
      id: 2,
      companyName: 'Alterlight',
      role: 'Lead Software Engineer (Contract)',
      date: 'June 2025 - Dec 2025',
      desc: 'Architected scalable cloud-native infrastructure on AWS. Designed and deployed automated CI/CD pipelines using GitHub Actions, streamlining AWS deployments. Led cross-functional engineering team through sprint planning.',
      color: '#45a25a'
   },
   {
      id: 3,
      companyName: 'Provenier',
      role: 'Backend Team Lead (Contract)',
      date: 'July 2025 - Present',
      desc: 'Technical lead in architecting scalable systems with MongoDB and Redis. Implemented API rate-limiting and traffic control mechanisms. Automated engineering workflows leveraging GitHub version control and code reviews.',
      color: '#f1c50e'
   },
   {
      id: 4,
      companyName: 'Provenier',
      role: 'Backend Engineer (Contract)',
      date: 'March 2024 - July 2025',
      desc: 'Developed robust backend services with NodeJS and TypeScript, powering high-volume investor platform operations. Designed database architecture using MongoDB and Redis for optimized data persistence.',
      color: '#f1c50e'
   },
   {
      id: 5,
      companyName: 'Gaims Technologies Limited',
      role: 'DevOps & Backend Engineer',
      date: 'August 2023 - July 2024',
      desc: 'Engineered cloud-native deployments on Digital Ocean with automated infrastructure provisioning. Built production-grade backend services using NodeJS/JavaScript, integrating MySQL and Redis.',
      color: '#a576b4'
   },
   {
      id: 6,
      companyName: 'Chevron Nigeria Limited',
      role: 'Software Engineer Intern',
      date: 'February 2023 - July 2023',
      desc: 'Led website enhancement initiatives using ASP.NET Core and Azure DevOps. Executed critical database migration from Oracle to cloud platforms. Created executive-level Power BI dashboards.',
      color: '#0054a4'
   },
   {
      id: 7,
      companyName: 'Grox',
      role: 'Full-Stack Engineer',
      date: 'November 2021 - January 2023',
      desc: 'Automated customer engagement workflows using Python and JavaScript. Optimized e-commerce platform performance through workflow automation. Conducted comprehensive A/B testing on UI/UX enhancements.',
      color: '#45a25a'
   }
];