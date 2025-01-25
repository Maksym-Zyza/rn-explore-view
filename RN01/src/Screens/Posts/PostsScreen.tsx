import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostsScreen</Text>
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
});
