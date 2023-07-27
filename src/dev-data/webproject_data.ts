type WebProjectData = {
   id: number;
   heading: string;
   subheading: string;
   description: string;
   imgSrc: string;
   link: string;
}[]

export const webprojectData: WebProjectData = [
   {
      id: 0,
      heading: 'Capstone Clothing',
      subheading: 'E-commerce website',
      description: 'Built using React, Redux for state management, Firebase for Data storage, authenticationa and authorization. Stripe for payment ',
      imgSrc: 'img/capstone.png',
      link: 'https://gentcod-mapty.netlify.app',
   },

   {
      id: 1,
      heading: 'Mapty Map App',
      subheading: 'Workout web app',
      description: 'It uses Leaflet which is a map api, it was built using vanilla JavaScript',
      imgSrc: 'img/mapty.png',
      link: '',
   },

   {
      id: 1,
      heading: 'Forkify',
      subheading: 'Food Recipe Web Application',
      description: 'Built using Vanilla JavaScript, using an API to get recipe data',
      imgSrc: 'img/forkify_project.png',
      link: '',
   },

   {
      id: 3,
      heading: 'Foodie',
      subheading: 'Food recipe web app',
      description: 'A web app built using a backend api and 3rd party api. It was developed using React for the frontend and C# for the backend',
      imgSrc: 'img/foodie.png',
      link: 'https://gentcod-foodie.netlify.app',
   },
]