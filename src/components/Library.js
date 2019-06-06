import React, { Component } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import PropTypes from "prop-types";
import LibraryItem from "../coreComponents/LibraryItem";
import styles from "../styles/LibraryStyles";
import Columns from "../coreComponents/Columns";
import { USER_NAME, VEDANTU, ACTION_NAME } from "../utils/constants";
import { isTSEnumMember } from "@babel/types";

let deviceWidth = Dimensions.get("window").width;
const columnHeaders = ["Book Name", "Lender", "Borrower", "Action"];

export default class Library extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: USER_NAME.UserB
    };
  }
  componentDidMount() {
    this.props.getBooksList();
  }
  renderListItem = item => {
    let borrow = "-";
    let actionName = "";
    if (item.lender !== item.borrower) {
      if (item.borrow !== this.state.userName) {
        console.log("item.borrower", item.borrower);
        if (item.borrower) {
          actionName = ACTION_NAME.BORROW;
          borrow = item.borrower;
        } else {
          actionName = ACTION_NAME.REQUEST;
        }
      }
    }
    console.log("actionName", actionName);
    return (
      <LibraryItem
        bookName={item.name}
        lender={item.lender}
        borrower={borrow}
        action={actionName}
        columnWidth={deviceWidth / columnHeaders.length}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
            <Text style={styles.headerText}>{VEDANTU}</Text>
          </View>
          <Text style={styles.userNameText}>{this.state.userName}</Text>
        </View>
        <View style={styles.listHeader}>
          {columnHeaders.map(columns => {
            return (
              <Columns
                text={columns}
                width={deviceWidth / columnHeaders.length}
                textStyle={styles.headerText}
              />
            );
          })}
        </View>
        {this.props.booksList && (
          <FlatList
            contentContainerStyle={styles.list}
            data={this.props.booksList.data}
            keyExtractor={(item, index) => item.title}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderListItem(item)}
          />
        )}
      </View>
    );
  }
}

Library.propTpes = {
  getBooksList: PropTypes.func,
  booksList: PropTypes.object
};
Library.defaultProps = {
  getBooksList: null,
  booksList: null
};
