import styled, { keyframes } from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const ScrollUp = keyframes`
   0% {
      transform: translateY(50%);
      opacity: 0;
   }
   100% {
      transform: translateY(0);
      opacity: 1;
   }
`

export const HomeContainer = styled.div`
   width: 100%;
   padding: 0 2rem;
   background-color: #111;
`;

export const HomeContentContainer = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: row;
   align-content: space-between;
   justify-content: space-between;
   // height: 80%;
   margin: 0 auto;
   cursor: pointer;
   animation: ${ScrollUp} 1.5s ease;

   @media only screen and ${devices.tabLand} {
      flex-direction: column-reverse;
   }
`;

export const HomeIntro = styled.div`
   height: 100%;
   padding: 1rem;
   display: flex;
   flex-direction: column;
`;

export const Name = styled.h1`
   font-size: 3rem;
   text-align: left;
   font-weight: 500;
   letter-spacing: .5rem;
   margin-top: 10rem;
   margin-bottom: 1rem;

   @media only screen and ${devices.phone} {
      margin-top: 2rem;
   }
`

export const Title = styled.h2`
   font-size: 2.8rem;
   text-align: left;
   font-weight: 300;
   margin-bottom: 1rem;
`

export const Description = styled.p`
   font-size: 2rem;
   text-align: left;
   font-weight: 300;
   line-height: 1.5;
`

export const HomeImageContainer = styled.div`
   height: 100%;
   padding: 1rem;
`;

export const HomeImage = styled.img`
   width: auto;
   min-height: 100%;

   @media only screen and ${devices.phone} {
      width: 100%;
   }
`;

export const SocialsHeader = styled.h2`
   font-size: 1.4rem;
   color: #78877e;
   text-align: left;
   margin-top: 3rem;
`