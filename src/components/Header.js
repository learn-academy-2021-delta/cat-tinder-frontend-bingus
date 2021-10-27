import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import bingusMyBeloved from '../assets/bingus-my-beloved.jpeg'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Cat Tinder </h1>
        <NavLink to="/">
          <img src={bingusMyBeloved} alt="logo for Cat Tinder" className="bingusMyBeloved"/>
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink to="/catindex">Find your Me-atch</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">Add Playmate</NavLink>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header 