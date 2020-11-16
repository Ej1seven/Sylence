import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route path='/menspage' component={MensPage} /> 
     </Switch>
    </div>
  );
}

export default App;
