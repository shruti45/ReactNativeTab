import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import { DrawerActions } from "react-navigation";
import styles from "../styles/HeaderStyles";
import colors from "../utils/Colors";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.left}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        >
          <Icon name="ios-menu" size={30} color={colors.WHITE} />
        </TouchableOpacity>
        <View style={styles.center}>
          <Icon name="logo-github" size={30} color={colors.WHITE} />
        </View>
        <TouchableOpacity style={styles.right}>
          <Icon name="md-notifications" size={30} color={colors.WHITE} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(Header);
Header.propTypes = {};
