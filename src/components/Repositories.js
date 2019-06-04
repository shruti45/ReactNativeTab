import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import ListItem from "../coreComponents/ListItem";
import styles from "../styles/RepositoriesStyles";
export default class Repositories extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  componentDidMount() {
    this.props.getRepositories();
  }
  renderListItem = item => {
    return (
      <ListItem
        imageSource={item.data.thumbnail}
        title={item.data.title}
        ups={item.data.ups}
        comments={item.data.num_comments}
      />
    );
  };
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {this.props.repositories && (
          <FlatList
            contentContainerStyle={styles.list}
            data={this.props.repositories.children}
            keyExtractor={(item, index) => item.title}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderListItem(item)}
          />
        )}
      </View>
    );
  }
}
Repositories.propTpes = {
  getRepositories: PropTypes.func,
  repositories: PropTypes.object
};
Repositories.defaultProps = {
  getCategories: null,
  repositories: null
};
