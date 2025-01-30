import { useState } from "react";
import { AppContextProps } from "../../types/context";
import AppContext from "./AppContext";
import { FormState } from "../../types/auth";
import { Post } from "../../types/posts";

export const AppContextWrapper = (props: AppContextProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    login: "",
    email: "",
    password: "",
  });
  const [tabBarShow, setTabBarShow] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        formState,
        setFormState,
        tabBarShow,
        setTabBarShow,
        posts,
        setPosts,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
