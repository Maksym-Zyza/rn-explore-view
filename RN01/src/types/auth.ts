export type FormStateKeys = "email" | "password" | "login";

export type FormState = {
  email: string;
  password: string;
  login: string;
};

export type RootStackParam = {
  LoginScreen: FormState;
};
