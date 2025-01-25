import { useState } from "react";
import { AppContextProps } from "../../types/context";
import AppContext from "./AppContext";

export const AppContextWrapper = (props: AppContextProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
