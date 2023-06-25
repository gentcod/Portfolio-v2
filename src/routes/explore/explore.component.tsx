import Carousel from '../../components/carousel/carousel.component';
import WebProject from '../../components/web-project/web-project.component';

import {} from './explore.styles'

type WebProjectData = {
   id: number;
   heading: string;
   subheading: string;
   description: string;
   imgSrc: string;
}[]

const data: WebProjectData = [
   {
      id: 0,
      heading: 'Mapty Map App',
      subheading: 'A workout web app using a map api',
      description: 'It uses Leaflet which is a map api, it was built using vanilla JavaScript',
      imgSrc: 'img/mapty.png'
   },

   {
      id: 1,
      heading: 'Foodie',
      subheading: 'A food recipe web app using a backend api and 3rd party api',
      description: 'It was developed using React for the frontend and C# for the backend',
      imgSrc: 'img/foodie.png'
   },

   {
      id: 2,
      heading: 'Mapty Map App',
      subheading: 'A workout web app using a map api',
      description: 'It uses Leaflet which is a map api, it was built using vanilla JavaScript',
      imgSrc: 'img/mapty.png'
   },
]

const Explore = () => {
   return (
      <div>
         <h2>Hello this is the explore page</h2>
         <Carousel/>
         {data.map(el => <WebProject key={el.id} heading={el.heading} subheading={el.subheading} description={el.description} imgSrc={el.imgSrc}/>)}
      </div>
      
   )
}

export default Explore;