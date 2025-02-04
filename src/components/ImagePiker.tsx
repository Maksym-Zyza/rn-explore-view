import React, { FC, ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

type Props = {
  setPhoto: (key: "photo", value: string) => void;
  children: ReactNode;
  // setSelectedImg?: ()
};

const ImagePiker: FC<Props> = ({ children, setPhoto }) => {
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
      quality: 0.3,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      setPhoto("photo", uri);
    }
  };

  return <TouchableOpacity onPress={pickImage}>{children}</TouchableOpacity>;
};

export default ImagePiker;

const styles = StyleSheet.create({});
