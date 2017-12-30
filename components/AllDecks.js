import React, { Component } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, gray, black } from '../utils/colors';
import { getDecks } from '../utils/helpers'
import { connect } from 'react-redux';

class AllDecks extends Component {

  state = {
    results: [],
    length: 0
  }

  componentDidMount () {
    getDecks().then((decks) => {
      this.setState({ results: decks})
      console.log(this.state)
    })

  }

  render() {

    const { results } = this.state

    return (
      <ScrollView contentContainerStyle={styles.allDecks}>
      {results.map(deck => (
        <TouchableOpacity key={deck.title}
        onPress={() => this.props.navigation.navigate(
          'Deck',
          { title: deck.title, quantity: deck.questions.length}
        )} >
                <View style={styles.deckDisplay}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.desc}>{deck.questions.length} cards</Text>
              </View>
        </TouchableOpacity>
      ))
      }
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

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps
  )(AllDecks)