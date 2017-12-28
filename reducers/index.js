import { GETALL } from "../actions";
import { ADD_DECK } from "../actions";
import { ADD_CARD } from "../actions";

const initialState = 'test'

function decks(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.title
      };
    case ADD_CARD:    
        let addCard = state.map(d => {
            if (d.title === title){
                d.card = card
            }
        })    
    case GETALL:
      return {
          ...state
      };

    default:
      return state;
  }
}

export default decks;
