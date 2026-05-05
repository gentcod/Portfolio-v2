import {
  ExploreContainer,
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
      <ExploreHeading>Selected Works.</ExploreHeading>
      <ExploreSubheading>A collection of my recent projects and experiments.</ExploreSubheading>
      
      <Projects />
      <CarouselWebProject />
      <Carousel />

    </ExploreContainer>
  );
};

export default Explore;
