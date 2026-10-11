import styled from "styled-components";
import { motion } from "framer-motion";

export const ExploreContainer = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2.5rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.25rem;
  }
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

export const ExploreHeading = styled.h1`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.75rem;

  span.accent {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const ExploreSubheading = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 26px;
  margin-bottom: 5rem;
  margin: 0 auto;
  max-width: 700px;
`;