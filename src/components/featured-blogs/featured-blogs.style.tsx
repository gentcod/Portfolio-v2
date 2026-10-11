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

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.borderHairline};
  margin-top: 1rem;
`;

export const ArticleRow = styled(motion.a)`
  display: grid;
  grid-template-columns: 180px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
  text-decoration: none;
  background-color: transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1.5rem 0.75rem;
  }
`;

export const MetadataGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const DateBadge = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const FeaturedTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0, 220, 130, 0.08);
  border: 1px solid rgba(0, 220, 130, 0.25);
  padding: 2px 6px;
  border-radius: 4px;
`;

export const ArticleHeadline = styled.h3`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.2s ease;

  ${ArticleRow}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const MetaAndAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const ReadTimeTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textTertiary};
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  background-color: ${({ theme }) => theme.colors.surfaceBase};
`;

export const ReadMoreLink = styled.span`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  transition: color 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  ${ArticleRow}:hover & {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      transform: translateX(4px);
    }
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
