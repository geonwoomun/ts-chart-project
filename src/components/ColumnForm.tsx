import * as React from 'react';
import { useColumn } from '../hooks/useColumn';
import { CompactPicker } from 'react-color';
import styled from 'styled-components';

const ColumnFormSection = styled.article`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 245px;
`;

const ColumnForm = () => {

  const { column, onChangeColumn, onChangeColor, addColumn } = useColumn();
  const { columnName, color, value } = column;


  return (
    <ColumnFormSection>
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
    </ColumnFormSection>
  );
};

export default ColumnForm;
