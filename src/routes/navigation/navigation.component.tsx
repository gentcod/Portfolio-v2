import { Outlet, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeContext } from "../../context/ThemeContext";

import Footer from "../../components/footer/footer.component";
import Logo from "../../components/logo/logo.component";
import NavigationItem, {
  NAVIGATION_TYPE,
} from "../../components/navigation-item/navigation-item.component";

import { NavigationContainer, NavigationLinks, ThemeToggleBtn } from "./navigation.styles";

type NavData = {
  id: number;
  name: string;
}[];

const navData: NavData = [
  { id: 0, name: "contact" },
  { id: 1, name: "about" },
  { id: 2, name: "explore" },
  { id: 3, name: "blogs" },
];

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <>
      <NavigationContainer
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
          <ThemeToggleBtn 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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