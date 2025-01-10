import styled from "styled-components";
import { devices } from "../../dev-data/media-queries";

export const Tab = styled.a`
   width: 10rem;
   display: flex;
   padding: 1rem 1rem;
   background-color: rgba(247, 252, 248, 0.2);;
   border-radius: 1rem;
   border-bottom: 3px solid #45a25a;
   transition: all .8s ease;

   box-shadow: .5rem .5rem 1rem rgba(0,0,0, .2);

   &:hover {
      transform: translateY(-1rem) scale(1.05);
   }

   &:active {
      transform: translateY(1rem);
   }

   @media only screen and ${devices.tabPort} {
      flex: 0 0 25%;
      margin: 0 auto;
   }
`

export const TabLogo = styled.img`
   width: 2rem;
   margin-right: .5rem;
`

export const TabText = styled.p`
   font-size: 1.2rem;
   font-weight: 700;
   color: #fff;
   margin-top: .3rem;
`