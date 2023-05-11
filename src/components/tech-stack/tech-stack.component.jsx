import { Box, BoxText, BoxContainer } from './tech-stack.styles';

const TechStack = ({text, color, bgColor, height, width}) => {
   return (
      <BoxContainer sizeH={height} sizeW={width}>
         <Box backgroundColor={bgColor}>
            <BoxText textColor={color}>{text}</BoxText>
         </Box>
      </BoxContainer>
   )
};

export default TechStack;