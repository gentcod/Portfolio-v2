import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../dev-data/media-queries';

export const Container = styled.div`
   padding: 3rem 5rem;
   background-color: #f7fcf8;
   margin-top: 2rem;
   border-top: 1px solid #45a25a;
   border-bottom: 1px solid #45a25a;
   
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
   justify-content: center;
`;

export const FeaturedImageOverLay = styled.div`
   background-color: rgba(0,0,0, .6);
   backdrop-filter: blur(3px);
   width: 100%;
   height: 12rem;
   position: absolute;
   bottom: -12rem;
   transition: all 1s ease;

   display: flex;
   justify-content: center;
   align-items: center;

   @media only screen and ${devices.phone} {
      height: 5rem;
      bottom: 0;
   }
`;

export const FeaturedTitle = styled.p`
   display: inline-block;
   font-size: 1.4rem;
   color: #fff;
   padding: 1rem;
   border-bottom: 2px solid #45a25a;
   font-weight: 1000;
   z-index: 5;

   @media only screen and ${devices.phone} {
      font-size: 1.2rem;
   }
`;
   
export const ImageSkewContainer = styled(Link)`
   height: 15rem;
   width: 70%;
   margin: 0 auto;
   border-radius: 1rem;
   backface-visibility: hidden;
   overflow: hidden;
   position: relative;
   transform: skewX(-15deg);
   transition: .8s all ease;

   &:hover {
      transform: scale(1.05);
      height: 35rem;
      border-bottom: 2px solid #45a25a;
   }

   &:hover ${FeaturedImageOverLay} {
      bottom: 0;
   }
`;

export const FeaturedImage = styled.img`
   object-fit: cover;
   height: 100%;
   width: 100%;
   backface-visibility: hidden;
`;

export const ExploreOverlay = styled.div`
   background-color: white;
   height: 3px;
   width: 15rem;
   position: absolute;
   bottom: 0;
   left: -15rem;
   transition: .8s all ease;
`;

export const EXploreButtonLabel = styled.span`
   font-size: 1.2rem;
   font-weight: 500;
   text-transform: uppercase;
   transition: 1.2s all ease;
`;

export const ExploreButton = styled(Link)`
   height: 4rem;
   width: 15rem;
   margin: 0 auto;
   padding: 1rem;
   border-radius: 5px;
   border-bottom: 3px solid #45a25a;
   overflow: hidden;
   position: relative;
   transition: .8s all ease;

   &:hover ${ExploreOverlay}{
      left: 0;
   }

   &:hover ${EXploreButtonLabel}{
      transform: skewX(45deg);
      color: white;
      font-size: 1.4rem;
   }

   &:hover {
      border-bottom: 3px solid transparent;
      background-color: #45a25a;
   }
`;



