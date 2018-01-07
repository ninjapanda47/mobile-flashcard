import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { white, lightblue, green, gray, black } from "../utils/colors";
import { saveDeckTitle } from "../utils/helpers";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  );
}

class AddDeck extends Component {
  state = {
    text: ''
  };

  AddDeck = () => {
    const { dispatch } = this.props;
    saveDeckTitle(this.props.decks, this.state.text).then(data =>
      dispatch(
        receiveDecks(data),
        this.props.navigation.navigate("AddCard", { title: this.state.text })
      )
    );
    this.setState({ text: '' })
  };

  render() {
    return (
      <View style={styles.single}>
        <View style={styles.deck}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            placeholder="Deck Title"
            editable={true}
            maxLength={40}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <SubmitBtn onPress={this.AddDeck} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deck: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: white,
    height: 600,
    width: 400
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    width: 200,
    color: black,
    textAlign: "center"
  },
  input: {
    fontSize: 20,
    width: 250,
    marginTop: 30,
    marginBottom: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: black,
    borderRadius: 7,
    padding: 10,
    textAlign: "center"
  },
  submitBtn: {
    backgroundColor: lightblue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 100,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  btnText: {
    color: black,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(AddDeck);
