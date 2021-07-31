import { createSelector } from "reselect";
import { reducerStateInterface } from "../../types/reducer";

export const mapSelector = (state: reducerStateInterface) => state.game.map;

export const activeCardsSelector = (state: reducerStateInterface) => state.game.activeCards;

export const homeSelector = createSelector(
    mapSelector,
    activeCardsSelector,
    (map, activeCards) => ({ map, activeCards})
)
