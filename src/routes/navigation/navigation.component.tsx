import { Outlet, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeContext } from "../../context/ThemeContext";

import Footer from "../../components/footer/footer.component";
import Logo from "../../components/logo/logo.component";
import NavigationItem, {
  NAVIGATION_TYPE,
} from "../../components/navigation-item/navigation-item.component";

import { 
  NavigationContainer, 
  NavBrandGroup,
  NavigationLinks, 
  ContactNavButton,
  ThemeToggleBtn 
} from "./navigation.styles";

type NavData = {
  id: number;
  name: string;
}[];

const navData: NavData = [
  { id: 0, name: "about" },
  { id: 1, name: "explore" },
  { id: 2, name: "blogs" },
  { id: 3, name: "contact" },
];

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <>
      <NavigationContainer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <NavBrandGroup>
          <Logo />
        </NavBrandGroup>

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
          <ContactNavButton
            to="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </ContactNavButton>
          <ThemeToggleBtn 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {themeMode === 'dark' ? <FiSun /> : <FiMoon />}
          </ThemeToggleBtn>
        </NavigationLinks>
      </NavigationContainer>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Navigation;