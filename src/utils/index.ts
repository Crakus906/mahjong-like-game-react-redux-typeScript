const shuffle = (array: Array<number>) => {
    return array.sort(() => Math.random() - 0.5);
}

export const generateMap = (size = 50) => {
    let map: Array<number> = [];

    while(map.length !== size) {
        const number = Math.floor(Math.random() * size + 1);
        if(!map.includes(number)) map = [...map, number, number];
    }

    return shuffle(map);
}
  