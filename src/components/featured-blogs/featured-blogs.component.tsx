import { useState } from "react";
import Heading from "../heading/heading.component";
import {
  Blog,
  BlogContentCon,
  BlogSummary,
  BlogThumnail,
  BlogTitle,
  BlogsContainer,
  Container,
  EXploreButtonLabel,
  ExploreButton,
  ExploreOverlay,
  ReadButton,
} from "./featured-blogs.style";
import { data } from "../../dev-data/blog";

const FeaturedBlogs = () => {
  const [inview, setInView] = useState(false);

  const handlerInView = () => {
    setInView(true);
  };

  const featured = data.slice(0, 3);

  return (
    <Container onScroll={() => handlerInView()} inview={inview}>
      <Heading title="Blogs and Articles" />
      <BlogsContainer>
        {featured.map((el) => (
          <Blog key={el.id}>
            <BlogContentCon>
              <BlogThumnail src={el.imgSrc} />
              <BlogTitle>{el.title}</BlogTitle>
              <BlogSummary>{el.summary}</BlogSummary>
              <ReadButton to={el.link}>Read More</ReadButton>
            </BlogContentCon>
          </Blog>
        ))}
        <ExploreButton to={"blogs"}>
          <ExploreOverlay />
          <EXploreButtonLabel>View More</EXploreButtonLabel>
        </ExploreButton>
      </BlogsContainer>
    </Container>
  );
};

export default FeaturedBlogs;
