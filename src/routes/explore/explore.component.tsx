import CarouselWebProject from '../../components/carousel webproject/carousel-webproject.component';
import Carousel from '../../components/carousel/carousel.component';
import WebProject from '../../components/web-project/web-project.component';
import { webprojectData } from '../../dev-data/webproject_data';

import {} from './explore.styles'

const Explore = () => {
   return (
      <div>
         <CarouselWebProject/>
         {/* {webprojectData.map(el => <WebProject key={el.id} heading={el.heading} subheading={el.subheading} description={el.description} imgSrc={el.imgSrc} link={el.link}/>)} */}
         <Carousel/>
      </div>
      
   )
}

export default Explore;