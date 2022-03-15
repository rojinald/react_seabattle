import React from 'react';

export default function SeaBattleLog(props) {
    return (
        <div className="seabattlelog">
            <div className="seabattlelog-header">Логи игры</div>
            <ul className="seabattlelog-list">
                {props.logs.map((item, index) => {
                    return (
                        <li key={index}>{`${(index === 0) ? '' : String(index) + '.'} ${item}`}</li>
                    )
                })}
            </ul>
        </div>
    )
}