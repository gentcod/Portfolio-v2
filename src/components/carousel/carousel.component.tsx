import Slider from '../slider/slider.component';
import { CarourselHeader, Container, FrameOuter, FramerInner } from './carousel.style';

const Carousel = () => {
   return (
      <Container>
         <FrameOuter>
            <CarourselHeader>Graphic Designs and Illustrations</CarourselHeader>
            <FramerInner>
               <Slider/>
            </FramerInner>
         </FrameOuter>
      </Container>
   )
}

export default Carousel;