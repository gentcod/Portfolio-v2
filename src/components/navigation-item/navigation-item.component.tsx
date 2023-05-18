import { NavigationItemContainer, NavigationItemSpan } from "./navigation-item.styles";

type NavProp = {
   name: string
}

const NavigationItem = ({name } : NavProp) => {
   return (
      <NavigationItemContainer to={`/${name}`}>
         <NavigationItemSpan>{name}</NavigationItemSpan>
      </NavigationItemContainer>
   )
};

export default NavigationItem;