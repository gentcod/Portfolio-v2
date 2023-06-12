import styled from "styled-components";

type Props = {
   sizeW?: number;
   sizeH?: number;
   backgroundColor?: string;
   imgSrc?: string;
   textColor?: string;
}

const width = (props: Props) => props.sizeW;
const height = (props: Props) => props.sizeH;
const bgColor = (props: Props) => props.backgroundColor;
const image = (props: Props) => props.imgSrc;
const color = (props: Props) => props.textColor;

export const BoxContainer = styled.div`
   display: inline-block;
   width: ${width};
   height: ${height}rem;
   text-align: center;
`

export const Box = styled.div`
   position: relative;
   display: inline-block;
   width: 100%;
   height: 100%;
   background-color: ${bgColor};
   background-image: url(${image});
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 1rem;
   border: 1px solid #eee;
   padding: 4rem;
   margin: 0 auto;
   cursor: pointer;

   box-shadow: .5rem .5rem 1rem rgba(0,0,0, .5), -.2rem -.3rem 1rem rgba(255,255,255, .7);
   transition: all 1s ease;
   backface-visibility: hidden;

   &:hover {
      transform: scale(1.2);
   }
`

export const BoxText = styled.p`
   position: absolute;
   font-size: 1.1rem;
   font-weight: 900;
   color: ${color};
   text-align: center;
   z-index: 10;

   transform: translate(-50%, -50%);
   top: 85%;
   left: 50%;
`