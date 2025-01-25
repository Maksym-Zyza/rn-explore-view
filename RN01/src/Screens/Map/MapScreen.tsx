import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MapScreen</Text>
    </View>
  );
};

export default MapScreen;

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
