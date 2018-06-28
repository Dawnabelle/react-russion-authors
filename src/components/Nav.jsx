import React from 'react';
import {Link} from 'react-router-dom';


function Nav(){
  return(
    <div>

      <style jsx>{`
          .NavStyle {
            display: flex;
            justify-content: space-between;
          }
          `}
      </style>
      <div className='NavStyle'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
}

export default Nav;
