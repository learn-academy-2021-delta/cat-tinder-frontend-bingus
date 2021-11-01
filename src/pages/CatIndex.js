import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return (
      <>
   
      
  
      <div className="body-container">
        
      <h3 id="indexheader">Meet Your Me-atch!</h3>
         <div className="index-body">
          {this.props.cats && this.props.cats.map(cat => {
          return ( 
              <p id="a-p" key={cat.id}>
                <NavLink to={`/catshow/${cat.id}`}>
                  {cat.name}
                </NavLink>
              </p>
           )
          })}
        </div>
      </div>
      
      </>
      
    )
  }
}
export default CatIndex