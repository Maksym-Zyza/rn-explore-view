import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useAppContext } from "../hooks/useAppContext";

const AppNavigator = () => {
  const { isAuth } = useAppContext();

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        initialRouteName={isAuth ? "Auth" : "Main"}
      >
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
