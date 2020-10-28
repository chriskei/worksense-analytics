import React from 'react'
import Img from 'gatsby-image'
import { Navigation, NavLink } from './styled.js'

const NavBar = ( {data} ) => {
  return (
    <nav role="navigation">
      <Navigation>
        <NavLink to="/">
            <Img alt = {data.title}
            fixed = {data.logoImage.fixed} />
        </NavLink>
        <NavLink to="/ourProducts/">Our Products</NavLink>
        <NavLink to="/ourTeam/">Our Team</NavLink>
        <NavLink to="/requestDemo">Request Demo</NavLink>
      </Navigation>
    </nav>
  );
};

export default NavBar;