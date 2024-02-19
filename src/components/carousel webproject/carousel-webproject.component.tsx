
import { useState } from 'react';
import { webprojectData } from '../../dev-data/webproject_data';
import WebProject from '../web-project/web-project.component';
import { Container, CurrentDot, CurrentSlide, Dot, DotContainer, InnerContainer, LogoContainer, Slide, SliderContainer } from './carousel-webproject.style';
import Heading from '../heading/heading.component';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const CarouselWebProject = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [slideStartPos, setSlideStartPos] = useState(true);

   const handlePrevious = () => {
     setCurrentSlide(
       currentSlide === 0 ? webprojectData.length - 1 : currentSlide - 1
     );
     setSlideStartPos(false);
   };
 
   const handleNext = () => {
     setCurrentSlide(
       currentSlide === webprojectData.length - 1 ? 0 : currentSlide + 1
     );
     setSlideStartPos(true);
   };
 
   const handleSelect = (index: number) => {
     setCurrentSlide(index);
     index < currentSlide ? setSlideStartPos(false) : setSlideStartPos(true)
   };

   return (
      <Container>
         <Heading title='Web Projects'/>
         <InnerContainer>
            <LogoContainer>
               <ArrowLeft onClick={() => handlePrevious()}/>
            </LogoContainer>
            <SliderContainer>
               {webprojectData.map(el => 
                  currentSlide === el.id ?
                  <CurrentSlide start={slideStartPos} key={el.id}>
                     <WebProject key={el.id} heading={el.heading} subheading={el.subheading} description={el.description} imgSrc={el.imgSrc} link={el.link}/>
                  </CurrentSlide>
                  :
                  <Slide key={el.id} >
                     <WebProject key={el.id} heading={el.heading} subheading={el.subheading} description={el.description} imgSrc={el.imgSrc} link={el.link}/>
                  </Slide>
               )}
               <DotContainer>
                  {webprojectData.map((el) =>
                  currentSlide === el.id ? (
                     <CurrentDot key={el.id} />
                  ) : (
                     <Dot onClick={() => handleSelect(el.id)} key={el.id} />
                  )
                  )}
               </DotContainer>
            </SliderContainer>
            <LogoContainer>
               <ArrowRight onClick={() => handleNext()}/>
            </LogoContainer>
         </InnerContainer>
      </Container>
   )
}

export default CarouselWebProject;