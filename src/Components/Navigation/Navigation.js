import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('SignIn')} className='f3 link dim black pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('SignIn')} className='f3 link dim black pa3 pointer'>SignIn</p>
          <p onClick={() => onRouteChange('Register')} className='f3 link dim black pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;