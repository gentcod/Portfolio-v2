import { BoxContainer, BoxText, TechIcon } from './tech-stack.styles';

type TechStackProp = {
   text: string,
   color?: string,
   bgColor?: string,
   height?: number,
   width?: number,
   img: string,
}

const TechStack = ({text, img} : TechStackProp) => {
   return (
      <BoxContainer
         initial={{ scale: 0.8, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.4 }}
      >
         <TechIcon src={img} alt={text} />
         <BoxText>{text}</BoxText>
      </BoxContainer>
   )
};

export default TechStack;