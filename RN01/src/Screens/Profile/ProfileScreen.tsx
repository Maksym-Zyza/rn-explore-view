import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { NavigatorProps } from "../../types/navigation";

const ProfileScreen: FC<NavigatorProps> = ({ navigation }) => {
  const { formState } = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text>Hello {formState.login}!</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
