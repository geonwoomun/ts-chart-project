import * as React from 'react';

import ColumnItem from './ColumnItem';
import { useChartsState } from '../contexts/ChartContext';

const ColumnList = () => {
    const Charts = useChartsState()
    return (
        <ul>
          {Charts.map((chart) => <ColumnItem key={chart.id} chart={chart}/> )}   
        </ul>
    );
};

export default ColumnList;