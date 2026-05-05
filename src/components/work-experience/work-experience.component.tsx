import WorkExperienceItem from '../work-experience-item/work-experience-item.component';
import { experienceData } from '../../dev-data/experience-data';
import { Container, ExperienceContainer, Heading, ResumeButton, SubHeading } from './work-experience.style';

const WorkExperience = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
         <Heading>Work Experience</Heading>
         <SubHeading>Notable places I have worked at and gained industry experience.</SubHeading>
         <ExperienceContainer>
            {experienceData.map(data => (
               <WorkExperienceItem 
                  key={data.id} 
                  id={data.id} 
                  companyName={data.companyName} 
                  role={data.role} 
                  date={data.date}
                  desc={data.desc} 
                  color={data.color}
               />
            ))}
         </ExperienceContainer>
         <ResumeButton 
            href={'/doc/resume.pdf'} 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
         >
            Download My Resume
         </ResumeButton>
      </Container>
   )
}

export default WorkExperience;