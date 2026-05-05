import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
   width: 100%;
   padding: 5rem 0;
   position: relative;
   text-align: left;
`;

export const Heading = styled.h3`
   color: ${({ theme }) => theme.colors.textSecondary};
   text-transform: uppercase;
   font-weight: 600;
   font-size: 1rem;
   letter-spacing: 0.2rem;
   margin-bottom: 1rem;
`;

export const SubHeading = styled.p`
   color: ${({ theme }) => theme.colors.textPrimary};
   font-weight: 800;
   font-size: 2.5rem;
   max-width: 800px;
   margin-bottom: 3rem;
   line-height: 1.3;

   @media only screen and (max-width: 768px) {
      font-size: 2rem;
   }
`;

export const ExperienceContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
   width: 100%;

   @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`;

export const ResumeButton = styled(motion.a)`
   display: inline-block;
   padding: 1rem 2.5rem;
   background-color: transparent;
   color: ${({ theme }) => theme.colors.accent};
   font-weight: 600;
   border: 2px solid ${({ theme }) => theme.colors.accent};
   border-radius: 8px;
   margin-top: 3rem;
   text-decoration: none;
   transition: all 0.3s ease;

   &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.background};
   }
`;