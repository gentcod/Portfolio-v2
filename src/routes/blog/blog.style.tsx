import styled from "styled-components";
import {
   BlogSummary,
   BlogTitle,
   ReadButton,
} from "../../components/featured-blogs/featured-blogs.style";

type Props = {
   imageUrl: string;
}

const imageUrl = (prop: Props) => prop.imageUrl

export const Container = styled.div`
   min-height: 90vh;
   padding: 2rem 5rem;
   background-color: rgba(240, 239, 239, 0.2);
`;

export const HeadingContainer = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 1rem;
`;

export const BlogsHeading = styled.h2`
   font-size: 3.6rem;
   font-style: bold;
   font-weight: 1000;
   letter-spacing: 1px;
   word-spacing: 1rem;
   font-family: "Rubik Vinyl", serif;
`;

export const SubHeading = styled.p`
   width: 80%;
   font-size: 1.2rem;
   font-weight: 100;
   font-family: "Playwrite AU SA", serif;
`;

export const SubTitile = styled(SubHeading)`
   margin-top: 2rem;
   font-size: 1.6rem;
   font-weight: 500;
   font-family: "Rubik Iso", serif;
`;

export const Contents = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 1rem;
   align-items: center;
`;

export const Featured = styled.div`
   margin-top: 2rem;
   margin-bottom: 2rem;
   background-image: linear-gradient(rgba(225, 225, 225, 0.65),rgb(9, 20, 12)), 
      url(${imageUrl});
   background-position: center;
   background-size: cover;
   border-radius: 1rem;
   z-index: 20;
   width: 60%;
   height: 40rem;
   display: flex;
   flex-direction: column;
   row-gap: 2rem;
   align-items: center;
   justify-content: end;
   padding: 2rem;
   border-bottom: 3px solid #45a25a;
`;

export const FeaturedContents = styled(Contents)`
   align-items: start;
   width: 100%
`;

export const FeaturedTitle = styled(BlogTitle)`
   color: #fff;
`;

export const FeaturedSummary = styled(BlogSummary)`
   color: #fff;
`;


export const FeaturedReadButton = styled(ReadButton)`
   background-color: #333;
   margin-top: 0;
`;