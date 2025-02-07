export type RootState = {
  user: {
    userInfo: UserFB;
  };
};

export type RootStackParam = {
  LoginScreen: User;
};

export type User = {
  email: string;
  password: string;
  login: string;
  photo: string;
};

export type UserKeys = keyof User;

export type LoginData = {
  email: string;
  password: string;
};

export type ImgData = {
  displayName: string;
  photoURL: string;
};

export type UserFB = {
  uid: string;
  email: string | null;
  login: string;
  photo: string;
};
