import TechStackContainer from '../../components/tech-stack-container/tech-stack-container.component';
import WorkExperience from '../../components/work-experience/work-experience.component';

import { Container, AboutStack, AboutContent, AboutHeading, AboutSummary } from './about.styles';

type AboutMe = {
   heading: string;
   summary: string;
}

const about: AboutMe = {
   heading: 'Hi, I am Oyefule',
   summary: `Backend-focused Software Engineer with 5+ years of experience designing and optimizing cloud-native applications, distributed systems, and real-time data processing pipelines. Experience in leading engineering teams, architecting scalable microservices, and implementing DevOps practices that enhance system reliability and operational efficiency.`,
}

const About = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         <AboutStack>
            <AboutContent
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
               <AboutHeading>{about.heading}</AboutHeading>
               <AboutSummary>{about.summary}</AboutSummary>
            </AboutContent>
            <TechStackContainer />
         </AboutStack>
         <WorkExperience/>
      </Container>
   )
}

export default About;