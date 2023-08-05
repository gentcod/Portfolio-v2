import styled from 'styled-components';
import { devices } from '../../dev-data/media-queries';

export const NavigationContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 1rem 5rem;
   margin-bottom: 5rem;

   @media only screen and ${devices.phone} {
      margin-bottom: 1rem;
   }
`;

export const NavigationLinks = styled.div`
   display: flex;
   flex-direction: row;
   padding: 1rem;
   gap: 2rem;
   margin: auto 0;
`