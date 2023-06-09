import { Outlet, useLocation } from "react-router-dom";

import Footer from "../../components/footer/footer.component";
import Logo from "../../components/logo/logo.component";
import NavigationItem, {
  NAVIGATION_TYPE,
} from "../../components/navigation-item/navigation-item.component";

import { NavigationContainer, NavigationLinks } from "./navigation.styles";

type NavData = {
  id: number;
  name: string;
}[];

const navData: NavData = [
  {
    id: 0,
    name: "contact",
  },
  {
    id: 1,
    name: "about",
  },
  {
    id: 2,
    name: "explore",
  },
];

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <>
      <NavigationContainer>
        <Logo />
        <NavigationLinks>
          {navData.map((data) =>
            path === data.name ? (
              <NavigationItem
                key={data.id}
                name={data.name}
                navigationType={NAVIGATION_TYPE.active}
              />
            ) : (
              <NavigationItem key={data.id} name={data.name} />
            )
          )}
        </NavigationLinks>
      </NavigationContainer>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Navigation;

//Write logic to determine the present page and decide
