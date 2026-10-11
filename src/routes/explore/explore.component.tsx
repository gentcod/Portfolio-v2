import {
  ExploreContainer,
  Eyebrow,
  ExploreHeading,
  ExploreSubheading
} from "./explore.styles";

import Projects from "../../components/backend-projects/backend.component";
import CarouselWebProject from "../../components/carousel-webproject/carousel-webproject.component";
import Carousel from "../../components/carousel/carousel.component";

const Explore = () => {
  return (
    <ExploreContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Eyebrow>COMPREHENSIVE INDEX</Eyebrow>
      <ExploreHeading>Selected Works & Systems<span className="accent">.</span></ExploreHeading>
      <ExploreSubheading>
        An exhaustive catalog spanning distributed infrastructure tools, cloud automation scripts, and client-facing web applications.
      </ExploreSubheading>
      
      <Projects />
      <CarouselWebProject />
      <Carousel />

    </ExploreContainer>
  );
};

export default Explore;
