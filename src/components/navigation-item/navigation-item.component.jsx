import { NavigationItemContainer, NavigationItemSpan } from "./navigation-item.styles";

const NavigationItem = ({name}) => {
   return (
      <NavigationItemContainer to={`/${name}`}>
         <NavigationItemSpan>{name}</NavigationItemSpan>
      </NavigationItemContainer>
   )
};

export default NavigationItem;