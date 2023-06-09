import {Container, ExperienceNum, ExperienceTitle, ExperienceTitleCompanyName, ExperienceTitleRole, ExperienceDesc} from './work-experience-item.style';

type ExperienceProp = {
   id: number;
   companyName: string;
   role: string;
   desc: string;
   color: string;
}

const WorkExperienceItem = ({id, companyName, role, desc, color}: ExperienceProp) => {
   return (
      <Container>
         <ExperienceNum>0{id}</ExperienceNum>
         <ExperienceTitle>
            <ExperienceTitleCompanyName color={color}>{companyName}</ExperienceTitleCompanyName>,
            <ExperienceTitleRole>{role}</ExperienceTitleRole>
         </ExperienceTitle>
         <ExperienceDesc>{desc}</ExperienceDesc>
      </Container>
   )
}

export default WorkExperienceItem;