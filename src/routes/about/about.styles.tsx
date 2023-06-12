import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
`

export const AboutStack = styled.div`
   display: flex;
   padding: 5rem 3rem;
   background-color: #f7fcf8;
`

export const AboutContent = styled.div`
   width: 80%;
   padding: 2rem 5rem;
   text-align: left;
`

export const AboutHeading = styled.h1`
   font-size: 5rem;
   font-weight: 1000;
   letter-spacing: .3rem;
   margin-bottom: 2rem;
`

export const AboutSummary = styled.p`
   color: #666;
   font-size: 1.8rem;
   font-weight: 300;
   word-spacing: 1rem;
   line-height: 1.5;
   padding-bottom: 3rem;
   border-radius: 1rem;
   border-bottom: 2px solid #45a25a;
`