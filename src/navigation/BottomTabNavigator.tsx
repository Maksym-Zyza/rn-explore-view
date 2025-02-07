import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import LogoutButton from "../components/LogoutButton";
import CreatePostsScreen from "../screens/CreatePosts/CreatePostsScreen";
import { useAppContext } from "../hooks/useAppContext";
import TabIcon from "../components/TabIcon";
import { NavRoutes } from "../types/navigation";
import { styles } from "./styles";
import PostsNavigator from "./PostsNavigator";

const BottomTabNavigator = () => {
  const { tabBarShow } = useAppContext();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={NavRoutes.Profile}
      backBehavior="history"
      screenOptions={({ navigation }) => ({
        headerRightContainerStyle: { paddingRight: "4%" },
        headerLeftContainerStyle: { paddingLeft: "4%" },
        headerStyle: styles.tabHeader,
        headerTitleStyle: styles.tabHeaderTitle,
        tabBarStyle: {
          ...styles.tabBar,
          display: tabBarShow ? "flex" : "none",
        },
        tabBarItemStyle: styles.tabIcon,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name={NavRoutes.Posts}
        component={PostsNavigator}
        options={() => ({
          tabBarLabel: NavRoutes.Posts,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused} icon="Posts" />
          ),
        })}
      />
      <Tab.Screen
        name={NavRoutes.CreatePost}
        component={CreatePostsScreen}
        options={() => ({
          title: NavRoutes.CreatePost,
          tabBarIcon: ({ focused }) => <TabIcon active={focused} icon="Plus" />,
        })}
      />
      <Tab.Screen
        name={NavRoutes.Profile}
        component={ProfileScreen}
        options={() => ({
          title: NavRoutes.Profile,
          headerRight: () => <LogoutButton />,
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused} icon="Profile" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
