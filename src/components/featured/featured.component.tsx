import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import Heading from '../heading/heading.component';
import { 
   Container, 
   ProjectsGrid,
   FeaturedProjectCard,
   PreviewPane,
   ProjectImage,
   NarrativePane,
   CategoryTag,
   ProjectTitle,
   ProjectNarrative,
   TechStackTrack,
   TechBadge,
   ActionRow,
   LiveLink,
   SourceLink,
   ExploreButtonContainer,
   IndexLink
} from './featured.style';

type FeaturedProject = {
   id: number;
   title: string;
   category: string;
   narrative: string;
   stack: string[];
   imgSrc: string;
   liveLink: string;
   sourceLink?: string;
}

const data: FeaturedProject[] = [
   {
      id: 0,
      title: 'Foodie: Culinary Recipe Engine',
      category: 'FULLSTACK WEB APPLICATION',
      narrative: 'A high-performance recipe discovery and restaurant discovery platform built with containerized .NET microservices, React TypeScript frontend, and Redux state architecture.',
      stack: ['C# / .NET', 'React', 'TypeScript', 'Redux', 'SQLite', 'Docker'],
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730220702/foodie-other-recipes-main_cae84l.png',
      liveLink: 'https://gentcod-foodie-v2.netlify.app',
      sourceLink: 'https://github.com/gentcod'
   },
   {
      id: 1,
      title: 'Capstone E-Commerce Experience',
      category: 'COMMERCE PLATFORM',
      narrative: 'A seamless e-commerce clothing showcase integrating Firebase authentication and real-time database persistence, complemented by secure Stripe payment processing.',
      stack: ['React', 'Redux', 'Firebase Auth', 'Firestore', 'Stripe API'],
      imgSrc: 'https://i.ibb.co/9GS3QKD/capstone.png',
      liveLink: 'https://gentcod-capstone.netlify.app',
      sourceLink: 'https://github.com/gentcod'
   },
   {
      id: 2,
      title: 'Mapty: Geolocation Workout Tracker',
      category: 'GEOSPATIAL APPLICATION',
      narrative: 'An interactive map-centric fitness routing tool leveraging Leaflet geospatial APIs to record running and cycling workouts with persistent local storage.',
      stack: ['JavaScript (ES6+)', 'Leaflet GIS', 'Geolocation API', 'HTML5/CSS3'],
      imgSrc: 'https://i.ibb.co/9qsJVjj/mapty.png',
      liveLink: 'https://gentcod-mapty.netlify.app',
      sourceLink: 'https://github.com/gentcod'
   },
];

const Featured = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
      >
         <Heading 
            eyebrow="FLAGSHIP CLIENT APPLICATIONS"
            title="Featured Web Applications."
         />
         <ProjectsGrid>
            {data.map((el, index) => (
               <FeaturedProjectCard 
                  key={el.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
               >
                  <PreviewPane>
                     <ProjectImage src={el.imgSrc} alt={el.title} loading="lazy" />
                  </PreviewPane>
                  <NarrativePane>
                     <CategoryTag>{el.category}</CategoryTag>
                     <ProjectTitle>{el.title}</ProjectTitle>
                     <ProjectNarrative>{el.narrative}</ProjectNarrative>
                     <TechStackTrack>
                        {el.stack.map((tech, i) => (
                           <TechBadge key={i}>{tech}</TechBadge>
                        ))}
                     </TechStackTrack>
                     <ActionRow>
                        <LiveLink href={el.liveLink} target="_blank" rel="noreferrer">
                           Live Demo <FiExternalLink />
                        </LiveLink>
                        {el.sourceLink && (
                           <SourceLink href={el.sourceLink} target="_blank" rel="noreferrer">
                              Source Code <FiGithub />
                           </SourceLink>
                        )}
                     </ActionRow>
                  </NarrativePane>
               </FeaturedProjectCard>
            ))}
         </ProjectsGrid>
         <ExploreButtonContainer>
            <IndexLink to='/explore'>
               EXPLORE ALL PROJECTS <FiArrowRight />
            </IndexLink>
         </ExploreButtonContainer>
      </Container>
   );
};

export default Featured;