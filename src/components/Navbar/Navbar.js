import React from 'react';

import './Navbar.css';
import piePic from '../../assets/pie.jpg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
  return(
    <nav>
      <img src={piePic} alt="Pie Picture" />
      <Logout logout={props.logout}/>
    </nav>
  )
}

export default Navbar;