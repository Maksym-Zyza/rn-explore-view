import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
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
  Alert,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { UserKeys } from "../../types/auth";
import { NavRoutes, NavigatorProps } from "../../types/navigation";
import { User } from "./helper";
import { loginDB } from "../../utils/auth";
import { initialUserData } from "../../utils/initialData";

const LoginScreen: FC<NavigatorProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<User>(initialUserData);
  const [isSecurePass, setIsSecurePass] = useState(true);

  const handleChange = (key: UserKeys, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onLogin = async () => {
    try {
      const { email, password } = formData;
      await loginDB({ email, password }, dispatch);
    } catch (err) {
      Alert.alert("err");
      console.error("Login error:", err);
    }
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
                value={formData.email}
                autofocus={true}
                placeholder="Адреса електронної пошти"
                onTextChange={(value) => handleChange("email", value)}
              />

              <Input
                value={formData.password}
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
                    onPress={() => navigation.navigate(NavRoutes.Registration)}
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
