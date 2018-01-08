import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, lightblue, green, gray, black } from "../utils/colors";
import { connect } from "react-redux";

function NewBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.newBtn} onPress={onPress}>
      <Text style={styles.btnText}>New deck</Text>
    </TouchableOpacity>
  );
}

function ResetBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.resetBtn} onPress={onPress}>
      <Text style={styles.btnText}>Start Over</Text>
    </TouchableOpacity>
  );
}

class Result extends Component {
  AllDecks = () => {
    this.props.navigation.navigate("AllDecks");
  };

  ResetQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      title: this.props.navigation.state.params.title
    });
  };

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.single}>
        <View style={styles.deck}>
        <Text style={styles.title}>Score</Text>
          <Text style={styles.score}>
            {this.props.navigation.state.params.score}
          </Text>
          <NewBtn onPress={this.AllDecks} />
          <ResetBtn onPress={this.ResetQuiz} />
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
  score: {
    fontSize: 50,
    fontWeight: "bold",
    color: black,
    textAlign: "justify"
  },
  newBtn: {
    backgroundColor: lightblue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  resetBtn: {
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

export default connect(mapStateToProps)(Result);