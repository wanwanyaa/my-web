import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react'
import Index from './views/home'
function App() {
  return (
    <Switch>
      <Route path='/home' component={ Index }></Route>
      <Redirect to='/home'></Redirect>
    </Switch>
  );
}

export default App;
