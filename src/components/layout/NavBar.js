import React from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/navBar.css';

const NavBar = () => {
  return (
    <nav className='flex'>
      <img src={logo} alt='logo' />
    </nav>
  );
};

export default NavBar;
