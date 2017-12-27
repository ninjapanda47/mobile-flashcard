import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class Deck extends Component {
    render() {
      return (
        <View style={styles.Deck}>
          <Text>Deck View</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    Deck: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  
  export default Deck;
  