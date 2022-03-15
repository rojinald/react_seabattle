import React from 'react';

export default function Сell(props) {
    const { x, y, containsShip, shot, isShipVisible } = props;
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];
    const leftLine = (x === 0) ? true : false;
    const topLine = (y === 0) ? true : false;
    let marker;
    if (containsShip) {
        if (shot) {
            marker = 'X';
        } else {
            marker = '';
        }
    } else {
        if (shot) {
            marker = '·';
        } else {
            marker = '';
        }
    }
    return (
        <button className={`cell ${containsShip && isShipVisible ? 'visibleShip' : ''}`} onClick={props.onClick}>
            <div className="marker">{marker}</div>
            {leftLine ? <span className="leftLine">{numbers[y]}</span> : ''}
            {topLine ? <span className="topLine">{letters[x]}</span> : ''}
        </button>
    )
}