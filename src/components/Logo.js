import React from 'react';
import '../style/Logo.css';
import freeCodeCampLogo from '../img/freecodecamp-logo.png';

function Logo() {
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' 
        />
      </div>
    );
}

export default Logo;