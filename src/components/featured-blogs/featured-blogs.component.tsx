import { FiArrowRight } from "react-icons/fi";
import Heading from "../heading/heading.component";
import {
  Blog,
  BlogContentCon,
  BlogSummary,
  BlogThumnail,
  BlogTitle,
  BlogsContainer,
  Container,
  ExploreButtonContainer,
  ExploreButton,
  ReadButton,
} from "./featured-blogs.style";
import { data } from "../../dev-data/blog";

const FeaturedBlogs = () => {
  const featured = data.slice(0, 3);

  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Heading title="Blogs and Articles" />
      <BlogsContainer>
        {featured.map((el, index) => (
          <Blog 
            key={el.id}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogThumnail src={el.imgSrc} alt={el.title} />
            <BlogContentCon>
              <BlogTitle>{el.title}</BlogTitle>
              <BlogSummary>{el.summary}</BlogSummary>
              <ReadButton href={el.link} target="_blank" rel="noreferrer">
                Read More <FiArrowRight />
              </ReadButton>
            </BlogContentCon>
          </Blog>
        ))}
      </BlogsContainer>
      <ExploreButtonContainer>
         <ExploreButton to={"/blogs"}>
           View All Articles
         </ExploreButton>
      </ExploreButtonContainer>
    </Container>
  );
};

export default FeaturedBlogs;
