import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/ColumnStyles";

export default class Columns extends Component {
  render() {
    return (
      <View style={[styles.container, { width: this.props.width }]}>
        <Text
          numberOfLines={1}
          ellipsizeMode={"tail"}
          style={this.props.textStyle}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}
Columns.propTpes = {
  text: PropTypes.string,
  width: PropTypes.number
};
Columns.defaultProps = {
  text: "",
  textStyle: styles.text
};
