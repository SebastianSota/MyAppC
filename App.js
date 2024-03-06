import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import BottNav from "./screens/bottomtab";
import Login from "./screens/login";
import Splash from "./screens/splash";


const Stack = createStackNavigator();



App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name='Login' component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen name='Splash' component={Splash}
          options={{ headerShown: false }} />
        <Stack.Screen name='BottomTab' component={BottNav}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
