import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import { white, gray, black } from "../utils/colors";
import { getDecks } from "../utils/helpers";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";

class AllDecks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(result => dispatch(receiveDecks(result)));
  }

  _keyExtractor = (item, index) => item.title;

  render() {
    const { decks } = this.props;

    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.props.decks}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.title}
            onPress={() =>
              this.props.navigation.navigate("Deck", {
                title: item.title
              })
            }
          >
            <View style={styles.deckDisplay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.questions.length} cards</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  deckDisplay: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: white,
    borderBottomColor: black,
    borderBottomWidth: 2,
    height: 200,
    width: 400
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: black,
    textAlign: "justify"
  },
  desc: {
    fontSize: 20,
    color: gray,
    textAlign: "justify"
  }
});

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps)(AllDecks);
