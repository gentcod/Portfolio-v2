import Carousel from '../../components/carousel/carousel.component';
import WebProject from '../../components/web-project/web-project.component';

import {} from './explore.styles'

type WebProjectData = {
   id: number;
   heading: string;
   subheading: string;
   description: string;
   imgSrc: string;
   link: string;
}[]

const data: WebProjectData = [
   {
      id: 0,
      heading: 'Mapty Map App',
      subheading: 'Workout web app',
      description: 'It uses Leaflet which is a map api, it was built using vanilla JavaScript',
      imgSrc: 'img/mapty.png',
      link: 'https://gentcod-mapty.netlify.app',
   },

   {
      id: 1,
      heading: 'Foodie',
      subheading: 'Food recipe web app',
      description: 'A web app built using a backend api and 3rd party api. It was developed using React for the frontend and C# for the backend',
      imgSrc: 'img/foodie.png',
      link: 'https://gentcod-foodie.netlify.app',
   },

   {
      id: 2,
      heading: 'Mapty Map App',
      subheading: 'Workout web app',
      description: 'It uses Leaflet which is a map api, it was built using vanilla JavaScript',
      imgSrc: 'img/mapty.png',
      link: '',
   },
]

const Explore = () => {
   return (
      <div>
         {data.map(el => <WebProject key={el.id} heading={el.heading} subheading={el.subheading} description={el.description} imgSrc={el.imgSrc} link={el.link}/>)}
         <Carousel/>
      </div>
      
   )
}

export default Explore;