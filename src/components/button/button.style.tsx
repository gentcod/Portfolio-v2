import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: inline-block;
`;

export const ButtonBody = styled.a<{ primary?: boolean }>`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #0C0D0E;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
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