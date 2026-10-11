import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { Variants } from "framer-motion";
import {
  HomeLayout,
  HeroSection,
  HomeContentWrapper,
  LeftSection,
  RightSection,
  HeroEyebrow,
  EyebrowDot,
  Name,
  RoleTitle,
  Description,
  SocialLinks,
  IntroTag,
  ActionRow,
  PrimaryButton,
  ActionLink
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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
            <HeroEyebrow>
              <EyebrowDot />
              <span>Distributed Systems & Cloud Architecture</span>
            </HeroEyebrow>
            <Name>
              Oyefule<br/>Oluwatayo<span className="period">.</span>
            </Name>
            <SocialLinks>
              <a href="https://github.com/gentcod" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/oyefule-oluwatayo" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:oyefuleoluwatayo@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </SocialLinks>
          </LeftSection>

          <RightSection variants={itemVariants}>
            <IntroTag>Introduction</IntroTag>
            <RoleTitle>
              Product-Minded Software Engineer.
            </RoleTitle>
            <Description>
              I design, build, and optimize resilient, high-performance distributed systems and cloud-native applications. I specialize in creating real-time data processing pipelines and scalable backend infrastructure that directly translate to measurable business impact.
            </Description>
            <ActionRow>
              <PrimaryButton 
                to="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </PrimaryButton>
              <ActionLink to="/about">
                My story <FiArrowRight />
              </ActionLink>
            </ActionRow>
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