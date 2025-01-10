import styled, { keyframes } from "styled-components";
import { devices } from "../../dev-data/media-queries";
import {
  moveLeft,
  moveRight,
  CarouselProp,
} from "../carousel-webproject/carousel-webproject.style";

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
`;

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
`;

export const Container = styled.div`
  position: relative;
  height: 100%;

  @media only screen and ${devices.tabLand} {
    height: fit-content;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20rem;

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
`;

export const SliderImage = styled.img`
  display: none;
  object-fit: contain;
  width: 35rem;
  height: 42rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    animation: ${Shake} 1.5s ease;
  }

  @media only screen and ${devices.tabLand} {
    width: 25rem;
    height: 25rem;
  }
`;

export const CurrentSliderImage = styled(SliderImage)<CarouselProp>`
  display: flex;
  ${({ start }) => (start ? moveRight : moveLeft)};
`;

export const DotContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.6rem;
  bottom: -3rem;

  @media only screen and ${devices.tabLand} {
    padding: 0;
  }
`;

export const Dot = styled.span`
  width: .6rem;
  height: .6rem;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
`;
// order: ${orderPos};

export const CurrentDot = styled(Dot)`
  background-color: white;
`;
