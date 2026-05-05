import { useState } from 'react';
import { webprojectData } from '../../dev-data/webproject_data';
import WebProject from '../web-project/web-project.component';
import { Container, CurrentDot, CurrentSlide, Dot, DotContainer, InnerContainer, GlassNavBtn, Slide, SliderContainer } from './carousel-webproject.style';
import Heading from '../heading/heading.component';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
            <GlassNavBtn onClick={() => handlePrevious()}>
               <FiChevronLeft size={24} />
            </GlassNavBtn>
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
            <GlassNavBtn onClick={() => handleNext()}>
               <FiChevronRight size={24} />
            </GlassNavBtn>
         </InnerContainer>
      </Container>
   )
}

export default CarouselWebProject;