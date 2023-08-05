import styled, {keyframes} from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const CarouselRotate = keyframes`
   0% {
     transform: translateX(0);
   }
   20% {
     transform: translateX(-100%);
   }
   40% {
     transform: translateX(-200%);
   }
   60% {
     transform: translateX(-300%);
   }
   80% {
     transform: translateX(-400%);
   }
   100% {
     transform: translateX(-500%);
   }
`

export const Shake = keyframes`
   0% {
      transform: rotate(5deg) scale(1.1);
   }

   25% {
      transform: rotate(-5deg) scale(1);
   }

   50% {
      transform: rotate(5deg) scale(1.2);
   }

   75% {
      transform: rotate(-5deg) scale(1.1);
   }

   100% {
      transform: rotate(0) scale(1);
   }
`

export const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  column-gap: 5rem;
  align-items: center;
  overflow: hidden;
  width: 100%;

  @media only screen and ${devices.phone} {
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
    row-gap: 3rem;
    column-gap: 3rem;
  }
`

export const SliderImage = styled.img`
  width: 35rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  cursor: pointer;

  &:hover {
   animation: ${Shake} 1.5s ease
  }

  @media only screen and ${devices.tabLand} {
    width: 15rem;
    height: 15rem;
  }

  @media only screen and ${devices.phone} {
    width: 10rem;
    height: 10rem;
  }
`;
