import React, { FC } from "react";
import PostsScreen from "../screens/Posts/PostsScreen";
import { NavRoutes, NavigatorProps } from "../types/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../screens/Map/MapScreen";
import CommentsScreen from "../screens/Comments/CommentsScreen";

const PostsNavigator: FC<NavigatorProps> = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={NavRoutes.Posts}
      screenOptions={() => ({ headerShown: true })}
    >
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({ headerLeft: () => null })}
      />

      <Stack.Screen name={NavRoutes.Map} component={MapScreen} />
      <Stack.Screen name={NavRoutes.Comments} component={CommentsScreen} />
    </Stack.Navigator>
  );
};

export default PostsNavigator;
