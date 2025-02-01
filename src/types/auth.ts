export type User = {
  email: string;
  password: string;
  login: string;
  photo: string;
};

export type UserKeys = keyof User;

export type RootStackParam = {
  LoginScreen: User;
};
