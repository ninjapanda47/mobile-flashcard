import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";
import { white, gray, black } from '../utils/colors';
import { getDecks } from '../utils/helpers'
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';

function Deck (deck, navigation) {
  return (
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
  )

}

class AllDecks extends Component {

  state = {

  }

  componentDidMount () {
    const { dispatch } = this.props
    getDecks().then((decks) => dispatch(receiveDecks(decks),console.log(this.props.decks)))  
  }

  render() {

    const { decks } = this.props
    console.log(this.props.decks)

    return (
      <View style={styles.allDecks}>
        {
          decks &&
          <FlatList
          data={decks}
          renderItem={({item}) =><Deck deck={item}></Deck>}
          />
        }
      </View>
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