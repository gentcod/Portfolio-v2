import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LogoContainer = styled(motion(Link))`
   display: flex;
   align-items: center;
   text-decoration: none;
   gap: 0.5rem;
`;

export const LogoName = styled.div`
   font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
   font-size: 1.5rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.textPrimary};
   letter-spacing: -0.02em;
   
   span {
      color: ${({ theme }) => theme.colors.primary};
   }
`;

export const LogoDescription = styled.div`
   display: none;
`;