import {createStackNavigator} from "@react-navigation/stack"
import React from "react";
import RegisterScreen from "../Screens/Register";
import LoginScreen from "../Screens/Login";

const Stack = createStackNavigator();

export default class myStack extends React.Component {

    render(){
        return (
            <Stack.Navigator>
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          );
    }

}