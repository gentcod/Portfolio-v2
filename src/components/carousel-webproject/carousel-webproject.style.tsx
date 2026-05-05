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
  background-color: ${({ theme }) => theme.colors.background};
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
    width: 100%;
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
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`
  
export const CurrentDot = styled(Dot)`
  background-color: ${({ theme }) => theme.colors.textPrimary};
`;

export const GlassNavBtn = styled.button`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryAccent};
    color: #0d1e11;
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.colors.secondaryAccent};
  }

  @media only screen and ${devices.phone} {
    display: none;
  }
`;