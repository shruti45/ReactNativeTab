/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import RepositoriesContainer from "./src/containers/RepositoriesContainer";
import OverView from "./src/components/OverView";
import Projects from "./src/components/Projects";
import Stars from "./src/components/Stars";
import Followers from "./src/components/Followers";
import DrawerScreen from "./src/components/DrawerScreen";
import Header from "./src/coreComponents/Header";
import colors from "./src/utils/Colors";
const TabStack = createMaterialTopTabNavigator(
  {
    Overview: OverView,
    Repositories: RepositoriesContainer,
    Projects: Projects,
    Stars: Stars,
    Followers: Followers
  },
  {
    tabBarOptions: {
      activeTintColor: colors.ACTIVE_COLOR,
      inactiveTintColor: colors.IN_ACTIVE_COLOR,
      scrollEnabled: true,
      upperCaseLabel: false,
      style: {
        backgroundColor: colors.BACKGROUND_COLOR
      },
      indicatorStyle: {
        backgroundColor: colors.WHITE
      }
    }
  }
);
RootStack = createDrawerNavigator(
  {
    Home: {
      screen: TabStack
    }
  },
  {
    drawerWidth: 260,
    drawerPosition: "left",
    contentComponent: DrawerScreen,
    drawerBackgroundColor: "white",
    navigationOptions: ({ navigation }) => {
      return {
        header: <Header />
      };
    }
  }
);
const AppStack = createStackNavigator({
  RootStack: { screen: RootStack }
});
const AppContainer = createAppContainer(AppStack);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore()
    };
  }
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={"#212E43"} />
        <Provider store={this.state.store}>
          <AppContainer />
        </Provider>
      </View>
    );
  }
}
