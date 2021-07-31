import { SET_ACTIVE_CARD } from "../../constants";
import { reducerInterface } from "../../types/reducer";
import { generateMap } from "../../utils";

const MAP_SIZE = 50;

const map = generateMap(MAP_SIZE);

const initState = {
    map,
    activeCards: Array.from({length: MAP_SIZE}, (_, i) => i),
};

const gameReducer =  (state = initState, { type, payload }: reducerInterface ) => {
    switch (type) {
        case SET_ACTIVE_CARD:
            return {
                ...state,
                activeCards: payload,
            };
      default:
        return state;
    }
};

export default gameReducer;