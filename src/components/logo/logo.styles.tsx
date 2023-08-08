import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { devices } from '../../dev-data/media-queries';

export const LogoContainer = styled(Link)`
   flex: 2;
   align-self: flex-start;
   letter-spacing: 10%;
   text-transform: uppercase;
   text-decoration: none;
   color: $color-white;
   font-size: 1rem;
   max-width: 25rem;
   height: 8rem;

   @media only screen and ${devices.phone} {
      max-width: 10rem;
   }
`

export const LogoName = styled.div`
   padding: 1rem;
   font-family: 'Tapestry', cursive;
   font-weight: 700;
   max-width: 20rem;
   height: 3rem;
   text-align: center;
   margin: 0 auto;
   margin-bottom: 1rem;
`

export const LogoDescription = styled.div`
   display: inline-block;
   padding: 1rem;
   background-color: #1f252f;
   color: #eee;
   border-radius: 3px;
   font-family: 'Lato', sans-serif;
   font-size: .8rem;
   font-weight: 300;
`