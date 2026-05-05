import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
   width: 100%;
   padding: 2rem 5rem;
   display: flex;
   flex-direction: column;
   row-gap: 4rem;

   @media only screen and (max-width: 768px) {
      padding: 2rem 1.5rem;
   }
`;

export const AboutStack = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 4rem;
   align-items: center;

   @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
   }
`;

export const AboutContent = styled(motion.div)`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`;

export const AboutHeading = styled.h1`
   font-size: 3.5rem;
   font-weight: 800;
   color: ${({ theme }) => theme.colors.textPrimary};
   line-height: 1.2;

   @media only screen and (max-width: 768px) {
      font-size: 2.5rem;
   }
`;

export const AboutSummary = styled.p`
   font-size: 1.1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.8;
`;