import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HomeLayout = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

export const HeroSection = styled(motion.div)`
   width: 100%;
   min-height: 80vh;
   padding: 2rem 5rem;
   display: flex;
   align-items: center;
   justify-content: center;

   @media only screen and (max-width: 768px) {
      padding: 2rem 1.5rem;
      flex-direction: column;
   }
`;

export const HomeContentWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 12rem;
   max-width: 1200px;
   width: 100%;
   align-items: center;

   @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`;

export const LeftSection = styled(motion.div)`
   display: flex;
   flex-direction: column;
   position: relative;
`;

export const AccentBox = styled(motion.div)`
   width: 50px;
   height: 50px;
   background-color: ${({ theme }) => theme.colors.secondaryAccent};
   border-radius: 12px 0 12px 12px;
   margin-bottom: 2rem;
`;

export const Name = styled.h1`
   font-size: 4.5rem;
   font-weight: 800;
   line-height: 1.1;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 2rem;

   @media only screen and (max-width: 768px) {
      font-size: 3rem;
   }
`;

export const SocialLinks = styled.div`
   display: flex;
   gap: 1.5rem;
   
   a {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
         color: ${({ theme }) => theme.colors.secondaryAccent};
      }
   }
`;

export const RightSection = styled(motion.div)`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.surface};
   padding: 3rem;
   border-radius: 20px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const IntroTag = styled.p`
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: 0.9rem;
   text-transform: uppercase;
   letter-spacing: 2px;
   margin-bottom: 1.5rem;
   display: flex;
   align-items: center;
   
   &::before {
      content: '';
      display: inline-block;
      width: 30px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.textSecondary};
      margin-right: 1rem;
   }
`;

export const RoleTitle = styled.h2`
   font-size: 2.2rem;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 1.5rem;
   line-height: 1.3;
`;

export const Description = styled.p`
   font-size: 1.1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
   margin-bottom: 2rem;
`;

export const ActionLink = styled(motion(Link))`
   color: ${({ theme }) => theme.colors.accent};
   font-weight: 600;
   font-size: 1.1rem;
   display: flex;
   align-items: center;
   gap: 0.5rem;
   cursor: pointer;
   width: fit-content;
`;

export const ImageContainer = styled(motion.div)`
   position: absolute;
   right: -20%;
   top: -10%;
   z-index: -1;
   opacity: 0.5;

   img {
      width: 400px;
      height: auto;
      object-fit: contain;
   }

   @media only screen and (max-width: 768px) {
      display: none;
   }
`;