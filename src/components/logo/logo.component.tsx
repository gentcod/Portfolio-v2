import { LogoContainer, LogoName } from './logo.styles';

const Logo = () => {
   return (
      <LogoContainer 
         to={'/'}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
      >
            <LogoName>Oye<span>.</span></LogoName>
      </LogoContainer>
   )
}

export default Logo;