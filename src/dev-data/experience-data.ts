type ExperienceData = {
   id: number;
   companyName: string;
   role: string;
   desc: string;
   color: string;
}[]

export const experienceData: ExperienceData = [
   {
      id: 1,
      companyName: 'Chevron Nigeria Limited',
      role: 'Undergraduate Intern',
      desc: 'Software Developer - IT (Business Services) Division: Cross Platforms: Application support, website support, Service Now (SNOW) Information Risk Management (Compliance) support. Using C#, .Net frameworks, T-SQL and other technologies. Divisional website update: modifying outdated information and contents. Query migration: worked on data query refactoring from on-premise Oracle databases to the Cloud to modify business intelligence reporting on oil production. Data visualization: using Microsoft PowerBI.',
      color: '#0054a4',
   },

   {
      id: 2,
      companyName: 'Gaims Technologies Limited',
      role: 'DevOps Engineer',
      desc: 'Developed scalable and automated solutions to improve deployment efficiency for cloud-native gaming applications. Implemented efficient algorithms to manage data analytics for players, administrators, and agents on the platform, resulting in an increase in platform performance and aiding business decisions relating to risk management and analysis. Managed and troubleshooted cloud infrastructure, integrations, and payment portals, ensuring high availability and security. Enhanced CI workflow for all server deployments and software delivery, reducing deployment time by 66.37%',
      color: '#45a25a'
   },

   {
      id: 3,
      companyName: 'Grox',
      role: 'Virtual Assiatant - Software Developer',
      desc: 'I worked with an agency focused on E-Commerce Conversion Rate Optimization. I helped review websites based on user interfaces and user experience. Evaluating the quality of the websites and how they are able to convey business purposes to their customers. Automating emailing and response to potential customers.',
      color: '#f1c50e'
   },

   {
      id: 4,
      companyName: 'Ade Ojuri and Partners',
      role: 'Intern Architect',
      desc: 'I worked with practicing Architects in designing proposed building plans and designs. Creating CAD drawings of building plans and 3D renders for realistic visualization and representations of both interior and exterior views of building using Google Sketchup.',
      color: '#a576b4'
   },
]