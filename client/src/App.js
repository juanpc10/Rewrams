import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { GlobalProvider } from './context/globalState';
import NavBar from './navBar/navBar';
import Dashboard from './dashboard/dashboard';
import About from './about/about';
import More from './more/more';
import Instagram from './channels/instagram/instagram';
// import Channels from './channels/channels';
// import Twitter from './channels/twitter/twitter';


function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <NavBar />
          <Switch >
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/instagram' component={Instagram}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/more' component={More}></Route>
            {/* <Route path='/channels' exact component={Channels}></Route> */}
            {/* <Route path='/channels/twitter' component={Twitter}></Route> */}
          </Switch>
        </div>
    </GlobalProvider>
      </Router>
  );
}

export default App;
