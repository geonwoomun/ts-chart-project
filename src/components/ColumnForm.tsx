import * as React from 'react';
import { useCallback } from 'react';
import { useColumn } from '../hooks/useColumn';
import { useChartsDispatch } from '../contexts/ChartContext';
import { CompactPicker } from 'react-color';

const ColumnForm = () => {
  const dispatch = useChartsDispatch();

  const { column, onChangeColumn, onChangeColor, resetColumn } = useColumn();
  const { columnName, color, value } = column;

  const addColumn = useCallback(() => {
    dispatch({
      type: 'CREATE',
      payload: {
        columnName,
        value: Number(value),
        color,
      },
    });
    resetColumn();
  }, [column.columnName, column.color, column.value]);
  return (
    <section>
      <label htmlFor='name'>컬럼명</label>
      <input
        id='name'
        name='columnName'
        value={columnName}
        onChange={onChangeColumn}
      />
      <label htmlFor='value'>값</label>
      <input
        id='value'
        name='value'
        value={value}
        type='number'
        onChange={onChangeColumn}
      />
      {/* <label htmlFor="color">색</label>
         <input id="color" name="color" value={color} onChange={onChangeColumn}/> */}
      <CompactPicker color={color} onChangeComplete={onChangeColor} />
      <button onClick={addColumn}>추가</button>
    </section>
  );
};

export default ColumnForm;
