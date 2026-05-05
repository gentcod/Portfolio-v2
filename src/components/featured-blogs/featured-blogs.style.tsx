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

export const BlogsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 3rem;
   margin-top: 3rem;
`;

export const Blog = styled(motion.div)`
   background-color: ${({ theme }) => theme.colors.background};
   border-radius: 16px;
   overflow: hidden;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
   border: 1px solid ${({ theme }) => theme.colors.border};
   transition: transform 0.3s ease;
   display: flex;
   flex-direction: column;

   &:hover {
      transform: translateY(-10px);
   }
`;

export const BlogThumnail = styled.img`
   width: 100%;
   height: 200px;
   object-fit: cover;
`;

export const BlogContentCon = styled.div`
   padding: 2rem;
   display: flex;
   flex-direction: column;
   flex: 1;
`;

export const BlogTitle = styled.h3`
   font-size: 1.4rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 1rem;
   line-height: 1.4;
`;

export const BlogSummary = styled.p`
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
   margin-bottom: 2rem;
   flex: 1;
`;

export const ReadButton = styled.a`
   color: ${({ theme }) => theme.colors.accent};
   font-weight: 700;
   font-size: 1rem;
   text-decoration: none;
   display: flex;
   align-items: center;
   gap: 0.5rem;
   transition: opacity 0.3s ease;

   &:hover {
      opacity: 0.8;
   }
`;

export const ExploreButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 4rem;
`;

export const ExploreButton = styled(Link)`
   display: inline-block;
   padding: 1rem 3rem;
   background-color: transparent;
   color: ${({ theme }) => theme.colors.accent};
   font-weight: 700;
   font-size: 1.1rem;
   text-transform: uppercase;
   letter-spacing: 1px;
   border: 2px solid ${({ theme }) => theme.colors.accent};
   border-radius: 8px;
   text-decoration: none;
   transition: all 0.3s ease;

   &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.background};
   }
`;
