import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled(motion.div)`
   padding: 5rem;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background};

   @media only screen and (max-width: 768px) {
      padding: 3rem 1.5rem;
   }
`;

export const ContentsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 3rem;
   margin-top: 3rem;
`;

export const ContentsBlock = styled(motion.a)`
   background-color: ${({ theme }) => theme.colors.surface};
   padding: 2.5rem;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   text-decoration: none;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
   border: 1px solid ${({ theme }) => theme.colors.border};
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-10px);
   }
`;

export const ProjectName = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 1rem;
`;

export const Description = styled.p`
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
   margin-bottom: 2rem;
   flex: 1;
`;

export const StackContainer = styled.div`
   margin-bottom: 1.5rem;
`;

export const StackHeading = styled.p`
   font-size: 0.85rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 0.5rem;
   letter-spacing: 1px;
`;

export const TagsContainer = styled.div`
   margin-bottom: 0;
`;

export const TagsHeading = styled.p`
   font-size: 0.85rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 0.5rem;
   letter-spacing: 1px;
`;

export const StackTag = styled.span`
   display: inline-block;
   padding: 0.3rem 0.8rem;
   margin: 0.2rem;
   background-color: ${({ theme }) => theme.colors.surfaceHighlight};
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: 0.8rem;
   border-radius: 20px;
`;

export const Tag = styled.span`
   display: inline-block;
   padding: 0.3rem 0.8rem;
   margin: 0.2rem;
   background-color: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.accent};
   font-size: 0.8rem;
   border-radius: 20px;
   font-weight: 600;
`;