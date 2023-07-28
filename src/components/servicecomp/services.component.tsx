import Heading from "../heading/heading.component";
import { Container, Service, ServiceContent, ServiceGreen, ServiceHeader, ServicesContainer } from "./services.style";

type ServiceProp = {
   id: number;
   header: string;
   content: string;
}[]

const serviceData: ServiceProp = [
   {
      id: 1,
      header: 'Web Development',
      content: 'Responsive websites'
   },

   {
      id: 2,
      header: 'Web Development',
      content: 'Responsive websites'
   },

   {
      id: 3,
      header: 'Web Development',
      content: 'Responsive websites'
   }
]

const Services = () => {
   return (
      <Container>
         <Heading title={'What do I offer'}></Heading>

         <ServicesContainer>
            {serviceData.map(el => ( el.id % 2 === 0 ?
               (<ServiceGreen key={el.id}>
                  <ServiceHeader>{el.header}</ServiceHeader>
                  <ServiceContent>{el.content}</ServiceContent>
               </ServiceGreen>) :
               (<Service key={el.id}>
                  <ServiceHeader>{el.header}</ServiceHeader>
                  <ServiceContent>{el.content}</ServiceContent>
               </Service>)
            ))}
         </ServicesContainer>
      </Container>
   )
};

export default Services;