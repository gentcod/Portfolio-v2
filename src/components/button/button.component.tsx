import { ButtonBody, ButtonContainer } from "./button.style";

type ButtonProp = {
   link: string;
   value: string;
   color?: string;
   bgColor?: string;
   borderColor?: string;
}

const Button = ({link, value, color='white', bgColor='transparent', borderColor='#45a25a'} : ButtonProp) => {
   return (
      <ButtonContainer>
         <ButtonBody href={link} borderColor={borderColor} color={color} bgColor={bgColor}>{value}</ButtonBody>
      </ButtonContainer>
   )
}

export default Button;