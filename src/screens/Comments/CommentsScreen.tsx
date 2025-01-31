import { StyleSheet, View } from "react-native";
import React from "react";
import Placeholder from "../../components/Placeholder";
import { useHideTabBar } from "../../hooks/useHideTabBar";

const CommentsScreen = () => {
  useHideTabBar();
  return (
    <View>
      <Placeholder text="CommentsScreen" />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({});
