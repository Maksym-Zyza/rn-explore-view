import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-SemiBoldItalic": require("./assets/fonts/Roboto-SemiBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hello React Native!</Text>
        <Button title="Button" onPress={() => console.log("Button")} />

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.opacity]}
          onPress={() => console.log("Pressable")}
        >
          <Text>Pressable</Text>
        </Pressable>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Pressable")}
        >
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "50%",
    backgroundColor: "yellow",
    gap: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto-SemiBoldItalic",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  opacity: {
    opacity: 0.6,
  },
});
