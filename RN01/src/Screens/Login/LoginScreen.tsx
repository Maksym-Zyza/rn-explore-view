import React, { useState } from "react";
import { styles } from "./LoginScreenStyles";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FormState, RootStackParamList } from "../../types/auth";

const LoginScreen = ({ navigation }) => {
  const { params } = useRoute<RouteProp<RootStackParamList, "LoginScreen">>();
  const { setIsAuth, formValues } = params;

  const [formState, setFormState] = useState<FormState>({
    email: formValues?.email || "",
    password: formValues?.password || "",
    login: formValues?.login || "",
  });
  const [isSecurePass, setIsSecurePass] = useState(true);

  const handleChange = (key, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onLogin = () => {
    setIsAuth(true);
    navigation.navigate("Posts", formState);
    console.log("formData:", formState);
  };

  const showButton = (
    <TouchableOpacity onPress={() => setIsSecurePass(!isSecurePass)}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <>
        <Image
          source={require("../../../assets/main-img.png")}
          style={styles.image}
          resizeMode="cover"
        />

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Увійти</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={formState.email}
                autofocus={true}
                placeholder="Адреса електронної пошти"
                onTextChange={(value) => handleChange("email", value)}
              />

              <Input
                value={formState.password}
                placeholder={"Пароль"}
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={(value) => handleChange("password", value)}
                secureTextEntry={isSecurePass}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Увійти
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Немає акаунту?
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate("Registration", formState)
                    }
                  >
                    <Text style={styles.signUpText}> Зареєструватися</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </Pressable>
  );
};

export default LoginScreen;
