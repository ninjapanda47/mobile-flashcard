import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class Deck extends Component {
    render() {
      return (
        <View>
          <Text>Deck View</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    AllDecks: {
      marginTop: 10
    }
  });
  
  export default Deck;
  