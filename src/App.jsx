import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import People from './views/People';
import Planets from './views/Planets';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Search/>
    <Switch>

      <Route exact path="/People/:id">
        <h1>People Page</h1>
        <People/>
      </Route>

      <Route exact path="/Planets/:id">
        <h1>PLANET PAGE</h1>
        <Planets/>
      </Route>

    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
