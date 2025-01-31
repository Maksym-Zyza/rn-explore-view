import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import LogoutButton from "../components/LogoutButton";
import CreatePostsScreen from "../screens/CreatePosts/CreatePostsScreen";
import { useAppContext } from "../hooks/useAppContext";
import TabIcon from "../components/TabIcon";
import { NavRoutes, NavigatorProps } from "../types/navigation";
import { styles } from "./styles";
import PostsNavigator from "./PostsNavigator";

const BottomTabNavigator: FC<NavigatorProps> = ({ navigation }) => {
  const { setIsAuth, tabBarShow } = useAppContext();
  const Tab = createBottomTabNavigator();

  const onLogout = () => {
    navigation.navigate(NavRoutes.Auth);
    setIsAuth(false);
  };

  return (
    <Tab.Navigator
      initialRouteName={NavRoutes.Profile}
      backBehavior="history"
      screenOptions={({ navigation }) => ({
        headerRightContainerStyle: { paddingRight: "4%" },
        headerLeftContainerStyle: { paddingLeft: "4%" },
        headerStyle: styles.tabHeader,
        headerTitleStyle: styles.tabHeaderTitle,
        tabBarStyle: styles.tabBar,
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
          tabBarStyle: { display: tabBarShow ? "flex" : "none" },
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
          headerRight: () => <LogoutButton onPress={onLogout} />,
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused} icon="Profile" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
