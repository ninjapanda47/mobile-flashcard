import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, lightblue, green, gray, black } from "../utils/colors";
import { connect } from "react-redux";
import { getDeck } from "../utils/helpers";

function AddBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.addBtn} onPress={onPress}>
      <Text style={styles.btnText}>Add Card</Text>
    </TouchableOpacity>
  );
}

function StartBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.startBtn} onPress={onPress}>
      <Text style={styles.btnText}>Start Quiz</Text>
    </TouchableOpacity>
  );
}

class Deck extends Component {
  state = {
    deck: [],
    title: "",
    quantity: 0
  };

  componentDidMount() {
    const decks = this.props.decks;
    const title = this.props.navigation.state.params.title;
    const deck = getDeck(title).then(data => {
      const deck = data;
      const quantity = deck.questions.length;
      this.setState({
        deck: deck,
        title: title,
        quantity: quantity
      });
    });
  }

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.single}>
        <View style={styles.deck}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.desc}>{this.state.quantity} cards</Text>
          <AddBtn
            onPress={() =>
              this.props.navigation.navigate("AddCard", {
                title: this.state.title
              })
            }
          />
          <StartBtn
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: this.state.title
              })
            }
          />
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
    fontSize: 30,
    fontWeight: "bold",
    color: black,
    textAlign: "justify"
  },
  desc: {
    fontSize: 20,
    color: gray,
    textAlign: "justify"
  },
  addBtn: {
    backgroundColor: lightblue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  startBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginTop: 10,
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

export default connect(mapStateToProps)(Deck);
