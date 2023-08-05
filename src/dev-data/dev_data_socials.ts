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
   id: number,
   name: string,
   link: string,
   imgSrc: string
}[]

export const socials : Socials = [
   {
      id: 0,
      name: "GitHub",
      link: "https://www.github.com/gentcod",
      imgSrc: "icons/github-svgrepo-com.svg",
   },
   {
      id: 1,
      name: "Email",
      link: `mailto:drelanorgent@gmail.com?subject=${mailSubject}&body=${mailBodySocial}`,
      imgSrc: "icons/mail-svgrepo-com.svg",
   },
   {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/oyefule-oluwatayo",
      imgSrc: "icons/linkedin-svgrepo-com.svg",
   },
   {
      id: 3,
      name: "Twitter",
      link: "https://www.twitter.com/gentcod",
      imgSrc: "icons/twitter-svgrepo-com.svg",
   },
   {
      id: 4,
      name: "Facebook",
      link: "https://www.facebook.com/oyefule.o.oluwademilade",
      imgSrc: "icons/facebook-svgrepo-com.svg",
   },
   {
      id: 5,
      name: "Instagram",
      link: "https://www.instagram.com/gentcod",
      imgSrc: "icons/instagram.svg",
   },
]