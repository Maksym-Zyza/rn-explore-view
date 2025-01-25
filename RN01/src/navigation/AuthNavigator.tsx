import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/LoginScreen";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import { NavRoutes } from "../types/navigation";

const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName={NavRoutes.Registration}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={NavRoutes.Login}
          component={LoginScreen}
          options={{ title: NavRoutes.Login }}
        />
        <Stack.Screen
          name={NavRoutes.Registration}
          component={RegistrationScreen}
          options={{ title: NavRoutes.Registration }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
