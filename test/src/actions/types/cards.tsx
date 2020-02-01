export const UPDATE_CARD_STATUS = "update.card.status";

export interface CardId {
  id: number;
}
interface UpdateCardStatus {
  type: typeof UPDATE_CARD_STATUS;
  payload: CardId;
}
export type CardsActionTypes = UpdateCardStatus;
