import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/LoginScreen";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import { NavigatorProps } from "../types/navigator";

const Stack = createStackNavigator();

const AuthNavigator: FC<NavigatorProps> = ({ setIsAuth }) => {
  return (
    <>
      <Stack.Navigator
        id={undefined}
        initialRouteName={"Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
          initialParams={{ setIsAuth }}
        />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
