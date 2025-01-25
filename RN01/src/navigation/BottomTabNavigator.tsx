import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import LogoutButton from "../components/LogoutButton";
import PostsScreen from "../screens/Posts/PostsScreen";
import CreatePostsScreen from "../screens/CreatePosts/CreatePostsScreen";
import { useAppContext } from "../hooks/useAppContext";
import TabIcon from "../components/TabIcon";
import { NavigatorProps } from "../types/navigation";
import { styles } from "./styles";

const BottomTabNavigator: FC<NavigatorProps> = ({ navigation }) => {
  const { setIsAuth } = useAppContext();
  const Tab = createBottomTabNavigator();

  const onLogout = () => {
    navigation.navigate("Auth");
    setIsAuth(false);
  };

  return (
    <Tab.Navigator
      initialRouteName="Profile"
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
        name="Posts"
        component={PostsScreen}
        options={() => ({
          tabBarLabel: "Posts",
          tabBarIcon: ({ focused }) => (
            <TabIcon active={focused} icon="Posts" />
          ),
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={() => ({
          title: "Create Posts",
          tabBarIcon: ({ focused }) => <TabIcon active={focused} icon="Plus" />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: "Profile",
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
