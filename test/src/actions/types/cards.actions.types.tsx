export const UPDATE_CARD_STATUS = "update.card.status";
export const RESET_GAME = "reset.game";

export interface CardId {
  id: number;
}

export interface CardItem {
  id: number;
  source: string;
  status: string;
}

export interface CardState {
  cards: Array<CardItem>;
  counter: number;
  localCounter: number;
}

interface UpdateCardStatus {
  type: typeof UPDATE_CARD_STATUS;
  payload: CardId;
}

interface ResetGame {
  type: typeof RESET_GAME;
  payload: null;
}

export type CardsActionTypes = UpdateCardStatus | ResetGame;
