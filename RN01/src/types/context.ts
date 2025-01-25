import { FormState } from "./auth";

export type AppContextProps = {
  children: React.ReactNode;
};

export type AppContextType = {
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
  formState: FormState;
  setFormState: (state: FormState) => void;
};
