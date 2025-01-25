import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/LoginScreen";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";

const AuthNavigator = () => {
  const Stack = createStackNavigator();

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
        />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
