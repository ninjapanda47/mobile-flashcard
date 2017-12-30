import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, red, green, gray, black } from "../utils/colors";

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
  render() {
    return (
      <View style={styles.single}>
        <View style={styles.deck}>
          <Text style={styles.question}>
            What is the name of my dog?
          </Text>
          <Text style={styles.answer}>
            Answer
          </Text>
          <Correct/>
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
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: white,
    height: 600,
    width: 400
  },
  question: {
    fontSize: 25,
    fontWeight: "bold",
    width: 200,
    color: black,
    textAlign: "center",
    marginBottom: 20
  },
  answer: {
    fontSize: 20,
    color: gray,
    textAlign: "justify"
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

export default Quiz;
