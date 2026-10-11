import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  padding: 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
  }

  @media only screen and (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormLabel = styled.label`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2.75rem;
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  outline: none;
  padding: 0 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const FormMessage = styled.textarea`
  width: 100%;
  min-height: 7rem;
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  background-color: ${({ theme }) => theme.colors.surfaceBase};
  outline: none;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease;
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

export const Heading = styled.h3`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const SubHeading = styled.p`
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  line-height: 20px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #0C0D0E;
  padding: 10px 20px;
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: none;
  transition: all 0.25s ease;
  margin-top: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 220, 130, 0.25);

  &:hover {
    box-shadow: 0 0 25px rgba(0, 220, 130, 0.5);
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.99);
  }
`;