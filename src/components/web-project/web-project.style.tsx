import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
   width: 80%;
   // height: 80vh;
   margin: 0 auto;
   padding: 5rem;
   margin-top: 2rem;
   border-bottom: 1px solid #222;
   display: flex;
   flex-direction: column;
   row-gap: 3rem;
`

export const SubTopContainer = styled.div`
   display: flex;
   justify-content: center;
   // align-items: center;
   column-gap: 3rem;
   text-align: left;
`

export const SubBottomContainer = styled.div`

`

export const SubTopLeftContainer = styled.div`
   width: 25rem;
   display: flex;
   flex-direction: column;
`

export const SubTopRightContainer = styled.div`
   width: 35rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const Heading = styled.h3`
   font-size: 5rem;
   font-weight: 1000;
   text-align: left;
`

export const SubHeading = styled.h5`
   text-transform: uppercase;
   color: #acacac;
   padding: 1rem 0;
`

export const Description = styled.p`
   height: 100%;
   margin: auto 0;
   font-size: 1.8rem;
`

export const Button = styled(Link)`
   height: 100%;
`

export const Image = styled.img`
   height: 35rem;
   width: 60rem;
   object-fit: cover;
   border-radius: 2rem;
   border: 5px solid #222;
`