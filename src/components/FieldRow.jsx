import React from 'react';
import Сell from './Сell'

export default function FieldRow(props) {
    const { row } = props;
    return (
        <div className="field-row">
            {row.map((square, index) => {
                return (
                    <Сell
                        key={index}
                        x={square.x}
                        y={square.y}
                        containsShip={square.containsShip}
                        shot={square.shot}
                        isShipVisible={square.isShipVisible}
                        onClick={() => props.onClick(square.y, square.x)}
                    />
                )
            })}
        </div>
    )
}