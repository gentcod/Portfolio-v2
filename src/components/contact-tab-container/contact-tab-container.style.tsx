import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const Container = styled.div`
   width: 100%;
   margin-top: 1rem;
   display: flex;
   flex-direction: row;
   column-gap: 2rem;
   backface-visibility: hidden;

   @media only screen and ${devices.tabPort} {
      flex: 1 1 1;
      row-gap: 2rem;
      flex-wrap: wrap;
   }
`