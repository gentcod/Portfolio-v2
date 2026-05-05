import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled(motion.div)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.surface};
   padding: 1.5rem;
   border-radius: 12px;
   min-width: 120px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
   }
`;

export const TechIcon = styled.img`
   width: 40px;
   height: 40px;
   object-fit: contain;
   margin-bottom: 0.5rem;
`;

export const BoxText = styled.p`
   font-size: 0.9rem;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.textPrimary};
   text-align: center;
`;