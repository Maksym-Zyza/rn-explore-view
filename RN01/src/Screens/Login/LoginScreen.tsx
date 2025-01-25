import React, { FC, useState } from "react";
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
import { FormStateKeys } from "../../types/auth";
import { useAppContext } from "../../hooks/useAppContext";
import { NavigatorProps } from "../../types/navigation";
import { validateForm } from "./helper";

const LoginScreen: FC<NavigatorProps> = ({ navigation }) => {
  const { setIsAuth, formState, setFormState } = useAppContext();
  const [isSecurePass, setIsSecurePass] = useState(true);

  const handleChange = (key: FormStateKeys, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const onLogin = () => {
    const error = validateForm(formState);
    validateForm(formState, navigation)
      ? alert(error)
      : (setIsAuth(true), navigation.navigate("Main", formState));
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
