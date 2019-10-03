import React from 'react';
//Navbar
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Dykkerudstyr from './components/dukkerudstyr/Dukkerudstyr';
import Dykkerrejser from './components/dykkerrejser/Dykkerrejser';
import Dykkerkurser from './components/dykkerkurser/Dykkerkurser';
import Kontakt from './components/kontakt/Kontakt';
import Omos from './components/omos/Omos';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dykkerudstyr" component={Dykkerudstyr} />
          <Route path="/dykkerrejser" component={Dykkerrejser} />
          <Route path="/dykkerkurser" component={Dykkerkurser} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/omos" component={Omos} />
          <Route path="/login" component={Login}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
