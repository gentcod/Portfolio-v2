import { HeaderContainer, EyebrowTag, FeaturedHeader } from './heading.style';

type HeaderProp = {
   title: string;
   eyebrow?: string;
}

const Heading = ({ title, eyebrow }: HeaderProp) => {
   return (
      <HeaderContainer>
         {eyebrow && <EyebrowTag>{eyebrow}</EyebrowTag>}
         <FeaturedHeader>{title}</FeaturedHeader>
      </HeaderContainer>
   );
};

export default Heading;