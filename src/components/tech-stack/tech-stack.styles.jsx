import styled from "styled-components";

export const BoxContainer = styled.div`
   display: inline-block;
   width: max-content;
   height: ${props => props.sizeH}rem;
   text-align: center;
`

export const Box = styled.div`
   display: inline-block;
   width: 100%;
   height: 100%;
   background-color: ${props => props.backgroundColor};
   border-radius: 1rem;
   padding: 2.5rem;
   margin: 0 auto;

   box-shadow: 0 .5rem rgba(0,0,0,.3);
`

export const BoxText = styled.p`
   font-size: 1.2rem;
   font-weight: 700;
   color: ${props => props.textColor};;
`