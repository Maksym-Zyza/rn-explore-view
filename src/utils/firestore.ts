import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../../config";
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { PostReq } from "../types/posts";
import { UserFB } from "../types/auth";

export const addUser = async (userId: string, userData: UserFB) => {
  try {
    await setDoc(doc(db, "users", userId), userData, { merge: true });
    console.log("User added:", userId);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const addPost = async (userId: string, post: PostReq) => {
  try {
    await setDoc(doc(db, "posts", userId), post, { merge: true });
    console.log("Post added:", userId);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

// const uploadPostToServer = async (post: PostReq) => {
//   try {
//     await addDoc(collection(db, "posts"), post);
//     console.log("Post saved to Server!");
//   } catch (error: any) {
//     setErrorMsg(error?.message ?? "Error uploading post");
//   }
// };

export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("User data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

export const getPosts = async (id: string) => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Post data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

export const updateUserInFirestore = async (uid: string, data: any) => {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true }); // merge: true - update doc
    console.log("User data updated to Firestore:", uid);
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

export const uploadProfileImage = async (
  userId: string,
  file: Blob,
  fileName: string
) => {
  try {
    const imageRef = ref(storage, `profilePhotos/${userId}/${fileName}`);
    const result = await uploadBytes(imageRef, file);

    const imageUrl = await getImageUrl(imageRef);
    console.log("Upload result:", result);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const uploadImage = async (
  userId: string,
  file: Blob,
  fileName: string
) => {
  try {
    const imageRef = ref(storage, `postPhotos/${userId}/${fileName}`);
    const result = await uploadBytes(imageRef, file);
    const imageUrl = await getImageUrl(imageRef);
    console.log("imageUrl:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getImageUrl = async (
  imageRef: StorageReference
): Promise<string> => {
  return await getDownloadURL(imageRef);
};
