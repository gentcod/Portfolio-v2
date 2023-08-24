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
      color: '#0054a4'
   },

   {
      id: 2,
      companyName: 'Ade Ojuri and Partners',
      role: 'Intern Architect',
      desc: 'I worked with practicing Architects in designing proposed building plans and designs. Creating CAD drawings of building plans and 3D renders for realistic visualization and representations of both interior and exterior views of building using Google Sketchup.',
      color: '#a576b4'
   },

   {
      id: 3,
      companyName: 'Grox',
      role: 'Virtual Assiatant',
      desc: 'I worked with an agency focused on E-Commerce Conversion Rate Optimization. I helped review websites based on user interfaces and user experience. Evaluating the quality of the websites and how they are able to convey business purposes to their customers. Automating emailing and response to potential customers.',
      color: '#f1c50e'
   }
]