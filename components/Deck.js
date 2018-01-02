import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { white, lightblue, green, gray, black } from '../utils/colors';
import { connect } from 'react-redux';

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

      const { decks } = this.props
      console.log(decks)

      return (
        <View style={styles.single}>
        <View style={styles.deck}>
          <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
          <Text style={styles.desc}>{this.props.navigation.state.params.quantity} cards</Text>
          <AddBtn onPress={() => this.props.navigation.navigate(
          'AddCard',
          { title: this.props.navigation.state.params.title}
        )}/>
          <StartBtn onPress={() => this.props.navigation.navigate(
          'Quiz', 
          { title: this.props.navigation.state.params.title}
        )}/>
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

  function mapStateToProps (decks) {
    return {
        decks
    }
}

  export default connect(mapStateToProps)(Deck);
  