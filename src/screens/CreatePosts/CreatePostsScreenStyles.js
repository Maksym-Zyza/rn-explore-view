import { Platform, StyleSheet } from "react-native";
import { colors } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  createPostsContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
  },
  cameraContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.black_primary,
    marginBottom: 8,
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    objectFit: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  photoBtnContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  textUploade: {
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.underline_gray,
  },
  createPostInput: {
    marginBottom: 32,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.text_gray,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.black_primary,
  },
  locationIcon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -3,
      },
      android: {
        top: 3,
      },
    }),
  },
  createBtn: {
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  createBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  resetBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: colors.light_gray,
    borderRadius: 20,
    marginHorizontal: "auto",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "400",
    color: colors.white,
    textAlign: "center",
  },
  grayText: {
    textAlign: "left",
    color: colors.text_gray,
  },
});
