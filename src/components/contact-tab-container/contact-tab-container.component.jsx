import ContactTab from "../contact-tab/contact-tab.component";

import { socials } from "../../dev_data_socials";

import { Container} from "./contact-tab-container.style";

const ContactTabContainer = () => {
   return (
      <Container>
         {socials.map(data => <ContactTab key={data.id} text={data.name} link={data.link} image={data.imgSrc} />)}
      </Container>
   )
}

export default ContactTabContainer;