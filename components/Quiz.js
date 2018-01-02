import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, red, green, gray, black } from "../utils/colors";
import { connect } from 'react-redux';
import { getDeck } from '../utils/helpers'

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

function Answer({ onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.answer}>Answer</Text>
      </TouchableOpacity>
    );
  }

class Quiz extends Component {

    state = {
        seeAnswer: false

    }

    ShowandHideAnswer = () =>{
        if(this.state.status == true)
        {
          this.setState({status: false})
        }
        else
        {
          this.setState({status: true})
        }
      }

    componentDidMount () {
        const { dispatch } = this.props
     
      }

  render() {

    const decks = this.props.decks
    const title = this.props.navigation.state.params.title
    const deck = getDeck(title,decks)
    const length = deck[0].questions.length
    let random = getRandomInt(0, length) 

    return (
      <View style={styles.single}> 
        <View style={styles.deck}>
         {this.state.seeAnswer ? <Text style={styles.question}>
            {deck[0].questions[random].question} 
          </Text> :<Text style={styles.question}>
            {deck[0].questions[random].answer} 
          </Text>
         }                      
          <Answer onPress={this.ShowandHideAnswer}/>
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

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz);

