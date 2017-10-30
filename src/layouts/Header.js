import React from 'react'
import NavBar from './NavBar'
function Header() {
  return (
    <header className="main-header">
      <a href="/" className="logo">
        <span className="logo-mini">
          <b>J</b>S</span>
        <span className="logo-lg">
          <b>Text</b>Here</span>
      </a>
      <NavBar/>
    </header>
  )
}
export default Header;
