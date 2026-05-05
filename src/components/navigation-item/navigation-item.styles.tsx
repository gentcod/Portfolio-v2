import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavigationItemContainer = styled(motion(Link))`
   padding: 0.5rem 1rem;
   font-weight: 500;
   text-decoration: none;
   border-radius: 2rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   transition: color 0.3s ease;
   display: inline-block;

   &:hover {
      color: ${({ theme }) => theme.colors.secondaryAccent};
   }
`;

export const NavigationItemSpan = styled.span`
   font-size: 1rem;
   text-transform: capitalize;
   margin: auto 0;
`;

export const NavigationItemContainerActive = styled(NavigationItemContainer)`
   color: ${({ theme }) => theme.colors.textPrimary};
   background-color: ${({ theme }) => theme.colors.surfaceHighlight};
   font-weight: 600;
`;