import styled from "styled-components";
import { motion } from "framer-motion";

export const ExploreContainer = styled(motion.div)`
   padding: 4rem 5rem;
   width: 100%;

   @media only screen and (max-width: 768px) {
      padding: 2rem 1.5rem;
   }
`;

export const ExploreHeading = styled.h1`
   font-size: 3rem;
   font-weight: 800;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 1rem;
`;

export const ExploreSubheading = styled.p`
   font-size: 1.2rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: 4rem;
`;

export const ProjectsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 3rem;
`;

export const ProjectCard = styled(motion.a)`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.surface};
   border-radius: 16px;
   overflow: hidden;
   text-decoration: none;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-10px);
   }
`;

export const ProjectImage = styled.img`
   width: 100%;
   height: 200px;
   object-fit: cover;
`;

export const ProjectInfo = styled.div`
   padding: 2rem;
   display: flex;
   flex-direction: column;
   flex: 1;
`;

export const ProjectTitle = styled.h2`
   font-size: 1.5rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 1rem;
`;

export const ProjectDesc = styled.p`
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
   margin-bottom: 1.5rem;
   flex: 1;
`;

export const ProjectTags = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
`;

export const Tag = styled.span`
   padding: 0.3rem 0.8rem;
   background-color: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.accent};
   font-size: 0.8rem;
   border-radius: 20px;
   font-weight: 600;
`;