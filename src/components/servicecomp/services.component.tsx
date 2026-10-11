import Heading from "../heading/heading.component";
import { 
  Container, 
  ServiceCard, 
  ServiceContent, 
  ServiceHeader, 
  ServicesContainer,
  CorePhilosophyBadge,
  ServiceNumber 
} from "./services.style";

type ServiceProp = {
   id: number;
   number: string;
   header: string;
   content: string;
   isHighlighted?: boolean;
}[]

const serviceData: ServiceProp = [
   {
      id: 1,
      number: '01 // ARCHITECTURE',
      header: 'Software Development',
      content: 'Crafting digital solutions from concept to creation. Tailoring resilient web services, microservices, and mobile-ready backend architectures designed for enterprise scale and fault tolerance.'
   },
   {
      id: 2,
      number: '02 // DISCIPLINE',
      header: 'Product-Minded Software Engineering',
      content: 'Bridging low-level systems engineering with user-centric product impact. Marrying technical execution with product intuition to ship solutions that move real metrics and deliver seamless end-user experiences.',
      isHighlighted: true
   },
   {
      id: 3,
      number: '03 // COLLABORATION',
      header: 'Technical Leadership & Soft Skills',
      content: 'Translating complex distributed systems into crisp cross-functional consensus. Fostering engineering culture, conducting architectural reviews, and leading high-velocity sprint executions.'
   }
];

const Services = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
      >
         <Heading 
            eyebrow="CAPABILITIES & VALUE PROPOSITION"
            title="Core Engineering Focus." 
         />
         <ServicesContainer>
            {serviceData.map((el, index) => (
               <ServiceCard 
                  key={el.id} 
                  isHighlighted={el.isHighlighted}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
               >
                  {el.isHighlighted ? (
                     <CorePhilosophyBadge>CORE PHILOSOPHY</CorePhilosophyBadge>
                  ) : (
                     <ServiceNumber>{el.number}</ServiceNumber>
                  )}
                  <ServiceHeader isHighlighted={el.isHighlighted}>{el.header}</ServiceHeader>
                  <ServiceContent isHighlighted={el.isHighlighted}>{el.content}</ServiceContent>
               </ServiceCard>
            ))}
         </ServicesContainer>
      </Container>
   );
};

export default Services;