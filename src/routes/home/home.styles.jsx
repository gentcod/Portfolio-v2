import styled from "styled-components";

export const HomeContainer = styled.div`
   padding: 2rem;
   background-color: #fff;
   height: 100vh;
`;

export const HomeContentContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-content: space-between;
   justify-content: space-between;
   height: 80%;
   width: 90%;
   margin: 0 auto;
   cursor: pointer;
`;

export const HomeIntro = styled.div`
   width: 100%;
   height: 100%;
   padding: 1rem;
   display: flex;
   flex-direction: column;
`;

export const Name = styled.h1`
   font-size: 2rem;
   text-align: left;
   font-weight: 500;
   letter-spacing: .5rem;
   margin-top: 10rem;
   margin-bottom: 1rem;

`

export const Title = styled.h2`
   font-size: 1.2rem;
   text-align: left;
   font-weight: 300;
   margin-bottom: 1rem;
`

export const Description = styled.p`
   font-size: 3.6rem;
   text-align: left;
   font-weight: 300;
   line-height: 1.5;
`

export const HomeImageContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 1rem;
`;

export const HomeImage = styled.img`
   width: auto;
   min-height: 100%;
`;

export const SocialsHeader = styled.h2`
   font-size: 1.4rem;
   color: #78877e;
   text-align: left;
   margin-top: 3rem;
`