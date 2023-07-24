import {FeaturedHeader} from './heading.style';

type HeaderProp = {
   title: string;
}

const Heading = ({title}: HeaderProp) => {
   return (
      <FeaturedHeader>{title}</FeaturedHeader>
   )
}

export default Heading;