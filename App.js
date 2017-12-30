import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import AllDecks from "./components/AllDecks";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Deck from "./components/Deck";
import Quiz from "./components/Quiz";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { black, white, blue } from "./utils/colors";
import { createStore } from "redux";
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";


const Tabs = TabNavigator(
  {
    AllDecks: {
      screen: AllDecks,
      navigationOptions: {
        tabBarLabel: "All Decks"
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "New Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? black : white,
      labelStyle: {
        fontSize: 20,
        fontWeight:'bold'
      },
      style: {
        height: 56,
        paddingBottom: 15,
        backgroundColor: Platform.OS === "ios" ? white : black,
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
    screen: Tabs,
    navigationOptions: {
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
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
