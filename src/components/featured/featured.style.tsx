import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
   height: 40rem;
   padding: 2rem 5rem;
   background-color: #f7fcf8;
   margin-top: 2rem;

   display: flex;
   column-gap: 3rem;
   justify-content: center;
`;

export const ImageSkewContainer = styled(Link)`
   height: 35rem;
   width: 30rem;
   border-radius: 1rem;
   overflow: hidden;
   transform: skewX(-15deg);
   transition: all .3s ease;

   &:hover {
      outline: 3px solid #45a25a;
   }
`;

export const FeaturedImage = styled.img`
   object-fit: cover;
   height: 40rem;
   width: 40rem;
   backface-visibility: hidden;
`;