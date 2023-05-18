import { Box, BoxText, BoxContainer } from './tech-stack.styles';

type TechStackProp = {
   text: string,
   color: string,
   bgColor: string,
   height: number,
   width: number,
   img: string,
}

const TechStack = ({text, color, bgColor, height, width, img} : TechStackProp) => {
   return (
      <BoxContainer sizeH={height} sizeW={width}>
         <Box backgroundColor={bgColor} imgSrc={img}>
            <BoxText textColor={color}>{text}</BoxText>
         </Box>
      </BoxContainer>
   )
};

export default TechStack;