import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accentTint};
    color: ${({ theme }) => theme.colors.primary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.25s ease, color 0.25s ease;
    line-height: 1.6;
    font-size: 15px;
    letter-spacing: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  code, pre, kbd, samp {
    font-family: 'JetBrains Mono', monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  /* Surgical Hairline Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surfaceBase};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderHairline};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
