import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { white, purple, gray, black, pink } from '../utils/colors';
import { connect } from 'react-redux';

class AllDecks extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.allDecks}>
        <View style={styles.deckDisplay}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.desc}>cards</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    
  allDecks: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
  deckDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    backgroundColor: white,
    borderBottomColor: black,
    borderBottomWidth: 2,
    height: 200,
    width: 400,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: black,
    textAlign: 'justify'
  },
  desc: {
      fontSize: 20,
      color: gray,
      textAlign: 'justify'
  }
});

function mapStateToProps ({decks}) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps
  )(AllDecks)