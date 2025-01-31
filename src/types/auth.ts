export type UserKeys = "email" | "password" | "login" | "photo";

export type User = {
  email: string;
  password: string;
  login: string;
  photo?: string;
};

export type RootStackParam = {
  LoginScreen: User;
};
