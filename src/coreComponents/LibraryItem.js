import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/LibraryItemsStyles";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../utils/Colors";
import Button from "../coreComponents/Button";
import Column from "../coreComponents/Columns";

export default class LibraryItem extends Component {
  render() {
    const { bookName, lender, borrower, action } = this.props;

    return (
      <View style={styles.container}>
        <Column text={bookName} width={this.props.columnWidth} />
        <Column text={lender} width={this.props.columnWidth} />
        <Column text={borrower} width={this.props.columnWidth} />
        {action ? (
          <View
            style={[styles.buttonHolder, { width: this.props.columnWidth }]}
          >
            <Button
              title={action}
              container={[styles.buttonContainer]}
              textStyle={styles.buttonLabel}
            />
          </View>
        ) : (
          <View style={{ width: this.props.columnWidth }} />
        )}
      </View>
    );
  }
}
LibraryItem.propTpes = {
  bookName: PropTypes.string,
  lender: PropTypes.string,
  borrower: PropTypes.string,
  action: PropTypes.string
};
LibraryItem.defaultProps = {};
