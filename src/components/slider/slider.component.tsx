import { useState } from "react";
import {
  Container,
  CurrentDot,
  CurrentSliderImage,
  Dot,
  DotContainer,
  InnerContainer,
  SliderContainer,
  SliderImage,
} from "./slider.style";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

type SliderImageProp = {
   id: number;
   imgSrc: string;
 }[];

type SliderProp = {
   sliderData: SliderImageProp
}

const Slider = ({sliderData}: SliderProp) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideStartPos, setSlideStartPos] = useState(true);

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1
    );
    setSlideStartPos(false);
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
    setSlideStartPos(true);
  };

  const handleSelect = (index: number) => {
    setCurrentSlide(index);
    index < currentSlide ? setSlideStartPos(false) : setSlideStartPos(true)
  };

  return (
    <Container>
      <InnerContainer>
        <ArrowLeft onClick={() => handlePrevious()} style={{fill: "white", border: "none", outline: "none"}} />
        <SliderContainer>
          {sliderData.map((el) =>
            currentSlide === el.id ? (
              <CurrentSliderImage key={el.id} src={el.imgSrc} start={slideStartPos} />
            ) : (
              <SliderImage key={el.id} src={el.imgSrc} />
            )
          )}
          <DotContainer>
              {sliderData.map((el) =>
              currentSlide === el.id ? (
                <CurrentDot key={el.id}/>
              ) : (
                <Dot onClick={() => handleSelect(el.id)} key={el.id}/>
              )
              )}
          </DotContainer>
        </SliderContainer>
        <ArrowRight onClick={() => handleNext()} style={{fill: "white", border: "none", outline: "none"}} />
      </InnerContainer>
    </Container>
  );
};

export default Slider;
