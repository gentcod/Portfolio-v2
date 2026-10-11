import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  padding: 1.25rem;
  border-radius: 4px;
  min-width: 105px;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accentGlow};
    transform: translateY(-2px);
  }
`;

export const TechIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

export const BoxText = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;

  ${BoxContainer}:hover & {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;