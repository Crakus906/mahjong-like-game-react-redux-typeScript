import React from 'react';
import cx from 'classnames';
import st from './style.module.scss';
import { CardPropsInterface } from './types';
 
export default function Card({ number, active, handleClick }: CardPropsInterface) {

    return (
        <div
            className={cx(st.cardContainer, {[st.active]: active})}
            onClick={handleClick}
        >
            <div
                className={st.number}
            >
                {number}
            </div>
        </div>
    )
}