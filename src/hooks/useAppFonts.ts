import { useFonts } from "expo-font";

const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  return fontsLoaded;
};

export default useAppFonts;
