import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const EyebrowTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '//';
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const FeaturedHeader = styled.h2`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 36px;
  text-align: left;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
  }
`;