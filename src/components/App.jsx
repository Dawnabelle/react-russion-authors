import Error404 from './Error404';
import Nav from './Nav';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import AboutUs from './AboutUs';

function App(){
  return (
    <div>
      <style jsx>{`
          .appStyle {
            width: 1024px;
            margin: auto;
          }
            `}</style>
      <div className='appStyle'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path="/about" component={AboutUs}/>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
