import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../dev-data/media-queries';

type FeatureProps = {
   inview: boolean;
}

export const Reveal = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`

export const reveal = css`
   animation: ${Reveal} 1.5s ease;
`

export const Container = styled.div<FeatureProps>`
   padding: 3rem 5rem;
   background-color: #f7fcf8;
   margin-top: 2rem;
   border-top: 1px solid #45a25a;
   border-bottom: 1px solid #45a25a;
   
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
   justify-content: center;
   ${({inview}) => inview && reveal}
`;

export const BlogsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   row-gap: 2rem;
   column-gap: 2rem;
`;
   
export const Blog = styled.div`
   height: 28rem;
   margin: 0 auto;
   border-radius: 1rem;
   backface-visibility: hidden;
   overflow: hidden;
   position: relative;
   transition: .8s all ease;
   flex: 0 0 30%;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);

   &:hover {

   }

   @media only screen and ${devices.tabPort} {
      transform: skewX(0);

      &:hover {
         height: 15rem;
         border: 2px solid #45a25a;
      }
   }
`;

export const BlogContentCon = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding-bottom: 1rem;
`;

export const BlogThumnail = styled.img`
   object-fit: cover;
   height: 50%;
   weight: 100%;
   backface-visibility: hidden;

   @media only screen and ${devices.tabPort} {
      height: 15rem;
   }
`;

export const BlogTitle = styled.p`
   display: inline-block;
   font-size: 1.4rem;
   text-align: left;
   color: #000;
   padding: .5rem;
   border-bottom: 1px solid rgba(69, 162, 91, 0.2);;
   font-weight: 1000;
   z-index: 5;

   @media only screen and ${devices.tabPort} {
      font-size: 1.2rem;
   }
`;

export const BlogSummary = styled.p`
   height: 6rem;
   display: inline-block;
   font-size: 1.2rem;
   text-align: left;
   color: #8f8f8f;
   padding: .5rem;
   font-weight: 300;
   z-index: 5;
   overflow: hidden;

   @media only screen and ${devices.tabPort} {
      font-size: 1rem;
   }
`;

export const ReadButton = styled(Link)`
   color: #45a25a;
   height: 2rem;
   font-size: 1.2rem;
   width: 8rem;
   border: none;
   border-radius: .8rem;
   background-color: transparent;
   margin-top: 1rem;
   margin-left: .5rem;
   border-bottom: 1px solid transparent;
   transition: .8s all ease;

   &:hover {
      border-bottom: 1px solid #45a25a;
   }
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

