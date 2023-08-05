import styled from 'styled-components';

type Props = {
   bgColor?: string;
   borderColor?: string;
   color?: string;
}

const bgCol = (prop: Props) => prop.bgColor
const borderCol = (prop: Props) => prop.borderColor
const color = (prop: Props) => prop.color

export const ButtonContainer = styled.div`
   display: inline-block;
`

export const ButtonBody = styled.a`
   padding: 1rem 2.5rem;
   background-color: ${bgCol};
   color: ${color};
   font-weight: 700;
   border: 1px solid ${borderCol};
   border-radius: .5rem;
   cursor: pointer;
   transition: all .8s ease;

   &:hover {
      transform: translateY(-1rem) scale(1.05);
      background-color: ${borderCol};
      border: 1px solid white;
   }

   &:active {
      transform: translateY(1rem);
   }
`