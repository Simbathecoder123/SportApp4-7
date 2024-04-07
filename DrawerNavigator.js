// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import React from "react"
// import MainScreen from '../Screens/Main';
// import DetailsScreen from '../Screens/Details';
// import IntroScreen from '../Screens/Introduction';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Drawer = createBottomTabNavigator();

// export default function DrawerNavigation(){
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator>
//             <Drawer.Screen name="Main Screen" component = {MainScreen}/>
//             <Drawer.Screen name="Details Screen" component = {DetailsScreen}/>
//             <Drawer.Screen name="Introduction Screen" component={IntroScreen}/>
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }











import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import{View,Text,Stylesheet} from 'react-native'
import DetailsScreen from "../Screens/Details.js"
import RegisterScreen from "../Screens/Register.js"

const Drawer= createDrawerNavigator()

const DrawerNavigator=()=>{

return(
<Drawer.Navigator headerShown={false}>
<Drawer.Screen name='Home' component={DetailsScreen}/>
<Drawer.Screen name='Register' component={RegisterScreen}/>

</Drawer.Navigator>

)

}
export default DrawerNavigator

//   npm install @react-navigation/native
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm install @react-navigation/drawer
