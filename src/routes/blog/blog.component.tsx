import {
  Container,
  Contents,
  Featured,
  FeaturedContents,
  FeaturedReadButton,
  FeaturedSummary,
  FeaturedTitle,
  BlogsHeading,
  HeadingContainer,
  SubHeading,
  SubTitile,
} from "./blog.style";
import { data } from "../../dev-data/blog";
import {
  Blog,
  BlogContentCon,
  BlogsContainer,
  BlogSummary,
  BlogThumnail,
  BlogTitle,
  ReadButton,
} from "../../components/featured-blogs/featured-blogs.style";
import Heading from "../../components/heading/heading.component";
import { useRandomNumber } from "../../hooks/randomNum";

const Blogs = () => {
  const randomId = useRandomNumber(30,data.length); // 30-day interval

  return (
    <Container>
      <Heading title="BLOGS" />
      <HeadingContainer>
        <SubTitile>The Blog</SubTitile>
        <BlogsHeading>Writings from me</BlogsHeading>
        <SubHeading>
          I write about anything and everything, but more specifically about
          mental stuff and programming. From discussing about how to stay
          productive, to discussing my approach to solving algorithms and
          sharing knowledge.
        </SubHeading>
      </HeadingContainer>
      <Contents>
        <Featured imageUrl={data[randomId].imgSrc}>
          <FeaturedContents>
            <FeaturedTitle>{data[randomId].title}</FeaturedTitle>
            <FeaturedSummary>{data[randomId].summary}</FeaturedSummary>
            <FeaturedReadButton to={data[randomId].link}>Read More</FeaturedReadButton>
          </FeaturedContents>
        </Featured>
        <BlogsContainer>
          {data.filter(el => el.id !== randomId).map((el) => (
               <Blog key={el.id}>
                 <BlogContentCon>
                   <BlogThumnail src={el.imgSrc} />
                   <BlogTitle>{el.title}</BlogTitle>
                   <BlogSummary>{el.summary}</BlogSummary>
                   <ReadButton to={el.link}>Read More</ReadButton>
                 </BlogContentCon>
               </Blog>
             )
          )}
        </BlogsContainer>
      </Contents>
    </Container>
  );
};

export default Blogs;
