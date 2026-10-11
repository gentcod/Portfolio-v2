import { ButtonBody, ButtonContainer } from "./button.style";

type ButtonProp = {
   link: string;
   value: string;
}

const Button = ({ link, value }: ButtonProp) => {
   return (
      <ButtonContainer>
         <ButtonBody href={link}>{value}</ButtonBody>
      </ButtonContainer>
   );
};

export default Button;