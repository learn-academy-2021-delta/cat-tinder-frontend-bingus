import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import toast from '../assets/Toast.jpeg'

class CatShow extends Component {
  render() {
    return (
      <>
      <div className="body-container">
      <h3 id="showheader">I am the Cat Show</h3>
        
        { this.props.cat &&
          <>
          <p id="show-name">{this.props.cat.name}</p>
          <p id="show-age">{this.props.cat.age}</p>
          <p id="show-gender">{this.props.cat.gender}</p>
          <p id="show-breed">{this.props.cat.breed}</p>
          <p id="show-enjoy">{this.props.cat.enjoys}</p>   
            <img className="images" src={toast} alt="toast the cat" />
        
              <NavLink id="show-edit" to={`/catedit/${this.props.cat.id}`}>
                Edit Kitty
              </NavLink>
              </>  
       }
       
      </div>
      </>
    )
  }
}
export default CatShow