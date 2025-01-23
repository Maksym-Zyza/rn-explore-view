export type FormState = {
  email: string;
  password: string;
  login: string;
};

export type RootStackParam = {
  LoginScreen: FormState;
};

export type RootStackParamList = {
  LoginScreen: {
    formValues: FormState;
    setIsAuth: (state: boolean) => void;
  };
};
