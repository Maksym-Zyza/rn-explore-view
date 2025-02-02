import AppNavigator from "./src/navigation/AppNavigator";
import useAppFonts from "./src/hooks/useAppFonts";
import Loader from "./src/components/Loader";
import ContextCombiner from "./src/context/contextCombiner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./src/redux/store/store";

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <Provider store={store.store}>
      <PersistGate loading={<Loader />} persistor={store.persistor}>
        <ContextCombiner>
          <AppNavigator />
        </ContextCombiner>
      </PersistGate>
    </Provider>
  );
}
