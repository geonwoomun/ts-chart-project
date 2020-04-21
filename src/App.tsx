import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ChartsContextProvider } from './contexts/ChartContext';
import Menu from './components/Menu';
import Pie from './components/Pie';
import Bar from './components/Bar';

function App() {
  return (
    <ChartsContextProvider>
      <Menu/>
      <Switch>
        <Route exact path='/' render={() => <div>홈</div>} />
        <Route path='/pie' component={Pie} />
        <Route path='/bar' component={Bar} />
      </Switch>
    </ChartsContextProvider>
  );
}

export default App;