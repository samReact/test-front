export const UPDATE_CARD_STATUS = "update.card.status";
export const RESET_GAME = "reset.game";
export const RESET_TURN = "reset.turn";

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
  played: boolean;
}

interface UpdateCardStatus {
  type: typeof UPDATE_CARD_STATUS;
  payload: CardId;
}

interface ResetGame {
  type: typeof RESET_GAME;
  payload: null;
}

interface ResetTurn {
  type: typeof RESET_TURN;
  payload: null;
}

export type CardsActionTypes = UpdateCardStatus | ResetGame | ResetTurn;
