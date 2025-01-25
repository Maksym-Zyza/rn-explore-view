import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { NavRoutes } from "../types/navigation";

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavRoutes.Auth}>
        <Stack.Screen
          name={NavRoutes.Auth}
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavRoutes.Main}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
