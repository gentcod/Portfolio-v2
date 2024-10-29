import styled from 'styled-components';
import { devices } from '../../dev-data/media-queries';

export const Container = styled.div`
   width: 100%;
   background-color: #111;
   padding: 5rem 3rem;
   position: relative;
   text-align: left;

   @media only screen and ${devices.phone} {
      text-align: center;
      padding: 2rem;
   }
`

export const Heading = styled.h3`
   color: #d1d1d1;
   text-transform: uppercase;
   font-weight: 100;
   font-size: 1.2rem;
   letter-spacing: .3rem;
   margin-bottom: 5rem;

   @media only screen and ${devices.phone} {
      text-align: left;
   }
`

export const SubHeading = styled.p`
   color: white;
   font-wegiht: 1000;
   font-size: 3rem;
   width: 50rem;

   @media only screen and ${devices.phone} {
      width: auto;
   }
`

export const ExperienceContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   column-gap: 3rem;
   row-gap: 2rem;
   justify-content: center;
   justify-items: center;
   justify-content: center;
   align-items: start;
   align-content: center;
   padding: 3rem;

   @media only screen and ${devices.phone} {
      flex-direction: column;
      row-gap: 1.5rem;
      align-items: center;
   }
`

export const ResumeButton = styled.a`
   padding: 1.5rem 3rem;
   background-color: transparent;
   color: white;
   font-weight: 700;
   border: 1px solid #45a25a;
   border-radius: .5rem;
   margin-top: 3rem;
   margin-left: 2rem;
   cursor: pointer;
   transition: all .8s ease;

   &:hover {
      transform: translateY(-1rem) scale(1.05);
      background-color: #45a25a;
      border: 1px solid white;
   }

   &:active {
      transform: translateY(1rem);
   }

   @media only screen and ${devices.phone} {
      margin-left: 0;
      margin-bottom: 1rem;
      padding: 1rem 2rem;
      font-size: 1.2rem;
   }
`