import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import useAppFonts from "./src/hooks/useAppFonts";
import Loader from "./src/components/Loader";

export default function App() {
  const fontsLoaded = useAppFonts();
  const [isAuth, setIsAuth] = useState(false);

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {isAuth ? (
        <BottomTabNavigator setIsAuth={setIsAuth} />
      ) : (
        <AuthNavigator setIsAuth={setIsAuth} />
      )}
    </NavigationContainer>
  );
}
