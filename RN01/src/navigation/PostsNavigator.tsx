import React, { FC } from "react";
import PostsScreen from "../screens/Posts/PostsScreen";
import { NavigatorProps } from "../types/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../screens/Map/MapScreen";

const PostsNavigator: FC<NavigatorProps> = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={() => ({ headerShown: true })}
    >
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({ headerLeft: () => null })}
      />

      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default PostsNavigator;
