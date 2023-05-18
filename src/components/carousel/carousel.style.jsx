import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
`

export const FrameOuter = styled.div`
   width: 100vw;
   height: 65rem;
   background-color: #000;
   margin: auto;
   overflow: hidden;
   position: relative;

`

export const FramerInner = styled.div`
   display: inline-block;
   width: 100%;
   height: 50rem;
   background-color: white;
   margin: 0 auto; 


   position: absolute;
   transform: translate(-50%, -50%);
   top: 50%;
   left: 50%;
`

export const OvalTop = styled.div`
   display: inline-block;
   width: 100%;
   height: 17rem;
   background-color: #000;
   border-radius: 50%;
   z-index: 10;

   position: absolute;
   top: -2rem;
   left: 0;
`

export const OvalBottom = styled(OvalTop)`
   top: 50rem;
`