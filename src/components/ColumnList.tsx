import * as React from 'react';

import ColumnItem from './ColumnItem';
import { useChartsState } from '../contexts/ChartContext';

const ColumnList = () => {
  const Charts = useChartsState();
  return (
    <section>
      <ul>
        {Charts.map((chart) => (
          <ColumnItem key={chart.id} chart={chart} />
        ))}
      </ul>
    </section>
  );
};

export default ColumnList;
