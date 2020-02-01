import Apple from "../assets/images/apple.png";
import Banana from "../assets/images/banana.png";
import Avocado from "../assets/images/avocado.png";
import Corn from "../assets/images/corn.png";
import Lemon from "../assets/images/lemon.png";
import Lettuce from "../assets/images/lettuce.png";
import Onion from "../assets/images/onion.png";
import Strawberry from "../assets/images/strawberry.png";

const initialState = {
  cards: [
    { id: 0, source: Apple },
    { id: 1, source: Banana },
    { id: 2, source: Avocado },
    { id: 3, source: Corn },
    { id: 4, source: Lemon },
    { id: 5, source: Lettuce },
    { id: 6, source: Onion },
    { id: 7, source: Strawberry },
    { id: 8, source: Apple },
    { id: 9, source: Banana },
    { id: 10, source: Avocado },
    { id: 11, source: Corn },
    { id: 12, source: Lemon },
    { id: 13, source: Lettuce },
    { id: 14, source: Onion },
    { id: 15, source: Strawberry }
  ]
};

const cardsReducer = (state = initialState, action: object) => {
  return { ...state };
};

export default cardsReducer;
