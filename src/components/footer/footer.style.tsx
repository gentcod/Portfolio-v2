import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled(motion.footer)`
   width: 100%;
   padding: 4rem 5rem 2rem 5rem;
   background-color: ${({ theme }) => theme.colors.surface};
   border-top: 1px solid ${({ theme }) => theme.colors.border};
   display: flex;
   flex-direction: column;
   align-items: center;

   @media only screen and (max-width: 768px) {
      padding: 3rem 1.5rem 1.5rem 1.5rem;
   }
`;

export const FooterTop = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 4rem;
   width: 100%;
   max-width: 800px;
`;

export const FooterImageContainer = styled.div`
   position: relative;
   width: 120px;
   height: 120px;
   border-radius: 50%;
   padding: 5px;
   background: ${({ theme }) => `linear-gradient(45deg, ${theme.colors.accent}, ${theme.colors.secondaryAccent})`};
   margin-bottom: 2rem;

   &::before, &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 150px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.border};
      z-index: 0;
   }

   &::before { right: 100%; }
   &::after { left: 100%; }

   @media only screen and (max-width: 768px) {
      &::before, &::after {
         width: 50px;
      }
   }
`;

export const FooterImage = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   object-fit: cover;
   border: 4px solid ${({ theme }) => theme.colors.surface};
   position: relative;
   z-index: 1;
`;

export const FooterBottom = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 2rem;
   align-items: center;
   padding-top: 2rem;
   border-top: 1px solid ${({ theme }) => theme.colors.border};

   @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 1.5rem;
   }
`;

export const FooterColumn = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   &:nth-child(2) {
      align-items: center;
   }

   &:nth-child(3) {
      align-items: flex-end;
   }

   @media only screen and (max-width: 900px) {
      align-items: center !important;
   }
`;

export const ColumnHeading = styled.h4`
   font-size: 1rem;
   color: ${({ theme }) => theme.colors.textPrimary};
   margin-bottom: 0.5rem;
   font-weight: 600;
`;

export const SocialsRow = styled.div`
   display: flex;
   gap: 1rem;
`;

export const SocialLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.textSecondary};
   transition: all 0.3s ease;
   font-size: 1.2rem;

   &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.background};
      transform: translateY(-3px);
   }
`;

export const FooterLink = styled(Link)`
   color: ${({ theme }) => theme.colors.textSecondary};
   text-decoration: none;
   font-size: 0.95rem;
   transition: color 0.3s ease;

   &:hover {
      color: ${({ theme }) => theme.colors.accent};
   }
`;

export const Copyright = styled.p`
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: 0.9rem;
`;