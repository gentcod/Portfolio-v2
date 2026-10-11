import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled(motion.footer)`
  width: 100%;
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  border-top: 1px solid ${({ theme }) => theme.colors.borderHairline};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 3rem 1.25rem 2rem 1.25rem;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
  width: 100%;
  max-width: 800px;
`;

export const FooterImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  padding: 2px;
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderActive};
  margin-bottom: 1.75rem;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 120px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.borderHairline};
  }

  &::before { right: 100%; }
  &::after { left: 100%; }

  @media only screen and (max-width: 768px) {
    &::before, &::after {
      width: 40px;
    }
  }
`;

export const FooterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  object-fit: cover;
  display: block;
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderHairline};

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:nth-child(2) {
    align-items: center;
  }

  &:nth-child(3) {
    align-items: flex-end;
  }

  @media only screen and (max-width: 900px) {
    align-items: center !important;
  }
`;

export const ColumnHeading = styled.h4`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

export const SocialsRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  transition: all 0.2s ease;
  font-size: 1.1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.borderActive};
  }
`;

export const FooterLink = styled(Link)`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Copyright = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.02em;

  span.accent {
    color: ${({ theme }) => theme.colors.primary};
  }
`;