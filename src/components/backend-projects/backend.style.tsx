import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled(motion.section)`
  padding: 5rem 2.5rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
`;

export const ContentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentsBlock = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  padding: 1.75rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 220, 130, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 25px ${({ theme }) => theme.colors.accentGlow};

    &::before {
      opacity: 1;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
`;

export const ProjectName = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '>';
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TerminalStatus = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 22px;
  margin-bottom: 1.5rem;
  flex: 1;
`;

export const BadgesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
`;

export const StackHeading = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.06em;
  margin-right: 0.25rem;
`;

export const StackTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 3px 8px;
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  transition: all 0.2s ease;

  ${ContentsBlock}:hover & {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.borderActive};
  }
`;

export const Tag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 2px 6px;
  background-color: rgba(0, 220, 130, 0.06);
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(0, 220, 130, 0.15);
  border-radius: 4px;
`;