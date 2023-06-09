import ContactForm from '../../components/contact-form/contact-form.component';

import { ContactPageContainer } from './contact.styles';

const Contact = () => {
   return (
      <ContactPageContainer>
         <h1>Hello this  is the contact page</h1>
         <ContactForm/>
      </ContactPageContainer>
   )
}

export default Contact;