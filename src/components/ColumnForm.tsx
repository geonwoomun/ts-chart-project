import * as React from 'react';
import { useCallback } from 'react';
import { useColumn } from '../hooks/useColumn';
import { useChartsDispatch } from '../contexts/ChartContext';

const ColumnForm = () => {
    const dispatch = useChartsDispatch();

    const { column, onChangeColumn, resetColumn } = useColumn();
    const { columnName, color, value } = column;
    
    const addColumn = useCallback(() => {
        dispatch({
            type:"CREATE",
            payload:{
                columnName,
                value,
                color
            }
        });
        resetColumn();
    }, [column.columnName, column.color, column.value]);
    return (
        <div>
         <label htmlFor="name">컬럼명</label>
         <input id="name" name="columnName" value={columnName} onChange={onChangeColumn}/>
         <label htmlFor="value">값</label>
         <input id="value" name="value" value={value} type="number"  onChange={onChangeColumn}/>
         <label htmlFor="color">색</label>
         <input id="color" name="color" value={color} onChange={onChangeColumn}/>
         <button onClick={addColumn}>추가</button>
        </div>
    );
};

export default ColumnForm;