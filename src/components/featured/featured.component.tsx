import Heading from '../heading/heading.component';
import { Container, EXploreButtonLabel, ExploreButton, ExploreOverlay, FeaturedImage, FeaturedImageOverLay, FeaturedTitle, ImageSkewContainer } from './featured.style';

type FeaturedImagesProp = {
   id: number;
   link: string;
   title: string;
   imgSrc: string;
}[]

const data: FeaturedImagesProp = [
   {
      id: 0,
      link: 'https://gentcod-foodie.netlify.app',
      title: 'Foodie: Food.com prototype',
      imgSrc: 'https://i.ibb.co/KWB0n4G/foodie.png',
   },
   {
      id: 1,
      link: 'https://gentcod-mapty.netlify.app',
      title: 'Mapty: A workout map app',
      imgSrc: 'https://i.ibb.co/9qsJVjj/mapty.png',
   },
   {
      id: 2,
      link: 'https://gentcod-natours.netlify.app',
      title: 'Natours: A tourism booking homepage',
      imgSrc: 'https://i.ibb.co/LNX980G/natours.png',
   },  
];

const Featured = () => {
   return (
      <Container>
         <Heading title='Featured work samples'/>
         {data.map(el =>
         <ImageSkewContainer key={el.id} to={el.link}>
            <FeaturedImageOverLay>
               <FeaturedTitle>{el.title}</FeaturedTitle>
            </FeaturedImageOverLay>
            <FeaturedImage src={el.imgSrc}/>
         </ImageSkewContainer>
         )}
         <ExploreButton to={'explore'}>
            <ExploreOverlay/>
            <EXploreButtonLabel>Explore</EXploreButtonLabel>
         </ExploreButton>
      </Container>
   )
};


export default Featured;