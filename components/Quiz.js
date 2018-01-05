import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, red, green, gray, black } from "../utils/colors";
import { connect } from "react-redux";
import { getDeck } from "../utils/helpers";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Correct({ onPress }) {
  return (
    <TouchableOpacity style={styles.correct} onPress={onPress}>
      <Text style={styles.btnText}>Correct</Text>
    </TouchableOpacity>
  );
}

function Incorrect({ onPress }) {
  return (
    <TouchableOpacity style={styles.incorrect} onPress={onPress}>
      <Text style={styles.whiteText}>Incorrect</Text>
    </TouchableOpacity>
  );
}

class Quiz extends Component {
  state = {
    seeAnswer: false,
    count: 0,
    correct: 0,
    random: 0
  };

  ShowandHideAnswer = () => {
    if (this.state.seeAnswer == true) {
      this.setState({ seeAnswer: false });
    } else {
      this.setState({ seeAnswer: true });
    }
  };

  ChangeText = () => {
    if (this.state.seeAnswer == true) {
      return "Question";
    } else {
      return "Answer";
    }
  };

  DecreaseCount = () => {
      let newCount = this.state.count
      newCount--
      this.setState({ count: newCount})
      let random = getRandomInt(0, this.state.count);
      this.setState({ random: random})
  }

  NextQuestion = () => {
    let count = this.state.count
    let random = getRandomInt(0, count);
    this.setState({ random: random})
  }

  componentDidMount() {
    const decks = this.props.decks;
    const title = this.props.navigation.state.params.title;
    const deck = getDeck(title, decks);
    const length = deck[0].questions.length;
    let random = getRandomInt(0, length);
    this.setState({ count: deck[0].questions.length})
    this.setState({ random: random})
  }

  render() {
    const decks = this.props.decks;
    const title = this.props.navigation.state.params.title;
    const deck = getDeck(title, decks);
    const length = deck[0].questions.length;
    const random = this.state.random
    console.log(deck[0].questions[random].question,deck[0].questions[random].answer)
    console.log(this.state)

    return (
      <View style={styles.single}>
        <View style={styles.deck}>
        <Text style={styles.countertext}>{this.state.count}/{length}</Text>
          {this.state.seeAnswer ? (
            <Text style={styles.question}>
              {deck[0].questions[random].answer}
            </Text>
          ) : (
            <Text style={styles.question}>
              {deck[0].questions[random].question}
            </Text>
          )}
          <TouchableOpacity onPress={this.ShowandHideAnswer}>
            {this.state.seeAnswer ? (
              <Text style={styles.answer}>Question</Text>
            ) : (
              <Text style={styles.answer}>Answer</Text>
            )}
          </TouchableOpacity>
          <Correct onPress={this.DecreaseCount}/>
          <Incorrect />
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
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: white,
    height: 600,
    width: 400
  },
  counter: {
    flex: 1,
    width: 400,
    height: 200,
    bottom: 0,
    backgroundColor: gray,
  },
  countertext: {
    color: black,
    fontSize: 20,
    textAlign: "left",
  },
  question: {
    fontSize: 25,
    fontWeight: "bold",
    width: 300,
    color: black,
    textAlign: "center",
    marginBottom: 20,
  },
  answer: {
    fontSize: 20,
    color: gray,
    width: 300,
    textAlign: "center"
  },
  correct: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  incorrect: {
    backgroundColor: red,
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
    textAlign: "center"
  },
  whiteText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
