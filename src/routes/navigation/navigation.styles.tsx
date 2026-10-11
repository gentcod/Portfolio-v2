import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled(motion.nav)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
  
  @media only screen and (max-width: 768px) {
    padding: 1.25rem;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const NavBrandGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContactNavButton = styled(motion(Link))`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #0C0D0E;
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  box-shadow: 0 0 10px rgba(0, 220, 130, 0.2);

  &:hover {
    box-shadow: 0 0 20px rgba(0, 220, 130, 0.45);
    filter: brightness(1.05);
  }
`;

export const ThemeToggleBtn = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.borderActive};
    background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  }
`;