import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavigationItemContainer = styled(motion(Link))`
   padding: 0.4rem 0.9rem;
   font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
   font-size: 0.9rem;
   font-weight: 500;
   text-decoration: none;
   border-radius: 4px;
   color: ${({ theme }) => theme.colors.textSecondary};
   border: 1px solid transparent;
   transition: all 0.2s ease;
   display: inline-block;

   &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
      border-color: ${({ theme }) => theme.colors.borderHairline};
      background-color: ${({ theme }) => theme.colors.surfaceSubtle};
   }
`;

export const NavigationItemSpan = styled.span`
   text-transform: capitalize;
   margin: auto 0;
`;

export const NavigationItemContainerActive = styled(NavigationItemContainer)`
   color: ${({ theme }) => theme.colors.primary};
   background-color: ${({ theme }) => theme.colors.surfaceSubtle};
   border-color: ${({ theme }) => theme.colors.borderHairline};
   font-weight: 600;
`;