import { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { styles } from "./RegistrationScreenStyles";
import Plus from "../../icons/Plus";
import { FormStateKeys } from "../../types/auth";
import { NavRoutes, NavigatorProps } from "../../types/navigation";
import { useAppContext } from "../../hooks/useAppContext";
import { validateForm } from "../Login/helper";

const RegistrationScreen: FC<NavigatorProps> = ({ navigation }) => {
  const { isAuth, formState, setFormState } = useAppContext();
  const [isSecurePass, setIsSecurePass] = useState(true);

  useEffect(() => {
    isAuth ? navigation.navigate(NavRoutes.Auth) : setFormState(formState);
  }, []);

  const handleChange = (key: FormStateKeys, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const handleAddAvatar = () => {
    console.log("AddAvatar");
  };

  const onRegister = () => {
    const error = validateForm(formState);
    error ? alert(error) : navigation.navigate("Login", formState);
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
          resizeMode="cover"
          style={styles.image}
        />

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.avatar}>
              <Pressable onPress={handleAddAvatar} style={styles.plusBtn}>
                <Plus />
              </Pressable>
            </View>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={formState.login}
                autofocus={true}
                placeholder="Логін"
                onTextChange={(value) => handleChange("login", value)}
              />

              <Input
                value={formState.email}
                autofocus={false}
                placeholder="Адреса електронної пошти"
                onTextChange={(value) => handleChange("email", value)}
              />

              <Input
                value={formState.password}
                placeholder="Пароль"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={(value) => handleChange("password", value)}
                secureTextEntry={isSecurePass}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onRegister}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Зареєстуватися
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунт?
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("Login", formState)}
                  >
                    <Text style={styles.signUpText}> Увійти</Text>
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

export default RegistrationScreen;
