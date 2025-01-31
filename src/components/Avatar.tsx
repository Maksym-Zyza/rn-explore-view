import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImagePiker from "./ImagePiker";
import Plus from "../icons/Plus";
import { useAppContext } from "../hooks/useAppContext";
import { UserKeys } from "../types/auth";
import { SCREEN_WIDTH } from "../variables";
import { colors } from "../styles/global";

const Avatar = () => {
  const { user, setUser } = useAppContext();

  const handleAddPhoto = (key: UserKeys, value: string) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <View style={styles.avatar}>
      <Image style={styles.postPhoto} source={{ uri: user.photo || "" }} />
      <Pressable style={styles.plusBtn}>
        <ImagePiker setPhoto={handleAddPhoto}>
          <Plus />
        </ImagePiker>
      </Pressable>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: -60,
    left: SCREEN_WIDTH / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.light_gray,
  },
  postPhoto: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 8,
  },
  plusBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
});
