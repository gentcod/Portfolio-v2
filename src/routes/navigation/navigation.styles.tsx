import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavigationContainer = styled(motion.nav)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  background-color: transparent;
  
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  @media only screen and (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ThemeToggleBtn = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryAccent};
    background-color: ${({ theme }) => theme.colors.surfaceHighlight};
  }
`;