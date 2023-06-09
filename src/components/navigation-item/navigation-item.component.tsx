import {
  NavigationItemContainer,
  NavigationItemContainerActive,
  NavigationItemSpan,
} from "./navigation-item.styles";

type NavProp = {
  name: string;
  navigationType?: string;
};

type NavType = {
   base: string;
   active: string
}

export const NAVIGATION_TYPE: NavType = {
  base: "base",
  active: "active",
}

const getNavigationType = ( navigationType = NAVIGATION_TYPE.base ) =>
  (
    {
    [NAVIGATION_TYPE.base]: NavigationItemContainer,
    [NAVIGATION_TYPE.active]: NavigationItemContainerActive,
    }[navigationType]
  );

const NavigationItem = ({ name, navigationType }: NavProp) => {
   const CustomNavConatiner = getNavigationType(navigationType);
  return (
    <CustomNavConatiner to={`/${name}`}>
      <NavigationItemSpan>{name}</NavigationItemSpan>
    </CustomNavConatiner>
  );
};

export default NavigationItem;
