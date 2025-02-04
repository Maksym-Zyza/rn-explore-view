import { FC, useState } from "react";
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
  Alert,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { styles } from "./RegistrationScreenStyles";
import { User, UserKeys } from "../../types/auth";
import { NavigatorProps } from "../../types/navigation";
import { validateForm } from "../Login/helper";
import Avatar from "../../components/Avatar";
import { registerDB } from "../../utils/auth";
import { initialUserData } from "../../utils/initialData";

const RegistrationScreen: FC<NavigatorProps> = ({ navigation }) => {
  const [formData, setFormData] = useState<User>(initialUserData);
  const [error, setError] = useState("");
  const [isSecurePass, setIsSecurePass] = useState(true);

  const handleChange = (key: UserKeys, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onRegister = () => {
    const validationError = validateForm(formData);
    validationError
      ? Alert.alert(validationError)
      : registerDB(formData, setError);

    error && Alert.alert(error);
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
            <Avatar />

            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={formData.login}
                autofocus={true}
                placeholder="Логін"
                onTextChange={(value) => handleChange("login", value)}
              />

              <Input
                value={formData.email}
                autofocus={false}
                placeholder="Адреса електронної пошти"
                onTextChange={(value) => handleChange("email", value)}
              />

              <Input
                value={formData.password}
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
                    onPress={() => navigation.navigate("Login")}
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
