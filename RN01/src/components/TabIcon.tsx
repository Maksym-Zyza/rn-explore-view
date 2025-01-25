import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from "../../styles/global";

type ActiveTabProps = {
  active: boolean;
  icon: "Posts" | "Profile" | "Plus";
};

const TabIcon: React.FC<ActiveTabProps> = ({ active, icon }) => {
  const color = active ? colors.white : colors.black_primary;

  const iconsMap = {
    Posts: <AntDesign name="appstore-o" size={24} color={color} />,
    Plus: <AntDesign name="plus" size={24} color={color} />,
    Profile: <Feather name="user" size={24} color={color} />,
  };

  const renderIcon = () => iconsMap[icon] || null;

  return <View style={active ? styles.active : null}>{renderIcon()}</View>;
};

export default TabIcon;

const styles = StyleSheet.create({
  active: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
  },
});
