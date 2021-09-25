import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Add from './components/Add';
import List from './components/List';


function App() {
  
  return (
    <div className="App">
      <Router>
        <ul className="navbar">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/add">CREATE</Link>
          </li>
        </ul>
        <div>
        </div>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
