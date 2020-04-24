import * as React from 'react';
import { useCallback } from 'react';
import {Chart, useChartsDispatch} from '../contexts/ChartContext';
import styled from 'styled-components';

type ChartProps = {
    chart: Chart
}

const ColumItemli = styled.li`
    border: 1px solid black;
    margin-right: 10px;
    width: 120px;
    height: 100px;
    display:flex;
    flex-direction: column;
    & .column-color {
        display: inline-block;
        width: 20px;
        height :10px;
        background: ${props => props.color}
    }
    & button {
        margin: 0 auto;
        padding:0;
        margin-top: auto;
        width: 100%;
        color : #fff;
        background: #ff7675;
        border: none;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

const ColumItem = ({chart}: ChartProps) => {
   const dispatch = useChartsDispatch();

   const onRemove = useCallback(() => {
       dispatch({
           type: 'COLUMN/DELETE',
           payload : {id: chart.id}
       })
   },[]);

    return (
        <ColumItemli color={chart.color}>
            <div>컬럼명: {chart.columnName}</div>
            <div>값: {chart.value}</div>
            <div>색: <span className="column-color"></span></div>
            <button onClick={onRemove}>삭제</button>
        </ColumItemli>
    )
};

export default ColumItem;