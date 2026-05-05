import Heading from '../heading/heading.component';
import { 
   Container, 
   ExploreButton, 
   FeaturedImage, 
   FeaturedImageOverLay, 
   FeaturedTitle, 
   ImageSkewContainer,
   ProjectsGrid,
   ExploreButtonContainer
} from './featured.style';

type FeaturedImagesProp = {
   id: number;
   link: string;
   title: string;
   imgSrc: string;
}[]

const data: FeaturedImagesProp = [
   {
      id: 0,
      link: 'https://gentcod-foodie-v2.netlify.app',
      title: 'Foodie: Food Recipe and Few Restaurant',
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730220702/foodie-other-recipes-main_cae84l.png',
   },
   {
      id: 1,
      link: 'https://gentcod-foodie.netlify.app',
      title: 'Foodie: Food.com prototype',
      imgSrc: 'https://i.ibb.co/KWB0n4G/foodie.png',
   },
   {
      id: 2,
      link: 'https://gentcod-mapty.netlify.app',
      title: 'Mapty: A workout map app',
      imgSrc: 'https://i.ibb.co/9qsJVjj/mapty.png',
   },
];

const Featured = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
         <Heading title='Featured Web Projects'/>
         <ProjectsGrid>
            {data.map((el, index) =>
               <ImageSkewContainer 
                  key={el.id} 
                  href={el.link}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  <FeaturedImage src={el.imgSrc} alt={el.title} />
                  <FeaturedImageOverLay>
                     <FeaturedTitle>{el.title}</FeaturedTitle>
                  </FeaturedImageOverLay>
               </ImageSkewContainer>
            )}
         </ProjectsGrid>
         <ExploreButtonContainer>
            <ExploreButton to='/explore'>
               Explore All Projects
            </ExploreButton>
         </ExploreButtonContainer>
      </Container>
   )
};

export default Featured;