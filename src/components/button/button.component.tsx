import { ButtonBody, ButtonContainer } from "./button.style";

type ButtonProp = {
   value: string;
   color?: string;
   bgColor?: string;
   borderColor?: string;
}

const Button = ({value, color='white', bgColor='transparent', borderColor='#45a25a'} : ButtonProp) => {
   return (
      <ButtonContainer>
         <ButtonBody borderColor={borderColor} color={color} bgColor={bgColor}>{value}</ButtonBody>
      </ButtonContainer>
   )
}

export default Button;