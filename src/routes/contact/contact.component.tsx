import { FiArrowRight } from "react-icons/fi";
import ContactForm from "../../components/contact-form/contact-form.component";
import {
  ContactPageContainer,
  ContactContent,
  ContactLeft,
  ContactHeading,
  ContactText,
  EmailLink,
  ContactRight,
} from "./contact.styles";

const Contact = () => {
  return (
    <ContactPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactContent>
        <ContactLeft
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactText>-- Contact</ContactText>
          <ContactHeading>Any Type Of Query & Discussion.</ContactHeading>
          <ContactText>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </ContactText>
          <EmailLink href="mailto:oyefuleoluwatayo@gmail.com">
            oyefuleoluwatayo@gmail.com <FiArrowRight />
          </EmailLink>
        </ContactLeft>

        <ContactRight
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm />
        </ContactRight>
      </ContactContent>
    </ContactPageContainer>
  );
};

export default Contact;