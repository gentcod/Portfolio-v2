
import { HomeContainer, HomeContentContainer, HomeIntro, Name, Title, Description ,HomeImageContainer, HomeImage } from "./home.styles";

const Home = () => {
   return (
      <HomeContainer>
         <HomeContentContainer>
            <HomeIntro>
               <Name>Oyefule Oluwatayo</Name>
               <Title>Web Developer</Title>
               <Description>Hey there! I'm a creative and innovative designer and developer</Description>
            </HomeIntro>
            <HomeImageContainer>
               <HomeImage src={'https://i.ibb.co/0CTV9JQ/flat-art.png'}/>
            </HomeImageContainer>
         </HomeContentContainer>
      </HomeContainer>
   )
}

export default Home;