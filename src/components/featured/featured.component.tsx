import { Container, FeaturedImage, ImageSkewContainer } from './featured.style';

type FeaturedImagesProp = {
   id: number;
   link: string;
   imgSrc: string;
}[]

const data: FeaturedImagesProp = [
   {
      id: 0,
      // link: 'https://gentcod-mapty.netlify.app',
      link: '',
      imgSrc: 'img/foodie.png',
   },
   {
      id: 0,
      link: '',
      imgSrc: 'img/mapty.png',
   },
   {
      id: 0,
      link: '',
      imgSrc: 'img/natours.png',
   },  
]

const Featured = () => {
   return (
      <Container>
         {data.map(el =>
         <ImageSkewContainer key={el.id} to={el.link}>
            <FeaturedImage src={el.imgSrc}/>
         </ImageSkewContainer>
         )}
      </Container>
   )
};


export default Featured;