import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";
import { ScrollUp } from "../home/home.styles";


export const ContactPageContainer = styled.div`
   height: fit-content;
   diaplay: flex;
   flex-direction: row;
   background-image: url("https://i.ibb.co/vV6rhNs/nature-green-blue.jpg");
   justify-items: center;
   align-items: center;
   padding: 2rem 6rem;
   margin-bottom: 2rem;
   position: relative;
   animation: ${ScrollUp} 1.5s ease;

  @media only screen and ${devices.tabLand} {
    height: auto;
    padding: 2rem;
  }

   @media only screen and ${devices.phone} {
     height: auto;
     padding: 2rem;
   }
`