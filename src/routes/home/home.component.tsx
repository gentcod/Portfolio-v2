import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { Variants } from "framer-motion";
import {
  HomeLayout,
  HeroSection,
  HomeContentWrapper,
  LeftSection,
  RightSection,
  Name,
  RoleTitle,
  Description,
  SocialLinks,
  AccentBox,
  IntroTag,
  ActionLink,
  ImageContainer
} from "./home.styles";

import Projects from "../../components/backend-projects/backend.component";
import Featured from "../../components/featured/featured.component";
import Services from "../../components/servicecomp/services.component";
import FeaturedBlogs from "../../components/featured-blogs/featured-blogs.component";

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <HomeLayout>
      <HeroSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HomeContentWrapper>
          <LeftSection variants={itemVariants}>
            <AccentBox />
            <Name>Oyefule<br/>Oluwatayo.</Name>
            <SocialLinks>
              <a href="https://github.com/gentcod" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/oyefule-oluwatayo" target="_blank" rel="noreferrer">
                <FiLinkedin />
              </a>
              <a href="mailto:oyefuleoluwatayo@gmail.com">
                <FiMail />
              </a>
            </SocialLinks>
            <ImageContainer
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1 }}
            >
              <img src="https://i.ibb.co/0CTV9JQ/flat-art.png" alt="Decorative" />
            </ImageContainer>
          </LeftSection>

          <RightSection variants={itemVariants}>
            <IntroTag>Introduction</IntroTag>
            <RoleTitle>
              Product-Minded Software Engineer, based in Lagos, Nigeria.
            </RoleTitle>
            <Description>
              I have 5+ years of experience designing and optimizing cloud-native applications, distributed systems, and real-time data processing pipelines. I build solutions that impact the positive outlook for businesses and their customers.
            </Description>
            <ActionLink to="/about" whileHover={{ x: 5 }}>
              My story <FiArrowRight />
            </ActionLink>
          </RightSection>
        </HomeContentWrapper>
      </HeroSection>

      <Projects />
      <Featured />
      <Services />
      <FeaturedBlogs />
    </HomeLayout>
  );
};

export default Home;