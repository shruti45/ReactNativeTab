import { StyleSheet } from "react-native";
import colors from "../utils/Colors";

const ListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 15,
    flex: 1,
    borderRadius: 3,
    marginBottom: 5
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  bottonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 30
  },
  title: {
    color: colors.BLUE,
    fontSize: 15,
    flex: 1,
    marginLeft: 10
  },
  languageText: {
    color: colors.GREY,
    fontSize: 13,
    marginLeft: 5
  },
  countText: {
    color: colors.GREY,
    fontSize: 13,
    marginLeft: 2
  },
  dotContainer: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.DOT_COLOR,
    marginLeft: 20
  }
});

export default ListItemStyles;
