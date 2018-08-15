import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import './App.css';

// import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Head from './components/Header';

import {Provider} from './Context'

function Loading({ pastDelay }) {
  return pastDelay ? <h3>Loading...</h3> : null;
}

const LoadableContact = Loadable({
  loader: () => import('./components/Contact'),
  loading: Loading,
  delay: 2000
});

class App extends Component {
  render() {
    return (
      <Provider>
       <Router>
        <div className="App">
        <Head/>

        

        <Switch>
          <Route  exact path = "/" component = {Home}/>
          <Route  path = "/contact" component = {LoadableContact}/>
          <Route  path = "/about" component = {About}/>
        </Switch>

      </div>
      </Router>

      </Provider>
    );
  }
}

export default App;
// <Provider>
// <Router>
//   <div className="App">
//       <Header branding = {'Contact Manager'}/>  

//       <Switch>
//         <Route  exact path = "/" component = {Contacts}/>
//         <Route  path = "/contact" component = {AddContact}/>
//         <Route  path = "/about" component = {About}/>
        
//       </Switch>

//   </div>
// </Router>
// </Provider>