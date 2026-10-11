import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const FrameOuter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.borderHairline};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  padding: 2.5rem 2rem;

  @media only screen and ${devices.phone} {
    padding: 1.5rem 1rem;
  }
`;

export const CarourselHeader = styled.h3`
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 2rem;
  text-align: left;
`;

export const FramerInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;