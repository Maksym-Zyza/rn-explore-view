import React, { FC } from "react";
import { colors } from "../../styles/global";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import LogoutButton from "../components/LogoutButton";
import MapScreen from "../screens/Map/MapScreen";
import { NavigatorProps } from "../types/navigator";
import PostsScreen from "../screens/Posts/PostsScreen";
import { Posts } from "../icons/Posts";
import Profile from "../icons/Profile";
import CreatePostsScreen from "../screens/CreatePosts/CreatePostsScreen";
import Plus from "../icons/Plus";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: FC<NavigatorProps> = ({ setIsAuth }) => {
  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Posts"
      screenOptions={({ navigation }) => ({
        tabBarLabel: "label",
        tabBarStyle: {
          display: "flex",
          paddingVertical: 16,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          title: "Posts",
          tabBarLabel: "Posts",
          tabBarIcon: ({ focused }) => <Posts />,
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={() => ({
          title: "Create Posts",
          tabBarLabel: "Create Posts",
          tabBarIcon: ({ focused }) => <Plus />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => <Profile />,
        })}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="map"
              size={32}
              color={focused ? colors.orange : "black"}
            />
          ),
        })}
      />

      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Profile",
          headerRightContainerStyle: { paddingRight: 8 },
          headerRight: () => <LogoutButton onPress={() => setIsAuth(false)} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={32}
              color={focused ? colors.orange : "black"}
            />
          ),
        })}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
