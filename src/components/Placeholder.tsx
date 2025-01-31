import React, { FC } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/global";
import { NavRoutes, NavigationProps } from "../types/navigation";

type Props = {
  text: string;
  route?: NavRoutes;
  icon?: "add" | "map";
};

const Placeholder: FC<Props> = ({ text, route, icon }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{text}</Text>

      {route && (
        <TouchableOpacity
          style={styles.mapBtn}
          onPress={() => navigation.navigate(route)}
        >
          <Text style={styles.btnText}>Create New Post</Text>
          {icon && <Ionicons name={icon} size={32} color={colors.white} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light_gray,
    borderRadius: 20,
  },
  message: {
    fontSize: 18,
    color: colors.black_primary,
  },
  mapBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 40,
    gap: 8,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
    marginRight: 8,
  },
});

export default Placeholder;
