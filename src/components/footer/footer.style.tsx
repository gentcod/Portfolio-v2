import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
   width: 100%
   height: 30rem;
   padding: 2rem 5rem;
   background-color: #0d1e11;

   display: flex;
   flex-direction: column;
   row-gap: 2rem;
`

export const FooterUpper = styled.div`
   padding: 1rem 3rem;
   align: center;
   display: flex;
   flex-direction: column;
   row-gap: 2rem;
   align-contents: center;
`

export const FooterImageLineContainer = styled.div`
   height: 12rem;
   position: relative;
`

export const FooterImageLine = styled.hr`
   color: #45a25a;
   width: 80%;
   z-index: 1;

   position: absolute;
   left: 50%;
   top: 50%;

   transform: translate(-50%, -50%)
`

export const FooterImageContainer = styled.div`
   height: 12rem;
   width: 12rem;
   border-radius: 50%;
   background-color: #0d1e11;
   margin: 0 auto;
   z-index: 5;

   position: absolute;
   left: 50%;
   top: 50%;

   transform: translate(-50%, -50%)
`

export const FooterImage = styled.img`
   display: inline-block;
   width: 80%;
   height: 80%;
   margin: auto 0;
   margin-top: 1rem;
   border-radius: 50%;
   object-fit: cover;
`

export const FooterLower = styled.div`
   padding: 1rem 15rem;
   color: white;

   display: flex;
   justify-content: space-evenly;
`

export const FooterSocialsContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const FooterSocialsHeader = styled.h5`
   text-align: left;
   margin-left: 5rem;
   margin-bottom: 1rem;
`;

export const FooterSocials = styled.div`
   width: 30rem;
   padding: 1rem;

   display: flex;
   justify-content: center;
   column-gap: 2rem;
`;

export const SocialLinks = styled(Link)`
   padding: .5rem 1rem;
   border-radius: 5px;
   transition: all .6s ease;

   &:hover {
      background-color: rgba(255, 255, 255, .6);
      backdrop-filter: blur(3px);
   }
`;

export const FooterLowerMid = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
`;

export const LegacyHeading = styled.h5`
   margin-bottom: 1rem;
`;

export const LegacyPortfolio = styled(Link)`
   font-size: 1rem;
   color: white;

   &:hover {
      border-bottom: 1px solid white;
   }
`;

export const SocialIcon = styled.img`
   height: 2rem;
`;

export const FooterCopyright = styled.div`
   font-size: 1.2rem;
`;
   
export const CopyRight = styled.p`
   padding: 1rem;
   border-bottom: 1px solid white;
`;