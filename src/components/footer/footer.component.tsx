import Button from "../button/button.component";

import { FooterContainer, FooterImage, FooterImageContainer, FooterImageLine, FooterImageLineContainer, FooterLower, FooterSocials, FooterUpper, SocialIcon, SocialLinks } from "./footer.style";


type SocialsProps = {
   id: number;
   imgSrc: string;
   link: string;
}[];

const footerSocials: SocialsProps = [
   {
      id: 1,
      imgSrc: 'icons/facebook-svgrepo-com.svg',
      link: '',
   },

   {
      id: 2,
      imgSrc: 'icons/instagram.svg',
      link: '',
   },

   {
      id: 3,
      imgSrc: 'icons/github-svgrepo-com.svg',
      link: '',
   },

   {
      id: 4,
      imgSrc: 'icons/twitter-svgrepo-com.svg',
      link: '',
   },

   {
      id: 5,
      imgSrc: 'icons/linkedin-svgrepo-com.svg',
      link: '',
   },
]



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
            <FooterSocials>
               {footerSocials.map(el => (
                  <SocialLinks key={el.id} to={el.link}>
                     <SocialIcon src={el.imgSrc}/>
                  </SocialLinks>
               ))}
            </FooterSocials>
         </FooterLower>
      </FooterContainer>
   )
}

export default Footer;
