import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CreatePostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});
