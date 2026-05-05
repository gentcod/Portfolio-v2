import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import Button from "../button/button.component";
import { mailSubject, mailBodySocial } from "../../dev-data/dev_data_socials";

import { 
   FooterContainer, 
   FooterTop, 
   FooterImageContainer, 
   FooterImage, 
   FooterBottom,
   FooterColumn,
   ColumnHeading,
   SocialsRow,
   SocialLink,
   FooterLink,
   Copyright
} from "./footer.style";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <FooterContainer
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
         <FooterTop>
            <FooterImageContainer>
               <FooterImage src={'https://i.ibb.co/Wk68wmD/my-image.jpg'} alt="Oyefule Oluwatayo" />
            </FooterImageContainer>
            <Button 
               link={`mailto:oyefuleoluwatayo@gmail.com?subject=${mailSubject}&body=${mailBodySocial}`} 
               value="Hire Me"
            />
         </FooterTop>

         <FooterBottom>
            <FooterColumn>
               <ColumnHeading>Legacy Content</ColumnHeading>
               <FooterLink to="https://oyefuleold.netlify.app" target="_blank">
                  View Old Portfolio Version
               </FooterLink>
            </FooterColumn>

            <FooterColumn>
               <Copyright>© {currentYear} Oyefule Oluwatayo. All Rights Reserved.</Copyright>
            </FooterColumn>

            <FooterColumn>
               <ColumnHeading>Connect With Me</ColumnHeading>
               <SocialsRow>
                  <SocialLink href="https://github.com/gentcod" target="_blank" rel="noreferrer" aria-label="GitHub">
                     <FiGithub />
                  </SocialLink>
                  <SocialLink href="https://linkedin.com/in/oyefule-oluwatayo" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                     <FiLinkedin />
                  </SocialLink>
                  <SocialLink href="https://twitter.com/gentcod" target="_blank" rel="noreferrer" aria-label="Twitter">
                     <FiTwitter />
                  </SocialLink>
                  <SocialLink href="mailto:oyefuleoluwatayo@gmail.com" aria-label="Email">
                     <FiMail />
                  </SocialLink>
               </SocialsRow>
            </FooterColumn>
         </FooterBottom>
      </FooterContainer>
   )
}

export default Footer;
