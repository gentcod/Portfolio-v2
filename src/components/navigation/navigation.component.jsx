import { Outlet } from 'react-router-dom';

import Logo from '../logo/logo.component';
import NavigationItem from '../navigation-item/navigation-item.component';

import { NavigationContainer, NavigationLinks } from './navigation.styles';

const navData = [
   {
      id: 0,
      name: "home"
   },
   {
      id: 1,
      name: "contact"
   },
   {
      id: 2,
      name: "about"
   },
   {
      id: 3,
      name: "explore"
   },
]

const Navigation = () => {
   return (
      <>
         <NavigationContainer>
            <Logo/>
            <NavigationLinks>
               {
                  navData.map(data => <NavigationItem key={data.id} name={data.name}/>)
               }
            </NavigationLinks>
         </NavigationContainer>
         <Outlet/>
      </>
   )
}

export default Navigation;

//Write logic to determine the present page and decide