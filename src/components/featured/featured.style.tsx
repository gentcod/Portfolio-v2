import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1rem;
`;

export const FeaturedProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.accentGlow};
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewPane = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 280px;
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  border-right: 1px solid ${({ theme }) => theme.colors.borderHairline};

  @media only screen and (max-width: 960px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${FeaturedProjectCard}:hover & {
    transform: scale(1.02);
  }
`;

export const NarrativePane = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 1.75rem;
  }
`;

export const CategoryTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '//';
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

export const ProjectNarrative = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

export const TechStackTrack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2rem;
`;

export const TechBadge = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 3px 8px;
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const LiveLink = styled.a`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #0C0D0E;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 220, 130, 0.4);
    filter: brightness(1.05);
  }
`;

export const SourceLink = styled.a`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.borderActive};
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
  }
`;

export const ExploreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
`;

export const IndexLink = styled(Link)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  padding: 12px 24px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.25s ease;

  svg {
    transition: transform 0.25s ease;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surfaceSubtle};

    svg {
      transform: translateX(4px);
    }
  }
`;
