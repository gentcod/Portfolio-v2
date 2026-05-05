import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
   padding: 5rem;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.surface};

   @media only screen and (max-width: 768px) {
      padding: 3rem 1.5rem;
   }
`;

export const ProjectsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   margin-top: 3rem;
`;

export const ImageSkewContainer = styled(motion.a)`
   position: relative;
   overflow: hidden;
   border-radius: 16px;
   cursor: pointer;
   text-decoration: none;
   aspect-ratio: 16 / 9;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

   &:hover img {
      transform: scale(1.05);
   }

   &:hover div {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
   }
`;

export const FeaturedImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   transition: transform 0.5s ease;
`;

export const FeaturedImageOverLay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.6);
   display: flex;
   align-items: flex-end;
   padding: 2rem;
   transition: all 0.3s ease;
`;

export const FeaturedTitle = styled.h3`
   color: #ffffff;
   font-size: 1.5rem;
   font-weight: 700;
   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const ExploreButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 4rem;
`;

export const ExploreButton = styled(Link)`
   display: inline-block;
   padding: 1rem 3rem;
   background-color: ${({ theme }) => theme.colors.accent};
   color: ${({ theme }) => theme.colors.background};
   font-weight: 700;
   font-size: 1.1rem;
   text-transform: uppercase;
   letter-spacing: 1px;
   border-radius: 8px;
   text-decoration: none;
   transition: opacity 0.3s ease;

   &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryAccent};
      color: #0d1e11;
      opacity: 1;
   }
`;
