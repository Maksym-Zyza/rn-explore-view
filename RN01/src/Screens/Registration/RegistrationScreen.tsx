import { useState } from "react";
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
import { useRoute, RouteProp } from "@react-navigation/native";

type FormState = {
  email: string;
  password: string;
  login: string;
};

type RootStackParamList = {
  LoginScreen: FormState;
};

const RegistrationScreen = ({ navigation }) => {
  const { params } = useRoute<RouteProp<RootStackParamList, "LoginScreen">>();

  const [isSecurePass, setIsSecurePass] = useState(true);
  const [formState, setFormState] = useState<FormState>({
    email: params?.email || "",
    password: params?.password || "",
    login: params?.login || "",
  });

  const handleChange = (key, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleAddAvatar = () => {
    console.log("AddAvatar");
  };

  const onLogin = () => {
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
              <Plus style={styles.plusBtn} onPress={handleAddAvatar} />
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
              <Button onPress={onLogin}>
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
