import React from 'react';
import FieldRow from './FieldRow';

export default function Field(props) {


    const { fieldMap } = props;
    return (
        <div className={'field'} >
            {fieldMap.map((row, index) => {
                return (
                    <FieldRow
                        key={index}
                        row={row}
                        onClick={(y, x) => props.onClick(y, x)}
                    />
                )
            })}
        </div>
    )
}