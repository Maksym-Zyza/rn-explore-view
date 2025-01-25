import { StyleSheet } from "react-native";
import { colors } from "../../styles/global";

export const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: colors.text_gray,
    height: 83,
    paddingTop: 9,
    paddingRight: 70,
    paddingLeft: 70,
  },
  tabHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.text_gray,
  },
  tabHeaderTitle: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    color: colors.black_primary,
  },
  tabIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
