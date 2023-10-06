import TechStackContainer from '../../components/tech-stack-container/tech-stack-container.component';
import WorkExperience from '../../components/work-experience/work-experience.component.';

import { Container, AboutStack, AboutContent, AboutHeading, AboutSummary } from './about.styles';

type AboutMe = {
   heading: string;
   summary: string;
}

const about: AboutMe = {
   heading: 'Hi, I am Oyefule',
   summary: `I am a creative and innovative Developer and Designer who likes to properly undestand how things work.
   I like to describe myself as a Jack of a lot, definitely not all 😅😅😅. 
   I am skilled in a lot of aspects and this is as a result of my ability to quickly learn and adapt to new situations and challenges. 
   This comes in handy not only in my career or professional field, I use it in all aspect of life. 
   I also like sharing knowledge, as I believe true mastery of a skill cannot be achieved without sharing what you know. Kindly take your time to go through my portfolio. 
   I am open to feedback, so feel free to reach out to me and provide one. Lastly, I love anime and yes, I have seen One Piece😊😊😊`,
}

const About = () => {
   return (
      <Container>
         <AboutStack>
            <AboutContent>
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