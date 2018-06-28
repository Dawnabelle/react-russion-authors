import Error404 from './Error404';
import Nav from './Nav';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';

function App(){
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
