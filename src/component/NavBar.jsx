import React from 'react'
import Logo from "../images/airbnb-logo.png"

export default function NavBar() {
  return (
    <nav>
    <img src={Logo} alt='logo' className="nav--logo" />
</nav>
  )
}
