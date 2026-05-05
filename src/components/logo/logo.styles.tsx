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
   font-size: 1.5rem;
   font-weight: 800;
   color: ${({ theme }) => theme.colors.textPrimary};
   letter-spacing: -0.5px;
   
   span {
      color: ${({ theme }) => theme.colors.accent};
   }
`;

export const LogoDescription = styled.div`
   display: none; /* Hide the description in the top nav to match the reference */
`;