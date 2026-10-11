import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
  }

  @media only screen and ${devices.tabLand} {
    padding: 1.5rem;
  }
`;

export const SubTopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: flex-start;

  @media only screen and ${devices.phone} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SubBottomContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
`;

export const SubTopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SubTopRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Heading = styled.h3`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;

  @media only screen and ${devices.phone} {
    font-size: 22px;
  }
`;

export const SubHeading = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.secondary};

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const Description = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProjectLink = styled(Link)`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  padding: 8px 16px;
  border-radius: 4px;
  width: fit-content;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.25s ease;

  svg {
    transition: transform 0.2s ease;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surfaceElevated};

    svg {
      transform: translateX(4px);
    }
  }
`;

export const Image = styled.img`
  height: 22rem;
  width: 100%;
  object-fit: cover;
  display: block;

  @media only screen and ${devices.tabLand} {
    height: 16rem;
  }
`;