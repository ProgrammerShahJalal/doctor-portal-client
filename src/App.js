import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
