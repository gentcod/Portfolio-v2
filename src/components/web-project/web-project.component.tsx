import {Container, SubTopContainer, SubBottomContainer, SubTopLeftContainer, SubTopRightContainer, Heading, SubHeading, Description, Image } from './web-project.style';

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

         <SubBottomContainer>
            <Image src={imgSrc}/>
         </SubBottomContainer>
      </Container>
   )
}

export default WebProject;