
import ContactTabContainer from "../../components/contact-tab-container/contact-tab-container.component";
import Featured from "../../components/featured/featured.component";
import { HomeContainer, HomeContentContainer, HomeIntro, Name, Title, Description ,HomeImageContainer, HomeImage, SocialsHeader } from "./home.styles";

const Home = () => {
   return (
      <HomeContainer>
         <HomeContentContainer>
            <HomeIntro>
               <Name>Oyefule Oluwatayo</Name>
               <Title>Software Developer</Title>
               <Description>Hey there! I build and develop digital solutions that optimizes user experience and efficiency.</Description>
               <SocialsHeader>Contact Me:</SocialsHeader>
               <ContactTabContainer/>
            </HomeIntro>
            <HomeImageContainer>
               <HomeImage src={'https://i.ibb.co/0CTV9JQ/flat-art.png'}/>
            </HomeImageContainer>
         </HomeContentContainer>
         <Featured/>
      </HomeContainer>
   )
}

export default Home;