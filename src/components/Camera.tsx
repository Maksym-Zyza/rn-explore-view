import React, { FC, useRef } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Text,
} from "react-native";
import { CameraView, PermissionResponse } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import { PostKey } from "../types/posts";
import { colors } from "../styles/global";

type Props = {
  uri: string;
  handlePostValue: (key: PostKey, value: string) => void;
  hasPermission: boolean;
  requestPermission: () => Promise<PermissionResponse>;
};

const Camera: FC<Props> = ({
  uri,
  handlePostValue,
  hasPermission,
  requestPermission,
}) => {
  const camera = useRef<CameraView | null>(null);

  if (!hasPermission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!hasPermission) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (!camera) return;

    const cameraRes = await camera?.current?.takePictureAsync();
    if (!cameraRes) return;

    await MediaLibrary.saveToLibraryAsync(cameraRes?.uri);
    handlePostValue("photo", cameraRes?.uri);
  };

  return (
    <View style={styles.cameraContainer}>
      <CameraView style={styles.camera} ref={camera}>
        {uri && (
          <View style={styles.takePhotoContainer}>
            <Image style={styles.camera} source={{ uri }} />
          </View>
        )}

        <TouchableOpacity
          style={{
            ...styles.photoBtnContainer,
            backgroundColor: uri ? colors.light_gray : colors.white,
          }}
          activeOpacity={0.8}
          onPress={takePicture}
        >
          <MaterialIcons
            name="photo-camera"
            size={24}
            color={uri ? colors.white : colors.text_gray}
          />
        </TouchableOpacity>
      </CameraView>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.black_primary,
    marginBottom: 8,
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    objectFit: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  photoBtnContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});
