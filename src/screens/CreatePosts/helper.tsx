import { uploadImage } from "../../utils/firestore";

export const uploadImageToStorage = async (uri: string, userId: string) => {
  if (!uri) return;

  try {
    const response = await fetch(uri);
    const file = await response.blob();
    const fileName = uri.split("/").pop();
    const fileType = file.type;

    if (!fileName) return;

    const imageFile = new File([file], fileName, { type: fileType });

    const uploadedImageUrl = await uploadImage(userId, imageFile, fileName);

    return uploadedImageUrl;
  } catch (e) {
    console.log(e);
    return null;
  }
};
