import { footerSocials } from "../../dev-data/footer_socials";
import Button from "../button/button.component";

import { CopyRight, FooterContainer, FooterCopyright, FooterImage, FooterImageContainer, FooterImageLine, FooterImageLineContainer, FooterLower, FooterLowerMid, FooterSocials, FooterSocialsContainer, FooterSocialsHeader, FooterUpper, LegacyHeading, LegacyPortfolio, SocialIcon, SocialLinks } from "./footer.style";

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
            <FooterSocialsContainer>
               <FooterSocialsHeader>Social Accounts:</FooterSocialsHeader>
               <FooterSocials>
                  {footerSocials.map(el => (
                     <SocialLinks key={el.id} to={el.link}>
                        <SocialIcon src={el.imgSrc}/>
                     </SocialLinks>
                  ))}
               </FooterSocials>
            </FooterSocialsContainer>

            <FooterLowerMid>
               <LegacyHeading>Old portfolio website:</LegacyHeading>
               <LegacyPortfolio to={"https://oyefuleoluwatayo.netlify.app"}>Oyefule Oluwatayo Portfolio Old</LegacyPortfolio>
            </FooterLowerMid>
            
            <FooterCopyright>
               <CopyRight>Copyright by © Oyefule Oluwatayo</CopyRight>
            </FooterCopyright>
         </FooterLower>
      </FooterContainer>
   )
}

export default Footer;
