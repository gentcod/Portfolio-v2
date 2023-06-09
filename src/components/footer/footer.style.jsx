import styled from 'styled-components';

export const FooterContainer = styled.div`
   width: 100%
   height: 30rem;
   padding: 5rem;
   background-color: #0d1e11;
   margin-top: 2rem;

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
   border-radius: 50%;
   object-fit: cover;
`

export const FooterLower = styled.div`

`