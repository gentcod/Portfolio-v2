import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const ContactPageContainer = styled.div`
   height: 100vh;
   diaplay: flex;
   flex-direction: row;
   background-image: url("https://i.ibb.co/vV6rhNs/nature-green-blue.jpg");
   justify-items: center;
   align-items: center;
   padding: 2rem 6rem;
   margin-bottom: 2rem;
   position: relative;

  @media only screen and ${devices.tabLand} {
    height: auto;
    padding: 2rem;
  }

   @media only screen and ${devices.phone} {
     height: auto;
     padding: 2rem;
   }
`