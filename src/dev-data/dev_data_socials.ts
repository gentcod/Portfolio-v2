export const mailSubject: string = 'JOB OFFER';
// const mailBody = 'Hello Oyefule, I would like to hire you'
export const mailBodySocial: string = 'Hello Oyefule, I viewed your portfolio and would like to get in touch with you'

export interface ISocial {
   id: number,
   name: string,
   link: string,
   imgSrc: string
}

export interface EnumSocials extends Array<ISocial>{}

type Socials = {
   id: number;
   name: string;
   link: string;
   imgSrc: string;
   linkLabel: string;
}[]

export const socials : Socials = [
   {
      id: 0,
      name: "GitHub",
      link: "https://www.github.com/gentcod",
      imgSrc: "icons/github-svgrepo-com.svg",
      linkLabel: "Github profile - Gentcod",
   },
   {
      id: 1,
      name: "Email",
      link: `mailto:oyefuleoluwatayo@gmail.com?subject=${mailSubject}&body=${mailBodySocial}`,
      imgSrc: "icons/mail-svgrepo-com.svg",
      linkLabel: "Email address",
   },
   {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/oyefule-oluwatayo",
      imgSrc: "icons/linkedin-svgrepo-com.svg",
      linkLabel: "LinkedIn Profile - Oyefule Oluwatayo",
   },
   {
      id: 3,
      name: "Twitter",
      link: "https://www.twitter.com/gentcod",
      imgSrc: "icons/twitter-svgrepo-com.svg",
      linkLabel: "Twitter profile - Gentcod",
   },
   {
      id: 4,
      name: "Facebook",
      link: "https://www.facebook.com/oyefule.o.oluwademilade",
      imgSrc: "icons/facebook-svgrepo-com.svg",
      linkLabel: "Facebook profile - Oyefule Oluwatayo",
   },
   {
      id: 5,
      name: "Instagram",
      link: "https://www.instagram.com/gentcod",
      imgSrc: "icons/instagram.svg",
      linkLabel: "Instagram profile - Gentcod",
   },
]