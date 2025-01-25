import { ParamListBase, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { FormState } from "./auth";

export type LoginScreenParams = RouteProp<
  { LoginScreen: FormState },
  "LoginScreen"
>;

export type NavigationProps = BottomTabNavigationProp<
  ParamListBase,
  string,
  undefined
>;

export type NavigatorProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationProps;
};
