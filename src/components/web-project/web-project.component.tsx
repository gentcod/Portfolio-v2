import {Container, SubTopContainer, SubButtonContainer, SubTopLeftContainer, SubTopRightContainer, Heading, SubHeading, Description, Image } from './web-project.style';

type WebProjectProp = {
   heading: string;
   subheading: string;
   description: string;
   imgSrc: string;
}

const WebProject = ({heading, subheading, description, imgSrc}: WebProjectProp) => {
   return (
      <Container>
         <SubTopContainer>
            <SubTopLeftContainer>
               <Heading>{heading}</Heading>
               <SubHeading>{subheading}</SubHeading>
            </SubTopLeftContainer>

            <SubTopRightContainer>
               <Description>{description}</Description>
            </SubTopRightContainer>
         </SubTopContainer>

         <SubButtonContainer>
            <Image src={imgSrc}/>
         </SubButtonContainer>
      </Container>
   )
}

export default WebProject;