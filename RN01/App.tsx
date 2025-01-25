import AppNavigator from "./src/navigation/AppNavigator";
import useAppFonts from "./src/hooks/useAppFonts";
import Loader from "./src/components/Loader";
import ContextCombiner from "./src/context/contextCombiner";

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <ContextCombiner>
      <AppNavigator />
    </ContextCombiner>
  );
}
