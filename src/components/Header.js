import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import bingusMyBeloved from '../assets/binjis-yes.png'

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">
          <img src={bingusMyBeloved} alt="logo for Cat Tinder" className="bingusMyBeloved"/>
        </NavLink>

        <h1 id="title">Cat Tinder</h1>
        
        <div className="nav-links">
          <ul>
            <NavLink to="/catindex">Find your Me-atch</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">Add a Playmate</NavLink>
          </ul>
          <ul>
            <a target="blank" href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" id="aspca">Adopt a Kitty</a>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header 