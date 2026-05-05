import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactPageContainer = styled(motion.div)`
   padding: 5rem;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 60vh;

   @media only screen and (max-width: 768px) {
      padding: 3rem 1.5rem;
   }
`;

export const ContactContent = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 5rem;
   max-width: 1200px;
   width: 100%;

   @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 3rem;
   }
`;

export const ContactLeft = styled(motion.div)`
   display: flex;
   flex-direction: column;
`;

export const ContactHeading = styled.h1`
   font-size: 3.5rem;
   font-weight: 800;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 1.5rem;
   line-height: 1.2;
`;

export const ContactText = styled.p`
   font-size: 1.1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
   margin-bottom: 3rem;
`;

export const EmailLink = styled.a`
   font-size: 1.5rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.accent};
   text-decoration: none;
   display: flex;
   align-items: center;
   gap: 1rem;
   transition: opacity 0.3s ease;

   &:hover {
      opacity: 0.8;
   }
`;

export const ContactRight = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const QuoteText = styled.h2`
   font-size: 2.2rem;
   font-weight: 400;
   color: ${({ theme }) => theme.colors.textPrimary};
   line-height: 1.4;
   margin-bottom: 2rem;
`;

export const StatsContainer = styled.div`
   display: flex;
   gap: 4rem;

   @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
   }
`;

export const StatBlock = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

export const StatNumber = styled.span`
   font-size: 4rem;
   font-weight: 800;
   color: ${({ theme }) => theme.colors.accent};
`;

export const StatLabel = styled.span`
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   text-transform: uppercase;
   letter-spacing: 1px;
   max-width: 100px;
`;