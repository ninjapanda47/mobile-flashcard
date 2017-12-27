import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import AllDecks from "./components/AllDecks";
import Deck from "./components/Deck";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { purple, white, blue } from "./utils/colors";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import devToolsEnhancer from 'remote-redux-devtools';

const Tabs = TabNavigator(
  {
    AllDecks: {
      screen: AllDecks,
      navigationOptions: {
        tabBarLabel: "All Decks"
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        tabBarLabel: "Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      labelStyle: {
        fontSize: 12
      },
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
});

const store = createStore(reducer, devToolsEnhancer());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
