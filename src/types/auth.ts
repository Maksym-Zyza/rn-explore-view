export type UserKeys = "email" | "password" | "login";

export type User = {
  email: string;
  password: string;
  login: string;
};

export type RootStackParam = {
  LoginScreen: User;
};
