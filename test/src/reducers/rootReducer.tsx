import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";

const rootReducer = combineReducers({
  cards: cardsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
