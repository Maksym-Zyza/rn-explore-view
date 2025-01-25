import { useState } from "react";
import { AppContextProps } from "../../types/context";
import AppContext from "./AppContext";
import { FormState } from "../../types/auth";

export const AppContextWrapper = (props: AppContextProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    login: "",
    email: "",
    password: "",
  });
  const [tabBarShow, setTabBarShow] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        formState,
        setFormState,
        tabBarShow,
        setTabBarShow,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
