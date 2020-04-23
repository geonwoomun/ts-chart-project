import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ChartsContextProvider } from './contexts/ChartContext';
import Menu from './components/Menu';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import ColumnForm from './components/ColumnForm';
import ColumnList from './components/ColumnList';
import RadarChart from './components/RadarChart';
import LineChart from './components/LineChart';

function App() {
  return (
    <ChartsContextProvider>
      <Menu />
      <ColumnForm />
      <ColumnList />
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
