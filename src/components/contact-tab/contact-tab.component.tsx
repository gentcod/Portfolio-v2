import { Tab, TabLogo, TabText } from "./contact-tab.style";

interface TabProp {
   text: string,
   link: string,
   image: string
   linkLabel: string;
}

const ContactTab = ({text, link, image, linkLabel} : TabProp) => {
   return (
      <Tab href={link} target="_blank" aria-label={linkLabel}>
         <TabLogo src={image}/>
         <TabText>{text}</TabText>
      </Tab>
   )
};

export default ContactTab;