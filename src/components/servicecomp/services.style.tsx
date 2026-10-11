import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  padding: 5rem 2.5rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled(motion.div)<{ isHighlighted?: boolean }>`
  background-color: ${({ theme, isHighlighted }) => 
    isHighlighted ? theme.colors.surfaceElevated : theme.colors.surfaceSubtle};
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme, isHighlighted }) => 
    isHighlighted ? theme.colors.borderActive : theme.colors.borderHairline};
  border-top: ${({ theme, isHighlighted }) => 
    isHighlighted ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.borderHairline}`};
  position: relative;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 25px ${({ theme }) => theme.colors.accentGlow};
  }
`;

export const CorePhilosophyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0, 220, 130, 0.08);
  border: 1px solid rgba(0, 220, 130, 0.25);
  border-radius: 4px;
  padding: 3px 8px;
  margin-bottom: 1.25rem;
  width: fit-content;
`;

export const ServiceNumber = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 1rem;
`;

export const ServiceHeader = styled.h3<{ isHighlighted?: boolean }>`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

export const ServiceContent = styled.p<{ isHighlighted?: boolean }>`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme, isHighlighted }) => 
    isHighlighted ? theme.colors.textPrimary : theme.colors.textSecondary};
  line-height: 24px;
`;