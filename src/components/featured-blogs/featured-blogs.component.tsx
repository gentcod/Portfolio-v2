import { FiArrowRight } from "react-icons/fi";
import Heading from "../heading/heading.component";
import {
  Container,
  ArticlesList,
  ArticleRow,
  MetadataGroup,
  DateBadge,
  FeaturedTag,
  ArticleHeadline,
  MetaAndAction,
  ReadTimeTag,
  ReadMoreLink,
  ExploreButtonContainer,
  IndexLink
} from "./featured-blogs.style";
import { data } from "../../dev-data/blog";

type ArticleMeta = {
  date: string;
  readTime: string;
};

// Map article metadata
const metaMap: Record<number, ArticleMeta> = {
  0: { date: 'JUL 2026', readTime: '5 min read' },
  1: { date: 'OCT 2024', readTime: '4 min read' },
  2: { date: 'NOV 2024', readTime: '5 min read' },
  3: { date: 'JAN 2025', readTime: '6 min read' },
};

const FeaturedBlogs = () => {
  const featured = data.slice(0, 4);

  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Heading 
        eyebrow="PUBLICATIONS & WRITING"
        title="Technical Writing & Insights." 
      />
      <ArticlesList>
        {featured.map((el, index) => {
          const meta = metaMap[index] || { date: 'RECENT', readTime: '4 min read' };
          return (
            <ArticleRow 
              key={el.id}
              href={el.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <MetadataGroup>
                <DateBadge>{meta.date}</DateBadge>
                <FeaturedTag>{el.tag}</FeaturedTag>
              </MetadataGroup>
              <ArticleHeadline>{el.title}</ArticleHeadline>
              <MetaAndAction>
                <ReadTimeTag>{meta.readTime}</ReadTimeTag>
                <ReadMoreLink>
                  Read More <FiArrowRight />
                </ReadMoreLink>
              </MetaAndAction>
            </ArticleRow>
          );
        })}
      </ArticlesList>
      <ExploreButtonContainer>
         <IndexLink to={"/blogs"}>
           VIEW ALL ARTICLES <FiArrowRight />
         </IndexLink>
      </ExploreButtonContainer>
    </Container>
  );
};

export default FeaturedBlogs;
