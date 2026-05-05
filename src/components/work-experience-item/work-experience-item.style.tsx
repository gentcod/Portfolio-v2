import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
   background-color: ${({ theme }) => theme.colors.surface};
   border-radius: 16px;
   padding: 2.5rem;
   display: flex;
   flex-direction: column;
   row-gap: 1.5rem;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
   }
`;

export const ExperienceHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceHighlight};
   padding-bottom: 1.5rem;
   margin-bottom: 0.5rem;

   @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
   }
`;

export const TitleGroup = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

export const CompanyName = styled.h3<{ color: string }>`
   font-size: 1.5rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Role = styled.h4`
   font-size: 1.1rem;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.accent};
`;

export const DateSpan = styled.span`
   font-size: 0.9rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   background-color: ${({ theme }) => theme.colors.background};
   padding: 0.5rem 1rem;
   border-radius: 20px;
   font-weight: 500;
`;

export const ExperienceDesc = styled.p`
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
`;