import { FormState } from "./auth";
import { Post } from "./posts";

export type AppContextProps = {
  children: React.ReactNode;
};

export type AppContextType = {
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
  tabBarShow: boolean;
  setTabBarShow: (state: boolean) => void;
  formState: FormState;
  setFormState: (state: FormState) => void;
  posts: Post[];
  setPosts: (state: Post[]) => void;
};
