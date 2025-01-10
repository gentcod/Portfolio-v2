import styled, { css, keyframes } from "styled-components";
import { devices } from "../../dev-data/media-queries";

export type CarouselProp = {
  start: boolean;
}

export const CarouselSlideLeft = keyframes`
   0% {
     transform: translateX(-50%);
     opacity: 0;
   }
   100% {
     transform: translateX(0);
     opacity: 1;
   }
`

export const CarouselSlideRight = keyframes`
   0% {
     transform: translateX(50%);
     opacity: 0;
   }
   100% {
     transform: translateX(0);
     opacity: 1;
   }
`

export const moveRight = css`
  animation: ${CarouselSlideRight} 1.5s ease;
`

export const moveLeft = css`
  animation: ${CarouselSlideLeft} 1.5s ease;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color:rgba(247, 252, 248, 0.15);
`
   
export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;

  @media only screen and ${devices.tabLand} {
    padding: 0;
  }
`;

export const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;

  @media only screen and ${devices.phone} {
    flex-direction: column;
  }
`

export const Slide = styled.div`
  display: none;
  padding: 2rem;

  @media only screen and ${devices.phone} {
    display: flex;
  }
`;
  
export const CurrentSlide = styled(Slide)<CarouselProp>`
  display: flex;
  ${({start}) => start ? moveRight : moveLeft};
`
// animation: ${start === true ? CarouselSlideLeft: CarouselSlideRight} 1.5s ease;

export const DotContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: .6rem;
  bottom: 1rem;
  margin: auto, 0;

  @media only screen and ${devices.phone} {
    display: none;
  }
`

export const Dot = styled.span`
  width: .6rem;
  height: .6rem;
  border-radius: 50%;
  background-color: rgb(69, 162, 90);
  cursor: pointer;
`
  
export const CurrentDot = styled(Dot)`
  background-color: #0d1e11;
`;

export const LogoContainer = styled.div`
  @media only screen and ${devices.phone} {
    display: none;
  }
`