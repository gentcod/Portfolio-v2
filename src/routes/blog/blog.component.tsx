import { FiArrowRight } from "react-icons/fi";
import {
  Container,
  HeadingContainer,
  Eyebrow,
  BlogsHeading,
  SubHeading,
  FeaturedArticleCard,
  FeaturedImagePane,
  FeaturedContentPane,
  TagRow,
  Tag,
  DateSpan,
  FeaturedTitle,
  FeaturedSummary,
  ActionButton,
  ArticlesGrid,
  ArticleCard,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleSummary,
  ArticleFooter,
  ReadMore,
} from "./blog.style";
import { data } from "../../dev-data/blog";

const Blogs = () => {
  const featured = data[0]; // "The Architecture of Equilibrium"
  const others = data.slice(1);

  return (
    <Container>
      <HeadingContainer>
        <Eyebrow>PUBLICATIONS & ARCHIVES</Eyebrow>
        <BlogsHeading>Articles & Technical Writing<span className="accent">.</span></BlogsHeading>
        <SubHeading>
          Writings on distributed systems architecture, engineering efficiency, algorithms, and modern software design philosophies.
        </SubHeading>
      </HeadingContainer>

      {/* Flagship Featured Article */}
      <FeaturedArticleCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FeaturedImagePane>
          <img src={featured.imgSrc} alt={featured.title} />
        </FeaturedImagePane>
        <FeaturedContentPane>
          <TagRow>
            <Tag>{featured.tag}</Tag>
            <DateSpan>JUL 2026 · 5 MIN READ</DateSpan>
          </TagRow>
          <FeaturedTitle>{featured.title}</FeaturedTitle>
          <FeaturedSummary>{featured.summary}</FeaturedSummary>
          <ActionButton href={featured.link} target="_blank" rel="noreferrer">
            Read on Substack <FiArrowRight />
          </ActionButton>
        </FeaturedContentPane>
      </FeaturedArticleCard>

      {/* Articles Grid */}
      <ArticlesGrid>
        {others.map((el, index) => (
          <ArticleCard 
            key={el.id} 
            href={el.link} 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <ArticleImage src={el.imgSrc} alt={el.title} loading="lazy" />
            <ArticleContent>
              <ArticleTitle>{el.title}</ArticleTitle>
              <ArticleSummary>{el.summary}</ArticleSummary>
              <ArticleFooter>
                <Tag>{el.tag}</Tag>
                <ReadMore>
                  Read More <FiArrowRight />
                </ReadMore>
              </ArticleFooter>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </Container>
  );
};

export default Blogs;
