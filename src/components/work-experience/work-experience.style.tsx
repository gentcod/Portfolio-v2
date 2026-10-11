import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  padding: 2rem 0;
  position: relative;
  text-align: left;
`;

export const Eyebrow = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const Heading = styled.h2`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const SubHeading = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  max-width: 700px;
  margin-bottom: 2.5rem;
  line-height: 24px;
`;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ResumeButton = styled(motion.a)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  margin-top: 2.5rem;
  text-decoration: none;
  transition: all 0.25s ease;

  svg {
    transition: transform 0.2s ease;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surfaceSubtle};

    svg {
      transform: translateX(3px);
    }
  }
`;