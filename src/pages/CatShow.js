import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import toast from '../assets/Toast.jpeg'
import beans from '../assets/Beans.jpeg'
import granny from '../assets/Granny.png'
import smudge from '../assets/Smudge.jpeg'
import floppa from '../assets/Small_floppa.png'
import spoingus from '../assets/Spoingus.png'

class CatShow extends Component {
    constructor(props){
      super(props)
      this.state = {
        catArray: [toast, beans, granny, smudge, floppa, spoingus]
      }
    }
  catImage = (array) => {
    Math.floor(Math.random() * array)
  }
  render() {
    let {cat} = this.props
    return (
  
      <>
      <div className="body-container">
      <h3 id="showheader">Hey There I'm!</h3>
        
        { this.props.cat &&
          <>
          <div className="other-body-container">
          <p id="show-name">{this.props.cat.name}</p>
          <p id="show-age">{this.props.cat.age}</p>
          <p id="show-gender">{this.props.cat.gender}</p>
          <p id="show-breed">{this.props.cat.breed}</p>
          <p id="show-enjoy">{this.props.cat.enjoys}</p>   
          </div>
            <div id="show-img">
              <img className="images" src={toast} alt="catImage"onload="this.onload=null; this.src=catImage(catArray);"/>
              </div>
        
              <NavLink id="show-edit" to={`/catedit/${this.props.cat.id}`}>
              <Button onClick={() => `/catedit/${this.props.cat.id}`}>
                Edit Kitty
                </Button>
              </NavLink>
              <br />
              <NavLink id="show-delete" to="/catindex">
                <Button onClick={() => this.props.deleteCat(cat.id)}>
                  Delete this Kitty
                </Button>
              </NavLink>
              </>  
       }
       
      </div>
      </>
    )
  }
}
export default CatShow

