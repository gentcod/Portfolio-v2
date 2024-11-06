
import ContactTabContainer from "../../components/contact-tab-container/contact-tab-container.component";
import FeaturedBlogs from "../../components/featured-blogs/featured-blogs.component";
import Featured from "../../components/featured/featured.component";
import Services from "../../components/servicecomp/services.component";
import { HomeContainer, HomeContentContainer, HomeIntro, Name, Title, Description ,HomeImageContainer, HomeImage, SocialsHeader } from "./home.styles";

const Home = () => {
   return (
      <HomeContainer>
         <HomeContentContainer>
            <HomeIntro>
               <Name>Oyefule Oluwatayo</Name>
               <Title>Software Engineer</Title>
               <Description>Hey there! I have firm interest in building cloud native applications. Providing software solutions that impact the positive outlook for businesses and their customers. I build and develop digital solutions that optimizes user experience and efficiency.</Description>
               <SocialsHeader>Contact Me:</SocialsHeader>
               <ContactTabContainer/>
            </HomeIntro>
            <HomeImageContainer>
               <HomeImage src={'https://i.ibb.co/0CTV9JQ/flat-art.png'}/>
            </HomeImageContainer>
         </HomeContentContainer>
         <Featured/>
         <Services/>
         <FeaturedBlogs/>
      </HomeContainer>
   )
}

export default Home;