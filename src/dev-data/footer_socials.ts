type SocialsProps = {
   id: number;
   imgSrc: string;
   link: string;
   linkLabel: string;
}[];

export const footerSocials: SocialsProps = [
   {
      id: 1,
      imgSrc: 'icons/fb_color.svg',
      link: 'https://www.facebook.com/oyefule.o.oluwademilade',
      linkLabel: "Facebook profile - Oyefule Oluwatayo",
   },

   {
      id: 2,
      imgSrc: 'icons/instagram_color.svg',
      link: 'https://www.instagram.com/gentcod',
      linkLabel: "Instagram profile - Gentcod",
   },

   {
      id: 3,
      imgSrc: 'icons/github-svgrepo-com.svg',
      link: 'https://www.github.com/gentcod',
      linkLabel: "Github profile - Gentcod",
   },

   {
      id: 4,
      imgSrc: 'icons/twitter_color.svg',
      link: 'https://www.twitter.com/gentcod',
      linkLabel: "Twitter profile - Gentcod",
   },

   {
      id: 5,
      imgSrc: 'icons/linkedin_color.svg',
      link: 'https://www.linkedin.com/in/oyefule-oluwatayo',
      linkLabel: "LinkedIn Profile - Oyefule Oluwatayo",
   },
]