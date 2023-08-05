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
      imgSrc: 'https://i.ibb.co/9GS3QKD/capstone.png',
      link: 'https://gentcod-mapty.netlify.app',
   },

   {
      id: 1,
      heading: 'Mapty Map App',
      subheading: 'Workout web app',
      description: 'It uses Leaflet which is a map api, it was built using vanilla JavaScript',
      imgSrc: 'https://i.ibb.co/9qsJVjj/mapty.png',
      link: 'https://gentcod-mapty.netlify.app',
   },

   {
      id: 2,
      heading: 'Forkify',
      subheading: 'Food Recipe Web Application',
      description: 'Built using Vanilla JavaScript, using an API to get recipe data',
      imgSrc: 'https://i.ibb.co/5813zfs/forkify-project.png',
      link: '',
   },

   {
      id: 3,
      heading: 'Foodie',
      subheading: 'Food recipe homepage',
      description: 'A prototype of Food.com. Built using HTML, CSS and JavaScript. It was my first personal web project which I used to get familar with HTML and CSS. It has a light and dark theme',
      imgSrc: 'https://i.ibb.co/KWB0n4G/foodie.png',
      link: 'https://gentcod-foodie.netlify.app',
   },

   {
      id: 4,
      heading: 'HoMov',
      subheading: 'Movie website homepage',
      description: 'A static website built using HTML, CSS and JavaScript. Has a dark theme and light theme',
      imgSrc: 'https://i.ibb.co/mGQtJj4/movie-site.png',
      link: 'https://gentcod-foodie.netlify.app',
   },

   {
      id: 5,
      heading: 'Natours',
      subheading: 'Tourism booking homepage',
      description: 'A static website built using only HTML and CSS. It focusing on creating a good UI with a good number of interactions',
      imgSrc: 'https://i.ibb.co/LNX980G/natours.png',
      link: 'https://gentcod-natours.netlify.app',
   },
]

// {
//       id: 5,      
//       heading: 'Foodie',
//       subheading: 'Food recipe web app',
//       description: 'A web app built using a backend api and 3rd party api. It was developed using React for the frontend and C# for the backend',
//       imgSrc: 'img/foodie.png',
//       link: 'https://gentcod-foodie.netlify.app',
//    },