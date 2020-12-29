import React from 'react';
import './Header.css';
import logoUrl from './application.svg';
const Header = () => (
  <div className="header">
    { <img src={logoUrl} alt="Logo" /> }
  </div>
)
export default Header;