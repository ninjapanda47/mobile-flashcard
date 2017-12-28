export const GETALL = "GETALL";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

function getall() {
  return {
    type: GETALL,
    decks
  };
}

function addDeck(title) {
    return {
        type: ADD_DECK,
        title
    }
}

function addCard(title,card) {
    return {
        type: ADD_CARD,
        title,
        card
    }
}