import { SET_ACTIVE_CARD } from "../../constants";

export const setActiveCards = (payload: Array<number>) => ({type: SET_ACTIVE_CARD, payload})