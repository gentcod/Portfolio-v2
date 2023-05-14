import styled from "styled-components";

export const Tab = styled.a`
   display: flex;
   padding: 1rem 1.8rem;
   background-color: transparent;
   border-radius: 1rem;
   border-bottom: 3px solid #45a25a;
   transition: all .8s ease;

   box-shadow: .5rem .5rem 1rem rgba(0,0,0, .2);

   &:hover {
      transform: translateY(-1rem) scale(1.05);
   }

   &:active {
      transform: translateY(1rem);
   }
`

export const TabLogo = styled.img`
   width: 2rem;
   margin-right: .5rem;
`

export const TabText = styled.p`
   font-size: 1.2rem;
   font-weight: 700;
   color: #222;
   margin-top: .3rem;
`