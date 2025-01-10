import styled from "styled-components";
import {Container} from '../featured-blogs/featured-blogs.style'
import { Link } from "react-router-dom";

export const ProjectsContainer = styled(Container)`
   background-color:rgba(247, 252, 248, 0.1);
`;

export const ContentsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 3rem;
`;

export const ContentsBlock = styled(Link)`
   height: 18rem;
   width: 40%;
   color: #fff;
   background-color: #222;
   border: 1px solid #333;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: end;
   padding: 1rem 3rem;
   row-gap: 1rem;
   cursor: pointer;
   transition: .8s ease;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .4);

   &:hover {
      background-color:rgba(2, 2, 2, 0.3);
      transform: scale(1.1);
   }
`;

export const TagsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: start;
   column-gap: 1rem;
   padding: .5rem 1rem;
`;

export const TagsHeading = styled.p`
   color: #111;
   text-transform: uppercase;
   text-align: left;
   font-weight: 1000;
   font-size: 1.2rem;
   letter-spacing: .3rem;
`;

export const StackContainer = styled(TagsContainer)`

`;

export const StackHeading = styled(TagsHeading)`

`;

export const Tag = styled.p`
   border: 1px solid #fff;
   font-size: 1rem;
   padding: 1px .5rem;
   border-radius: .8rem;
`;

export const StackTag = styled(Tag)`

`;

export const ProjectName = styled(TagsHeading)`
   text-transform: none;
   font-size: 2rem;
   color: #fff;
`;

export const Description = styled.p`
   font-size: 1.2rem;
   text-align: left;
`;