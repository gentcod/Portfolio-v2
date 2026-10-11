import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 80vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2.5rem;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
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

export const BlogsHeading = styled.h1`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;

  span.accent {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const SubHeading = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 26px;
  max-width: 750px;
`;

export const FeaturedArticleCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  margin-bottom: 4rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.accentGlow};
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedImagePane = styled.div`
  min-height: 280px;
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  border-right: 1px solid ${({ theme }) => theme.colors.borderHairline};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  ${FeaturedArticleCard}:hover img {
    transform: scale(1.03);
  }

  @media only screen and (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
  }
`;

export const FeaturedContentPane = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 1.75rem;
  }
`;

export const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0, 220, 130, 0.08);
  border: 1px solid rgba(0, 220, 130, 0.25);
  padding: 2px 8px;
  border-radius: 4px;
`;

export const DateSpan = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const FeaturedTitle = styled.h2`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

export const FeaturedSummary = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 24px;
  margin-bottom: 1.75rem;
`;

export const ActionButton = styled.a`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #0C0D0E;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  transition: all 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    box-shadow: 0 0 15px rgba(0, 220, 130, 0.4);
    filter: brightness(1.05);

    svg {
      transform: translateX(3px);
    }
  }
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accentGlow};
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderHairline};
`;

export const ArticleContent = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ArticleTitle = styled.h3`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.75rem;
  transition: color 0.2s ease;

  ${ArticleCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ArticleSummary = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 22px;
  margin-bottom: 1.5rem;
  flex: 1;
`;

export const ArticleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.borderHairline};
  padding-top: 1rem;
  margin-top: auto;
`;

export const ReadMore = styled.span`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    transition: transform 0.2s ease;
  }

  ${ArticleCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      transform: translateX(4px);
    }
  }
`;