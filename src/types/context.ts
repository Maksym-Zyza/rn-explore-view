import { User } from "./auth";
import { Post } from "./posts";

export type AppContextProps = {
  children: React.ReactNode;
};

export type AppContextType = {
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
  tabBarShow: boolean;
  setTabBarShow: (state: boolean) => void;
  user: User;
  setUser: (state: User) => void;
  posts: Post[];
  setPosts: (state: Post[]) => void;
};
