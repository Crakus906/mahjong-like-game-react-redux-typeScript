import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeSelector } from "../../redux/selector";
import { setActiveCards } from "../../redux/action";
import Card from "../../components/Card";

import st from "./style.module.scss";

export default function Home() {
  const dispatch = useDispatch();
  const { map, activeCards } = useSelector(homeSelector);

  const handleChooseCard = (number: number) => {
    const newActiveCards: Array<number> = [...activeCards, number]
    
    const size = newActiveCards.length;
    dispatch(setActiveCards(newActiveCards));

    const lastElem = newActiveCards[size - 1];
    const penultElem = newActiveCards[size - 2];
    const firstNumber = map[lastElem];
    const secondNumber = map[penultElem];

    if(size % 2 === 0 &&  firstNumber !== secondNumber) {
        setTimeout(() => {
            dispatch(setActiveCards(newActiveCards.slice(0, size - 2)));
        }, 300);
    }
  }

  useEffect(() => {
    setTimeout(() => {
        return dispatch(setActiveCards([]));
    }, 2000)
  }, [dispatch]);

  return ( 
    <div className={st.wrapper}>
        <div className={st.playground}>
            {map.map((number: number, i: number) => (
                <Card
                    key={i}
                    number={number}
                    handleClick={() => handleChooseCard(i)}
                    active={activeCards.includes(i)}
                />
            ))}
        </div>
    </div>
  );
}
