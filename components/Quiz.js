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

function Score(correct, length) {
  const score = correct / length * 100;
  return score;
}

class Quiz extends Component {
  state = {
    deck: [],
    question: "",
    answer: "",
    length: 0,
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

  Correct = () => {
    let score = this.state.correct;
    score++;
    this.setState({
       correct: score
    }, () => {
        this.NextQuestion();
    });
  };

  Incorrect = () => {
    this.NextQuestion();
  };

  NextQuestion = () => {
    let newCount = this.state.count;
    newCount--;
    const deck = this.state.deck;
    if (newCount !== 0) {
      let random = this.state.random;
      deck[0].questions.splice(random, 1);
      random = getRandomInt(0, newCount);
      const question = deck[0].questions[random].question;
      const answer = deck[0].questions[random].answer;
      this.setState({
        count: newCount,
        deck: deck,
        question: question,
        answer: answer,
        random: random
      });
      this.ShowandHideAnswer();
      console.log(this.state);
    } else {
      const score = Score(this.state.correct,this.state.length)
      this.props.navigation.navigate("Result", {score: score});
    }
  };

  componentDidMount() {
    const decks = this.props.decks;
    const title = this.props.navigation.state.params.title;
    const deck = getDeck(title, decks);
    console.log(deck);
    const length = deck[0].questions.length;
    let random = getRandomInt(0, length);
    const question = deck[0].questions[random].question;
    const answer = deck[0].questions[random].answer;
    this.setState({
      length: length,
      count: deck[0].questions.length,
      random: random,
      deck: deck,
      question: question,
      answer: answer
    });
  }

  render() {
    return (
      <View style={styles.single}>
        <View style={styles.deck}>
          <Text style={styles.countertext}>
            {this.state.count}/{this.state.length}
          </Text>
          {this.state.seeAnswer ? (
            <Text style={styles.question}>{this.state.answer}</Text>
          ) : (
            <Text style={styles.question}>{this.state.question}</Text>
          )}
          <TouchableOpacity onPress={this.ShowandHideAnswer}>
            {this.state.seeAnswer ? (
              <Text style={styles.answer}>Question</Text>
            ) : (
              <Text style={styles.answer}>Answer</Text>
            )}
          </TouchableOpacity>
          <Correct onPress={this.Correct} />
          <Incorrect onPress={this.Incorrect} />
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
    backgroundColor: gray
  },
  countertext: {
    color: black,
    fontSize: 20,
    textAlign: "left"
  },
  question: {
    fontSize: 25,
    fontWeight: "bold",
    width: 300,
    color: black,
    textAlign: "center",
    marginBottom: 20
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
    marginRight: 40
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
