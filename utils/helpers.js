import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { deckResults, DECKS_STORAGE_KEY } from './deckResults'

//getDecks: return all of the decks along with their titles, questions, and answers. 
export function getDecks(){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then( deckResults )
}

//getDeck: take in a single id argument and return the deck associated with that id. 
export function getDeck( title, decks){
    let deck = decks.filter(function(obj){
        return obj.title === title;
    })
    return deck
}

//saveDeckTitle: take in a single title argument and add it to the decks. 
export function saveDeckTitle(decks,title){
    const deck = {questions:[]}
    deck.title = title
    decks.push(deck)
    AsyncStorage.setItem(DECKS_STORAGE_KEY,JSON.stringify(decks))
    .then((data) =>  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((data) => console.log(data)))    
}
//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the


