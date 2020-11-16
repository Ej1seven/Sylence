import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route path='/menspage' component={MensPage} /> 
        <Route path='/shop' component={ShopPage} /> 
     </Switch>
    </div>
  );
}

export default App;
