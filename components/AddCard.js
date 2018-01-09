import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { white, lightblue, green, gray, black } from "../utils/colors";
import { addCardToDeck } from "../utils/helpers";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  );
}

class AddCard extends Component {
  state = {
    title: this.props.navigation.state.params.title,
    question: "",
    answer: ""
  };

  AddCard = () => {
    const { dispatch } = this.props;
    const card = {};
    card.question = this.state.question;
    card.answer = this.state.answer;
    addCardToDeck(this.state.title, card).then(data =>
      dispatch(
        receiveDecks(data),
        this.setState({ question: "", answer: "" }),
        this.props.navigation.navigate("Deck", {
          title: this.state.title
        })
      )
    );
  };

  render() {
    return (
      <View style={styles.single}>
        <View style={styles.deck}>
          <TextInput
            style={styles.input}
            placeholder="Question"
            editable={true}
            maxLength={150}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <TextInput
            style={styles.input}
            placeholder="Answer"
            editable={true}
            maxLength={150}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <SubmitBtn onPress={this.AddCard} />
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
  input: {
    fontSize: 15,
    width: 250,
    marginTop: 10,
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

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps)(AddCard);
