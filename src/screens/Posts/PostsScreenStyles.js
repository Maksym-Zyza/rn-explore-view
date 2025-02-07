import { StyleSheet } from "react-native";
import { colors } from "../../styles/global";

export const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 84,
    backgroundColor: colors.white,
  },
  postPhoto: {
    marginBottom: 8,
    width: "100%",
    height: 240,
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 8,
  },
  postTitle: {
    marginBottom: 11,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: colors.black_primary,
  },
  userContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  avatarPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userData: {
    gap: 0,
  },
  userName: {
    color: colors.black_primary,
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    color: colors.black80,
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  place: {
    color: colors.black_primary,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 4,
    textDecorationLine: "underline",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  count: {
    color: colors.underline_gray,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 6,
  },
});
