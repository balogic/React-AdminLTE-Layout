import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';

ReactDOM.render((<Router>
  <div>
    <Route exact="exact" path="/" render={(props) => (<App items=""/>)}/>
  </div>
</Router>), document.getElementById('root'));
