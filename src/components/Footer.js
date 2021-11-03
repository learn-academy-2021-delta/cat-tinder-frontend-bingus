import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer className="nav-links">
        <ul>
          <a href="https://skribbl.io/"target="blank"> Meet Team Bingus</a>
        </ul>
        <ul>
          <NavLink to="/catindex">Find your Me-atch</NavLink>
        </ul>
        <ul>
          <NavLink to="/catnew">Add a Playmate</NavLink>
        </ul>
      </footer>
    )
  }
}
export default Footer