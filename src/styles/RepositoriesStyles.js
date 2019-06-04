import { StyleSheet } from "react-native";
import colors from "../utils/Colors";

const RepositoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIST_BACKGROUND_COLOR
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: colors.LIST_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    padding: 5
  }
});

export default RepositoriesStyles;
