export interface reducerInterface {
    type: string;
    payload: Array<number>;
}

export interface reducerStateInterface {
    game: gameReducerInterface
}

export interface gameReducerInterface {
    map: Array<number>;
    activeCards: Array<number>;
}
