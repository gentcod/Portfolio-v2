import styled from 'styled-components';
import { devices } from '../../dev-data/media-queries';

export const Container = styled.div`
   width: 35rem;
   height: 45rem;
   background-color: rgba(34, 34, 34, .2);
   backdrop-filter: blur(5px);
   border-radius: 1rem;
   padding: 2.5rem 1.5rem;

   display: flex;
   flex-direction: column;
   row-gap: 1rem;
   color: white;

   @media only screen and ${devices.phone} {
      height: auto;
   }
`

export const ExperienceNum = styled.h2`
   color: #acacac;
   font-size: 7rem;
   margin-left: 1rem;
`

export const ExperienceTitle = styled.h3`
   font-weight: 700;
   font-size: 1.6rem;
   height: 4rem;
`

export const ExperienceTitleCompanyName = styled.span`
   color: ${props => props.color};
`

export const ExperienceTitleRole = styled.span`
   font-size: 1.2rem;
   margin-left: .5rem;
`

export const ExperienceDesc = styled.p`
   font-size: 1.4rem;
   color: #d1d1d1;
   word-spacing: .3rem;
   line-height: 1.2;
`