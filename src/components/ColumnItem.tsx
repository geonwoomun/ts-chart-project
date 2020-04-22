import * as React from 'react';
import { useCallback } from 'react';
import {Chart, useChartsDispatch} from '../contexts/ChartContext';

type ChartProps = {
    chart: Chart
}

const ColumItem = ({chart}: ChartProps) => {
    const dispatch = useChartsDispatch();

   const onRemove = useCallback(() => {
       dispatch({
           type: 'DELETE',
           payload : {id: chart.id}
       })
   },[]);

    return (
        <li>
            {chart.columnName}
            {chart.value}
            {chart.color}
            <button onClick={onRemove}>X</button>
        </li>
    )
};

export default ColumItem;