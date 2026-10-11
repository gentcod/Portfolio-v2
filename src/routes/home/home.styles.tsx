import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 220, 130, 0.7);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(0, 220, 130, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 220, 130, 0);
  }
`;

export const HomeLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled(motion.div)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 75vh;
  padding: 4rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.25rem;
    min-height: auto;
  }
`;

export const HomeContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  max-width: 1280px;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const LeftSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  width: fit-content;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
`;

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primary};
  animation: ${pulseGlow} 2s infinite;
`;

export const Name = styled.h1`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 2rem;

  span.period {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.25rem;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.borderHairline};
    background-color: ${({ theme }) => theme.colors.surfaceSubtle};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.borderActive};
      background-color: ${({ theme }) => theme.colors.surfaceElevated};
    }
  }
`;

export const RightSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  padding: 2.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 25px ${({ theme }) => theme.colors.accentGlow};
  }

  @media only screen and (max-width: 768px) {
    padding: 1.75rem;
  }
`;

export const IntroTag = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '//';
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const RoleTitle = styled.h2`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 2rem;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled(motion(Link))`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #0C0D0E;
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  box-shadow: 0 0 15px rgba(0, 220, 130, 0.25);

  &:hover {
    box-shadow: 0 0 25px rgba(0, 220, 130, 0.5);
    filter: brightness(1.05);
  }
`;

export const ActionLink = styled(motion(Link))`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.2s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      transform: translateX(4px);
    }
  }
`;