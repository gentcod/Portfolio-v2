import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accentGlow};
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
  padding-bottom: 1rem;
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const CompanyName = styled.h3<{ color?: string }>`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.01em;
`;

export const Role = styled.h4`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DateSpan = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textTertiary};
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const ExperienceDesc = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 22px;
`;