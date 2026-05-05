import {
  Container,
  ExperienceHeader,
  TitleGroup,
  CompanyName,
  Role,
  DateSpan,
  ExperienceDesc,
} from "./work-experience-item.style";

type ExperienceProp = {
  id: number;
  companyName: string;
  role: string;
  date: string;
  desc: string;
  color: string;
};

const WorkExperienceItem = ({
  companyName,
  role,
  date,
  desc,
  color,
}: ExperienceProp) => {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ExperienceHeader>
        <TitleGroup>
          <CompanyName color={color}>{companyName}</CompanyName>
          <Role>{role}</Role>
        </TitleGroup>
        <DateSpan>{date}</DateSpan>
      </ExperienceHeader>
      <ExperienceDesc>{desc}</ExperienceDesc>
    </Container>
  );
};

export default WorkExperienceItem;