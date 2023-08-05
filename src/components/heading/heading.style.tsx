import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const FeaturedHeader = styled.h2`
   color: #222;
   text-transform: uppercase;
   text-align: left;
   font-weight: 100;
   font-size: 1.4rem;
   letter-spacing: .3rem;
   margin: 0 0 3rem 10rem;

   @media only screen and ${devices.phone} {
      margin: 0 0 3rem 3rem;
   }
`;