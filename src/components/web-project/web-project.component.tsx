import { FiArrowRight } from 'react-icons/fi';
import {
  Container, 
  SubTopContainer, 
  SubBottomContainer, 
  SubTopLeftContainer,
  SubTopRightContainer, 
  Heading, 
  SubHeading, 
  Description, 
  Image, 
  ProjectLink 
} from './web-project.style';

type WebProjectProp = {
   heading: string;
   subheading: string;
   description: string;
   imgSrc: string;
   link: string;
}

const WebProject = ({heading, subheading, description, imgSrc, link}: WebProjectProp) => {
   const isExternal = link.startsWith('http');

   return (
      <Container>
         <SubTopContainer>
            <SubTopLeftContainer>
               <SubHeading>{subheading}</SubHeading>
               <Heading>{heading}</Heading>
            </SubTopLeftContainer>

            <SubTopRightContainer>
               <Description>{description}</Description>
               {isExternal ? (
                  <ProjectLink as="a" href={link} target="_blank" rel="noreferrer">
                     <span>View Project</span>
                     <FiArrowRight />
                  </ProjectLink>
               ) : (
                  <ProjectLink to={link}>
                     <span>View Project</span>
                     <FiArrowRight />
                  </ProjectLink>
               )}
            </SubTopRightContainer>
         </SubTopContainer>

         <SubBottomContainer>
            <Image src={imgSrc} alt={heading} loading="lazy" />
         </SubBottomContainer>
      </Container>
   );
};

export default WebProject;