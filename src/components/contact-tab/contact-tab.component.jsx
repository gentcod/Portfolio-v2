import { Tab, TabLogo, TabText } from "./contact-tab.style";

const ContactTab = ({text, link, image}) => {
   return (
      <Tab href={link} target="_blank">
         <TabLogo src={image}/>
         <TabText>{text}</TabText>
      </Tab>
   )
};

export default ContactTab;