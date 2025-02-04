import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";
import { setUserInfo, clearUserInfo } from "../redux/reducers/userSlice";
import { addUser, getUser } from "./firestore";
import { ImgData, LoginData, User } from "../types/auth";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

export const registerDB = async (
  user: User,
  setError: (state: string) => void
) => {
  const { email, password, login, photo } = user;
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      login,
      photo
    );

    const user = credentials.user;

    await addUser(user.uid, { uid: user.uid, email: user.email, login, photo });
  } catch (error) {
    setError(`${error}` || "Firebase error");
  }
};

export const loginDB = async (
  user: LoginData,
  dispatch: Dispatch<UnknownAction>,
  setError: (state: string) => void
) => {
  const { email, password } = user;
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    const user = credentials.user;

    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user?.email || "",
        displayName: user?.displayName || "",
        profilePhoto: user?.photoURL || "",
      })
    );
    return user;
  } catch (error) {
    setError(`${error}` || "Firebase error");
  }
};

export const logoutDB = async (dispatch: Dispatch<UnknownAction>) => {
  try {
    await signOut(auth);
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const authStateChanged = (dispatch: Dispatch<UnknownAction>) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid);

      dispatch(
        setUserInfo({
          ...userData,
          uid: user.uid,
          email: user.email || "",
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
  });
};

export const updateUserProfile = async (update: ImgData) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};
