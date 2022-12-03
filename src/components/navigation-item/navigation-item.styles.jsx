import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationItemContainer = styled(Link)`
   padding: 1rem;
   width: 100%;
`;

export const NavigationItemSpan = styled.span`
   font-size: 1rem;
   letter-spacing: .2rem;
   text-transform: uppercase;
`;

export const NavigationItemSpanActive = styled(NavigationItemSpan)`
   font-weight: 700;
`;