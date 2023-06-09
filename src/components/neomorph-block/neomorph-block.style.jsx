import styled from "styled-components";

export const Block = styled.div`
   height: 6.5rem;
   width: 6rem;
   border-radius: 1rem;
   // background-color: #f7f5f7;
   box-shadow: -.5rem -.5rem 1rem rgba(255, 255, 255, 1), .6rem .6rem 1rem rgba(0, 0, 0, .2);
   position: absolute;
   top: 10%;
   right: 5%;
   z-index: 100;
`

export const BlockBig = styled(Block)`
   height: 8rem;
   width: 7.5rem;
   top: 88%;
   left: 5%;
`

export const BlockSmall = styled(Block)`
   height: 5rem;
   width: 4.5rem;
   top: 86%;
   left: 80%;
`