import * as React from 'react';

import ColumnItem from './ColumnItem';
import { useChartsState } from '../contexts/ChartContext';
import styled from 'styled-components';

const ColumnListArticle = styled.article`
  margin-left: 10px;
  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    height: 250px;
    overflow-y: auto;
  }
`;

const ColumnList = () => {
  const {chartsState} = useChartsState();
  return (
    <ColumnListArticle>
      <span>현재 추가 된 컬럼</span>
      <ul>
        {chartsState.map((chart) => (
          <ColumnItem key={chart.id} chart={chart} />
        ))}
      </ul>
    </ColumnListArticle>
  );
};

export default ColumnList;
