const shuffle = (array: Array<number>) => {
    return array.sort(() => Math.random() - 0.5);
}

export const generateMap = (size = 50) => {
    let map: Array<number> = [];
 
    for (let i = 2; i <= size; i++) {
        let flag: Number = 1;

        if (i > 2 && i % 2 !== 0)
        {
            for (let j = 3; j*j <= i ; j=j+2)
            {
                if (i%j===0)
                {
                    flag=0;
                    break;
                }
            }
        }
        else if (i !== 2) flag = 0;
        if (flag===1) return map.push(i);
    }
    const finishArr: Array<number>  = [...map, ...map] 

    return shuffle(finishArr);
}