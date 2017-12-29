import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { white, lightblue, green, gray, black } from '../utils/colors';

function AddBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.addBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>Add Card</Text>
      </TouchableOpacity>
    )
  }

  function StartBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.startBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>Start Quiz</Text>
      </TouchableOpacity>
    )
  }

class Deck extends Component {

    render() {
      return (
        <View style={styles.single}>
        <View style={styles.deck}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.desc}>cards</Text>
          <AddBtn/>
          <StartBtn/>
        </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    single: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deck: {
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        backgroundColor: white,
        height: 600,
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
      },
    addBtn: {
        backgroundColor: lightblue,
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 200,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
      },
      startBtn: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 200,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
      },
      btnText: {
        color: black,
        fontSize: 22,
        textAlign: 'center',
      },
  });
  
  export default Deck;
  