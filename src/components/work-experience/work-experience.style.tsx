import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   background-color: #111;
   padding: 5rem 3rem;
   position: relative;
   text-align: left;
`

export const Heading = styled.h3`
   color: #d1d1d1;
   text-transform: uppercase;
   font-weight: 100;
   font-size: 1.2rem;
   letter-spacing: .3rem;
   margin-bottom: 5rem;
`

export const SubHeading = styled.p`
   color: white;
   font-wegiht: 1000;
   font-size: 3rem;
   width: 50rem;
`

export const ExperienceContainer = styled.div`
   display: flex;
   flex-direction: row;
   column-gap: 3rem;
   justify-content: center;
   justify-items: center;
   justify-content: center;
   align-items: start;
   align-content: center;
   padding: 3rem;
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
   }

   &:active {
      transform: translateY(1rem);
   }
`