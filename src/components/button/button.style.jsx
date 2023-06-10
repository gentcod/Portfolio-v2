import styled from 'styled-components';

export const ButtonContainer = styled.div`
   display: inline-block;
`

export const ButtonBody = styled.button`
   padding: 1rem 2.5rem;
   background-color: ${prop => prop.bgColor};
   color: ${prop => prop.color};
   font-weight: 700;
   border: 1px solid ${prop => prop.borderColor};
   border-radius: .5rem;
   cursor: pointer;
   transition: all .8s ease;

   &:hover {
      transform: translateY(-1rem) scale(1.05);
   }

   &:active {
      transform: translateY(1rem);
   }
`