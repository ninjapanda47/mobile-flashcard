import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class AllDecks extends Component {
  render() {
    return (
      <View style={styles.AllDecks}>
        <Text>ALL Decks</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AllDecks: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AllDecks;
