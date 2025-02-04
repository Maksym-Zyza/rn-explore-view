import React, { useState, useEffect, FC } from "react";
import * as Location from "expo-location";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Keyboard,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreenStyles";
import { colors } from "../../styles/global";
import { NavRoutes, NavigatorProps } from "../../types/navigation";
import ImagePiker from "../../components/ImagePiker";
import { useAppContext } from "../../hooks/useAppContext";
import { Post, PostKey } from "../../types/posts";
import Camera from "../../components/Camera";
import { useCameraPermission } from "../../hooks/useCameraPermission";

const CreatePostsScreen: FC<NavigatorProps> = ({ navigation }) => {
  const { posts, setPosts } = useAppContext();
  const { permission, requestPermission } = useCameraPermission();

  const initialPost = { photo: "", title: "", place: "" };
  const [post, setPost] = useState<Post>(initialPost);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const handlePostValue = (key: PostKey, value: string) => {
    setPost({ ...post, [key]: value });
  };

  const isAllowed = !!post.photo && !!post.title && !!post.place;

  const onSubmit = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const newPost = { ...post, coords };
    setPosts([...posts, newPost]);
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
          <Camera
            uri={post.photo}
            handlePostValue={handlePostValue}
            hasPermission={permission?.granted ?? false}
            requestPermission={requestPermission}
          />

          <Text style={styles.textUploade}>
            <ImagePiker setPhoto={handlePostValue}>
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
