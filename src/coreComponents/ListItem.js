import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/ListItemStyles";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../utils/Colors";
export default class ListItem extends Component {
  render() {
    const { language, count, title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Icon name={"ios-list"} size={25} color={colors.BLACK} />
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.bottonContainer}>
          <Icon name={"md-star"} size={20} color={colors.BLACK} />
          <Text style={styles.countText}>{count}</Text>
          <View style={styles.dotContainer} />
          <Text style={styles.languageText}>{language}</Text>
        </View>
      </View>
    );
  }
}
ListItem.propTpes = {
  title: PropTypes.string,
  count: PropTypes.number,
  language: PropTypes.string
};
ListItem.defaultProps = {
  count: 0,
  language: "JavaScript"
};
