import styled from "styled-components";

export const SliderContainer = styled.div`
   height: 100%;
   display: grid;
   grid-template-rows: 30rem;
   grid-auto-flow: column;
   grip-gap: 2.5rem;
   column-gap: 3rem;
   overflow: auto;
   scroll-snap-type: x mandatory;
`

export const SliderImage = styled.img`
   width: 40rem;
   height: 35rem;
   margin: auto 0;
   scroll-snap-align: center;
`