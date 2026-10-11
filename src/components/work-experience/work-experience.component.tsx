import { FiArrowRight } from 'react-icons/fi';
import WorkExperienceItem from '../work-experience-item/work-experience-item.component';
import { experienceData } from '../../dev-data/experience-data';
import { 
  Container, 
  Eyebrow,
  Heading, 
  SubHeading, 
  ExperienceContainer, 
  ResumeButton 
} from './work-experience.style';

const WorkExperience = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
      >
         <Eyebrow>CAREER TRAJECTORY</Eyebrow>
         <Heading>Industry Experience.</Heading>
         <SubHeading>Notable engineering teams and distributed systems I have contributed to and led.</SubHeading>
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
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
         >
            VIEW RESUME ARCHIVE <FiArrowRight />
         </ResumeButton>
      </Container>
   );
};

export default WorkExperience;