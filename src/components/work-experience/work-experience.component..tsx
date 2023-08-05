import WorkExperienceItem from '../work-experience-item/work-experience-item.component';

import { experienceData } from '../../dev-data/experience-data';
import {Container, ExperienceContainer, Heading, ResumeButton, SubHeading} from './work-experience.style';

const WorkExperience = () => {

   return (
      <Container>
         <Heading>Work Experience</Heading>
         <SubHeading>Notable places I have worked at and gained industry expereince.</SubHeading>
         <ExperienceContainer>
            {experienceData.map(data => (
               <WorkExperienceItem key={data.id} id={data.id} companyName={data.companyName} role={data.role} desc={data.desc} color={data.color}/>
            ))}
         </ExperienceContainer>
         <ResumeButton href={'/doc/resume.pdf'}>Download My Resume</ResumeButton>
      </Container>
   )
}

export default WorkExperience;