import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.25rem;
    row-gap: 3.5rem;
  }
`;

export const AboutStack = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AboutHeading = styled.h1`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};

  span.accent {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const AboutSummary = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 28px;
`;