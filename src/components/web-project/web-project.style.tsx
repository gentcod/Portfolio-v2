import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const Container = styled.div`
   margin: 0 auto;
   padding: 2rem;
   border-bottom: 1px solid #45a25a;
   display: flex;
   flex-direction: column;
   row-gap: 1rem;

   @media only screen and ${devices.tabLand} {
      padding: 0;
   }
`

export const SubTopContainer = styled.div`
   height: 12rem;
   display: flex;
   justify-content: center;
   column-gap: 15rem;
   text-align: left;

   @media only screen and ${devices.phone} {
      flex-direction: column;
   }
`

export const SubBottomContainer = styled.div`

`

export const SubTopLeftContainer = styled.div`
   width: 25rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const SubTopRightContainer = styled.div`
   width: 45rem;
   display: flex;
   flex-direction: column;
   margin: auto 0;
   row-gap: 2rem;

   @media only screen and ${devices.tabPort} {
      width: auto;
   }
`

export const Heading = styled.h3`
   font-size: 4rem;
   font-weight: 1000;
   text-align: left;
   line-height: 1;

   @media only screen and ${devices.phone} {
      font-size: 2rem;  
   }
`

export const SubHeading = styled.h5`
   text-transform: uppercase;
   color: #acacac;
   padding: 1rem 0;

   @media only screen and ${devices.phone} {
      font-size: 1.4rem;
   }
`

export const Description = styled.p`
   font-size: 1.3rem;

   @media only screen and ${devices.phone} {
      font-size: 1.2rem;
   }
`

export const LinkIcon = styled.img`
   height: 2rem;
   transform: translateY(.5rem);
   margin-left: .5rem;
   transition: .8s all ease;
`

export const ProjectLink = styled(Link)`
   height: 3rem;
   width: 15rem;
   color: #275933;
   font-weight: 1000;
   margin: auto 0;
   backface-visibility: hidden;

   &:hover {
      border-bottom: 2px solid #45a25a;
   }

   &:hover ${LinkIcon} {
      margin-left: 1.5rem;
   }

   @media only screen and ${devices.phone} {
      width: 100%; 
      font-size: 1.2rem; 
   }
`

export const Image = styled.img`
   height: 40rem;
   object-fit: cover;
   border-radius: 2rem;
   border: 5px solid #0d1e11;

   @media only screen and ${devices.tabLand} {
      width: 100%;
      height: 25rem;
   }

   @media only screen and ${devices.phone} {
      width: 100%;
      height: 25rem;
   }
`