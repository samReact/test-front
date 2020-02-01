import Apple from "../assets/images/apple.png";
import Banana from "../assets/images/banana.png";
import Avocado from "../assets/images/avocado.png";
import Corn from "../assets/images/corn.png";
import Lemon from "../assets/images/lemon.png";
import Lettuce from "../assets/images/lettuce.png";
import Onion from "../assets/images/onion.png";
import Strawberry from "../assets/images/strawberry.png";
import {
  CardsActionTypes,
  UPDATE_CARD_STATUS,
  RESET_GAME,
  CardState
} from "../actions/types/cards";

const initialState: CardState = {
  cards: [
    { id: 0, source: Apple, status: "idle" },
    { id: 1, source: Banana, status: "idle" },
    { id: 2, source: Avocado, status: "idle" },
    { id: 3, source: Corn, status: "idle" },
    { id: 4, source: Lemon, status: "idle" },
    { id: 5, source: Lettuce, status: "idle" },
    { id: 6, source: Onion, status: "idle" },
    { id: 7, source: Strawberry, status: "idle" },
    { id: 8, source: Apple, status: "idle" },
    { id: 9, source: Banana, status: "idle" },
    { id: 10, source: Avocado, status: "idle" },
    { id: 11, source: Corn, status: "idle" },
    { id: 12, source: Lemon, status: "idle" },
    { id: 13, source: Lettuce, status: "idle" },
    { id: 14, source: Onion, status: "idle" },
    { id: 15, source: Strawberry, status: "idle" }
  ],
  counter: 0,
  localCounter: 0
};

function shuffle(array: Array<object>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const cardsReducer = (state = initialState, action: CardsActionTypes) => {
  // shuffle(state.cards);
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CARD_STATUS:
      let updatedCounter = state.counter;
      let filteredCard = state.cards.filter(card => card.id === payload?.id)[0];
      let filteredCardBis = state.cards.filter(
        card => card.id !== payload?.id && card.source === filteredCard.source
      )[0];
      let filteredCards = state.cards.filter(
        card => card.source !== filteredCard.source
      );
      if (filteredCardBis.status === "checked") {
        filteredCard = { ...filteredCard, status: "disabled" };
        filteredCardBis = { ...filteredCardBis, status: "disabled" };
      } else {
        filteredCard = { ...filteredCard, status: "checked" };
      }
      let updatedCards = [...filteredCards, filteredCard, filteredCardBis].sort(
        (a, b) => a.id - b.id
      );
      let oddResult = state.localCounter % 2;
      if (oddResult === 1) {
        updatedCounter++;
      }
      return {
        ...state,
        cards: updatedCards,
        counter: updatedCounter,
        localCounter: state.localCounter + 1
      };
    case RESET_GAME:
      shuffle(initialState.cards);
      let finalCards: Array<object> = [];
      initialState.cards.map((slot, i) => finalCards.push({ ...slot, id: i }));
      return {
        ...initialState,
        cards: finalCards
      };

    default:
      return state;
  }
};

export default cardsReducer;
