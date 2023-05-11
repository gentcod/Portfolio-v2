import TechStackContainer from '../../components/tech-stack-container/tech-stack-container.component';
import { AboutStack, AboutContent } from './about.styles';

const About = () => {
   return (
      <AboutStack>
         <AboutContent>
            <h1>This the about page</h1>
         </AboutContent>
         <TechStackContainer />
      </AboutStack>
   )
}

export default About;