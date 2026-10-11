import { FiArrowRight } from "react-icons/fi";
import ContactForm from "../../components/contact-form/contact-form.component";
import {
  ContactPageContainer,
  ContactContent,
  ContactLeft,
  ContactEyebrow,
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
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactEyebrow>GET IN TOUCH</ContactEyebrow>
          <ContactHeading>Initiate Conversation<span className="accent">.</span></ContactHeading>
          <ContactText>
            Whether you are exploring potential distributed systems architecture collaborations, contract engineering, or technical leadership roles, my inbox is open.
          </ContactText>
          <EmailLink href="mailto:oyefuleoluwatayo@gmail.com">
            oyefuleoluwatayo@gmail.com <FiArrowRight />
          </EmailLink>
        </ContactLeft>

        <ContactRight
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ContactForm />
        </ContactRight>
      </ContactContent>
    </ContactPageContainer>
  );
};

export default Contact;