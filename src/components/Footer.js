import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>
          <NavLink to="/"> Meet Team Bingus</NavLink>
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