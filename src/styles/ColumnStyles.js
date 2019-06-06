import { StyleSheet, Dimensions } from "react-native";
import colors from "../utils/Colors";
let deviceWidth = Dimensions.get("window").width;

const ColumnStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    color: colors.BLACK
  }
});

export default ColumnStyles;
