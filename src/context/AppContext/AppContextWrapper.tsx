import { useState } from "react";
import { AppContextProps } from "../../types/context";
import AppContext from "./AppContext";
import { User } from "../../types/auth";
import { Post } from "../../types/posts";
import { initialUserData } from "../../utils/initialData";

export const AppContextWrapper = (props: AppContextProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User>(initialUserData);
  const [tabBarShow, setTabBarShow] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
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
