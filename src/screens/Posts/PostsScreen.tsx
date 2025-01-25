import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavRoutes, NavigatorProps } from "../../types/navigation";
import { colors } from "../../../styles/global";
import Ionicons from "@expo/vector-icons/Ionicons";

const PostsScreen: FC<NavigatorProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostsScreen</Text>
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => navigation.navigate(NavRoutes.Map)}
      >
        <Text style={styles.btnText}>Go to Map</Text>
        <Ionicons name="map" size={32} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  mapBtn: {
    margin: 20,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: colors.orange,
    borderRadius: 40,
    gap: 20,
  },
  btnText: {
    fontSize: 20,
    color: colors.white,
  },
});
