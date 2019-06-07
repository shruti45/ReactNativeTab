import { StyleSheet, Dimensions } from "react-native";
import colors from "../utils/Colors";
let deviceWidth = Dimensions.get("window").width;

const LibraryItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    backgroundColor: "white"
  },
  text: {
    fontSize: 15,
    backgroundColor: "white",
    textAlign: "center"
  },
  buttonHolder: {
    alignItems: "center"
  },
  buttonContainer: {
    height: 30,
    width: 80,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.GREEN
  },
  buttonLabel: {
    color: colors.BACKGROUND_COLOR,
    textAlign: "center"
  }
});

export default LibraryItemsStyles;
