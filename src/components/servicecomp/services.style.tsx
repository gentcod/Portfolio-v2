import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
   padding: 5rem;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background};

   @media only screen and (max-width: 768px) {
      padding: 3rem 1.5rem;
   }
`;

export const ServicesContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   margin-top: 3rem;
`;

export const ServiceCard = styled(motion.div)<{ isHighlighted?: boolean }>`
   background-color: ${({ theme, isHighlighted }) => 
      isHighlighted ? theme.colors.accent : theme.colors.surface};
   padding: 3rem 2rem;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-10px);
   }
`;

export const ServiceHeader = styled.h3<{ isHighlighted?: boolean }>`
   font-size: 1.5rem;
   font-weight: 700;
   color: ${({ theme, isHighlighted }) => 
      isHighlighted ? theme.colors.background : theme.colors.textPrimary};
   margin-bottom: 1.5rem;
`;

export const ServiceContent = styled.p<{ isHighlighted?: boolean }>`
   font-size: 1.05rem;
   color: ${({ theme, isHighlighted }) => 
      isHighlighted ? theme.colors.background : theme.colors.textSecondary};
   line-height: 1.8;
   opacity: ${({ isHighlighted }) => isHighlighted ? 0.9 : 1};
`;