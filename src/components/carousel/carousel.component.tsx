import Slider from '../slider/slider.component';
import { Container, FrameOuter, FramerInner, OvalTop, OvalBottom } from './carousel.style';

const Carousel = () => {
   return (
      <Container>
         <FrameOuter>
            <OvalTop/>
            <FramerInner>
               <Slider/>
            </FramerInner>
            <OvalBottom/>
         </FrameOuter>
      </Container>
   )
}

export default Carousel;