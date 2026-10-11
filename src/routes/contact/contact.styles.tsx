import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactPageContainer = styled(motion.div)`
  padding: 4rem 2.5rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  align-items: flex-start;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactEyebrow = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const ContactHeading = styled.h1`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;

  span.accent {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const ContactText = styled.p`
  font-family: 'Hanken Groken', 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 24px;
  margin-bottom: 2rem;
  text-align: left;
`;

export const EmailLink = styled.a`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  width: fit-content;
  transition: all 0.25s ease;

  svg {
    transition: transform 0.25s ease;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accentGlow};

    svg {
      transform: translateX(4px);
    }
  }
`;

export const ContactRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;