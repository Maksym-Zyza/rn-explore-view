import React, { useState, useRef, useEffect, FC } from "react";
import * as MediaLibrary from "expo-media-library";
// import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  Platform,
  Button,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreenStyles";
import { colors } from "../../styles/global";
import { NavRoutes, NavigatorProps } from "../../types/navigation";
import ImagePiker from "../../components/ImagePiker";
import { useAppContext } from "../../hooks/useAppContext";
import { Post, PostKey } from "../../types/posts";

const CreatePostsScreen: FC<NavigatorProps> = ({ navigation }) => {
  const { posts, setPosts } = useAppContext();
  const initialPost = { photo: "", title: "", place: "" };
  const [post, setPost] = useState<Post>(initialPost);

  const [permission, requestPermission] = useCameraPermissions();
  const camera = useRef<CameraView | null>(null);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }
  //   })();
  // }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
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

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const handlePostValue = (key: PostKey, value: string) => {
    setPost({ ...post, [key]: value });
  };

  const takePicture = async () => {
    if (!camera) return;

    const cameraRes = await camera?.current?.takePictureAsync();
    if (!cameraRes) return;

    await MediaLibrary.saveToLibraryAsync(cameraRes?.uri);
    handlePostValue("photo", cameraRes?.uri);
  };

  const isAllowed = !!post.photo && !!post.title && !!post.place;

  const onSubmit = async () => {
    // const location = await Location.getCurrentPositionAsync({});
    // const coords = {
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // };

    setPosts([...posts, post]);
    navigation.navigate(NavRoutes.Posts);
    onReset();
  };

  const onReset = async () => {
    setPost(initialPost);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.createPostsContainer}>
        <View>
          <View style={styles.cameraContainer}>
            <CameraView style={styles.camera} ref={camera}>
              {post.photo && (
                <View style={styles.takePhotoContainer}>
                  <Image style={styles.camera} source={{ uri: post.photo }} />
                </View>
              )}
              <TouchableOpacity
                style={{
                  ...styles.photoBtnContainer,
                  backgroundColor: post.photo
                    ? colors.light_gray
                    : colors.white,
                }}
                activeOpacity={0.8}
                onPress={takePicture}
              >
                <MaterialIcons
                  name="photo-camera"
                  size={24}
                  color={post.photo ? colors.white : colors.text_gray}
                />
              </TouchableOpacity>
            </CameraView>
          </View>
          <Text style={styles.textUploade}>
            <ImagePiker handlePostValue={handlePostValue}>
              <Text style={[styles.btnText, styles.grayText]}>
                Завантажте фото
              </Text>
            </ImagePiker>
          </Text>

          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.createPostInput}
              placeholder="Назва..."
              placeholderTextColor={colors.text_gray}
              value={post.title}
              onChangeText={(text) => handlePostValue("title", text)}
            />
            <View style={{ position: "relative" }}>
              <Ionicons
                name="location-outline"
                size={24}
                color={colors.text_gray}
                style={styles.locationIcon}
              />
              <TextInput
                style={{ ...styles.createPostInput, paddingLeft: 28 }}
                placeholder="Місцевість..."
                placeholderTextColor={colors.text_gray}
                value={post.place}
                onChangeText={(text) => handlePostValue("place", text)}
              />
            </View>
            <View
              style={{
                ...styles.createBtn,
                backgroundColor: isAllowed ? colors.orange : colors.light_gray,
              }}
            >
              <TouchableOpacity disabled={!isAllowed} onPress={onSubmit}>
                <Text
                  style={{
                    ...styles.createBtnText,
                    color: isAllowed ? colors.white : colors.text_gray,
                  }}
                >
                  Опубліковати
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.resetBtn}>
          <TouchableOpacity style={styles.resetBtn} onPress={onReset}>
            <Feather name="trash-2" size={24} color={colors.text_gray} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
