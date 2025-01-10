import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";
import { ScrollUp } from "../home/home.styles";

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
   animation: ${ScrollUp} 1.5s ease;
`

export const AboutStack = styled.div`
   display: flex;
   padding: 5rem 3rem;
   background-color:rgba(247, 252, 248, 0.1);


   @media only screen and ${devices.phone} {
     flex-direction: column;
     padding: 1rem;
   }
`

export const AboutContent = styled.div`
   width: 80%;
   padding: 2rem 5rem;
   text-align: left;

   @media only screen and ${devices.phone} {
     width: 100%;
   }
`

export const AboutHeading = styled.h1`
   font-size: 5rem;
   font-weight: 1000;
   letter-spacing: .3rem;
   margin-bottom: 2rem;

   @media only screen and ${devices.phone} {
     font-size: 3rem;
   }
`

export const AboutSummary = styled.p`
   font-size: 1.8rem;
   font-weight: 300;
   word-spacing: 1rem;
   line-height: 1.5;
   padding-bottom: 3rem;
   border-radius: 1rem;
   border-bottom: 2px solid #45a25a;

   @media only screen and ${devices.phone} {
     font-size: 1.2rem;
   }
`