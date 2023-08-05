import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const BoxesContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, auto);
   grid-column-gap: 1.5rem;
   grid-row-gap: 1rem;
   justify-items: center;
   justify-content: center;
   align-items: center;
   align-content: center;
   position: relative;
   width: 100%;

   @media only screen and ${devices.phone} {
      grid-row-gap: 1.5rem;
      justify-content: space-evenly;
      padding: 5rem 0;
   }
`
