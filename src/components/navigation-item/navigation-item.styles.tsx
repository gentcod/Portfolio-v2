import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationItemContainer = styled(Link)`
   padding: 1rem;
   width: 100%;
   font-weight: 700;

   &:hover {
      background-color: #45a25a;
      border-radius: 1rem;
      color: white;
   }
`;

export const NavigationItemSpan = styled.span`
   font-size: 1rem;
   letter-spacing: .2rem;
   text-transform: uppercase;
   margin: auto 0;
`;

export const NavigationItemSpanActive = styled(NavigationItemSpan)`
   font-weight: 700;
`;

export const NavigationItemContainerActive = styled(NavigationItemContainer)`
   border-bottom: 3px solid #45a25a;
   border-radius: 1rem;
`