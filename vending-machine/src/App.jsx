import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Chips from './components/Chips';
import Sardines from './components/Sardines';
import Soda from './components/Soda';
import VendingMachine from './components/VendingMachine';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={VendingMachine} />
          <Route exact path='/soda' component={Soda} />
          <Route exact path='/chips' component={Chips} />
          <Route exact path='/sardines' component={Sardines} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
