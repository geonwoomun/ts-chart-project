import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { ChartsContextProvider } from './contexts/ChartContext';
import Menu from './components/Menu';
import PieChart from './components/chart/PieChart';
import BarChart from './components/chart/BarChart';
import ColumnForm from './components/ColumnForm';
import ColumnList from './components/ColumnList';
import RadarChart from './components/chart/RadarChart';
import LineChart from './components/chart/LineChart';
import Title from './components/Title';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const ColumnSection = styled.section`
  display: flex;
`;

function App() {
  return (
    <ChartsContextProvider>
      <GlobalStyle/>
      <Menu />
      <ColumnSection>
        <ColumnForm />
        <ColumnList />
      </ColumnSection>
      <Title/>
      <main>
        <Switch>
          <Route exact path='/' render={() => <div>홈</div>} />
          <Route path='/pie' component={PieChart} />
          <Route path='/bar' component={BarChart} />
          <Route path='/Line' component={LineChart} />
          <Route path='/Radar' component={RadarChart} />
        </Switch>
      </main>

  
    </ChartsContextProvider>
  );
}

export default App;
