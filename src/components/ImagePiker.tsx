import React, { FC, ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { PostKey } from "../types/posts";

type Props = {
  handlePostValue: (key: PostKey, value: string) => void;
  children: ReactNode;
};

const ImagePiker: FC<Props> = ({ children, handlePostValue }) => {
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      handlePostValue("photo", uri);
    }
  };

  return <TouchableOpacity onPress={pickImage}>{children}</TouchableOpacity>;
};

export default ImagePiker;

const styles = StyleSheet.create({});
