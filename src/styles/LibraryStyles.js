import { StyleSheet } from "react-native";
import colors from "../utils/Colors";

const LibraryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.BACKGROUND_COLOR,
    paddingTop: 10
  },
  subHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  listHeader: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.BACKGROUND_COLOR
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: colors.LIST_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 16,
    color: colors.WHITE
  },
  userNameText: {
    fontSize: 16,
    color: colors.WHITE,
    paddingRight: 10
  },
  list: {
    paddingVertical: 5
  }
});

export default LibraryStyles;
