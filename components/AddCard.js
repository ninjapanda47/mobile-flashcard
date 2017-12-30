import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { white, lightblue, green, gray, black } from "../utils/colors";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  );
}

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
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
          />
          <TextInput
            style={styles.input}
            placeholder="Answer"
            editable={true}
            maxLength={150}
            onChangeText={answer => this.setState({ answer })}
          />
          <SubmitBtn />
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

export default AddCard;
