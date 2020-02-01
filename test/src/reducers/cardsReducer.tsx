const initialState = {
  cards: []
};

const cardsReducer = (state = initialState, action: object) => {
  return { ...state };
};

export default cardsReducer;
