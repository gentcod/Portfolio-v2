import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const Container = styled.div`
   height: 70vh;
   width: 100%;
   overflow: hidden;
   margin: 0 auto;
   margin-bottom: 2rem;

   @media only screen and ${devices.tabLand} {
      height: fit-content;
   }
`

export const FrameOuter = styled.div`
   width: 100%;
   height: 55rem;
   background-color: #0d1e11;
   margin-top: 2rem;;
   margin: auto;
   overflow: hidden;
   position: relative;

   @media only screen and ${devices.phone} {
      height: 60rem;
   }
`

export const CarourselHeader = styled.h3`
   color: #d1d1d1;
   text-transform: uppercase;
   text-align: left;
   font-weight: 100;
   font-size: 1.4rem;
   letter-spacing: .3rem;
   margin-top: 1rem;
   margin-left: 5rem;
`

export const FramerInner = styled.div`
   display: inline-block;
   width: 100%;
   height: 45rem;
   padding: 2rem;
   margin: 0 auto; 

   position: absolute;
   transform: translate(-50%, -50%);
   top: 50%;
   left: 50%;

   @media only screen and ${devices.tabLand} {
      height: auto;
   }
`