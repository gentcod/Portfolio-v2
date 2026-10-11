import styled, { css, keyframes } from "styled-components";
import { devices } from "../../dev-data/media-queries";

export type CarouselProp = {
  start: boolean;
}

export const CarouselSlideLeft = keyframes`
   0% {
     transform: translateX(-30px);
     opacity: 0;
   }
   100% {
     transform: translateX(0);
     opacity: 1;
   }
`;

export const CarouselSlideRight = keyframes`
   0% {
     transform: translateX(30px);
     opacity: 0;
   }
   100% {
     transform: translateX(0);
     opacity: 1;
   }
`;

export const moveRight = css`
  animation: ${CarouselSlideRight} 0.5s ease-out;
`;

export const moveLeft = css`
  animation: ${CarouselSlideLeft} 0.5s ease-out;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  margin-bottom: 3rem;
  background-color: transparent;
`;
   
export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
`;

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Slide = styled.div`
  display: none;
  width: 100%;
`;
  
export const CurrentSlide = styled(Slide)<CarouselProp>`
  display: flex;
  width: 100%;
  ${({start}) => start ? moveRight : moveLeft};
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.surfaceHighlight};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderActive};
  }
`;
  
export const CurrentDot = styled(Dot)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  width: 24px;
`;

export const GlassNavBtn = styled.button`
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.borderActive};
  }

  @media only screen and ${devices.phone} {
    display: none;
  }
`;