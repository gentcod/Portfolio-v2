import Button from "../button/button.component";

import { FooterContainer, FooterImage, FooterImageContainer, FooterImageLine, FooterImageLineContainer, FooterLower, FooterUpper } from "./footer.style";

const Footer = () => {
   return (
      <FooterContainer>
         <FooterUpper>
            <FooterImageLineContainer>
               <FooterImageLine/>
               <FooterImageContainer>
                  <FooterImage src={'./img/my_image.jpg'}/>
               </FooterImageContainer>
            </FooterImageLineContainer>
            <Button value="Hire Me"/>
         </FooterUpper>

         <FooterLower>

         </FooterLower>
      </FooterContainer>
   )
}

export default Footer;
