import Heading from "../heading/heading.component";
import { Container, ServiceCard, ServiceContent, ServiceHeader, ServicesContainer } from "./services.style";

type ServiceProp = {
   id: number;
   header: string;
   content: string;
}[]

const serviceData: ServiceProp = [
   {
      id: 1,
      header: 'Software Development',
      content: `Crafting digital solutions - From concept to creation, I tailor innovative web and mobile applications to meet your unique business needs.
      Empowering your vision - I build secure, efficient, and scalable software, taking your ideas from blueprint to reality.`
   },

   {
      id: 2,
      header: 'Product-Minded Software Engineering',
      content: `Bridging the gap between ideas and impact: I marry technical expertise with a user-centric approach to build innovative products that delight and solve real problems.
      Crafting solutions with purpose: I combine engineering prowess with product thinking, bringing your vision to life through functional, user-friendly, and market-driven products.`
   },

   {
      id: 3,
      header: 'Soft Skills',
      content: `Good communication and people relation - Bridging the technical divide: I translate complex solutions into clear communication, fostering collaboration and driving successful software development.
      Empowering teams, exceeding expectations: I leverage strong communication, problem-solving, and adaptability to create positive experiences and deliver high-impact software.`
   }
]

const Services = () => {
   return (
      <Container
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
         <Heading title="What do I offer" />
         <ServicesContainer>
            {serviceData.map((el, index) => {
               const isHighlighted = el.id % 2 === 0;
               return (
                  <ServiceCard 
                     key={el.id} 
                     isHighlighted={isHighlighted}
                     initial={{ y: 30, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <ServiceHeader isHighlighted={isHighlighted}>{el.header}</ServiceHeader>
                     <ServiceContent isHighlighted={isHighlighted}>{el.content}</ServiceContent>
                  </ServiceCard>
               );
            })}
         </ServicesContainer>
      </Container>
   )
};

export default Services;