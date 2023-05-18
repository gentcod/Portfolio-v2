import { Outlet } from 'react-router-dom';

import Logo from '../logo/logo.component';
import NavigationItem from '../navigation-item/navigation-item.component';

import { NavigationContainer, NavigationLinks } from './navigation.styles';

type NavData = {
   id: number,
   name: string
}[]

const navData : NavData = [
   {
      id: 0,
      name: "contact"
   },
   {
      id: 1,
      name: "about"
   },
   {
      id: 2,
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