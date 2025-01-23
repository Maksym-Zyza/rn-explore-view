import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen = ({ route }) => {
  const { email, login, password } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text>Email: {email || "No email provided"}</Text>
      <Text>Login: {login || "No login provided"}</Text>
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
