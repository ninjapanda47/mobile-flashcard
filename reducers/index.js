import { RECEIVE_DECKS } from "../actions";

function reducer(state = {}, action) {
  const { decks, deck, key } = action;

  switch (action.type) {
    /*case ADD_DECK:
      return {
        ...state,

      };*/
    case RECEIVE_DECKS:
      return {};

    default:
      return state;
  }
}

export default reducer;
