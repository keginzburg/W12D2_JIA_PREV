import React from 'react';

const Logo = (props) => {
  return (
    <div onClick={props.visitRoot} className='logo-box'>
      <img src={window.smallLogo} alt="airbnb-logo" className='small-logo' />
      <h1 className='text-logo'>bearbnb</h1>
    </div>
  )
};

export default Logo;