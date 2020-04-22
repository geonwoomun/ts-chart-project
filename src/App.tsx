import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ChartsContextProvider } from './contexts/ChartContext';
import Menu from './components/Menu';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import ColumnForm from './components/ColumnForm';
import ColumnList from './components/ColumnList';

function App() {
  return (
    <ChartsContextProvider>
      <Menu/>
      <ColumnForm/>
      <ColumnList/>
      <Switch>
        <Route exact path='/' render={() => <div>홈</div>} />
        <Route path='/pie' component={PieChart} />
        <Route path='/bar' component={BarChart} />
      </Switch>
    </ChartsContextProvider>
  );
}

export default App;