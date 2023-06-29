import {Container, SubTopContainer, SubBottomContainer, SubTopLeftContainer,
    SubTopRightContainer, Heading, SubHeading, Description, Image, ProjectLink, LinkIcon } from './web-project.style';

type WebProjectProp = {
   heading: string;
   subheading: string;
   description: string;
   imgSrc: string;
   link: string;
}

const WebProject = ({heading, subheading, description, imgSrc, link}: WebProjectProp) => {
   return (
      <Container>
         <SubTopContainer>
            <SubTopLeftContainer>
               <Heading>{heading}</Heading>
               <SubHeading>{subheading}</SubHeading>
            </SubTopLeftContainer>

            <SubTopRightContainer>
               <Description>{description}</Description>
               <ProjectLink to={link}> <span>View Project</span> {<LinkIcon src='icons/right-arrow.svg'/>} </ProjectLink>
            </SubTopRightContainer>
         </SubTopContainer>

         <SubBottomContainer>
            <Image src={imgSrc}/>
         </SubBottomContainer>
      </Container>
   )
}

export default WebProject;