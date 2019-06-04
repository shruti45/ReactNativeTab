import { StyleSheet } from "react-native";
import colors from "../utils/Colors";

const HeaderStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.BACKGROUND_COLOR,
    flexDirection: "row",
    alignItems: "center"
  },
  left: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HeaderStyles;
