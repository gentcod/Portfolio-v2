import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { devices } from '../../dev-data/media-queries';

export const LogoContainer = styled(Link)`
   flex: 2;
   align-self: flex-start;
   letter-spacing: 10%;
   text-transform: uppercase;
   text-decoration: none;
   color: #fff;
   font-size: 1rem;
   max-width: 25rem;
   height: 8rem;
   border: 1px solid rgba(225,225,225,.5);
   border-radius: 1rem;
   transition: .5s ease;

   &:hover {
      transform: scale(1.02);
   }

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
   margin: auto;
   margin-bottom: 1rem;
   padding-bottom: 2rem;
   border-bottom: 1px solid #fff;
`

export const LogoDescription = styled.div`
   display: inline-block;
   padding: 1rem;
   background-color: #1f252f;
   color: #fff;
   border-radius: 3px;
   font-family: 'Lato', sans-serif;
   font-size: .8rem;
   font-weight: 300;
`