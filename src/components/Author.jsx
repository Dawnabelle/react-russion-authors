import React from 'react';
import PropTypes from 'prop-types';

function Author(props){
  return (
    <div>
      <div className='image'>
        <img src={props.image}></img>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

Author.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Author;
