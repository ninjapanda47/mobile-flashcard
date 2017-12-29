import { GETALL } from "../actions";
import { ADD_DECK } from "../actions";
import { ADD_CARD } from "../actions";


function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        title: action.title
      };
    case ADD_CARD:    
      return {
        ...state
      }
    case GETALL:
      return {
          ...state
      };

    default:
      return state;
  }
}

export default decks;
