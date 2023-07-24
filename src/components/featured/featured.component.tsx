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
      // link: 'https://gentcod-mapty.netlify.app',
      link: '',
      title: 'Foodie: Food.com prototype',
      imgSrc: 'img/foodie.png',
   },
   {
      id: 1,
      link: '',
      title: 'Mapty: A workout map app',
      imgSrc: 'img/mapty.png',
   },
   {
      id: 2,
      link: '',
      title: 'Natours: A tourism booking homepage',
      imgSrc: 'img/natours.png',
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