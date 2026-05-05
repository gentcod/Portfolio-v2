import styled from 'styled-components';
import { devices } from '../../dev-data/media-queries';

export const FormContainer = styled.form`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   row-gap: 1.5rem;
   margin-top: 1rem;

   background-color: rgba(128, 128, 128, 0.05);
   backdrop-filter: blur(10px);
   padding: 3rem;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: 1.5rem;

   transition: all .8s ease;

   @media only screen and ${devices.tabLand} {
      margin-top: 1rem;
    }

   @media only screen and ${devices.phone} {
     width: 100%;
     padding: 2rem;
   }
`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const FormLabel = styled.label`
   text-align: left;
   text-transform: capitalize;
   margin-bottom: 0.5rem;
   color: ${({ theme }) => theme.colors.textPrimary};
   font-size: 1rem;
   font-weight: 500;
`

export const FormInput = styled.input`
   width: 100%;
   height: 3.5rem;
   color: ${({ theme }) => theme.colors.textPrimary};
   border-radius: 0.8rem;
   border: 1px solid ${({ theme }) => theme.colors.border};
   background-color: ${({ theme }) => theme.colors.background};
   outline: none;
   padding: 1rem;
   transition: all .3s ease;

   &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}40;
   }
`

export const FormMessage = styled.textarea`
   width: 100%;
   min-height: 8rem;
   color: ${({ theme }) => theme.colors.textPrimary};
   border-radius: 0.8rem;
   border: 1px solid ${({ theme }) => theme.colors.border};
   background-color: ${({ theme }) => theme.colors.background};
   outline: none;
   padding: 1rem;
   transition: all .3s ease;
   resize: vertical;

   &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}40;
   }
`;

export const Heading = styled.p`
   font-size: 2.5rem;
   color: ${({ theme }) => theme.colors.textPrimary};
   font-weight: 800;
   text-align: left;
`

export const SubHeading = styled(Heading)`
   font-size: 1.2rem;
   font-weight: 400;
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: 1rem;
`

export const Button = styled.button`
   width: 100%;
   border-radius: 2rem;
   background-color: ${({ theme }) => theme.colors.accent};
   color: ${({ theme }) => theme.colors.background};
   padding: 1.2rem;
   border: none;
   font-size: 1.1rem;
   font-weight: 700;
   transition: all .3s ease;
   margin-top: 1rem;
   cursor: pointer;

   &:hover {
      transform: translateY(-2px);
      background-color: ${({ theme }) => theme.colors.secondaryAccent};
      color: #0d1e11;
   }

   &:active {
      transform: translateY(0);
   }
`