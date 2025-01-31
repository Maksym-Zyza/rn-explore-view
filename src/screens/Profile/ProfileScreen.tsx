import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { NavRoutes, NavigatorProps } from "../../types/navigation";
import Placeholder from "../../components/Placeholder";
import Avatar from "../../components/Avatar";
import { SCREEN_WIDTH } from "../../variables";

const ProfileScreen: FC<NavigatorProps> = ({ navigation }) => {
  const { user } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Avatar />
      </View>

      <Text style={styles.title}>{`Hello ${user.login}!`}</Text>

      <Placeholder
        text="Let's start by creating new posts."
        route={NavRoutes.CreatePost}
        icon="add"
      />
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
  avatarWrapper: {
    position: "relative",
    width: SCREEN_WIDTH,
    height: "15%",
  },
  title: {
    margin: 16,
    fontSize: 24,
  },
  text: {
    fontSize: 16,
  },
});
