const shuffle = (array: Array<number>) => {
    return array.sort(() => Math.random() - 0.5);
}

const isPrime = (num: number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

export const generateMap = (size: number = 50) => {
    let map: Array<number> = [1, 2, 3];

    for (let i = 4; i <= size; i++) if(isPrime(i)) map.push(i);

    return shuffle([...map, ...map]);
}