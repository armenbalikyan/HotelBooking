import React from 'react';
import Rooms from './screens/Rooms';
import Visitors from './screens/Visitors';
import Bookings from './screens/Bookings'
import './App.css';
import { HashRouter, Switch, Route, Redirect,NavLink } from 'react-router-dom'
const links = [
  'Rooms',
  'Bookings',
  'Visitors'
]
function App() {
  return (
    <HashRouter>
    <header />
    <nav>
        <div>
          {links.map(link => <NavLink className="headerLink" key={link} to={link}>{link}</NavLink>)}
        </div>
      </nav>
    <div className='app'>
      <Switch>
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/visitors" component={Visitors} /> 
        <Route render={() => <Redirect to='/Rooms' />} />
      </Switch>
    </div>
  </HashRouter>
  );
}

export default App;
