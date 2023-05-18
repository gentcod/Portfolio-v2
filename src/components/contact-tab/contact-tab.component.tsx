import { Tab, TabLogo, TabText } from "./contact-tab.style";

interface TabProp {
   text: string,
   link: string,
   image: string
}

const ContactTab = ({text, link, image} : TabProp) => {
   return (
      <Tab href={link} target="_blank">
         <TabLogo src={image}/>
         <TabText>{text}</TabText>
      </Tab>
   )
};

export default ContactTab;